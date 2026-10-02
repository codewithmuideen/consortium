import { flowSteps } from '../../data/grid.js'
import { icons } from '../../lib/icons.js'
import { RevealGroup, RevealItem } from '../ui/Reveal.jsx'

/** Animated connector between two steps: horizontal on desktop, vertical on mobile. */
function Connector() {
  return (
    <span aria-hidden="true" className="absolute top-7 left-7 block h-[calc(100%+2.5rem)] w-px lg:left-14 lg:h-px lg:w-full">
      <svg className="h-full w-full overflow-visible text-accent" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" strokeWidth="1.5" className="flow-line hidden lg:block" />
        <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1.5" className="flow-line lg:hidden" />
      </svg>
    </span>
  )
}

/** Generation → substation → grid → distribution → communities and industry. */
export function FlowDiagram() {
  return (
    <RevealGroup as="ol" stagger={0.12} className="grid gap-10 lg:grid-cols-5 lg:gap-0">
      {flowSteps.map((step, index) => {
        const Icon = icons[step.icon]
        const last = index === flowSteps.length - 1
        return (
          <RevealItem as="li" key={step.id} className="group relative flex gap-6 lg:block lg:pr-8">
            {!last && <Connector />}
            <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-line bg-bg text-fg transition-colors duration-200 group-hover:border-transparent group-hover:bg-fg group-hover:text-bg">
              <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
            </span>
            <div className="lg:mt-8">
              <p className="text-xs font-medium tracking-widest text-muted">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 max-w-[30ch] text-[0.95rem] leading-relaxed text-muted">{step.text}</p>
            </div>
          </RevealItem>
        )
      })}
    </RevealGroup>
  )
}
