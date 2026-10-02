/**
 * Site-wide settings. Maps to the future Supabase `site_settings` table.
 *
 * Only verified facts live here: details supplied by the company, taken from
 * sgconsortium.com or read from the brand files. Nothing is invented.
 */
export const siteConfig = {
  name: 'SolGenix Consortium',
  shortName: 'Consortium',
  // Name used in the copyright line of the current website.
  legalName: 'SolGenix NG',
  // Descriptor printed on the supplied logo.
  tagline: 'Power Generation, Distribution, and Tech Solutions',
  description:
    'SolGenix Consortium is a technology and energy infrastructure consortium developing mini-grids, interconnected-grid power systems and smart energy technology.',
  url: 'https://sgconsortium.com',
  ogImage: '/og-image.jpg',
  themeColor: '#040824',
  // Supplied by the company.
  contact: {
    emails: ['info@sgconsortium.com', 'enquiries@sgconsortium.com'],
    phone: '+1 (469) 403-3364',
    location: 'United States',
  },
  // e.g. { platform: 'linkedin', url: 'https://…' }; none are published on the current site.
  socials: [],
}

/** `tel:` link for the phone number, e.g. "tel:+14694033364". */
export const phoneHref = `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, '')}`
