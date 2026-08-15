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
    <footer className="bg-[#FDFBF7] border-t border-[#EADFCF] text-[#1A1918] pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#EADFCF]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNav('home', e)}
              className="font-serif text-4xl tracking-tight select-none inline-flex items-center gap-1.5 text-[#1B3B2B] hover:text-[#C85A32] transition-colors"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              <span className="inline-block w-3 h-3 rounded-full bg-[#C85A32]"></span>
              <span>Nattuvazhi</span><sup className="text-sm font-normal text-[#C85A32] align-super leading-none">®</sup>
            </a>
            <p className="text-xs sm:text-sm text-[#4A4744] max-w-sm leading-relaxed">
              Curating unlisted private eco-villas, luxury kettuvallam houseboats, and high-altitude cloud forest retreats across Kumarakom backwaters, Munnar tea mist, Wayanad rainforests, and Varkala cliffs.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#C85A32] font-medium">
              <GlobeIcon size={14} />
              <span>Native Sanctuary Regions: Kumarakom • Munnar • Wayanad • Varkala</span>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C85A32]">Pages</h4>
            <ul className="space-y-2 text-xs text-[#4A4744]">
              <li>
                <a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-[#C85A32] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#studio" onClick={(e) => handleNav('studio', e)} className="hover:text-[#C85A32] transition-colors">
                  Destinations & Sanctuaries
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNav('about', e)} className="hover:text-[#C85A32] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#journal" onClick={(e) => handleNav('journal', e)} className="hover:text-[#C85A32] transition-colors">
                  Nattuvazhi Journal
                </a>
              </li>
              <li>
                <a href="#reachus" onClick={(e) => handleNav('reachus', e)} className="hover:text-[#C85A32] transition-colors">
                  Contact & Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Sanctuaries Column 2 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C85A32]">Native Havens</h4>
            <ul className="space-y-2 text-xs text-[#4A4744]">
              <li><a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-[#C85A32] transition-colors">Cedar Kettuvallam</a></li>
              <li><a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-[#C85A32] transition-colors">Cloud Forest Tea Sanctuary</a></li>
              <li><a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-[#C85A32] transition-colors">Wayanad Canopy Treehouse</a></li>
              <li><a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-[#C85A32] transition-colors">Heritage Nalukettu Villa</a></li>
            </ul>
          </div>

          {/* Contact Column 3 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C85A32]">Private Inquiries</h4>
            <p className="text-xs text-[#4A4744] leading-relaxed">
              For private membership applications, kettuvallam charters, or custom native itineraries, contact our concierge directly.
            </p>
            <button
              onClick={(e) => handleNav('reachus', e)}
              className="mt-2 px-5 py-2 bg-[#1B3B2B] text-white rounded-full text-xs font-semibold hover:bg-[#12291E] transition-colors shadow-md"
            >
              Contact Concierge
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A4744]">
          <p>© {new Date().getFullYear()} Nattuvazhi Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C85A32] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C85A32] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#C85A32] transition-colors">Heritage & Discretion</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
