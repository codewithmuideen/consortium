/**
 * Landing page content. Maps to the future Supabase `pages` + `sections` tables:
 * each block carries `enabled` and `order` so an admin can hide or reorder it.
 * `image` values are keys of `data/images.js`; `icon` values are keys of `lib/icons.js`.
 */
export const homeSections = [
  { id: 'hero', enabled: true, order: 1 },
  { id: 'intro', enabled: true, order: 2 },
  // The module selector and the active module panel (see data/modules.js).
  { id: 'modules', enabled: true, order: 3 },
  { id: 'cta', enabled: true, order: 4 },
]

export const moduleHub = {
  eyebrow: 'The platform',
  title: 'One consortium. Choose where to begin.',
  description:
    'Each area of our work is a module. Select one to open it below, and switch to another at any time.',
}

export const hero = {
  // The descriptor printed on the company logo.
  eyebrow: 'Power Generation, Distribution, and Tech Solutions',
  title: 'Technology that powers progress.',
  description:
    'SolGenix Consortium brings technology, engineering and energy infrastructure together, developing mini-grids and interconnected-grid power systems built for what comes next.',
  primaryCta: { label: 'Explore the platform', href: '#modules' },
  secondaryCta: { label: 'Talk to Consortium', to: '/contact' },
  ledger: ['Power', 'Grid', 'Technology', 'Infrastructure'],
}

export const intro = {
  eyebrow: 'Consortium',
  title: 'Technology and infrastructure for a more connected energy future.',
  paragraphs: [
    'We are a technology consortium with a power-generation mandate. Two objectives shape the work: bringing the right technology, engineering and partners to one table, and developing the generation and grid infrastructure that puts dependable electricity where it is needed.',
    'From clean generation and solar installation to the networks that carry power onward, our work runs from generation to grid.',
  ],
  cta: { label: 'About Consortium', to: '/about' },
  index: [
    { number: '01', title: 'Technology', text: 'Digital systems that make infrastructure measurable and controllable.' },
    { number: '02', title: 'Power', text: 'Generation assets sized for the places and loads they serve.' },
    { number: '03', title: 'Grid', text: 'Mini-grids and interconnection that move power to where it is used.' },
    { number: '04', title: 'Infrastructure', text: 'Engineering that is built to last and designed to scale.' },
  ],
}

export const pillars = {
  eyebrow: 'Core objectives',
  title: 'Two objectives. One connected system.',
  items: [
    {
      number: '01',
      title: 'Technology Consortium',
      description:
        'A consortium model that brings technology, engineering, digital systems and strategic partners together around a single brief.',
      points: ['Systems integration', 'Digital infrastructure', 'Strategic partnerships'],
      image: 'cityNight',
      icon: 'cpu',
      to: '/technology',
    },
    {
      number: '02',
      title: 'Power Generation',
      description:
        'Generation assets and the grid infrastructure around them, from local mini-grids to interconnection with wider electricity networks.',
      points: ['Mini-grid development', 'Interconnected-grid development', 'Smart power systems'],
      image: 'towerSunset',
      icon: 'zap',
      to: '/power-generation',
    },
  ],
}

export const power = {
  eyebrow: 'Power generation',
  title: 'From generation to grid.',
  description:
    'Reliable electricity is a chain, and it is only as strong as each link. We treat generation, protection, network and delivery as one system: designed together, so it scales together.',
  cta: { label: 'Power generation', to: '/power-generation' },
}

export const miniGrid = {
  eyebrow: 'Mini-grid development',
  title: 'Power generated close to the people who use it.',
  description:
    'A mini-grid is a self-contained electricity system: local generation, storage and a distribution network serving a defined area. It can run on its own or connect to a wider grid.',
  image: 'siteEngineer',
  annotations: [
    { label: 'Generation', value: 'Solar PV array' },
    { label: 'Storage', value: 'Battery system' },
    { label: 'Control', value: 'Smart metering' },
  ],
  cta: { label: 'How mini-grids work', to: '/mini-grids' },
}

export const interconnected = {
  eyebrow: 'Interconnected-grid development',
  title: 'Generation assets, joined to larger networks.',
  description:
    'Interconnection is where a generation asset becomes part of something bigger. We develop the infrastructure that carries power from source to substation to the end user.',
  cta: { label: 'Grid interconnection', to: '/interconnected-grids' },
}

export const solutionsIntro = {
  eyebrow: 'Solutions',
  title: 'What we bring to a project.',
  description:
    'Six capabilities, delivered separately or as one integrated scope.',
  cta: { label: 'All solutions', to: '/solutions' },
}

export const technologyIntro = {
  eyebrow: 'Technology',
  title: 'Technology that makes infrastructure smarter.',
  description:
    'Power systems produce data at every node. We design for it from the first drawing, so assets can be monitored, automated and improved over their whole life.',
  cta: { label: 'Our technology approach', to: '/technology' },
}

export const impactIntro = {
  eyebrow: 'Where we create impact',
  title: 'Infrastructure is measured by who it reaches.',
  description:
    'Our work is shaped around four kinds of demand. Each asks something different of a power system.',
  cta: { label: 'Projects & impact', to: '/projects' },
}

export const why = {
  eyebrow: 'Why Consortium',
  title: 'Built on six commitments.',
  items: [
    { title: 'Technology', text: 'Digital by design, not bolted on afterwards.' },
    { title: 'Engineering', text: 'Sound fundamentals before anything else.' },
    { title: 'Collaboration', text: 'The right partners, working to one brief.' },
    { title: 'Infrastructure', text: 'Assets planned for decades of service.' },
    { title: 'Innovation', text: 'New methods where they earn their place.' },
    { title: 'Reliability', text: 'Power people can plan their lives around.' },
  ],
}

export const cta = {
  eyebrow: 'Start a conversation',
  title: "Let's build the infrastructure for what's next.",
  description: 'Tell us about your site, your load or your network. We will take it from there.',
  primaryCta: { label: 'Talk to Consortium', to: '/contact' },
  secondaryCta: { label: 'Explore our solutions', to: '/solutions' },
}
