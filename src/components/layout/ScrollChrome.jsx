import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { moduleForPath } from '../../data/modules.js'
import { useScrolled } from '../../hooks/useScrolled.js'

/** Thin reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="bg-sunrise fixed inset-x-0 top-0 z-(--z-overlay) h-0.5 origin-left"
    />
  )
}

export function BackToTop() {
  const visible = useScrolled(900)
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="group fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full border border-white/20 bg-ink-900/80 text-white shadow-lift backdrop-blur-md transition-colors duration-200 hover:border-transparent hover:bg-amber hover:text-ink-950 lg:right-8 lg:bottom-8"
        >
          <ArrowUp aria-hidden="true" className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/** Returns to the top on route changes. Module URLs are left to the landing page, which scrolls to the panel. */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (moduleForPath(pathname)) return
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
