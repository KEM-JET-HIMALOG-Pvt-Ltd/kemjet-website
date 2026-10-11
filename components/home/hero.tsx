import Image from 'next/image'
import { ArrowLink, Topo } from '@/components/site/primitives'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grain relative flex min-h-[700px] h-[100svh] items-end overflow-hidden bg-deep text-ivory"
    >
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
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-deep via-deep/45 to-deep/30" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-deep/60 via-transparent to-transparent" />
      <Topo variant="light" className="opacity-[0.06] mix-blend-screen" />

      <div className="container-editorial relative w-full pb-10 pt-28 md:pb-14 md:pt-32">
        <p className="eyebrow mb-8 flex items-center gap-3 text-sand md:mb-10">
          <span aria-hidden="true" className="size-1.5 shrink-0 bg-gold" />
          <span></span>
            
        </p>

        <h1
          id="hero-heading"
          className="font-serif text-[13.5vw] font-light uppercase leading-[0.88] tracking-[-0.01em] md:text-[8.4vw] xl:text-[8.6rem]"
        >
          <span className="block md:inline">Building </span>
          <span className="block md:inline">a stronger</span>
          <span className="block">future.</span>
          <span className="mt-2 block text-[0.62em] italic text-sand md:mt-3">From the Himalayas.</span>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-ivory/20 pt-8 md:mt-14 md:grid-cols-12 md:items-end">
          <p className="max-w-md text-pretty text-base leading-relaxed text-ivory/80 md:col-span-5 md:text-lg">
            Kemjet Himalog is a diversified enterprise rooted in the Himalayas — building across education,
            infrastructure, construction products, technology , permit services and Agriculture.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-7 md:justify-end">
            <ArrowLink href="/#businesses" tone="light">
              Explore our businesses
            </ArrowLink>
            <ArrowLink href="/#about" tone="light" variant="line" className="hidden sm:inline-flex">
              About Kemjet Himalog
            </ArrowLink>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute right-5 bottom-10 hidden flex-col items-center gap-4 xl:right-8 xl:flex">
        <span className="eyebrow text-[0.6rem] text-ivory/60 [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-16 w-px overflow-hidden bg-ivory/20">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gold" />
        </span>
      </div>
    </section>
  )
}
