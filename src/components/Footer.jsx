import { site } from '../content/site'

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo-gold.png" alt="" className="h-7 w-auto" />
              <span className="font-display text-lg text-white tracking-widest uppercase">
                {site.brand.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-500">{site.brand.tagline}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Company
            </h3>
            <ul className="space-y-2">
              {site.nav.core.map((l) => (
                <li key={l.anchor}>
                  <a
                    href={l.anchor}
                    className="text-sm text-neutral-400 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-edge pt-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.brand.name}. All rights reserved.</span>
          <span>{site.footer.credit}</span>
        </div>
      </div>
    </footer>
  )
}
