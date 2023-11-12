/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mks-sistemas.nyc3.digitaloceanspaces.com",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
