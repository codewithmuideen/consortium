import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { cn } from '../../lib/cn.js'

/**
 * Looping background video over a poster image. The poster always renders, so
 * the section still looks complete if the video is slow, fails, or is skipped
 * (reduced motion or data saver). The video only starts loading once in view.
 */
export function VideoBackground({ poster, posterSrcSet, sources, priority = false, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '200px' })
  const reduceMotion = useReducedMotion()
  const [src, setSrc] = useState(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!inView || reduceMotion || navigator.connection?.saveData) return
    const wide = window.matchMedia('(min-width: 768px)').matches
    setSrc(wide ? sources.large : (sources.small ?? sources.large))
  }, [inView, reduceMotion, sources])

  return (
    <div ref={ref} aria-hidden="true" className={cn('absolute inset-0 overflow-hidden', className)}>
      <img
        src={poster}
        srcSet={posterSrcSet}
        sizes="100vw"
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {src && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
            playing ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}
    </div>
  )
}
