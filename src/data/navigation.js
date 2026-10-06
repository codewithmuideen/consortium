import { activeModules } from './modules.js'

/** Header links: one per module, generated from `data/modules.js`. */
export const primaryNav = activeModules.filter((module) => module.nav)

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
