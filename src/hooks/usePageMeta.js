import { useEffect } from 'react'
import { canonicalUrl, fullTitle, seoPages } from '../data/seo.js'
import { siteConfig } from '../data/siteConfig.js'

function setAttr(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!url) {
    link?.remove()
    return
  }
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = url
}

function setBreadcrumb(page, url) {
  const id = 'ld-breadcrumb'
  document.getElementById(id)?.remove()
  if (!url || page.path === '/') return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = id
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
      { '@type': 'ListItem', position: 2, name: page.title, item: url },
    ],
  })
  document.head.appendChild(script)
}

/** Keeps the document head in sync with the current route. */
export function usePageMeta(key) {
  useEffect(() => {
    const page = seoPages[key] ?? seoPages.notFound
    const title = fullTitle(page)
    const url = canonicalUrl(page)

    document.title = title
    setAttr('meta[name="description"]', 'content', page.description)
    setAttr('meta[name="robots"]', 'content', page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setAttr('meta[property="og:title"]', 'content', title)
    setAttr('meta[property="og:description"]', 'content', page.description)
    setAttr('meta[property="og:url"]', 'content', url ?? window.location.href)
    setAttr('meta[name="twitter:title"]', 'content', title)
    setAttr('meta[name="twitter:description"]', 'content', page.description)
    setCanonical(url)
    setBreadcrumb(page, url)
  }, [key])
}
