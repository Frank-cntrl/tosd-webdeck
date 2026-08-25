# The One Stop Drop — WebDeck (Phase 1)

Frontend-only mockup site for The One Stop Drop. React + Vite + Tailwind + MUI.

- **Live:** https://tostd.francces.co (custom domain) / https://frank-cntrl.github.io/tosd-webdeck/
- **Deploy:** pushes to `main` auto-deploy to GitHub Pages via Actions.

## Development

```
npm install
npm run dev
```

## DNS

At the registrar for `francces.co`, add:

```
Type: CNAME
Host: tostd
Value: frank-cntrl.github.io
```

After propagation, enable "Enforce HTTPS" in the repo's Pages settings once the certificate is issued.

## Content

All site copy lives in `src/content/site.js`. Images are placeholders — swap them in `src/components/Placeholder.jsx` usages as real assets arrive.
