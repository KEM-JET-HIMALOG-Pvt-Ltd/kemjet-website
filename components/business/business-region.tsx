import { Eyebrow, Topo } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import type { Business } from '@/lib/site'

export function BusinessRegion({ business }: { business: Business }) {
  return (
    <section aria-labelledby="region-relevance-heading" className="grain relative overflow-hidden bg-deep py-24 text-ivory md:py-36">
      <Topo variant="light" className="opacity-[0.07]" />
      <div className="container-editorial relative grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow tone="light">Regional relevance</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="region-relevance-heading"
              className="mt-8 font-serif text-5xl font-light uppercase leading-[0.95] md:text-7xl"
            >
              Of the
              <span className="block italic normal-case text-sand">North East.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200} className="md:col-span-6 md:col-start-7 md:self-end">
          <p className="font-serif text-2xl leading-snug text-ivory/90 text-pretty md:text-3xl">{business.regional}</p>
          <p className="eyebrow mt-10 flex items-center gap-3 text-gold">
            <span aria-hidden="true" className="size-1.5 bg-gold" />
            Tawang / Arunachal Pradesh / India
          </p>
        </Reveal>
      </div>
    </section>
  )
}
