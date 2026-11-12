// lib/metaConfig.ts
// import { ASSET_PREFIX } from "../../config";

export interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface PageSchema {
  "@context": "https://schema.org";
  "@graph": SchemaGraphItem[];
}
export type SchemaGraphItem =
  | BlogPostingSchema
  | BreadcrumbListSchema;

export interface BreadcrumbListSchema {
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}
export interface OrganizationSchema {
  "@type": "Organization";
  name: string;
  url: string;
}
export interface PublisherSchema extends OrganizationSchema {
  logo: {
    "@type": "ImageObject";
    url: string;
  };
}
export interface ThingSchema {
  "@type": "Thing";
  name: string;
}
export type SchemaPageType =
  | "BlogPosting"
  | "Article"
  | "NewsArticle"
  | "MedicalWebPage"
  | "WebPage";


export interface BlogPostingSchema {
  "@type": SchemaPageType;
  "@id": string;

  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };

  headline: string;
  description: string;
  image: string;
  url: string;

  datePublished: string; // ISO 8601
  dateModified: string;  // ISO 8601

  author: OrganizationSchema;
  publisher: PublisherSchema;

  keywords: string[];
  genre: string[];

  about: ThingSchema[];

  audience: {
    "@type": "Audience";
    audienceType: string[];
  };
}

export interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonical: string;
  robots: string;
  googlebot: string;
  image: string;
  schema?: PageSchema; // ✅ ROOT schema

}

