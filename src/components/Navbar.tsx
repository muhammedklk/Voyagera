import React, { useState, useEffect } from 'react'
import { XIcon } from './Icons'

export type PageId = 'home' | 'studio' | 'about' | 'journal' | 'reachus' | 'destination-detail'

interface NavbarProps {
  activePage?: PageId
  onNavigate?: (page: PageId) => void
}

const NAV_ITEMS: { label: string; page: PageId }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Destinations', page: 'studio' },
  { label: 'About Us', page: 'about' },
  { label: 'Journal', page: 'journal' },
  { label: 'Contact Us', page: 'reachus' },
]

const Navbar: React.FC<NavbarProps> = ({ activePage = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleNavClick = (page: PageId, e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EADFCF] shadow-sm py-0'
            : 'bg-transparent border-b border-transparent py-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick('home', e)}
            className="font-serif text-3xl tracking-tight select-none text-[#1B3B2B] hover:text-[#C85A32] transition-colors flex items-center gap-1.5"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C85A32]"></span>
            <span>Nattuvazhi</span><sup className="text-sm font-normal text-[#C85A32] align-super leading-none">®</sup>
          </a>

          {/* Desktop Menu Items */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.page}`}
                  onClick={(e) => handleNavClick(item.page, e)}
                  className="text-sm transition-colors duration-200 hover:text-[#C85A32] font-medium"
                  style={{
                    color: activePage === item.page ? '#1B3B2B' : '#4A4744',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    borderBottom: activePage === item.page ? '2px solid #C85A32' : 'none',
                    paddingBottom: '4px',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            id="nav-cta-begin-journey"
            onClick={(e) => handleNavClick('reachus', e)}
            className="hidden md:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg"
            style={{
              backgroundColor: '#1B3B2B',
              color: '#FFFFFF',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Explore Sanctuaries
          </button>

          {/* Mobile Hamburger Button */}
          <button
            id="nav-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-[#1B3B2B] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-[#1B3B2B]" />
            <span className="block w-6 h-0.5 bg-[#1B3B2B]" />
            <span className="block w-4 h-0.5 bg-[#C85A32]" />
          </button>
        </div>
      </nav>

      {/* Full-Screen & Full-Width Solid Mobile Overlay Menu (z-[100] to cover ALL sections 100%) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] w-full h-full min-h-screen bg-[#FDFBF7] text-[#1A1918] flex flex-col justify-between p-6 sm:p-8 animate-fade-rise overflow-y-auto">
          {/* Header Bar inside Mobile Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-[#EADFCF] shrink-0">
            <span
              className="font-serif text-3xl text-[#1B3B2B] flex items-center gap-1.5"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C85A32]"></span>
              Nattuvazhi<sup className="text-sm font-normal text-[#C85A32]">®</sup>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-[#F5F0E6] hover:bg-[#EADFCF] text-[#1B3B2B] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <XIcon size={20} />
            </button>
          </div>

          {/* Navigation Links List (Centered) */}
          <div className="py-10 flex-1 flex flex-col justify-center items-center text-center">
            <ul className="space-y-7 text-center w-full">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.page}`}
                    onClick={(e) => handleNavClick(item.page, e)}
                    className={`text-4xl sm:text-5xl font-serif inline-block text-center transition-all ${
                      activePage === item.page
                        ? 'text-[#1B3B2B] font-bold border-b-2 border-[#C85A32] pb-1'
                        : 'text-[#4A4744]/70 hover:text-[#C85A32]'
                    }`}
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action Footer inside Mobile Menu */}
          <div className="pt-6 border-t border-[#EADFCF] space-y-4 shrink-0">
            <button
              onClick={(e) => handleNavClick('reachus', e)}
              className="w-full py-4 bg-[#1B3B2B] hover:bg-[#12291E] text-white text-base font-medium rounded-full shadow-lg transition-transform active:scale-[0.98]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Explore Sanctuaries
            </button>

            <div className="text-center text-xs text-[#C85A32] font-sans font-medium tracking-wide">
              <span>Zurich • Kyoto • Tokyo • Amalfi • New York</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
