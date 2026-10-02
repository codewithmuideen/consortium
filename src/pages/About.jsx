import { approach, companyStatements } from '../data/company.js'
import { intro } from '../data/home.js'
import { siteConfig } from '../data/siteConfig.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PageHero } from '../components/ui/PageHero.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../components/ui/Section.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'
import { Pillars } from '../sections/shared/Pillars.jsx'
import { Steps } from '../sections/shared/Steps.jsx'
import { Strands } from '../sections/shared/Strands.jsx'
import { Sustainability } from '../sections/shared/Sustainability.jsx'
import { WhyConsortium } from '../sections/shared/WhyConsortium.jsx'

export default function About() {
  usePageMeta('about')
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A consortium built around power and technology."
        description={`${siteConfig.name}: ${siteConfig.tagline.toLowerCase()}.`}
        image="solarField"
      />

      <Strands
        eyebrow="Who we are"
        title="One table for the disciplines a power system needs."
        paragraphs={intro.paragraphs}
      />

      <Pillars />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow>Mission &amp; vision</Eyebrow>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-9">
            {companyStatements.map((statement, index) => (
              <Reveal key={statement.label} delay={index * 0.1} className="rounded-xl border border-line bg-surface p-7 lg:p-10">
                <h2 className="eyebrow text-accent">{statement.label}</h2>
                <p className="mt-6 font-display text-[clamp(1.25rem,1.9vw,1.75rem)] leading-snug font-medium tracking-tight">
                  {statement.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Steps tone="navy" eyebrow="How we work" title="From first conversation to an operating asset." items={approach} />
      <Sustainability />
      <WhyConsortium />
      <CTASection />
    </>
  )
}
