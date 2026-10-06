import { miniGridParts } from '../../data/grid.js'
import { MiniGrid } from '../../sections/shared/MiniGrid.jsx'
import { Steps } from '../../sections/shared/Steps.jsx'

/** Mini-Grids module: the anatomy of a mini-grid and the annotated explainer. */
export default function MiniGridsModule() {
  return (
    <>
      <Steps
        tone="light"
        eyebrow="Anatomy of a mini-grid"
        title="Four parts, working as one."
        description="Every mini-grid combines the same building blocks. How each is sized depends on the place and the demand."
        items={miniGridParts}
      />
      <MiniGrid showCta={false} />
    </>
  )
}
