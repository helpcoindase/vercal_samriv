// config/breadcrumbs.ts
export interface BreadcrumbItem {
  title: string;
  href?: string; // optional, last item may not have a link
}

// Example: key is the page identifier
export const breadcrumbsConfig: Record<string, BreadcrumbItem[]> = {
  "contact-us": [
    { title: "Home", href: "/" },
    { title: "Contact Us", href: "/contact-us" },
  ],
  "about-us": [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
  ],
  "treatments": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
  ],
  "privacy-policy": [
    { title: "Home", href: "/" },
    { title: "Privacy Policy", href: "/privacy-policy" },
  ],
  "ayurvedic-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Treatment in Kerala", href: "/ayurvedic-treatment-in-kerala" },
  ],
  "panchakarma-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Panchakarma Treatment in Kerala", href: "/panchakarma-treatment-in-kerala" },
  ],

  "best-ayurvedic-treatment-for-autism-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Autism Treatment in Kerala", href: "/best-ayurvedic-treatment-for-autism-in-kerala" },
  ],
  "parkinsons-ayurvedic-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Parkinson’s Treatment in Kerala", href: "/parkinsons-ayurvedic-treatment-in-kerala" },
  ],

  "psoriasis-ayurvedic-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Psoriasis Treatment in Kerala", href: "/psoriasis-ayurvedic-treatment-in-kerala" },
  ],

  "ayurvedic-treatment-for-knee-pain-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Knee Pain Treatment in Kerala", href: "/ayurvedic-treatment-for-knee-pain-in-kerala" },
  ],

  "ayurvedic-treatment-disc-bulge-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Disc Bulge Treatment in Kerala", href: "/ayurvedic-treatment-disc-bulge-kerala" },
  ],

  "post-natal-ayurvedic-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Postnatal Care Treatment in Kerala", href: "/post-natal-ayurvedic-treatment-in-kerala" },
  ],

  "sinusitis-ayurvedic-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Sinusitis Treatment in Kerala", href: "/sinusitis-ayurvedic-treatment-in-kerala" },
  ],

  "ayurvedic-treatment-for-varicose-veins-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Varicose Veins Treatment in Kerala", href: "/ayurvedic-treatment-for-varicose-veins-kerala" },
  ],

  "arthritis-ayurvedic-treatment-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Arthritis Treatment in Kerala", href: "/arthritis-ayurvedic-treatment-kerala" },
  ],
  "ayurvedic-treatment-for-lower-back-pain-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Lower Back Pain Treatment in Kerala", href: "/ayurvedic-treatment-for-lower-back-pain-in-kerala" },
  ],
  "weight-loss-ayurvedic-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Weight Loss Treatment in Kerala", href: "/weight-loss-ayurvedic-treatment-in-kerala" },
  ],

  "ayurvedic-treatment-for-stress-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Stress Management in Kerala", href: "/ayurvedic-treatment-for-stress-in-kerala" },
  ],
  "ayurvedic-stroke-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Stroke Rehabilitation in Kerala", href: "/ayurvedic-stroke-treatment-in-kerala" },
  ],

  "ayurveda-monsoon-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Monsoon Treatment in Kerala", href: "/ayurveda-monsoon-treatment-in-kerala" },
  ],

  "ayurvedic-treatment-for-sciatica-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Sciatica Treatment in Kerala", href: "/ayurvedic-treatment-for-sciatica-in-kerala" },
  ],

  "cervical-spondylosis-treatment-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Cervical Spondylosis Treatment in Kerala", href: "/cervical-spondylosis-treatment-kerala" },
  ],

  "lumbar-spondylosis-ayurvedic-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Lumbar Spondylosis Treatment in Kerala", href: "/lumbar-spondylosis-ayurvedic-treatment-in-kerala" },
  ],

  "ulcerative-colitis-treatment-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Ulcerative Colitis Treatment in Kerala", href: "/ulcerative-colitis-treatment-kerala" },
  ],

  "ayurvedic-treatment-for-hair-loss-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Hair Loss Treatment in Kerala", href: "/ayurvedic-treatment-for-hair-loss-in-kerala" },
  ],
  "gastroesophageal-reflux-disease-treatment-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Gastroesophageal Reflux Disease Treatment in Kerala", href: "/gastroesophageal-reflux-disease-treatment-in-kerala" },
  ],
  "ayurvedic-treatment-for-menstrual-pain-in-kerala": [
    { title: "Home", href: "/" },
    { title: "Treatments", href: "/treatments" },
    { title: "Ayurvedic Dysmenorrhea Treatment in Kerala", href: "/ayurvedic-treatment-for-menstrual-pain-in-kerala" },
  ],
  "our-doctors": [
    { title: "Home", href: "/" },
    { title: "Our Doctors", href: "/our-doctors" },
  ],
  "medical-tourism": [
    { title: "Home", href: "/" },
    { title: "Medical Tourism", href: "/medical-tourism" },
  ],
  "packages": [
    { title: "Home", href: "/" },
    { title: "Packages", href: "/packages" },
  ],

  "blog": [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
  ],
}; 
