/**
 * Maps to the future Supabase `services` table.
 * Written as capabilities, not as claims about completed work.
 */
export const solutions = [
  {
    id: 'mini-grids',
    number: '01',
    icon: 'sun',
    title: 'Mini-grid development',
    description:
      'Localised generation and distribution for communities, estates and sites that need their own dependable supply.',
    scope: ['Site and demand assessment', 'Generation and storage design', 'Distribution network', 'Metering and controls'],
    image: 'siteEngineer',
    to: '/mini-grids',
    enabled: true,
    order: 1,
  },
  {
    id: 'interconnected-grids',
    number: '02',
    icon: 'network',
    title: 'Interconnected-grid development',
    description:
      'The infrastructure that integrates generation assets into larger electricity networks.',
    scope: ['Connection design', 'Substations and protection', 'Transmission and distribution lines', 'Network integration'],
    image: 'towersDusk',
    to: '/interconnected-grids',
    enabled: true,
    order: 2,
  },
  {
    id: 'solar-generation',
    number: '03',
    icon: 'zap',
    title: 'Solar generation & installation',
    description:
      'Solar panel installation and clean energy systems, engineered for the load they have to carry.',
    scope: ['System sizing', 'Panel and inverter installation', 'Battery storage', 'Commissioning'],
    image: 'solarEngineer',
    to: '/power-generation',
    enabled: true,
    order: 3,
  },
  {
    id: 'smart-power',
    number: '04',
    icon: 'gauge',
    title: 'Smart power systems',
    description:
      'Monitoring, metering and control that show how an asset is performing, and let it be managed remotely.',
    scope: ['Remote monitoring', 'Smart metering', 'Control and automation', 'Performance reporting'],
    image: 'substation',
    to: '/technology',
    enabled: true,
    order: 4,
  },
  {
    id: 'systems-integration',
    number: '05',
    icon: 'workflow',
    title: 'Systems integration',
    description:
      'Bringing equipment, software and partners from different disciplines into one working system.',
    scope: ['Technology selection', 'Partner coordination', 'Interface design', 'Testing and handover'],
    image: 'cityNight',
    to: '/technology',
    enabled: true,
    order: 5,
  },
  {
    id: 'infrastructure',
    number: '06',
    icon: 'factory',
    title: 'Energy infrastructure',
    description:
      'The civil, electrical and structural works that turn a design into an operating asset.',
    scope: ['Engineering and design', 'Procurement support', 'Construction coordination', 'Operations planning'],
    image: 'pylons',
    to: '/power-generation',
    enabled: true,
    order: 6,
  },
]
