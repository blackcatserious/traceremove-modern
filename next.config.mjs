/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/academic/:path*", destination: "/cv", permanent: true },
      { source: "/academic", destination: "/cv", permanent: true },
      { source: "/projects/:path*", destination: "/research", permanent: true },
      { source: "/projects", destination: "/research", permanent: true },
      { source: "/tools/:path*", destination: "/concepts", permanent: true },
      { source: "/tools", destination: "/concepts", permanent: true },
      { source: "/atlas/:path*", destination: "/research", permanent: true },
      { source: "/atlas", destination: "/research", permanent: true },
      { source: "/about", destination: "/cv", permanent: true },
      { source: "/whitepapers/:path*", destination: "/research", permanent: true },
      { source: "/whitepapers", destination: "/research", permanent: true },
    ];
  },
};

export default nextConfig;
