/** Shared animation timing. Micro-interactions 150-250ms, reveals 400-800ms. */
export const EASE = [0.16, 1, 0.3, 1]

export const DURATION = {
  micro: 0.2,
  reveal: 0.7,
  slow: 1,
}

const OFFSETS = {
  up: { y: 36 },
  down: { y: -36 },
  left: { x: 48 },
  right: { x: -48 },
  scale: { scale: 0.94 },
  fade: {},
}

export function revealVariants(direction = 'up') {
  return {
    hidden: { opacity: 0, ...OFFSETS[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: DURATION.reveal, ease: EASE },
    },
  }
}

export function staggerVariants(stagger = 0.08, delay = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }
}

export const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' }
