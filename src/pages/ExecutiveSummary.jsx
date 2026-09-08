import { site } from '../content/site'

const { executiveSummary } = site

export default function ExecutiveSummary() {
  return (
    <section className="border-t border-edge">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {executiveSummary.eyebrow}
        </p>
        <p className="font-display text-2xl leading-relaxed text-white sm:text-3xl">
          {executiveSummary.body}
        </p>
      </div>
    </section>
  )
}
