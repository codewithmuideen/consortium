/** Content for About, Technology, Projects and Insights. */

export const technologyAreas = [
  { icon: 'database', title: 'Digital infrastructure', text: 'The connectivity and platforms that energy assets rely on to report and respond.' },
  { icon: 'zap', title: 'Smart energy systems', text: 'Generation, storage and loads coordinated by software rather than by hand.' },
  { icon: 'network', title: 'Grid technology', text: 'Protection, switching and control equipment for modern networks.' },
  { icon: 'activity', title: 'Monitoring', text: 'Live visibility of how each asset is performing.' },
  { icon: 'workflow', title: 'Automation', text: 'Routine decisions handled by the system, so people can focus on exceptions.' },
  { icon: 'gauge', title: 'Data', text: 'Performance records that inform maintenance, planning and investment.' },
  { icon: 'cpu', title: 'Intelligent infrastructure', text: 'Assets designed to be measured and improved over their whole life.' },
  { icon: 'circuit', title: 'Systems integration', text: 'Equipment and software from different suppliers working as one.' },
]

export const consortiumStrands = [
  'Technology',
  'Engineering',
  'Infrastructure',
  'Energy',
  'Digital systems',
  'Strategic partnerships',
  'Innovation',
  'Technical expertise',
]

/** Maps to the future `projects` table. No verified projects are published yet,
 *  so the site presents the sectors the work is aimed at instead. */
export const sectors = [
  {
    number: '01',
    icon: 'home',
    title: 'Communities',
    text: 'Local generation and distribution for homes, schools, clinics and small businesses.',
    image: 'siteEngineer',
  },
  {
    number: '02',
    icon: 'factory',
    title: 'Commerce & industry',
    text: 'Dependable supply for sites where an outage stops production.',
    image: 'solarEngineer',
  },
  {
    number: '03',
    icon: 'landmark',
    title: 'Public infrastructure',
    text: 'Power for the services a region runs on: water, health, telecoms and transport.',
    image: 'cityNight',
  },
  {
    number: '04',
    icon: 'tower',
    title: 'Grid & utilities',
    text: 'Interconnection and network infrastructure that brings new generation onto the grid.',
    image: 'towersDusk',
  },
]

export const approach = [
  { number: '01', title: 'Convene', text: 'Bring the technology, engineering and delivery partners a brief needs to the same table.' },
  { number: '02', title: 'Design', text: 'Engineer generation, network and controls together, as one system.' },
  { number: '03', title: 'Deliver', text: 'Coordinate the works that turn a design into an operating asset.' },
  { number: '04', title: 'Sustain', text: 'Plan for monitoring, maintenance and growth from the first day.' },
]

export const sustainability = {
  eyebrow: 'Responsible infrastructure',
  title: 'Cleaner energy, designed to last.',
  description:
    'Clean generation is central to our work. We aim for systems that use resources efficiently, integrate renewable sources and stay serviceable for decades.',
  items: [
    { title: 'Cleaner energy', text: 'Solar and other clean generation, wherever a site supports it.' },
    { title: 'Efficiency', text: 'Generating close to demand, so less is lost on the way.' },
    { title: 'Resilience', text: 'Systems that keep supplying when conditions change.' },
    { title: 'Future-ready', text: 'Room to expand, upgrade and interconnect later.' },
  ],
}

/** Mission and vision, written for this website for the company to review. */
export const companyStatements = [
  {
    label: 'Our mission',
    text: 'To bring technology, engineering and trusted partners together to build the generation and grid infrastructure that gives communities and industry power they can depend on.',
  },
  {
    label: 'Our vision',
    text: 'A world where reliable, clean and intelligently managed electricity reaches every home, business and community that needs it.',
  },
]

/** Maps to a future `posts` table. No articles exist yet; these are the
 *  themes the section is structured to cover, not published pieces. */
export const insightThemes = [
  { icon: 'sun', title: 'Mini-grids', text: 'How localised generation and distribution work, and where they fit.' },
  { icon: 'network', title: 'Grid interconnection', text: 'What it takes to join a generation asset to a larger network.' },
  { icon: 'cpu', title: 'Smart infrastructure', text: 'Monitoring, automation and the data behind well-run assets.' },
  { icon: 'users', title: 'Energy access', text: 'Reaching the places and people a main grid does not yet serve.' },
]
