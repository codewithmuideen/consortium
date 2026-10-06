import { ArrowDown } from 'lucide-react'
import { icons } from '../../lib/icons.js'
import { cn } from '../../lib/cn.js'
import { ModuleLink } from './ModuleLink.jsx'

/** One entry in the module selector. The whole card is the link. */
export function ModuleCard({ module, index, active }) {
  const Icon = icons[module.icon]
  return (
    <ModuleLink
      module={module}
      active={active}
      className={cn(
        'group relative flex h-full min-h-36 flex-col justify-between gap-5 overflow-hidden rounded-xl border p-3.5 transition-[border-color,background-color,translate] duration-300 min-[375px]:p-4 sm:min-h-48 sm:p-6',
        active ? 'border-amber/60 bg-white/[0.08]' : 'border-line bg-surface hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.07]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'bg-sunrise absolute inset-x-0 top-0 h-0.5 origin-left transition-transform duration-500 ease-expo',
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
        )}
      />

      <span className="flex items-start justify-between">
        <span className={cn('text-xs font-medium tracking-widest', active ? 'text-amber' : 'text-muted')}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className={cn(
            'grid size-10 place-items-center rounded-full border transition-colors duration-300 sm:size-12',
            active ? 'border-transparent bg-amber text-ink-950' : 'border-line text-fg group-hover:border-white/40',
          )}
        >
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </span>
      </span>

      <span className="block">
        <span className="block font-display text-sm leading-tight font-semibold tracking-tight break-words min-[375px]:text-[1.0625rem] sm:text-xl">
          {module.title}
        </span>
        <span className="mt-2 hidden text-sm leading-relaxed text-muted sm:block">{module.summary}</span>
        <span
          className={cn(
            'mt-3 flex items-center gap-1.5 text-xs font-medium sm:mt-4',
            active ? 'text-amber' : 'text-fg/70 group-hover:text-fg',
          )}
        >
          {active ? 'Viewing' : 'Open'}
          <ArrowDown aria-hidden="true" className="size-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
        </span>
      </span>
    </ModuleLink>
  )
}
