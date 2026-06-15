import { PageLayout } from '@/components/layout/PageLayout'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { MacMenuBar } from '@/components/sections/MacMenuBar'
import { InboxMockup } from '@/components/sections/InboxMockup'
import { FeatureTriage } from '@/components/sections/FeatureTriage'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function App() {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
      <MacMenuBar />
      <InboxMockup />
      <FeatureTriage />
      <LogoCloud />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </PageLayout>
  )
}