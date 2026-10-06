import { activeModules } from '../../data/modules.js'
import { RevealGroup, RevealItem } from '../ui/Reveal.jsx'
import { ModuleCard } from './ModuleCard.jsx'

/** The module grid: two columns on phones, four on desktop. Rendered from data. */
export function ModuleSelector({ active }) {
  return (
    <nav aria-label="Modules">
      <RevealGroup as="ul" stagger={0.05} className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {activeModules.map((module, index) => (
          <RevealItem as="li" key={module.id}>
            <ModuleCard module={module} index={index} active={module.id === active.id} />
          </RevealItem>
        ))}
      </RevealGroup>
    </nav>
  )
}
