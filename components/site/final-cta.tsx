import Image from 'next/image'
import { ArrowLink, Eyebrow } from './primitives'
import { Reveal } from './reveal'

export function FinalCta({
  image = '/images/cta.png',
  alt = 'Sunrise light breaking over layered Himalayan ridges above a sea of clouds',
  eyebrow = 'What comes next',
}: {
  image?: string
  alt?: string
  eyebrow?: string
}) {
  return (
    <section aria-labelledby="cta-heading" className="grain relative flex min-h-[80svh] items-center overflow-hidden bg-deep text-ivory">
      <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-deep/65" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-deep/40 via-transparent to-deep" />
      <div className="container-editorial relative py-28 text-center">
        <Reveal>
          <Eyebrow tone="light" className="justify-center">
            {eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h2
            id="cta-heading"
            className="mx-auto mt-10 max-w-6xl font-serif text-[13vw] font-light uppercase leading-[0.9] md:text-[8vw] xl:text-[8.5rem]"
          >
            Let’s build
            <span className="block italic normal-case text-sand">what comes next.</span>
          </h2>
        </Reveal>
        <Reveal delay={240} className="mt-14 flex justify-center">
          <ArrowLink href="#contact" tone="light">
            Get in touch
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  )
}
