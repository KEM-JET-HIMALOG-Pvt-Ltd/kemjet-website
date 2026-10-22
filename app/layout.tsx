import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kemjethimalog.com'),

  title: {
    default: 'Kemjet Himalog | Official Website',
    template: '%s | Kemjet Himalog',
  },

  verification: {
    google: 'kfktuNH2059z-jpWF0HQ7AGcowtXJDBWFzkFrN7RP0g',
  },

  description:
    'Official website of Kemjet Himalog Technologies Private Limited, based in Tawang, Arunachal Pradesh. Discover our work across technology and Inner Line Permit services, education and youth development, construction, Himalayan agriculture, and infrastructure.',

  applicationName: 'Kemjet Himalog',

  keywords: [
    'Kemjet Himalog',
    'Kemjet Himalog Technologies Private Limited',
    'Kemjet Technology',
    'Inner Line Permit Arunachal Pradesh',
    'ILP services',
    'Tawang Arunachal Pradesh',
    'education and youth development',
    'Himalayan agriculture',
    'construction and infrastructure Northeast India',
  ],

  creator: 'Kemjet Himalog Technologies Private Limited',
  publisher: 'Kemjet Himalog Technologies Private Limited',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kemjet Himalog',
    url: 'https://kemjethimalog.com/',
    title: 'Kemjet Himalog | Official Website',
    description:
      'Building a stronger future. From the Himalayas. Explore Kemjet Himalog and its businesses across Northeast India.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kemjet Himalog | Official Website',
    description:
      'Building a stronger future. From the Himalayas. Discover Kemjet Himalog Technologies Private Limited.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Next.js automatically detects app/icon.png.
  // Keep your existing apple icon if that file is available.
  icons: {
    icon: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0B3027',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-ivory text-charcoal antialiased">
      <GoogleAnalytics gaId="G-7XSM852W71" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-3 focus:text-deep"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main">{children}</main>

        <SiteFooter />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}