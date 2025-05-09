/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/portfolio', // Replace with your GitHub repo name
    assetPrefix: '/portfolio/', // Optional but recommended
  };
  
  module.exports = nextConfig;
  