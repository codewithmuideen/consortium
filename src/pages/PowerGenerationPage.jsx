import { gridPaths } from '../data/grid.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PageHero } from '../components/ui/PageHero.jsx'
import { RevealGroup, RevealItem } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'
import { PillarPanel } from '../sections/shared/Pillars.jsx'
import { PowerGeneration } from '../sections/shared/PowerGeneration.jsx'
import { Sustainability } from '../sections/shared/Sustainability.jsx'

const heading = {
  eyebrow: 'The power chain',
  title: 'Every link, designed as one system.',
  description:
    'Reliable electricity depends on generation, protection, network and delivery working together. We plan them together from the start.',
}

export default function PowerGenerationPage() {
  usePageMeta('power')
  return (
    <>
      <PageHero
        eyebrow="Power generation"
        title="From generation to grid."
        description="Generation assets and the infrastructure around them, from localised mini-grids to interconnection with larger networks."
        image="solarField"
      />
      <PowerGeneration heading={heading} />

      <Section tone="dark">
        <SectionHeading
          eyebrow="Two routes to power"
          title="Local where it helps. Connected where it counts."
          description="Some demand is best served by a system of its own. Some is best served by joining a wider network. We develop both."
        />
        <RevealGroup stagger={0.15} className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">
          {gridPaths.map((path, index) => (
            <RevealItem key={path.number} direction={index === 0 ? 'right' : 'left'}>
              <PillarPanel pillar={path} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Sustainability />
      <CTASection />
    </>
  )
}
