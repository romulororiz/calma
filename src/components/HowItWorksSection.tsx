'use client'

import { useInView } from '@/hooks/useInView'

const steps = [
  {
    number: 1,
    title: 'Quick Daily Check-ins',
    description:
      'Tap an emoji, slide a scale, or add a note. Takes less than 30 seconds. No guilt if you miss a day—we get it.',
    emoji: '😊',
    tagline: 'Tap, track, thrive!',
  },
  {
    number: 2,
    title: 'Watch Patterns Emerge',
    description:
      'Beautiful visualizations show your unique rhythms. Finally see what affects your focus, mood, and energy.',
    emoji: '📊',
    tagline: 'Your data, your insights',
  },
  {
    number: 3,
    title: 'Get Personalized Insights',
    description:
      "Our AI finds connections you might miss. Learn exactly what helps you thrive and what doesn't.",
    emoji: '💡',
    tagline: 'Aha moments daily',
  },
  {
    number: 4,
    title: 'Build Your Best Life',
    description:
      'Use your insights to create routines that actually work. Celebrate progress, not perfection.',
    emoji: '🚀',
    tagline: 'Thriving, not just surviving',
  },
]

export default function HowItWorksSection() {
  const { ref: headerRef, isInView: headerInView } = useInView()

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-transparent via-[rgba(139,92,246,0.05)] to-transparent px-8 py-32"
    >
      <div
        ref={headerRef}
        className={`mx-auto mb-20 max-w-[800px] text-center transition-all duration-[800ms] ${
          headerInView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="mb-6 text-[3.5rem] font-extrabold text-[var(--text-primary)]">
          Your Journey to <span className="gradient-text">Understanding</span>
        </h2>
        <p className="text-[1.375rem] leading-relaxed text-[var(--text-secondary)]">
          Four simple steps to transform how you work with your ADHD, not
          against it.
        </p>
      </div>

      <div className="relative mx-auto max-w-[1100px]">
        {/* Timeline Path - Desktop Only */}
        <div className="absolute top-[100px] left-1/2 hidden h-[calc(100%-200px)] w-[2px] -translate-x-1/2 bg-gradient-to-b from-[var(--purple-soft)] via-[var(--coral-warm)] via-[var(--pink-vibrant)] to-[var(--orange-glow)] opacity-40 lg:block" />
        {steps.map((step, index) => {
          const isEven = index % 2 === 0

          return (
            <StepItem
              key={index}
              step={{ ...step, number: step.number.toString() }}
              index={index}
              isEven={isEven}
            />
          )
        })}
      </div>
    </section>
  )
}

function StepItem({
  step,
  index,
  isEven,
}: {
  step: {
    number: string
    title: string
    description: string
    emoji: string
    tagline: string
  }
  index: number
  isEven: boolean
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      key={index}
      ref={ref}
      className={`relative mb-20 grid items-center gap-12 transition-all duration-[800ms] lg:grid-cols-[1fr_auto_1fr] ${
        isInView ? 'opacity-100' : 'opacity-0'
      } ${isInView ? 'lg:translate-y-0' : 'lg:translate-y-10'}`}
    >
      {/* Content - Left on desktop for odd, right for even */}
      <div
        className={`text-center lg:text-right ${isEven ? 'lg:order-1' : 'lg:order-3'}`}
      >
        <h3 className="mb-6 text-[2.25rem] font-bold text-[var(--text-primary)]">
          {step.title}
        </h3>
        <p className="text-[1.25rem] leading-relaxed text-[var(--text-secondary)]">
          {step.description}
        </p>
      </div>

      {/* Circle Number */}
      <div className="flex justify-center lg:order-2">
        <div className="relative z-20 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-primary)] to-[var(--pink-vibrant)] text-[2.5rem] font-extrabold text-white shadow-[0_20px_40px_rgba(139,92,246,0.4)]">
          {step.number}
        </div>
      </div>

      {/* Visual - Right on desktop for odd, left for even */}
      <div
        className={`glass-bg relative overflow-hidden rounded-[30px] p-12 text-center shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:translate-y-[-5px] hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] ${isEven ? 'lg:order-3' : 'lg:order-1'}`}
      >
        <div className="animate-bounce-emoji mb-4 inline-block text-[4rem]">
          {step.emoji}
        </div>
        <p className="font-semibold text-[var(--text-secondary)]">
          {step.tagline}
        </p>
      </div>
    </div>
  )
}
