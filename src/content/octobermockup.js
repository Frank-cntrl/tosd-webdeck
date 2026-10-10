// Content specific to the October mockup (/octobermockup).
// Everything else is pulled from site.js so the two stay in sync.
// `tbd` entries mark copy the mockup flagged for rework but did not supply.

export const mock = {
  hero: {
    // Stand-in for the "edge to edge montage gif". Swap `video` in to replace
    // the cross-fade with a real file.
    video: null,
    montage: Array.from({ length: 10 }, (_, i) => `/photos/gallery/g${String(i + 1).padStart(2, '0')}.jpg?v=2`),
    pillars: ['Fine Art', 'Comedy', 'Music', 'Cannabis'],
  },
  mission: {
    tbd: 'Mission line that sells the experience, not the category list',
  },
  cta: {
    tbd: 'Reworked primary CTA — needs a conversation',
  },
  pillars: {
    tbd: 'What is TOSD — hospitality in: literal (fine art, comedy, music, cannabis) / ethereal (live, exhibit, media, destination)',
  },
  historyNote: {
    tbd: 'Short note on why our history matters',
  },
  opportunity: {
    eyebrow: 'The Opportunity',
    image: '/photos/mock/opportunity.jpg',
    body: 'NY cannabis is maturing, but brands can’t advertise normally. On-site consumption licenses are expected in 2027. Culture is the way in, and nobody owns that space in NYC yet.',
  },
  brian: {
    eyebrow: 'Brian Morris',
    photo: '/photos/brian-rooftop.jpg',
    photoAlt: 'Brian Morris crouched on a rooftop railing above the Lower East Side',
    bioTbd: 'Condensed founder bio',
    articleTbd: 'Article — link or pull quote',
    sliderLabel: 'From the galleries',
  },
  staff: {
    eyebrow: 'Other Staff',
    members: Array.from({ length: 4 }, () => ({
      name: 'Name TBD',
      role: 'Role TBD',
      creditTbd: 'Credits',
    })),
  },
  collage: {
    image: '/photos/mock/collage.jpg',
    alt: 'Collage of NYC art, comedy, music and cannabis imagery around a gold drop',
  },
}
