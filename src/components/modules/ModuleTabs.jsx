import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { activeModules } from '../../data/modules.js'
import { cn } from '../../lib/cn.js'
import { ModuleLink } from './ModuleLink.jsx'

/**
 * Slim tab bar that pins under the header while a module is being read, so the
 * visitor can switch module or return to the overview without scrolling back.
 * It takes no space in the layout and stays hidden (and inert) until the
 * module panel reaches the header.
 */
export function ModuleTabs({ active }) {
  const anchor = useRef(null)
  const list = useRef(null)
  const [pinned, setPinned] = useState(false)

  useEffect(() => {
    const update = () => {
      const panel = anchor.current?.parentElement
      if (!panel) return
      const headerHeight = document.querySelector('header')?.offsetHeight ?? 0
      const { top, bottom } = panel.getBoundingClientRect()
      setPinned(top <= headerHeight + 4 && bottom > headerHeight + 160)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Keep the active tab in view inside the horizontally scrolling list.
  useEffect(() => {
    const container = list.current
    const tab = container?.querySelector('[aria-current="true"]')
    if (!tab) return
    container.scrollTo({ left: tab.offsetLeft - (container.clientWidth - tab.clientWidth) / 2, behavior: 'smooth' })
  }, [active.id])

  return (
    <div ref={anchor} className="sticky top-(--nav-h) z-40 h-0">
      <nav
        aria-label="Switch module"
        inert={!pinned}
        className={cn(
          'absolute inset-x-0 top-0 border-b border-white/10 bg-ink-900/90 text-white backdrop-blur-xl transition-[opacity,translate] duration-300',
          pinned ? 'opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
        )}
      >
        <div className="container-x flex items-center gap-2">
          <Link
            to="/"
            aria-label="Back to overview"
            className="grid size-11 shrink-0 place-items-center rounded-full text-white/75 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <ArrowUp aria-hidden="true" className="size-4.5" />
          </Link>
          <span aria-hidden="true" className="h-5 w-px shrink-0 bg-white/15" />
          <ul ref={list} className="no-scrollbar relative flex flex-1 items-center gap-1 overflow-x-auto py-2">
            {activeModules.map((module) => {
              const isActive = module.id === active.id
              return (
                <li key={module.id} className="shrink-0">
                  <ModuleLink
                    module={module}
                    active={isActive}
                    className={cn(
                      'relative flex h-11 items-center rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors duration-200',
                      isActive ? 'text-ink-950' : 'text-white/75 hover:text-white',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="module-tab"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-amber"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{module.label}</span>
                  </ModuleLink>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
