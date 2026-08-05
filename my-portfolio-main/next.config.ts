import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/minimal',
  assetPrefix: '/minimal',
};

export default nextConfig;
