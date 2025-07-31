'use client'

import { useState } from 'react'
import BackgroundSpheres from '@/components/BackgroundSpheres'
import FloatingParticles from '@/components/FloatingParticles'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import BenefitsSection from '@/components/BenefitsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'
import ModeToggle from '@/components/ui/ModeToggle'

export default function Home() {
  const [calmMode, setCalmMode] = useState(false)

  return (
    <>
      <ModeToggle calmMode={calmMode} setCalmMode={setCalmMode} />
      {/* Background Elements - Hidden in calm mode */}
      {!calmMode && (
        <>
          <BackgroundSpheres />
          <FloatingParticles />
        </>
      )}
      <Navigation />
      <main className={calmMode ? 'calm-mode' : ''}>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
