import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/F1-Dashboard-2025' : undefined,
  assetPrefix: isProd ? '/F1-Dashboard-2025' : undefined,
};

export default nextConfig;
