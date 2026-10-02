import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import { navCta } from '../../data/navigation.js'
import { siteConfig } from '../../data/siteConfig.js'
import { useDialog } from '../../hooks/useDialog.js'
import { EASE } from '../../lib/motion.js'
import { cn } from '../../lib/cn.js'
import { Button } from '../ui/Button.jsx'
import { Logo } from '../ui/Logo.jsx'

const panel = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.6, ease: EASE } },
  exit: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.45, ease: EASE } },
}

const list = { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Full-height overlay navigation for screens below the desktop breakpoint. */
export function MobileMenu({ open, onClose, links }) {
  const ref = useDialog(open, onClose)
  const allLinks = [{ label: 'Home', to: '/' }, ...links]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          variants={panel}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="tone-ink fixed inset-0 z-(--z-overlay) flex flex-col overflow-y-auto xl:hidden"
        >
          <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-40" />

          <div className="container-x relative flex h-(--nav-h) shrink-0 items-center justify-between">
            <Logo onClick={onClose} />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid size-12 place-items-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white hover:text-ink-950"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-x relative flex-1 py-8">
            <motion.ul variants={list} initial="hidden" animate="visible" className="flex flex-col">
              {allLinks.map((link, index) => (
                <motion.li key={link.to} variants={item} className="border-b border-line">
                  <NavLink
                    to={link.to}
                    end
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'flex items-baseline gap-5 py-4 font-display text-[clamp(1.6rem,7vw,2.5rem)] font-medium tracking-tight transition-colors duration-200',
                        isActive ? 'text-amber' : 'text-fg hover:text-amber',
                      )
                    }
                  >
                    <span className="w-6 font-sans text-xs font-medium tracking-widest text-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          <div className="container-x relative flex shrink-0 flex-col gap-5 pb-10">
            <Button to={navCta.to} onClick={onClose} className="w-full sm:w-auto sm:self-start">
              {navCta.label}
            </Button>
            <p className="text-xs tracking-wide text-muted">{siteConfig.tagline}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
