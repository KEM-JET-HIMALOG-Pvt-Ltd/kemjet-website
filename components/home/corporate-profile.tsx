import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { COMPANY } from '@/lib/site'

const ROWS = [
  { label: 'Corporate Identity Number', value: COMPANY.cin, mono: true },
  { label: 'Incorporation', value: COMPANY.incorporation },
  { label: 'Status', value: COMPANY.status },
  { label: 'Registered State', value: COMPANY.registeredState },
  { label: 'Registered Office', value: COMPANY.registeredOffice.full, wide: true },
]

export function CorporateProfile() {
  return (
    <section id="corporate" aria-labelledby="corporate-heading" className="scroll-mt-20 bg-[#EFE8D6] py-24 md:py-36">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Corporate</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  id="corporate-heading"
                  className="mt-8 font-serif text-5xl font-light uppercase leading-[0.95] text-forest md:text-6xl"
                >
                  Corporate
                  <span className="block">Profile</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 max-w-sm font-serif text-xl italic text-moss">{COMPANY.name}</p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
            <dl className="grid border-t border-forest/25 sm:grid-cols-2">
              {ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`border-b border-forest/25 py-8 sm:py-10 ${
                    row.wide ? 'sm:col-span-2' : i % 2 === 0 ? 'sm:border-r sm:pr-8' : 'sm:pl-8'
                  }`}
                >
                  <dt className="eyebrow text-moss">{row.label}</dt>
                  <dd
                    className={
                      row.mono
                        ? 'mt-4 break-all font-sans text-xl font-medium tracking-[0.08em] text-forest tabular-nums md:text-2xl'
                        : 'mt-4 font-serif text-3xl leading-tight text-forest text-pretty md:text-4xl'
                    }
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
              Statutory information is provided for reference and reflects the company’s registration details.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
