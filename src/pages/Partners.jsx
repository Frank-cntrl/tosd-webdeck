import PageHeader from '../components/PageHeader'
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
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
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
    </>
  )
}
