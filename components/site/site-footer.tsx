import Link from 'next/link'

import { BUSINESSES, COMPANY } from '@/lib/site'
import { ContactDialogTrigger } from '@/components/forms/contact-dialog-trigger'
import { Topo } from './primitives'
import { Wordmark } from './site-header'

const COMPANY_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Values', href: '/#values' },
  { label: 'Corporate Profile', href: '/#corporate' },
  { label: 'Careers', href: '/careers' },
]

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=New%20Shyo%20Village%2C%20Lower%20Monastery%20Road%2C%20Tawang%2C%20Arunachal%20Pradesh%20790104&output=embed'

const MAP_LINK_URL =
  'https://www.google.com/maps/search/?api=1&query=New%20Shyo%20Village%2C%20Lower%20Monastery%20Road%2C%20Tawang%2C%20Arunachal%20Pradesh%20790104'

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="grain relative overflow-hidden bg-deep text-ivory"
    >
      <Topo variant="light" className="pointer-events-none opacity-[0.05]" />

      <div className="container-editorial relative py-14 md:py-20">
        {/* MAP SECTION */}
        <section aria-labelledby="footer-location-heading">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-gold">Find us in the Himalayas</p>

              <h2
                id="footer-location-heading"
                className="mt-4 max-w-2xl font-serif text-3xl font-light leading-tight text-ivory md:text-5xl"
              >
                Rooted in Tawang.
                <span className="block text-sand/75">
                  Connected to the North East.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/65 md:text-base">
                Visit the registered office of {COMPANY.name} in
                Arunachal Pradesh.
              </p>
            </div>

            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 self-start border border-gold/50 px-5 py-3 text-sm text-ivory transition-colors hover:border-gold hover:bg-ivory/5 sm:self-auto"
            >
              Open in Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-sm border border-ivory/15 bg-forest">
            <iframe
              title="Kemjet Himalog Technologies registered office map in Tawang"
              src={MAP_EMBED_URL}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        {/* CONTACT AND NAVIGATION */}
        <div className="mt-14 grid gap-12 border-t border-ivory/15 pt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* COMPANY CONTACT */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Wordmark />

            <p className="mt-5 max-w-md font-serif text-xl leading-relaxed text-ivory/85 md:text-2xl">
              A diversified enterprise rooted in the Himalayas, building
              across education, infrastructure, materials, technology,
              permit services and agriculture.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="eyebrow text-gold">Email</p>

                <a
                  href="mailto:info@kemjethimalog.com"
                  className="mt-2 inline-flex min-h-8 items-center text-sm text-ivory/75 transition-colors hover:text-ivory"
                >
                  info@kemjethimalog.com
                </a>
              </div>

              <div>
                <p className="eyebrow text-gold">Toll-free</p>

                <a
                  href="tel:18002020853"
                  className="mt-2 inline-flex min-h-8 items-center text-lg text-ivory transition-colors hover:text-gold"
                >
                  1800-2020-853
                </a>
              </div>
            </div>

            <div className="mt-6">
              <ContactDialogTrigger light>
                Get in touch
              </ContactDialogTrigger>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <nav
            aria-label="Company"
            className="lg:col-span-2 lg:col-start-6"
          >
            <h2 className="eyebrow text-gold">Company</h2>

            <ul className="mt-5 space-y-1">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-10 items-center text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* BUSINESS LINKS */}
          <nav
            aria-label="Businesses"
            className="lg:col-span-3"
          >
            <h2 className="eyebrow text-gold">Our Businesses</h2>

            <ul className="mt-5 space-y-1">
              {BUSINESSES.map((business) => (
                <li key={business.slug}>
                  <Link
                    href={`/businesses/${business.slug}`}
                    className="flex min-h-10 items-center text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {business.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* REGISTERED OFFICE */}
          <div className="sm:col-span-2 lg:col-span-3 lg:col-start-1 lg:mt-4">
            <h2 className="eyebrow text-gold">Registered Office</h2>

            <address className="mt-5 text-sm not-italic leading-7 text-ivory/70">
              <span className="text-ivory/90">{COMPANY.name}</span>
              <br />
              {COMPANY.registeredOffice.lines[0]}
              <br />
              {COMPANY.registeredOffice.lines[1]}
              <br />
              India
            </address>

            <p className="mt-4 break-words text-xs leading-relaxed tracking-wide text-ivory/50">
              CIN: <span className="tabular-nums">{COMPANY.cin}</span>
            </p>
          </div>

          {/* BUSINESS FOOTNOTE */}
          <div className="sm:col-span-2 lg:col-span-5 lg:col-start-6 lg:mt-4 lg:flex lg:items-end">
            <p className="max-w-lg font-serif text-lg italic leading-relaxed text-sand/75">
              Building enduring opportunities through technology, education,
              infrastructure and responsible growth in the North East.
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>

          <p className="font-serif text-sm italic text-sand/75">
            {COMPANY.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}