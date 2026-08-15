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
      <div className="animate-fade-rise mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-neutral-800">
        <span>✨ Bespoke World Expeditions & Havens</span>
      </div>

      {/* ── Travel Headline ── */}
      <h1
        className="animate-fade-rise font-serif max-w-7xl text-5xl sm:text-7xl md:text-8xl font-normal"
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
          color: '#000000',
        }}
      >
        <span style={{ color: '#000000' }}>Beyond </span>
        <em style={{ color: '#2B2B2B', fontStyle: 'italic' }}>ordinary travel,</em>
        <span style={{ color: '#000000' }}> we discover </span>
        <em style={{ color: '#2B2B2B', fontStyle: 'italic' }}>sacred sanctuaries.</em>
      </h1>

      {/* ── Travel Sub-heading (White text with dark contrast text-shadow for crystal legibility) ── */}
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 font-medium leading-relaxed"
        style={{
          color: '#FFFFFF',
          fontFamily: 'Inter, system-ui, sans-serif',
          textShadow:
            'rgb(0 0 0 / 41%) 0px 0px 16px, rgb(0 0 0 / 13%) 0px 2px 6px, rgb(0 0 0 / 42%) 0px 0px 24px',
        }}
      >
        Curating unlisted private residences, remote wilderness retreats, and bespoke expeditions across Kyoto, Amalfi, the Swiss Alps, and beyond. Step away from crowd noise into pure stillness.
      </p>

      {/* ── CTA Button ── */}
      <button
        id="hero-cta-begin-journey"
        onClick={onExploreClick}
        className="animate-fade-rise-delay-2 rounded-full text-base mt-10 font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-neutral-900/10"
        style={{
          paddingLeft: '3.5rem',
          paddingRight: '3.5rem',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        Explore Private Expeditions
      </button>
    </section>
  )
}

export default HeroSection
