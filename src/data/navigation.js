/** Maps to the future Supabase `navigation` table. */
export const primaryNav = [
  { label: 'About', to: '/about', order: 1, enabled: true },
  { label: 'Solutions', to: '/solutions', order: 2, enabled: true },
  { label: 'Power & Grid', to: '/power-generation', order: 3, enabled: true },
  { label: 'Technology', to: '/technology', order: 4, enabled: true },
  { label: 'Projects', to: '/projects', order: 5, enabled: true },
  { label: 'Insights', to: '/insights', order: 6, enabled: true },
  { label: 'Contact', to: '/contact', order: 7, enabled: true },
]

export const navCta = { label: 'Talk to Consortium', to: '/contact' }

export const footerNav = [
  {
    title: 'Solutions',
    links: [
      { label: 'All solutions', to: '/solutions' },
      { label: 'Mini-grids', to: '/mini-grids' },
      { label: 'Interconnected grids', to: '/interconnected-grids' },
    ],
  },
  {
    title: 'Power & Grid',
    links: [
      { label: 'Power generation', to: '/power-generation' },
      { label: 'Mini-grid development', to: '/mini-grids' },
      { label: 'Grid interconnection', to: '/interconnected-grids' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'Technology consortium', to: '/technology' },
      { label: 'Insights', to: '/insights' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export const legalNav = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
  { label: 'Terms', to: '/terms' },
]
