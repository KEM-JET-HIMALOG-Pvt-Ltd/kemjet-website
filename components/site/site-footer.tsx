import Link from 'next/link'
import { BUSINESSES, COMPANY } from '@/lib/site'
import { Topo } from './primitives'
import { Wordmark } from './site-header'

const COMPANY_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Values', href: '/#values' },
  { label: 'Corporate Profile', href: '/#corporate' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Careers', href: '/careers' },  
]

export function SiteFooter() {
  return (
    <footer id="contact" className="grain relative overflow-hidden bg-deep text-ivory">
      <Topo variant="light" className="opacity-[0.05]" />
      <div className="container-editorial relative pt-20 pb-10 md:pt-28">
        <div className="grid gap-14 border-b border-ivory/12 pb-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-12 lg:col-span-4">
            <Wordmark />
            <p className="mt-8 max-w-sm font-serif text-2xl leading-snug text-ivory/90 text-balance">
              A diversified enterprise rooted in the Himalayas, building across education, infrastructure, materials,
              technology, permit services and agriculture.
            </p>
          </div>

          <nav aria-label="Company" className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h2 className="eyebrow text-gold">Company</h2>
            <ul className="mt-6 space-y-1">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex min-h-10 items-center text-sm text-ivory/70 transition-colors hover:text-ivory">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Businesses" className="md:col-span-4 lg:col-span-3">
            <h2 className="eyebrow text-gold">Businesses</h2>
            <ul className="mt-6 space-y-1">
              {BUSINESSES.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/businesses/${b.slug}`}
                    className="flex min-h-10 items-center text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="eyebrow text-gold">Registered Office</h2>
            <address className="mt-6 text-sm not-italic leading-relaxed text-ivory/70">
              {COMPANY.name}
              <br />
              {COMPANY.registeredOffice.lines[0]}
              <br />
              {COMPANY.registeredOffice.lines[1]}
              <br />
              India
            </address>
            <p className="mt-6 text-xs tracking-wide text-ivory/50">
              CIN <span className="tabular-nums">{COMPANY.cin}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-serif text-base italic text-sand/80">{COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

