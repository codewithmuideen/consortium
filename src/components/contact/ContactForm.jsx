import { useState } from 'react'
import { CircleAlert, CircleCheck, LoaderCircle } from 'lucide-react'
import { emptyContactMessage, submitContactMessage, validateContactMessage } from '../../services/contactService.js'
import { isEmailLive } from '../../services/emailService.js'
import { cn } from '../../lib/cn.js'
import { Button } from '../ui/Button.jsx'

const FIELDS = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name', required: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'organization', label: 'Organization', type: 'text', autoComplete: 'organization' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off', wide: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true, wide: true },
]

const inputClasses =
  'mt-2.5 w-full rounded-lg border bg-surface px-4 py-3.5 text-fg placeholder:text-muted/60 transition-[border-color,box-shadow] duration-200 focus:border-fg focus:outline-none focus:ring-2 focus:ring-fg/15'

function Field({ field, value, error, onChange, onBlur }) {
  const id = `contact-${field.name}`
  const errorId = `${id}-error`
  const shared = {
    id,
    name: field.name,
    value,
    required: field.required,
    autoComplete: field.autoComplete,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    onChange,
    onBlur,
    className: cn(inputClasses, error ? 'border-coral' : 'border-line'),
  }

  return (
    <div className={field.wide ? 'sm:col-span-2' : undefined}>
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {field.label}
        {field.required ? <span aria-hidden="true" className="text-accent"> *</span> : <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {field.type === 'textarea' ? <textarea rows={6} {...shared} /> : <input type={field.type} {...shared} />}
      {error && (
        <p id={errorId} className="mt-2 flex items-center gap-2 text-sm font-medium text-[#b42318]">
          <CircleAlert aria-hidden="true" className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * Contact form with client-side validation and loading, success and error
 * states. Submission goes through contactService, which currently simulates
 * delivery; connecting Resend later needs no change here.
 */
export function ContactForm() {
  const [values, setValues] = useState(emptyContactMessage)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [website, setWebsite] = useState('') // honeypot: real visitors leave this empty

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const onBlur = (event) => {
    const { name } = event.target
    const message = validateContactMessage(values)[name]
    setErrors((current) => ({ ...current, [name]: message }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const found = validateContactMessage(values)
    setErrors(found)
    const firstInvalid = FIELDS.find((field) => found[field.name])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid.name}`)?.focus()
      return
    }
    if (website) return

    setStatus('submitting')
    try {
      await submitContactMessage(values)
      setStatus('success')
      setValues(emptyContactMessage)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-8 lg:p-12">
        <CircleCheck aria-hidden="true" className="size-10 text-accent" strokeWidth={1.5} />
        <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
          {isEmailLive ? 'Thank you. Your message has been sent.' : 'Thank you. The form was submitted.'}
        </h3>
        {isEmailLive && (
          <p className="mt-4 max-w-[46ch] leading-relaxed text-muted">We will reply to the email address you gave us.</p>
        )}
        {!isEmailLive && (
          <p className="mt-6 rounded-lg border border-dashed border-line p-4 font-mono text-xs leading-relaxed text-muted">
            Preview mode: email delivery is not connected yet, so this message was not sent.
          </p>
        )}
        <Button variant="secondary" arrow={false} onClick={() => setStatus('idle')} className="mt-8">
          Send another message
        </Button>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form noValidate onSubmit={onSubmit} aria-label="Contact form" className="relative grid gap-6 sm:grid-cols-2">
      {FIELDS.map((field) => (
        <Field key={field.name} field={field} value={values[field.name]} error={errors[field.name]} onChange={onChange} onBlur={onBlur} />
      ))}

      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </div>

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[40ch] text-sm leading-relaxed text-muted">
          Fields marked * are required. We use your details only to respond to this enquiry.
        </p>
        <Button type="submit" arrow={!submitting} disabled={submitting} className="shrink-0">
          {submitting ? (
            <span className="flex items-center gap-2.5">
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </span>
          ) : (
            'Send message'
          )}
        </Button>
      </div>

      {status === 'error' && (
        <p role="alert" className="flex items-start gap-2.5 rounded-lg border border-coral/50 bg-coral/10 p-4 text-sm font-medium text-[#b42318] sm:col-span-2">
          <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          Your message could not be sent. Please check your connection and try again.
        </p>
      )}
    </form>
  )
}
