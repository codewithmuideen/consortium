import { homeSections } from '../data/home.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { Hero } from '../sections/home/Hero.jsx'
import { Intro } from '../sections/home/Intro.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'
import { Impact } from '../sections/shared/Impact.jsx'
import { InterconnectedGrid } from '../sections/shared/InterconnectedGrid.jsx'
import { MiniGrid } from '../sections/shared/MiniGrid.jsx'
import { Pillars } from '../sections/shared/Pillars.jsx'
import { PowerGeneration } from '../sections/shared/PowerGeneration.jsx'
import { Solutions } from '../sections/shared/Solutions.jsx'
import { Technology } from '../sections/shared/Technology.jsx'
import { WhyConsortium } from '../sections/shared/WhyConsortium.jsx'

// Section id → component. Order and visibility come from data, ready for a CMS.
const SECTIONS = {
  hero: Hero,
  intro: Intro,
  pillars: Pillars,
  power: PowerGeneration,
  miniGrid: MiniGrid,
  interconnected: InterconnectedGrid,
  solutions: Solutions,
  technology: Technology,
  impact: Impact,
  why: WhyConsortium,
  cta: CTASection,
}

const sections = homeSections.filter((section) => section.enabled).sort((a, b) => a.order - b.order)

export default function Home() {
  usePageMeta('home')
  return sections.map(({ id }) => {
    const Component = SECTIONS[id]
    return Component ? <Component key={id} /> : null
  })
}
