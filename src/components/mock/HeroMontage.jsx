import { useEffect, useState } from 'react'

// Full-bleed cross-fade montage standing in for the edge-to-edge montage gif.
// Pass `video` to swap the whole thing for a real file.
export default function HeroMontage({ images, video, interval = 4000 }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (video || images.length < 2) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = setInterval(() => setActive((i) => (i + 1) % images.length), interval)
    return () => clearInterval(t)
  }, [images.length, interval, video])

  if (video) {
    return (
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
    )
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
