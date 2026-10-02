import { cn } from '../../lib/cn.js'

// Fixed coordinates (viewBox 1200×700) so the field is identical on every render.
const NODES = [
  [80, 120], [240, 60], [410, 170], [590, 80], [770, 190], [950, 90], [1120, 180],
  [150, 330], [330, 400], [520, 310], [700, 420], [880, 340], [1060, 430],
  [90, 580], [280, 620], [470, 550], [660, 640], [850, 570], [1040, 630],
]

const LINKS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [2, 8], [2, 9], [4, 9], [4, 11], [6, 12],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
  [7, 13], [8, 14], [9, 15], [10, 16], [11, 17], [12, 18],
  [13, 14], [14, 15], [15, 16], [16, 17], [17, 18],
]

/** Decorative field of connected, softly pulsing data points. */
export function NodeField({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      className={cn('pointer-events-none text-fg', className)}
    >
      <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="1">
        {LINKS.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
        ))}
      </g>
      {NODES.map(([x, y], index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r="3"
          fill={index % 4 === 0 ? '#f6b92a' : 'currentColor'}
          className="animate-node [transform-box:fill-box] origin-center"
          style={{ animationDelay: `${(index % 7) * 0.45}s` }}
        />
      ))}
    </svg>
  )
}
