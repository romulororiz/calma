'use client'

import { useEffect, useState } from 'react'

export default function FloatingParticles() {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    setParticles(Array.from({ length: 12 }, (_, i) => i))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map(i => (
        <div
          key={i}
          className="animate-float-up absolute h-0.5 w-0.5 rounded-full opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 30}s`,
            animationDuration: `${20 + Math.random() * 15}s`,
            background: 'var(--purple-soft)',
          }}
        />
      ))}
    </div>
  )
}
