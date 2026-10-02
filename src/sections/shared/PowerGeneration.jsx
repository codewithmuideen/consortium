import { motion } from 'motion/react'
import { power } from '../../data/home.js'
import { images } from '../../data/images.js'
import { EASE, VIEWPORT } from '../../lib/motion.js'
import { FlowDiagram } from '../../components/visuals/FlowDiagram.jsx'
import { ParallaxImage } from '../../components/ui/Picture.jsx'
import { Section } from '../../components/ui/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'

/** Power generation: the chain from generation to end user, then a clipped wide image. */
export function PowerGeneration({ heading = power }) {
  return (
    <Section tone="light" id="power">
      <SectionHeading {...heading} />
      <div className="mt-16 lg:mt-24">
        <FlowDiagram />
      </div>
      <motion.div
        initial={{ clipPath: 'inset(14% 10% 14% 10% round 24px)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 16px)' }}
        viewport={VIEWPORT}
        transition={{ duration: 1.1, ease: EASE }}
        className="mt-16 lg:mt-24"
      >
        <ParallaxImage image={images.towersDusk} sizes="(min-width: 1440px) 1320px, 92vw" className="aspect-[4/3] sm:aspect-[5/2]" />
      </motion.div>
    </Section>
  )
}
