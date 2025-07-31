'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Custom Swiper styles
const swiperStyles = `
  .pricing-swiper {
    width: 100%;
  }
  
  .pricing-swiper .swiper-wrapper {
    width: 100%;
  }
  
  .pricing-swiper .swiper-slide {
    width: 100%;
  }
`

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with your ADHD journey',
    features: [
      'Daily mood check-ins (basic)',
      'Simple breathing exercises',
      'Basic mood patterns view',
      'Support mode access',
      'Emergency contacts',
      'Basic dashboard',
      'Mood streak tracking',
    ],
    cta: 'Start Free Journey',
    popular: false,
    icon: '🌟',
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'Everything you need for consistent ADHD management',
    features: [
      'Everything in Free, plus:',
      'Advanced mood tracking with context',
      'Complete breathing exercise library',
      'Weekly & monthly insights',
      'AI-powered mood suggestions',
      'Custom breathing patterns',
      'Smart reminders & notifications',
      'Visual mood diary',
      'Task & productivity tools',
      'Focus timer with ADHD adaptations',
      'Mood correlation analysis',
      'Achievement badges & celebrations',
    ],
    cta: 'Start Pro Trial',
    popular: true,
    icon: '💜',
  },
  {
    name: 'Premium',
    price: '$19.99',
    period: 'per month',
    description: 'Complete ADHD wellness ecosystem with advanced features',
    features: [
      'Everything in Pro, plus:',
      'Wearable device integration',
      'Sleep pattern analysis',
      'Activity-mood correlation',
      'Advanced AI mood prediction',
      'Biometric stress monitoring',
      'Voice commands',
      'Family sharing features',
      'Therapist dashboard access',
      'Anonymous community access',
      'Data export & sharing',
      'Priority customer support',
      'Early access to new features',
    ],
    cta: 'Start Premium Trial',
    popular: false,
    icon: '✨',
  },
]

