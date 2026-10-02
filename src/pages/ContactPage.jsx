import { Mail, MapPin, Phone } from 'lucide-react'
import { phoneHref, siteConfig } from '../data/siteConfig.js'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { ContactForm } from '../components/contact/ContactForm.jsx'
import { PageHero } from '../components/ui/PageHero.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Eyebrow, Section } from '../components/ui/Section.jsx'

function Detail({ icon: Icon, label, children }) {
  return (
    <div className="border-t border-line py-6">
      <dt className="flex items-center gap-3 text-sm font-medium text-muted">
        <Icon aria-hidden="true" className="size-4 text-accent" />
        {label}
      </dt>
      <dd className="mt-3 flex flex-col items-start gap-2 font-display text-lg font-medium tracking-tight break-words sm:text-xl">
        {children}
      </dd>
    </div>
  )
}

export default function ContactPage() {
  usePageMeta('contact')
  const { emails, phone, location } = siteConfig.contact

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Consortium."
        description="Tell us about your site, your load or your network. We will take it from there."
        image="towerSunset"
        compact
      />
      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="display-3 mt-7 max-w-[16ch]">Start with a conversation.</h2>
            <dl className="mt-10 border-b border-line">
              <Detail icon={Mail} label="Email">
                {emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="link-underline">
                    {email}
                  </a>
                ))}
              </Detail>
              <Detail icon={Phone} label="Phone">
                <a href={phoneHref} className="link-underline">
                  {phone}
                </a>
              </Detail>
              <Detail icon={MapPin} label="Location">
                {location}
              </Detail>
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-8 lg:pl-8">
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
