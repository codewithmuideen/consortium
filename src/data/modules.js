/**
 * The platform's modules: the single source of truth for the module selector,
 * the navigation and the landing page's active panel.
 *
 * To add a module:
 *   1. add an entry here (give it a unique `id` and `path`),
 *   2. create its component in `src/modules/<id>/`,
 *   3. register that component in `src/modules/registry.js`,
 *   4. add its metadata to `data/seo.js` under the `seoKey` used here.
 *
 * `icon` is a key of `lib/icons.js`; `image` is a key of `data/images.js`.
 * `nav: false` keeps a module out of the header links (Contact is the header button).
 */
export const modules = [
  {
    id: 'power',
    path: '/power-generation',
    seoKey: 'power',
    label: 'Power',
    title: 'Power Generation',
    summary: 'Generation assets and the infrastructure around them.',
    headline: 'From generation to grid.',
    lede: 'Generation assets and the infrastructure around them, from localised mini-grids to interconnection with larger networks.',
    icon: 'zap',
    image: 'solarField',
    order: 1,
    enabled: true,
    nav: true,
  },
  {
    id: 'mini-grids',
    path: '/mini-grids',
    seoKey: 'miniGrids',
    label: 'Mini-grids',
    title: 'Mini-Grids',
    summary: 'Local generation and distribution for a defined area.',
    headline: 'Local power, built to grow.',
    lede: 'Mini-grids generate and distribute electricity within a defined area: a community, an estate or an industrial site.',
    icon: 'sun',
    image: 'siteEngineer',
    order: 2,
    enabled: true,
    nav: true,
  },
  {
    id: 'grid',
    path: '/interconnected-grids',
    seoKey: 'interconnectedGrids',
    label: 'Grid',
    title: 'Interconnected Grids',
    summary: 'Joining generation assets to larger networks.',
    headline: 'Joining generation to the wider network.',
    lede: 'Infrastructure capable of integrating generation assets into larger electricity networks.',
    icon: 'network',
    image: 'towersDusk',
    order: 3,
    enabled: true,
    nav: true,
  },
  {
    id: 'technology',
    path: '/technology',
    seoKey: 'technology',
    label: 'Technology',
    title: 'Technology',
    summary: 'Digital systems that make infrastructure smarter.',
    headline: 'Technology meets infrastructure.',
    lede: 'Consortium is technology-led: digital systems are part of the design from the first drawing, not an afterthought.',
    icon: 'cpu',
    image: 'cityNight',
    order: 4,
    enabled: true,
    nav: true,
  },
  {
    id: 'solutions',
    path: '/solutions',
    seoKey: 'solutions',
    label: 'Solutions',
    title: 'Solutions',
    summary: 'Six capabilities, delivered alone or as one scope.',
    headline: 'Building smarter power systems.',
    lede: 'Generation, grid and the technology that connects them, brought together by one consortium.',
    icon: 'layers',
    image: 'pylons',
    order: 5,
    enabled: true,
    nav: true,
  },
  {
    id: 'projects',
    path: '/projects',
    seoKey: 'projects',
    label: 'Projects',
    title: 'Projects & Impact',
    summary: 'The sectors our work is designed to reach.',
    headline: 'Where we create impact.',
    lede: 'Infrastructure is measured by who it reaches. This is where our work is aimed.',
    icon: 'landmark',
    image: 'substation',
    order: 6,
    enabled: true,
    nav: true,
  },
  {
    id: 'about',
    path: '/about',
    seoKey: 'about',
    label: 'About',
    title: 'About Consortium',
    summary: 'Who we are, our mission and how we work.',
    headline: 'A consortium built around power and technology.',
    lede: 'SolGenix Consortium: power generation, distribution, and tech solutions.',
    icon: 'users',
    image: 'windFarm',
    order: 7,
    enabled: true,
    nav: true,
  },
  {
    id: 'contact',
    path: '/contact',
    seoKey: 'contact',
    label: 'Contact',
    title: 'Contact',
    summary: 'Tell us about your site, load or network.',
    headline: 'Talk to Consortium.',
    lede: 'Tell us about your site, your load or your network. We will take it from there.',
    icon: 'mail',
    image: 'towerSunset',
    order: 8,
    enabled: true,
    nav: false,
  },
]

/** Enabled modules in display order. */
export const activeModules = modules.filter((module) => module.enabled).sort((a, b) => a.order - b.order)

/** The module shown on the landing page before the visitor picks one. */
export const defaultModule = activeModules[0]

const byPath = new Map(activeModules.map((module) => [module.path, module]))

const trim = (pathname) => (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname)

/** The module that owns a URL path, or undefined. */
export function moduleForPath(pathname) {
  return byPath.get(trim(pathname))
}

/** True for "/" and for every module path: the URLs served by the landing page. */
export function isPlatformPath(pathname) {
  return trim(pathname) === '/' || byPath.has(trim(pathname))
}
