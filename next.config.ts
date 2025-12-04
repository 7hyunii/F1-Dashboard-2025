import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/F1-Dashboard-2025',
  assetPrefix: '/F1-Dashboard-2025',
};

export default nextConfig;
