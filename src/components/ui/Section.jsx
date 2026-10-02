import { cn } from '../../lib/cn.js'

/** Page section with a colour tone (dark | ink | navy | light | accent) and standard spacing. */
export function Section({ tone = 'dark', id, className, containerClassName, bare = false, children, ...rest }) {
  return (
    <section id={id} className={cn(`tone-${tone}`, 'relative overflow-x-clip', !bare && 'section-y', className)} {...rest}>
      {bare ? children : <div className={cn('container-x', containerClassName)}>{children}</div>}
    </section>
  )
}

export function Eyebrow({ className, children }) {
  return (
    <p className={cn('eyebrow flex items-center gap-3 text-accent', className)}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  )
}
