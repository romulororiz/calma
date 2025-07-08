'use client'

import CalmaLogo from './CalmaLogo'
import { Button } from './button'

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Main Logo */}
        <div className="mb-8">
          <CalmaLogo size="xl" showText={false} />
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 sm:text-6xl lg:text-7xl">
          <span className="text-purple-600">Calma</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-4 max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
          Your Digital Wellness Companion
        </p>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-700">
          Transform your mental wellness journey with AI-powered mindfulness
          designed for everyone. Practice breathing exercises, track your mood,
          and build healthy habits that last.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl"
          >
            Download for iOS
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-purple-200 px-8 py-4 text-lg font-semibold text-purple-700 hover:bg-purple-50"
          >
            Download for Android
          </Button>
        </div>

        {/* Features preview */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Guided Breathing
            </h3>
            <p className="text-gray-600">
              Personalized breathing exercises to reduce stress and anxiety
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Mood Tracking
            </h3>
            <p className="text-gray-600">
              Track your emotional journey with insightful patterns
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <svg
                className="h-8 w-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              AI Support
            </h3>
            <p className="text-gray-600">
              Intelligent companion that learns and adapts to your needs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
