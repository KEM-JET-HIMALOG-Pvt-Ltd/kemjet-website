import { Eyebrow, Topo } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { ContactDialogTrigger } from '@/components/forms/contact-dialog-trigger'

export default function CareersPage() {
  return (
    <main className="bg-ivory text-charcoal">
      {/* Hero */}
      <section className="grain relative flex min-h-[75svh] items-center overflow-hidden bg-deep text-ivory">
        <Topo variant="light" className="opacity-[0.06]" />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-deep/30 via-deep/60 to-deep"
        />

        <div className="container-editorial relative py-32 md:py-40">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow tone="light">Careers</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-8 font-serif text-[16vw] font-light uppercase leading-[0.82] tracking-[-0.03em] md:text-[9vw] xl:text-[8.5rem]">
                Build
                <span className="block italic normal-case text-sand">
                  what comes next.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ivory/70 md:text-xl">
                Be part of a growing enterprise rooted in the Himalayas and
                building across education, infrastructure, construction,
                technology and permit services.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container-editorial">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>Why Kemjet</Eyebrow>
            </Reveal>

            <Reveal delay={100} className="md:col-span-7 md:col-start-6">
              <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">
                Work with purpose.
                <span className="block italic text-moss">
                  Grow with the region.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-charcoal/70 md:text-lg">
                Kemjet Himalog is building a diversified group with roots in
                Arunachal Pradesh and a long-term view of the North East.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/70 md:text-lg">
                Our businesses span different sectors, but share a common
                approach: responsible work, practical thinking, quality and a
                commitment to building for the future.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="bg-forest py-24 text-ivory md:py-32">
        <div className="container-editorial">
          <div className="grid gap-16 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow tone="light">Opportunities</Eyebrow>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory/60">
                As Kemjet grows, opportunities will develop across our
                different businesses and areas of work.
              </p>
            </Reveal>

            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <div className="border-t border-ivory/20 py-8">
                  <p className="eyebrow text-gold">01</p>
                  <h3 className="mt-3 font-serif text-3xl font-light md:text-4xl">
                    Education
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/60 md:text-base">
                    Opportunities connected with school education and learning
                    environments.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="border-t border-ivory/20 py-8">
                  <p className="eyebrow text-gold">02</p>
                  <h3 className="mt-3 font-serif text-3xl font-light md:text-4xl">
                    Infrastructure
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/60 md:text-base">
                    Work connected with construction, transportation and
                    regional infrastructure.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="border-t border-ivory/20 py-8">
                  <p className="eyebrow text-gold">03</p>
                  <h3 className="mt-3 font-serif text-3xl font-light md:text-4xl">
                    Technology
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/60 md:text-base">
                    Digital platforms, services and technology-led initiatives
                    across the group.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="border-y border-ivory/20 py-8">
                  <p className="eyebrow text-gold">04</p>
                  <h3 className="mt-3 font-serif text-3xl font-light md:text-4xl">
                    Corporate & Operations
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/60 md:text-base">
                    Roles supporting the wider organisation, its operations
                    and continued growth.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Current opportunities */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-4">
              <Eyebrow>Current opportunities</Eyebrow>
            </Reveal>

            <Reveal delay={100} className="md:col-span-7 md:col-start-6">
              <div className="border-y border-charcoal/15 py-10">
                <p className="font-serif text-3xl font-light leading-tight md:text-5xl">
                  Opportunities will be listed here as they are announced.
                </p>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/60">
                  We are building this section to share future openings,
                  responsibilities and application information in one clear
                  place.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-sand py-24 md:py-32">
        <Topo variant="gold" className="opacity-[0.08]" />

        <div className="container-editorial relative">
          <Reveal>
            <Eyebrow>Start a conversation</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-8 max-w-5xl font-serif text-5xl font-light leading-[0.95] md:text-7xl">
              Interested in being part of
              <span className="block italic text-moss">
                what comes next?
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200} className="mt-10">
          <ContactDialogTrigger initialType="careers">
            Apply / Get in touch
         </ContactDialogTrigger>
         </Reveal>
        </div>
      </section>
    </main>
  )
}