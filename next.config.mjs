/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/error',
        destination: '/error',
      },
    ];
  },
};

export default nextConfig;
