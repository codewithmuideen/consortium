import { PlaceholderNote } from '../../components/ui/PlaceholderNote.jsx'
import { Reveal } from '../../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../../components/ui/Section.jsx'
import { Impact } from '../../sections/shared/Impact.jsx'

const heading = {
  eyebrow: 'Selected areas of expertise',
  title: 'Four kinds of demand. One standard of delivery.',
  description: 'These are the settings our work is designed for.',
}

/** Projects module: sectors in place of case studies, until verified projects are supplied. */
export default function ProjectsModule() {
  return (
    <>
      <Impact heading={heading} />

      <Section tone="navy">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <Eyebrow>Case studies</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-9">
            <h2 className="display-3 max-w-[24ch]">Project case studies will be published here.</h2>
            <p className="lead mt-6 max-w-[54ch] text-muted">
              We only publish project details that are verified and cleared for release. Until then, this module
              describes the sectors we work in rather than individual projects.
            </p>
            <PlaceholderNote className="mt-8">[PROJECT CASE STUDIES: TO BE SUPPLIED]</PlaceholderNote>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
