import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = '';
if (isGithubActions) {
  basePath = '/Ngon-Tu-Va-Hanh-Dong-Cua-Duc-Giesu';
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
};

export default nextConfig;
