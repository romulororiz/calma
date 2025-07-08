import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import CalmaLogo from '@/components/ui/CalmaLogo'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Contact Us - Calma Digital Wellness Companion',
  description:
    "Get in touch with the Calma team. We're here to help with support, feedback, partnerships, and any questions about our wellness platform.",
}

export default function Contact() {
  const contactMethods = [
    {
      title: 'General Support',
      description: 'Questions about using Calma or need technical help',
      icon: '💬',
      contact: 'support@calma.app',
      responseTime: 'Usually within 24 hours',
    },
    {
      title: 'Feedback & Suggestions',
      description: 'Share your ideas to help us improve Calma',
      icon: '💡',
      contact: 'feedback@calma.app',
      responseTime: 'We read every message',
    },
    {
      title: 'Partnerships',
      description: 'Interested in collaborating or integrating with Calma',
      icon: '🤝',
      contact: 'partnerships@calma.app',
      responseTime: 'Usually within 2-3 business days',
    },
    {
      title: 'Media & Press',
      description: 'Press inquiries and media-related questions',
      icon: '📰',
      contact: 'press@calma.app',
      responseTime: 'Usually within 1-2 business days',
    },
  ]

  const faqs = [
    {
      question: 'Is Calma free to use?',
      answer:
        'Yes! Calma offers a comprehensive free tier with all core features. We believe mental wellness tools should be accessible to everyone.',
    },
    {
      question: 'How does Calma protect my privacy?',
      answer:
        'Your data is encrypted and stored securely. We never share personal information with third parties, and you can delete your data at any time.',
    },
    {
      question: 'Is Calma suitable for neuro-divergent users?',
      answer:
        'Absolutely! Calma is specifically designed with neuro-divergent users in mind, offering customizable interfaces and sensory-friendly options.',
    },
    {
      question: 'Can I use Calma alongside therapy?',
      answer:
        'Yes, Calma is designed to complement professional therapy, not replace it. Many users find it helpful as a daily wellness tool between therapy sessions.',
    },
    {
      question: 'What platforms is Calma available on?',
      answer:
        'Calma is available on iOS and Android, with a web version coming soon. All your data syncs seamlessly across devices.',
    },
    {
      question: 'How do I report a bug or technical issue?',
      answer:
        "Please email us at support@calma.app with details about the issue, your device type, and any error messages you've seen.",
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
            Get in <span className="text-purple-600">Touch</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
            We're here to help and would love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              How Can We Help?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Choose the best way to reach us based on your needs. We're
              committed to responding promptly and thoughtfully.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 text-4xl">{method.icon}</div>
                  <CardTitle className="text-xl text-gray-900">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {method.description}
                  </p>
                  <a
                    href={`mailto:${method.contact}`}
                    className="inline-block rounded-full bg-purple-600 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-purple-700"
                  >
                    {method.contact}
                  </a>
                  <p className="mt-3 text-sm text-gray-500">
                    {method.responseTime}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Prefer to use a form? Fill out the details below and we'll get
              back to you soon.
            </p>
          </div>

          <Card className="border-0 bg-white shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                      placeholder="Your first name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Please select a subject</option>
                    <option value="general">General Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="bug">Bug Report</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="press">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="resize-vertical w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I'd like to receive updates about Calma's features and
                    wellness tips
                  </label>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                  <p className="mt-3 text-sm text-gray-500">
                    We typically respond within 24 hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about Calma
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">Don't see your question here?</p>
            <Button
              variant="outline"
              className="rounded-full border-2 border-purple-200 px-6 py-2 text-purple-700 hover:bg-purple-50"
            >
              Ask Us Directly
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="border-l-4 border-red-400 bg-red-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-red-800">
              🚨 Crisis Resources
            </h3>
            <p className="mb-6 text-lg text-red-700">
              If you're experiencing a mental health crisis, please reach out
              for immediate help:
            </p>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow">
                <h4 className="mb-2 font-semibold text-gray-900">
                  Crisis Text Line
                </h4>
                <p className="mb-2 text-sm text-gray-600">
                  Text HOME to 741741
                </p>
                <p className="text-xs text-gray-500">
                  24/7 crisis support via text
                </p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow">
                <h4 className="mb-2 font-semibold text-gray-900">
                  National Suicide Prevention Lifeline
                </h4>
                <p className="mb-2 text-sm text-gray-600">Call 988</p>
                <p className="text-xs text-gray-500">24/7 phone support</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-red-600">
              Remember: Calma is a wellness tool and not a replacement for
              professional mental health care
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
