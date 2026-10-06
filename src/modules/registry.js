import { lazy } from 'react'

/**
 * Module registry: maps a module `id` from `data/modules.js` to its component.
 *
 * Each module is loaded on demand as its own chunk, so the landing page only
 * downloads the module the visitor opens. A module is a default-exported
 * component that renders its own sections and depends on nothing but shared
 * UI and data, which keeps it replaceable (or, later, independently deployable).
 */
const loaders = {
  power: () => import('./power/PowerModule.jsx'),
  'mini-grids': () => import('./mini-grids/MiniGridsModule.jsx'),
  grid: () => import('./grid/GridModule.jsx'),
  technology: () => import('./technology/TechnologyModule.jsx'),
  solutions: () => import('./solutions/SolutionsModule.jsx'),
  projects: () => import('./projects/ProjectsModule.jsx'),
  about: () => import('./about/AboutModule.jsx'),
  contact: () => import('./contact/ContactModule.jsx'),
}

export const moduleComponents = Object.fromEntries(
  Object.entries(loaders).map(([id, load]) => [id, lazy(load)]),
)

/** Starts downloading a module before it is opened (on hover or focus of its card). */
export function preloadModule(id) {
  loaders[id]?.().catch(() => {
    // Ignore: the module loads again, with normal error handling, when opened.
  })
}
