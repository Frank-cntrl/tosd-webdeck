import GalleryGrid from '../components/GalleryGrid'
import Timeline from '../components/Timeline'
import HeroMontage from '../components/mock/HeroMontage'
import Panel from '../components/mock/Panel'
import Tbd from '../components/mock/Tbd'
import { Media } from './Documentaries'
import { colorway, prefix } from '../colorways'
import { site } from '../content/site'
import { mock } from '../content/octobermockup'

// History, documentaries and the executive summary come from site.js because
// the October document reproduces them unchanged. Everything else comes from
// octobermockup.js, which deliberately diverges from the live deck at /.
const { brand, about, documentaries, executiveSummary, footer } = site

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

// Shared by the core team and the consultant roster. Falls back to a dashed
// square for everyone whose headshot we don't have yet.
function PersonCard({ person }) {
  const line = person.role || person.credit
  return (
    <div>
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          className="aspect-square w-full rounded-md object-cover"
        />
      ) : (
        <div className="aspect-square w-full rounded-md border border-dashed border-neutral-700 bg-gradient-to-br from-surface to-ink" />
      )}
      <p className="mt-3 text-sm text-white">{person.name}</p>
      {line && <p className="text-xs leading-relaxed text-neutral-500">{line}</p>}
      {person.bio && (
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{person.bio}</p>
      )}
      {person.bioTbd && <Tbd className="mt-3">{person.bioTbd}</Tbd>}
    </div>
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
            {brand.short}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-accent">
            {mock.hero.pillars.join(' · ')}
          </p>
        </div>
      </section>

      {/* Welcome — the weedeasy invitation, plus the CTAs */}
      <section className="border-b border-edge bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <Eyebrow>{mock.welcome.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{mock.welcome.heading}</h2>
          <p className="mt-8 text-lg leading-relaxed text-neutral-300">{mock.welcome.body}</p>
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
          <Eyebrow>{mock.intro.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{mock.intro.heading}</h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-300">
            {mock.intro.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
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

      {/* Value Proposition — full-bleed, copy in the negative space */}
      <section className="relative overflow-hidden border-b border-edge">
        <img
          src={mock.value.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
          <div className="max-w-xl">
            <Eyebrow>{mock.value.eyebrow}</Eyebrow>
            <p className="font-display text-2xl leading-relaxed text-white sm:text-3xl">
              {mock.value.lead}
            </p>
            <p className="mt-8 text-base leading-relaxed text-neutral-300">{mock.value.body}</p>
          </div>
        </div>
      </section>

      {/* Brian — bio and the gallery */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Eyebrow>{mock.brian.eyebrow}</Eyebrow>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <img src={mock.brian.photo} alt={mock.brian.photoAlt} className="w-full rounded-md" />
            <div className="space-y-8">
              <Tbd>{mock.brian.bioTbd}</Tbd>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  {mock.brian.galleryLabel}
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

      {/* The People Behind The Drop */}
      <section id="people" className="border-b border-edge scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Eyebrow>{mock.people.eyebrow}</Eyebrow>
          <div className="mt-8 grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mock.people.members.map((m) => (
              <PersonCard key={m.name} person={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultants, curators and early featured artists */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Eyebrow>{mock.roster.eyebrow}</Eyebrow>
          <div className="mt-10 space-y-14">
            {mock.roster.groups.map((g) => (
              <div key={g.title}>
                <h3 className="mb-6 border-b border-edge pb-3 font-display text-2xl text-white">
                  {g.title}
                </h3>
                <div className="grid items-start gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  {g.people.map((p) => (
                    <PersonCard key={p.name} person={p} />
                  ))}
                </div>
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
      <section id="closing" className="border-b border-edge scroll-mt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Panel title={mock.partners.headline} defaultOpen>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {mock.partners.eyebrow}
            </p>
            <Bullets items={mock.partners.offers} />
          </Panel>

          <Panel title={mock.plan.title}>
            <p className="text-base leading-relaxed text-neutral-400">{mock.plan.body}</p>
          </Panel>

          <Panel title={mock.seeking.title}>
            <p className="text-base leading-relaxed text-neutral-300">{mock.seeking.body}</p>
          </Panel>

          <Panel title={mock.capital.title}>
            <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {mock.capital.items.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-neutral-300">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base italic leading-relaxed text-neutral-400">
              {mock.capital.note}
            </p>
          </Panel>
        </div>
      </section>

      {/* From April 2014 — the NY Arts Magazine interview */}
      <section className="border-b border-edge bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Eyebrow>{mock.article.eyebrow}</Eyebrow>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-300">
            {mock.article.lines.map((l) => (
              <p key={l.text.slice(0, 40)}>
                {l.speaker && <span className="font-semibold text-accent">{l.speaker}: </span>}
                <span className={l.speaker ? '' : 'text-neutral-400'}>{l.text}</span>
              </p>
            ))}
          </div>
          <p className="mt-6 text-xs uppercase tracking-widest text-neutral-500">
            — {mock.article.attribution}
          </p>
        </div>
      </section>

      {/* Documentaries */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Eyebrow>In Production</Eyebrow>
          <h2 className="font-display text-3xl text-white sm:text-4xl">Documentaries</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-400">
            {documentaries.intro}
          </p>
          <div className="mt-16 space-y-20">
            {documentaries.films.map((film) => (
              <div key={film.title} className="grid items-start gap-10 lg:grid-cols-2">
                <Media film={film} />
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    {film.kind}
                  </p>
                  <h3 className="font-display text-3xl text-white sm:text-4xl">{film.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-neutral-400">{film.logline}</p>
                  <ul className="mt-6 space-y-3">
                    {film.details.map((d) => (
                      <li
                        key={d.slice(0, 40)}
                        className="flex items-start gap-3 text-sm leading-relaxed text-neutral-300"
                      >
                        <span className="mt-1 text-accent" aria-hidden="true">
                          —
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive summary + repeat call to action */}
      <section className="bg-surface/40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6">
          <Eyebrow>{executiveSummary.eyebrow}</Eyebrow>
          <p className="font-display text-2xl leading-relaxed text-white sm:text-3xl">
            {executiveSummary.body}
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
          October mockup · {footer.credit}
        </div>
      </footer>
    </div>
  )
}
