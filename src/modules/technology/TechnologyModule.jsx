import { Strands } from '../../sections/shared/Strands.jsx'
import { Technology } from '../../sections/shared/Technology.jsx'

const heading = {
  eyebrow: 'Capabilities',
  title: 'Eight ways technology earns its place.',
  description: 'These are the areas our technology work is organised around. Each supports the power systems we develop.',
}

/** Technology module: the capability grid and what the consortium model brings together. */
export default function TechnologyModule() {
  return (
    <>
      <Technology heading={heading} />
      <Strands
        eyebrow="The technology consortium"
        title="What a consortium brings that a single firm cannot."
        paragraphs={[
          'Modern power systems cross disciplines. A consortium lets the right specialists work on the same brief, under one point of coordination.',
          'From generation to end user, each stage can be measured, and what can be measured can be managed.',
        ]}
      />
    </>
  )
}
