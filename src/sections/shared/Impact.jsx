import { impactIntro } from '../../data/home.js'
import { sectors } from '../../data/company.js'
import { images } from '../../data/images.js'
import { icons } from '../../lib/icons.js'
import { Picture } from '../../components/ui/Picture.jsx'
import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Section } from '../../components/ui/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'

/**
 * "Where we create impact": sectors in place of case studies, because no
 * verified projects are published yet.
 */
export function Impact({ heading = impactIntro }) {
  return (
    <Section tone="light" id="impact">
      <SectionHeading {...heading} />
      <RevealGroup as="ul" stagger={0.1} className="mt-14 border-t border-line lg:mt-20">
        {sectors.map((sector) => {
          const Icon = icons[sector.icon]
          return (
            <RevealItem
              as="li"
              key={sector.number}
              className="group grid items-center gap-x-8 gap-y-5 border-b border-line py-8 transition-[padding] duration-500 ease-expo md:grid-cols-12 lg:py-10 lg:hover:px-4"
            >
              <span className="flex items-center gap-4 text-sm font-medium tracking-widest text-muted md:col-span-2">
                {sector.number}
                <Icon aria-hidden="true" strokeWidth={1.5} className="size-5 text-accent" />
              </span>
              <h3 className="font-display text-[clamp(1.6rem,3vw,2.75rem)] leading-tight font-semibold tracking-[-0.025em] md:col-span-4">
                {sector.title}
              </h3>
              <p className="max-w-[40ch] leading-relaxed text-muted md:col-span-4">{sector.text}</p>
              <div className="overflow-hidden rounded-lg md:col-span-2">
                <Picture
                  image={images[sector.image]}
                  alt=""
                  sizes="(min-width: 768px) 16vw, 92vw"
                  className="aspect-[16/9] w-full object-cover transition-[filter,scale] duration-700 ease-expo md:aspect-[4/3] lg:grayscale lg:group-hover:scale-105 lg:group-hover:grayscale-0"
                />
              </div>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
