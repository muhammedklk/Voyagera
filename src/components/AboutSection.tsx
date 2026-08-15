import React, { useState, useEffect, useRef } from 'react'
import { SparklesIcon, ShieldCheckIcon, GlobeIcon, QuoteIcon } from './Icons'

interface CounterProps {
  target: number
  suffix?: string
  decimals?: number
  duration?: number
}

const AnimatedCounter: React.FC<CounterProps> = ({
  target,
  suffix = '',
  decimals = 0,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let startTime: number | null = null

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Smooth easeOutExpo transition
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            const currentCount = easeProgress * target

            setCount(currentCount)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const STATS = [
  { target: 12, suffix: '+', decimals: 0, label: 'Native Regions', subtext: 'Kumarakom, Munnar, Wayanad, Varkala...' },
  { target: 48, suffix: '+', decimals: 0, label: 'Private Havens', subtext: 'Kettuvallams, Nalukettus & Treehouses' },
  { target: 99.8, suffix: '%', decimals: 1, label: 'Satisfaction Rate', subtext: 'Verified by native heritage voyagers' },
  { target: 100, suffix: '%', decimals: 0, label: 'Eco Offset', subtext: 'Supporting backwater & forest conservation' },
]

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-[#EADFCF]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column — Philosophy Content */}
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-semibold uppercase tracking-widest border border-[#C85A32]/20">
            <SparklesIcon size={14} className="text-[#C85A32]" /> Our Philosophy
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1B3B2B] leading-[1.05]"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            "We curate secret trails and native sanctuaries for those who seek authentic soul wanderlust."
          </h2>

          <p className="text-base text-[#4A4744] leading-relaxed font-sans">
            In an era of performative travel and cookie-cutter resorts, true luxury is about reconnecting with original roots, pristine natural silence, and untouched local culture.
          </p>

          <p className="text-sm text-[#4A4744]/80 leading-relaxed">
            Founded in 2022 by a collective of native architects, naturalists, and heritage stewards, Nattuvazhi operates as an exclusive sanctuary collective. We craft bespoke, zero-footprint native journeys that preserve ancient traditions while providing high-end luxury comfort.
          </p>

          {/* Core Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EADFCF]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F5F0E6] flex items-center justify-center shrink-0 text-[#1B3B2B] mt-0.5 border border-[#EADFCF]">
                <ShieldCheckIcon size={16} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#1B3B2B]">Absolute Discretion</h4>
                <p className="text-xs text-[#4A4744]">Unlisted private estates with dedicated native host concierges.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F5F0E6] flex items-center justify-center shrink-0 text-[#1B3B2B] mt-0.5 border border-[#EADFCF]">
                <GlobeIcon size={16} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#1B3B2B]">Heritage & Eco Giving</h4>
                <p className="text-xs text-[#4A4744]">Direct funding into mangrove restoration and traditional woodcraft.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Visual Imagery Grid */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-[#EADFCF]">
                <img
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop"
                  alt="Kettuvallam Sunset"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-[#1B3B2B] text-white p-6 rounded-3xl relative overflow-hidden shadow-lg border border-[#C85A32]/30">
                <QuoteIcon size={32} className="text-[#C85A32] absolute top-4 right-4 opacity-30" />
                <p className="text-sm font-serif italic relative z-10 leading-relaxed text-[#EADFCF]" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                  "Nattuvazhi revealed a Kerala we never knew existed — pure quietude, secret backwater channels, and unforgettable food."
                </p>
                <span className="block mt-3 text-[11px] uppercase tracking-wider text-[#D4AF37] font-sans font-semibold">
                  — R. Nair, Heritage Traveler
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="h-80 rounded-3xl overflow-hidden shadow-lg border border-[#EADFCF]">
                <img
                  src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop"
                  alt="Munnar Tea Hills"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Section with Smooth Counting Animation */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#F5F0E6] border border-[#EADFCF] rounded-3xl">
        {STATS.map((stat, idx) => (
          <div key={idx} className="text-center sm:text-left space-y-1">
            <span
              className="text-4xl sm:text-5xl font-serif text-[#1B3B2B] block"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                decimals={stat.decimals}
                duration={2200}
              />
            </span>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">{stat.label}</h4>
            <p className="text-xs text-[#4A4744]">{stat.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
