import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/cn.js'

const BASE =
  'group/btn inline-flex items-center justify-center gap-2.5 font-medium leading-none transition-[background-color,color,border-color,box-shadow] duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
  primary:
    'rounded-full bg-sunrise text-ink-950 hover:shadow-[0_12px_40px_-12px_rgb(244_156_58/0.8)]',
  secondary:
    'rounded-full border border-line text-fg hover:border-fg hover:bg-fg hover:text-bg',
  link: 'link-underline pb-1.5 text-fg',
}

const SIZES = {
  md: 'px-6 py-4 text-[0.95rem]',
  sm: 'px-5 py-3 text-sm',
}

/** Renders a router link (`to`), an anchor (`href`) or a button. */
export function Button({ to, href, variant = 'primary', size = 'md', arrow = true, className, children, ...rest }) {
  const classes = cn(BASE, VARIANTS[variant], variant === 'link' ? 'text-[0.95rem]' : SIZES[size], className)
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
