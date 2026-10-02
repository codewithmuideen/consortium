import { gridStages } from '../data/grid.js'
import { images } from '../data/images.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PageHero } from '../components/ui/PageHero.jsx'
import { ParallaxImage } from '../components/ui/Picture.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'
import { InterconnectedGrid } from '../sections/shared/InterconnectedGrid.jsx'
import { Steps } from '../sections/shared/Steps.jsx'

const heading = {
  eyebrow: 'The network',
  title: 'Follow the power from source to socket.',
  description: 'Select any point on the network to see what happens there.',
}

export default function InterconnectedGridsPage() {
  usePageMeta('interconnectedGrids')
  return (
    <>
      <PageHero
        eyebrow="Interconnected grids"
        title="Joining generation to the wider network."
        description="Infrastructure capable of integrating generation assets into larger electricity networks."
        image="towersDusk"
      />
      <InterconnectedGrid heading={heading} />
      <Steps
        tone="light"
        eyebrow="How interconnection happens"
        title="Four stages to a live connection."
        items={gridStages}
      />
      <div className="tone-light">
        <div className="container-x pb-(--section-y)">
          <ParallaxImage image={images.substation} sizes="(min-width: 1440px) 1320px, 92vw" className="aspect-[4/3] rounded-2xl sm:aspect-[21/9]" />
        </div>
      </div>
      <CTASection />
    </>
  )
}
