import { motion } from 'motion/react'
import { revealVariants, staggerVariants, VIEWPORT } from '../../lib/motion.js'

/** Reveals its children once when scrolled into view. */
export function Reveal({ as = 'div', direction = 'up', delay = 0, className, children, ...rest }) {
  const Tag = motion[as]
  const variants = revealVariants(direction)
  variants.visible.transition.delay = delay
  return (
    <Tag className={className} variants={variants} initial="hidden" whileInView="visible" viewport={VIEWPORT} {...rest}>
      {children}
    </Tag>
  )
}

/** Parent that staggers the entrance of its <RevealItem> children. */
export function RevealGroup({ as = 'div', stagger = 0.08, delay = 0, className, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={staggerVariants(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function RevealItem({ as = 'div', direction = 'up', className, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag className={className} variants={revealVariants(direction)} {...rest}>
      {children}
    </Tag>
  )
}
