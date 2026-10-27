// Content for the October mockup (/octobermockup): the October language
// document, as amended by the Oct 20 Jesse + Brian deck notes.
// The old deck at /olddeck still renders site.js, so copy here deliberately
// diverges from it; do not "sync" the two.
// Pulled from site.js unchanged, because the document reproduces them
// verbatim: the history timeline, the documentaries, the executive summary.

import { site } from './site.js'

export const mock = {
  hero: {
    // Stand-in for the "edge to edge montage gif". Swap `video` in to replace
    // the cross-fade with a real file.
    video: null,
    montage: [
      ...Array.from({ length: 9 }, (_, i) => `/photos/gallery/g${String(i + 1).padStart(2, '0')}.jpg?v=2`),
      // g10 reframed around the painting on the right: the full frame lost it
      // to the edge once object-cover cropped for a phone.
      '/photos/mock/hero-painting.jpg',
    ],
    pillars: ['Fine Art', 'Comedy', 'Music', 'Cannabis'],
  },
  welcome: {
    eyebrow: 'Welcome',
    // Set as a three-line stanza; the name and short form come from site.brand.
    lead: 'Welcome to',
    // Segments so "weedeasy" can be italicized, per Jesse's note.
    body: [
      {
        text: 'As we turn the page on another era of prohibition in New York City, The One Stop Drop (TOST’D) is here to provide space for people to enjoy the legalization of cannabis along with world-class artists, comedians and musicians. A ',
      },
      { text: 'weedeasy', em: true },
      { text: '. So enjoy the art, grab a drink, and feel free to light up — everybody’s chill.' },
    ],
  },
  intro: {
    eyebrow: 'Introduction',
    heading: 'Culture, Curated. Networks, Integrated.',
    body: [
      'TOST’D is a cannabis hospitality and entertainment company that curates events and original content in collaboration with dispensaries and venues, in preparation for cannabis consumption licenses, available in 2027 in New York State.',
      'Queens’ own Brian Morris started out as a dealer and performer and grew into a curator and entrepreneur. TOST’D is his latest venture. Since stepping into the art scene in the early-2000s, Brian has featured hundreds of fine artists, comedians and musicians at his shows and in his galleries. Now, together, we are ready to connect the cannabis industry to the highest caliber of art and entertainment the city has to offer.',
    ],
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
    // 10/25/26 edits: "first year" rather than six months, quarterly
    // exhibitions rather than one month-long show.
    body: [
      {
        text: 'Over its first year of operations, TOST’D will produce monthly events across a strategic network of partner venues, all featuring comedy, music and cannabis. We will curate quarterly fine art exhibitions featuring emerging and mid-career fine artists, the first inspired by ',
      },
      { text: 'Death and Rebirth', em: true },
      { text: '.' },
    ],
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
    // Oct 20 notes: "Scrap everybody but the top five." Brian is listed here
    // with everyone else rather than getting his own section, and uses the
    // rooftop photo ("Roof better - too many me for sure!").
    members: [
      { name: 'Brian D. Morris', role: 'CEO & Founder', photo: '/photos/brian-rooftop.jpg', cardPhoto: '/photos/cards/brian-rooftop.jpg' },
      {
        name: 'Thomas Fishwick',
        role: 'Emmy Award Winning Filmmaker',
        photo: '/photos/thomas.jpg',
        cardPhoto: '/photos/cards/thomas.jpg',
        bio: 'Thomas Fishwick is an Emmy Award-winning cinematographer known for striking visuals. His credits include HBO Max, CNN, ABC News Studios, Rubber Ring Films, and Comedians in Cars Getting Coffee.',
      },
      {
        name: 'Jesse LaVercombe',
        role: 'Director of Communications',
        photo: '/photos/jesse.jpg',
        cardPhoto: '/photos/cards/jesse.jpg',
        photoCredit: 'Photo by Dahlia Katz',
        bio: 'Jesse LaVercombe is a writer and actor based in Toronto. He co-wrote the film Code 8: Part II, which hit #1 on Netflix in 71 countries, and he and Ahmed Moneka wrote the book for the hit musical It’s a Good Life if You Don’t Weaken featuring the catalog of The Tragically Hip, currently touring Canada. Jesse and Ahmed also co-created and starred in the Dora-winning theatre production King Gilgamesh, featuring Ahmed’s Arabic Jazz band, which played in Minneapolis, Chicago, New York City, Halifax, and twice in Toronto. As an actor, he won the Toronto ACTRA Award and received a Canadian Screen Award nomination for Violation (Sundance, TIFF) and performed on stages across the U.S. and Canada. He also sits on the board of the Zephyr Theatre in Minnesota.',
      },
      {
        name: 'Chris Cheney',
        role: 'Graphic Designer',
        photo: '/photos/chris.jpg',
        cardPhoto: '/photos/cards/chris.jpg',
        bio: 'Chris Cheney is a New York City-based multidisciplinary designer who specializes in storytelling through brand development, product design, and apparel.',
      },
      {
        name: 'Franccesco Petta',
        role: 'Web Design & Management',
        photo: '/photos/franccesco.jpg',
        cardPhoto: '/photos/cards/franccesco.jpg',
      },
    ],
  },
  collage: {
    image: '/photos/mock/collage.jpg',
    alt: 'Collage of NYC art, comedy, music and cannabis imagery around a gold drop',
  },
}

