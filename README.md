# Interdisciplina — Hackathon base

Next.js + TypeScript starter for **Team: Interdisciplina**, with **axios**, **Framer Motion**, **Lottie** (`lottie-react`), and **GitHub Actions** CI plus static deploy to **GitHub Pages**.

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Local dev server                     |
| `npm run build`| Static export to `out/`              |
| `npm run lint` | ESLint                               |
| `npm run typecheck` | TypeScript (`tsc --noEmit`)     |

After `npm run build`, preview the static site with any static file server, for example:

`npx serve out`

## Configuration

- **API base URL** (optional): copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` for the shared axios client in `src/lib/api.ts`.
- **GitHub Pages base path**: CI sets `BASE_PATH` to `/<repository-name>` so asset URLs match `https://<user>.github.io/<repo>/`. Local builds omit `BASE_PATH` unless you set it yourself.

## GitHub Pages (one-time)

1. Repository **Settings → Pages**: set **Source** to **GitHub Actions**.
2. Push to `main`: the workflow **CI and deploy** builds and publishes the `out` folder.

If deployment is blocked, check **Settings → Environments → github-pages** and any required approvals for first-time use.

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- [axios](https://axios-http.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [lottie-react](https://www.npmjs.com/package/lottie-react) (Lottie for React)
