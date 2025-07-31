'use client'

import { useInView } from '@/hooks/useInView'
import { Target, Brain, Waves, Zap, Bell, Heart } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Smart Focus Tracking',
    description:
      'Visual check-ins that take seconds. See your focus patterns emerge over time without the hassle of long forms.',
  },
  {
    icon: Brain,
    title: 'Mood Intelligence',
    description:
      'Our AI discovers hidden connections between your emotions, activities, and productivity that you might miss.',
  },
  {
    icon: Waves,
    title: 'Instant Calm',
    description:
      'Science-backed breathing exercises designed specifically for racing ADHD minds. Find peace in under 2 minutes.',
  },
  {
    icon: Zap,
    title: 'Energy Mapping',
    description:
      "Discover your natural energy rhythms. Know exactly when you're at your best for different tasks.",
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description:
      'Gentle nudges that adapt to your routine. Never annoying, always helpful, completely customizable.',
  },
  {
    icon: Heart,
    title: 'Celebration Mode',
    description:
      'Automatic recognition of your wins, big and small. Build momentum with positive reinforcement that works.',
  },
]

export default function FeaturesSection() {
  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: gridRef, isInView: gridInView } = useInView()

  return (
    <section id="features" className="relative px-8 py-32">
      <div
        ref={headerRef}
        className={`mx-auto mb-20 max-w-[800px] text-center transition-all duration-[800ms] ${
          headerInView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="mb-6 text-[2.5rem] font-extrabold text-[var(--text-primary)] sm:text-[3rem] lg:text-[3.5rem]">
          Everything Your <span className="gradient-text">ADHD Brain</span>{' '}
          Actually Needs
        </h2>
        <p className="text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl lg:text-[1.375rem]">
          No overwhelming features. No complex systems. Just simple, powerful
          tools that work with how you think.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-8 transition-all duration-[800ms] md:grid-cols-2 lg:grid-cols-3 ${
          gridInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass-bg group relative cursor-pointer overflow-hidden rounded-[30px] p-12 transition-all duration-500 hover:translate-y-[-12px] hover:scale-[1.02] hover:border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.3),0_0_100px_rgba(139,92,246,0.15)]"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Gradient border effect on hover */}
            <div className="absolute -inset-[2px] -z-10 rounded-[30px] bg-gradient-to-br from-[var(--purple-primary)] via-[var(--pink-vibrant)] to-[var(--coral-warm)] opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[rgba(139,92,246,0.2)] to-[rgba(236,72,153,0.2)] text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:bg-gradient-to-br group-hover:from-[var(--purple-primary)] group-hover:to-[var(--pink-vibrant)] group-hover:shadow-[0_15px_30px_rgba(139,92,246,0.4)]">
              <feature.icon size={32} />
            </div>

            <h3 className="mb-4 text-[1.875rem] font-bold text-[var(--text-primary)]">
              {feature.title}
            </h3>

            <p className="text-[1.125rem] leading-relaxed text-[var(--text-secondary)]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
