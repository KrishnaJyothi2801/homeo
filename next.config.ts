import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ required since Next.js image optimization needs a server
  },
  basePath: "/homeo", // ✅ replace with your repo name
  assetPrefix: "/homeo/", // ✅ ensures assets load correctly
  trailingSlash: true, 
};

export default nextConfig;
