import { cookiePolicy, lastUpdated, legalNotice, privacyPolicy, terms } from '../data/legal.js'
import { useConsent } from '../context/ConsentContext.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { Button } from '../components/ui/Button.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { Section } from '../components/ui/Section.jsx'

const DOCUMENTS = {
  privacy: privacyPolicy,
  cookies: cookiePolicy,
  terms,
}

/** Renders one of the structured legal documents. `document` is a key of DOCUMENTS and of seoPages. */
export default function LegalPage({ document: key }) {
  usePageMeta(key)
  const { openPreferences } = useConsent()
  const doc = DOCUMENTS[key]

  return (
    <>
      <PageHero eyebrow={doc.title} title={doc.title} compact />
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
              <p className="text-sm text-muted">Last updated: {lastUpdated}</p>
              <p className="mt-5 rounded-lg border border-dashed border-line p-4 text-sm leading-relaxed text-muted">{legalNotice}</p>
              <nav aria-label="On this page" className="mt-8 hidden lg:block">
                <ol className="flex flex-col gap-2.5 text-sm">
                  {doc.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a href={`#section-${index + 1}`} className="link-underline text-muted hover:text-fg">
                        {index + 1}. {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <p className="lead max-w-[62ch]">{doc.intro}</p>
            {doc.sections.map((section, index) => (
              <section key={section.heading} id={`section-${index + 1}`} className="mt-12 scroll-mt-32 border-t border-line pt-10">
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  <span className="mr-3 text-accent">{index + 1}.</span>
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-5 max-w-[66ch] leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 flex max-w-[66ch] list-disc flex-col gap-2.5 pl-5 leading-relaxed text-muted marker:text-accent">
                    {section.list.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {key === 'cookies' && (
              <Button variant="secondary" arrow={false} onClick={openPreferences} className="mt-12">
                Open cookie settings
              </Button>
            )}
          </article>
        </div>
      </Section>
    </>
  )
}
