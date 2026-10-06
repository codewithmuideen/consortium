import { companyStatements } from '../../data/company.js'
import { Reveal } from '../../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../../components/ui/Section.jsx'
import { Pillars } from '../../sections/shared/Pillars.jsx'
import { WhyConsortium } from '../../sections/shared/WhyConsortium.jsx'

/** About module: mission and vision, the two objectives, and the six commitments. */
export default function AboutModule() {
  return (
    <>
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

      <Pillars />
      <WhyConsortium />
    </>
  )
}
