import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
