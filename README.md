# Okay Fine, I'm Sorry 😭

A playful, interactive apology website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

You can deploy this site to Vercel easily. The project includes a `vercel.json` that tells Vercel to use the `dist` folder produced by `npm run build` and applies an SPA rewrite to `index.html`.

Steps:

1. Push the project to a Git provider (GitHub, GitLab, Bitbucket).
2. On https://vercel.com click **New Project → Import Project** and select your repository.
3. Set the **Build Command** to `npm run build` and **Output Directory** to `dist` (these are the correct defaults).
4. Click **Deploy** — Vercel will build and publish the site.

Alternate CLI deploy:

```bash
npm i -g vercel
vercel
```

Notes:
- `vercel.json` is included to ensure Vercel uses the `dist` folder and routes all paths to `index.html` so client-side routing works.
- If you change image paths, commit them to the repo before importing to Vercel.

## Customize who it's for

Edit `src/data/viewers.ts` — add, remove, or edit entries (name, image,
message, caption). Everything else updates automatically.

Replace the placeholder avatars/photos in `public/images/` with real ones
(same filenames, or update the paths in `viewers.ts` and
`src/components/MemoryGallery.tsx`).
