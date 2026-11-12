/**
 * =========================================================================
 * SAMWARTHIKA RIVERA - ENQUIRY FORM GOOGLE APPS SCRIPT
 * =========================================================================
 * 
 * Features:
 * - Records enquiry leads directly into Google Sheets
 * - Sends beautiful HTML & plain-text email notifications with reply-to
 * - Dual-layer email dispatcher (MailApp with GmailApp fallback)
 * - Safe validation, sanitization, and formula-injection protection
 * - Works with both form-urlencoded submissions (iframe postMessage) & JSON fetch
 * - doGet() diagnostic endpoint to check deployment status and email quota
 * - Built-in test functions (testSendEmail) for easy 1-click Google authorization
 * =========================================================================
 */

// ---------------------- DEFAULT CONFIGURATION ---------------------------
// You can override these in Apps Script Project Settings -> Script Properties,
// but the script will automatically use these defaults if properties are empty.
var CONFIG = {
  DEFAULT_MAIL_TO: "samwarthikarivera@gmail.com",
  DEFAULT_MAIL_CC: "techsupport@kay.org.in",
  SHEET_NAME: "Enquiries",
  SENDER_NAME: "Samwarthika Rivera Website"
};

/**
 * Handle incoming POST requests from the website
 */
function doPost(e) {
  var data = extractPayload_(e);
  var requestId = String(data.request_id || Utilities.getUuid());
  var lock = LockService.getScriptLock();

  try {
    // 1. Basic validation
    validateEnquiryData_(data);

    // 2. Resolve email recipients safely
    var recipients = resolveRecipients_(data);

    // 3. Acquire lock to prevent spreadsheet race conditions
    var hasLock = lock.tryLock(10000);
    if (!hasLock) {
      console.warn("Could not acquire lock within 10 seconds, proceeding with caution.");
    }

    // 4. Save entry to Google Sheet (if configured/bound)
    var sheetSaved = false;
    var sheetErrorMessage = "";
    try {
      var sheet = getOrCreateEnquirySheet_();
      if (sheet) {
        sheet.appendRow([
          new Date(),
          safeSheetValue_(data.name, 120),
          safeSheetValue_(data.email, 254),
          safeSheetValue_(data.phone, 50),
          safeSheetValue_(data.country, 100),
          safeSheetValue_(data.city, 100),
          safeSheetValue_(data.treatment, 200),
          safeSheetValue_(data.message, 5000),
          safeSheetValue_(data.website, 200),
          safeSheetValue_(data.ipaddress, 64),
          safeSheetValue_(data.enquiry_date, 30),
          safeSheetValue_(data.enquiry_time, 30),
          safeSheetValue_(requestId, 64)
        ]);
        sheetSaved = true;
      }
    } catch (sheetError) {
      sheetErrorMessage = sheetError.message || String(sheetError);
      console.error("Spreadsheet write warning (request_id=" + requestId + "): " + sheetErrorMessage);
    }

    // 5. Send Email Notification
    var emailSent = false;
    var emailErrorMessage = "";
    try {
      sendEnquiryEmail_(data, recipients, requestId);
      emailSent = true;
    } catch (emailError) {
      emailErrorMessage = emailError.message || String(emailError);
      console.error("Email delivery failed (request_id=" + requestId + "): " + emailErrorMessage);
    }

    // If both failed, return an error response
    if (!sheetSaved && !emailSent) {
      throw new Error(
        "Service temporarily unavailable. " +
        (emailErrorMessage ? "Email error: " + emailErrorMessage : "")
      );
    }

    // If email failed but sheet succeeded, log it but return appropriate status
    if (!emailSent) {
      console.warn("Enquiry saved to sheet, but email failed: " + emailErrorMessage);
      return createResponse_(e, requestId, "success", "Enquiry recorded successfully.");
    }

    return createResponse_(e, requestId, "success", "Submitted successfully.");

  } catch (error) {
    var errorMsg = error.message || String(error);
    console.error("Enquiry submission failed (request_id=" + requestId + "): " + errorMsg);
    return createResponse_(e, requestId, "error", errorMsg);
  } finally {
    try {
      if (lock.hasLock()) {
        lock.releaseLock();
      }
    } catch (e) {}
  }
}

