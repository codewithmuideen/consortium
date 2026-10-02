import { usePageMeta } from '../hooks/usePageMeta.js'
import { PageHero } from '../components/ui/PageHero.jsx'
import { PlaceholderNote } from '../components/ui/PlaceholderNote.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../components/ui/Section.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'
import { Impact } from '../sections/shared/Impact.jsx'
import { Solutions } from '../sections/shared/Solutions.jsx'

const impactHeading = {
  eyebrow: 'Selected areas of expertise',
  title: 'Four kinds of demand. One standard of delivery.',
  description: 'These are the settings our work is designed for.',
}

export default function ProjectsPage() {
  usePageMeta('projects')
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Where we create impact."
        description="Infrastructure is measured by who it reaches. This is where our work is aimed."
        image="substation"
      />
      <Impact heading={impactHeading} />

      <Section tone="navy">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow>Case studies</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-9">
            <h2 className="display-3 max-w-[24ch]">Project case studies will be published here.</h2>
            <p className="lead mt-6 max-w-[54ch] text-muted">
              We only publish project details that are verified and cleared for release. Until then, this page describes
              the sectors we work in rather than individual projects.
            </p>
            <PlaceholderNote className="mt-8">[PROJECT CASE STUDIES: TO BE SUPPLIED]</PlaceholderNote>
          </Reveal>
        </div>
      </Section>

      <Solutions />
      <CTASection />
    </>
  )
}
