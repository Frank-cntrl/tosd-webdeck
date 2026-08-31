import { useEffect, useState } from 'react'
import { colorway } from '../colorways'

const DURATION = 3400

export function IntroScene({ onClick }) {
  return (
    <div
      className="intro-overlay fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
      onClick={onClick}
    >
      <div className="relative flex flex-col items-center">
        <img src={colorway.logo} alt="" className="intro-drop h-28 w-auto sm:h-36" />
        <div
          className="intro-ripple absolute -bottom-5 h-8 w-44 rounded-[50%] border border-accent/60"
          aria-hidden="true"
        />
      </div>
      <p
        className="intro-text mt-12 font-display text-3xl uppercase tracking-[0.2em] text-white sm:text-4xl"
        style={{ animationDelay: '1.4s' }}
      >
        TOST'D
      </p>
      <p
        className="intro-text mt-3 text-xs uppercase tracking-[0.35em] text-accent"
        style={{ animationDelay: '1.7s' }}
      >
        The One Stop Drop
      </p>
    </div>
  )
}

export default function Intro() {
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem('tostd-intro')
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!show) return
    try {
      sessionStorage.setItem('tostd-intro', '1')
    } catch {
      /* private windows etc. */
    }
    const t = setTimeout(() => setShow(false), DURATION)
    return () => clearTimeout(t)
  }, [show])

  if (!show) return null
  return <IntroScene onClick={() => setShow(false)} />
}
