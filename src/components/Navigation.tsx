'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CalmaLogo from './ui/CalmaLogo'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 50)

      // Show/hide navigation based on scroll direction
      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navigation
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navigation
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#testimonials', label: 'Stories' },
  ]

  return (
    <nav
      className={`fixed top-0 z-[1000] w-full transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[rgba(10,10,15,0.95)] py-4 shadow-[0_10px_40px_rgba(139,92,246,0.15)] backdrop-blur-[20px] backdrop-saturate-[180%]'
          : 'bg-[rgba(10,10,15,0.7)] py-5 backdrop-blur-[20px] backdrop-saturate-[180%]'
      } border-b border-[var(--glass-border)]`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8">
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-3">
          <CalmaLogo
            showText={true}
            animated={true}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 font-semibold text-[var(--text-secondary)] transition-colors duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-[var(--purple-primary)] before:to-[var(--pink-vibrant)] before:transition-all before:duration-300 before:content-[''] hover:text-[var(--text-primary)] hover:before:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] px-9 py-[0.875rem] font-bold text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-400 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)]"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-[var(--text-primary)] md:hidden"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 z-[999] flex h-screen w-4/5 flex-col items-center justify-center gap-8 bg-[rgba(10,10,15,0.98)] backdrop-blur-[20px] transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-semibold text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#cta"
          onClick={() => setIsMobileMenuOpen(false)}
          className="rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] px-9 py-[0.875rem] font-bold text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-400 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)]"
        >
          Start Your Journey
        </Link>
      </div>
    </nav>
  )
}
