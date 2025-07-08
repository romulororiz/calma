'use client'

interface CalmaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

export default function CalmaLogo({
  size = 'md',
  showText = true,
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
      text: 'text-2xl',
      viewBox: 80,
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
    <div className={`flex flex-col items-center gap-2 ${className}`}>
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
            <filter id={`glow-${size}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Background radial gradient - purple only */}
            <radialGradient id={`background-glow-${size}`}>
              <stop offset="0%" stopColor="#7D6BFF" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#8E72D1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#121926" stopOpacity="0" />
            </radialGradient>

            {/* Purple gradient variations */}
            <linearGradient
              id={`purple-gradient-1-${size}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7D6BFF" />
              <stop offset="100%" stopColor="#8E72D1" />
            </linearGradient>
            <linearGradient
              id={`purple-gradient-2-${size}`}
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8E72D1" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient
              id={`purple-gradient-3-${size}`}
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7D6BFF" />
            </linearGradient>
          </defs>

          {/* Background glow */}
          <circle
            cx={currentSize.viewBox / 2}
            cy={currentSize.viewBox / 2}
            r={currentSize.viewBox * 0.48}
            fill={`url(#background-glow-${size})`}
            opacity="0.4"
          />

          {/* Ripple Circle 1 - Outermost */}
          <circle
            className="calma-ripple-circle"
            cx={currentSize.viewBox / 2}
            cy={currentSize.viewBox / 2}
            r={currentSize.viewBox * 0.05}
            fill="none"
            stroke={`url(#purple-gradient-1-${size})`}
            strokeWidth="1.5"
            opacity="0"
          />

          {/* Ripple Circle 2 */}
          <circle
            className="calma-ripple-circle"
            cx={currentSize.viewBox / 2}
            cy={currentSize.viewBox / 2}
            r={currentSize.viewBox * 0.05}
            fill="none"
            stroke={`url(#purple-gradient-2-${size})`}
            strokeWidth="1.5"
            opacity="0"
          />

          {/* Ripple Circle 3 */}
          <circle
            className="calma-ripple-circle"
            cx={currentSize.viewBox / 2}
            cy={currentSize.viewBox / 2}
            r={currentSize.viewBox * 0.05}
            fill="none"
            stroke={`url(#purple-gradient-3-${size})`}
            strokeWidth="1.5"
            opacity="0"
          />

          {/* Ripple Circle 4 */}
          <circle
            className="calma-ripple-circle"
            cx={currentSize.viewBox / 2}
            cy={currentSize.viewBox / 2}
            r={currentSize.viewBox * 0.05}
            fill="none"
            stroke={`url(#purple-gradient-1-${size})`}
            strokeWidth="1.5"
            opacity="0"
          />

          {/* Center dot - static with gentle glow */}
          <circle
            cx={currentSize.viewBox / 2}
            cy={currentSize.viewBox / 2}
            r={currentSize.viewBox * 0.04}
            fill="#7D6BFF"
            opacity="0.9"
            filter={`url(#glow-${size})`}
          />
        </svg>
      </div>

      {/* Calma Text */}
      {showText && <h1 className={`font-bold ${currentSize.text}`}>Calma</h1>}
    </div>
  )
}
