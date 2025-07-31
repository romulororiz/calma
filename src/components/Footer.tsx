'use client'

import { Mail, MessageCircle, Twitter, Camera } from 'lucide-react'

const socialIcons = [
  { icon: Mail, label: 'Email' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Camera, label: 'Instagram' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-transparent to-[rgba(10,10,15,0.8)] px-8 pt-20 pb-8 backdrop-blur-[10px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex grid-cols-1 items-center justify-center gap-16 md:grid-cols-2 lg:grid-cols-1">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center justify-center gap-3">
              <h1 className="text-5xl font-bold">Calma</h1>
            </div>
            <p className="mb-8 leading-[1.7] text-[var(--text-secondary)]">
              Your warm, understanding companion for ADHD management. Built with
              love by people who truly get it.
            </p>
            <div className="flex justify-center gap-4">
              {socialIcons.map((social, index) => (
                <button
                  key={index}
                  className="glass-bg flex h-12 w-12 cursor-pointer items-center justify-center rounded-[14px] text-[var(--text-secondary)] transition-all duration-400 hover:translate-y-[-5px] hover:rotate-[5deg] hover:border-transparent hover:bg-gradient-to-br hover:from-[var(--purple-primary)] hover:to-[var(--pink-vibrant)] hover:text-white hover:shadow-[0_15px_30px_rgba(139,92,246,0.3)]"
                  title={social.label}
                >
                  <social.icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Links */}
          {/* <div>
            <h4 className="mb-6 text-[1.25rem] font-bold text-[var(--text-primary)]">
              Product
            </h4>
            <ul className="space-y-4">
              {footerLinks.product.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[1.0625rem] font-medium text-[var(--text-secondary)] transition-all duration-300 hover:pl-[5px] hover:text-[var(--purple-warm)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company Links */}
          {/* <div>
            <h4 className="mb-6 text-[1.25rem] font-bold text-[var(--text-primary)]">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[1.0625rem] font-medium text-[var(--text-secondary)] transition-all duration-300 hover:pl-[5px] hover:text-[var(--purple-warm)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--glass-border)] pt-8 text-center text-xs">
          <p className="font-medium text-[var(--text-muted)]">
            © {currentYear} Calma. Made with{' '}
            <span className="animate-heartbeat inline-block text-[var(--pink-vibrant)]">
              💜
            </span>{' '}
            by people who understand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
