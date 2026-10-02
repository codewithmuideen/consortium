/**
 * Image registry. Maps to the future Supabase `media` table.
 *
 * `solarField` and `windFarm` are stills from the videos supplied in the
 * project. The remaining photographs come from Unsplash (free Unsplash
 * licence); the photo id is kept in `source` so each can be traced or replaced.
 */
const files = import.meta.glob('../assets/images/*.webp', { eager: true, import: 'default' })
const file = (name) => files[`../assets/images/${name}.webp`]

function image(name, alt, width, height, source) {
  return {
    src: file(`${name}-1600`),
    srcSet: `${file(`${name}-800`)} 800w, ${file(`${name}-1600`)} 1600w`,
    alt,
    width,
    height,
    source,
  }
}

export const images = {
  solarField: image('solar-field', 'Aerial view of a solar field at dusk', 1600, 900, 'project video 259949.mp4'),
  windFarm: image('wind-farm', 'Wind turbines above open farmland', 1600, 900, 'project video 230545.mp4'),
  towersDusk: image('towers-dusk', 'Transmission towers in silhouette against an amber sky', 1600, 640, 'unsplash:UA3l_nZ3dL0'),
  towerSunset: image('tower-sunset', 'A transmission tower and power lines at sunset', 1600, 2133, 'unsplash:gm8k5MPO8L8'),
  pylons: image('pylons', 'High-voltage transmission pylons and conductors', 1600, 1067, 'unsplash:q6n8nIrDQHE'),
  substation: image('substation', 'An electrical substation with switchgear and overhead lines', 1600, 1060, 'unsplash:ui5pc2x4LA0'),
  solarEngineer: image('solar-engineer', 'A technician in a hard hat fixing a solar panel in place', 1600, 1067, 'unsplash:JlhvFEVMwng'),
  siteEngineer: image('site-engineer', 'An engineer walking beneath a ground-mounted solar array', 1600, 1067, 'unsplash:lDnsJtjCeGg'),
  cityNight: image('city-night', 'A city skyline lit at night', 1600, 1200, 'unsplash:3JIdnDdaBEQ'),
}

export const heroPoster = file('hero-poster')
