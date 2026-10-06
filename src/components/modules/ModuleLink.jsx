import { Link, useLocation } from 'react-router-dom'
import { preloadModule } from '../../modules/registry.js'
import { scrollToPanel } from '../../lib/modulePanel.js'

/**
 * Link that opens a module. It is a real link (crawlable, shareable, works with
 * the back button); the landing page reacts to the new URL by swapping the
 * panel. The module's code starts loading as soon as the link is hovered,
 * focused or touched.
 */
export function ModuleLink({ module, active = false, onClick, children, ...rest }) {
  const { pathname } = useLocation()
  const preload = () => preloadModule(module.id)

  const handleClick = (event) => {
    onClick?.(event)
    // Already on this module's URL: the route will not change, so scroll by hand.
    if (pathname === module.path) scrollToPanel()
  }

  return (
    <Link
      to={module.path}
      aria-current={active ? 'true' : undefined}
      onMouseEnter={preload}
      onFocus={preload}
      onTouchStart={preload}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Link>
  )
}
