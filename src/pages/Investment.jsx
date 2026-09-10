import SectionHeading from '../components/SectionHeading'
import { site } from '../content/site'

const { investment } = site

export default function Investment() {
  return (
    <>
      {/* Value proposition */}
      <section className="border-y border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {investment.valueEyebrow}
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-400">
            {investment.valueProp}
          </p>
        </div>
      </section>

      {/* Our ask */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={investment.askEyebrow}>{investment.askHeading}</SectionHeading>
        <ul className="max-w-3xl">
          {investment.ask.map((a) => (
            <li
              key={a}
              className="border-t border-edge py-4 text-base leading-relaxed text-neutral-300"
            >
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-neutral-300">
          <p>{investment.seed}</p>
          <p>{investment.closing}</p>
        </div>
      </section>

      {/* Use of funds */}
      <section className="border-t border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={investment.capitalEyebrow}>
            {investment.capitalHeading}
          </SectionHeading>
          <ul className="grid max-w-4xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {investment.capital.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-neutral-300">
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-base italic leading-relaxed text-neutral-400">
            {investment.capitalNote}
          </p>
        </div>
      </section>
    </>
  )
}
