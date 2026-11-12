import type { Metadata } from "next";
import { ReactNode } from "react";
import { Alan_Sans, Mulish } from "next/font/google";
import "./globals.css";
import { ASSET_PREFIX, ISDEV } from "config";
import Script from "next/script";

const alanSans = Alan_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-alan-sans",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Samwarthika Rivera",
  description: "Ayurveda Retreat Kerala",
  icons: {
    icon: `${ASSET_PREFIX}/favicon.ico`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.samwarthikarivera.com/#localbusiness",
  "name": "Samwarthika Rivera Ayurveda Retreat",
  "description": "Samwarthika Rivera is a riverside Ayurvedic retreat resort in Kerala offering Panchakarma, doctor-led therapies, yoga, holistic healing, and rejuvenating stays.",
  "url": "https://www.samwarthikarivera.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.samwarthikarivera.com/assets/images/rivera-logo.webp"
  },
  "image": "https://www.samwarthikarivera.com/assets/images/rivera-logo.webp",
  "telephone": "+91 95677 72101",
  "priceRange": "₹₹",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4/153D, Thottuva, Koovapady P.O.",
    "addressLocality": "Perumbavoor, Ernakulam",
    "addressRegion": "Kerala",
    "postalCode": "683544",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.18180643829665,
    "longitude": 76.49739747116341
  },
  "hasMap": "https://www.google.com/maps/place/Samwarthika+Rivera+Ayurveda+Retreat/@10.1813233,76.4969844,542m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3b07fd480c21a7ad:0xa232eb240f3b6ec9!2sSamwarthika+Rivera+Ayurveda+Retreat!8m2!3d10.1816586!4d76.4974082!16s%2Fg%2F11z20hxbgp!3m5!1s0x3b07fd480c21a7ad:0xa232eb240f3b6ec9!8m2!3d10.1816586!4d76.4974082!16s%2Fg%2F11z20hxbgp?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/SamwarthikaRiveraAyurvedaRetreat",
    "https://www.instagram.com/samwarthikarivera/",
    "https://x.com/RiveraRetreat",
    "https://www.linkedin.com/company/samwarthika-rivera-ayurveda-retreat/",
    "https://www.youtube.com/@SamwarthikaRivera"
  ]
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
    
        {ISDEV ? (
          <meta name="robots" content="noindex" />
        ) : (
          <>
            <meta name="robots" content="index" />

            <meta
              name="google-site-verification"
              content="2AbNcz0y4wu-Kk8o_LnTa8b2Q_D4NUTX9kfU1Jm2spw"
            />

            <link
              rel="preload"
              as="image"
              href={`${ASSET_PREFIX}/assets/images/rivera-banner-2-mobile.webp`}
              media="(max-width: 479px)"
            />

            <Script id="gtm-script" strategy="beforeInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57Q84VLN');`}
            </Script>

            <Script id="clarity-script" strategy="beforeInteractive">
              {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xcxgid0ljg");`}
            </Script>

<script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />



          </>
        )}
      </head>

      <body suppressHydrationWarning>
        {!ISDEV && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-57Q84VLN"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}
      </body>
    </html >
  );
}