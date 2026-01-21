/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rinku.pro',
      },
      {
        protocol: 'https',
        hostname: 'linkvertise.com',
      },
    ],
  },
};

export default nextConfig;
