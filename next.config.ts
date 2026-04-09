import type { NextConfig } from "next";

const rawBasePath = process.env.BASE_PATH ?? "";
const basePath = rawBasePath.startsWith("/")
  ? rawBasePath
  : rawBasePath.length > 0
    ? `/${rawBasePath}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: basePath.length > 0 ? basePath : undefined,
  assetPrefix: basePath.length > 0 ? basePath : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
