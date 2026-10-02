/**
 * Email delivery abstraction.
 *
 * Phase 1: no email is sent. `sendContactEmail` simulates a request so the
 * form's loading, success and error states can be built and tested.
 *
 * Phase 2 (Resend): the Resend API key must stay on a server. Create an
 * endpoint (for example a Supabase Edge Function) that calls Resend, set
 * VITE_CONTACT_ENDPOINT to its URL, and this module starts posting to it;
 * the contact form itself does not change.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

/** False while delivery is simulated; the form uses it to say so honestly. */
export const isEmailLive = Boolean(ENDPOINT)

const SIMULATED_DELAY_MS = 900

export async function sendContactEmail(message) {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS))
    return { ok: true, simulated: true }
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  })
  if (!response.ok) throw new Error(`Contact endpoint responded with ${response.status}`)
  return { ok: true, simulated: false }
}
