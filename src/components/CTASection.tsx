'use client'

import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { CreditCard, Target, Heart } from 'lucide-react'

export default function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="cta"
      className="relative overflow-hidden px-8 py-40 text-center"
    >
      {/* Background Glow Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-cta-glow h-[1000px] w-[1000px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-[900px] transition-all duration-[800ms] ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="mb-8 text-[2.5rem] leading-[1.2] font-extrabold text-[var(--text-primary)] sm:text-[3rem] lg:text-[4rem]">
          Ready to{' '}
          <span className="gradient-text animate-gradient-shift block">
            Embrace Your Beautiful Mind?
          </span>
        </h2>

        <p className="mb-12 text-lg leading-[1.6] text-[var(--text-secondary)] sm:text-xl lg:text-[1.625rem]">
          Join thousands finding peace, building sustainable habits, and
          thriving with ADHD. Your journey to self-understanding and acceptance
          starts here.
        </p>

        {/* CTA Features */}
        <div className="mx-auto mb-12 grid max-w-[600px] grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-primary)] to-[var(--pink-vibrant)] text-white shadow-[0_8px_16px_rgba(139,92,246,0.3)]">
              <CreditCard size={24} />
            </div>
            <div className="text-base font-semibold text-[var(--text-muted)]">
              No Credit Card
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-primary)] to-[var(--pink-vibrant)] text-white shadow-[0_8px_16px_rgba(139,92,246,0.3)]">
              <Target size={24} />
            </div>
            <div className="text-base font-semibold text-[var(--text-muted)]">
              14-Day Free Trial
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-primary)] to-[var(--pink-vibrant)] text-white shadow-[0_8px_16px_rgba(139,92,246,0.3)]">
              <Heart size={24} />
            </div>
            <div className="text-base font-semibold text-[var(--text-muted)]">
              Cancel Anytime
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] px-6 py-[0.875rem] text-center font-bold whitespace-nowrap text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-400 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)] sm:px-9"
          >
            <span className="relative z-10">Start Your Free Journey</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            href="#"
            className="glass-bg relative overflow-hidden rounded-full px-6 py-[0.875rem] text-center font-bold whitespace-nowrap text-[var(--text-primary)] transition-all duration-400 hover:translate-y-[-2px] hover:border-[var(--purple-primary)] hover:bg-[rgba(139,92,246,0.1)] hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)] sm:px-9"
          >
            Questions? Chat With Us
          </Link>
        </div>
      </div>
    </section>
  )
}
