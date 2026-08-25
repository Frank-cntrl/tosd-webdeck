import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { site } from '../content/site'

const { partners } = site

export default function Partners() {
  return (
    <>
      <PageHeader
        eyebrow="Partners & Investors"
        title={partners.headline}
        intro={partners.alliance}
      />

      {/* Offers */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="For Brands">{partners.offersLead}</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          {partners.offers.map((o) => (
            <div key={o} className="rounded-md border border-edge bg-surface/40 p-6">
              <p className="text-base leading-relaxed text-neutral-300">{o}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl font-display text-xl leading-relaxed text-white">
          {partners.offersClosing}
        </p>
      </section>

      {/* Value proposition */}
      <section className="border-y border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Value Proposition">
            An organic distribution engine
          </SectionHeading>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-400">
            {partners.valueProp}
          </p>
        </div>
      </section>

      {/* Our ask */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Our Ask">We are actively seeking</SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {partners.ask.map((a) => (
            <div key={a.title} className="rounded-md border border-edge bg-surface/40 p-6">
              <h3 className="font-display text-xl text-accent">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{a.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-md border border-accent/30 bg-accent/5 p-8">
          <h3 className="font-display text-2xl text-white">{partners.seed.heading}</h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-300">
            {partners.seed.body}
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-400">
            {partners.seed.offer}
          </p>
        </div>
      </section>

      {/* Capital allocation */}
      <section className="border-t border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Use of Funds">{partners.capitalHeading}</SectionHeading>
          <ul className="grid max-w-4xl gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
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
