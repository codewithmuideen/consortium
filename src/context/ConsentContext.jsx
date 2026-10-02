import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { applyAnalyticsConsent } from '../lib/analytics.js'

const STORAGE_KEY = 'sgc-cookie-consent-v1'
const ConsentContext = createContext(null)

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/**
 * Holds the visitor's cookie choice. `consent` is null until a choice is made.
 * Shape maps to the future `cookie_settings` configuration.
 */
export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(readStored)
  const [preferencesOpen, setPreferencesOpen] = useState(false)

  useEffect(() => {
    applyAnalyticsConsent(Boolean(consent?.analytics))
  }, [consent])

  const save = useCallback((choices) => {
    const next = { necessary: true, analytics: Boolean(choices.analytics), decidedAt: new Date().toISOString() }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // Storage unavailable (private mode): keep the choice for this session only.
    }
    setConsent(next)
    setPreferencesOpen(false)
  }, [])

  const value = useMemo(
    () => ({
      consent,
      preferencesOpen,
      acceptAll: () => save({ analytics: true }),
      necessaryOnly: () => save({ analytics: false }),
      save,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
    }),
    [consent, preferencesOpen, save],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const context = useContext(ConsentContext)
  if (!context) throw new Error('useConsent must be used inside ConsentProvider')
  return context
}
