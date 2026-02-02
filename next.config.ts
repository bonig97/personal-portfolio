import type { NextConfig } from "next";

const repo = "personal-portfolio";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    images: { unoptimized: true },
};

export default nextConfig;
