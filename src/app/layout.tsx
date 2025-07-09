import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calma - Your Digital Wellness Companion',
  description:
    'Transform your mental wellness journey with Calma, an AI-powered mindfulness app designed for neuro-divergent users. Practice breathing exercises, track your mood, and build healthy habits.',
  keywords: [
    'wellness',
    'mindfulness',
    'meditation',
    'mental health',
    'breathing exercises',
    'mood tracking',
  ],
  authors: [{ name: 'Romulo Roriz' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7D6BFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
