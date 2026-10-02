/**
 * Content access layer: the seam for the phase-2 Supabase CMS.
 *
 * Today every getter resolves local data from `src/data`. In phase 2, replace
 * each body with a Supabase query against the table named beside it; the data
 * files already use the same shape (plain objects with `enabled` and `order`),
 * so components do not need to change.
 *
 *   getSiteSettings   → site_settings
 *   getNavigation     → navigation
 *   getPageSections   → pages, sections
 *   getServices       → services
 *   getProjects       → projects
 *   getSeo            → seo_settings
 *   (also planned)    → media, testimonials, faqs, contact_messages, users, cookie_settings
 */
import { siteConfig } from '../data/siteConfig.js'
import { primaryNav, footerNav, legalNav } from '../data/navigation.js'
import { homeSections } from '../data/home.js'
import { solutions } from '../data/solutions.js'
import { sectors } from '../data/company.js'
import { seoPages } from '../data/seo.js'

const byOrder = (a, b) => a.order - b.order
const published = (items) => items.filter((item) => item.enabled !== false).sort(byOrder)

export async function getSiteSettings() {
  return siteConfig
}

export async function getNavigation() {
  return { primary: published(primaryNav), footer: footerNav, legal: legalNav }
}

export async function getPageSections(slug) {
  if (slug === 'home') return published(homeSections)
  return []
}

export async function getServices() {
  return published(solutions)
}

export async function getProjects() {
  // No verified projects yet; the site shows sectors in their place.
  return sectors
}

export async function getSeo(key) {
  return seoPages[key] ?? null
}
