import { usePageMeta } from '../hooks/usePageMeta.js'
import { PageHero } from '../components/ui/PageHero.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'
import { InterconnectedGrid } from '../sections/shared/InterconnectedGrid.jsx'
import { Strands } from '../sections/shared/Strands.jsx'
import { Technology } from '../sections/shared/Technology.jsx'

const technologyHeading = {
  eyebrow: 'Capabilities',
  title: 'Eight ways technology earns its place.',
  description: 'These are the areas our technology work is organised around. Each supports the power systems we develop.',
}

const gridHeading = {
  eyebrow: 'A connected system',
  title: 'Every node is a source of data.',
  description: 'From generation to end user, each stage can be measured, and what can be measured can be managed.',
}

export default function TechnologyPage() {
  usePageMeta('technology')
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Technology meets infrastructure."
        description="Consortium is technology-led: digital systems are part of the design from the first drawing, not an afterthought."
        image="cityNight"
      />
      <Strands
        eyebrow="The technology consortium"
        title="What a consortium brings that a single firm cannot."
        paragraphs={[
          'Modern power systems cross disciplines. A consortium lets the right specialists work on the same brief, under one point of coordination.',
        ]}
      />
      <Technology heading={technologyHeading} />
      <InterconnectedGrid heading={gridHeading} />
      <CTASection />
    </>
  )
}
