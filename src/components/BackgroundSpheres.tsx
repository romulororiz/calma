'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundSpheres() {
  const spheresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spheresRef.current) return

      const mouseX = e.clientX / window.innerWidth - 0.5
      const mouseY = e.clientY / window.innerHeight - 0.5

      const spheres = spheresRef.current.querySelectorAll('.sphere')
      spheres.forEach((sphere, index) => {
        const speed = (index + 1) * 25
        const element = sphere as HTMLElement
        element.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={spheresRef}
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      <div
        className="sphere animate-breathe absolute -top-[400px] -left-[300px] h-[800px] w-[800px] rounded-full opacity-25 mix-blend-screen blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, var(--purple-primary) 0%, transparent 60%)',
          animationDuration: '18s',
        }}
      />
      <div
        className="sphere animate-breathe absolute top-[20%] -right-[200px] h-[600px] w-[600px] rounded-full opacity-25 mix-blend-screen blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, var(--pink-vibrant) 0%, transparent 60%)',
          animationDuration: '20s',
          animationDelay: '3s',
        }}
      />
      <div
        className="sphere animate-breathe absolute bottom-[10%] left-[15%] h-[500px] w-[500px] rounded-full opacity-25 mix-blend-screen blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, var(--coral-warm) 0%, transparent 65%)',
          animationDuration: '22s',
          animationDelay: '6s',
        }}
      />
      <div
        className="sphere animate-breathe absolute top-[40%] left-[35%] h-[700px] w-[700px] rounded-full opacity-25 mix-blend-screen blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, var(--orange-glow) 0%, transparent 65%)',
          animationDuration: '19s',
          animationDelay: '2s',
        }}
      />
      <div
        className="sphere animate-breathe absolute right-[25%] bottom-[15%] h-[400px] w-[400px] rounded-full opacity-25 mix-blend-screen blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, var(--yellow-soft) 0%, transparent 60%)',
          animationDuration: '16s',
          animationDelay: '4s',
        }}
      />
      <div
        className="sphere animate-breathe absolute top-[60%] right-[40%] h-[550px] w-[550px] rounded-full opacity-25 mix-blend-screen blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, var(--green-fresh) 0%, transparent 70%)',
          animationDuration: '21s',
          animationDelay: '1s',
        }}
      />
    </div>
  )
}
