/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  env: {
    api_Jun88: "http://localhost:41966",
  },
};

module.exports = nextConfig;
