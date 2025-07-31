'use client'

import { useState, useRef, useEffect } from 'react'

export default function PhoneMockup() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return

      const rect = phoneRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const rotateX = (e.clientY - centerY) / 80
      const rotateY = (e.clientX - centerX) / 80

      setTilt({ x: -rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
    }

    const phoneElement = phoneRef.current
    if (phoneElement) {
      phoneElement.addEventListener('mousemove', handleMouseMove)
      phoneElement.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        phoneElement.removeEventListener('mousemove', handleMouseMove)
        phoneElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Calculate pill offsets based on tilt
  const getPillTransform = (
    baseX: number,
    baseY: number,
    intensity: number = 1
  ) => {
    const offsetX = tilt.y * intensity * 0.5 // Horizontal movement based on Y tilt
    const offsetY = tilt.x * intensity * 0.5 // Vertical movement based on X tilt

    // Clamp values to prevent going outside borders (with 10px padding)
    const clampedX = Math.max(
      -baseX + 10,
      Math.min(offsetX, 350 - baseX - 100 - 10)
    )
    const clampedY = Math.max(
      -baseY + 10,
      Math.min(offsetY, 700 - baseY - 30 - 10)
    )

    return `translate(${clampedX}px, ${clampedY}px)`
  }

  return (
    <div className="relative perspective-[1200px]">
      <div
        ref={phoneRef}
        className="relative h-[700px] w-[350px] overflow-hidden rounded-[45px] bg-gradient-to-b from-[rgba(30,25,50,0.95)] to-[rgba(45,35,65,0.95)] p-3 shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_30px_70px_rgba(0,0,0,0.5),0_0_150px_rgba(139,92,246,0.2),inset_0_0_30px_rgba(255,255,255,0.05)] transition-transform duration-500 ease-out"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Phone Notch */}
        <div className="absolute top-3 left-1/2 z-10 h-[30px] w-[160px] -translate-x-1/2 rounded-b-[20px] bg-[var(--bg-primary)]" />

        {/* Phone Glow */}
        <div
          className="animate-rotate absolute -top-1/2 -left-1/2 h-[200%] w-[200%] opacity-20 blur-[80px]"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, 
                 var(--purple-primary) 0deg, 
                 var(--pink-vibrant) 60deg, 
                 var(--coral-warm) 120deg, 
                 var(--orange-glow) 180deg,
                 var(--yellow-soft) 240deg,
                 var(--green-fresh) 300deg,
                 var(--purple-primary) 360deg)`,
          }}
        />

        {/* Phone Screen */}
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[35px] bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] px-8 pt-16 pb-8">
          {/* Floating Elements Container - positioned to avoid text overlap */}
          <div className="absolute inset-0 h-full w-full">
            {/* Top area pills */}
            <div
              className="glass-bg animate-float-element absolute top-[5%] left-[5%] flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
              style={{
                transform: getPillTransform(17.5, 35, 1.2), // 5% of 350px = 17.5px, 5% of 700px = 35px
              }}
            >
              <span>⚡</span> Focus Mode
            </div>

            <div
              className="glass-bg animate-float-element absolute top-[8%] right-[5%] flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
              style={{
                animationDelay: '1s',
                transform: getPillTransform(20, 56, 0.8), // right 5% = 280px approx, 8% of 700px = 56px
              }}
            >
              <span>💜</span> Great Day
            </div>

            <div
              className="glass-bg animate-float-element absolute top-[15%] left-[8%] flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
              style={{
                animationDelay: '2s',
                transform: getPillTransform(28, 105, 1.5), // 8% of 350px = 28px, 15% of 700px = 105px
              }}
            >
              <span>🎯</span> 5 Day Streak
            </div>

            {/* Side area pills - avoiding center text */}
            <div
              className="glass-bg animate-float-element absolute top-[28%] right-[3%] flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
              style={{
                animationDelay: '3s',
                transform: getPillTransform(20, 245, 1.0), // right 3% = 290px approx, 35% of 700px = 245px
              }}
            >
              <span>🌟</span> 87% Progress
            </div>

            <div
              className="glass-bg animate-float-element absolute top-[30%] left-[3%] flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
              style={{
                animationDelay: '4s',
                transform: getPillTransform(10.5, 280, 1.3), // 3% of 350px = 10.5px, 40% of 700px = 280px
              }}
            >
              <span>🧘</span> Calm Session
            </div>

            {/* Bottom area pills */}
            <div
              className="glass-bg animate-float-element absolute right-[5%] bottom-[25%] flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
              style={{
                animationDelay: '5s',
                transform: getPillTransform(20, 525, 0.9), // right 5% = 280px approx, bottom 25% = 525px from top
              }}
            >
              <span>✨</span> New Insight
            </div>

            <div
              className="glass-bg animate-float-element absolute bottom-[20%] left-[8%] flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
              style={{
                animationDelay: '6s',
                transform: getPillTransform(28, 560, 1.1), // 8% of 350px = 28px, bottom 20% = 560px from top
              }}
            >
              <span>📈</span> Improving
            </div>

            <div
              className="glass-bg animate-float-element absolute right-[25%] bottom-[15%] flex items-center gap-2 rounded-[20px] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out"
              style={{
                animationDelay: '7s',
                transform: getPillTransform(175, 595, 1.4), // right 25% = 175px approx, bottom 15% = 595px from top
              }}
            >
              <span>🎨</span> Creative Flow
            </div>
          </div>

          {/* Main Content */}
          <h3 className="z-10 mb-6 text-[1.75rem] font-bold text-[var(--purple-warm)]">
            Welcome back! 👋
          </h3>
          <p className="z-10 mb-10 text-center text-[1.125rem] text-[var(--text-secondary)]">
            How's your beautiful mind today?
          </p>
        </div>
      </div>
    </div>
  )
}
