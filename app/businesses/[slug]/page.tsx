import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BUSINESSES, getBusiness } from '@/lib/site'
import { BusinessHero } from '@/components/business/business-hero'
import { BusinessIntro } from '@/components/business/business-intro'
import { BusinessFocus } from '@/components/business/business-focus'
import { BusinessStory } from '@/components/business/business-story'
import { BusinessKeyInfo } from '@/components/business/business-key-info'
import { BusinessRegion } from '@/components/business/business-region'
import { RelatedBusinesses } from '@/components/business/related-businesses'
import { FinalCta } from '@/components/site/final-cta'

export function generateStaticParams() {
  return BUSINESSES.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const b = getBusiness(slug)
  if (!b) return {}
  return { title: b.name, description: `${b.name} — ${b.category}. ${b.summary}` }
}

export default async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const business = getBusiness(slug)
  if (!business) notFound()

  return (
    <>
      <BusinessHero business={business} />
      <BusinessIntro business={business} />
      <BusinessFocus business={business} />
      <BusinessStory business={business} />
      <BusinessKeyInfo business={business} />
      <BusinessRegion business={business} />
      <RelatedBusinesses current={business.slug} />
      <FinalCta image={business.image} alt={business.imageAlt} eyebrow={business.name} />
    </>
  )
}
