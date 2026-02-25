/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.substack.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/academic/cv',
        destination: '/cv',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/articles/:slug',
        permanent: true,
      },
      {
        source: '/research-archive',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/publications',
        destination: '/articles',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/brand/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;
