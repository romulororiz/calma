import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import CalmaLogo from '@/components/ui/CalmaLogo'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'About Calma - Your Digital Wellness Companion',
  description:
    "Learn about Calma's mission to transform mental wellness through AI-powered mindfulness designed for everyone, especially neuro-divergent users.",
}

export default function About() {
  const features = [
    {
      title: 'AI-Powered Guidance',
      description:
        'Our intelligent companion learns and adapts to your unique wellness journey, providing personalized recommendations.',
      icon: '🧠',
    },
    {
      title: 'Neuro-Divergent Friendly',
      description:
        'Designed with accessibility and diverse neurological needs in mind, ensuring everyone can benefit from our tools.',
      icon: '🌈',
    },
    {
      title: 'Evidence-Based Methods',
      description:
        'Built on proven mindfulness techniques and backed by scientific research in mental health and wellness.',
      icon: '📚',
    },
    {
      title: 'Privacy First',
      description:
        'Your mental health data is private and secure. We never share personal information with third parties.',
      icon: '🔒',
    },
  ]

  const team = [
    {
      name: 'Development Team',
      role: 'Creating innovative wellness technology',
      description:
        'Our passionate team combines expertise in AI, psychology, and user experience design.',
    },
    {
      name: 'Advisory Board',
      role: 'Mental health professionals',
      description:
        'Licensed therapists and researchers guide our approach to ensure clinical effectiveness.',
    },
    {
      name: 'Community',
      role: 'User feedback and testing',
      description:
        'Our amazing community of users helps us continuously improve and evolve the platform.',
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
            About <span className="text-purple-600">Calma</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
            Transforming mental wellness through compassionate AI technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                At Calma, we believe that mental wellness should be accessible
                to everyone, regardless of their neurological makeup or
                background. Our mission is to create inclusive, AI-powered tools
                that help people build healthier relationships with their minds.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                We're particularly focused on serving neuro-divergent
                individuals who often struggle to find wellness tools that work
                for their unique minds. Through personalized guidance and
                adaptive technology, we're making mental health support more
                inclusive and effective.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Every feature we build is designed with empathy, backed by
                research, and tested with real users who deserve tools that
                truly understand their needs.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 text-center">
                <CalmaLogo size="xl" showText={true} />
                <p className="mt-6 font-medium text-purple-700">
                  "Technology with heart, designed for every mind"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              What Makes Calma Different
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We're not just another wellness app. We're a comprehensive
              platform built from the ground up with inclusivity and
              personalization at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 text-4xl">{feature.icon}</div>
                  <CardTitle className="text-xl text-gray-900">
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

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Calma is built by a diverse team of technologists, mental health
              professionals, and advocates who are passionate about making
              wellness accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="border-0 bg-gray-50 text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {member.name}
                  </CardTitle>
                  <p className="font-medium text-purple-600">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Values</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Inclusivity
              </h3>
              <p className="text-gray-600">
                We design for all minds, ensuring our tools work for
                neuro-divergent and neurotypical users alike.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Privacy
              </h3>
              <p className="text-gray-600">
                Your mental health journey is personal. We protect your data
                with the highest security standards.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Empathy
              </h3>
              <p className="text-gray-600">
                Every feature is built with deep understanding of real human
                struggles and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