/**
 * Handle GET requests - useful for checking if Web App is live & reviewing email quota
 */
function doGet(e) {
  var remainingQuota = 0;
  try {
    remainingQuota = MailApp.getRemainingDailyQuota();
  } catch (err) {
    remainingQuota = "Unknown / Auth needed";
  }

  var scriptProperties = PropertiesService.getScriptProperties().getProperties();
  var configuredTo = scriptProperties["FORM_MAIL_TO"] || CONFIG.DEFAULT_MAIL_TO;
  var configuredCc = scriptProperties["FORM_MAIL_CC"] || CONFIG.DEFAULT_MAIL_CC;
  var spreadsheetId = scriptProperties["SPREADSHEET_ID"] || "(Bound to active spreadsheet)";

  var html = "<!DOCTYPE html><html><head><title>Rivera Enquiry Service</title>" +
    "<style>body{font-family:Arial,sans-serif;padding:30px;line-height:1.6;color:#333;background:#f9fbf9}" +
    ".card{background:#fff;padding:24px;border-radius:12px;box-shadow:0 2px 10px rgba(0,0,0,0.08);max-width:600px;margin:auto}" +
    "h2{color:#19805a;margin-top:0}.tag{background:#D7F7EB;color:#19805a;padding:4px 10px;border-radius:20px;font-size:13px;font-weight:bold}" +
    "table{width:100%;border-collapse:collapse;margin-top:15px}td{padding:8px;border-bottom:1px solid #eee}td.label{font-weight:bold;color:#555;width:40%}</style></head>" +
    "<body><div class='card'><h2>Rivera Enquiry Webhook <span class='tag'>ACTIVE</span></h2>" +
    "<p>This Google Apps Script Web App is deployed and running normally.</p>" +
    "<table>" +
    "<tr><td class='label'>Daily Email Quota Remaining:</td><td><strong>" + remainingQuota + "</strong></td></tr>" +
    "<tr><td class='label'>Recipient (To):</td><td>" + escapeHtml_(configuredTo) + "</td></tr>" +
    "<tr><td class='label'>Recipient (CC):</td><td>" + escapeHtml_(configuredCc) + "</td></tr>" +
    "<tr><td class='label'>Spreadsheet:</td><td>" + escapeHtml_(spreadsheetId) + "</td></tr>" +
    "</table><p style='color:#777;font-size:12px;margin-top:20px'>Timestamp: " + new Date().toISOString() + "</p>" +
    "</div></body></html>";

  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Extract payload from both form-urlencoded parameters and JSON postData
 */
function extractPayload_(e) {
  var data = {};
  if (e && e.parameter && Object.keys(e.parameter).length > 0) {
    for (var key in e.parameter) {
      data[key] = e.parameter[key];
    }
  } else if (e && e.postData && e.postData.contents) {
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      console.warn("Could not parse JSON postData, attempting url decode.");
      var parts = e.postData.contents.split("&");
      for (var i = 0; i < parts.length; i++) {
        var pair = parts[i].split("=");
        if (pair.length === 2) {
          data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1].replace(/\+/g, " "));
        }
      }
    }
  }
  return data;
}

/**
 * Validate required fields
 */
function validateEnquiryData_(data) {
  var name = String(data.name || "").trim();
  var email = String(data.email || "").trim();
  var phone = String(data.phone || "").trim();
  var message = String(data.message || "").trim();

  if (!name) throw new Error("Please provide your name.");
  if (!email) throw new Error("Please provide your email address.");
  if (!phone) throw new Error("Please provide your phone number.");
  if (!message) throw new Error("Please provide a message.");

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Invalid email address format.");
  }
  if (name.length > 120) throw new Error("Name is too long.");
  if (phone.length > 50) throw new Error("Phone number is too long.");
  if (message.length > 5000) throw new Error("Message is too long.");
}

