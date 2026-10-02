import { Fragment } from 'react'
import { motion } from 'motion/react'
import { EASE, staggerVariants, VIEWPORT } from '../../lib/motion.js'
import { cn } from '../../lib/cn.js'

const word = {
  hidden: { y: '110%' },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
}

/**
 * Headline that rises into place word by word. Screen readers get the plain
 * sentence through aria-label. `immediate` plays on mount instead of on scroll;
 * `highlight` is a word to render in the brand gradient.
 */
export function AnimatedText({ text, as = 'h2', className, delay = 0, immediate = false, highlight }) {
  const Tag = motion[as]
  const words = text.split(' ')
  const trigger = immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport: VIEWPORT }

  return (
    <Tag className={className} aria-label={text} variants={staggerVariants(0.06, delay)} initial="hidden" {...trigger}>
      {words.map((value, index) => (
        <Fragment key={index}>
          <span aria-hidden="true" className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
            <motion.span className={cn('inline-block', value === highlight && 'text-sunrise')} variants={word}>
              {value}
            </motion.span>
          </span>
          {index < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  )
}
