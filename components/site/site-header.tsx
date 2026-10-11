'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { BUSINESSES, NAV_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ContactDialog } from '@/components/forms/contact-dialog'

export function Wordmark({ className }: { className?: string }) {
return (
<span className={cn('flex shrink-0 items-center gap-3', className)}>
<img
     src="/images/kemjet-logo.png"
     alt="Kemjet Himalog"
     className="size-12 shrink-0 object-contain"
   />

  <span className="flex flex-col justify-center gap-1">
    <span className="font-serif text-xl font-medium leading-none tracking-[0.16em] md:text-2xl">
      KEMJET
    </span>
    <span className="eyebrow text-[0.55rem] leading-none tracking-[0.22em] text-gold">
      HIMALOG
    </span>
  </span>
</span>

)
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 text-ivory transition-[background-color,padding,border-color] duration-500 ease-editorial',
        scrolled
          ? 'border-b border-ivory/10 bg-deep/92 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-6',
      )}
    >
      <div className="container-editorial flex items-center justify-between gap-4 xl:gap-6">
        <Link href="/" aria-label="Kemjet Himalog — home" className="shrink-0 py-2">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="eyebrow relative py-2 text-ivory/80 transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-ivory hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#businesses"
           className="eyebrow hidden min-h-11 items-center gap-3 border border-gold/60 px-5 text-ivory transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-deep xl:inline-flex"
          >
            Explore Businesses
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="eyebrow hidden min-h-11 items-center gap-2 bg-gold px-5 text-deep transition-colors duration-300 hover:bg-sand xl:inline-flex"
             >
             Get in Touch
             <ArrowRight aria-hidden="true" className="size-3.5" />
             </button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-11 items-center justify-center xl:hidden"
          >
            <Menu aria-hidden="true" className="size-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
    </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-0 z-[60] overflow-y-auto bg-deep text-ivory xl:hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: 'url(/textures/topo-light.svg)' }}
        />
        <div className="container-editorial relative flex min-h-full flex-col py-6">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">
              <Wordmark />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                setOpen(false)
                menuButtonRef.current?.focus()
              }}
              className="inline-flex size-11 items-center justify-center"
            >
              <X aria-hidden="true" className="size-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-14 flex-1">
            <ul className="border-t border-ivory/15">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href} className="border-b border-ivory/15">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-5 py-5 font-serif text-4xl text-ivory"
                  >
                    <span className="eyebrow text-gold">{String(i + 1).padStart(2, '0')}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-12 text-sage">Businesses</p>
            <ul className="mt-4 space-y-1">
              {BUSINESSES.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/businesses/${b.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center text-base text-ivory/80 hover:text-ivory"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
           type="button"
           onClick={() => {
           setOpen(false)
           setContactOpen(true)
           }}
           className="mt-10 inline-flex min-h-12 w-full items-center justify-between bg-gold px-5 text-sm font-medium text-deep"
           >
           Get in Touch
           <ArrowRight aria-hidden="true" className="size-4" />
           </button>
          <p className="eyebrow mt-12 text-sand/70">Tawang / Arunachal Pradesh / India</p>
        </div>
            </div>

      <ContactDialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  )
}
