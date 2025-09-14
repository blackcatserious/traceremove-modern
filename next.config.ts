import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  distDir: 'out'
};

export default nextConfig;
