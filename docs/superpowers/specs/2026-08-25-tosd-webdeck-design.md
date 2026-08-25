# TOSD WebDeck — Phase 1 Mockup Design

**Date:** 2026-08-25
**Status:** Approved by user (structure: multi-page, look: dark & premium, subdomain: tostd.francces.co — intentional spelling)

## Purpose

A frontend-only mockup website ("WebDeck") for The One Stop Drop (TOSD), a NYC-based
production & media company integrating fine art, comedy, music, and cannabis. The site
presents the company's pitch content to potential partners and investors. Phase 1 is a
static mockup: no backend, no real images (labeled placeholders swapped in later), no
working forms.

## Hosting & Domain

- Hosted on **GitHub Pages** from a new GitHub repository.
- Custom subdomain: **tostd.francces.co** (user owns francces.co; spelling TOSTD confirmed intentional).
- Deployed via GitHub Actions workflow (build on push to main, deploy to Pages).
- `public/CNAME` file containing `tostd.francces.co`.
- User adds one DNS record at their registrar: `CNAME tostd -> <github-username>.github.io`.
  GitHub username to be collected at deploy time.

## Stack

- **Vite + React** (JavaScript, not TypeScript — keep phase 1 simple)
- **React Router** (BrowserRouter; `404.html` copy of `index.html` for GitHub Pages SPA fallback)
- **Tailwind CSS** — primary styling, mobile-first responsive
- **MUI** — used sparingly: mobile nav drawer, accordions on The Plan page
- No state management, no backend, no analytics

## Visual Direction

- Dark & premium: near-black backgrounds (#0a0a0a range), warm gold/amber accent,
  generous whitespace, one display font for headings paired with a clean body font.
- Logo: text wordmark "The One Stop Drop" with a simple drop-icon placeholder (final
  logo TBD from media package).
- All imagery: labeled placeholder blocks (subtle gradient + caption like "Artist photo")
  so real photos can be dropped in later without layout changes.

## Pages (11 routes)

### Core pages

1. **Home** (`/`) — hero (wordmark + drop logo placeholder + tagline), mission statement,
   "Highlights" bullet content as a card grid, "What TOSD will do" list, CTA to Partners page.
2. **About** (`/about`) — company description, founder story (Brian Morris, Queens native,
   20+ years), History section folded in (232 artists featured, producing since mid-2000s).
3. **Partners & Investors** (`/partners`) — strategic alliance pitch, brand offer list,
   value proposition, "Our Ask" (licensed cannabis brand partnerships, $250k–$1.5m
   investor target, $100–250K seed detail, offered terms), capital allocation list.
4. **The Plan** (`/plan`) — six-month plan items A–I as MUI accordions (avoids wall of
   text), including "Death & Rebirth Walk Into A Bar" exhibition, The Roll Up Series,
   two documentaries (Dom Irrera; "Mentors" with Greer Barnes, Keith Robinson, Tony
   Woods). "The Future" 2-year / 5-year roadmap at the bottom.
5. **Team** (`/team`) — placeholder grid of cards (photo block + "Name / Role / Bio
   coming soon"), ready for real bios later.

### Category showcase pages (from doc section 4)

Each is a gallery-style page demonstrating the curated online space: intro blurb +
responsive grid of placeholder media cards (to be replaced with select artists, comics,
musicians later).

6. **Fine Art** (`/fine-art`)
7. **Comedy** (`/comedy`)
8. **Music** (`/music`)
9. **Cannabis** (`/cannabis`) — cannabis & cannabis brand partners/sponsors
10. **Live Events** (`/events`)

### Navigation

- Desktop: top nav bar — core pages as direct links; the five category pages grouped
  under an "Explore" dropdown (or inline if space allows).
- Mobile: MUI drawer with all links.
- Footer: wordmark, nav links, "Brian D. Morris — Glasschord Trustee" credit.

## Content Handling

- Source copy comes from the user's pitch document, kept verbatim-faithful in substance.
- Fix obvious typos ("fFounder" → "Founder", "willendeavors" → "endeavors", "Irerra" → "Irrera").
- Omit internal author notes and bracketed brainstorm questions ("HISTORY – incorporate
  into here?", "(Are you aiming just for NYC...)", "*Leave a Space for the team...", etc.).
- Content lives in a small `src/content/` module (plain JS objects) so text edits don't
  require touching components.

## Component Structure

```
src/
  main.jsx            — router + MUI theme (dark) + Tailwind entry
  App.jsx             — layout shell: Nav, <Outlet/>, Footer
  components/
    Nav.jsx           — responsive nav (Tailwind desktop, MUI Drawer mobile)
    Footer.jsx
    PageHeader.jsx    — shared page title/intro band
    Placeholder.jsx   — labeled image placeholder block
    SectionHeading.jsx
    CategoryGallery.jsx — shared layout for the 5 showcase pages
  pages/
    Home.jsx, About.jsx, Partners.jsx, Plan.jsx, Team.jsx,
    FineArt.jsx, Comedy.jsx, Music.jsx, Cannabis.jsx, Events.jsx
  content/
    site.js           — all copy as data
```

## Error Handling / Edge Cases

- Unknown routes render a simple 404 page within the layout.
- GitHub Pages SPA refresh handled by `404.html` fallback copy.

## Testing / Verification

- Phase 1 mockup: no unit tests. Verification = `npm run build` succeeds, manual
  check of every route in dev server (desktop + mobile viewport), then live check
  on GitHub Pages URL after deploy.

## Out of Scope (Phase 1)

- Real images, final logo, team bios (placeholders only)
- Contact forms, ticketing, calendar, CMS
- SEO beyond basic titles/meta description
