/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "png.pngtree.com",
      "media.istockphoto.com",
      "www.janeylhammonsnpc.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },

  experimental: {
    appDir: true, // needed for app folder usage
  },
}

module.exports = nextConfig
