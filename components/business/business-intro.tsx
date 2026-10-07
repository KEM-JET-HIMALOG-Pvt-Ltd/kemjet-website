import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import type { Business } from '@/lib/site'

export function BusinessIntro({ business }: { business: Business }) {
  return (
    <section aria-labelledby="intro-heading" className="paper py-24 md:py-36">
      <div className="container-editorial relative grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <Reveal>
            <Eyebrow>Introduction</Eyebrow>
          </Reveal>
        </div>
        <div className="md:col-span-9">
          <Reveal delay={100}>
            <h2
              id="intro-heading"
              className="font-serif text-5xl font-light leading-[1.02] text-forest text-balance md:text-7xl xl:text-8xl"
            >
              {business.statement}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-9 md:gap-8">
            <span aria-hidden="true" className="hidden h-full w-px bg-gold/60 md:col-span-1 md:block md:justify-self-start" />
            <Reveal delay={200} className="md:col-span-6">
              <p className="font-serif text-2xl leading-snug text-charcoal text-pretty md:text-3xl">
                {business.introduction}
              </p>
              {business.note && (
                <p className="eyebrow mt-10 flex items-center gap-3 text-moss">
                  <span aria-hidden="true" className="size-1.5 bg-gold" />
                  {business.note}
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
