import markColor from '../../assets/brand/mark-color.webp'
import { intro } from '../../data/home.js'
import { AnimatedText } from '../../components/ui/AnimatedText.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../../components/ui/Section.jsx'

/** Establishes what Consortium does: editorial statement plus a four-part index. */
export function Intro() {
  return (
    <Section tone="light" id="intro">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Reveal>
            <Eyebrow>{intro.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal direction="scale" delay={0.2} className="mt-12 hidden lg:block">
            <img
              src={markColor}
              alt=""
              width={319}
              height={320}
              loading="lazy"
              decoding="async"
              className="animate-float w-40 xl:w-48"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <AnimatedText text={intro.title} className="display-2 max-w-[20ch]" />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14 lg:gap-12">
            {intro.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.1 + index * 0.1}>
                <p className={index === 0 ? 'lead text-fg' : 'lead text-muted'}>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25} className="mt-10">
            <Button to={intro.cta.to} variant="link">
              {intro.cta.label}
            </Button>
          </Reveal>
        </div>
      </div>

      <RevealGroup as="ol" stagger={0.1} className="mt-20 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
        {intro.index.map((entry) => (
          <RevealItem
            as="li"
            key={entry.number}
            className="group border-t border-line pt-7"
          >
            <p className="font-display text-sm font-medium tracking-widest text-accent transition-transform duration-300 group-hover:translate-x-1">
              {entry.number}
            </p>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight lg:text-3xl">{entry.title}</h3>
            <p className="mt-3 max-w-[30ch] leading-relaxed text-muted">{entry.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
