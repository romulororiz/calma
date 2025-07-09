import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7d6bff',
          700: '#6419e6',
          800: '#5417c2',
          900: '#4715a0',
          950: '#2a0a6b',
        },
        purple: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7d6bff',
          700: '#6419e6',
          800: '#5417c2',
          900: '#4715a0',
          950: '#2a0a6b',
        },
        calma: {
          primary: '#7D6BFF',
          secondary: '#8E72D1',
          accent: '#A855F7',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      perspective: {
        '1200': '1200px',
      },
      rotate: {
        'y-10': 'rotateY(10deg)',
        'y-[-10]': 'rotateY(-10deg)',
        'y-[-15]': 'rotateY(-15deg)',
        'x-5': 'rotateX(5deg)',
        'x-[-5]': 'rotateX(-5deg)',
      },
    },
  },
  plugins: [
    forms,
    typography,
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void
    }) {
      const newUtilities = {
        '.perspective-1200': {
          perspective: '1200px',
        },
        '.rotate-y-10': {
          transform: 'rotateY(10deg)',
        },
        '.rotate-y--10': {
          transform: 'rotateY(-10deg)',
        },
        '.rotate-y--15': {
          transform: 'rotateY(-15deg)',
        },
        '.rotate-x-5': {
          transform: 'rotateX(5deg)',
        },
        '.rotate-x--5': {
          transform: 'rotateX(-5deg)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
