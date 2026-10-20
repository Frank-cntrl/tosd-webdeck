// Content for the October mockup (/octobermockup) — the October language
// document. The main deck at / still renders site.js, so copy here
// deliberately diverges from it; do not "sync" the two.
// Pulled from site.js unchanged (the document matches it): the history
// timeline, the documentaries, and the executive summary.

export const mock = {
  hero: {
    // Stand-in for the "edge to edge montage gif". Swap `video` in to replace
    // the cross-fade with a real file.
    video: null,
    montage: Array.from({ length: 10 }, (_, i) => `/photos/gallery/g${String(i + 1).padStart(2, '0')}.jpg?v=2`),
    pillars: ['Fine Art', 'Comedy', 'Music', 'Cannabis'],
  },
  welcome: {
    eyebrow: 'Welcome',
    // Set as a three-line stanza; the name and short form come from site.brand.
    lead: 'Welcome to',
    body: 'As we turn the page on another era of prohibition in New York City, The One Stop Drop (TOST’D) is here to provide space for people to enjoy the legalization of cannabis along with world-class artists, comedians and musicians. A weedeasy. So enjoy the art, grab a drink, and feel free to light up — everybody’s chill.',
  },
  intro: {
    eyebrow: 'Introduction',
    heading: 'Culture, Curated. Networks, Integrated.',
    body: [
      'TOST’D is a cannabis hospitality and entertainment company that curates events and original content in collaboration with dispensaries and in preparation for cannabis consumption licenses, available in 2027 in New York State.',
      'Queens’ own Brian Morris started out as a dealer and performer and grew into a curator and entrepreneur. TOST’D is his latest venture. Since stepping into the art scene in the early-2000s, Brian has featured hundreds of fine artists, comedians and musicians at his shows and in his galleries. Now, together, we are ready to connect the cannabis industry to the highest caliber of art and entertainment the city has to offer.',
    ],
  },
  // Carried by the full-bleed slot the mockup used for "The Opportunity".
  value: {
    eyebrow: 'Value Proposition',
    image: '/photos/mock/opportunity.jpg',
    lead: 'By providing our cannabis brand partners with programming and marketing that drive traffic for their brands — without the necessity of including cannabis, thus circumventing advertising restrictions — we can activate an ecosystem of culture and commerce across cultural touchpoints.',
    body: 'On-site consumption licenses in New York are projected to be available and effective in 2027. Our timing is perfectly aligned with the range of opportunities this will present. With your support, we will produce an incredible season of programming and position ourselves as leaders within these industries. We also believe this is scalable across New York State and beyond.',
  },
  brian: {
    eyebrow: 'Brian Morris',
    photo: '/photos/brian-rooftop.jpg',
    photoAlt: 'Brian Morris crouched on a rooftop railing above the Lower East Side',
    galleryLabel: 'A Glimpse at the Past',
  },
  partners: {
    eyebrow: 'An Alliance for Culture and Growth',
    headline: 'For Brands and Partners',
    offers: [
      'The ability to co-own events and content at scale ahead of national legalization',
      'Shared audiences across artists, dispensaries and venues',
      'Creative solutions to marketing restrictions around cannabis',
    ],
  },
  plan: {
    title: 'Plan of Action',
    body: 'Over its first six months of operations, TOST’D will produce monthly events across a strategic network of partner venues, all featuring comedy, music and cannabis. In the fourth month, we will curate our first quarterly month-long fine art exhibition, featuring small works by 22 fine artists exploring Death and Rebirth. Once this foundation is set, we will build towards two more years of programming to scale our production capacity, agency, and long-term business model, including a flagship location.',
  },
  seeking: {
    title: 'Actively Seeking',
    body: '$50K has already been secured. We are raising an additional $200K in seed funding to execute the first six months of programming. Investor participation can include brand placement, revenue share from ticketing, cannabis, and content sales, debt financing, and/or early equity in TOST’D.',
  },
  capital: {
    title: 'Capital Will Support',
    items: [
      'Marketing',
      'Executive team and talent',
      'Brand and business development',
      'Content production and event operations',
    ],
    note: 'Our existing relationships will keep these costs very low, while allowing us to maintain the highest standards of quality across our productions.',
  },
  people: {
    eyebrow: 'The People Behind The Drop',
    members: [
      // Brian: "no need for bio" per the October notes.
      { name: 'Brian D. Morris', role: 'CEO & Founder', photo: '/photos/brian.jpg' },
      { name: 'Thomas Fishwick', role: 'Emmy Award Winning Filmmaker' },
      {
        name: 'Jesse LaVercombe',
        role: 'Director of Communications',
        // Jesse offered a headshot; we don't have the file yet.
        bio: 'Jesse LaVercombe is a writer and actor based in Toronto. He co-wrote the film Code 8: Part II, which hit #1 on Netflix in 71 countries, and he and Ahmed Moneka wrote the book for the hit musical It\u2019s a Good Life if You Don\u2019t Weaken featuring the catalog of The Tragically Hip, currently touring Canada. Jesse and Ahmed also co-created and starred in the Dora-winning theatre production King Gilgamesh, featuring Ahmed\u2019s Arabic Jazz band, which played in Minneapolis, Chicago, New York City, Halifax, and twice in Toronto. As an actor, he won the Toronto ACTRA Award and received a Canadian Screen Award nomination for Violation (Sundance, TIFF) and performed on stages across the U.S. and Canada. He also sits on the board of the Zephyr Theatre in Minnesota.',
      },
      { name: 'Chris Cheney', role: 'Graphic Designer' },
      { name: 'Franccesco Petta', role: 'Web Design & Management' },
    ],
  },
  // Consultants, curators and early featured artists, grouped by discipline.
  // Names with no credit in the October notes carry an empty `credit`.
  roster: {
    eyebrow: 'Consultants, Curators & Early Featured Artists',
    groups: [
      {
        title: 'Fine Art',
        people: [
          {
            name: 'Min Kim',
            credit: 'Fine Artist & Designer',
            bio: 'Min Kim is a Fine Artist and Designer featured in museums, galleries and luxury brands, including MoMA PS1, Tiffany, Chanel, Louis Vuitton and more.',
          },
          { name: 'Noah Post', credit: 'Artist / Curator / Creative' },
          { name: 'Philip Knoll', credit: 'Artist / Curator' },
          { name: 'Sue Knoll', credit: 'Artist / Curator' },
        ],
      },
      {
        title: 'Comedy',
        people: [
          {
            name: 'Tait Winston',
            credit: 'Comedy Artist / Producer / Writer',
            // October notes: "may take on a role within executive team -
            // bio on previous deck". That bio is not in this repo or its
            // history; drop it in as `bio` when it turns up.
          },
        ],
      },
      {
        title: 'Music',
        people: [
          { name: 'Joel Thome', credit: 'Grammy Award Winning Composer' },
          { name: 'Verna Gillis', credit: 'NYC Soundscapes' },
          { name: 'Per Vikstrom', credit: 'Tour Manager \u2014 Hall & Oates, Mariah Carey' },
          { name: 'Robert G. Garcia', credit: 'Jazz Drummer' },
          { name: 'Phil Moffa', credit: 'Musician / Audio Engineer / Grammy' },
        ],
      },
      {
        title: 'Film & Documentary',
        people: [
          {
            name: 'Jamal Hodge',
            credit: 'Writer & Director',
            bio: 'Jamal Hodge is a Bram Stoker Award-winning writer, a Nebula Award finalist, and an award-winning director. His producing credits include the Academy Award-nominated documentary Armed Only With a Camera: The Life & Death of Brent Renaud (co-producer) and the animated feature film Pierre the Pigeon Hawk.',
          },
          { name: 'Brian Licata', credit: '' },
          { name: 'Pete Demas', credit: '' },
        ],
      },
    ],
  },
  collage: {
    image: '/photos/mock/collage.jpg',
    alt: 'Collage of NYC art, comedy, music and cannabis imagery around a gold drop',
  },
  // The document heads this block with the date only — no "I Know the Deal".
  article: {
    eyebrow: 'From April 2014',
    lines: [
      { speaker: 'Pete Tobey', text: 'Why an art dealer?' },
      { speaker: 'Brian Morris', text: 'Because, Pete, I know the deal.' },
      {
        speaker: '',
        text: 'I’ve been around dealers of all kinds all my life. I’ve seen dealers sell bags of weed through mailbox slots in East New York, and I’ve seen people make multi-million dollar real estate deals, and everything in between.',
      },
      {
        speaker: '',
        text: 'I have been surrounded by artists, always have been: painters, writers, dancers, comedians, musicians, actors, rappers and poets.',
      },
      {
        speaker: '',
        text: 'They inspire me to create and live fully, and now I have an opportunity to share their work with the world. I’m a facilitator by nature and I absolutely love being at the confluence for all these creative individuals to come together and create dialogue. There is a wonderful ethos that is happening down here on Chrystie Street. I welcome the collaboration, the debate, the harmony and even the discord – those little moments when egos are diminished and the soul and the spirit of the converging energies involved take over. It’s really wonderful and exciting.',
      },
    ],
    attribution: 'NY Arts Magazine',
  },
}

// Each person gets their own page at /octobermockup/<slug> so bios live
// there instead of as a wall of text on the mockup itself. Slugs are derived
// from the name, so renaming someone changes their URL — fine while this is
// a mockup, worth pinning if these links ever get shared widely.
export const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// Flat index of everyone on the page, in the order they appear.
export const people = [
  ...mock.people.members.map((m) => ({ ...m, group: mock.people.eyebrow })),
  ...mock.roster.groups.flatMap((g) => g.people.map((p) => ({ ...p, group: g.title }))),
].map((p) => ({ ...p, slug: slugify(p.name) }))

export const personBySlug = (slug) => people.find((p) => p.slug === slug) ?? null

// Everyone else in the same group, for the "more from" row on a person page.
export const groupSiblings = (person) =>
  people.filter((p) => p.group === person.group && p.slug !== person.slug)
