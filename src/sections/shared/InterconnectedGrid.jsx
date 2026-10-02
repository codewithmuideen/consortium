import { interconnected } from '../../data/home.js'
import { EnergyGrid } from '../../components/visuals/EnergyGrid.jsx'
import { Reveal } from '../../components/ui/Reveal.jsx'
import { Section } from '../../components/ui/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'

/** Interconnected grid: the interactive energy-network diagram. */
export function InterconnectedGrid({ heading = interconnected }) {
  return (
    <Section tone="navy" id="interconnected-grids" className="overflow-hidden">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative">
        <SectionHeading {...heading} />
        <Reveal direction="scale" className="mt-14 rounded-2xl border border-line bg-ink-950/35 p-5 backdrop-blur-sm sm:p-8 lg:mt-20 lg:p-12">
          <EnergyGrid />
        </Reveal>
      </div>
    </Section>
  )
}
