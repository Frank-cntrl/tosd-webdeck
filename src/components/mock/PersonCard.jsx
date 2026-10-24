import { prefix } from '../../colorways'
import { slugify } from '../../content/octobermockup'

// One person on the mockup's team or roster grid. The whole card links to
// their own page, so bios live there rather than inline on the mockup.
export default function PersonCard({ person }) {
  const line = person.role || person.credit
  return (
    <a href={`${prefix}/octobermockup/${slugify(person.name)}`} className="group block">
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          className="aspect-square w-full rounded-md object-cover object-top"
        />
      ) : (
        <div className="aspect-square w-full rounded-md border border-dashed border-neutral-700 bg-gradient-to-br from-surface to-ink transition-colors group-hover:border-accent/60" />
      )}
      <p className="mt-3 text-sm text-white transition-colors group-hover:text-accent">
        {person.name}
      </p>
      {line && <p className="text-xs leading-relaxed text-neutral-500">{line}</p>}
      {person.bio && (
        <span className="mt-2 inline-block text-[11px] font-semibold uppercase tracking-widest text-accent">
          Read bio →
        </span>
      )}
    </a>
  )
}
