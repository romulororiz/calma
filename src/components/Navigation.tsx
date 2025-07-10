'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import CalmaLogo from './ui/CalmaLogo'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-3">
          <CalmaLogo
            showText={true}
            animated={true}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-10">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 font-semibold whitespace-nowrap text-[var(--text-secondary)] transition-colors duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-[var(--purple-primary)] before:to-[var(--pink-vibrant)] before:transition-all before:duration-300 before:content-[''] hover:text-[var(--text-primary)] hover:before:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] px-6 py-[0.875rem] font-bold whitespace-nowrap text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-400 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)] lg:px-9"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-[1002] text-2xl text-[var(--text-primary)] md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-[8px] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-[999] flex h-screen w-[85%] max-w-[320px] flex-col items-center justify-center gap-8 border-l border-[var(--glass-border)] bg-[rgba(10,10,15,0.98)] backdrop-blur-[20px] transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button inside menu */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-2xl text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--purple-primary)]"
          aria-label="Close menu"
        >
          ✕
        </button>

        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center text-xl font-semibold text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#cta"
          onClick={() => setIsMobileMenuOpen(false)}
          className="rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] px-8 py-[0.875rem] text-center font-bold text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-400 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)]"
        >
          Start Your Journey
        </Link>
      </div>
    </nav>
  )
}
