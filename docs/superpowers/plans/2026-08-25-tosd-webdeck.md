# TOSD WebDeck Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy the phase-1 static mockup site for The One Stop Drop at tostd.francces.co via GitHub Pages.

**Architecture:** Vite + React SPA. All copy lives in `src/content/site.js`; pages are thin renderers over that data. Tailwind for styling (dark & premium theme), MUI only for the mobile nav drawer and Plan-page accordions. React Router with a `404.html` fallback for GitHub Pages.

**Tech Stack:** Vite, React 18 (JavaScript), react-router-dom, Tailwind CSS v4 (@tailwindcss/vite), MUI (@mui/material, @emotion/react, @emotion/styled, @mui/icons-material).

## Global Constraints

- Spec: `docs/superpowers/specs/2026-08-25-tosd-webdeck-design.md` — content mapping and copy rules live there.
- Commit messages: short, lowercase, plain (e.g. `scaffold vite app`). **No Claude/AI attribution, no Co-Authored-By lines, ever.**
- Copy is verbatim-faithful to the pitch doc; fix typos (fFounder→Founder, willendeavors→endeavors, Irerra→Irrera); omit internal author notes/bracketed questions.
- All images are labeled `Placeholder` components — no real images.
- Dark palette: background `#0a0a0a`, surface `#141414`, accent amber/gold (`amber-400`/`#f5b942` range), body text `neutral-300`, headings white.
- No tests in phase 1. Verification per task = `npm run build` succeeds and affected routes render in dev server.
- Custom domain: `tostd.francces.co` (this spelling is intentional).

---

### Task 1: Scaffold app + theme + layout shell

**Files:**
- Create: Vite project in repo root (`package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/index.css`, `src/App.jsx`)
- Create: `src/components/Nav.jsx`, `src/components/Footer.jsx`
- Create: `.gitignore` (node_modules, dist)

**Interfaces:**
- Produces: `App.jsx` layout shell rendering `<Nav/>`, `<Outlet/>`, `<Footer/>`. Routes defined in `main.jsx` — later tasks add page elements to the route table. Nav reads link list from `src/content/site.js` (`nav.core` and `nav.explore` arrays of `{label, path}`).

- [ ] Step 1: `npm create vite@latest . -- --template react`, then install deps: `npm i react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material` and `npm i -D @tailwindcss/vite tailwindcss`.
- [ ] Step 2: Configure `vite.config.js` with react + tailwindcss plugins, `base: '/'`. `src/index.css` = `@import "tailwindcss";` plus `@theme` block defining fonts. Wire Google-free font stack (system serif display / sans body) — no external font CDN needed for mockup.
- [ ] Step 3: `index.html`: title "The One Stop Drop", meta description, dark background color to avoid white flash.
- [ ] Step 4: `main.jsx`: `createBrowserRouter` with `App` as layout route; placeholder index route. MUI `ThemeProvider` with `mode: 'dark'` theme + `CssBaseline`.
- [ ] Step 5: `Nav.jsx`: sticky top bar — wordmark left ("THE ONE STOP DROP" + drop glyph), desktop links (core pages inline, Explore dropdown for the 5 category pages), mobile hamburger opening MUI `Drawer` listing everything.
- [ ] Step 6: `Footer.jsx`: wordmark, two link columns (core / explore), credit line "Brian D. Morris — Glasschord Trustee", © line.
- [ ] Step 7: Verify `npm run dev` renders shell; `npm run build` passes. Commit: `scaffold app with layout shell`.

### Task 2: Content module

**Files:**
- Create: `src/content/site.js`

**Interfaces:**
- Produces: named export `site` object with keys: `brand {name, tagline}`, `nav {core[], explore[]}`, `home {mission[], highlights[], willDo[]}`, `about {description[], founder[], history[]}`, `partners {alliance[], offers[], valueProp[], ask[], seed[], capital[]}`, `plan {items[{id, title, body[] , bullets[]}], future {twoYear[], fiveYear[], closing}}`, `team {note, members[] (8 placeholder slots)}`, `categories {fineArt, comedy, music, cannabis, events}` each `{title, blurb, cardCount}`.

- [ ] Step 1: Transcribe all copy from the spec's source doc into the structure above, applying the copy rules from Global Constraints.
- [ ] Step 2: `npm run build` passes. Commit: `add site content`.

### Task 3: Shared components

