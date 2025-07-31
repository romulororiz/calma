'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CalmaLogo from './ui/CalmaLogo'
import HamburgerButton from './ui/HamburgerMenu'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 50)

      // Show/hide navigation based on scroll direction
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
      // Store current scroll position
      const scrollY = window.scrollY
      
      // Apply styles to prevent scrolling
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      // Restore scroll position and styles
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#testimonials', label: 'Stories' },
    { href: '#pricing', label: 'Pricing' },
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
    
      {/* Navigation Bar - Hidden on Mobile */}
      <nav
        className={`fixed top-0 z-[1000] w-full transition-all duration-300 lg:block ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isMobileMenuOpen
            ? 'bg-[rgba(10,10,15,0.95)] backdrop-blur-[20px] backdrop-saturate-[180%]'
            : isScrolled
              ? 'bg-[rgba(10,10,15,0.95)] backdrop-blur-[20px] backdrop-saturate-[180%]'
              : 'bg-[rgba(10,10,15,0.7)] backdrop-blur-[20px] backdrop-saturate-[180%]'
        } ${
          isMobileMenuOpen
            ? 'shadow-none'
            : 'shadow-[0_10px_40px_rgba(139,92,246,0.15)]'
        } border-b border-[var(--glass-border)] hidden`}
        style={{
          backdropFilter: isMobileMenuOpen
            ? 'blur(20px) saturate(180%)'
            : undefined,
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6 sm:py-4 lg:px-8">
          {/* Logo */}
          <Link href="#home" className="group z-[1001] flex items-center gap-3">
            <CalmaLogo
              showText={true}
              size={isMobile ? 'md' : 'xl'}
              className="ml-[-20px] transition-transform duration-300 group-hover:scale-105 hover:scale-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm font-semibold text-[var(--text-secondary)] transition-colors duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-[var(--purple-primary)] before:to-[var(--pink-vibrant)] before:transition-all before:duration-300 before:content-[''] hover:text-[var(--text-primary)] hover:before:w-full lg:text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#cta"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-400 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)] lg:px-6 lg:py-3"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Menu Button - Only on Mobile */}
      <div className="fixed top-4 right-4 z-[1001] lg:hidden">
        <HamburgerButton
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      {/* Mobile Menu Overlay - Full Screen */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Background with blur */}
        <div
          className="absolute inset-0 bg-[rgba(10,10,15,0.98)] backdrop-blur-[24px] backdrop-saturate-[180%]"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative z-10 flex h-full w-full flex-col">
          {/* Menu Items */}
          <div className="flex flex-1 flex-col items-center justify-center px-8">
            <div className="w-full max-w-sm space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block w-full rounded-2xl px-6 py-4 text-center text-lg font-semibold text-[var(--text-secondary)] transition-all duration-300 hover:bg-white/5 hover:text-[var(--text-primary)] active:scale-[0.98] ${
                    isMobileMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 50 + 100}ms`
                      : '0ms',
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="#cta"
                  onClick={handleLinkClick}
                  className={`text-md mx-auto block w-full max-w-[250px] rounded-full bg-gradient-to-r from-[var(--purple-primary)] to-[var(--pink-vibrant)] px-6 py-4 text-center font-bold text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)] active:scale-[0.98] ${
                    isMobileMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${navLinks.length * 50 + 150}ms`
                      : '0ms',
                  }}
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>

          {/* Close hint at bottom */}
          <div
            className={`pb-safe-area-inset-bottom px-8 pb-8 text-center transition-all duration-300 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navLinks.length * 50 + 200}ms`
                : '0ms',
            }}
          ></div>
        </div>
      </div>

      {/* Additional blur overlay for content behind nav when menu is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[900] bg-black/20 backdrop-blur-[2px] lg:hidden" />
      )}
    </>
  )
}