// Cut by the Oct 20 notes ("Scrap everybody but the top five"), kept here so
// the written bios aren't lost if the roster comes back:
//
//   Fine Art — Min Kim (Fine Artist & Designer): "Min Kim is a Fine Artist
//     and Designer featured in museums, galleries and luxury brands,
//     including MoMA PS1, Tiffany, Chanel, Louis Vuitton and more."
//   Fine Art — Noah Post (Artist / Curator / Creative), Philip Knoll
//     (Artist / Curator), Sue Knoll (Artist / Curator)
//   Comedy — Tait Winston (Comedy Artist / Producer / Writer). The notes say
//     his bio is "on previous deck"; it is not in this repo or its history.
//   Music — Joel Thome (Grammy Award Winning Composer), Verna Gillis
//     (NYC Soundscapes), Per Vikstrom (Tour Manager — Hall & Oates, Mariah
//     Carey), Robert G. Garcia (Jazz Drummer), Phil Moffa (Musician / Audio
//     Engineer / Grammy)
//   Film & Documentary — Jamal Hodge (Writer & Director): "Jamal Hodge is a
//     Bram Stoker Award-winning writer, a Nebula Award finalist, and an
//     award-winning director. His producing credits include the Academy
//     Award-nominated documentary Armed Only With a Camera: The Life & Death
//     of Brent Renaud (co-producer) and the animated feature film Pierre the
//     Pigeon Hawk."
//   Film & Documentary — Brian Licata, Pete Demas

// The timeline entries are site.js verbatim; these artworks hang on the
// mockup's copy only, so the deck at / is unaffected. "The Gallery Years"
// already carries the Ginzel sculpture from site.js.
const historyImages = {
  'The Spark': {
    src: '/photos/mock/spark.jpg',
    label: 'Painting of a figure reclining among flowers, foliage and coral',
  },
  Glasschord: {
    src: '/photos/mock/glasschord.jpg',
    label: 'Burning phoenix sculpture standing in snow',
  },
  'The Slow Burn': {
    src: '/photos/mock/slow-burn.jpg',
    label: 'Painting of a figure surrounded by flames',
  },
}

export const history = site.about.history.map((e) => {
  // The review quotes moved to the press tabs, so drop them here.
  const { quotes, ...rest } = e
  return historyImages[e.title] ? { ...rest, image: historyImages[e.title] } : rest
})

// Each person gets their own page at /octobermockup/<slug> so bios live
// there instead of as a wall of text on the mockup itself. Slugs are derived
// from the name, so renaming someone changes their URL — fine while this is
// a mockup, worth pinning if these links ever get shared widely.
export const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const people = mock.people.members.map((m) => ({
  ...m,
  group: mock.people.eyebrow,
  slug: slugify(m.name),
}))

export const personBySlug = (slug) => people.find((p) => p.slug === slug) ?? null

// Everyone else in the same group, for the "more from" row on a person page.
export const groupSiblings = (person) =>
  people.filter((p) => p.group === person.group && p.slug !== person.slug)

const galleryYears = site.about.history.find((e) => e.title === 'The Gallery Years')

// 10/27/26: the Pete Tobey interview and the two review quotes open as tabs
// together. The reviews are pulled from site.js so the wording stays single
// -sourced, and `history` below strips them out of the timeline entry so the
// same quotes are not shown twice.
export const press = {
  eyebrow: 'In the Press',
  image: {
    src: '/photos/mock/skyline.jpg',
    alt: 'Painting of the Manhattan skyline at night in deep blue, the Empire State Building lit at its centre',
  },
  tabs: [
    {
      title: 'Interview — April 2014',
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
    ...galleryYears.quotes.map((q) => {
      const [person, outlet] = q.attribution.split(', ')
      return { title: `${outlet} — ${person}`, quote: q.text, attribution: q.attribution }
    }),
  ],
}
