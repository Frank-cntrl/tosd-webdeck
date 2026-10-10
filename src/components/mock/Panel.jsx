import { useState } from 'react'

// Collapsible section used for the closing blocks, matching the history timeline.
export default function Panel({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-edge">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group flex w-full items-center justify-between gap-6 py-7 text-left"
        >
          <span className="font-display text-2xl text-white transition-colors group-hover:text-accent sm:text-3xl">
            {title}
          </span>
          <span
            className={`shrink-0 text-2xl text-accent transition-transform duration-300 ${
              open ? 'rotate-90' : 'group-hover:translate-x-1'
            }`}
          >
            ›
          </span>
        </button>
      </h3>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-10">{children}</div>
        </div>
      </div>
    </div>
  )
}
