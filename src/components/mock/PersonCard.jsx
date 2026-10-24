import { prefix } from '../../colorways'
import { slugify } from '../../content/octobermockup'

// One person on the mockup's team or roster grid. The whole card links to
// their own page, so bios live there rather than inline on the mockup.
export default function PersonCard({ person }) {
  const line = person.role || person.credit
  // 3:4 crop: tall enough to hold Brian head-to-boots, and framed so the
  // headshots put every face at the same height across the grid.
  const src = person.cardPhoto ?? person.photo
  return (
    <a href={`${prefix}/${slugify(person.name)}`} className="group block">
      {src ? (
        <img
          src={src}
          alt={person.name}
          className="aspect-[3/4] w-full rounded-md object-cover"
        />
      ) : (
        <div className="aspect-[3/4] w-full rounded-md border border-dashed border-neutral-700 bg-gradient-to-br from-surface to-ink transition-colors group-hover:border-accent/60" />
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
