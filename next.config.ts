import type { NextConfig } from "next";
const isDev = process.env.NODE_ENV === "development";

// Basic config that applies in all environments
const nextConfig: NextConfig = {
  // For exporting to static HTML (next export / GitHub Pages) we must
  // disable Next.js' image optimization API. This makes local
  // <Image src="/..." /> assets work when the site is exported.
  images: {
    unoptimized: true,
  },
  // Use the static export output mode so `next build` generates a
  // fully-exported static site suitable for GitHub Pages.
  // See: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: "export",
};

// Only apply the GitHub Pages `basePath` and `assetPrefix` when not in
// development. This lets local dev run at `/` while production/export can
// still target `/web` for GitHub Pages deployments.
if (!isDev) {
  Object.assign(nextConfig, {
    basePath: "/web",
    assetPrefix: "/web",
    env: {
      NEXT_PUBLIC_BASE_PATH: "/web",
    },
  });
}

export default nextConfig;
