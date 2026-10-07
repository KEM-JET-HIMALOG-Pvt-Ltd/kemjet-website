import { Eyebrow, Topo } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { cn } from '@/lib/utils'

const WORDS = [
  { word: 'Innovate.', note: 'Think beyond the expected', indent: '' },
  { word: 'Build.', note: 'Create what endures', indent: 'md:pl-[16%]' },
  { word: 'Connect.', note: 'Bring the region closer', indent: 'md:pl-[32%]' },
]

export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="grain relative scroll-mt-20 overflow-hidden bg-deep py-28 text-ivory md:py-44"
    >
      <Topo variant="light" className="opacity-[0.07]" />
      <div className="container-editorial relative">
        <Reveal>
          <Eyebrow tone="light">Our philosophy</Eyebrow>
        </Reveal>
        <h2 id="philosophy-heading" className="sr-only">
          Innovate. Build. Connect.
        </h2>

        <div aria-hidden="true" className="mt-16 md:mt-24">
          {WORDS.map((w, i) => (
            <Reveal key={w.word} delay={i * 80} threshold={0.5} className={cn('border-b border-ivory/10', w.indent)}>
              <div className="flex flex-col gap-3 py-4 md:flex-row md:items-end md:gap-10 md:py-6">
                <span
                  className={cn(
                    'font-serif text-[19vw] font-light uppercase leading-[0.85] tracking-[-0.02em] md:text-[12vw] xl:text-[11.5rem]',
                    i === 1 && 'italic text-sand',
                  )}
                >
                  {w.word}
                </span>
                <span className="eyebrow pb-3 text-[0.6rem] text-gold md:pb-6">
                  {String(i + 1).padStart(2, '0')} — {w.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-24 md:ml-auto md:max-w-md">
          <p className="font-serif text-2xl leading-snug text-ivory/85 md:text-3xl">
            Rooted in the Himalayas. <em className="text-sand">Built for what comes next.</em>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
