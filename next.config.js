/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  images: {
    domains: ["api.lorem.space"],
  
  },
};

module.exports = nextConfig;
