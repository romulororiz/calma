'use client'

import Link from 'next/link'
import PhoneMockup from '@/components/PhoneMockup'
import { useInView } from '@/hooks/useInView'

export default function HeroSection() {
  const { ref: textRef, isInView: textInView } = useInView()
  const { ref: visualRef, isInView: visualInView } = useInView()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-8 pt-32 pb-16"
    >
      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-20 lg:grid-cols-[1.2fr_1fr]">
        {/* Hero Text */}
        <div
          ref={textRef}
          className={`transition-all duration-[800ms] ${
            textInView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="mb-6 text-5xl leading-[1.1] font-black text-[var(--text-primary)] sm:text-6xl lg:text-[3.5rem]">
            Your{' '}
            <span className="gradient-text animate-gradient-shift">
              ADHD Companion
            </span>{' '}
            That{' '}
            <span className="relative inline-block text-[var(--purple-warm)]">
              Truly Understands
              <span className="absolute -right-[65px] bottom-[5px] -left-[5px] -z-10 h-[55%] -skew-y-[3deg] rounded bg-gradient-to-r from-[var(--purple-soft)] to-[var(--pink-soft)] opacity-30"></span>
            </span>
          </h1>

          <p className="mb-12 text-2xl leading-relaxed font-normal text-[var(--text-secondary)]">
            Finally, an app built by ADHD minds for ADHD minds. Track your
            unique patterns, celebrate your strengths, and find your calm—all
            without judgment or shame.
          </p>

          {/* Stats */}
          <div className="mb-8 flex flex-wrap gap-12">
            <div className="flex flex-col gap-2">
              <div className="gradient-text text-[2.5rem] font-extrabold">
                87%
              </div>
              <div className="text-base font-semibold text-[var(--text-muted)]">
                Feel More Understood
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="gradient-text text-[2.5rem] font-extrabold">
                3min
              </div>
              <div className="text-base font-semibold text-[var(--text-muted)]">
                Daily Check-ins
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="gradient-text text-[2.5rem] font-extrabold">
                10k+
              </div>
              <div className="text-base font-semibold text-[var(--text-muted)]">
                Happy Minds
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6">
            <Link
              href="#cta"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] px-9 py-[0.875rem] font-bold text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-400 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)]"
            >
              <span className="relative z-10">Start Free Trial Today</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            <Link
              href="#how-it-works"
              className="glass-bg relative overflow-hidden rounded-full px-9 py-[0.875rem] font-bold text-[var(--text-primary)] transition-all duration-400 hover:translate-y-[-2px] hover:border-[var(--purple-primary)] hover:bg-[rgba(139,92,246,0.1)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Hero Visual */}
        <div
          ref={visualRef}
          className={`relative flex items-center justify-center transition-all duration-[800ms] ${
            visualInView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
