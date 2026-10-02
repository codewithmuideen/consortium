import { technologyIntro } from '../../data/home.js'
import { technologyAreas } from '../../data/company.js'
import { icons } from '../../lib/icons.js'
import { NodeField } from '../../components/visuals/NodeField.jsx'
import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Section } from '../../components/ui/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'

/** Technology capabilities over a field of connected data points. */
export function Technology({ heading = technologyIntro }) {
  return (
    <Section tone="ink" id="technology" className="overflow-hidden">
      <NodeField className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_10%,transparent_75%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 size-[40rem] rounded-full bg-sun/10 blur-[140px]"
      />

      <div className="relative">
        <SectionHeading {...heading} />
        <RevealGroup
          as="ul"
          stagger={0.06}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:mt-20 xl:grid-cols-4"
        >
          {technologyAreas.map((area, index) => {
            const Icon = icons[area.icon]
            return (
              <RevealItem
                as="li"
                direction="fade"
                key={area.title}
                className="group flex min-h-56 flex-col bg-bg p-7 transition-colors duration-300 hover:bg-ink-800 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="size-7 text-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:text-amber"
                  />
                  <span className="text-xs font-medium tracking-widest text-muted">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-auto pt-10 font-display text-xl font-semibold tracking-tight">{area.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{area.text}</p>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </Section>
  )
}
