import { useState } from 'react'
import { colorway } from './../colorways'

const KEY = 'tostd-gate'

export function isUnlocked() {
  try {
    return sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

export default function Gate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (value.trim().toLowerCase() === 'brian') {
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {
        /* still unlock for this render */
      }
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-4">
      <img src={colorway.logo} alt="" className="h-20 w-auto" />
      <h1 className="mt-6 font-display text-2xl uppercase tracking-[0.2em] text-white text-center">
        The One Stop Drop
      </h1>
      <p className="mt-3 text-xs uppercase tracking-[0.3em] text-neutral-500">Private Preview</p>
      <form onSubmit={submit} className="mt-10 flex w-full max-w-xs flex-col gap-3">
        <input
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setError(false)
          }}
          placeholder="Password"
          autoFocus
          className="rounded-sm border border-edge bg-surface px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-accent"
        />
        <button
          type="submit"
          className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
        >
          Enter
        </button>
        <p
          className={`text-center text-xs text-red-400 transition-opacity ${error ? 'opacity-100' : 'opacity-0'}`}
        >
          Incorrect password
        </p>
      </form>
    </div>
  )
}
