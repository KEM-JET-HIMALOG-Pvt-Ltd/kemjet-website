import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { BUSINESSES } from '@/lib/site'

export function RelatedBusinesses({ current }: { current: string }) {
  const others = BUSINESSES.filter((b) => b.slug !== current)
  return (
    <section aria-labelledby="related-heading" className="paper py-24 md:py-32">
      <div className="container-editorial relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow>The group</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 id="related-heading" className="mt-8 font-serif text-4xl font-light leading-tight text-forest md:text-6xl">
                Related businesses
              </h2>
            </Reveal>
          </div>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((b, i) => (
            <Reveal as="li" key={b.slug} delay={i * 90}>
              <Link href={`/businesses/${b.slug}`} className="group block">
                <span className="relative block aspect-[3/4] overflow-hidden bg-forest">
                  <Image
                    src={b.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-deep/15 transition-colors duration-500 group-hover:bg-deep/35" />
                  <span className="absolute top-5 left-5 font-serif text-3xl font-light text-ivory">{b.index}</span>
                </span>
                <span className="mt-5 flex items-start justify-between gap-4 border-t border-charcoal/15 pt-5">
                  <span>
                    <span className="block font-serif text-2xl text-forest">{b.name}</span>
                    <span className="eyebrow mt-2 block text-[0.6rem] text-moss">{b.category}</span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-2 size-4 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
