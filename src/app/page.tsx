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
import Footer from '@/components/Footer'

export default function Home() {
  const [calmMode, setCalmMode] = useState(false)

  return (
    <>
      {/* Calm Mode Toggle */}
      <button
        onClick={() => setCalmMode(!calmMode)}
        className="glass-bg fixed right-4 bottom-5 z-[999] rounded-full px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-[var(--purple-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)] focus:outline-none"
        aria-label={calmMode ? 'Disable calm mode' : 'Enable calm mode'}
      >
        {calmMode ? '🌟 Full Experience' : '🧘 Calm Mode'}
      </button>

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
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
