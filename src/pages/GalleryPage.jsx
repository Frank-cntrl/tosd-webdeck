import GalleryGrid from '../components/GalleryGrid'
import { colorway, prefix } from '../colorways'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-ink">
      <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href={`${prefix}/`} className="flex items-center gap-2 shrink-0">
            <img src={colorway.logo} alt="" className="h-7 w-auto" />
            <span className="font-display text-lg sm:text-xl text-white tracking-widest uppercase whitespace-nowrap">
              The One Stop Drop
            </span>
          </a>
          <a
            href={`${prefix}/`}
            className="text-sm tracking-wide text-neutral-300 transition-colors hover:text-accent"
          >
            ← Back to deck
          </a>
        </div>
      </header>

      <section className="border-b border-edge">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            From the Galleries
          </p>
          <h1 className="font-display text-4xl text-white sm:text-5xl">Gallery</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-400">
            Exhibitions, artworks, and moments from two decades of shows and events across NYC and
            beyond. Click any photo to enlarge it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <GalleryGrid />
      </section>
    </div>
  )
}
