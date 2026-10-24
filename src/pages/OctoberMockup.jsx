import Timeline from '../components/Timeline'
import HeroMontage from '../components/mock/HeroMontage'
import Panel from '../components/mock/Panel'
import MockNav from '../components/mock/MockNav'
import PersonCard from '../components/mock/PersonCard'
import { Media } from './Documentaries'
import { colorway, prefix } from '../colorways'
import { site } from '../content/site'
import { mock, history } from '../content/octobermockup'

// History, documentaries and the executive summary come from site.js because
// the October document reproduces them unchanged. Everything else comes from
// octobermockup.js, which deliberately diverges from the live deck at /.
const { brand, home, about, documentaries, executiveSummary, footer } = site

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
      <MockNav backHref={`${prefix}/`} backLabel="← Current deck" />

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
          {/* Pairs stay unbroken so a separator never dangles at a line end. */}
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm uppercase tracking-[0.35em] text-accent">
            {mock.hero.pillars.map((p, i) => (
              <span key={p} className="whitespace-nowrap">
                {i > 0 && <span className="mr-3 text-accent/60">·</span>}
                {p}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Welcome — the weedeasy invitation, plus the CTAs */}
      <section className="border-b border-edge bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <Eyebrow>{mock.welcome.eyebrow}</Eyebrow>
          <h2 className="font-display uppercase leading-tight text-white">
            <span className="block text-base tracking-[0.3em] text-neutral-400 sm:text-lg">
              {mock.welcome.lead}
            </span>
            <span className="mt-4 block text-3xl tracking-[0.12em] sm:text-5xl">{brand.name}</span>
            <span className="mt-4 block text-xl tracking-[0.3em] text-accent sm:text-2xl">
              {brand.short}
            </span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-neutral-300">
            {mock.welcome.body.map((s) =>
              s.em ? <em key={s.text}>{s.text}</em> : <span key={s.text}>{s.text}</span>,
            )}
          </p>
          {/* Replaces the See The Plan / Partner With Us buttons. */}
          <div className="mt-14">
            <img src={colorway.logo} alt="" className="mx-auto mb-6 h-12 w-auto" />
            <blockquote>
              <p className="font-display text-xl italic leading-relaxed text-white sm:text-2xl">
                “{home.rumi.text}”
              </p>
              <cite className="mt-4 block text-xs uppercase tracking-widest text-neutral-500 not-italic">
                {home.rumi.attribution}
              </cite>
            </blockquote>
          </div>
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

      {/* For Brands and Partners — moved up into the slot History used to hold */}
      <section id="partners" className="border-b border-edge scroll-mt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Eyebrow>{mock.partners.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            {mock.partners.headline}
          </h2>
          <div className="mt-8">
            <Bullets items={mock.partners.offers} />
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

      {/* Visual summary collage */}
      <section className="border-b border-edge">
        <img src={mock.collage.image} alt={mock.collage.alt} className="w-full" />
      </section>

      {/* Closing dropdowns — History now sits here, where Brands used to be */}
      <section id="closing" className="border-b border-edge scroll-mt-16">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Panel title={about.historyHeading}>
            <Timeline entries={history} />
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
          <img
            src={mock.article.image.src}
            alt={mock.article.image.alt}
            loading="lazy"
            className="mb-10 w-full rounded-md"
          />
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
            href="#partners"
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
