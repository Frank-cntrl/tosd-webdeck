import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { site } from '../content/site'

const { brand, home } = site

function Cta({ to, primary, children }) {
  return (
    <Link
      to={to}
      className={
        primary
          ? 'rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-opacity hover:opacity-85'
          : 'rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent'
      }
    >
      {children}
    </Link>
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
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,185,66,0.12), transparent)',
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-36">
          <img
            src="/logo-gold.png"
            alt="The One Stop Drop logo"
            className="mb-8 h-28 w-auto sm:h-36"
          />
          <h1 className="font-display text-4xl uppercase tracking-[0.15em] text-white sm:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-accent">{brand.tagline}</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300">{home.heroLead}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Cta to="/partners" primary>
              Partner With Us
            </Cta>
            <Cta to="/plan">See The Plan</Cta>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Our Mission">
          Culture, curated. Networks, connected.
        </SectionHeading>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-neutral-400">
          {home.mission.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Highlights">
            What The One Stop Drop has to offer
          </SectionHeading>
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

      {/* Will do */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading>The One Stop Drop will</SectionHeading>
        <ul className="max-w-3xl space-y-4">
          {home.willDo.map((w) => (
            <li key={w} className="flex items-start gap-3 text-base text-neutral-300">
              <span className="mt-1 text-accent" aria-hidden="true">
                —
              </span>
              {w}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA band */}
      <section className="border-t border-edge bg-surface/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl text-white">
            A living ecosystem of culture, creativity, and commerce.
          </h2>
          <Cta to="/partners" primary>
            Partners & Investors
          </Cta>
        </div>
      </section>
    </>
  )
}
