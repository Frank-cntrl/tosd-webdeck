import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { site } from '../content/site'

const linkClass = ({ isActive }) =>
  `text-sm tracking-wide transition-colors hover:text-accent ${
    isActive ? 'text-accent' : 'text-neutral-300'
  }`

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <img src="/logo-gold.png" alt="" className="h-7 w-auto" />
      <span className="font-display text-lg sm:text-xl text-white tracking-widest uppercase whitespace-nowrap">
        The One Stop Drop
      </span>
    </Link>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const allLinks = [...site.nav.core, ...site.nav.explore]

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {site.nav.core.map((l) => (
            <NavLink key={l.path} to={l.path} className={linkClass} end={l.path === '/'}>
              {l.label}
            </NavLink>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="text-sm tracking-wide text-neutral-300 transition-colors group-hover:text-accent"
            >
              Explore ▾
            </button>
            <div className="invisible absolute right-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-44 rounded-md border border-edge bg-surface py-2 shadow-xl">
                {site.nav.explore.map((l) => (
                  <NavLink
                    key={l.path}
                    to={l.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-accent ${
                        isActive ? 'text-accent' : 'text-neutral-300'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <IconButton
          onClick={() => setOpen(true)}
          className="lg:!hidden"
          sx={{ color: 'white', display: { lg: 'none' } }}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
      </nav>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: '#0a0a0a', backgroundImage: 'none' } }}
      >
        <div className="flex items-center justify-between border-b border-edge px-4 py-3">
          <span className="font-display tracking-widest uppercase text-white">TOSD</span>
          <IconButton onClick={() => setOpen(false)} sx={{ color: 'white' }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {allLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded px-3 py-2.5 text-sm tracking-wide transition-colors hover:bg-surface ${
                  isActive ? 'text-accent' : 'text-neutral-200'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </header>
  )
}
