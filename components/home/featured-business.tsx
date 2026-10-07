import Image from 'next/image'
import { ArrowLink, Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { getBusiness } from '@/lib/site'

export function FeaturedBusiness() {
  const b = getBusiness('ld-north-east-infra')!
  return (
    <section aria-labelledby="featured-heading" className="grain relative overflow-hidden bg-forest text-ivory">
      <Reveal variant="clip" className="relative h-[60vh] min-h-[420px] md:h-[78vh]">
        <Image
          src="/images/featured-infra.png"
          alt="Aerial view of a concrete bridge crossing a river valley with a road winding into forested foothills"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-deep/30" />
        <div className="container-editorial absolute inset-x-0 top-28 md:top-32">
          <Eyebrow tone="light">Featured business</Eyebrow>
        </div>
      </Reveal>

      <div className="container-editorial relative -mt-24 pb-24 md:-mt-40 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-serif text-6xl font-light text-gold md:text-8xl">{b.index}</p>
              <h2
                id="featured-heading"
                className="mt-4 font-serif text-5xl font-light uppercase leading-[0.92] md:text-7xl xl:text-[7.5rem]"
              >
                LD North
                <span className="block">East Infra</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:self-end">
            <Reveal delay={120}>
              <p className="font-serif text-2xl leading-snug text-sand md:text-3xl">{b.storyLine}</p>
              <p className="mt-6 text-base leading-relaxed text-ivory/75">{b.summary}</p>
              <dl className="mt-10 grid grid-cols-2 border-t border-ivory/15">
                <div className="border-r border-ivory/15 py-5 pr-4">
                  <dt className="eyebrow text-sage">Sector</dt>
                  <dd className="mt-2 text-sm text-ivory">{b.category}</dd>
                </div>
                <div className="py-5 pl-5">
                  <dt className="eyebrow text-sage">Region</dt>
                  <dd className="mt-2 text-sm text-ivory">North East India</dd>
                </div>
              </dl>
              <ArrowLink href={`/businesses/${b.slug}`} tone="light" className="mt-8">
                Explore business
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
