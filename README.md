# Aniket Singh — AI Engineer Portfolio

My personal portfolio: a single-page site presenting who I am, what I do, and five AI
products I've built end to end — from a chatbot platform to a multi-agent workflow builder
to a voice agent that answers real phone calls.

**Live:** _add your deployed URL here once it's up_
**Resume:** [`aniket_singh_ai_engineer.pdf`](public/aniket_singh_ai_engineer.pdf)

## What's on the page

| Section | Content |
|---|---|
| Hero | Name, one-line pitch, portrait with a cursor-following magnetic hover |
| About | A short scroll-revealed statement of what I do and what I care about |
| What I Do | Six things I build — chatbots, agents, MCP integrations, voice AI, custom models, and getting it all into production |
| Projects | Five shipped products, each linking to its live deployment |
| Stack | Everything I work with, grouped — languages, LLMs & agents, RAG, ML, backend, frontend, voice, cloud & MLOps |
| Experience | Roles at Acadally and Radius Synergies |
| Contact | Email, resume download, and social links |

### The five projects

1. **MCP Forge** — turns an OpenAPI spec or a Python library into a runnable MCP server,
   deterministically, with a real playground to test it against a live MCP client.
2. **TaskForce** — multi-agent workflow platform: agents run sequentially, in parallel, or
   conditionally, each on its own model (local or hosted), streaming live with a full trace.
3. **Sonari** — an AI voice agent builder. Talk to it in a browser, share it as a link,
   embed it, or connect it to a real phone number.
4. **Lumio** — multi-tenant RAG chatbot SaaS. Grounds answers in your documents, cites
   sources, scores its own confidence, escalates to a human when it should.
5. **MarketMind** — trading research across US and Indian markets, with an auditable
   0–100 signal score and a five-agent research crew behind the final verdict.

Each card's tags and description are pulled straight from that project's own docs — see
`src/data/projects.ts`.

## Stack this site is built with

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide React

Dark theme (`#0C0C0C`), Kanit display type, scroll-driven motion throughout — sticky
stacking project cards, a character-by-character reveal in About, `whileInView` fade-ins on
everything.

## Run it locally

This is a compiled app, not a static file — **opening `index.html` directly will show a
blank white page.** That file is only Vite's entry stub (an empty `<div id="root">` and a
pointer to `src/main.tsx`); the real page is assembled at build time.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

To view the production build instead:

```bash
npm run build
npm run preview
```

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Typecheck (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Types only, no build |

## Deploy

`npm run build` emits `dist/`, a self-contained pair of files:

```
dist/index.html                          ← all CSS and JS inlined
dist/img/portrait.png
dist/aniket_singh_ai_engineer.pdf
```

`vite.config.ts` sets `base: './'` and inlines the bundle as a classic script rather than
an ES module, so `dist/index.html` works from a domain root, from a repo subpath (a GitHub
Pages project site), and by double-clicking it on the desktop.

### GitHub Pages (this repo)

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and
publishes `dist/` automatically on every push to `main`.

**One-time setup, in the repo on GitHub:** Settings → Pages → Build and deployment →
Source → **GitHub Actions**.

For any other static host (Netlify, Vercel, Cloudflare Pages), set the build command to
`npm run build` and the publish directory to `dist`.

## Editing the content

All copy is data, not markup — edit these and the page follows, no JSX to touch:

| File | Contents |
|---|---|
| `src/data/projects.ts` | The five project cards — name, category, blurb, tags, live link |
| `src/data/services.ts` | The six "What I Do" entries |
| `src/data/stack.ts` | Skills, grouped, each with a Lucide icon |
| `src/data/experience.ts` | Roles, dates, bullet points |
| `src/data/links.ts` | Resume path, email, and social links |

Section order is assembled in `src/App.tsx`.

## Components

| Component | Role |
|---|---|
| `FadeIn` | Scroll-triggered entrance wrapper (`whileInView`, fires once) |
| `Magnet` | Cursor-following magnetic hover, used on the hero portrait |
| `AnimatedText` | Character-by-character scroll reveal, used in About |
| `ContactButton` | The gradient pill carrying every primary CTA |
| `LiveProjectButton` | Outline pill used on project cards, resume, and socials |

## Assets

`public/img/portrait.png` (hero avatar) and `public/aniket_singh_ai_engineer.pdf` (resume)
— both mine, nothing hotlinked from a third-party host.

> This repo previously served a hand-written static `index.html`. That version is
> preserved in [`legacy/`](legacy/) for reference; it's no longer built or deployed.
