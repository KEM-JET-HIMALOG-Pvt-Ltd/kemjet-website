import { Eyebrow, Topo } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { MAP_HEIGHT, MAP_WIDTH, NE_STATES, TAWANG } from '@/lib/map-paths'

function RegionMap() {
  const [tx, ty] = TAWANG
  return (
    <svg
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      role="img"
      aria-labelledby="map-title map-desc"
      className="h-auto w-full"
    >
      <title id="map-title">Map of North East India</title>
      <desc id="map-desc">
        The eight states of North East India, with Arunachal Pradesh highlighted and a marker at Tawang, the location of
        the registered office.
      </desc>
      <g>
        {NE_STATES.map((s) => {
          const isArunachal = s.name === 'Arunachal Pradesh'
          return (
            <path
              key={s.name}
              d={s.d}
              fill={isArunachal ? '#0B3027' : '#899681'}
              fillOpacity={isArunachal ? 1 : 0.32}
              stroke="#F7F3E8"
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
          )
        })}
      </g>
      <g className="font-sans" fontSize={11} letterSpacing="0.18em" fontWeight={600}>
        {NE_STATES.filter((s) => s.name !== 'Arunachal Pradesh').map((s) => (
          <text
            key={s.name}
            x={s.c[0]}
            y={s.c[1]}
            textAnchor="middle"
            fill="#0B3027"
            fillOpacity={0.7}
            aria-hidden="true"
          >
            {s.name.toUpperCase()}
          </text>
        ))}
        {NE_STATES.filter((s) => s.name === 'Arunachal Pradesh').map((s) => (
          <text key={s.name} x={s.c[0]} y={s.c[1]} textAnchor="middle" fill="#F7F3E8" aria-hidden="true">
            ARUNACHAL PRADESH
          </text>
        ))}
      </g>
      <g aria-hidden="true">
        <circle cx={tx} cy={ty} r={7} fill="none" stroke="#C6A15B" strokeWidth={1.5} className="marker-pulse" />
        <circle cx={tx} cy={ty} r={5} fill="#C6A15B" stroke="#F7F3E8" strokeWidth={1.5} />
        <line x1={tx} y1={ty} x2={tx - 120} y2={ty - 90} stroke="#C6A15B" strokeWidth={1} />
        <line x1={tx - 120} y1={ty - 90} x2={tx - 250} y2={ty - 90} stroke="#C6A15B" strokeWidth={1} />
        <text
          x={tx - 250}
          y={ty - 100}
          fill="#0B3027"
          fontSize={13}
          fontWeight={700}
          letterSpacing="0.22em"
          className="font-sans"
        >
          TAWANG
        </text>
        <text x={tx - 250} y={ty - 72} fill="#536B57" fontSize={10} letterSpacing="0.16em" className="font-sans">
          27.59° N · 91.86° E
        </text>
      </g>
    </svg>
  )
}

export function NorthEast() {
  return (
    <section aria-labelledby="region-heading" className="paper relative overflow-hidden py-24 md:py-36">
      <Topo variant="dark" className="opacity-[0.06]" />
      <div className="container-editorial relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Region</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2
                id="region-heading"
                className="mt-8 font-serif text-5xl font-light uppercase leading-[0.95] text-forest md:text-7xl"
              >
                Rooted in the
                <span className="block italic normal-case text-moss">North East.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Kemjet Himalog is registered in Tawang, Arunachal Pradesh — high in the eastern Himalayas. Our roots are
                local. Our outlook is regional: shaped by the landscapes, communities and future of North East India.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ol className="mt-14 border-t border-charcoal/15">
                {[
                  { k: 'Origin', v: 'Tawang', d: 'Registered office' },
                  { k: 'Home state', v: 'Arunachal Pradesh', d: 'Registered state' },
                  { k: 'Outlook', v: 'North East India', d: 'Regional perspective' },
                ].map((row, i) => (
                  <li key={row.k} className="grid grid-cols-[3rem_1fr] items-baseline border-b border-charcoal/15 py-5">
                    <span className="font-serif text-xl text-gold">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span className="font-serif text-2xl text-forest">{row.v}</span>
                      <span className="eyebrow text-[0.6rem] text-moss">{row.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-7 lg:pl-8">
            <figure className="relative">
              <RegionMap />
              <figcaption className="eyebrow mt-6 flex items-center gap-3 text-[0.6rem] text-moss">
                <span aria-hidden="true" className="h-px w-8 bg-gold" />
                Arunachal Pradesh → North East India
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
