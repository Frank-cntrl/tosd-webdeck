import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Placeholder from '../components/Placeholder'
import { site } from '../content/site'

const { about } = site

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Rooted in NYC Art & Culture"
        intro={about.description[0]}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-neutral-400">
          {about.description.slice(1).map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-edge bg-surface/40">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <Placeholder label="Brian Morris portrait" ratio="aspect-[3/4]" />
            <p className="mt-3 text-sm text-white">Brian Morris</p>
            <p className="text-xs text-neutral-500">Founder</p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Founder">The personal relationships</SectionHeading>
            <div className="space-y-5 text-base leading-relaxed text-neutral-400">
              {about.founder.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="History">Producing in NYC since the mid-2000s</SectionHeading>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-400">{about.history}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {about.stats.map((s) => (
            <div key={s.label} className="rounded-md border border-edge bg-surface/40 p-6 text-center">
              <p className="font-display text-4xl text-accent">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
