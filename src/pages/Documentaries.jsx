import PageHeader from '../components/PageHeader'
import { site } from '../content/site'

const { documentaries } = site

function Media({ film }) {
  if (film.format === 'youtube') {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${film.youtubeId}`}
        title={`${film.title} — ${film.mediaLabel}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="aspect-video w-full rounded-md border border-edge"
      />
    )
  }
  return (
    <a
      href={film.url}
      target="_blank"
      rel="noreferrer"
      className="group flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-md border border-edge bg-gradient-to-br from-surface to-ink p-8 text-center transition-colors hover:border-accent"
    >
      <p className="font-display text-2xl text-white sm:text-3xl">{film.tagline}</p>
      <span className="rounded-sm bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink transition-opacity group-hover:opacity-85">
        Visit the {film.mediaLabel}
      </span>
    </a>
  )
}

export default function Documentaries() {
  return (
    <>
      <PageHeader
        eyebrow="In Production"
        title="Documentaries"
        intro={documentaries.intro}
      />
      <section className="mx-auto max-w-6xl space-y-20 px-4 py-20 sm:px-6">
        {documentaries.films.map((film) => (
          <div key={film.title} className="grid items-start gap-10 lg:grid-cols-2">
            <Media film={film} />
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                {film.kind}
              </p>
              <h2 className="font-display text-3xl text-white sm:text-4xl">{film.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-400">{film.logline}</p>
              <ul className="mt-6 space-y-3">
                {film.details.map((d) => (
                  <li key={d.slice(0, 40)} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-300">
                    <span className="mt-1 text-accent" aria-hidden="true">
                      —
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
