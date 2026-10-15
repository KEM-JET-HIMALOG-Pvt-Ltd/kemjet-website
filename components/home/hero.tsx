import Image from 'next/image'
import { ArrowLink, Topo } from '@/components/site/primitives'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grain relative flex min-h-[700px] min-h-[100svh] items-end overflow-hidden bg-deep text-ivory"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/tawang.jpeg"
          alt="Misty eastern Himalayan ridges at dawn with a small settlement on a forested slope"
          fill
          preload
          sizes="100vw"
          className="hero-drift object-cover object-[70%_center]"
        />
      </div>

      {/* Image overlays for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-deep via-deep/45 to-deep/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-deep/60 via-transparent to-transparent"
      />

      <Topo
        variant="light"
        className="pointer-events-none opacity-[0.06] mix-blend-screen"
      />

      {/* Hero content */}
      <div className="container-editorial relative w-full pb-8 pt-32 sm:pb-10 sm:pt-36 md:pb-14 md:pt-40">
        <p className="eyebrow mb-5 flex items-center gap-3 text-sand sm:mb-7">
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 bg-gold"
          />
          <span>Official Website</span>
        </p>

        <h1
          id="hero-heading"
          className="max-w-6xl font-serif text-[clamp(2.5rem,7.2vw,7rem)] font-light uppercase leading-[0.94] tracking-[-0.025em]"
        >
          <span className="block">Kemjet Himalog</span>

          <span className="mt-4 block text-[0.48em] normal-case leading-tight tracking-normal text-sand sm:mt-5">
            Building a stronger
            <br />
            future.
          </span>

          <span className="mt-2 block text-[0.34em] normal-case italic leading-tight tracking-normal text-sand sm:mt-3">
            From the Himalayas.
          </span>
        </h1>

        {/* Company introduction and links */}
        <div className="mt-8 grid gap-6 border-t border-ivory/20 pt-6 sm:mt-10 sm:pt-8 md:mt-12 md:grid-cols-12 md:items-end md:gap-8">
          <p className="max-w-md text-pretty text-sm leading-relaxed text-ivory/80 sm:text-base md:col-span-5 md:text-lg">
            Kemjet Himalog is a diversified enterprise rooted in the
            Himalayas — building across education, infrastructure,
            construction products, technology, permit services and
            agriculture.
          </p>

          <div className="flex flex-wrap gap-3 md:col-span-7 md:justify-end">
            <ArrowLink href="/#businesses" tone="light">
              Explore our businesses
            </ArrowLink>

            <ArrowLink
              href="/#about"
              tone="light"
              variant="line"
              className="hidden sm:inline-flex"
            >
              About Kemjet Himalog
            </ArrowLink>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-5 hidden flex-col items-center gap-4 xl:right-8 xl:flex"
      >
        <span className="eyebrow text-[0.6rem] text-ivory/60 [writing-mode:vertical-rl]">
          Scroll
        </span>

        <span className="relative h-16 w-px overflow-hidden bg-ivory/20">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gold" />
        </span>
      </div>
    </section>
  )
}