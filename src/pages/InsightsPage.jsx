import { insightThemes } from '../data/company.js'
import { icons } from '../lib/icons.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PageHero } from '../components/ui/PageHero.jsx'
import { PlaceholderNote } from '../components/ui/PlaceholderNote.jsx'
import { RevealGroup, RevealItem } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { CTASection } from '../sections/shared/CTASection.jsx'

export default function InsightsPage() {
  usePageMeta('insights')
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on power and technology."
        description="Notes on mini-grids, grid interconnection and smarter infrastructure."
        image="pylons"
        compact
      />
      <Section tone="light">
        <SectionHeading
          eyebrow="Coming soon"
          title="The themes we will be writing about."
          description="No articles have been published yet. These are the subjects this section is set up to cover."
        />
        <RevealGroup as="ul" stagger={0.08} className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:gap-6 xl:grid-cols-4">
          {insightThemes.map((theme) => {
            const Icon = icons[theme.icon]
            return (
              <RevealItem as="li" key={theme.title} className="flex min-h-64 flex-col rounded-xl border border-line bg-surface p-7">
                <Icon aria-hidden="true" strokeWidth={1.5} className="size-7 text-accent" />
                <h3 className="mt-auto pt-10 font-display text-2xl font-semibold tracking-tight">{theme.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{theme.text}</p>
              </RevealItem>
            )
          })}
        </RevealGroup>
        <PlaceholderNote className="mt-10">[ARTICLES: TO BE PUBLISHED THROUGH THE CMS]</PlaceholderNote>
      </Section>
      <CTASection />
    </>
  )
}
