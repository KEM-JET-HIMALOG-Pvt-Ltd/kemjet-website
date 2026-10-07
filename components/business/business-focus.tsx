import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import type { Business } from '@/lib/site'

export function BusinessFocus({ business }: { business: Business }) {
  return (
    <section aria-labelledby="focus-heading" className="bg-ivory pb-24 md:pb-36">
      <div className="container-editorial">
        <div className="grid gap-8 border-t border-charcoal/15 pt-16 md:grid-cols-12 md:pt-24">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Areas of focus</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 id="focus-heading" className="mt-8 font-serif text-4xl font-light leading-tight text-forest md:text-6xl">
                What {business.name} is built around.
              </h2>
            </Reveal>
          </div>
        </div>

        <ol className="mt-16 grid border-t border-charcoal/20 md:mt-20 md:grid-cols-3">
          {business.focus.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={i * 100}
              className="border-b border-charcoal/20 py-10 md:border-b-0 md:border-r md:px-8 md:py-14 md:first:pl-0 md:last:border-r-0"
            >
              <span className="font-serif text-5xl font-light text-gold">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-10 font-serif text-3xl text-forest md:text-4xl">{f.title}</h3>
              <p className="mt-4 max-w-xs text-base leading-relaxed text-muted-foreground">{f.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
