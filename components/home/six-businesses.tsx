
import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { BusinessExplorer } from './business-explorer'

export function SixBusinesses() {
  return (
    <section
      id="businesses"
      aria-labelledby="businesses-heading"
      className="scroll-mt-20 bg-ivory pb-24 md:pb-36"
    >
      <div className="container-editorial">
        <div className="grid gap-10 border-t border-charcoal/15 pt-16 md:grid-cols-12 md:gap-8 md:pt-24">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>Our businesses</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h2
                id="businesses-heading"
                className="mt-8 font-serif text-5xl font-light uppercase leading-[0.95] text-forest md:text-7xl xl:text-8xl"
              >
                Five businesses.
                <span className="block italic normal-case text-moss">
                  One vision.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal
            delay={200}
            className="md:col-span-4 md:col-start-9 md:self-end"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              From education and technology to construction, infrastructure,
              and Himalayan agriculture, our five businesses work toward one
              shared vision: creating lasting value for the region.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20">
          <BusinessExplorer />
        </div>
      </div>
    </section>
  )
}