/**
 * Determine email recipients with multiple fallbacks
 */
function resolveRecipients_(data) {
  var properties = PropertiesService.getScriptProperties();
  
  // 1. Script properties priority, then submitted data, then default constants
  var toValue = properties.getProperty("FORM_MAIL_TO") || data.mail_to || CONFIG.DEFAULT_MAIL_TO;
  var ccValue = properties.getProperty("FORM_MAIL_CC") || data.mail_cc || CONFIG.DEFAULT_MAIL_CC;

  var toList = parseEmailList_(toValue);
  var ccList = parseEmailList_(ccValue);

  if (toList.length === 0) {
    toList = [CONFIG.DEFAULT_MAIL_TO];
  }

  return {
    to: toList.join(","),
    cc: ccList.length > 0 ? ccList.join(",") : ""
  };
}

/**
 * Parse and validate comma-separated email strings
 */
function parseEmailList_(str) {
  if (!str) return [];
  return String(str)
    .split(",")
    .map(function(item) { return item.trim(); })
    .filter(function(item) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item);
    });
}

/**
 * Get the Google Sheet or create headers if blank
 */
function getOrCreateEnquirySheet_() {
  var properties = PropertiesService.getScriptProperties();
  var spreadsheetId = properties.getProperty("SPREADSHEET_ID");
  var spreadsheet = null;

  if (spreadsheetId) {
    spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  } else {
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  }

  if (!spreadsheet) {
    console.warn("No bound spreadsheet found and no SPREADSHEET_ID configured in Script Properties.");
    return null;
  }

  var sheetName = properties.getProperty("SHEET_NAME") || CONFIG.SHEET_NAME;
  var sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.getActiveSheet();
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
    }
  }

  // Setup header row if sheet is completely new / empty
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Country",
      "City",
      "Treatment",
      "Message",
      "Website",
      "IP Address",
      "Enquiry Date",
      "Enquiry Time",
      "Request ID"
    ];
    sheet.appendRow(headers);
    
    // Style header row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#19805A");
    headerRange.setFontColor("#FFFFFF");
    try {
      sheet.setFrozenRows(1);
    } catch (e) {}
  }

  return sheet;
}

/**
 * Send enquiry notification email (HTML + Plain Text)
 */
