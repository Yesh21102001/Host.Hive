/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    caseSensitiveRoutes: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The old React Router app matched these paths case-insensitively.
  // Send the capitalised links to the lowercase Next.js routes.
  async redirects() {
    return [
      { source: "/Portfolio", destination: "/portfolio", permanent: true },
      { source: "/gallery", destination: "/portfolio", permanent: true },
      { source: "/Gallery", destination: "/portfolio", permanent: true },
      { source: "/Contact", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
