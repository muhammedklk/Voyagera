import React from 'react'

interface HeroSectionProps {
  onExploreClick?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-32"
    >
      {/* ── Travel Sub-badge ── */}
      <div className="animate-fade-rise mb-5 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1B3B2B]/10 border border-[#1B3B2B]/20 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-[#1B3B2B]">
        <span className="text-[#C85A32]">✨</span>
        <span>Unlisted Global Sanctuaries & Private Expeditions</span>
      </div>

      {/* ── Travel Headline ── */}
      <h1
        className="animate-fade-rise font-serif max-w-6xl text-5xl sm:text-7xl md:text-8xl font-normal"
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          lineHeight: 0.96,
          letterSpacing: '-2px',
          color: '#1B3B2B',
        }}
      >
        <span>Discover the soul of </span>
        <em style={{ color: '#C85A32', fontStyle: 'italic' }}>nadan wanderlust,</em>
        <br className="hidden md:inline" />
        <span> in </span>
        <em style={{ color: '#1B3B2B', fontStyle: 'italic' }}>global luxury.</em>
      </h1>

      {/* ── Travel Sub-heading ── */}
      <p
        className="animate-fade-rise-delay text-base sm:text-xl max-w-3xl mt-8 font-medium leading-relaxed"
        style={{
          color: '#FFFFFF',
          fontFamily: 'Inter, system-ui, sans-serif',
          textShadow:
            '0 0 20px rgba(0, 0, 0, 0.95), 0 3px 8px rgba(0, 0, 0, 0.85), 0 0 30px rgba(0, 0, 0, 0.7)',
        }}
      >
        Curating unlisted private residences, remote wilderness retreats, and bespoke expeditions across Kyoto, Amalfi Coast, the Swiss Alps, Iceland, Bali, and Patagonia. Step away from crowd noise into pure stillness.
      </p>

      {/* ── CTA Button ── */}
      <button
        id="hero-cta-begin-journey"
        onClick={onExploreClick}
        className="animate-fade-rise-delay-2 rounded-full text-base sm:text-lg mt-10 font-medium transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] shadow-xl hover:shadow-2xl flex items-center gap-3"
        style={{
          paddingLeft: '3.5rem',
          paddingRight: '3.5rem',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
          backgroundColor: '#1B3B2B',
          color: '#FFFFFF',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <span>Explore Global Sanctuaries</span>
        <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
      </button>
    </section>
  )
}

export default HeroSection
