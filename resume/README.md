# Resume source

`resume.tex` is the LaTeX source for the resume. No LaTeX toolchain is installed in this
environment, so it hasn't been compiled here — do that with:

## Compile it (Overleaf — no install)

1. Go to https://overleaf.com → **New Project → Upload Project** → upload `resume.tex`
   (or paste its contents into a new blank project).
2. Overleaf compiles automatically. Download the PDF.
3. Rename it `resume.pdf` and place it at **`public/resume.pdf`** in the site repo — that
   exact path is what the site's "Resume" nav link and "Download Resume" button expect
   (`RESUME_HREF` in `src/data/links.ts`).

## Or compile locally, if you install MiKTeX / TeX Live

```bash
pdflatex resume.tex
```

## Before you compile — three things flagged in the source

Marked `% TODO` comments in `resume.tex` (invisible in the rendered PDF):

1. **LinkedIn slug** — `\linkedin{aniketsingh}` assumes your profile is
   `linkedin.com/in/aniketsingh`. Verify that's actually your URL.
2. **Portfolio must be live** — the three project links and the header's portfolio link all
   point at `https://aniketsingh12.github.io/AI-enginer-protfolio/`. GitHub Pages was
   unpublished as of the last check in this project — confirm it's live (Settings → Pages)
   before sending this resume anywhere, or the links 404.
3. **The gap after Dec 2025** — Acadally's end date is now Dec 2025, which leaves a gap to
   today with nothing filling it. Not something this file can fix; just flagging it's visible.

## Why these three projects, and how the links work

**MCP Forge, TaskForce, and Lumio** — chosen over Sonari and MarketMind because together
they cover three distinct competencies (developer tooling/protocol work, multi-agent
orchestration, and a production RAG product) rather than three variations on the same
theme. MarketMind (finance-specific) and Sonari (voice-specific) were left off in favor of
staying broadly applicable, matching the portfolio site's own "generic AI engineer"
positioning rather than narrowing to one vertical.

Each project title links to **that exact project's card** on the live site
(`#project-01`, `#project-02`, `#project-04`), not just the Projects section in general —
the site was given matching `id="project-0N"` anchors and a small mount-time scroll fix
(`src/App.tsx`) specifically so these links land in the right place on a fresh page load,
not just when navigating within an already-open tab.

## What was fixed from the original, and what changed this round

**Original bugs (LaTeX/encoding):**
- A corrupted icon glyph in the Projects section (showed as `??` — a UTF-8 encoding break)
  was replaced with a proper `fontawesome5` icon.
- Added `fontenc` (T1) and switched `fontawesome` → `fontawesome5` (the maintained, current
  package) — the same class of encoding gap that caused the broken glyph above.
- All dates normalized to `Mon YYYY` and to real en dashes via LaTeX's `--`, not a raw
  Unicode `–` character.
- Added `\hypersetup` so links render as plain black text, not hyperref's default blue
  colored-and-boxed style.
- The GitHub handle in the header was `aniketsingh`; the actual one (confirmed from the
  portfolio site's own contact links) is `Aniketsingh12` — fixed to match.

**ATS-proofing:**
- LinkedIn/GitHub/Portfolio links now show the actual URL as visible text instead of a
  generic word — most ATS systems only extract visible PDF text, not the underlying link
  target, so a bare label loses the URL entirely to any parser that doesn't follow
  hyperlinks.
- The Core Competencies table (a 3-column `tabular`) was replaced with a flat bullet list —
  multi-column tables are a known ATS risk, since some parsers read column-by-column
  instead of row-by-row and can scramble keyword order.

**Content, this round:**
- Added a 2-line **Summary** section, matching the portfolio's generic "AI engineer, prototype
  to production" framing rather than leading with narrow specialties.
- Projects expanded from one demo to three real ones, each with a working deep link back to
  the portfolio.
- **Core Competencies** now leads with Agentic AI & Multi-Agent Systems and adds Voice &
  Conversational AI, matching what the portfolio's Stack/Services sections now emphasize.
- **Technical Skills** absorbed the real, sourced tools from the three featured projects
  (FastAPI, Celery, Redis, ChromaDB, WebSockets, Whisper, ElevenLabs, Twilio, Ollama,
  Together AI, Supabase, ...) — a reviewer who checks the linked projects should find the
  skills list matches what's actually there.
- Frontend (React, Tailwind) kept to a single trailing line, not its own category — the
  positioning here is AI engineer, not full-stack/frontend developer.
- Acadally's end date changed from "Present" to **Dec 2025**.

## Page length — unverified

This grew by a full Summary section and two more projects (9 project bullets total, up from
3). With no LaTeX compiler available here, I could not confirm it still fits one page.
Compile it first — if it spills onto a second page, the first things to trim are the third
bullet on any one project, or the Certifications section.
