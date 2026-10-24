import MockNav from '../components/mock/MockNav'
import { prefix } from '../colorways'
import { site } from '../content/site'
import { personBySlug, groupSiblings, slugify } from '../content/octobermockup'

const peopleHref = `${prefix}/#people`

function Chrome({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <MockNav backHref={peopleHref} backLabel="← The People" />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-edge">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-neutral-600 sm:px-6">
          October mockup · {site.footer.credit}
        </div>
      </footer>
    </div>
  )
}

function Avatar({ person }) {
  if (!person.photo) {
    return (
      <div className="aspect-[3/4] w-full rounded-md border border-dashed border-neutral-700 bg-gradient-to-br from-surface to-ink" />
    )
  }
  return (
    <figure>
      <img src={person.photo} alt={person.name} className="w-full rounded-md object-cover" />
      {person.photoCredit && (
        <figcaption className="mt-2 text-xs text-neutral-600">{person.photoCredit}</figcaption>
      )}
    </figure>
  )
}

export default function MockPerson({ slug }) {
  const person = personBySlug(slug)

  if (!person) {
    return (
      <Chrome>
        <section className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Not Found
          </p>
          <h1 className="font-display text-3xl text-white sm:text-4xl">
            No one here by that name
          </h1>
          <p className="mt-6 text-base leading-relaxed text-neutral-400">
            Nobody on the mockup matches “{slug}”.
          </p>
          <a
            href={peopleHref}
            className="mt-10 inline-block rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent"
          >
            View the full team
          </a>
        </section>
      </Chrome>
    )
  }

  const line = person.role || person.credit
  const siblings = groupSiblings(person)
  // Bios are single strings today; split on blank lines so longer ones work.
  const paragraphs = person.bio ? person.bio.split(/\n\s*\n/) : []

  return (
    <Chrome>
      <section className="border-b border-edge">
        <div className="mx-auto grid max-w-5xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[2fr_3fr]">
          <Avatar person={person} />
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {person.group}
            </p>
            <h1 className="font-display text-4xl text-white sm:text-5xl">{person.name}</h1>
            {line && (
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-neutral-400">{line}</p>
            )}
            {paragraphs.length > 0 ? (
              <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-300">
                {paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            ) : (
              <p className="mt-8 text-base italic leading-relaxed text-neutral-500">
                Bio coming soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {siblings.length > 0 && (
        <section>
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              More from {person.group}
            </p>
            <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {siblings.map((s) => (
                <li key={s.slug} className="border-t border-edge pt-4">
                  <a
                    href={`${prefix}/${slugify(s.name)}`}
                    className="group block"
                  >
                    <span className="text-sm text-white transition-colors group-hover:text-accent">
                      {s.name}
                    </span>
                    {(s.role || s.credit) && (
                      <span className="mt-0.5 block text-xs text-neutral-500">
                        {s.role || s.credit}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </Chrome>
  )
}
