import React from 'react'

interface HeroSectionProps {
  onExploreClick?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-36 sm:pt-40 pb-32"
    >
      {/* ── Travel Sub-badge ── */}
      <div className="animate-fade-rise mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-neutral-800">
        <span>✨ Bespoke World Expeditions & Havens</span>
      </div>

      {/* ── Travel Headline ── */}
      <h1
        className="animate-fade-rise font-serif max-w-7xl text-4xl sm:text-5xl md:text-6xl font-normal"
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
          color: '#000000',
        }}
      >
        <span style={{ color: '#000000' }}>Beyond </span>
        <em style={{ color: '#2B2B2B', fontStyle: 'italic' }}>ordinary travel,</em>
        <br />
        <span style={{ color: '#000000' }}>we discover </span>
        <em style={{ color: '#2B2B2B', fontStyle: 'italic' }}>sacred sanctuaries.</em>
      </h1>

      {/* ── Travel Sub-heading (White text with dark contrast text-shadow for crystal legibility) ── */}
      <p
        className="animate-fade-rise-delay max-w-2xl mt-8 font-medium leading-relaxed"
        style={{
          fontSize: '16px',
          color: '#FFFFFF',
          fontFamily: 'Inter, system-ui, sans-serif',
          textShadow:
            'rgb(0 0 0 / 41%) 0px 0px 16px, rgb(0 0 0 / 13%) 0px 2px 6px, rgb(0 0 0 / 42%) 0px 0px 24px',
        }}
      >
        Curating unlisted private residences, remote wilderness retreats, and bespoke expeditions across Kyoto, Amalfi, the Swiss Alps, and beyond. Step away from crowd noise into pure stillness.
      </p>

      {/* ── Redesigned Luxury CTA Button ── */}
      <button
        id="hero-cta-begin-journey"
        onClick={onExploreClick}
        className="group animate-fade-rise-delay-2 relative mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] bg-black/90 hover:bg-black backdrop-blur-xl border border-white/20 hover:border-white/40 shadow-2xl shadow-black/40 hover:shadow-black/60"
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <span>Explore Private Expeditions</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-white/80 group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </section>
  )
}

export default HeroSection
