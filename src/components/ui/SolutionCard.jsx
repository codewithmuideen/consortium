import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { images } from '../../data/images.js'
import { icons } from '../../lib/icons.js'
import { Picture } from './Picture.jsx'

/** Solution card: image, number, icon, title, description and arrow. The whole card is one link. */
export function SolutionCard({ solution, showScope = false }) {
  const Icon = icons[solution.icon]
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-fg/40 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Picture
          image={images[solution.image]}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 92vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.06]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink-950/70 to-transparent" />
        <span className="absolute bottom-4 left-5 font-display text-sm font-medium tracking-widest text-white">
          {solution.number}
        </span>
        <span className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="font-display text-xl font-semibold tracking-tight lg:text-2xl">
          <Link to={solution.to} className="after:absolute after:inset-0 focus-visible:outline-none">
            {solution.title}
          </Link>
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{solution.description}</p>

        {showScope && (
          <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6 text-sm">
            {solution.scope.map((entry) => (
              <li key={entry} className="flex items-center gap-3">
                <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
                {entry}
              </li>
            ))}
          </ul>
        )}

        <span
          aria-hidden="true"
          className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-fg"
        >
          Learn more
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      {/* Focus ring for the stretched link */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-transparent ring-inset group-has-focus-visible:ring-amber" />
    </article>
  )
}
