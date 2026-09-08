import PageHeader from '../components/PageHeader'
import GalleryGrid from '../components/GalleryGrid'
import Timeline from '../components/Timeline'
import { prefix } from '../colorways'
import { site } from '../content/site'

const { about } = site

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title={about.heading} />

      {/* History timeline */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {about.historyEyebrow}
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{about.historyHeading}</h2>
          <p className="mt-3 text-sm text-neutral-500">{about.historyNote}</p>
        </div>
        <Timeline entries={about.history} />
      </section>

      {/* From the galleries */}
      <section className="border-t border-edge">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="mb-8 font-display text-3xl text-white sm:text-4xl">
            {about.galleryHeading}
          </h2>
          <GalleryGrid limit={8} />
          <div className="mt-8">
            <a
              href={`${prefix}/gallery`}
              className="rounded-sm border border-neutral-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent"
            >
              View All
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
