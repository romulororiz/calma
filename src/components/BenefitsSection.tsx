'use client'

import { useInView } from '@/hooks/useInView'
import { useEffect, useState } from 'react'
import { Heart, Zap, Palette, Shield, Sprout, Lock } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Made with Love & Understanding',
    description:
      'We\'re not trying to "fix" you because you\'re not broken. Calma celebrates your unique brain and helps you work with it, not against it. Built by an ADHD team who gets the daily struggles and triumphs.',
    featured: true,
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Quick interactions that respect your time and attention. No long forms or complicated setups.',
  },
  {
    icon: Palette,
    title: 'Visual First',
    description:
      'Colors, emojis, and charts that make sense instantly. Perfect for visual thinkers.',
  },
  {
    icon: Shield,
    title: 'Judgment-Free',
    description:
      'Your safe space to track honestly. No shame, no guilt, just understanding.',
  },
  {
    icon: Sprout,
    title: 'Flexible & Forgiving',
    description: 'Miss a day? Week? Month? We welcome you back warmly, always.',
  },
  {
    icon: Lock,
    title: 'Private & Secure',
    description:
      'Your data stays yours. No sharing, no judging, just a safe space for growth.',
  },
]

export default function BenefitsSection() {
  const [isMobile, setIsMobile] = useState(false)
  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: gridRef, isInView: gridInView } = useInView()

   // Handle responsive behavior
   useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="benefits" className="relative px-8 py-32">
      <div
        ref={headerRef}
        className={`mx-auto mb-20 max-w-[800px] text-center transition-all duration-[800ms] ${
          headerInView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >
        <span className="mb-4 block text-[1.125rem] font-semibold tracking-[2px] text-[var(--purple-warm)] uppercase">
          Why Calma
        </span>
        <h2 className="mb-6 text-[2.5rem] font-extrabold text-[var(--text-primary)] sm:text-[3rem] lg:text-[3.5rem]">
          Built Different Because{' '}
          <span className="gradient-text">You Think Different</span>
        </h2>
        <p className="text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl lg:text-[1.375rem]">
          Every feature, every design choice, every word—crafted by people who
          truly understand ADHD.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-8 transition-all duration-[800ms] md:grid-cols-2 lg:grid-cols-3 ${
          gridInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`glass-bg group relative cursor-pointer overflow-hidden rounded-3xl p-10 transition-all duration-400 ${
              benefit.featured  
                ? 'bg-gradient-to-br from-[rgba(139,92,246,0.1)] to-[rgba(236,72,153,0.1)] md:col-span-2 lg:col-span-2 lg:row-span-2'
                : ''
            } hover:translate-y-[-10px] hover:scale-[1.02] hover:border-[var(--purple-soft)] hover:shadow-[0_25px_50px_rgba(139,92,246,0.2)]`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Hover glow effect */}
            <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] rotate-45 bg-[radial-gradient(circle,var(--glow-soft)_0%,transparent_70%)] opacity-0 transition-opacity duration-400 group-hover:opacity-50" />

            <div className={`${isMobile ? 'flex items-center justify-start' : ''}`}>
            <div
              className={`${
                benefit.featured && !isMobile ? 'h-[70px] w-[70px]' : 'p-4'
              } mb-6 flex items-center justify-center rounded-[20px] bg-gradient-to-br from-[var(--purple-primary)] to-[var(--pink-vibrant)] text-white shadow-[0_10px_25px_rgba(139,92,246,0.3)]`}
            >
              <benefit.icon size={benefit.featured && !isMobile ? 36 : 28} />
            </div>

            <h4
              className={`${
                benefit.featured && !isMobile ? 'text-[2.25rem]' : 'text-[1.45rem]'
              } mb-4 ml-4 font-bold text-[var(--text-primary)]`}
            >
              {benefit.title}
            </h4>
            </div>

            <p
              className={`text-[var(--text-secondary)] ${
                benefit.featured && !isMobile ? 'text-[1.25rem]' : 'text-[1.125rem]'
              } leading-[1.7]`}
            >
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
