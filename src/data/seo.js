import { siteConfig } from './siteConfig.js'

/**
 * Per-route metadata. Maps to the future Supabase `seo_settings` table.
 * Kept free of asset imports so `scripts/postbuild-seo.mjs` can read it in Node
 * to pre-render <head> tags and generate sitemap.xml.
 */
export const seoPages = {
  home: {
    path: '/',
    title: 'SolGenix Consortium | Power Generation, Distribution & Tech Solutions',
    description: siteConfig.description,
    priority: 1,
  },
  about: {
    path: '/about',
    title: 'About',
    description:
      'A technology consortium with a power-generation mandate: who SolGenix Consortium is, what it is built to do and how it works.',
    priority: 0.8,
  },
  solutions: {
    path: '/solutions',
    title: 'Solutions',
    description:
      'Mini-grid development, interconnected-grid development, solar generation, smart power systems and systems integration from SolGenix Consortium.',
    priority: 0.9,
  },
  power: {
    path: '/power-generation',
    title: 'Power Generation',
    description:
      'From generation to grid: how SolGenix Consortium approaches power generation, mini-grids and interconnected-grid infrastructure.',
    priority: 0.9,
  },
  miniGrids: {
    path: '/mini-grids',
    title: 'Mini-Grid Development',
    description:
      'Mini-grids generate and distribute electricity locally. See how SolGenix Consortium approaches mini-grid development, from generation to smart controls.',
    priority: 0.8,
  },
  interconnectedGrids: {
    path: '/interconnected-grids',
    title: 'Interconnected-Grid Development',
    description:
      'Infrastructure that integrates generation assets into larger electricity networks: transmission, substations, distribution and end users.',
    priority: 0.8,
  },
  technology: {
    path: '/technology',
    title: 'Technology',
    description:
      'Technology that makes infrastructure smarter: digital infrastructure, smart energy systems, monitoring, automation and systems integration.',
    priority: 0.8,
  },
  projects: {
    path: '/projects',
    title: 'Projects & Impact',
    description:
      'Where SolGenix Consortium creates impact: communities, commerce and industry, public infrastructure and grid networks.',
    priority: 0.6,
  },
  insights: {
    path: '/insights',
    title: 'Insights',
    description:
      'Perspectives on mini-grids, grid interconnection and smart energy infrastructure from SolGenix Consortium.',
    priority: 0.5,
  },
  contact: {
    path: '/contact',
    title: 'Contact',
    description:
      'Talk to SolGenix Consortium about power generation, mini-grids, grid interconnection and technology partnerships.',
    priority: 0.7,
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'How SolGenix Consortium handles personal information collected through this website.',
    priority: 0.2,
  },
  cookies: {
    path: '/cookie-policy',
    title: 'Cookie Policy',
    description: 'How this website uses cookies and similar storage, and how to manage your consent.',
    priority: 0.2,
  },
  terms: {
    path: '/terms',
    title: 'Terms of Use',
    description: 'The terms that apply to use of the SolGenix Consortium website.',
    priority: 0.2,
  },
  notFound: {
    path: null,
    title: 'Page not found',
    description: 'The page you are looking for could not be found.',
    noindex: true,
  },
}

export function fullTitle(page) {
  return page.path === '/' ? page.title : `${page.title} | ${siteConfig.name}`
}

export function canonicalUrl(page) {
  if (!page.path) return null
  return siteConfig.url + page.path
}
