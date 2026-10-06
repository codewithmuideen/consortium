import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { homeSections } from '../data/home.js'
import { defaultModule, moduleForPath } from '../data/modules.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { scrollToPanel } from '../lib/modulePanel.js'
import { ModuleHub } from '../components/modules/ModuleHub.jsx'
import { Hero } from '../sections/home/Hero.jsx'
import { Intro } from '../sections/home/Intro.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'

// Section id → component. Order and visibility come from data, ready for a CMS.
const SECTIONS = {
  hero: Hero,
  intro: Intro,
  modules: ModuleHub,
  cta: CTASection,
}

const sections = homeSections.filter((section) => section.enabled).sort((a, b) => a.order - b.order)

/**
 * The single landing page. The active module is read from the URL: "/" shows
 * the overview with the default module, and each module path ("/technology",
 * "/mini-grids", …) shows the same page with that module open. Switching
 * modules only swaps the panel, so the page never reloads or remounts.
 */
export default function Home() {
  const { pathname } = useLocation()
  const routedModule = moduleForPath(pathname)
  const activeModule = routedModule ?? defaultModule
  const firstRender = useRef(true)

  usePageMeta(routedModule ? routedModule.seoKey : 'home')

  // Opening a module (by link, tab, back button or direct URL) brings its panel into view.
  useEffect(() => {
    const arrivedDirectly = firstRender.current
    firstRender.current = false
    if (routedModule) scrollToPanel(arrivedDirectly ? 'instant' : 'smooth')
  }, [routedModule])

  return sections.map(({ id }) => {
    const Component = SECTIONS[id]
    return Component ? <Component key={id} activeModule={activeModule} /> : null
  })
}
