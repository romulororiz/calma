'use client'

interface CalmaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  animated?: boolean
  className?: string
}

export default function CalmaLogo({
  size = 'md',
  showText = true,
  animated = true,
  className = '',
}: CalmaLogoProps) {
  const sizeClasses = {
    sm: {
      container: 'w-12 h-12',
      text: 'text-lg',
      viewBox: 60,
    },
    md: {
      container: 'w-16 h-16',
      text: 'text-3xl',
      viewBox: 100,
    },
    lg: {
      container: 'w-24 h-24',
      text: 'text-4xl',
      viewBox: 120,
    },
    xl: {
      container: 'w-32 h-32',
      text: 'text-6xl',
      viewBox: 160,
    },
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Breathing Circles Logo */}
      <div
        className={`relative ${currentSize.container} flex items-center justify-center`}
      >
        <svg
          viewBox={`0 0 ${currentSize.viewBox} ${currentSize.viewBox}`}
          className="h-full w-full"
        >
          {/* Define gradients and filters */}
          <defs>
            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Calm gradient */}
            <radialGradient id="calm-gradient">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </radialGradient>
            Purple gradient variations
            <linearGradient
              id="purple-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient
              id="purple-gradient-2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient
              id="purple-gradient-3"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {animated ? (
            <>
              {/* Background glow */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.48}
                fill="url(#background-glow)"
                opacity="0.4"
              />

              {/* Ripple Circle 1 - Outermost */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.1}
                fill="none"
                stroke="url(#purple-gradient-1)"
                strokeWidth="1.5"
                opacity="0"
                style={{
                  animation: 'calmaRipple 6s ease-out infinite',
                  animationDelay: '0s',
                }}
              />

              {/* Ripple Circle 2 */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.1}
                fill="none"
                stroke="url(#purple-gradient-2)"
                strokeWidth="1.5"
                opacity="0"
                style={{
                  animation: 'calmaRipple 6s ease-out infinite',
                  animationDelay: '1.5s',
                }}
              />

              {/* Ripple Circle 3 */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.1}
                fill="none"
                stroke="url(#purple-gradient-3)"
                strokeWidth="1.5"
                opacity="0"
                style={{
                  animation: 'calmaRipple 6s ease-out infinite',
                  animationDelay: '3s',
                }}
              />

              {/* Ripple Circle 4 */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.1}
                fill="none"
                stroke="url(#purple-gradient-1)"
                strokeWidth="1.5"
                opacity="0"
                style={{
                  animation: 'calmaRipple 6s ease-out infinite',
                  animationDelay: '4.5s',
                }}
              />

              {/* Center dot - static with gentle glow */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.04}
                fill="#a78bfa"
                opacity="0.9"
                filter="url(#glow)"
              />
            </>
          ) : (
            <>
              {/* Static Professional Ripples */}
              {/* Outermost static circle */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.42}
                fill="none"
                stroke="url(#purple-gradient-1)"
                strokeWidth="1"
                opacity="0.2"
                filter="url(#glow)"
              />

              {/* Second static circle */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.32}
                fill="none"
                stroke="url(#purple-gradient-2)"
                strokeWidth="1.2"
                opacity="0.35"
                filter="url(#glow)"
              />

              {/* Third static circle */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.22}
                fill="none"
                stroke="url(#purple-gradient-3)"
                strokeWidth="1.5"
                opacity="0.5"
                filter="url(#glow)"
              />

              {/* Inner static circle */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.12}
                fill="none"
                stroke="url(#purple-gradient-1)"
                strokeWidth="1.8"
                opacity="0.7"
                filter="url(#glow)"
              />

              {/* Center dot - same as animated version */}
              <circle
                cx={currentSize.viewBox / 2}
                cy={currentSize.viewBox / 2}
                r={currentSize.viewBox * 0.04}
                fill="#a78bfa"
                opacity="0.95"
                filter="url(#glow)"
              />
            </>
          )}
        </svg>
      </div>

      {/* Calma Text */}
      {showText && <h1 className={`${currentSize.text} font-bold`}>Calma</h1>}

      <style jsx>{`
        @keyframes calmaRipple {
          0% {
            r: ${currentSize.viewBox * 0.05}px;
            opacity: 0.8;
            stroke-width: 2;
          }
          50% {
            opacity: 0.4;
            stroke-width: 1.5;
          }
          100% {
            r: ${currentSize.viewBox * 0.45}px;
            opacity: 0;
            stroke-width: 1;
          }
        }

        @keyframes calmaCenter {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          circle[style*='animation'] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
