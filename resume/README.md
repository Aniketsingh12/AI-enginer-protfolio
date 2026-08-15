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

## Before you compile — two things flagged in the source

Both are marked `% TODO` comments in `resume.tex` (invisible in the rendered PDF):

1. **LinkedIn slug** — `\linkedin{aniketsingh}` assumes your profile is
   `linkedin.com/in/aniketsingh`. Verify that's actually your URL.
2. **Project repo link** — the MCP AI Assistant project links to your GitHub profile root
   (`github.com/Aniketsingh12`) as a placeholder, not that specific project's repo. Point it
   at the real one.

## What was fixed from the original

- A corrupted icon glyph in the Projects section (showed as `??` — a UTF-8 encoding break)
  was replaced with a proper `\faGithub` icon.
- LinkedIn/GitHub links now show the actual URL as visible text (`linkedin.com/in/...`,
  `github.com/...`) instead of just the word "LinkedIn"/"GitHub" — most ATS systems only
  extract visible PDF text, not the underlying link target, so a bare label loses the URL
  entirely to any parser that doesn't follow hyperlinks.
- The Core Competencies table (a 3-column `tabular`) was replaced with a flat bullet list.
  Multi-column tables are a known ATS-parsing risk — some parsers read column-by-column
  instead of row-by-row, which can scramble the order keywords come out in.
- Added `fontenc` (T1) and switched `fontawesome` → `fontawesome5` (the maintained,
  current package) — the same class of encoding gap that caused the broken glyph above.
- All dates normalized to `Mon YYYY` (was a mix of `06 2024` and similar) and to real en
  dashes via LaTeX's `--`, not a raw Unicode `–` character — raw non-ASCII characters
  in a font that doesn't declare them properly is exactly what produced the broken glyph
  bug in the first place.
- Added `\hypersetup` so links render as plain black text, not the default blue
  colored-and-boxed hyperref style.
- The GitHub handle in the header was `aniketsingh`; the actual one (confirmed from the
  portfolio site's own contact links) is `Aniketsingh12` — fixed to match.
- Acadally's end date changed from "Present" to **Dec 2025**, per request.

## Content this did *not* touch

The Projects section still lists only one project (a LangChain/Streamlit demo from Dec
2024). The site's five case studies — MCP Forge, TaskForce, Sonari, Lumio, MarketMind —
are considerably more substantial and aren't on the resume at all. Worth adding if you want
resume and portfolio to tell the same story; ask if you'd like bullets drafted for them.

Ending the Acadally role in Dec 2025 also opens a gap between then and now (Aug 2026) with
nothing filling it — not something to silently paper over, just flagging it's there.
