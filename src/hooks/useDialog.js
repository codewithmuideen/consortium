import { useEffect, useRef } from 'react'

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])'

/**
 * Modal behaviour for overlays: locks body scroll, traps Tab focus inside the
 * returned ref, closes on Escape and restores focus to the trigger on close.
 */
export function useDialog(open, onClose) {
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const focusables = () => Array.from(ref.current?.querySelectorAll(FOCUSABLE) ?? [])
    focusables()[0]?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [open, onClose])

  return ref
}
