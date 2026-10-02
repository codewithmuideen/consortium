import { usePageMeta } from '../hooks/usePageMeta.js'
import { Button } from '../components/ui/Button.jsx'
import { NodeField } from '../components/visuals/NodeField.jsx'

export default function NotFound() {
  usePageMeta('notFound')
  return (
    <section className="tone-ink relative isolate flex min-h-svh items-center overflow-hidden">
      <NodeField className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-x py-[calc(var(--nav-h)+4rem)]">
        <p
          aria-hidden="true"
          className="font-display text-[clamp(6rem,24vw,20rem)] leading-none font-semibold tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255/0.35)]"
        >
          404
        </p>
        <h1 className="display-2 mt-4">Page not found.</h1>
        <p className="lead mt-6 max-w-[44ch] text-muted">
          The page you are looking for has moved or does not exist. The rest of the network is still running.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
