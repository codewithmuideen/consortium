import { useCallback, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { Menu } from 'lucide-react'
import { navCta, primaryNav } from '../../data/navigation.js'
import { useScrolled } from '../../hooks/useScrolled.js'
import { cn } from '../../lib/cn.js'
import { Button } from '../ui/Button.jsx'
import { Logo } from '../ui/Logo.jsx'
import { MobileMenu } from './MobileMenu.jsx'

const links = primaryNav.filter((item) => item.enabled).sort((a, b) => a.order - b.order)

export function Navbar() {
  const scrolled = useScrolled()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'tone-dark fixed inset-x-0 top-0 z-(--z-nav) border-b bg-transparent transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled ? 'border-white/10 bg-ink-900/80 backdrop-blur-xl' : 'border-transparent',
        )}
      >
        <div className="container-x flex h-(--nav-h) items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {links.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'relative block px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                        isActive ? 'text-white' : 'text-white/70 hover:text-white',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            aria-hidden="true"
                            className="absolute inset-x-3.5 -bottom-0.5 h-px bg-sunrise"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button to={navCta.to} size="sm" className="max-sm:hidden">
              {navCta.label}
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="grid size-12 place-items-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white hover:text-ink-950 xl:hidden"
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} links={links} />
    </>
  )
}
