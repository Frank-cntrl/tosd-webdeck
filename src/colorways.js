// Temporary colorway previews: /lavender, /emerald, /crimson, /ocean serve the
// same one-page deck with a different accent color and matching drop.
export const colorways = {
  default: { accent: '#f5b942', logo: '/logo-gold.png' },
  lavender: { accent: '#b892e0', logo: '/logo-lavender.png' },
  emerald: { accent: '#5cb87a', logo: '/logo-emerald.png' },
  crimson: { accent: '#d65a5a', logo: '/logo-crimson.png' },
  ocean: { accent: '#6aa7d8', logo: '/logo-ocean.png' },
}

const seg = window.location.pathname.split('/').filter(Boolean)[0]
export const colorway = colorways[seg] ? colorways[seg] : colorways.default
