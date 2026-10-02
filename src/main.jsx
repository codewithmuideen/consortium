import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import App from './App.jsx'
import { ConsentProvider } from './context/ConsentContext.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* reducedMotion="user" honours the visitor's prefers-reduced-motion setting. */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ConsentProvider>
          <App />
        </ConsentProvider>
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>,
)
