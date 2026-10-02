import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import heroLarge from '../../assets/videos/hero-solar-1080.mp4'
import heroSmall from '../../assets/videos/hero-solar-720.mp4'
import { hero } from '../../data/home.js'
import { heroPoster } from '../../data/images.js'
import { introDelay } from '../../lib/intro.js'
import { EASE } from '../../lib/motion.js'
import { AnimatedText } from '../../components/ui/AnimatedText.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Magnetic } from '../../components/ui/Magnetic.jsx'
import { VideoBackground } from '../../components/ui/VideoBackground.jsx'

const SOURCES = { large: heroLarge, small: heroSmall }

/**
 * Full-viewport cinematic hero. As the page scrolls the frame scales down and
 * rounds off, lifting away from the light section that follows.
 */
export function Hero() {
  const ref = useRef(null)
  const [delay] = useState(introDelay)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const radius = useTransform(scrollYProgress, [0, 1], [0, 40])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.14])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const fadeUp = (offset) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay: delay + offset },
  })

  return (
    <div className="bg-paper">
      <motion.section
        ref={ref}
        style={{ scale, borderRadius: radius }}
        className="tone-ink relative isolate flex min-h-svh origin-bottom items-end overflow-hidden"
      >
        <motion.div style={{ scale: mediaScale }} className="absolute inset-0 -z-20">
          <VideoBackground poster={heroPoster} sources={SOURCES} priority />
        </motion.div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-ink-950/55 to-ink-950/35" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-ink-950/75 via-ink-950/20 to-transparent" />
        <div
          aria-hidden="true"
          className="grid-lines absolute inset-0 -z-10 opacity-50 [mask-image:linear-gradient(to_top,black,transparent_70%)]"
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="container-x w-full pt-[calc(var(--nav-h)+3rem)] pb-8 lg:pb-10"
        >
          <motion.p {...fadeUp(0)} className="eyebrow flex items-center gap-3 text-amber">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-current" />
            {hero.eyebrow}
          </motion.p>

          <AnimatedText
            as="h1"
            immediate
            delay={delay + 0.1}
            text={hero.title}
            highlight="progress."
            className="display-1 mt-7 max-w-[13ch]"
          />

          <div className="mt-9 grid gap-9 lg:grid-cols-12 lg:items-end">
            <motion.p {...fadeUp(0.55)} className="lead max-w-[46ch] text-white/85 lg:col-span-6">
              {hero.description}
            </motion.p>
            <motion.div {...fadeUp(0.7)} className="flex flex-wrap items-center gap-4 lg:col-span-6 lg:justify-end">
              <Magnetic>
                <Button to={hero.primaryCta.to}>{hero.primaryCta.label}</Button>
              </Magnetic>
              <Button to={hero.secondaryCta.to} variant="secondary" className="backdrop-blur-sm [--line:rgb(255_255_255/0.4)]">
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.9)}
            className="mt-14 flex items-center justify-between gap-6 border-t border-white/15 pt-6 lg:mt-20"
          >
            <a href="#intro" className="group flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-white/75 uppercase hover:text-white">
              <span aria-hidden="true" className="relative block h-10 w-px overflow-hidden bg-white/25">
                <span className="animate-cue absolute inset-0 bg-amber" />
              </span>
              Scroll
            </a>
            <ul aria-label="What we work on" className="hidden items-center gap-8 text-xs font-medium tracking-[0.2em] text-white/75 uppercase sm:flex">
              {hero.ledger.map((entry, index) => (
                <li key={entry} className="flex items-center gap-3">
                  <span className="text-amber">{String(index + 1).padStart(2, '0')}</span>
                  {entry}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
