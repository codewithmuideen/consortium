import { gridStages } from '../../data/grid.js'
import { images } from '../../data/images.js'
import { ParallaxImage } from '../../components/ui/Picture.jsx'
import { InterconnectedGrid } from '../../sections/shared/InterconnectedGrid.jsx'
import { Steps } from '../../sections/shared/Steps.jsx'

const heading = {
  eyebrow: 'The network',
  title: 'Follow the power from source to socket.',
  description: 'Select any point on the network to see what happens there.',
}

/** Interconnected Grids module: the interactive network diagram and the stages of interconnection. */
export default function GridModule() {
  return (
    <>
      <InterconnectedGrid heading={heading} />
      <Steps tone="light" eyebrow="How interconnection happens" title="Four stages to a live connection." items={gridStages} />
      <div className="tone-light">
        <div className="container-x pb-(--section-y)">
          <ParallaxImage image={images.substation} sizes="(min-width: 1440px) 1320px, 92vw" className="aspect-[4/3] rounded-2xl sm:aspect-[21/9]" />
        </div>
      </div>
    </>
  )
}
