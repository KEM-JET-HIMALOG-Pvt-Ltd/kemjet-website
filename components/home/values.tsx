import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { VALUES } from '@/lib/site'

export function Values() {
  return (
    <section id="values" aria-labelledby="values-heading" className="paper scroll-mt-20 py-24 md:py-36">
      <div className="container-editorial relative">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow>Values</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 id="values-heading" className="mt-8 font-serif text-5xl font-light leading-[1] text-forest md:text-7xl">
                What we stand on.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Four principles carried across every business in the group.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-charcoal/20 md:mt-24">
          {VALUES.map((v, i) => (
            <Reveal as="li" key={v.name} delay={i * 80} className="group relative border-b border-charcoal/20">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-gold transition-transform duration-700 ease-editorial group-hover:scale-x-100"
              />
              <div className="grid grid-cols-[3.5rem_1fr] items-baseline gap-y-2 py-8 md:grid-cols-12 md:gap-8 md:py-12">
                <span className="font-serif text-2xl text-sage transition-colors duration-500 group-hover:text-gold md:col-span-2 md:text-3xl">
                  {v.index}
                </span>
                <h3 className="font-serif text-5xl font-light uppercase leading-none text-forest transition-[transform,font-style] duration-500 ease-editorial group-hover:translate-x-3 group-hover:italic md:col-span-6 md:text-8xl">
                  {v.name}
                </h3>
                <p className="eyebrow col-start-2 text-moss md:col-span-4 md:col-start-auto md:text-right">{v.line}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
