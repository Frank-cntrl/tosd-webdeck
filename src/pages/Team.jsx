import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import { site } from '../content/site'

const { team } = site

export default function Team() {
  return (
    <>
      <PageHeader eyebrow="Our Team" title="The People Behind the Drop" intro={team.note} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((m, i) => (
            <div key={i}>
              <Placeholder label="Photo" ratio="aspect-square" />
              <p className="mt-3 text-sm text-white">{m.name}</p>
              <p className="text-xs text-neutral-500">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
