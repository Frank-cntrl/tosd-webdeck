import SectionHeading from '../components/SectionHeading'
import { site } from '../content/site'
import { colorway } from '../colorways'

const { brand, home } = site

function Cta({ to, primary, children }) {
  return (
    <a
      href={to}
      className={
        primary
          ? 'rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-opacity hover:opacity-85'
          : 'rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent'
      }
    >
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-edge">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent)',
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-36">
          <h1 className="font-display text-4xl uppercase tracking-[0.15em] text-white sm:text-6xl">
            {home.heroTitle}
          </h1>
          <img
            src={colorway.logo}
            alt="The One Stop Drop logo"
            className="my-8 h-28 w-auto sm:h-36"
          />
          <p className="font-display text-xl uppercase tracking-[0.2em] text-white sm:text-2xl">
            {brand.name}
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-accent">{brand.tagline}</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300">{home.heroLead}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Cta to="#partners" primary>
              Partner With Us
            </Cta>
            <Cta to="#plan">See The Plan</Cta>
          </div>
        </div>
      </section>

      {/* Press quote */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <blockquote>
            <p className="font-display text-xl italic leading-relaxed text-white sm:text-2xl">
              “{home.pressQuote.text}”
            </p>
            <cite className="mt-4 block text-xs uppercase tracking-widest text-neutral-500 not-italic">
              — {home.pressQuote.attribution}
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Our Mission">{home.missionHeading}</SectionHeading>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-neutral-400">
          {home.mission.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Highlights">{home.highlightsHeading}</SectionHeading>
          <ul className="grid gap-x-12 sm:grid-cols-2">
            {home.highlights.map((h) => (
              <li
                key={h}
                className="border-t border-edge py-4 text-sm leading-relaxed text-neutral-300"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-edge bg-surface/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl text-white">
            A living ecosystem of culture, creativity, and commerce.
          </h2>
          <Cta to="#partners" primary>
            Partners & Investors
          </Cta>
        </div>
      </section>
    </>
  )
}
