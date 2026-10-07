'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useId, useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import { BUSINESSES } from '@/lib/site'
import { cn } from '@/lib/utils'

function DesktopPanels() {
  const [active, setActive] = useState(0)

  return (
    <ul className="hidden h-[680px] gap-2 lg:flex">
      {BUSINESSES.map((b, i) => {
        const isActive = active === i
        return (
          <li
            key={b.slug}
            className={cn(
              'relative min-w-0 overflow-hidden transition-[flex-grow] duration-700 ease-editorial',
              isActive ? 'grow-[3.6]' : 'grow',
            )}
            style={{ flexBasis: 0 }}
            onMouseEnter={() => setActive(i)}
          >
            <Link
              href={`/businesses/${b.slug}`}
              onFocus={() => setActive(i)}
              className="group absolute inset-0 block text-ivory focus-visible:outline-offset-[-4px]"
            >
              <Image
                src={b.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={cn(
                  'object-cover transition-transform duration-[1200ms] ease-editorial',
                  isActive ? 'scale-105' : 'scale-100',
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 transition-colors duration-700',
                  isActive ? 'bg-deep/55' : 'bg-deep/40',
                )}
              />
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-deep/90 to-transparent" />

              <span className="relative flex h-full flex-col justify-between p-7 xl:p-9">
                <span className="flex items-start justify-between gap-4">
                  <span className="font-serif text-5xl font-light text-gold">{b.index}</span>
                  <span
                    className={cn(
                      'eyebrow max-w-[12rem] text-right text-[0.6rem] text-sand transition-opacity duration-500',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                  >
                    {b.category}
                  </span>
                </span>

                <span
                  className={cn(
                    'block transition-transform duration-700 ease-editorial',
                    isActive ? '-translate-y-2' : 'translate-y-0',
                  )}
                >
                  <span
                    className={cn(
                      'block font-serif leading-[1.02] transition-[font-size] duration-700 ease-editorial',
                      isActive ? 'text-5xl xl:text-6xl' : 'text-2xl xl:text-3xl',
                    )}
                  >
                    {b.name}
                  </span>
                  <span
                    className={cn(
                      'grid transition-[grid-template-rows,opacity] duration-700 ease-editorial',
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <span className="overflow-hidden">
                      <span className="mt-6 block max-w-md text-base leading-relaxed text-ivory/80">{b.summary}</span>
                      <span className="eyebrow mt-8 inline-flex items-center gap-3 text-ivory">
                        Explore business
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function MobileAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <ul className="border-t border-charcoal/15 lg:hidden">
      {BUSINESSES.map((b, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-panel-${i}`
        const buttonId = `${baseId}-button-${i}`
        return (
          <li key={b.slug} className="border-b border-charcoal/15">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-20 w-full items-center gap-5 py-5 text-left"
              >
                <span className="font-serif text-2xl text-gold">{b.index}</span>
                <span className="flex-1">
                  <span className="block font-serif text-2xl leading-tight text-forest sm:text-3xl">{b.name}</span>
                  <span className="eyebrow mt-1.5 block text-[0.6rem] text-moss">{b.category}</span>
                </span>
                <Plus
                  aria-hidden="true"
                  className={cn('size-5 shrink-0 text-forest transition-transform duration-500', isOpen && 'rotate-45')}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-[grid-template-rows] duration-500 ease-editorial',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <div className="pb-8">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={b.image} alt={b.imageAlt} fill sizes="100vw" className="object-cover" />
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{b.summary}</p>
                  <Link
                    href={`/businesses/${b.slug}`}
                    className="eyebrow mt-6 inline-flex min-h-11 items-center gap-3 text-forest"
                  >
                    Explore {b.name}
                    <ArrowRight aria-hidden="true" className="size-4 text-gold" />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export function BusinessExplorer() {
  return (
    <>
      <DesktopPanels />
      <MobileAccordion />
    </>
  )
}
