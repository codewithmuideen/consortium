import { usePageMeta } from '../hooks/usePageMeta.js'
import { PageHero } from '../components/ui/PageHero.jsx'
import { approach } from '../data/company.js'
import { CTASection } from '../sections/shared/CTASection.jsx'
import { Impact } from '../sections/shared/Impact.jsx'
import { Solutions } from '../sections/shared/Solutions.jsx'
import { Steps } from '../sections/shared/Steps.jsx'

const heading = {
  eyebrow: 'What we do',
  title: 'Six capabilities, one integrated scope.',
  description: 'Each can be delivered on its own. Together they cover a power system from generation to the point of use.',
}

export default function SolutionsPage() {
  usePageMeta('solutions')
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Building smarter power systems."
        description="Generation, grid and the technology that connects them, brought together by one consortium."
        image="pylons"
      />
      <Solutions heading={heading} detailed />
      <Steps tone="navy" eyebrow="How we work" title="A clear path from brief to operation." items={approach} />
      <Impact />
      <CTASection />
    </>
  )
}
