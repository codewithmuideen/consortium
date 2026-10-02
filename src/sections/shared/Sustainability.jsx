import { sustainability } from '../../data/company.js'
import { images } from '../../data/images.js'
import { AnimatedText } from '../../components/ui/AnimatedText.jsx'
import { ParallaxImage } from '../../components/ui/Picture.jsx'
import { Reveal, RevealGroup, RevealItem } from '../../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../../components/ui/Section.jsx'

/** Sustainability, stated as design intent rather than as environmental promises. */
export function Sustainability({ tone = 'light' }) {
  return (
    <Section tone={tone}>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal direction="right" className="lg:col-span-5">
          <ParallaxImage image={images.solarEngineer} sizes="(min-width: 1024px) 38vw, 92vw" className="aspect-[4/3] rounded-2xl lg:aspect-[4/5]" />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>{sustainability.eyebrow}</Eyebrow>
          </Reveal>
          <AnimatedText text={sustainability.title} className="display-2 mt-7 max-w-[14ch]" />
          <Reveal delay={0.15}>
            <p className="lead mt-8 max-w-[52ch] text-muted">{sustainability.description}</p>
          </Reveal>
          <RevealGroup as="ul" stagger={0.08} className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {sustainability.items.map((item) => (
              <RevealItem as="li" key={item.title} className="border-t border-line py-6">
                <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  )
}
