import { Link } from 'react-router-dom'
import { site } from '../content/site'

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.path}>
            <Link
              to={l.path}
              className="text-sm text-neutral-400 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo-badge.png" alt="" className="h-8 w-8 rounded-full" />
              <span className="font-display text-lg text-white tracking-widest uppercase">
                {site.brand.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-500">{site.brand.tagline}</p>
          </div>
          <LinkColumn title="Company" links={site.nav.core} />
          <LinkColumn title="Explore" links={site.nav.explore} />
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-edge pt-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.brand.name}. All rights reserved.</span>
          <span>{site.footer.credit}</span>
        </div>
      </div>
    </footer>
  )
}