**Files:**
- Create: `src/components/PageHeader.jsx`, `src/components/SectionHeading.jsx`, `src/components/Placeholder.jsx`, `src/components/CategoryGallery.jsx`

**Interfaces:**
- Produces:
  - `PageHeader({eyebrow, title, intro})` — page title band.
  - `SectionHeading({children})` — amber eyebrow-style section title.
  - `Placeholder({label, ratio})` — gradient block with dashed border + centered label (e.g. "Artist photo"); `ratio` = Tailwind aspect class string, default `aspect-video`.
  - `CategoryGallery({title, blurb, cardCount, cardLabel})` — full page layout: `PageHeader` + responsive grid (1/2/3 cols) of `Placeholder` cards with caption lines. Used by all 5 category pages.

- [ ] Step 1: Implement the four components with Tailwind, dark palette per Global Constraints.
- [ ] Step 2: Build passes. Commit: `add shared components`.

### Task 4: Core pages (Home, About, Partners, Plan, Team) + 404

**Files:**
- Create: `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/pages/Partners.jsx`, `src/pages/Plan.jsx`, `src/pages/Team.jsx`, `src/pages/NotFound.jsx`
- Modify: `src/main.jsx` (register routes `/`, `/about`, `/partners`, `/plan`, `/team`, `*`)

**Interfaces:**
- Consumes: `site` from content module; shared components from Task 3.

- [ ] Step 1: `Home` — full-height hero (drop glyph placeholder, wordmark, tagline, CTA buttons to /partners and /plan), mission paragraphs, highlights card grid, "The One Stop Drop will" list, closing CTA band.
- [ ] Step 2: `About` — description paragraphs, founder section with portrait `Placeholder`, history section with stat callouts (232 artists, mid-2000s, 20+ years).
- [ ] Step 3: `Partners` — alliance intro, offer list, value proposition, "Our Ask" cards (partnerships / investment / collaborators), seed funding detail, capital allocation two-column list, closing line.
- [ ] Step 4: `Plan` — intro ("Six-Month Plan of Action — proof of concept"), items A–I as MUI `Accordion`s (first expanded by default), "The Future" section: 2-year and 5-year roadmap cards + closing line.
- [ ] Step 5: `Team` — note that bios are being finalized; grid of 8 member cards: square `Placeholder` photo, "Name TBD", "Role TBD".
- [ ] Step 6: `NotFound` — simple centered 404 with link home. Register all routes; add `ScrollRestoration`.
- [ ] Step 7: Verify every route in dev server (desktop + narrow viewport); build passes. Commit: `add core pages`.

### Task 5: Category pages

**Files:**
- Create: `src/pages/FineArt.jsx`, `src/pages/Comedy.jsx`, `src/pages/Music.jsx`, `src/pages/Cannabis.jsx`, `src/pages/Events.jsx`
- Modify: `src/main.jsx` (routes `/fine-art`, `/comedy`, `/music`, `/cannabis`, `/events`)

**Interfaces:**
- Consumes: `CategoryGallery` + `site.categories.*`.

- [ ] Step 1: Each page is a one-liner rendering `CategoryGallery` with its category data (per spec section 4: stock-photo stand-ins to be replaced with select artists/comics/musicians).
- [ ] Step 2: Verify routes render; build passes. Commit: `add category pages`.

### Task 6: GitHub Pages deploy + custom domain

**Files:**
- Create: `public/CNAME` (`tostd.francces.co`), `.github/workflows/deploy.yml`
- Modify: `vite.config.js` if needed (base stays `/` for custom domain)

**Interfaces:**
- Consumes: built `dist/` output. SPA fallback: workflow copies `dist/index.html` to `dist/404.html` before upload.

- [ ] Step 1: Write workflow: on push to main → checkout, setup-node 20, `npm ci`, `npm run build`, `cp dist/index.html dist/404.html`, upload-pages-artifact, deploy-pages. Permissions `pages: write, id-token: write`.
- [ ] Step 2: Create GitHub repo with `gh repo create`, push main.
- [ ] Step 3: Enable Pages (workflow source) via `gh api`; confirm workflow run succeeds; set custom domain `tostd.francces.co` via `gh api`.
- [ ] Step 4: Verify site at the github.io URL; give user the exact DNS record to add (`CNAME tostd → <username>.github.io`) and note HTTPS cert provisioning after DNS propagates. Commit: `add pages deploy workflow`.
