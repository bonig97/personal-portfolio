import type { NextConfig } from "next";

const repo = "personal-portfolio";
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
    ...(isGithubPages
        ? {
            output: "export" as const,
            trailingSlash: true,
            basePath: `/${repo}`,
            assetPrefix: `/${repo}/`,
            images: { unoptimized: true },
        }
        : {
            trailingSlash: false,
        }),
};

export default nextConfig;
