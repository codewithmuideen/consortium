import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { cn } from '../../lib/cn.js'

/** Responsive image from the `data/images.js` registry. Lazy unless `priority`. */
export function Picture({ image, sizes = '100vw', priority = false, alt, className }) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  )
}

/** Image that drifts vertically as its frame crosses the viewport. */
export function ParallaxImage({ image, sizes, amount = 7, alt, className, imageClassName }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`])

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div style={{ y }} className="h-full w-full scale-[1.18]">
        <Picture image={image} sizes={sizes} alt={alt} className={cn('h-full w-full object-cover', imageClassName)} />
      </motion.div>
    </div>
  )
}
