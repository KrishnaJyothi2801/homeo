/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: [
      "png.pngtree.com",
      "media.istockphoto.com",
      "www.janeylhammonsnpc.com",
      "encrypted-tbn0.gstatic.com",
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
