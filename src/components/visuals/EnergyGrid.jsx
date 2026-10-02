import { useId, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { networkLinks, networkNodes } from '../../data/grid.js'
import { icons } from '../../lib/icons.js'
import { cn } from '../../lib/cn.js'

const LAYOUTS = {
  wide: { key: 'h', viewBox: '0 0 1000 520', radius: 30, labelOffset: 56, fontSize: 15 },
  tall: { key: 'v', viewBox: '0 0 400 760', radius: 28, labelOffset: 52, fontSize: 15.5 },
}

const nodeById = Object.fromEntries(networkNodes.map((node) => [node.id, node]))

/** Smooth connector that leaves and arrives along the layout's main axis. */
function linkPath([x1, y1], [x2, y2], vertical) {
  if (vertical) {
    const mid = (y1 + y2) / 2
    return `M${x1},${y1} C${x1},${mid} ${x2},${mid} ${x2},${y2}`
  }
  const mid = (x1 + x2) / 2
  return `M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`
}

function Diagram({ layout, active, onSelect, animate, className }) {
  const { key, viewBox, radius, labelOffset, fontSize } = LAYOUTS[layout]
  const uid = useId()
  const glowId = `${uid}-glow`

  return (
    <svg viewBox={viewBox} className={className} role="group" aria-label="Energy network diagram">
      <defs>
        <radialGradient id={glowId}>
          <stop offset="0%" stopColor="#f6b92a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f6b92a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {networkLinks.map(([from, to], index) => {
        const d = linkPath(nodeById[from][key], nodeById[to][key], key === 'v')
        const lit = active === from || active === to
        return (
          <g key={`${from}-${to}`} fill="none">
            <path d={d} stroke="currentColor" strokeOpacity={lit ? 0.5 : 0.2} strokeWidth="1" />
            <path d={d} stroke="#f49c3a" strokeOpacity={lit ? 1 : 0.7} strokeWidth="1.5" strokeLinecap="round" className="flow-line" />
            {animate && (
              <circle r="3.5" fill="#f6b92a">
                <animateMotion dur="3.2s" begin={`${index * 0.45}s`} repeatCount="indefinite" path={d} />
              </circle>
            )}
          </g>
        )
      })}

      {networkNodes.map((node) => {
        const [x, y] = node[key]
        const Icon = icons[node.icon]
        const isActive = active === node.id
        return (
          <g
            key={node.id}
            role="button"
            tabIndex={0}
            aria-label={`${node.label}. ${node.text}`}
            aria-pressed={isActive}
            onClick={() => onSelect(node.id)}
            onMouseEnter={() => onSelect(node.id)}
            onFocus={() => onSelect(node.id)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelect(node.id)
              }
            }}
            className="cursor-pointer outline-none [&:focus-visible>circle.node-ring]:stroke-white"
          >
            {isActive && <circle cx={x} cy={y} r={radius * 2.2} fill={`url(#${glowId})`} />}
            <circle
              className="node-ring transition-[stroke,fill] duration-200"
              cx={x}
              cy={y}
              r={radius}
              fill={isActive ? '#f6b92a' : 'var(--bg)'}
              stroke={isActive ? '#f6b92a' : 'currentColor'}
              strokeOpacity={isActive ? 1 : 0.45}
              strokeWidth="1.25"
            />
            <Icon
              x={x - 11}
              y={y - 11}
              width={22}
              height={22}
              strokeWidth={1.6}
              color={isActive ? '#02051a' : 'currentColor'}
              aria-hidden="true"
            />
            <text
              x={x}
              y={y + labelOffset}
              textAnchor="middle"
              fontSize={fontSize}
              fontWeight="500"
              fill="currentColor"
              fillOpacity={isActive ? 1 : 0.8}
            >
              {node.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

/**
 * Signature visual: generation → transmission → substation → distribution →
 * end users, with energy pulses travelling along each link. Selecting a node
 * explains that stage. Renders a wide layout on desktop and a tall one on mobile.
 */
export function EnergyGrid({ className }) {
  const [active, setActive] = useState('substation')
  const reduceMotion = useReducedMotion()
  const current = nodeById[active]

  return (
    <div className={cn('relative', className)}>
      <Diagram layout="wide" active={active} onSelect={setActive} animate={!reduceMotion} className="hidden h-auto w-full text-fg md:block" />
      <Diagram layout="tall" active={active} onSelect={setActive} animate={!reduceMotion} className="mx-auto h-auto w-full max-w-md text-fg md:hidden" />

      <div aria-live="polite" className="mt-10 grid gap-3 border-t border-line pt-8 md:grid-cols-12 md:gap-10">
        <p className="eyebrow text-accent md:col-span-3">{current.label}</p>
        <p className="lead max-w-[56ch] text-fg/90 md:col-span-9">{current.text}</p>
      </div>
    </div>
  )
}
