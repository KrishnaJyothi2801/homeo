/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // <-- enable static HTML export
  images: {
    domains: [
      "png.pngtree.com",
      "media.istockphoto.com",
      "www.janeylhammonsnpc.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
}

module.exports = nextConfig