function sendEnquiryEmail_(data, recipients, requestId) {
  var name = cleanText_(data.name, 120);
  var email = cleanText_(data.email, 254);
  var phone = cleanText_(data.phone, 50);
  var country = cleanText_(data.country, 100);
  var city = cleanText_(data.city, 100);
  var treatment = cleanText_(data.treatment, 200) || "General Consultation";
  var message = cleanText_(data.message, 5000);
  var website = cleanText_(data.website, 200) || "www.samwarthikarivera.com";
  var enquiryDate = cleanText_(data.enquiry_date, 30);
  var enquiryTime = cleanText_(data.enquiry_time, 30);
  var ipAddress = cleanText_(data.ipaddress, 64);

  var formattedDate = enquiryDate && enquiryTime ? enquiryDate + " at " + enquiryTime : new Date().toLocaleString();

  var subject = "New Website Enquiry - " + (name ? name + " (" + treatment + ")" : "Samwarthika Rivera");

  // Plain text version
  var textBody = 
    "You have received a new enquiry from " + website + "\n\n" +
    "--------------------------------------------------\n" +
    "ENQUIRY DETAILS\n" +
    "--------------------------------------------------\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone + "\n" +
    "Treatment: " + treatment + "\n" +
    "City: " + (city || "N/A") + "\n" +
    "Country: " + (country || "N/A") + "\n" +
    "Message:\n" + message + "\n\n" +
    "--------------------------------------------------\n" +
    "SUBMISSION INFO\n" +
    "--------------------------------------------------\n" +
    "Submitted: " + formattedDate + "\n" +
    "IP Address: " + (ipAddress || "N/A") + "\n" +
    "Request ID: " + requestId + "\n";

  // Rich HTML version
  var htmlBody = 
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '<meta charset="utf-8">' +
    '<style>' +
      'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f5; margin: 0; padding: 20px; }' +
      '.container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); }' +
      '.header { background: linear-gradient(135deg, #19805a 0%, #11573c 100%); color: #ffffff; padding: 24px 30px; text-align: left; }' +
      '.header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }' +
      '.header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.9; }' +
      '.content { padding: 30px; }' +
      '.badge { display: inline-block; background-color: #D7F7EB; color: #19805a; font-weight: bold; font-size: 13px; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; }' +
      '.field-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }' +
      '.field-table td { padding: 12px 10px; border-bottom: 1px solid #edf2ef; vertical-align: top; }' +
      '.field-label { width: 30%; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; }' +
      '.field-value { width: 70%; color: #1f2937; font-size: 15px; font-weight: 500; }' +
      '.message-box { background: #f9fbf9; border-left: 4px solid #19805a; padding: 15px 18px; border-radius: 4px; color: #2d3748; font-size: 14px; line-height: 1.6; margin-top: 10px; white-space: pre-wrap; }' +
      '.footer { background: #f9fbf9; border-top: 1px solid #eef2ef; padding: 16px 30px; font-size: 12px; color: #80847b; }' +
      '.footer-item { margin: 3px 0; }' +
    '</style>' +
    '</head>' +
    '<body>' +
      '<div class="container">' +
        '<div class="header">' +
          '<h1>New Website Enquiry</h1>' +
          '<p>Received from ' + escapeHtml_(website) + '</p>' +
        '</div>' +
        '<div class="content">' +
          '<div class="badge">' + escapeHtml_(treatment) + '</div>' +
          '<table class="field-table">' +
            '<tr>' +
              '<td class="field-label">Name</td>' +
              '<td class="field-value"><strong>' + escapeHtml_(name) + '</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td class="field-label">Email</td>' +
              '<td class="field-value"><a href="mailto:' + encodeURIComponent(email) + '" style="color:#19805a;text-decoration:none;">' + escapeHtml_(email) + '</a></td>' +
            '</tr>' +
            '<tr>' +
              '<td class="field-label">Phone</td>' +
              '<td class="field-value"><a href="tel:' + encodeURIComponent(phone.replace(/[^0-9+]/g, '')) + '" style="color:#19805a;text-decoration:none;">' + escapeHtml_(phone) + '</a></td>' +
            '</tr>' +
            '<tr>' +
              '<td class="field-label">Location</td>' +
              '<td class="field-value">' + escapeHtml_(city ? city + (country ? ", " + country : "") : (country || "Not specified")) + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td class="field-label">Treatment</td>' +
              '<td class="field-value">' + escapeHtml_(treatment) + '</td>' +
            '</tr>' +
          '</table>' +
          '<div style="font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;margin-top:15px;letter-spacing:0.03em;">Message:</div>' +
          '<div class="message-box">' + escapeHtml_(message) + '</div>' +
        '</div>' +
        '<div class="footer">' +
          '<div class="footer-item"><strong>Date:</strong> ' + escapeHtml_(formattedDate) + '</div>' +
          '<div class="footer-item"><strong>IP Address:</strong> ' + escapeHtml_(ipAddress || "Unknown") + '</div>' +
          '<div class="footer-item"><strong>Request ID:</strong> ' + escapeHtml_(requestId) + '</div>' +
        '</div>' +
      '</div>' +
    '</body>' +
    '</html>';

  var mailOptions = {
    to: recipients.to,
    subject: subject,
    body: textBody,
    htmlBody: htmlBody,
    name: CONFIG.SENDER_NAME
  };

  if (recipients.cc) {
    mailOptions.cc = recipients.cc;
  }

  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    mailOptions.replyTo = email;
  }

  // Attempt MailApp first, fallback to GmailApp
  try {
    MailApp.sendEmail(mailOptions);
    console.log("Email sent successfully via MailApp to: " + recipients.to);
  } catch (mailAppErr) {
    console.warn("MailApp failed (" + mailAppErr.message + "), attempting GmailApp fallback...");
    var gmailOptions = {
      htmlBody: htmlBody,
      name: CONFIG.SENDER_NAME
    };
    if (recipients.cc) gmailOptions.cc = recipients.cc;
    if (mailOptions.replyTo) gmailOptions.replyTo = mailOptions.replyTo;

    GmailApp.sendEmail(recipients.to, subject, textBody, gmailOptions);
    console.log("Email sent successfully via GmailApp to: " + recipients.to);
  }
}

