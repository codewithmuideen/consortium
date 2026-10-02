import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Cookie, X } from 'lucide-react'
import { useConsent } from '../../context/ConsentContext.jsx'
import { useDialog } from '../../hooks/useDialog.js'
import { EASE } from '../../lib/motion.js'
import { cn } from '../../lib/cn.js'

const pill =
  'rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200'
const pillPrimary = cn(pill, 'bg-sunrise text-ink-950')
const pillOutline = cn(pill, 'border border-line text-fg hover:bg-fg hover:text-bg')

function Banner() {
  const { acceptAll, necessaryOnly, openPreferences } = useConsent()
  return (
    <motion.section
      aria-label="Cookie consent"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 2.8 } }}
      exit={{ opacity: 0, y: 40, transition: { duration: 0.3 } }}
      className="tone-dark fixed inset-x-3 bottom-3 z-(--z-nav) max-w-lg rounded-2xl border border-line bg-ink-900/90 p-4 shadow-lift backdrop-blur-xl sm:left-6 sm:right-auto sm:bottom-6 sm:p-7"
    >
      <div className="flex items-center gap-3">
        <Cookie aria-hidden="true" className="size-5 text-amber" />
        <h2 className="font-display text-base font-semibold sm:text-lg">This website uses cookies.</h2>
      </div>
      <p className="mt-2.5 text-[0.8125rem] leading-snug text-muted sm:mt-3 sm:text-sm sm:leading-relaxed">
        We use cookies to analyze website traffic and optimize your website experience. By accepting our use of
        cookies, your data will be aggregated with all other user data.{' '}
        <Link to="/cookie-policy" className="text-fg underline underline-offset-4">
          Cookie Policy
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mt-6">
        <button type="button" onClick={acceptAll} className={pillPrimary}>
          Accept
        </button>
        <button type="button" onClick={necessaryOnly} className={pillOutline}>
          Necessary only
        </button>
        <button type="button" onClick={openPreferences} className="px-2 py-3 text-sm font-medium text-fg underline underline-offset-4">
          Manage preferences
        </button>
      </div>
    </motion.section>
  )
}

function Toggle({ id, label, description, checked, onChange, locked = false }) {
  return (
    <div className="flex items-start justify-between gap-6 border-t border-line py-5">
      <div>
        <label htmlFor={id} className="font-medium text-fg">
          {label}
        </label>
        <p id={`${id}-description`} className="mt-1.5 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-describedby={`${id}-description`}
        disabled={locked}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative mt-1 h-7 w-12 shrink-0 rounded-full border transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60',
          checked ? 'border-transparent bg-amber' : 'border-line bg-transparent',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'absolute top-1/2 left-1 size-5 -translate-y-1/2 rounded-full transition-transform duration-200',
            checked ? 'translate-x-5 bg-ink-950' : 'bg-fg',
          )}
        />
        <span className="sr-only">{checked ? 'On' : 'Off'}</span>
      </button>
    </div>
  )
}

function Preferences() {
  const { consent, save, closePreferences } = useConsent()
  const [analytics, setAnalytics] = useState(Boolean(consent?.analytics))
  const ref = useDialog(true, closePreferences)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-(--z-overlay) grid place-items-end bg-ink-950/70 p-4 backdrop-blur-sm sm:place-items-center"
      onClick={(event) => event.target === event.currentTarget && closePreferences()}
    >
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.45, ease: EASE } }}
        exit={{ y: 32, opacity: 0, transition: { duration: 0.2 } }}
        className="tone-dark w-full max-w-lg rounded-2xl border border-line p-6 shadow-lift sm:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <h2 id="cookie-preferences-title" className="font-display text-2xl font-semibold tracking-tight">
            Cookie preferences
          </h2>
          <button
            type="button"
            onClick={closePreferences}
            aria-label="Close cookie preferences"
            className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition-colors duration-200 hover:bg-fg hover:text-bg"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        </div>
        <p className="mt-3 mb-6 text-sm leading-relaxed text-muted">
          Choose which categories you allow. You can change this at any time from the footer.
        </p>

        <Toggle
          id="consent-necessary"
          label="Necessary"
          description="Remembers your cookie choice. Required for the website to work, so it is always on."
          checked
          locked
          onChange={() => {}}
        />
        <Toggle
          id="consent-analytics"
          label="Analytics"
          description="Helps us understand how the website is used. Data is aggregated with all other user data."
          checked={analytics}
          onChange={setAnalytics}
        />

        <div className="mt-4 flex flex-wrap gap-3 border-t border-line pt-6">
          <button type="button" onClick={() => save({ analytics })} className={pillPrimary}>
            Save preferences
          </button>
          <button type="button" onClick={() => save({ analytics: true })} className={pillOutline}>
            Accept all
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

/** Consent banner plus the preferences dialog (reachable later from the footer). */
export function CookieBanner() {
  const { consent, preferencesOpen } = useConsent()
  return (
    <AnimatePresence>
      {preferencesOpen ? <Preferences key="preferences" /> : !consent && <Banner key="banner" />}
    </AnimatePresence>
  )
}
