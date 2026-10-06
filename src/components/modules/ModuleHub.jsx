import { moduleHub } from '../../data/home.js'
import { AnimatedText } from '../ui/AnimatedText.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { Eyebrow } from '../ui/Section.jsx'
import { ModulePanel } from './ModulePanel.jsx'
import { ModuleSelector } from './ModuleSelector.jsx'

/** The heart of the landing page: choose a module, read it in the panel below. */
export function ModuleHub({ activeModule }) {
  return (
    <>
      <section id="modules" className="tone-ink relative scroll-mt-(--nav-h) overflow-hidden py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />
        <div className="container-x relative">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{moduleHub.eyebrow}</Eyebrow>
              </Reveal>
              <AnimatedText text={moduleHub.title} className="display-2 mt-6 max-w-[16ch]" />
            </div>
            <Reveal delay={0.15} className="lg:col-span-5">
              <p className="lead max-w-[44ch] text-muted">{moduleHub.description}</p>
            </Reveal>
          </div>

          <div className="mt-10 lg:mt-16">
            <ModuleSelector active={activeModule} />
          </div>
        </div>
      </section>

      <ModulePanel active={activeModule} />
    </>
  )
}
