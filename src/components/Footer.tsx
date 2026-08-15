import React from 'react'
import { GlobeIcon } from './Icons'
import { PageId } from './Navbar'

interface FooterProps {
  onNavigate?: (page: PageId) => void
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId, e: React.MouseEvent) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-900 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-100">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNav('home', e)}
              className="font-serif text-4xl tracking-tight select-none inline-block text-neutral-900 hover:opacity-80 transition-opacity"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Nādvora<sup className="text-xl align-super leading-none">®</sup>
            </a>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed">
              Curating unlisted private residences, remote wilderness retreats, and bespoke expeditions across Kyoto, Amalfi, the Swiss Alps, and beyond. Step away from crowd noise into pure stillness.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-neutral-400">
              <GlobeIcon size={14} />
              <span>Headquarters: Zurich • Kyoto • New York</span>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Pages</h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-neutral-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#studio" onClick={(e) => handleNav('studio', e)} className="hover:text-neutral-900 transition-colors">
                  Destinations & Sanctuaries
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNav('about', e)} className="hover:text-neutral-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#journal" onClick={(e) => handleNav('journal', e)} className="hover:text-neutral-900 transition-colors">
                  Travel Journal
                </a>
              </li>
              <li>
                <a href="#reachus" onClick={(e) => handleNav('reachus', e)} className="hover:text-neutral-900 transition-colors">
                  Contact Us & Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Sanctuaries Column 2 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Sanctuaries</h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li><a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-neutral-900 transition-colors">Kyoto Bamboo Villa</a></li>
              <li><a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-neutral-900 transition-colors">Amalfi Cliffside</a></li>
              <li><a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-neutral-900 transition-colors">Swiss Alps Lodge</a></li>
              <li><a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-neutral-900 transition-colors">Icelandic Glass Domes</a></li>
            </ul>
          </div>

          {/* Contact Column 3 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Private Inquiries</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              For private membership applications or custom flight charters, contact our concierge directly.
            </p>
            <button
              onClick={(e) => handleNav('reachus', e)}
              className="mt-2 px-5 py-2 bg-neutral-900 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors"
            >
              Contact Concierge
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Nādvora Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Security & Discretion</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
