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
  // Keep other default options; static export will write to `out/` when
  // using `next export`.
};

export default nextConfig;
