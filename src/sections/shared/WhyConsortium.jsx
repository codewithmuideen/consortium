import { why } from '../../data/home.js'
import { AnimatedText } from '../../components/ui/AnimatedText.jsx'
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../../components/ui/Section.jsx'

/** Credibility themes on the brand's sun gradient, the page's accent moment. */
export function WhyConsortium() {
  return (
    <Section tone="accent" id="why">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{why.eyebrow}</Eyebrow>
          </Reveal>
          <AnimatedText text={why.title} className="display-2 mt-7 max-w-[12ch]" />
        </div>

        <RevealGroup as="ol" stagger={0.07} className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
          {why.items.map((item, index) => (
            <RevealItem as="li" key={item.title} className="group border-t border-line py-7">
              <div className="flex items-baseline gap-5">
                <span className="text-xs font-semibold tracking-widest text-muted">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
