import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LOADER_DURATION_MS, loaderSeen, markLoaderSeen } from '../../lib/intro.js'
import { EASE } from '../../lib/motion.js'
import { Logo } from '../ui/Logo.jsx'

/** Brief branded intro, shown once per browser session. */
export function LoadingScreen() {
  const [visible, setVisible] = useState(() => !loaderSeen())

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      setVisible(false)
      markLoaderSeen()
    }, LOADER_DURATION_MS)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading"
          exit={{ y: '-100%', transition: { duration: 0.7, ease: EASE } }}
          className="tone-ink fixed inset-0 z-(--z-loader) grid place-items-center"
        >
          <div className="flex w-[min(70vw,20rem)] flex-col items-center gap-8">
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Logo linked={false} className="h-auto w-full" />
            </motion.div>
            <div className="h-px w-full overflow-hidden bg-white/15">
              <motion.div
                className="bg-sunrise h-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: LOADER_DURATION_MS / 1000, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
