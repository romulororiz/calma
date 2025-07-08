import Link from 'next/link'
import CalmaLogo from './CalmaLogo'
import { footerLinks } from '@/lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <CalmaLogo size="sm" showText={true} />
            <p className="mt-4 max-w-xs text-sm text-gray-600">
              Your digital wellness companion. Transform your mental wellness
              journey with AI-powered mindfulness.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks
                .find(link => link.title === 'Product')
                ?.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-purple-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks
                .find(link => link.title === 'Company')
                ?.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-purple-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks
                .find(link => link.title === 'Legal')
                ?.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-purple-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-600">
              © {currentYear} Calma. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              {/* Social Media Links - Add when ready */}
              <div className="text-sm text-gray-600">
                Made with ❤️ for mental wellness
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
