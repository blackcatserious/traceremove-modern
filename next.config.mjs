import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.philarchive.org" },
      { protocol: "https", hostname: "**.academia-photos.com" },
    ],
  },
  async redirects() {
    return [
      // Fix old URLs from current broken site
      { source: "/academic/cv", destination: "/cv", permanent: true },
      { source: "/academic/:path*", destination: "/research", permanent: true },
      { source: "/atlas/:path*", destination: "/research", permanent: true },
      { source: "/projects/:path*", destination: "/research", permanent: true },
      { source: "/whitepapers/:path*", destination: "/research", permanent: true },
      { source: "/tools/:path*", destination: "/tools", permanent: true },
    ];
  },
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }];
  },
};

const withMDX = createMDX({
  options: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeHighlight] },
});

export default withMDX(nextConfig);
