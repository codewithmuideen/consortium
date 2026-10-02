import windVideo from '../../assets/videos/wind-farm-720.mp4'
import { cta } from '../../data/home.js'
import { images } from '../../data/images.js'
import { AnimatedText } from '../../components/ui/AnimatedText.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Magnetic } from '../../components/ui/Magnetic.jsx'
import { Reveal } from '../../components/ui/Reveal.jsx'
import { Eyebrow } from '../../components/ui/Section.jsx'
import { VideoBackground } from '../../components/ui/VideoBackground.jsx'

const SOURCES = { large: windVideo }

/** Closing call to action over the supplied wind-farm footage. Used on every page. */
export function CTASection() {
  return (
    <section className="tone-ink relative isolate overflow-hidden">
      <VideoBackground
        poster={images.windFarm.src}
        posterSrcSet={images.windFarm.srcSet}
        sources={SOURCES}
        className="-z-20"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950/70" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-transparent to-ink-900" />

      <div className="container-x py-28 lg:py-44">
        <Reveal>
          <Eyebrow>{cta.eyebrow}</Eyebrow>
        </Reveal>
        <AnimatedText text={cta.title} className="mt-8 max-w-[15ch] font-display text-[clamp(2.4rem,6.6vw,6.25rem)] leading-none font-semibold tracking-[-0.035em]" />
        <Reveal delay={0.2} className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="lead max-w-[44ch] text-white/85">{cta.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button to={cta.primaryCta.to}>{cta.primaryCta.label}</Button>
            </Magnetic>
            <Button to={cta.secondaryCta.to} variant="secondary" className="backdrop-blur-sm [--line:rgb(255_255_255/0.4)]">
              {cta.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
