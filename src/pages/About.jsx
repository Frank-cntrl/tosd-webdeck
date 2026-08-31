import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Placeholder from '../components/Placeholder'
import { site } from '../content/site'

const { about } = site

function Quote({ text, attribution }) {
  return (
    <blockquote className="border-l-2 border-accent pl-6">
      <p className="font-display text-lg italic leading-relaxed text-white sm:text-xl">{text}</p>
      <cite className="mt-3 block text-xs uppercase tracking-widest text-neutral-500 not-italic">
        — {attribution}
      </cite>
    </blockquote>
  )
}

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="Rooted in NYC Art & Culture" intro={about.lead} />

      {/* Founder */}
      <section className="border-b border-edge">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <Placeholder label="Brian Morris portrait" ratio="aspect-[3/4]" />
            <p className="mt-3 text-sm text-white">Brian Morris</p>
            <p className="text-xs text-neutral-500">Founder</p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Founder">Gallerist and artist</SectionHeading>
            <div className="space-y-5 text-base leading-relaxed text-neutral-400">
              {about.founder.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-edge pt-8">
              <div className="space-y-4 text-base leading-relaxed text-neutral-300">
                {about.interview.lines.map((l) => (
                  <p key={l.text.slice(0, 40)}>
                    {l.speaker && (
                      <span className="font-semibold text-accent">{l.speaker}: </span>
                    )}
                    <span className={l.speaker ? '' : 'text-neutral-400'}>{l.text}</span>
                  </p>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-neutral-500">
                — {about.interview.attribution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="History">Producing in NYC since the mid-2000s</SectionHeading>
        {about.history.map((h) => (
          <div key={h.title} className="border-t border-edge py-10">
            <h3 className="font-display text-2xl text-white sm:text-3xl">{h.title}</h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-400">
              {h.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            {h.quote && (
              <div className="mt-6">
                <Quote text={h.quote.text} attribution={h.quote.attribution} />
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  )
}
