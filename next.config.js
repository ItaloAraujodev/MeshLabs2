/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    unoptimized: true,
    domains: ['meshlabs.site'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
