import SectionHeading from '../components/SectionHeading'
import { site } from '../content/site'
import { colorway } from '../colorways'
import { playIntro } from '../introState'

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
          <h1
            className={`font-display text-4xl uppercase tracking-[0.15em] text-white sm:text-6xl ${playIntro ? 'intro-text' : ''}`}
            style={playIntro ? { animationDelay: '1.4s' } : undefined}
          >
            {brand.name}
          </h1>
          <div className="relative my-8 flex flex-col items-center">
            <img
              src={colorway.logo}
              alt="The One Stop Drop logo"
              className={`h-28 w-auto sm:h-36 ${playIntro ? 'intro-drop' : ''}`}
            />
            {playIntro && (
              <div
                className="intro-ripple absolute -bottom-5 h-8 w-44 rounded-[50%] border border-accent/60"
                aria-hidden="true"
              />
            )}
          </div>
          <p
            className={`font-display text-xl uppercase tracking-[0.2em] text-white sm:text-2xl ${playIntro ? 'intro-text' : ''}`}
            style={playIntro ? { animationDelay: '1.7s' } : undefined}
          >
            {home.heroTitle}
          </p>
          <p
            className={`mt-4 text-sm uppercase tracking-[0.35em] text-accent ${playIntro ? 'intro-text' : ''}`}
            style={playIntro ? { animationDelay: '2.1s' } : undefined}
          >
            {brand.tagline}
          </p>
          <div
            className={`mt-10 flex flex-wrap justify-center gap-4 ${playIntro ? 'intro-text' : ''}`}
            style={playIntro ? { animationDelay: '2.3s' } : undefined}
          >
            <Cta to="#partners" primary>
              Partner With Us
            </Cta>
            <Cta to="#plan">See The Plan</Cta>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-edge">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={home.introHeading}>{home.missionHeading}</SectionHeading>
          <div className="space-y-5 text-base leading-relaxed text-neutral-400">
            {home.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <p className="mt-10 font-display text-2xl text-white sm:text-3xl">
            {home.introClosing}
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="border-b border-edge bg-surface/40">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Mission Statement
          </p>
          <blockquote>
            <p className="font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
              “{home.missionQuote}”
            </p>
          </blockquote>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
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
      </section>
    </>
  )
}
