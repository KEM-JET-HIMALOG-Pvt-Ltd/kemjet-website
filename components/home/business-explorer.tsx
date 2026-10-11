
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Check, Compass } from 'lucide-react'
import { BUSINESSES } from '@/lib/site'
import { cn } from '@/lib/utils'

const NODE_POSITIONS = [
  { left: '50%', top: '7%' },
  { left: '84%', top: '28%' },
  { left: '72%', top: '75%' },
  { left: '28%', top: '75%' },
  { left: '16%', top: '28%' },
]

export function BusinessExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeBusiness = BUSINESSES[activeIndex]

  if (!activeBusiness) return null

  function selectBusiness(index: number) {
    setActiveIndex(index)
  }

  return (
    <section
      aria-label="Explore the five businesses of Kemjet Himalog"
      className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8"
    >
      {/* Circular business wheel */}
      <div className="lg:col-span-7">
        <div className="relative mx-auto aspect-square w-full max-w-[700px]">
          {/* Decorative circles and connecting lines */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            className="pointer-events-none absolute inset-0 size-full"
            fill="none"
          >
            {/* Outer guide circle */}
            <circle
              cx="300"
              cy="300"
              r="205"
              stroke="currentColor"
              strokeOpacity=".18"
              strokeWidth="1.5"
              strokeDasharray="4 7"
            />

            {/* Inner guide circle */}
            <circle
              cx="300"
              cy="300"
              r="135"
              stroke="currentColor"
              strokeOpacity=".12"
              strokeWidth="1.5"
            />

            {/* Clear connections between neighbouring businesses */}
            <path
              d="M300 72 L504 168 L432 450 L168 450 L96 168 Z"
              stroke="#B99758"
              strokeWidth="3"
              strokeOpacity=".85"
              strokeLinejoin="round"
            />

            {/* Moving gold highlight along the business network */}
            <path
              d="M300 72 L504 168 L432 450 L168 450 L96 168 Z"
              stroke="#F0D49A"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="12 32"
              strokeDashoffset="0"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-220"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>

            {/* Subtle connections from the businesses to the central hub */}
            {[
              [300, 300, 300, 72],
              [300, 300, 504, 168],
              [300, 300, 432, 450],
              [300, 300, 168, 450],
              [300, 300, 96, 168],
            ].map(([x1, y1, x2, y2], index) => (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={
                  activeIndex === index ? '#B99758' : 'currentColor'
                }
                strokeOpacity={activeIndex === index ? '.8' : '.22'}
                strokeWidth={activeIndex === index ? '2.5' : '1.5'}
              />
            ))}
          </svg>

          {/* Five selectable business nodes */}
          {BUSINESSES.map((business, index) => {
            const isActive = activeIndex === index
            const position = NODE_POSITIONS[index]

            if (!position) return null

            return (
              <button
                key={business.slug}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectBusiness(index)}
                style={{
                  left: position.left,
                  top: position.top,
                }}
                className={cn(
                  'absolute z-10 flex w-[36%] max-w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-sm border px-2 py-3 text-center transition-all duration-300 sm:gap-3 sm:px-4 sm:py-5',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory',
                  isActive
                    ? 'scale-105 border-gold bg-forest text-ivory shadow-xl'
                    : 'border-charcoal/15 bg-ivory text-forest hover:border-gold/70 hover:bg-white',
                )}
              >
                <span
                  className={cn(
                    'font-serif text-xl leading-none sm:text-3xl',
                    isActive ? 'text-gold' : 'text-moss',
                  )}
                >
                  {business.index}
                </span>

                <span className="text-xs font-medium leading-tight sm:text-sm">
                  {business.name}
                </span>

                <span
                  className={cn(
                    'hidden text-[9px] uppercase tracking-[0.12em] sm:block',
                    isActive ? 'text-sand' : 'text-muted-foreground',
                  )}
                >
                  {isActive ? 'Selected' : 'Explore'}
                </span>
              </button>
            )
          })}

          {/* Central group hub */}
          <div className="absolute left-1/2 top-1/2 z-20 flex size-[27%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gold/70 bg-deep p-2 text-center text-ivory shadow-[0_0_0_8px_rgba(185,151,88,0.08)] sm:p-4">
            <div className="mb-1 flex size-8 items-center justify-center rounded-full border border-gold/60 text-gold sm:mb-2 sm:size-12">
              <Compass aria-hidden="true" className="size-4 sm:size-6" />
            </div>

            <span className="font-serif text-sm leading-tight sm:text-xl">
              Kemjet
            </span>

            <span className="text-[8px] uppercase tracking-[0.16em] text-sand sm:mt-1 sm:text-[10px]">
              Himalog
            </span>

            <span className="mt-1 hidden text-[8px] text-ivory/55 sm:block">
              One vision
            </span>
          </div>

          <span className="sr-only" aria-live="polite">
            Selected business: {activeBusiness.name}
          </span>
        </div>

        <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
          Select a business around the circle to explore its role in the group.
        </p>
      </div>

      {/* Selected business details */}
      <div className="lg:col-span-5">
        <div
          aria-live="polite"
          className="overflow-hidden border border-charcoal/15 bg-white"
        >
          <div className="relative aspect-[16/8] overflow-hidden bg-forest">
            <Image
              key={activeBusiness.image}
              src={activeBusiness.image}
              alt={activeBusiness.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-opacity duration-500"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <span className="eyebrow text-sand">
                  Business {activeBusiness.index} / 05
                </span>

                <h3 className="mt-2 max-w-md font-serif text-2xl leading-tight text-ivory sm:text-3xl">
                  {activeBusiness.name}
                </h3>
              </div>

              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ivory/40 text-ivory">
                <Check aria-hidden="true" className="size-4" />
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="eyebrow text-moss">
              {activeBusiness.category}
            </p>

            <p className="mt-4 font-serif text-xl leading-snug text-forest sm:text-2xl">
              {activeBusiness.statement}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {activeBusiness.summary}
            </p>

            <div className="mt-7 border-t border-charcoal/10 pt-6">
              <p className="eyebrow text-forest">Areas of focus</p>

              <ul className="mt-4 space-y-4">
                {activeBusiness.focus.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                    />

                    <div>
                      <p className="text-sm font-medium text-forest">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/businesses/${activeBusiness.slug}`}
              className="mt-8 inline-flex min-h-12 items-center justify-between gap-6 border-b border-forest/30 pb-2 text-sm font-medium text-forest transition-colors hover:border-gold hover:text-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Explore {activeBusiness.name}

              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-gold"
              />
            </Link>
          </div>
        </div>

        {/* Manual business selection for keyboard and mobile users */}
        <div className="mt-5 flex flex-wrap gap-2">
          {BUSINESSES.map((business, index) => (
            <button
              key={business.slug}
              type="button"
              onClick={() => selectBusiness(index)}
              aria-pressed={activeIndex === index}
              aria-label={`Show ${business.name}`}
              className={cn(
                'min-h-10 border px-3 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                activeIndex === index
                  ? 'border-forest bg-forest text-ivory'
                  : 'border-charcoal/15 text-forest hover:border-gold',
              )}
            >
              {business.index}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
