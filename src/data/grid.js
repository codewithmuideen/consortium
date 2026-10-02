/** Diagram and storytelling content for the power, mini-grid and grid sections. */

// Linear flow used on the power-generation section.
export const flowSteps = [
  { id: 'generation', icon: 'sun', title: 'Generation', text: 'Solar and other generation assets produce power close to demand.' },
  { id: 'substation', icon: 'circuit', title: 'Substation', text: 'Voltage is stepped and protected for safe onward delivery.' },
  { id: 'grid', icon: 'network', title: 'Grid', text: 'A mini-grid or interconnected network moves power across distance.' },
  { id: 'distribution', icon: 'cable', title: 'Distribution', text: 'Feeders and metering carry electricity to the point of use.' },
  { id: 'users', icon: 'users', title: 'Communities & industry', text: 'Homes, businesses and public services receive dependable supply.' },
]

// Network diagram. `h` = position in the wide layout (1000×520),
// `v` = position in the tall mobile layout (400×760).
export const networkNodes = [
  { id: 'solar', icon: 'sun', label: 'Solar generation', h: [90, 150], v: [110, 70], text: 'Solar arrays convert sunlight into electricity at the source.' },
  { id: 'assets', icon: 'battery', label: 'Distributed assets', h: [90, 370], v: [290, 70], text: 'Mini-grids, storage and other local assets that can feed a wider network.' },
  { id: 'transmission', icon: 'tower', label: 'Transmission', h: [310, 260], v: [200, 220], text: 'High-voltage lines carry power efficiently over long distances.' },
  { id: 'substation', icon: 'circuit', label: 'Substation', h: [500, 260], v: [200, 360], text: 'Transformers and switchgear step voltage down and protect the network.' },
  { id: 'distribution', icon: 'cable', label: 'Distribution', h: [690, 260], v: [200, 500], text: 'Local lines and metering deliver power to each connection.' },
  { id: 'industry', icon: 'factory', label: 'Industry', h: [910, 110], v: [70, 660], text: 'Factories and commercial sites that depend on continuous supply.' },
  { id: 'communities', icon: 'home', label: 'Communities', h: [910, 260], v: [200, 660], text: 'Homes, schools and small businesses.' },
  { id: 'infrastructure', icon: 'landmark', label: 'Infrastructure', h: [910, 410], v: [330, 660], text: 'Public services such as water, health, telecoms and transport.' },
]

export const networkLinks = [
  ['solar', 'transmission'],
  ['assets', 'transmission'],
  ['transmission', 'substation'],
  ['substation', 'distribution'],
  ['distribution', 'industry'],
  ['distribution', 'communities'],
  ['distribution', 'infrastructure'],
]

export const miniGridTopics = [
  { id: 'local', icon: 'sun', title: 'Local generation', text: 'Power is produced near the point of use, so less is lost on the way and supply does not depend on a distant line.' },
  { id: 'distributed', icon: 'layers', title: 'Distributed energy', text: 'Several smaller assets share the work of one large plant, which spreads risk and makes maintenance easier to plan.' },
  { id: 'reliability', icon: 'shield', title: 'Reliability', text: 'Generation paired with storage and protection keeps supply steady when demand or weather shifts.' },
  { id: 'scalability', icon: 'workflow', title: 'Scalability', text: 'Modular design lets capacity grow in steps as demand grows, rather than being built all at once.' },
  { id: 'renewable', icon: 'zap', title: 'Renewable integration', text: 'Solar and storage are designed in from the start, alongside any other generation a site calls for.' },
  { id: 'access', icon: 'users', title: 'Energy access', text: 'Mini-grids can serve places that a main grid does not yet reach, or does not yet serve well.' },
  { id: 'controls', icon: 'gauge', title: 'Smart controls', text: 'Metering and remote monitoring show how the system is performing and where attention is needed.' },
]

export const gridStages = [
  { title: 'Study', text: 'Understand the generation asset, the network it will join and the technical requirements for connection.' },
  { title: 'Design', text: 'Engineer the lines, substation, protection and metering as one coordinated scheme.' },
  { title: 'Build', text: 'Coordinate the civil and electrical works that take the scheme from drawing to site.' },
  { title: 'Integrate', text: 'Test, commission and bring the asset into service as part of the wider network.' },
]

export const miniGridParts = [
  { title: 'Generation', text: 'Solar arrays, and other sources where a site calls for them, produce the power.' },
  { title: 'Storage', text: 'Batteries hold energy for the evening, for cloudy spells and for peaks in demand.' },
  { title: 'Distribution', text: 'A local network of lines carries electricity to each connection.' },
  { title: 'Control', text: 'Metering and monitoring balance the system and report how it is performing.' },
]

// The two routes within power generation; same shape as the homepage pillars.
export const gridPaths = [
  {
    number: '01',
    title: 'Mini-grid development',
    description: 'Localised electricity generation and distribution for a defined area or site.',
    points: ['Local generation', 'Storage and distribution', 'Smart controls'],
    image: 'siteEngineer',
    icon: 'sun',
    to: '/mini-grids',
  },
  {
    number: '02',
    title: 'Interconnected-grid development',
    description: 'Infrastructure that integrates generation assets into larger electricity networks.',
    points: ['Transmission', 'Substations', 'Distribution to end users'],
    image: 'pylons',
    icon: 'network',
    to: '/interconnected-grids',
  },
]
