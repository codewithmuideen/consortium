import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { pillars } from '../../data/home.js'
import { images } from '../../data/images.js'
import { icons } from '../../lib/icons.js'
import { ParallaxImage } from '../../components/ui/Picture.jsx'
import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Section } from '../../components/ui/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'

export function PillarPanel({ pillar }) {
  const Icon = icons[pillar.icon]
  return (
    <Link
      to={pillar.to}
      className="group relative isolate flex min-h-[34rem] flex-col justify-between overflow-hidden rounded-2xl p-7 text-white sm:p-9 lg:min-h-[44rem] lg:p-12"
    >
      <ParallaxImage
        image={images[pillar.image]}
        alt=""
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="absolute inset-0 -z-20"
        imageClassName="transition-transform duration-[1200ms] ease-expo group-hover:scale-105"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-ink-950/70 to-ink-950/25 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="flex items-start justify-between">
        <span className="font-display text-[clamp(4rem,9vw,8rem)] leading-none font-semibold tracking-[-0.05em] text-transparent transition-transform duration-500 ease-expo [-webkit-text-stroke:1px_rgb(255_255_255/0.7)] group-hover:-translate-y-2">
          {pillar.number}
        </span>
        <span className="grid size-14 place-items-center rounded-full border border-white/30 backdrop-blur-md transition-colors duration-300 group-hover:border-transparent group-hover:bg-amber group-hover:text-ink-950">
          <Icon aria-hidden="true" className="size-6 transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.5} />
        </span>
      </div>

      <div>
        <h3 className="font-display text-[clamp(1.9rem,3.4vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
          {pillar.title}
        </h3>
        <p className="mt-5 max-w-[44ch] leading-relaxed text-white/80">{pillar.description}</p>
        <ul className="mt-8 flex flex-col border-t border-white/20">
          {pillar.points.map((point) => (
            <li key={point} className="flex items-center justify-between border-b border-white/20 py-3.5 text-[0.95rem]">
              {point}
              <span aria-hidden="true" className="size-1.5 rounded-full bg-amber" />
            </li>
          ))}
        </ul>
        <span className="mt-8 inline-flex items-center gap-2.5 text-sm font-medium">
          Explore
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  )
}

/** The two business objectives as large split panels. */
export function Pillars() {
  return (
    <Section tone="dark" id="objectives">
      <SectionHeading eyebrow={pillars.eyebrow} title={pillars.title} />
      <RevealGroup stagger={0.15} className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">
        {pillars.items.map((pillar, index) => (
          <RevealItem key={pillar.number} direction={index === 0 ? 'right' : 'left'}>
            <PillarPanel pillar={pillar} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
