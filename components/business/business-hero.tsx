import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Topo } from '@/components/site/primitives'
import type { Business } from '@/lib/site'

export function BusinessHero({ business }: { business: Business }) {
  return (
    <section
      aria-labelledby="business-heading"
      className="grain relative flex h-[80svh] min-h-[600px] items-end overflow-hidden bg-deep text-ivory md:h-[92svh]"
    >
      <Image
        src={business.image}
        alt={business.imageAlt}
        fill
        preload
        sizes="100vw"
        className="hero-drift object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/35" />
      <Topo variant="light" className="opacity-[0.05] mix-blend-screen" />

      <div className="container-editorial relative pb-12 md:pb-16">
        <Link
          href="/#businesses"
          className="eyebrow mb-12 inline-flex min-h-11 items-center gap-3 text-ivory/70 transition-colors hover:text-ivory"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All businesses
        </Link>

        <div className="grid gap-8 border-b border-ivory/20 pb-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-9">
            <p className="eyebrow flex items-center gap-4 text-sand">
              <span className="font-serif text-3xl font-light normal-case tracking-normal text-gold">
                {business.index}
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-ivory/30" />
              <span>of 05 — Kemjet Himalog</span>
            </p>
            <h1
              id="business-heading"
              className="mt-8 font-serif text-[13vw] font-light uppercase leading-[0.9] md:text-[7.5vw] xl:text-[8rem]"
            >
              {business.name}
            </h1>
          </div>
          <p className="eyebrow text-sand md:col-span-3 md:text-right">{business.category}</p>
        </div>
      </div>
    </section>
  )
}
