// lib/getMeta.ts
import { ASSET_PREFIX, BASEURL } from "config";
import { metaConfig } from "./metaConfig";
import type { Metadata } from "next";
export function getMeta(path: string): Metadata {
  const meta = metaConfig[path];

  if (!meta) {
    return {
      title: "Samwarthikarivera",
      description: "Samwarthikarivera",
      keywords: "Samwarthikarivera",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    icons: {
      icon: [{ url: `${ASSET_PREFIX}/favicon.ico` },],
      shortcut: [`${ASSET_PREFIX}/favicon.ico`],
      apple: [`${ASSET_PREFIX}/favicon.ico`],
    },


    authors: [{ name: meta.author }],
    alternates: {
      canonical: `${BASEURL}${meta.canonical}`,
    },
    robots: {
      index: meta.robots.includes("index"),
      follow: meta.robots.includes("follow"),
      googleBot: meta.googlebot,
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASEURL}${meta.canonical}`,
      type: "website",
      siteName: "Samwarthikarivera",
      images: meta.image,
    },
  };
}
