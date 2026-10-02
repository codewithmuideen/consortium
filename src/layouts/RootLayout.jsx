import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { CookieBanner } from '../components/layout/CookieBanner.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { LoadingScreen } from '../components/layout/LoadingScreen.jsx'
import { Navbar } from '../components/layout/Navbar.jsx'
import { BackToTop, ScrollProgress, ScrollToTop } from '../components/layout/ScrollChrome.jsx'

/** Shell shared by every route: chrome, page transition, footer and overlays. */
export function RootLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-(--z-loader) focus:rounded-full focus:bg-amber focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to content
      </a>
      <LoadingScreen />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />

      <motion.main
        id="main"
        key={pathname}
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="outline-none"
      >
        <Suspense fallback={<div className="tone-ink min-h-svh" />}>
          <Outlet />
        </Suspense>
      </motion.main>

      <Footer />
      <BackToTop />
      <CookieBanner />
    </>
  )
}
