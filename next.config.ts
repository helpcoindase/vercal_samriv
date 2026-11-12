import { ISDEV } from "config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 2592000, // 30 days in seconds
    formats: ["image/avif", "image/webp"],
     qualities: [60, 75, 80],
  },

  async headers() {
    return [
      // ✅ Public folder images (webp, jpg, png, etc.)
      {
        source: "/assets/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },

      // ✅ Favicon
      {
        source: "/:path*.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // ✅ SVG files
      {
        source: "/:path*.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // ✅ Web fonts
      {
        source: "/:path*.woff",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.eot",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // ✅ HTML pages — always revalidate
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },

  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    return [
      {
        source: '/retreat',
        destination: '/retreat/index.html',
      },
      {
        source: '/retreat/thankyou',
        destination: '/retreat/thankyou.html',
      },
      {
        source: '/images/blogs/:path*',
        destination: `${backendUrl}/images/blogs/:path*`,
      },
    ];
  },

  basePath: ISDEV || undefined,
  assetPrefix: ISDEV || undefined,
  // output: "export", // Uncomment if generating static HTML export
  trailingSlash: true,
    // allowedDevOrigins: ['192.168.1.32'],
};

export default nextConfig;
