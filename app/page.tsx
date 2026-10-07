import { Hero } from '@/components/home/hero'
import { BusinessMarquee } from '@/components/home/business-marquee'
import { WhoWeAre } from '@/components/home/who-we-are'
import { FiveBusinesses } from '@/components/home/five-businesses'
import { FeaturedBusiness } from '@/components/home/featured-business'
import { NorthEast } from '@/components/home/north-east'
import { Philosophy } from '@/components/home/philosophy'
import { Values } from '@/components/home/values'
import { CorporateProfile } from '@/components/home/corporate-profile'
import { FinalCta } from '@/components/site/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessMarquee />
      <WhoWeAre />
      <FiveBusinesses />
      <FeaturedBusiness />
      <NorthEast />
      <Philosophy />
      <Values />
      <CorporateProfile />
      <FinalCta />
    </>
  )
}
