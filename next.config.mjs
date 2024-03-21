/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "compelling-works-websites.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

