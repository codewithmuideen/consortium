import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

const SPRING = { stiffness: 220, damping: 18, mass: 0.4 }

/** Pulls its child gently toward the mouse pointer. Inactive for touch and reduced motion. */
export function Magnetic({ strength = 0.25, className = 'inline-block', children }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, SPRING)
  const springY = useSpring(y, SPRING)

  const onPointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} className={className} style={{ x: springX, y: springY }} onPointerMove={onPointerMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  )
}
