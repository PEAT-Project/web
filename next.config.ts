import type { NextConfig } from "next";

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
  // If we're deploying to a GitHub project page (https://<org>.github.io/<repo>),
  // the site needs a basePath so all asset and route URLs include the repo name.
  // This repo is named `web`, so set the basePath and assetPrefix to `/web`.
  // If you plan to use a custom domain (like `lankahost.net`) instead, remove
  // these two options so the site is served from the root.
  basePath: "/web",
  assetPrefix: "/web",
  // Expose the base path at build time so components can prefix public asset URLs
  env: {
    NEXT_PUBLIC_BASE_PATH: "/web",
  },
  // Keep other default options; static export will write to `out/`.
};

export default nextConfig;
