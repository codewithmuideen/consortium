import { cn } from '../../lib/cn.js'
import { AnimatedText } from './AnimatedText.jsx'
import { Button } from './Button.jsx'
import { Reveal } from './Reveal.jsx'
import { Eyebrow } from './Section.jsx'

/** Editorial heading block: eyebrow in a narrow column, statement and copy beside it. */
export function SectionHeading({ eyebrow, title, description, cta, as = 'h2', className }) {
  return (
    <div className={cn('grid gap-6 lg:grid-cols-12 lg:gap-10', className)}>
      <Reveal className="lg:col-span-3 lg:pt-3">
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <div className="lg:col-span-9">
        <AnimatedText as={as} text={title} className="display-2 max-w-[18ch]" />
        {(description || cta) && (
          <Reveal delay={0.15} className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            {description && <p className="lead max-w-[52ch] text-muted">{description}</p>}
            {cta && (
              <Button to={cta.to} variant="link" className="shrink-0 self-start md:self-auto">
                {cta.label}
              </Button>
            )}
          </Reveal>
        )}
      </div>
    </div>
  )
}
