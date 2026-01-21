/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rinku.pro',
      },
    ],
  },
};

export default nextConfig;