export default function PricingSection() {
  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: gridRef, isInView: gridInView } = useInView()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const swiperRef = useRef<any>(null)

  const getDiscountedPrice = (basePrice: string) => {
    if (billingCycle === 'yearly') {
      const price = parseFloat(basePrice.replace('$', ''))
      const discountedPrice = price * 0.7 // 30% discount
      return `$${discountedPrice.toFixed(0)}`
    }
    return basePrice
  }

  const getPeriodText = () => {
    return billingCycle === 'yearly' ? 'per year' : 'per month'
  }

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const goToSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
    setCurrentSlide(index)
  }

  const PricingCard = ({ tier, index }: { tier: typeof pricingTiers[0]; index: number }) => (
    <div
      className={`glass-bg group relative cursor-pointer overflow-hidden rounded-[30px] p-8 transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02] hover:border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.3),0_0_100px_rgba(139,92,246,0.15)] ${
        tier.popular && !isMobile
          ? 'border-2 border-[var(--purple-primary)] shadow-[0_20px_40px_rgba(139,92,246,0.2)]'
          : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
    
      {/* Gradient border effect on hover */}
      <div className="absolute -inset-[2px] -z-10 rounded-[30px] bg-gradient-to-br from-[var(--purple-primary)] via-[var(--pink-vibrant)] to-[var(--coral-warm)] opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-4">
        <h3 className="mb-2 text-[1.75rem] font-bold text-[var(--text-primary)]">
          {tier.name}
        </h3>
        {tier.popular && (
            <div className="mb-2 text-center">
                <span className="rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] py-2 px-4 text-xs font-bold text-white shadow-[0_8px_16px_rgba(139,92,246,0.4)]">
                ⭐ Most Popular
                </span>
            </div>
        )}
        </div>
        <p className="mb-4 text-[var(--text-secondary)]">
          {tier.description}
        </p>
        <div className="mb-2">
          <span className="text-[2.5rem] font-bold text-[var(--text-primary)]">
            {tier.price === '$0' ? '$0' : getDiscountedPrice(tier.price)}
          </span>
          {tier.price !== '$0' && (
            <span className="text-[1.125rem] text-[var(--text-secondary)]">
              /{getPeriodText()}
            </span>
          )}
        </div>
        {tier.price !== '$0' && billingCycle === 'yearly' && (
          <p className="text-sm text-[var(--text-muted)]">
            Billed annually
          </p>
        )}
      </div>

      {/* Features */}
      <div className="mb-8 space-y-3">
        {tier.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-[var(--green-fresh)] flex-shrink-0" />
            <span className="text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href="#"
        className={`group/btn relative block w-full overflow-hidden rounded-full px-6 py-4 text-center font-bold transition-all duration-400 hover:translate-y-[-2px] hover:scale-[1.02] ${
          tier.popular
            ? 'bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)]'
            : 'glass-bg text-[var(--text-primary)] hover:border-[var(--purple-primary)] hover:bg-[rgba(139,92,246,0.1)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]'
        }`}
      >
        <span className="relative z-10">{tier.cta}</span>
        {tier.popular && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
        )}
      </Link>

      {/* Trial Info */}
      {tier.price !== '$0' && (
        <p className="mt-4 text-center text-sm text-[var(--text-muted)]">
          14-day free trial • Cancel anytime
        </p>
      )}
    </div>
  )

  return (
    <section id="pricing" className="relative px-8 py-32">
      {/* Custom Swiper Styles */}
      <style jsx>{swiperStyles}</style>
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-cta-glow h-[800px] w-[800px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto mb-12 max-w-[800px] text-center transition-all duration-[800ms] ${
            headerInView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="mb-6 text-[2.5rem] font-extrabold text-[var(--text-primary)] sm:text-[3rem] lg:text-[3.5rem]">
            Choose Your <span className="gradient-text">Calm Journey</span>
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl lg:text-[1.375rem]">
            Start free, grow with us. Every plan is designed to support your unique ADHD brain.
          </p>

          {/* Billing Toggle */}
          <div className="mx-auto mb-12 flex max-w-[300px] items-center justify-between rounded-full glass-bg p-1 relative">
            {/* Animated Background Slider */}
            <div 
              className={`absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] transition-all duration-500 ease-out ${
                billingCycle === 'monthly' 
                  ? 'left-1 w-[120px]' 
                  : 'left-[121px] w-[173px]'
              }`}
            />
            
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`ml-2 relative z-10 cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`ml-4 relative z-10 cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Yearly
              <span className="ml-1 rounded-full bg-[var(--green-fresh)] px-2 py-0.5 text-xs text-black">
                Save 30%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {isMobile ? (
          // Mobile Carousel with Swiper
          <div
            ref={gridRef}
            className={`mx-auto max-w-[400px] transition-all duration-[800ms] pt-8 ${
              gridInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="overflow-hidden rounded-[30px]">
                          <Swiper
              modules={[Pagination]}
              spaceBetween={8}
              slidesPerView={1}
              grabCursor={true}
              touchRatio={1}
              resistance={true}
              resistanceRatio={0.85}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              ref={swiperRef}
              className="pricing-swiper"
            >
                {pricingTiers.map((tier, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-2">
                      <PricingCard tier={tier} index={index} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Custom Pagination Dots */}
            <div className="mt-8 flex justify-center gap-2">
              {pricingTiers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-[var(--purple-primary)] w-6'
                      : 'bg-[var(--text-muted)]'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid
          <div
            ref={gridRef}
            className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-8 transition-all duration-[800ms] lg:grid-cols-3 pt-8 ${
              gridInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {pricingTiers.map((tier, index) => (
              <PricingCard key={index} tier={tier} index={index} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-[var(--text-secondary)]">
            All plans include our core ADHD support features
          </p>
          <Link
            href="#"
            className="glass-bg inline-flex items-center gap-2 rounded-full px-8 py-3 text-center font-semibold text-[var(--text-primary)] transition-all duration-400 hover:border-[var(--purple-primary)] hover:bg-[rgba(139,92,246,0.1)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]"
          >
            Questions? Chat with our team
            <span className="text-[var(--purple-primary)]">→</span>
          </Link>
        </div> */}
      </div>
    </section>
  )
} 