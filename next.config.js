/** next.config.js */
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
}

module.exports = nextConfig
