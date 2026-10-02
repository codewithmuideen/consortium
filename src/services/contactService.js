import { sendContactEmail } from './emailService.js'

/** Field definitions. Shape maps to the future `contact_messages` table. */
export const emptyContactMessage = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  subject: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MIN_MESSAGE_LENGTH = 20

/** Returns a map of field name → error message. Empty when the input is valid. */
export function validateContactMessage(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const phone = values.phone.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'Enter your full name.'
  if (!email) errors.email = 'Enter your email address.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address, like name@company.com.'

  // Phone is optional; when given it may contain digits, spaces, +, -, ( ) and must hold 7 to 15 digits.
  if (phone) {
    const digits = phone.replace(/\D/g, '')
    if (!/^[+\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
      errors.phone = 'Enter a valid phone number, including country code if outside your region.'
    }
  }

  if (!message) errors.message = 'Tell us a little about your enquiry.'
  else if (message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please write at least ${MIN_MESSAGE_LENGTH} characters so we can help.`
  }
  return errors
}

/**
 * Submits a contact enquiry. Phase 2 can also persist the message to
 * Supabase (`contact_messages`) here before or after sending the email.
 */
export async function submitContactMessage(values) {
  const payload = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()]))
  return sendContactEmail({ ...payload, submittedAt: new Date().toISOString() })
}
