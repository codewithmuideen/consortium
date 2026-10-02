import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { icons } from '../../lib/icons.js'
import { EASE } from '../../lib/motion.js'
import { cn } from '../../lib/cn.js'

/** Single-open disclosure list. Items: { id, title, text, icon? }. */
export function Accordion({ items, defaultOpen = items[0]?.id, className }) {
  const [open, setOpen] = useState(defaultOpen)
  const uid = useId()

  return (
    <ul className={cn('border-t border-line', className)}>
      {items.map((item) => {
        const isOpen = open === item.id
        const Icon = item.icon ? icons[item.icon] : null
        const panelId = `${uid}-${item.id}`
        return (
          <li key={item.id} className="border-b border-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="group flex w-full items-center gap-4 py-5 text-left"
              >
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className={cn('size-5 shrink-0 transition-colors duration-200', isOpen ? 'text-accent' : 'text-muted group-hover:text-fg')}
                  />
                )}
                <span className="flex-1 font-display text-lg font-medium tracking-tight sm:text-xl">{item.title}</span>
                <Plus
                  aria-hidden="true"
                  className={cn('size-5 shrink-0 text-muted transition-transform duration-200', isOpen && 'rotate-45 text-accent')}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-label={item.title}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className={cn('max-w-[52ch] pb-6 leading-relaxed text-muted', Icon && 'pl-9')}>{item.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
