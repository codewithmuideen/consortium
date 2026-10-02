import { consortiumStrands } from '../../data/company.js'
import { AnimatedText } from '../../components/ui/AnimatedText.jsx'
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../../components/ui/Section.jsx'

/** What the consortium brings together, set as an oversized typographic list. */
export function Strands({ tone = 'light', eyebrow, title, paragraphs = [] }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <AnimatedText text={title} className="display-3 mt-7 max-w-[20ch]" />
          {paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.1 + index * 0.08}>
              <p className="mt-6 max-w-[48ch] leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <RevealGroup as="ul" stagger={0.06} className="border-t border-line lg:col-span-7">
          {consortiumStrands.map((strand, index) => (
            <RevealItem
              as="li"
              direction="left"
              key={strand}
              className="group flex items-baseline justify-between gap-6 border-b border-line py-4 lg:py-5"
            >
              <span className="font-display text-[clamp(1.5rem,3.4vw,3rem)] leading-tight font-semibold tracking-[-0.03em] transition-[transform,color] duration-300 ease-expo group-hover:translate-x-3 group-hover:text-accent">
                {strand}
              </span>
              <span className="text-xs font-medium tracking-widest text-muted">{String(index + 1).padStart(2, '0')}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
