/**
 * Runs after `vite build`.
 *
 * 1. Writes dist/<route>/index.html for every route with that route's own
 *    <title>, description, canonical and Open Graph / Twitter tags, so crawlers
 *    and link previews that do not run JavaScript still see correct metadata,
 *    and so static hosts can serve deep links without a rewrite rule.
 * 2. Writes dist/404.html (noindex) for unknown URLs.
 * 3. Generates dist/sitemap.xml from the same route data.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { canonicalUrl, fullTitle, seoPages } from '../src/data/seo.js'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function setContent(html, attribute, name, value) {
  const pattern = new RegExp(`(<meta ${attribute}="${name}" content=")[^"]*(")`)
  if (!pattern.test(html)) throw new Error(`index.html is missing <meta ${attribute}="${name}">`)
  return html.replace(pattern, `$1${value}$2`)
}

function renderHead(page) {
  const title = escapeHtml(fullTitle(page))
  const description = escapeHtml(page.description)
  const url = canonicalUrl(page)

  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  html = setContent(html, 'name', 'description', description)
  html = setContent(html, 'property', 'og:title', title)
  html = setContent(html, 'property', 'og:description', description)
  html = setContent(html, 'name', 'twitter:title', title)
  html = setContent(html, 'name', 'twitter:description', description)

  if (url) {
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    html = setContent(html, 'property', 'og:url', url)
  } else {
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '')
  }
  if (page.noindex) html = setContent(html, 'name', 'robots', 'noindex, follow')
  return html
}

const routes = Object.values(seoPages).filter((page) => page.path)

for (const page of routes) {
  if (page.path === '/') continue
  const directory = join(dist, page.path)
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), renderHead(page))
}

await writeFile(join(dist, '404.html'), renderHead(seoPages.notFound))

const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map(
    (page) =>
      `  <url>\n    <loc>${canonicalUrl(page)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${page.priority.toFixed(1)}</priority>\n  </url>`,
  )
  .join('\n')

await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

console.log(`SEO: pre-rendered head for ${routes.length} routes, wrote 404.html and sitemap.xml`)
