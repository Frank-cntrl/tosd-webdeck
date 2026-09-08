import { useState } from 'react'
import Placeholder from '../components/Placeholder'
import { site } from '../content/site'

const { finalWord } = site

// Falls back to a labeled placeholder until the photo file is dropped in.
function Photo({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <Placeholder label="Brian Morris portrait" ratio="aspect-[3/4]" />
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full rounded-md"
    />
  )
}

export default function FinalWord() {
  return (
    <section className="border-t border-edge bg-surface/40">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[2fr_3fr]">
        <Photo src={finalWord.photo} alt={finalWord.photoAlt} />

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {finalWord.eyebrow}
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{finalWord.heading}</h2>
          <p className="mt-2 text-xs uppercase tracking-widest text-neutral-500">
            {finalWord.date}
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-300">
            {finalWord.lines.map((l) => (
              <p key={l.text.slice(0, 40)}>
                {l.speaker && <span className="font-semibold text-accent">{l.speaker}: </span>}
                <span className={l.speaker ? '' : 'text-neutral-400'}>{l.text}</span>
              </p>
            ))}
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest text-neutral-500">
            — {finalWord.attribution}
          </p>
        </div>
      </div>
    </section>
  )
}
