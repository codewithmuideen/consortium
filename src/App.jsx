import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'

// Secondary pages are code-split; the homepage ships in the main bundle.
const About = lazy(() => import('./pages/About.jsx'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage.jsx'))
const PowerGenerationPage = lazy(() => import('./pages/PowerGenerationPage.jsx'))
const MiniGridsPage = lazy(() => import('./pages/MiniGridsPage.jsx'))
const InterconnectedGridsPage = lazy(() => import('./pages/InterconnectedGridsPage.jsx'))
const TechnologyPage = lazy(() => import('./pages/TechnologyPage.jsx'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const InsightsPage = lazy(() => import('./pages/InsightsPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const LegalPage = lazy(() => import('./pages/LegalPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="power-generation" element={<PowerGenerationPage />} />
        <Route path="mini-grids" element={<MiniGridsPage />} />
        <Route path="interconnected-grids" element={<InterconnectedGridsPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<LegalPage document="privacy" />} />
        <Route path="cookie-policy" element={<LegalPage document="cookies" />} />
        <Route path="terms" element={<LegalPage document="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
