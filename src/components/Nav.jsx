import { useState } from 'react'
import { Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { site } from '../content/site'

function Wordmark() {
  return (
    <a href="#home" className="flex items-center gap-2 shrink-0">
      <img src="/logo-gold.png" alt="" className="h-7 w-auto" />
      <span className="font-display text-lg sm:text-xl text-white tracking-widest uppercase whitespace-nowrap">
        The One Stop Drop
      </span>
    </a>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {site.nav.core.map((l) => (
            <a
              key={l.anchor}
              href={l.anchor}
              className="text-sm tracking-wide text-neutral-300 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
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
          {site.nav.core.map((l) => (
            <a
              key={l.anchor}
              href={l.anchor}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-2.5 text-sm tracking-wide text-neutral-200 transition-colors hover:bg-surface"
            >
              {l.label}
            </a>
          ))}
        </div>
      </Drawer>
    </header>
  )
}
