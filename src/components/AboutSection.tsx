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
  { target: 45, suffix: '+', decimals: 0, label: 'Global Regions', subtext: 'Hand-scouted wilderness & urban sanctuaries' },
  { target: 120, suffix: '+', decimals: 0, label: 'Private Havens', subtext: 'Architectural residences reserved exclusively' },
  { target: 99.4, suffix: '%', decimals: 1, label: 'Satisfaction Rate', subtext: 'Verified by seasoned global voyagers' },
  { target: 100, suffix: '%', decimals: 0, label: 'Carbon Offset', subtext: 'Every journey gives back to local ecosystems' },
]

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column — Philosophy Content */}
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-widest">
            <SparklesIcon size={14} className="text-amber-600" /> Our Philosophy
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.05]"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            "We build quiet spaces for those who shape the world."
          </h2>

          <p className="text-base text-neutral-600 leading-relaxed font-sans">
            In an era of relentless noise and hyper-connection, true luxury is no longer about gold leaf or opulent chandeliers. It is about stillness, pristine natural beauty, and undisturbed time with what matters most.
          </p>

          <p className="text-sm text-neutral-500 leading-relaxed">
            Founded in 2022 by a collective of architects, naturalists, and hospitality pioneers, Nādvora operates as a private sanctuary club. We design bespoke, zero-footprint travel experiences that honor local heritage and leave the soul renewed.
          </p>

          {/* Core Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-900 mt-0.5">
                <ShieldCheckIcon size={16} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Absolute Discretion</h4>
                <p className="text-xs text-neutral-500">Unlisted private residences with encrypted guest concierge.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-900 mt-0.5">
                <GlobeIcon size={16} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Ecosystem Regeneration</h4>
                <p className="text-xs text-neutral-500">Direct funding into local forest restoration & ocean conservation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Visual Imagery Grid */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
                  alt="Lakeside Sanctuary"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-neutral-900 text-white p-6 rounded-3xl relative overflow-hidden">
                <QuoteIcon size={32} className="text-neutral-700 absolute top-4 right-4 opacity-40" />
                <p className="text-sm font-serif italic relative z-10 leading-relaxed text-neutral-200" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                  "Nādvora reframed how our family experiences the world. Pure quietude, absolute luxury."
                </p>
                <span className="block mt-3 text-[11px] uppercase tracking-wider text-neutral-400 font-sans">
                  — H. V. K., Tech Founder
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="h-80 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop"
                  alt="Mountain Mist Haven"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Section with Smooth Counting Animation */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-neutral-50 border border-neutral-200/80 rounded-3xl">
        {STATS.map((stat, idx) => (
          <div key={idx} className="text-center sm:text-left space-y-1">
            <span
              className="text-4xl sm:text-5xl font-serif text-neutral-900 block"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                decimals={stat.decimals}
                duration={2200}
              />
            </span>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">{stat.label}</h4>
            <p className="text-xs text-neutral-500">{stat.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
