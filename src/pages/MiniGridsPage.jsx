import { miniGridParts } from '../data/grid.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PageHero } from '../components/ui/PageHero.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'
import { MiniGrid } from '../sections/shared/MiniGrid.jsx'
import { Steps } from '../sections/shared/Steps.jsx'
import { Sustainability } from '../sections/shared/Sustainability.jsx'

export default function MiniGridsPage() {
  usePageMeta('miniGrids')
  return (
    <>
      <PageHero
        eyebrow="Mini-grids"
        title="Local power, built to grow."
        description="Mini-grids generate and distribute electricity within a defined area: a community, an estate or an industrial site."
        image="siteEngineer"
      />
      <Steps
        tone="light"
        eyebrow="Anatomy of a mini-grid"
        title="Four parts, working as one."
        description="Every mini-grid combines the same building blocks. How each is sized depends on the place and the demand."
        items={miniGridParts}
      />
      <MiniGrid showCta={false} />
      <Sustainability />
      <CTASection />
    </>
  )
}
