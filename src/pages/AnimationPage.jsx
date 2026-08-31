import { useEffect, useState } from 'react'
import { IntroScene } from '../components/Intro'
import { prefix } from '../colorways'

export default function AnimationPage() {
  const [run, setRun] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRun((r) => r + 1), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen bg-ink">
      <IntroScene key={run} onClick={() => setRun((r) => r + 1)} />
      <div className="fixed bottom-4 left-1/2 z-[210] -translate-x-1/2 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-600">
          Landing animation — loops automatically
        </p>
        <a
          href={`${prefix}/`}
          className="mt-1 inline-block text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-accent"
        >
          ← Back to deck
        </a>
      </div>
    </div>
  )
}
