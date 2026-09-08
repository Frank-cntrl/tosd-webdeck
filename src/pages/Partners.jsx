import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { site } from '../content/site'

const { partners } = site

export default function Partners() {
  return (
    <>
      <PageHeader
        eyebrow={partners.eyebrow}
        title={partners.headline}
        intro={partners.alliance}
      />

      {/* What a partnership provides */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="For Brands">{partners.offersLead}</SectionHeading>
        <ul className="max-w-3xl">
          {partners.offers.map((o) => (
            <li
              key={o}
              className="border-t border-edge py-4 text-base leading-relaxed text-neutral-300"
            >
              {o}
            </li>
          ))}
        </ul>
      </section>

      {/* Value proposition */}
      <section className="border-y border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Value Proposition">{partners.valueHeading}</SectionHeading>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-400">
            {partners.valueProp}
          </p>
        </div>
      </section>

      {/* Our ask */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Our Ask">{partners.askHeading}</SectionHeading>
        <ul className="max-w-3xl">
          {partners.ask.map((a) => (
            <li
              key={a}
              className="border-t border-edge py-4 text-base leading-relaxed text-neutral-300"
            >
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-16 max-w-3xl">
          <h3 className="font-display text-2xl text-white">{partners.seed.heading}</h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">{partners.seed.body}</p>
          <p className="mt-3 text-base leading-relaxed text-neutral-400">{partners.seed.offer}</p>
        </div>
      </section>

      {/* Use of funds */}
      <section className="border-t border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Use of Funds">{partners.capitalHeading}</SectionHeading>
          <ul className="grid max-w-4xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {partners.capital.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-neutral-300">
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-base italic leading-relaxed text-neutral-400">
            {partners.capitalNote}
          </p>
        </div>
      </section>
    </>
  )
}
