# Aniket Singh — Portfolio

A single-page portfolio built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer
Motion + Lucide React**. Dark theme (`#0C0C0C`), Kanit display type, scroll-driven motion
throughout.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Typecheck (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Types only, no build |

## Deploy

`npm run build` emits a fully static `dist/` — publish that directory to GitHub Pages,
Netlify, Vercel, Cloudflare Pages, or any static host. `vite.config.ts` sets
`base: './'`, so the build works from a domain root *and* from a repo subpath
(e.g. a GitHub Pages project site) without further configuration.

> Previously this repo served a hand-written `index.html` straight from the root. That
> version is preserved in [`legacy/`](legacy/) — it is no longer built or deployed.

## Where the content lives

All copy is data, not markup. Edit these and the page follows:

| File | Contents |
|---|---|
| `src/data/projects.ts` | The five case-study cards (name, category, blurb, tags, link) |
| `src/data/services.ts` | The five service entries in the white section |
| `src/data/stack.ts` | Skills and tech stack, grouped, each with a Lucide icon |
| `src/data/experience.ts` | Roles, dates, and bullet points |

Section order is assembled in `src/App.tsx`.

## Assets

The only image on the site is `public/img/portrait.png` — your own avatar. Nothing is
hotlinked from a third-party host, so the page has no external asset dependencies.

## Things to swap before this goes live

1. **Project links.** Every entry in `src/data/projects.ts` has `href: '#contact'` as a
   placeholder. Point each at its real deployment or repo.
2. **A higher-resolution portrait.** `public/img/portrait.png` is 258×260, so the hero
   caps it at 380px wide to avoid visible softening. Re-export it at ~1040px and the size
   ceiling in `src/sections/HeroSection.tsx` can go back up to the intended 520px.

## Components

| Component | Role |
|---|---|
| `FadeIn` | Scroll-triggered entrance wrapper (`whileInView`, fires once) |
| `Magnet` | Cursor-following magnetic hover, used on the hero portrait |
| `AnimatedText` | Character-by-character scroll reveal, used in About |
| `ContactButton` | The gradient pill carrying every primary CTA |
| `LiveProjectButton` | Outline pill used on project cards |
