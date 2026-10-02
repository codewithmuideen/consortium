import { cn } from '../../lib/cn.js'

/** Marks company information that has not been supplied yet, so it is never mistaken for real content. */
export function PlaceholderNote({ className, children }) {
  return (
    <span
      className={cn(
        'inline-block rounded border border-dashed border-line px-2.5 py-1.5 font-mono text-xs leading-snug tracking-wide text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
