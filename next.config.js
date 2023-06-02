/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "console.firebase.google.com"],
  },
};

module.exports = nextConfig;
