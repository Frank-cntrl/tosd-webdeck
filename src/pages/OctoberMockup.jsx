import GalleryGrid from '../components/GalleryGrid'
import Timeline from '../components/Timeline'
import HeroMontage from '../components/mock/HeroMontage'
import Panel from '../components/mock/Panel'
import Tbd from '../components/mock/Tbd'
import { colorway, prefix } from '../colorways'
import { site } from '../content/site'
import { mock } from '../content/octobermockup'

const { brand, home, about, partners, plan, investment } = site

function Eyebrow({ children }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{children}</p>
  )
}

function Bullets({ items }) {
  return (
    <ul className="max-w-3xl">
      {items.map((o) => (
        <li
          key={o}
          className="border-t border-edge py-4 text-base leading-relaxed text-neutral-300"
        >
          {o}
        </li>
      ))}
    </ul>
  )
}

export default function OctoberMockup() {
  return (
    <div className="min-h-screen bg-ink">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href={`${prefix}/octobermockup`} className="flex shrink-0 items-center gap-2">
            <img src={colorway.logo} alt="" className="h-7 w-auto" />
            <span className="whitespace-nowrap font-display text-lg uppercase tracking-widest text-white sm:text-xl">
              {brand.name}
            </span>
          </a>
          <a
            href={`${prefix}/`}
            className="text-sm tracking-wide text-neutral-300 transition-colors hover:text-accent"
          >
            ← Current deck
          </a>
        </nav>
      </header>

      {/* Hero — full-bleed montage, logo overlaid */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-edge">
        <HeroMontage images={mock.hero.montage} video={mock.hero.video} />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative flex flex-col items-center px-4 py-24 text-center">
          <img src={colorway.logo} alt="The One Stop Drop logo" className="h-28 w-auto sm:h-36" />
          <h1 className="mt-8 font-display text-4xl uppercase tracking-[0.15em] text-white sm:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-4 font-display text-xl uppercase tracking-[0.2em] text-white sm:text-2xl">
            {home.heroTitle}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-accent">
            {mock.hero.pillars.join(' · ')}
          </p>
        </div>
      </section>

      {/* Mission + CTAs */}
      <section className="border-b border-edge bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <Eyebrow>Mission Statement</Eyebrow>
          <blockquote>
            <p className="font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
              “{home.missionQuote}”
            </p>
          </blockquote>
          <Tbd className="mx-auto mt-6 max-w-xl">{mock.mission.tbd}</Tbd>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#plan"
              className="rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent"
            >
              See The Plan
            </a>
            <a
              href="#closing"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
            >
              Partner With Us
            </a>
          </div>
          <Tbd className="mx-auto mt-6 max-w-xl">{mock.cta.tbd}</Tbd>
        </div>
      </section>

      {/* Introduction — full-bleed background photo */}
      <section className="relative overflow-hidden border-b border-edge">
        <img
          src="/photos/mock/intro-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <Eyebrow>Introduction</Eyebrow>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{home.introHeading}</h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-300">
            {home.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <Tbd className="mt-10">{mock.pillars.tbd}</Tbd>
        </div>
      </section>

      {/* History */}
      <section id="history" className="border-b border-edge scroll-mt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Eyebrow>{about.historyEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{about.historyHeading}</h2>
          <Tbd className="mt-6">{mock.historyNote.tbd}</Tbd>
          <div className="mt-10">
            <Timeline entries={about.history} />
          </div>
        </div>
      </section>

      {/* The Opportunity — full-bleed, copy in the negative space */}
      <section className="relative overflow-hidden border-b border-edge">
        <img
          src={mock.opportunity.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6">
          <div className="max-w-lg">
            <Eyebrow>{mock.opportunity.eyebrow}</Eyebrow>
            <p className="font-display text-2xl leading-relaxed text-white sm:text-3xl">
              {mock.opportunity.body}
            </p>
          </div>
        </div>
      </section>

      {/* Brian — bio, article, gallery slider */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Eyebrow>{mock.brian.eyebrow}</Eyebrow>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <img
              src={mock.brian.photo}
              alt={mock.brian.photoAlt}
              className="w-full rounded-md"
            />
            <div className="space-y-8">
              <Tbd>{mock.brian.bioTbd}</Tbd>
              <Tbd>{mock.brian.articleTbd}</Tbd>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  {mock.brian.sliderLabel}
                </p>
                <GalleryGrid limit={4} />
                <div className="mt-6">
                  <a
                    href={`${prefix}/gallery`}
                    className="rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other staff */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Eyebrow>{mock.staff.eyebrow}</Eyebrow>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mock.staff.members.map((m, i) => (
              <div key={i}>
                <div className="aspect-square w-full rounded-md border border-dashed border-neutral-700 bg-gradient-to-br from-surface to-ink" />
                <p className="mt-3 text-sm text-white">{m.name}</p>
                <p className="text-xs text-neutral-500">{m.role}</p>
                <Tbd className="mt-3">{m.creditTbd}</Tbd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual summary collage */}
      <section className="border-b border-edge">
        <img src={mock.collage.image} alt={mock.collage.alt} className="w-full" />
      </section>

      {/* Closing — dropdowns like history */}
      <section id="closing" className="scroll-mt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Panel title={partners.headline} defaultOpen>
            <p className="mb-6 text-base leading-relaxed text-neutral-400">{partners.alliance}</p>
            <Bullets items={partners.offers} />
          </Panel>

          <Panel title={plan.title}>
            <div className="space-y-5 text-base leading-relaxed text-neutral-400">
              {plan.summary.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Panel>

          <Panel title={investment.askHeading}>
            <Bullets items={investment.ask} />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-300">
              <p>{investment.seed}</p>
              {investment.timing && <p>{investment.timing}</p>}
              <p>{investment.closing}</p>
            </div>
          </Panel>

          <Panel title={investment.capitalHeading}>
            <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {investment.capital.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-neutral-300">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base italic leading-relaxed text-neutral-400">
              {investment.capitalNote}
            </p>
          </Panel>
        </div>
      </section>

      {/* Repeat call to action */}
      <section className="border-t border-edge bg-surface/40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6">
          <p className="font-display text-2xl leading-relaxed text-white sm:text-3xl">
            {site.executiveSummary.body}
          </p>
          <a
            href="#closing"
            className="rounded-sm bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
          >
            Partner With Us
          </a>
        </div>
      </section>

      <footer className="border-t border-edge">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-neutral-600 sm:px-6">
          October mockup · {site.footer.credit}
        </div>
      </footer>
    </div>
  )
}
