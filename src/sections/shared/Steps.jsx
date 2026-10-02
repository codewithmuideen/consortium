import { RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Section } from '../../components/ui/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'

/** Numbered sequence of steps. Items: { title, text }. */
export function Steps({ tone = 'dark', eyebrow, title, description, items }) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <RevealGroup as="ol" stagger={0.1} className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {items.map((item, index) => (
          <RevealItem as="li" key={item.title} className="group relative border-t border-line pt-7">
            <span aria-hidden="true" className="absolute -top-px left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-expo group-hover:w-full" />
            <p className="font-display text-sm font-medium tracking-widest text-accent">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight lg:text-3xl">{item.title}</h3>
            <p className="mt-3 max-w-[32ch] leading-relaxed text-muted">{item.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
