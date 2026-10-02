import { miniGrid } from '../../data/home.js'
import { miniGridTopics } from '../../data/grid.js'
import { images } from '../../data/images.js'
import { Accordion } from '../../components/ui/Accordion.jsx'
import { AnimatedText } from '../../components/ui/AnimatedText.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { ParallaxImage } from '../../components/ui/Picture.jsx'
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../../components/ui/Section.jsx'

/** Mini-grid storytelling: a pinned annotated image beside an explainer accordion. */
export function MiniGrid({ showCta = true, headingLevel = 'h2' }) {
  return (
    <Section tone="ink" id="mini-grids">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
          <Reveal>
            <Eyebrow>{miniGrid.eyebrow}</Eyebrow>
          </Reveal>
          <AnimatedText as={headingLevel} text={miniGrid.title} className="display-2 mt-7 max-w-[16ch]" />
          <Reveal delay={0.15}>
            <p className="lead mt-8 max-w-[50ch] text-muted">{miniGrid.description}</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-12">
            <Accordion items={miniGridTopics} />
          </Reveal>
          {showCta && (
            <Reveal className="mt-10">
              <Button to={miniGrid.cta.to} variant="secondary">
                {miniGrid.cta.label}
              </Button>
            </Reveal>
          )}
        </div>

        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
          <Reveal direction="right" className="relative lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <ParallaxImage
              image={images[miniGrid.image]}
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="aspect-[4/5] rounded-2xl sm:aspect-[4/3] lg:aspect-[4/5]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-ink-950/80 via-transparent to-transparent" />
            <RevealGroup as="dl" stagger={0.12} delay={0.4} className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-6 sm:bottom-6 sm:gap-3">
              {miniGrid.annotations.map((annotation) => (
                <RevealItem
                  key={annotation.label}
                  className="rounded-lg border border-white/15 bg-ink-950/55 p-3 backdrop-blur-md sm:p-4"
                >
                  <dt className="text-[0.625rem] font-semibold tracking-[0.18em] text-amber uppercase">{annotation.label}</dt>
                  <dd className="mt-1.5 text-xs leading-snug font-medium text-white sm:text-sm">{annotation.value}</dd>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
