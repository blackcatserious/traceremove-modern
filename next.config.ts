import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Add resilient font loading
  images: {
    domains: ['fonts.googleapis.com', 'fonts.gstatic.com'],
  },
  // Skip external requests during build if network issues
  env: {
    NEXT_FONT_GOOGLE_MOCKED_RESPONSES: process.env.NODE_ENV === 'production' ? '' : '[]',
  },
};

export default nextConfig;
