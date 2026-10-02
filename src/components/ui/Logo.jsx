import { Link } from 'react-router-dom'
import logoWhite from '../../assets/brand/logo-white.webp'
import logoColor from '../../assets/brand/logo-color.webp'
import { siteConfig } from '../../data/siteConfig.js'

const VARIANTS = { white: logoWhite, color: logoColor }

/** The supplied SolGenix Consortium logo. `white` for dark surfaces, `color` for light ones. */
export function Logo({ variant = 'white', linked = true, className = 'h-16 w-auto lg:h-20', onClick }) {
  const img = (
    <img
      src={VARIANTS[variant]}
      alt={siteConfig.name}
      width={628}
      height={220}
      decoding="async"
      className={className}
    />
  )
  if (!linked) return img
  return (
    <Link to="/" onClick={onClick} aria-label={`${siteConfig.name} home`} className="inline-block shrink-0">
      {img}
    </Link>
  )
}
