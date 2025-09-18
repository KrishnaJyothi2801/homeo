import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // ✅ tells Next.js to generate static HTML in `out/`
  images: {
    unoptimized: true, // ✅ required since Next.js image optimization needs a server
  },
  basePath: "/homeo", // ✅ replace with your repo name
  assetPrefix: "/homeo/", // ✅ ensures assets load correctly
};

export default nextConfig;
