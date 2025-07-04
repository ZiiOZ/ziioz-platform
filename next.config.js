/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore linting during build
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
