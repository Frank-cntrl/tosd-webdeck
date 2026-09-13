import { useState } from 'react'
import Placeholder from './Placeholder'

function Quote({ text, attribution }) {
  return (
    <blockquote className="border-l-2 border-accent pl-5">
      <p
        className="text-base italic leading-relaxed text-white sm:text-lg"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {text}
      </p>
      <cite className="mt-3 block text-xs uppercase tracking-widest text-neutral-500 not-italic">
        — {attribution}
      </cite>
    </blockquote>
  )
}

export default function Timeline({ entries }) {
  const [open, setOpen] = useState(0)

  return (
    <ol className="relative">
      {/* spine */}
      <span
        className="absolute left-[7px] top-3 bottom-3 w-px bg-edge"
        aria-hidden="true"
      />

      {entries.map((entry, i) => {
        const isOpen = open === i
        return (
          <li key={entry.year} className="relative pl-10">
            {/* marker */}
            <span
              className={`absolute left-0 top-[18px] h-[15px] w-[15px] rounded-full border-2 transition-colors ${
                isOpen ? 'border-accent bg-accent' : 'border-edge bg-ink'
              }`}
              aria-hidden="true"
            />

            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center gap-4 py-4 text-left"
              >
                <span
                  className={`font-display text-sm tracking-widest transition-colors sm:text-base ${
                    isOpen ? 'text-accent' : 'text-neutral-500 group-hover:text-accent'
                  }`}
                >
                  {entry.year}
                </span>
                <span className="flex-1 font-display text-xl text-white transition-colors group-hover:text-accent sm:text-2xl">
                  {entry.title}
                </span>
                <span
                  className={`shrink-0 text-accent transition-transform duration-300 ${
                    isOpen ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`}
                  aria-hidden="true"
                >
                  ›
                </span>
              </button>
            </h3>

            {/* animated reveal: 0fr -> 1fr collapses/expands to content height */}
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-5 pb-10 text-base leading-relaxed text-neutral-400">
                  {entry.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}

                  {entry.image && (
                    <div className="pt-2">
                      {entry.image.src ? (
                        <img
                          src={entry.image.src}
                          alt={entry.image.label}
                          loading="lazy"
                          className="mx-auto w-full max-w-sm rounded-md"
                        />
                      ) : (
                        <Placeholder label={entry.image.label} ratio="aspect-[4/3]" />
                      )}
                    </div>
                  )}

                  {entry.quotes?.map((q) => (
                    <div key={q.attribution} className="pt-2">
                      <Quote text={q.text} attribution={q.attribution} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {i < entries.length - 1 && <span className="block border-t border-edge" />}
          </li>
        )
      })}
    </ol>
  )
}
