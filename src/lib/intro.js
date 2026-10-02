/** Shared timing for the first-visit loader, so the hero can wait for it. */
const SESSION_KEY = 'sgc-loader-seen'

export const LOADER_DURATION_MS = 950

export function loaderSeen() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1'
  } catch {
    return false
  }
}

export function markLoaderSeen() {
  try {
    sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    // Storage unavailable: the loader simply shows again next visit.
  }
}

/** Seconds the hero should hold its entrance so it plays as the loader lifts. */
export function introDelay() {
  return loaderSeen() ? 0.15 : LOADER_DURATION_MS / 1000 + 0.2
}