/**
 * Sanitize strings for sheet cells to prevent formula injection
 */
function safeSheetValue_(value, maxLength) {
  var text = cleanText_(value, maxLength);
  if (/^[=+\-@\t\r]/.test(text)) {
    return "'" + text;
  }
  return text;
}

/**
 * Clean control characters and limit length
 */
function cleanText_(value, maxLength) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .substring(0, maxLength || 5000);
}

/**
 * Escape HTML special characters for email template safety
 */
function escapeHtml_(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Return response matching frontend iframe postMessage protocol
 */
function createResponse_(e, requestId, status, message) {
  var safeRequestId = String(requestId || "").replace(/[^a-zA-Z0-9-]/g, "");
  
  var payload = JSON.stringify({
    type: "rivera-enquiry-result",
    requestId: safeRequestId,
    status: status,
    message: message
  }).replace(/</g, "\\u003c");

  var htmlContent = 
    "<!doctype html><html><body><script>" +
    "(function() {" +
    "  var msg = " + payload + ";" +
    "  try { if (window.parent) window.parent.postMessage(msg, '*'); } catch(e) {}" +
    "  try { if (window.top) window.top.postMessage(msg, '*'); } catch(e) {}" +
    "  try { if (window.opener) window.opener.postMessage(msg, '*'); } catch(e) {}" +
    "})();" +
    "</script></body></html>";

  return HtmlService.createHtmlOutput(htmlContent)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// -------------------------------------------------------------------------
// TEST & AUTHORIZATION UTILITIES
// Run this function directly from the Apps Script Editor toolbar to grant
// permissions and verify that emails are reaching your inbox!
// -------------------------------------------------------------------------
function testSendEmail() {
  var testData = {
    name: "Test User",
    email: CONFIG.DEFAULT_MAIL_TO,
    phone: "+91 9876543210",
    country: "India",
    city: "Kochi",
    treatment: "Ayurveda Treatment (Test)",
    message: "This is a test submission from the Google Apps Script testSendEmail() function.",
    website: "www.samwarthikarivera.com",
    ipaddress: "127.0.0.1",
    enquiry_date: "08-10-2026",
    enquiry_time: "03:45 PM",
    request_id: Utilities.getUuid()
  };

  var recipients = resolveRecipients_(testData);
  Logger.log("Testing email with recipients: " + JSON.stringify(recipients));
  sendEnquiryEmail_(testData, recipients, testData.request_id);
  Logger.log("Test email successfully sent!");
}

function testSaveEnquiry() {
  var testData = {
    name: "Test User",
    email: CONFIG.DEFAULT_MAIL_TO,
    phone: "+91 9876543210",
    country: "India",
    city: "Kochi",
    treatment: "Ayurveda Treatment (Test)",
    message: "Testing spreadsheet logging function.",
    website: "www.samwarthikarivera.com",
    ipaddress: "127.0.0.1",
    enquiry_date: "08-10-2026",
    enquiry_time: "03:45 PM",
    request_id: Utilities.getUuid()
  };

  var mockEvent = {
    parameter: testData
  };

  var result = doPost(mockEvent);
  Logger.log("doPost test executed successfully. Content length: " + result.getContent().length);
}
