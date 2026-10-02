import { solutionsIntro } from '../../data/home.js'
import { solutions } from '../../data/solutions.js'
import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Section } from '../../components/ui/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { SolutionCard } from '../../components/ui/SolutionCard.jsx'

const published = solutions.filter((solution) => solution.enabled).sort((a, b) => a.order - b.order)

/** Grid of solution cards. `detailed` adds each solution's scope list. */
export function Solutions({ heading = solutionsIntro, detailed = false }) {
  return (
    <Section tone="light" id="solutions">
      <SectionHeading {...heading} />
      <RevealGroup stagger={0.08} className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:gap-6 xl:grid-cols-3">
        {published.map((solution) => (
          <RevealItem key={solution.id} className="h-full">
            <SolutionCard solution={solution} showScope={detailed} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
