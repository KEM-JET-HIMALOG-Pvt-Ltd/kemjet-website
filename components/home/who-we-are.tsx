import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { KemjetLogoMotion } from './kemjet-logo-motion'

const FACTS = [
  { label: 'Registered in', value: 'Tawang, Arunachal Pradesh' },
  { label: 'Businesses', value: 'Five' },
  { label: 'Vision', value: 'One' },
]

export function WhoWeAre() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="paper scroll-mt-20 py-24 md:py-36"
    >
      <div className="container-editorial relative">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
            </Reveal>
          </div>

          <div className="md:col-span-9">
            <Reveal delay={100}>
              <h2
                id="about-heading"
                className="font-serif text-5xl font-light leading-[1.02] text-forest text-balance md:text-7xl xl:text-[6.5rem]"
              >
                A diversified group with a{' '}
                <em className="text-moss">Himalayan</em> foundation.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <Reveal variant="fade">
            <KemjetLogoMotion />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-12 md:mt-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-moss">Rooted in the Himalayas</p>
              <p className="mt-5 font-serif text-2xl leading-snug text-charcoal text-pretty md:text-3xl">
                Kemjet Himalog Technologies Private Limited is a diversified
                enterprise registered in Tawang, Arunachal Pradesh.
              </p>
            </Reveal>
          </div>

          <div className="relative md:col-span-6 md:col-start-7 md:pl-12">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 hidden w-px bg-charcoal/15 md:block"
            />

            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Our five businesses span technology and permit services,
                education and youth development, construction products,
                agriculture and infrastructure. Together, they share one
                vision: to build responsibly from the Himalayas, with a
                long-term view of the region and the people who call it home.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <dl className="mt-14 grid grid-cols-1 border-t border-charcoal/15 sm:grid-cols-3">
                {FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-charcoal/15 py-6 sm:border-b-0 sm:pr-6"
                  >
                    <dt className="eyebrow text-moss">{fact.label}</dt>
                    <dd className="mt-3 font-serif text-2xl text-forest">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
