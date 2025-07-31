'use client'

import { useState, useRef, useEffect } from 'react'
import { useInView } from '@/hooks/useInView'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const featuredTestimonial = {
  quote:
    "For the first time in my 35 years, I feel like someone built something that actually understands how my brain works. Calma doesn't try to change me—it helps me understand and work with myself. Game-changing.",
  author: 'Dr. Sarah Chen',
  role: 'Neuroscientist & ADHD Advocate',
  avatar: 'SC',
}

const testimonials = [
  {
    rating: 5,
    text: 'The visual tracking is perfect. I can finally see my patterns clearly, and the AI insights have helped me restructure my entire workday. Productivity is up 40%!',
    author: 'Marcus Rodriguez',
    role: 'Software Engineer',
    avatar: 'MR',
  },
  {
    rating: 5,
    text: "The breathing exercises actually work! They're short enough that I don't get bored but effective enough to calm my racing thoughts. Life-changing.",
    author: 'Emma Johnson',
    role: 'Creative Director',
    avatar: 'EJ',
  },
  {
    rating: 5,
    text: "No guilt trips, no shame, just support. I've tried every ADHD app out there—this is the only one I've stuck with for more than a month.",
    author: 'Alex Thompson',
    role: 'Graduate Student',
    avatar: 'AT',
  },
  {
    rating: 5,
    text: "My therapist recommended Calma, and it's been incredible. The insights help our sessions be so much more productive. Highly recommend!",
    author: 'Jordan Park',
    role: 'Marketing Manager',
    avatar: 'JP',
  },
]

// Combine featured testimonial with regular testimonials for mobile carousel
const allTestimonials = [
  {
    ...featuredTestimonial,
    rating: 5,
    isFeatured: true,
  },
  ...testimonials
]

export default function TestimonialsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: featuredRef, isInView: featuredInView } = useInView()
  const { ref: gridRef, isInView: gridInView } = useInView()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const swiperRef = useRef<any>(null)

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

  const TestimonialCard = ({ testimonial, index }: { testimonial: typeof allTestimonials[0]; index: number }) => (
    <div
      className={`glass-bg relative rounded-3xl p-10 transition-all duration-400 hover:translate-y-[-5px] hover:border-[var(--pink-soft)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)] ${
        index % 2 === 1 && !isMobile ? 'md:translate-y-8' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Rating Stars */}
      <div className="mb-4 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span
            key={i}
            className="text-[1.25rem] text-[var(--yellow-soft)]"
          >
            ★
          </span>
        ))}
      </div>

      <p className="mb-8 text-[1.125rem] leading-[1.8] text-[var(--text-primary)]">
        {'text' in testimonial ? testimonial.text : testimonial.quote}
      </p>

      <div className="flex items-center gap-6">
        <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-primary)] to-[var(--pink-vibrant)] text-[1.25rem] font-bold text-white shadow-[0_10px_25px_rgba(139,92,246,0.3)]">
          {testimonial.avatar}
          <div className="absolute right-0 bottom-0 h-[18px] w-[18px] rounded-full border-[3px] border-[var(--bg-primary)] bg-[var(--green-fresh)]" />
        </div>
        <div>
          <h5 className="mb-1 text-[1.25rem] font-bold text-[var(--text-primary)]">
            {testimonial.author}
          </h5>
          <p className="text-base font-medium text-[var(--text-muted)]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-transparent via-[rgba(236,72,153,0.05)] to-transparent px-8 py-32"
    >
      <div
        ref={headerRef}
        className={`mx-auto mb-20 max-w-[800px] text-center transition-all duration-[800ms] ${
          headerInView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="mb-6 text-[2.5rem] font-extrabold text-[var(--text-primary)] sm:text-[3rem] lg:text-[3.5rem]">
          Real People, Real{' '}
          <span className="gradient-text">Transformations</span>
        </h2>
        <p className="text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl lg:text-[1.375rem]">
          Join thousands who've found their calm and are thriving with ADHD.
        </p>
      </div>

      <div className="mx-auto max-w-[1200px]">
        {/* Featured Testimonial - Hidden on Mobile */}
        <div
          ref={featuredRef}
          className={`relative mb-16 overflow-hidden rounded-[40px] border border-[var(--glass-border)] bg-gradient-to-br from-[var(--glass-bg)] to-[rgba(159,122,234,0.05)] p-16 backdrop-blur-[10px] transition-all duration-[800ms] hidden lg:block ${
            featuredInView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Large Quote Mark */}
          <div className="gradient-text absolute top-8 left-12 font-serif text-[10rem] opacity-30 select-none">
            "
          </div>
          <p className="relative z-10 mb-8 text-center text-[1.55rem] leading-[1.7] font-medium text-[var(--text-primary)] md:text-[2rem]">
            {featuredTestimonial.quote}
          </p>

          <div className="flex items-center justify-center gap-6">
            <div className="relative flex h-[50px] w-[70px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-primary)] to-[var(--pink-vibrant)] text-[1.25rem] font-bold text-white shadow-[0_10px_25px_rgba(139,92,246,0.3)] sm:h-[60px] sm:w-[60px]">
              {featuredTestimonial.avatar}
              <div className="absolute right-0 bottom-0 h-[18px] w-[18px] rounded-full border-[3px] border-[var(--bg-primary)] bg-[var(--green-fresh)]" />
            </div>
            <div>
              <h5 className="mb-1 text-[1.25rem] font-bold text-[var(--text-primary)]">
                {featuredTestimonial.author}
              </h5>
              <p className="text-base font-medium text-[var(--text-muted)]">
                {featuredTestimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid/Carousel */}
        {isMobile ? (
          // Mobile Carousel
          <div
            ref={gridRef}
            className={`mx-auto max-w-[400px] transition-all duration-[800ms] ${
              gridInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="overflow-hidden rounded-[30px]">
              <Swiper
                spaceBetween={8}
                slidesPerView={1}
                grabCursor={true}
                touchRatio={1}
                resistance={true}
                resistanceRatio={0.85}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                ref={swiperRef}
                className="testimonials-swiper"
              >
                {allTestimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-2">
                      <TestimonialCard testimonial={testimonial} index={index} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Custom Pagination Dots */}
            <div className="mt-8 flex justify-center gap-2">
              {allTestimonials.map((_, index) => (
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
            className={`grid grid-cols-1 gap-8 transition-all duration-[800ms] md:grid-cols-2 ${
              gridInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
