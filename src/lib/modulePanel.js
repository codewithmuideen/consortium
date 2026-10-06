/** The element that holds the active module. Links and the landing page scroll to it. */
export const PANEL_ID = 'module-panel'

/** Brings the active module to the top of the viewport, below the fixed header. */
export function scrollToPanel(behavior = 'smooth') {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(PANEL_ID)?.scrollIntoView({ behavior: reduceMotion ? 'instant' : behavior, block: 'start' })
}
