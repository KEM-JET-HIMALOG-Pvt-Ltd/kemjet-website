import Image from 'next/image'
import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'

const FACTS = [
  { label: 'Registered in', value: 'Tawang, Arunachal Pradesh' },
  { label: 'Businesses', value: 'Six' },
  { label: 'Vision', value: 'One' },
]

export function WhoWeAre() {
  return (
    <section id="about" aria-labelledby="about-heading" className="paper scroll-mt-20 py-24 md:py-36">
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
                A diversified group with a <em className="text-moss">Himalayan</em> foundation.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12 md:gap-8">
          <Reveal variant="clip" className="relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Image
              src="/images/who-we-are.png"
              alt="Hillside town in Arunachal Pradesh with houses terraced along misty green slopes"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="relative md:col-span-6 md:col-start-7 md:pl-12">
            <span aria-hidden="true" className="absolute top-0 bottom-0 left-0 hidden w-px bg-charcoal/15 md:block" />
            <Reveal>
              <p className="font-serif text-2xl leading-snug text-charcoal text-pretty md:text-3xl">
                Kemjet Himalog Technologies Private Limited is a diversified enterprise registered in Tawang,
                Arunachal Pradesh.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                The company brings together Six businesses — spanning school education, construction and
                transportation, construction products, digital platforms and permit services — under one larger
                vision: to build responsibly from the Himalayas, with a long-term view of the region and the people who
                call it home.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <dl className="mt-14 grid grid-cols-1 border-t border-charcoal/15 sm:grid-cols-3">
                {FACTS.map((f) => (
                  <div key={f.label} className="border-b border-charcoal/15 py-6 sm:border-b-0 sm:pr-6">
                    <dt className="eyebrow text-moss">{f.label}</dt>
                    <dd className="mt-3 font-serif text-2xl text-forest">{f.value}</dd>
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
