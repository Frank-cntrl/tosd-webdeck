import PageHeader from '../components/PageHeader'
import { site } from '../content/site'

const { plan } = site

export default function Plan() {
  return (
    <>
      <PageHeader title={plan.title} />
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="space-y-5 text-base leading-relaxed text-neutral-400">
          {plan.summary.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>
    </>
  )
}
