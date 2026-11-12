document.addEventListener('DOMContentLoaded', () => {
  const ctaSelector = '.nav-cta-btn, #btnHeroSubmit, .btn-inquire-program, .dinacharya-card, .btn-gold, .btn-outline-white, .mobile-btn-book, .mobile-btn-call';
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest(ctaSelector) : null;
    if (!target) return;

    const location = target.closest('section, header, .mobile-bottom-bar');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
      cta_text: target.textContent.trim().replace(/\s+/g, ' '),
      cta_url: target.getAttribute('href') || '',
      cta_location: location ? (location.id || location.classList[0] || location.tagName.toLowerCase()) : 'unknown',
      cta_program: target.getAttribute('data-program') || ''
    });
  });

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // 2. Smooth Scroll Reveal on Scroll
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // 3. Sticky Navbar Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==============================================================================
  // 3. Lead Capture & Appointment Form Handling, Validation & Webhook Submission
  // ==============================================================================
  const FORM_CONFIG = {
    // Paste your deployed Google Apps Script Web App URL here:
    scriptURL: "https://script.google.com/macros/s/AKfycby-t4gHWXBUIJd_S52m9KMAv8Nn92DzTfYvFLb6H9SlAE6XAAByAJYsRmr7F9i_JQ6K/exec",
    
    // Choose/change your recipient email addresses right here:
    toEmail: "techsupport@kay.org.in",   // Primary recipient email (dynamic)
    ccEmail: "noor.mohamed@kay.org.in, dhaya@kay.org.in, samwarthikarivera@gmail.com",  // CC recipient email(s), comma-separated (or leave "" if none)
    
    // Redirection page upon successful submission:
    redirectURL: "thankyou.html",
    pageTitle: "Samwarthika Rivera - Hero Booking Form"
  };

  const appointmentForm = document.getElementById('appointmentForm') || document.getElementById('heroBookingForm');
  const phoneInput = document.getElementById('phone') || document.getElementById('phoneNumber');
  const nameInputField = document.getElementById('name') || document.getElementById('fullName');
  const emailInputField = document.getElementById('email') || document.getElementById('userEmail');
  const programSelectField = document.getElementById('programSelect') || document.getElementById('course');
  const messageInputField = document.getElementById('userMessage') || document.getElementById('message');
  const submitBtn = document.getElementById('btnHeroSubmit') || (appointmentForm ? appointmentForm.querySelector('button[type="submit"]') : null);
  const successModal = document.getElementById('successModal') || document.getElementById('confirmationModal');
  const closeSuccess = document.getElementById('closeSuccess') || document.getElementById('closeModalBtn');
  const modalGuestName = document.getElementById('modalGuestName');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();

      let name = nameInputField ? nameInputField.value.trim() : '';
      let email = emailInputField ? emailInputField.value.trim() : '';
      let phone = phoneInput ? phoneInput.value.trim() : '';
      let program = programSelectField ? programSelectField.value : 'Ayurvedic Wellness Retreat';
      let message = messageInputField ? messageInputField.value.trim() : '';

      // Name validation (only text and spaces, no special characters or numbers)
      if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Name should contain only letters and spaces (no special characters or numbers).');
        if (nameInputField) nameInputField.focus();
        return;
      }

      // Email validation (allowing standard email special chars @ . _ - +) if email is present
      if (emailInputField && email) {
        let emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailCheck.test(email)) {
          alert('Please enter a valid email address.');
          if (emailInputField) emailInputField.focus();
          return;
        }
      }

      // Phone validation (India standard: Exactly 10 digits starting with 6-9)
      if (!/^[6-9][0-9]{9}$/.test(phone)) {
        alert('India phone number must contain exactly 10 digits.');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Store guest name for thankyou page personalization
      try {
        sessionStorage.setItem('samwarthika_guest_name', name);
        sessionStorage.setItem('samwarthika_program', program);
      } catch (_) {}

      // UI Loading state on submit button
      const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Processing...</span>';
      }

      // Check if Webhook URL is set
      const isWebhookConfigured = FORM_CONFIG.scriptURL && !FORM_CONFIG.scriptURL.includes('YOUR_GOOGLE_APPS_SCRIPT');

      if (isWebhookConfigured) {
        // Build URL encoded form data
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('number', phone);
        formData.append('email', email);
        formData.append('course', program);
        formData.append('subject', program);
        formData.append('message', message);
        formData.append('page', FORM_CONFIG.pageTitle || document.title);
        formData.append('to_email', FORM_CONFIG.toEmail || '');
        formData.append('cc_email', FORM_CONFIG.ccEmail || '');

        // Post to Google Apps Script Webhook
        fetch(FORM_CONFIG.scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData.toString()
        })
        .then(() => {
          window.location.href = FORM_CONFIG.redirectURL;
        })
        .catch((error) => {
          console.warn('Webhook submission notice:', error);
          // Redirect to thankyou page even if offline/cors fallback
          window.location.href = FORM_CONFIG.redirectURL;
        });

        // Safety timeout redirect after 3.5 seconds in case network stalls
        setTimeout(() => {
          window.location.href = FORM_CONFIG.redirectURL;
        }, 3500);

      } else {
        // If scriptURL is not configured yet, show modal fallback or direct redirect
        if (modalGuestName) {
          modalGuestName.textContent = name;
        }
        if (successModal) {
          successModal.classList.remove('hidden');
          successModal.classList.add('active');
        } else {
          window.location.href = FORM_CONFIG.redirectURL;
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
        appointmentForm.reset();
      }
    });
  }

  if (closeSuccess && successModal) {
    closeSuccess.addEventListener('click', function() {
      successModal.classList.add('hidden');
      successModal.classList.remove('active');
      window.location.href = FORM_CONFIG.redirectURL;
    });
  }

  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.add('hidden');
        successModal.classList.remove('active');
      }
    });
  }

  // India phone limits & placeholder
  function updatePhoneLimits() {
    const phoneHint = document.getElementById('phoneHint');
    if (phoneInput) {
      phoneInput.maxLength = 10;
      phoneInput.placeholder = 'Phone Number (10 digits)';
    }
    if (phoneHint) {
      phoneHint.textContent = 'India phone number must contain 10 digits starting with 6-9';
    }
  }

  if (phoneInput) {
    updatePhoneLimits();
  }

  // Live input filter for special characters, URLs, and Emojis
  document.querySelectorAll('input, textarea').forEach(function(field) {
    field.addEventListener('input', function() {
      // Always remove emojis across all fields
      this.value = this.value.replace(/[\u{1F300}-\u{1FAFF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');

      if (this.id === 'name' || this.id === 'fullName') {
        // Name field: remove everything except letters and spaces
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
      } else if (this.id === 'phone' || this.id === 'phoneNumber') {
        // Phone field: remove everything except digits
        this.value = this.value.replace(/[^0-9]/g, '');
      } else if (this.type === 'email' || this.id === 'email' || this.id === 'userEmail') {
        // Email field: remove web URL prefixes, but ALLOW email special characters (@ . _ - +)
        this.value = this.value.replace(/(https?:\/\/|www\.)/gi, '');
        // Remove unallowed special characters for email
        this.value = this.value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
      } else if (this.id === 'message' || this.name === 'message' || this.id === 'userMessage') {
        // Message box: strip URL prefixes and domain extensions, and strip special characters (keep letters, numbers, spaces, and basic punctuation . , ? !)
        this.value = this.value.replace(/(https?:\/\/|www\.|\.com|\.in|\.net|\.org)/gi, '');
        this.value = this.value.replace(/[^a-zA-Z0-9\s.,?!]/g, '');
      } else {
        // Other fields: strip URL prefixes and domain extensions
        this.value = this.value.replace(/(https?:\/\/|www\.|\.com|\.in|\.net|\.org)/gi, '');
      }
    });
  });

  // Turn off autocomplete
  document.querySelectorAll('input, textarea, select').forEach(function(field) {
    field.setAttribute('autocomplete', 'off');
  });

  // 4. Smooth Scroll to Form & Auto-Focus Name Field
  function scrollToFormAndFocusName(programValue = null) {
    const nameInput = document.getElementById('fullName');
    const programSelect = document.getElementById('programSelect');
    const formCard = document.getElementById('heroFormCard') || document.getElementById('heroBookingForm') || document.getElementById('bookingSection');

    // Auto-select program if matching
    if (programValue && programSelect) {
      for (let i = 0; i < programSelect.options.length; i++) {
        const opt = programSelect.options[i];
        if (opt.value.toLowerCase().includes(programValue.toLowerCase()) || programValue.toLowerCase().includes(opt.value.toLowerCase())) {
          programSelect.selectedIndex = i;
          break;
        }
      }
    }

    if (formCard) {
      const navbar = document.getElementById('navbar');
      const navOffset = navbar ? navbar.offsetHeight : 70;
      const elementPosition = formCard.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementPosition - navOffset - 25;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });

      // Place focus into the Full Name field with subtle golden glow
      setTimeout(() => {
        if (nameInput) {
          nameInput.focus();
          nameInput.classList.remove('input-focus-pulse');
          void nameInput.offsetWidth; // Trigger reflow
          nameInput.classList.add('input-focus-pulse');
        }
      }, 550);
    }
  }

  // Bind Quick Program Inquire Buttons
  const programInquireBtns = document.querySelectorAll('.btn-inquire-program');
  programInquireBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const progName = btn.getAttribute('data-program');
      scrollToFormAndFocusName(progName);
    });
  });

  // Bind Treatment Items
  const treatmentItems = document.querySelectorAll('.treatment-item');
  treatmentItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const progName = item.getAttribute('data-program');
      scrollToFormAndFocusName(progName);
    });
  });

  // Bind Dinacharya Daily Routine Cards
  const dinaCards = document.querySelectorAll('.dinacharya-card');
  dinaCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToFormAndFocusName();
    });
  });

  // Bind Mobile Bottom Bar & Floating Book CTAs
  document.querySelectorAll('.mobile-btn-book, a[href="#bookingSection"], a[href="#heroFormCard"], a[href="#heroBookingForm"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToFormAndFocusName();
    });
  });

  // 5. Interactive Retreat Customizer / Dynamic Calculator
  const pillBtns = document.querySelectorAll('.pill-btn');
  const summaryDays = document.getElementById('summaryDays');
  const summaryProgram = document.getElementById('summaryProgram');
  const summaryRoom = document.getElementById('summaryRoom');
  const summaryEstimate = document.getElementById('summaryEstimate');

  let selectedProgram = 'Panchakarma Detox & Rejuvenation';
  let selectedDuration = 7;
  let selectedRoom = 'Heritage Riverside Suite';

  const programRates = {
    'Panchakarma Detox & Rejuvenation': 12000,
    'Stress Relief & Mental Wellness': 10500,
    'Ayurvedic Anti-Ageing & Rasayana': 14000
  };

  const roomMultipliers = {
    'Heritage Riverside Suite': 1.0,
    'Private Backwater Villa': 1.4,
    'Traditional Deluxe Room': 0.85
  };

  function updateCalculator() {
    const rate = (programRates[selectedProgram] || 12000) * (roomMultipliers[selectedRoom] || 1.0);
    const total = Math.round(rate * selectedDuration);

    if (summaryDays) summaryDays.textContent = `${selectedDuration} Days / ${selectedDuration - 1} Nights`;
    if (summaryProgram) summaryProgram.textContent = selectedProgram;
    if (summaryRoom) summaryRoom.textContent = selectedRoom;
    if (summaryEstimate) summaryEstimate.textContent = `₹${total.toLocaleString('en-IN')}`;
  }

  pillBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const type = e.target.getAttribute('data-calc-type');
      const value = e.target.getAttribute('data-calc-val');

      const parentGroup = e.target.closest('.pills-grid');
      if (parentGroup) {
        parentGroup.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      }
      e.target.classList.add('active');

      if (type === 'duration') {
        selectedDuration = parseInt(value, 10);
      } else if (type === 'program') {
        selectedProgram = value;
      } else if (type === 'room') {
        selectedRoom = value;
      }

      updateCalculator();
    });
  });

  // 6. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 7. Privacy & Terms Modals (Google Ads Compliance)
  const legalTriggers = document.querySelectorAll('.legal-modal-trigger');
  const legalCloseBtns = document.querySelectorAll('.close-legal-modal');

  legalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('href').substring(1);
      const modal = document.getElementById(targetId);
      if (modal) modal.classList.add('active');
    });
  });

  legalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  updateCalculator();
});
