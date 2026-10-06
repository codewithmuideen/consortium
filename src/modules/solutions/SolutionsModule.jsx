import { approach } from '../../data/company.js'
import { Solutions } from '../../sections/shared/Solutions.jsx'
import { Steps } from '../../sections/shared/Steps.jsx'

const heading = {
  eyebrow: 'What we do',
  title: 'Six capabilities, one integrated scope.',
  description: 'Each can be delivered on its own. Together they cover a power system from generation to the point of use.',
}

/** Solutions module: the six capabilities with their scope, and how work is delivered. */
export default function SolutionsModule() {
  return (
    <>
      <Solutions heading={heading} detailed />
      <Steps tone="navy" eyebrow="How we work" title="A clear path from brief to operation." items={approach} />
    </>
  )
}
