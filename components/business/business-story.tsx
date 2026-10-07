import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'
import type { Business } from '@/lib/site'

export function BusinessStory({ business }: { business: Business }) {
  return (
    <section aria-label={`${business.name} in pictures`} className="grain relative overflow-hidden bg-forest text-ivory">
      <div className="grid lg:grid-cols-12">
        <Reveal variant="clip" className="relative aspect-[4/3] lg:col-span-8 lg:aspect-auto lg:min-h-[86vh]">
          <Image
            src={business.storyImage}
            alt={business.storyImageAlt}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="relative flex flex-col justify-between gap-16 px-5 py-16 md:px-10 lg:col-span-4 lg:px-12 lg:py-20">
          <p className="eyebrow text-sage">{business.category}</p>
          <Reveal>
            <blockquote className="font-serif text-4xl font-light leading-[1.08] text-balance md:text-5xl">
              <span aria-hidden="true" className="mb-6 block h-px w-12 bg-gold" />
              {business.storyLine}
            </blockquote>
          </Reveal>
          <p className="eyebrow text-[0.6rem] text-ivory/50">{business.name} — {business.index} / 05</p>
        </div>
      </div>
    </section>
  )
}
