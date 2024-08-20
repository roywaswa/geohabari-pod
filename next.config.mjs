/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "_next"
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.buzzsprout.com',
      },
    ],
  },
};

export default nextConfig;
