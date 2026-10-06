import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { isPlatformPath } from './data/modules.js'
import { RootLayout } from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'

// Standalone pages are code-split; the landing page ships in the main bundle.
const InsightsPage = lazy(() => import('./pages/InsightsPage.jsx'))
const LegalPage = lazy(() => import('./pages/LegalPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

/**
 * "/" and every module path render the one landing page (a single mounted
 * instance, so switching modules never remounts it). Anything else is a 404.
 */
function Platform() {
  const { pathname } = useLocation()
  return isPlatformPath(pathname) ? <Home /> : <NotFound />
}

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="insights" element={<InsightsPage />} />
        <Route path="privacy-policy" element={<LegalPage document="privacy" />} />
        <Route path="cookie-policy" element={<LegalPage document="cookies" />} />
        <Route path="terms" element={<LegalPage document="terms" />} />
        <Route path="*" element={<Platform />} />
      </Route>
    </Routes>
  )
}
