import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { footerNav, legalNav } from '../../data/navigation.js'
import { phoneHref, siteConfig } from '../../data/siteConfig.js'
import { useConsent } from '../../context/ConsentContext.jsx'
import { socialIcons } from '../../lib/icons.js'
import { Logo } from '../ui/Logo.jsx'

function ContactRow({ icon: Icon, label, children }) {
  return (
    <li className="flex items-start gap-3">
      <Icon aria-hidden="true" className="mt-1 size-4 shrink-0 text-amber" />
      <div className="flex flex-col items-start gap-1.5 text-fg">
        <span className="sr-only">{label}: </span>
        {children}
      </div>
    </li>
  )
}

export function Footer() {
  const { openPreferences } = useConsent()
  const { emails, phone, location } = siteConfig.contact
  const year = new Date().getFullYear()

  return (
    <footer className="tone-ink relative overflow-hidden">
      <div className="container-x pt-20 lg:pt-28">
        <div className="grid gap-14 border-b border-line pb-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo className="h-24 w-auto lg:h-28" />
            <p className="mt-7 max-w-[34ch] text-muted">
              A technology and energy infrastructure consortium, building intelligent and resilient power systems.
            </p>

            <ul className="mt-9 flex flex-col gap-4 text-sm">
              <ContactRow icon={Mail} label="Email">
                {emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="link-underline">
                    {email}
                  </a>
                ))}
              </ContactRow>
              <ContactRow icon={Phone} label="Phone">
                <a href={phoneHref} className="link-underline">
                  {phone}
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} label="Location">
                {location}
              </ContactRow>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:col-span-8 lg:pl-10">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="eyebrow text-muted">{group.title}</h2>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="link-underline pb-0.5 text-[0.95rem] text-fg/85 hover:text-fg">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © {year} {siteConfig.legalName} - All Rights Reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legalNav.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="link-underline hover:text-fg">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button type="button" onClick={openPreferences} className="link-underline hover:text-fg">
                Cookie settings
              </button>
            </li>
          </ul>

          {siteConfig.socials.length > 0 && (
            <ul className="flex items-center gap-2">
              {siteConfig.socials.map(({ platform, url }) => {
                const Icon = socialIcons[platform]
                if (!Icon) return null
                return (
                  <li key={platform}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${siteConfig.name} on ${platform}`}
                      className="grid size-10 place-items-center rounded-full border border-line text-fg transition-colors duration-200 hover:bg-fg hover:text-bg"
                    >
                      <Icon aria-hidden="true" className="size-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.2em] select-none text-center font-display text-[clamp(2.4rem,12.6vw,15rem)] leading-none font-semibold tracking-[-0.04em] whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.14)]"
      >
        CONSORTIUM
      </p>
    </footer>
  )
}
