import PageHeader from './PageHeader'
import Placeholder from './Placeholder'

export default function CategoryGallery({ category }) {
  const { title, blurb, cardLabel, cardCount } = category
  return (
    <>
      <PageHeader eyebrow="Explore" title={title} intro={blurb} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: cardCount }, (_, i) => (
            <div key={i}>
              <Placeholder label={`${cardLabel} photo`} ratio="aspect-[4/3]" />
              <p className="mt-3 text-sm text-white">
                {cardLabel} {i + 1}
              </p>
              <p className="text-xs text-neutral-500">Details coming soon</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
