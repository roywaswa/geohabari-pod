/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "_next"
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.buzzsprout.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ],
  },
};

export default nextConfig;
