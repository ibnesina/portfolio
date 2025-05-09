const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio', // replace with your repo name
  assetPrefix: '/portfolio/',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
