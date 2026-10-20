import { colorway, prefix } from '../../colorways'
import { site } from '../../content/site'

// Shared chrome for the October mockup and the per-person pages under it.
export default function MockNav({ backHref, backLabel }) {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={`${prefix}/octobermockup`} className="flex shrink-0 items-center gap-2">
          <img src={colorway.logo} alt="" className="h-7 w-auto" />
          <span className="whitespace-nowrap font-display text-lg uppercase tracking-widest text-white sm:text-xl">
            {site.brand.name}
          </span>
        </a>
        <a
          href={backHref}
          className="text-sm tracking-wide text-neutral-300 transition-colors hover:text-accent"
        >
          {backLabel}
        </a>
      </nav>
    </header>
  )
}
