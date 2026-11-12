type EnquiryValue = string | null | undefined;

export async function submitEnquiry(
  fields: Record<string, EnquiryValue>,
): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL?.trim();
  const mailTo = process.env.NEXT_PUBLIC_FORM_MAIL_TO?.trim();
  const mailCc = process.env.NEXT_PUBLIC_FORM_MAIL_CC?.trim() ?? "";

  if (!endpoint) {
    throw new Error("The enquiry form endpoint is not configured.");
  }
  if (!mailTo) {
    throw new Error("The enquiry form recipient is not configured.");
  }

  let endpointUrl: URL;
  try {
    endpointUrl = new URL(endpoint);
  } catch {
    throw new Error("The enquiry form endpoint is not a valid URL.");
  }
  if (endpointUrl.protocol !== "https:") {
    throw new Error("The enquiry form endpoint must use HTTPS.");
  }

  await new Promise<void>((resolve, reject) => {
    const requestId = crypto.randomUUID();
    const frameName = `enquiry-${requestId}`;
    const iframe = document.createElement("iframe");
    iframe.name = frameName;
    iframe.title = "Enquiry submission";
    iframe.hidden = true;

    const form = document.createElement("form");
    form.method = "POST";
    form.action = endpointUrl.toString();
    form.target = frameName;
    form.enctype = "application/x-www-form-urlencoded";
    form.hidden = true;

    const payload: Record<string, EnquiryValue> = {
      ...fields,
      mail_to: mailTo,
      mail_cc: mailCc,
      request_id: requestId,
    };

    Object.entries(payload).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value ?? "";
      form.appendChild(input);
    });

    const cleanup = () => {
      window.removeEventListener("message", handleMessage);
      window.clearTimeout(timeout);
      form.remove();
      iframe.remove();
    };

    const handleMessage = (event: MessageEvent) => {
      let responseHostname: string;
      try {
        responseHostname = new URL(event.origin).hostname;
      } catch {
        return;
      }

      const isGoogleOrigin =
        responseHostname === "script.google.com" ||
        responseHostname === "script.googleusercontent.com" ||
        responseHostname === "googleusercontent.com" ||
        responseHostname.endsWith(".googleusercontent.com") ||
        responseHostname === "google.com" ||
        responseHostname.endsWith(".google.com");

      if (
        !isGoogleOrigin ||
        event.data?.type !== "rivera-enquiry-result" ||
        event.data?.requestId !== requestId
      ) {
        return;
      }

      cleanup();
      if (event.data.status === "success") {
        resolve();
      } else {
        reject(
          new Error(
            typeof event.data.message === "string"
              ? event.data.message
              : "The enquiry could not be sent.",
          ),
        );
      }
    };

    const timeout = window.setTimeout(() => {
      cleanup();
      reject(
        new Error(
          "The enquiry service did not return a confirmation. Check the Apps Script deployment and try again.",
        ),
      );
    }, 20000);

    window.addEventListener("message", handleMessage);
    document.body.append(iframe, form);
    form.submit();
  });
}
