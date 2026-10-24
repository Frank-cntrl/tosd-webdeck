// Temporary colorway previews: /lavender, /emerald, /crimson, /ocean serve the
// same deck with a different accent color and matching drop.
export const colorways = {
  default: { accent: '#f5b942', logo: '/logo-gold.png' },
  lavender: { accent: '#b892e0', logo: '/logo-lavender.png' },
  emerald: { accent: '#5cb87a', logo: '/logo-emerald.png' },
  crimson: { accent: '#d65a5a', logo: '/logo-crimson.png' },
  ocean: { accent: '#6aa7d8', logo: '/logo-ocean.png' },
}

const raw = window.location.pathname.split('/').filter(Boolean)
const cwSeg = colorways[raw[0]] ? raw[0] : null
export const colorway = cwSeg ? colorways[cwSeg] : colorways.default
// path prefix that preserves the active colorway (e.g. '/lavender')
export const prefix = cwSeg ? `/${cwSeg}` : ''

// Path segments with any colorway stripped off the front.
const segs = cwSeg ? raw.slice(1) : raw

export const isGalleryPage = segs.includes('gallery')
export const isAnimationPage = segs.includes('animation')
// The October deck is now the site root. The original stacked deck lives on
// at /olddeck, and /octobermockup still resolves so shared links keep working.
export const isOldDeck = segs.includes('olddeck')

const octIdx = segs.indexOf('octobermockup')
export const isLegacyMockupPath = octIdx !== -1
// A person page is /<slug> at the root, or /octobermockup/<slug> as before.
export const personSlug = octIdx !== -1 ? (segs[octIdx + 1] ?? null) : (segs[0] ?? null)
