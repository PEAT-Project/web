This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## CI / GitHub Actions

This repository includes a GitHub Actions workflow at `.github/workflows/ci.yml` that will:

- Install dependencies with `npm ci`.
- Run `npm run lint`.
- Run `npm run build` (Next.js build).
- If a `VERCEL_TOKEN` secret is present in the repository secrets, it will deploy the built app to Vercel using the Vercel CLI.
- If `VERCEL_TOKEN` is not present, the workflow will upload the `.next` build folder as an artifact.

Setup instructions:

1. In your GitHub repository, go to Settings → Secrets → Actions and add the following secrets if you want automatic deploys to Vercel:

	- `VERCEL_TOKEN` — a personal token from Vercel (must have deploy rights).
	- `VERCEL_ORG_ID` — (optional) your Vercel organization id.
	- `VERCEL_PROJECT_ID` — (optional) your Vercel project id.

2. Push to the `main` branch or open a pull request targeting `main` to trigger the workflow.

Notes:

- The workflow uses Node.js 18. Adjust the `.github/workflows/ci.yml` file if you need a different Node version.
- If you prefer a different deployment target (Netlify, GitHub Pages, custom server), I can add a workflow step for that — tell me which target you want and I'll add it.
 - The workflow runs `npm run lint` but will not fail the job if linting errors are present. This avoids blocking builds while you adjust ESLint configuration or fix warnings.

