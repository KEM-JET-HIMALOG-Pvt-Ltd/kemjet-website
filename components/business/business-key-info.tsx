import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { COMPANY, type Business } from '@/lib/site'

export function BusinessKeyInfo({ business }: { business: Business }) {
  const rows = [
    { label: 'Business', value: business.name },
    { label: 'Sector', value: business.category },
    { label: 'Part of', value: COMPANY.name },
    { label: 'Registered State', value: COMPANY.registeredState },
  ]
  return (
    <section aria-labelledby="info-heading" className="bg-[#EFE8D6] py-24 md:py-32">
      <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>Key information</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 id="info-heading" className="mt-8 font-serif text-4xl font-light uppercase leading-[0.95] text-forest md:text-6xl">
              At a glance
            </h2>
          </Reveal>
        </div>
        <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
          <dl className="border-t border-forest/25">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-2 border-b border-forest/25 py-6 sm:grid-cols-3 sm:items-baseline sm:gap-8">
                <dt className="eyebrow text-moss">{r.label}</dt>
                <dd className="font-serif text-2xl text-forest text-pretty sm:col-span-2 md:text-3xl">{r.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
