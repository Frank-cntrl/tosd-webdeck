import { colorway } from '../colorways'

// Standalone scene used by the /animation preview page.
export function IntroScene({ onClick }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
      onClick={onClick}
    >
      <p
        className="intro-text mb-8 font-display text-3xl uppercase tracking-[0.2em] text-white sm:text-4xl"
        style={{ animationDelay: '1.4s' }}
      >
        TOST'D
      </p>
      <div className="relative flex flex-col items-center">
        <img src={colorway.logo} alt="" className="intro-drop h-28 w-auto sm:h-36" />
        <div
          className="intro-ripple absolute -bottom-5 h-8 w-44 rounded-[50%] border border-accent/60"
          aria-hidden="true"
        />
      </div>
      <p
        className="intro-text mt-8 font-display text-xl uppercase tracking-[0.2em] text-white sm:text-2xl"
        style={{ animationDelay: '1.7s' }}
      >
        The One Stop Drop
      </p>
    </div>
  )
}
