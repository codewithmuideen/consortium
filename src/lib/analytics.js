/**
 * Analytics gate. No analytics provider is installed yet.
 *
 * ConsentContext calls `applyAnalyticsConsent` whenever the visitor's choice
 * changes. When a provider is added in phase 2, load it inside `enable()` and
 * tear it down in `disable()`; nothing else in the app needs to change.
 */
let enabled = false

function enable() {
  // Phase 2: inject the analytics script / call its init here.
}

function disable() {
  // Phase 2: stop tracking and clear analytics cookies here.
}

export function applyAnalyticsConsent(granted) {
  if (granted === enabled) return
  enabled = granted
  if (granted) enable()
  else disable()
}

export function isAnalyticsEnabled() {
  return enabled
}
