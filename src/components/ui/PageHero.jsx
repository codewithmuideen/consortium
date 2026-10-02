import { Link } from 'react-router-dom'
import { images } from '../../data/images.js'
import { AnimatedText } from './AnimatedText.jsx'
import { Picture } from './Picture.jsx'
import { Reveal } from './Reveal.jsx'

/** Header for secondary pages: dark image field, breadcrumb, title and lead. */
export function PageHero({ eyebrow, title, description, image, compact = false }) {
  return (
    <header className={`tone-ink relative isolate flex items-end overflow-hidden ${compact ? 'min-h-[52svh]' : 'min-h-[72svh]'}`}>
      {image && (
        <Picture
          image={images[image]}
          priority
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${image ? 'bg-linear-to-t from-ink-950 via-ink-950/75 to-ink-950/55' : 'grid-lines opacity-60'}`}
      />
      <div className="container-x pt-[calc(var(--nav-h)+4rem)] pb-14 lg:pb-20">
        <Reveal as="nav" aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="link-underline hover:text-fg">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-fg">
              {eyebrow}
            </li>
          </ol>
        </Reveal>
        <AnimatedText as="h1" immediate delay={0.1} text={title} className="max-w-[16ch] font-display text-[clamp(2.4rem,6.2vw,5.75rem)] leading-none font-semibold tracking-[-0.035em]" />
        {description && (
          <Reveal delay={0.35} className="mt-8 max-w-[58ch]">
            <p className="lead text-fg/85">{description}</p>
          </Reveal>
        )}
      </div>
    </header>
  )
}
