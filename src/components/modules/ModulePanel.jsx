import { Suspense } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { activeModules } from '../../data/modules.js'
import { images } from '../../data/images.js'
import { moduleComponents } from '../../modules/registry.js'
import { EASE } from '../../lib/motion.js'
import { PANEL_ID } from '../../lib/modulePanel.js'
import { Picture } from '../ui/Picture.jsx'
import { ModuleLink } from './ModuleLink.jsx'
import { ModuleTabs } from './ModuleTabs.jsx'

function ModuleHeader({ module, position }) {
  return (
    <header className="tone-ink relative isolate flex min-h-[20rem] items-end overflow-hidden lg:min-h-[28rem]">
      <Picture image={images[module.image]} alt="" sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-ink-950/80 to-ink-950/55" />
      <div className="container-x pt-24 pb-10 lg:pt-32 lg:pb-16">
        <p className="eyebrow flex items-center gap-3 text-amber">
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          Module {String(position).padStart(2, '0')} / {String(activeModules.length).padStart(2, '0')}
          <span className="text-white/70">{module.title}</span>
        </p>
        <h2
          id="module-title"
          className="mt-6 max-w-[18ch] font-display text-[clamp(2rem,5.4vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.035em]"
        >
          {module.headline}
        </h2>
        <p className="lead mt-6 max-w-[56ch] text-white/85">{module.lede}</p>
      </div>
    </header>
  )
}

function ModuleFallback() {
  return (
    <div role="status" className="tone-light grid min-h-[60svh] place-items-center">
      <span className="sr-only">Loading module</span>
      <span aria-hidden="true" className="h-px w-40 overflow-hidden bg-line">
        <span className="bg-sunrise block h-full w-full animate-pulse" />
      </span>
    </div>
  )
}

function PagerLink({ module, direction }) {
  const next = direction === 'next'
  const Arrow = next ? ArrowRight : ArrowLeft
  return (
    <ModuleLink
      module={module}
      className={`group flex min-h-28 flex-col justify-center gap-2 py-6 transition-colors duration-200 hover:text-amber sm:py-10 ${next ? 'items-end pl-4 text-right' : 'items-start pr-4'}`}
    >
      <span className="flex items-center gap-2 text-xs font-medium tracking-widest text-muted uppercase">
        {!next && <Arrow aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />}
        {next ? 'Next module' : 'Previous module'}
        {next && <Arrow aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />}
      </span>
      <span className="font-display text-[clamp(1.125rem,2.6vw,2.25rem)] leading-tight font-semibold tracking-tight">
        {module.title}
      </span>
    </ModuleLink>
  )
}

/**
 * Renders the active module: a header built from its data, the module's own
 * component (loaded on demand), and links to the neighbouring modules. The
 * panel cross-fades when the active module changes; nothing reloads.
 */
export function ModulePanel({ active }) {
  const index = activeModules.findIndex((module) => module.id === active.id)
  const previous = activeModules[(index - 1 + activeModules.length) % activeModules.length]
  const next = activeModules[(index + 1) % activeModules.length]
  const Module = moduleComponents[active.id]

  return (
    <section id={PANEL_ID} aria-labelledby="module-title" className="tone-ink relative min-h-svh scroll-mt-(--nav-h)">
      <ModuleTabs active={active} />
      <p role="status" className="sr-only">
        {active.title} module
      </p>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.18 } }}
        >
          <ModuleHeader module={active} position={index + 1} />
          <Suspense fallback={<ModuleFallback />}>
            <Module />
          </Suspense>
          <nav aria-label="More modules" className="tone-ink border-t border-line">
            <div className="container-x grid grid-cols-2 divide-x divide-line">
              <PagerLink module={previous} direction="previous" />
              <PagerLink module={next} direction="next" />
            </div>
          </nav>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