export const metaConfig: Record<string, MetaTags> = {
  "/": {
    title: "Ayurvedic Retreat in Kerala - Samwarthika Rivera Ayurveda Retreat",
    description: "Samwarthika Rivera is a riverside Ayurvedic retreat resort in Kerala offering Panchakarma, doctor-led therapies, yoga, holistic healing, and rejuvenating stays.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },

  "/about-us": {
    title: "About Samwarthika Rivera | Riverside Ayurveda Retreat, Kerala",
    description: "Discover Samwarthika Rivera - the riverside wellness retreat of NABH-accredited Samwarthika Ayurveda Hospital. Doctors, vision, milestones, and infrastructure.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "about-us",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/our-doctors": {
    title: "Our Ayurvedic Doctors | BAMS, MD(Ay) Specialists in Kerala",
    description: "Meet the resident doctors at Samwarthika Rivera - BAMS, MD (Ay) qualified specialists in Panchakarma, neurology, and chronic care.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "our-doctors",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/treatments": {
    title: "Ayurvedic Treatments in Kerala | Panchakarma & Specialty Programmes",
    description: "Explore 23 doctor-led Ayurvedic treatment programmes at Samwarthika Rivera - Panchakarma, chronic pain, neurology, women’s health, and lifestyle care.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "treatments",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-in-kerala": {
    title: "Ayurvedic Treatment in Kerala | Doctor-Led Retreat",
    description: "Authentic Ayurvedic treatment in Kerala at Samwarthika Rivera. Doctor-designed programmes, classical therapies, and residential care on a riverside campus.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/panchakarma-treatment-in-kerala": {
    title: "Panchakarma Treatment in Kerala | Authentic 5-Step Detox",
    description: "Classical Panchakarma at Samwarthika Rivera in Kerala - Vamana, Virechana, Basti, Nasya, Raktamokshana, doctor-supervised on a riverside retreat campus.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "panchakarma-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/sinusitis-ayurvedic-treatment-in-kerala": {
    title: "Ayurvedic Sinusitis Treatment in Kerala | Drug-Free Care",
    description: "Treat chronic sinusitis with Ayurvedic Nasya, steam therapy, and herbal protocols at Samwarthika Rivera. Doctor-led, residential, drug-free relief.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "sinusitis-ayurvedic-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/best-ayurvedic-treatment-for-autism-in-kerala": {
    title: "Ayurvedic Treatment for Autism in Kerala | Supportive Care",
    description: "Ayurvedic supportive therapy for children on the autism spectrum at Samwarthika Rivera. Sensory, neurological, and behavioural support - doctor-led.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "best-ayurvedic-treatment-for-autism-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/weight-loss-ayurvedic-treatment-in-kerala": {
    title: "Ayurvedic Weight Loss in Kerala | Sustainable & Doctor-Led",
    description: "Lose weight the Ayurvedic way at Samwarthika Rivera - Udvarthana, herbal medicine, dosha-based diet, and yoga. Sustainable results, doctor-supervised.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "weight-loss-ayurvedic-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurveda-monsoon-treatment-in-kerala": {
    title: "Karkidaka Treatment in Kerala | Monsoon Ayurveda Retreat",
    description: "Karkidaka Chikitsa at Samwarthika Rivera - Kerala’s traditional monsoon Ayurveda for immunity, joint care, and rejuvenation. July-August residential stays.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurveda-monsoon-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/parkinsons-ayurvedic-treatment-in-kerala": {
    title: "Ayurvedic Treatment for Parkinson’s in Kerala | Neuro Care",
    description: "Doctor-led Ayurvedic Parkinson’s programme at Samwarthika Rivera - neurological rehabilitation, tremor management, and supportive care. International guests welcome.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "parkinsons-ayurvedic-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-for-sciatica-in-kerala": {
    title: "Ayurvedic Sciatica Treatment in Kerala | Drug-Free Relief",
    description: "Treat sciatica naturally at Samwarthika Rivera - Kati Vasti, Pizhichil, and herbal protocols designed by Ayurvedic doctors. Avoid surgery where possible.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-for-sciatica-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-for-varicose-veins-kerala": {
    title: "Ayurvedic Varicose Veins Treatment in Kerala | Non-Surgical",
    description: "Treat varicose veins without surgery at Samwarthika Rivera. Leech therapy (Jalaukavacharana), herbal protocols, and lifestyle correction. Doctor-led.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-for-varicose-veins-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-stroke-treatment-in-kerala": {
    title: "Ayurvedic Stroke Rehabilitation in Kerala | Post-Stroke Care",
    description: "Post-stroke neurological rehabilitation at Samwarthika Rivera - Pizhichil, Vasti, and physiotherapy combined. Doctor-led recovery programmes.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-stroke-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-for-knee-pain-in-kerala": {
    title: "Ayurvedic Knee Pain Treatment in Kerala | Avoid Surgery",
    description: "Janu Vasti, Pizhichil, and herbal protocols for knee osteoarthritis at Samwarthika Rivera. Postpone or avoid knee replacement with doctor-led care.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-for-knee-pain-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/post-natal-ayurvedic-treatment-in-kerala": {
    title: "Post-Natal Ayurvedic Treatment in Kerala | Sutika Paricharya",
    description: "Post-natal Ayurvedic care at Samwarthika Rivera - traditional Sutika Paricharya for new mothers. Recovery, lactation, hormonal balance, doctor-led.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "post-natal-ayurvedic-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/cervical-spondylosis-treatment-kerala": {
    title: "Cervical Spondylosis Treatment in Kerala | Ayurvedic Care",
    description: "Treat neck pain, stiffness, and cervical spondylosis at Samwarthika Rivera with Greeva Vasti, Nasya, and doctor-led Ayurvedic protocols.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "cervical-spondylosis-treatment-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/psoriasis-ayurvedic-treatment-in-kerala": {
    title: "Ayurvedic Psoriasis Treatment in Kerala | Doctor-Led Care",
    description: "Treat psoriasis at Samwarthika Rivera with classical Panchakarma, herbal medicine, and dietary therapy. Doctor-led, drug-free programme for chronic skin conditions.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "psoriasis-ayurvedic-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/lumbar-spondylosis-ayurvedic-treatment-in-kerala": {
    title: "Lumbar Spondylosis Treatment in Kerala | Ayurvedic Spine Care",
    description: "Treat lumbar spondylosis and lower-back degeneration at Samwarthika Rivera with Kati Vasti, Pizhichil, and Vasti. Doctor-led, residential programmes.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "lumbar-spondylosis-ayurvedic-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/gastroesophageal-reflux-disease-treatment-in-kerala": {
    title: "Ayurvedic GERD Treatment in Kerala | End the PPI Cycle",
    description: "Treat acid reflux and GERD at Samwarthika Rivera with Ayurvedic Pitta-pacifying protocols, dietary correction, and herbal medicine. End long-term PPI dependence.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "gastroesophageal-reflux-disease-treatment-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/arthritis-ayurvedic-treatment-kerala": {
    title: "Ayurvedic Arthritis Treatment in Kerala | Joint Pain Care",
    description: "Treat rheumatoid and osteoarthritis at Samwarthika Rivera with classical Ayurvedic protocols - Pizhichil, Patrapinda Sweda, herbal medicine. Doctor-led programmes.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "arthritis-ayurvedic-treatment-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-for-menstrual-pain-in-kerala": {
    title: "Ayurvedic Treatment for Period Pain in Kerala | Dysmenorrhea",
    description: "Treat painful periods, PMS, and menstrual cramps at Samwarthika Rivera with doctor-led Ayurvedic protocols and dietary therapy. Drug-free, lasting relief.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-for-menstrual-pain-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ulcerative-colitis-treatment-kerala": {
    title: "Ayurvedic Ulcerative Colitis Treatment in Kerala | UC Care",
    description: "Treat ulcerative colitis at Samwarthika Rivera with classical Ayurvedic protocols, dietary therapy, and herbal medicine. Doctor-led IBD support programmes.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ulcerative-colitis-treatment-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-disc-bulge-kerala": {
    title: "Ayurvedic Disc Bulge Treatment in Kerala | Avoid Surgery",
    description: "Treat disc bulge and protrusion non-surgically at Samwarthika Rivera with Kati Vasti, Vasti, and traction-based protocols. Doctor-led spinal care.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-disc-bulge-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-for-lower-back-pain-in-kerala": {
    title: "Ayurvedic Lower Back Pain Treatment in Kerala | Lasting Relief",
    description: "Treat chronic lower back pain at Samwarthika Rivera with Kati Vasti, Pizhichil, and herbal protocols. Doctor-led, drug-free, residential care.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-for-lower-back-pain-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-for-stress-in-kerala": {
    title: "Ayurvedic Stress Management in Kerala | Burnout Recovery",
    description: "Recover from chronic stress and burnout at Samwarthika Rivera with Shirodhara, Abhyanga, yoga, and doctor-led Ayurvedic protocols. Restore your nervous system.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-for-stress-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/ayurvedic-treatment-for-hair-loss-in-kerala": {
    title: "Ayurvedic Hair Loss Treatment in Kerala | Natural Restoration",
    description: "Treat hair loss, alopecia, and scalp conditions at Samwarthika Rivera with Shiro Abhyanga, Nasya, and doctor-led Ayurvedic protocols. Address root cause.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "ayurvedic-treatment-for-hair-loss-in-kerala",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/medical-tourism": {
    title: "Ayurveda Medical Tourism in Kerala | International Patient Care",
    description: "Travel to Samwarthika Rivera for authentic Ayurvedic medical tourism. Visa support, airport transfers, multilingual care, and treatment packages from $1,500.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "medical-tourism",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/facilities": {
    title: "Accommodations & Facilities | Samwarthika Rivera Retreat Kerala",
    description: "Riverside rooms, vegetarian kitchen, herb garden, library, yoga hall, and 24×7 nursing - explore Samwarthika Rivera’s residential facilities for guests.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "facilities",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/insurance": {
    title: "Insurance Partners | Cashless Ayurveda Treatment in Kerala",
    description: "Samwarthika Rivera is empanelled with 20+ Indian and international insurers. Cashless treatment, claim assistance, and dedicated insurance desk available.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "insurance",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/media": {
    title: "Media & Press | Samwarthika Rivera Ayurveda Retreat",
    description: "Doctor talks, patient stories, press features, and video gallery from Samwarthika Rivera - Kerala’s riverside Ayurvedic wellness retreat.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "media",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/blog": {
    title: "Ayurveda Blog | Wellness, Treatment & Recovery Insights",
    description: "Doctor-authored articles on Ayurveda, Panchakarma, chronic care, women’s health, and wellness - from the Samwarthika Rivera clinical team.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "blog",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
  "/contact-us": {
    title: "Contact Samwarthika Rivera | Address, Phone, Directions",
    description: "Reach Samwarthika Rivera Ayurveda Retreat in Koovapady, Ernakulam, Kerala. Phone, email, directions, hours, and 24×7 international helpline.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "contact-us",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },
"/packages": {
    title: "Wellness Packages | Samwarthika Rivera Ayurveda Retreat",
    description: "Explore our curated Ayurvedic wellness packages in Kerala. Personalized treatments, accommodation, and holistic healing experiences.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "packages",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },

"/privacy-policy": {
    title: "Privacy Policy | Samwarthika Rivera Ayurveda Retreat",
    description: "Learn about our privacy practices and how we collect, use, and protect your personal information.",
    keywords: "",
    author: "Samwarthikarivera",
    canonical: "privacy-policy",
    robots: "index, follow",
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    image: ""
  },


};

export const schemaConfig: Record<string, object> = {


  
}
