import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

// Set REPO_NAME env var for GitHub Pages, or override with BASE_PATH
const repoName = process.env.BASE_PATH || process.env.REPO_NAME || "";
const basePath = process.env.GITHUB_PAGES && repoName ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,

  basePath: basePath,
  assetPrefix: `${basePath}/`,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  serverExternalPackages: ["@takumi-rs/image-response"],
};

export default withMDX(config);
