/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    caseSensitiveRoutes: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Old gallery page now lives in the portfolio.
  // Capitalised redirects (/Portfolio, /Contact) were removed: Vercel matches
  // redirect paths without regard to case, which caused a redirect loop.
  async redirects() {
    return [
      { source: "/gallery", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
