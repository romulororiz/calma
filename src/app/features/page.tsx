import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import CalmaLogo from '@/components/ui/CalmaLogo'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Features - Calma Digital Wellness Companion',
  description:
    "Discover Calma's powerful features including AI-guided breathing exercises, mood tracking, personalized insights, and neuro-divergent friendly tools.",
}

export default function Features() {
  const mainFeatures = [
    {
      title: 'Guided Breathing Exercises',
      description:
        'Personalized breathing patterns that adapt to your stress levels and preferences. Perfect for anxiety management and relaxation.',
      icon: '🫁',
      benefits: [
        'Reduces anxiety',
        'Improves focus',
        'Better sleep quality',
        'Stress management',
      ],
      comingSoon: false,
    },
    {
      title: 'AI Mood Tracking',
      description:
        'Intelligent mood analysis that learns your patterns and provides insights without judgment or pressure.',
      icon: '🧠',
      benefits: [
        'Pattern recognition',
        'Personalized insights',
        'Trigger identification',
        'Progress tracking',
      ],
      comingSoon: false,
    },
    {
      title: 'Visual Diary',
      description:
        "Express your emotions through colors, shapes, and visual elements when words aren't enough.",
      icon: '🎨',
      benefits: [
        'Non-verbal expression',
        'Creative outlet',
        'Visual patterns',
        'Emotional clarity',
      ],
      comingSoon: false,
    },
    {
      title: 'Support Mode',
      description:
        'AI companion that provides gentle guidance and support during difficult moments, available 24/7.',
      icon: '🤝',
      benefits: [
        'Always available',
        'Personalized responses',
        'Crisis support',
        'Gentle guidance',
      ],
      comingSoon: false,
    },
    {
      title: 'Patterns & Insights',
      description:
        'Discover meaningful connections between your habits, mood, and wellness journey through intelligent analytics.',
      icon: '📊',
      benefits: [
        'Data insights',
        'Habit correlation',
        'Progress visualization',
        'Trend analysis',
      ],
      comingSoon: false,
    },
    {
      title: 'Check-In System',
      description:
        'Regular wellness check-ins that adapt to your schedule and mental state, never overwhelming or demanding.',
      icon: '✅',
      benefits: [
        'Flexible scheduling',
        'Gentle reminders',
        'Progress tracking',
        'Adaptive frequency',
      ],
      comingSoon: false,
    },
  ]

  const accessibilityFeatures = [
    {
      title: 'Sensory-Friendly Design',
      description:
        'Customizable interface with reduced motion options and calming color schemes',
      icon: '🌙',
    },
    {
      title: 'Multiple Input Methods',
      description:
        'Voice, text, visual, and gesture-based interactions for different communication preferences',
      icon: '🗣️',
    },
    {
      title: 'Adaptive Notifications',
      description:
        'Smart notifications that learn your patterns and avoid overwhelming you',
      icon: '🔔',
    },
    {
      title: 'Cognitive Load Management',
      description:
        'Information presented in digestible chunks with clear, simple navigation',
      icon: '🧩',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8">
            <CalmaLogo size="lg" showText={false} />
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Powerful <span className="text-purple-600">Features</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
            Discover tools designed to support your unique wellness journey
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Core Features
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Each feature is carefully crafted to provide meaningful support
              while respecting your autonomy and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <CardTitle className="mb-2 text-xl text-gray-900">
                    {feature.title}
                  </CardTitle>
                  {feature.comingSoon && (
                    <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                      Coming Soon
                    </span>
                  )}
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-center text-sm text-gray-600"
                        >
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Accessibility & Inclusion
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Built from the ground up to be accessible and welcoming to users
              with diverse neurological profiles and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {accessibilityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-0 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <div className="mr-4 text-3xl">{feature.icon}</div>
                  <CardTitle className="text-lg text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              How Calma Works
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our AI learns and adapts to your unique patterns, providing
              personalized support that grows with you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Gentle Onboarding
              </h3>
              <p className="text-gray-600">
                Start with simple check-ins and basic preferences. No
                overwhelming questionnaires or pressure to share more than
                you're comfortable with.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                AI Learning
              </h3>
              <p className="text-gray-600">
                Our AI observes your patterns and preferences, learning what
                works best for you without being intrusive or judgmental.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Personalized Support
              </h3>
              <p className="text-gray-600">
                Receive customized recommendations, insights, and support that
                adapt to your changing needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <CalmaLogo size="md" showText={false} className="mb-8" />

          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Join thousands of users who have found peace and balance with
            Calma's personalized approach to mental wellness.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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

          <p className="mt-6 text-sm text-gray-500">
            Free to download • No subscription required • Privacy-first design
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
