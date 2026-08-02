import React, { useState, useEffect, useRef } from 'react'
import { SparklesIcon, QuoteIcon } from '../components/Icons'

interface CounterProps {
  target: number
  suffix?: string
  decimals?: number
  duration?: number
  formatter?: (val: number) => string
}

const AnimatedCounter: React.FC<CounterProps> = ({
  target,
  suffix = '',
  decimals = 0,
  duration = 2000,
  formatter,
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

            // Smooth easeOutExpo formula
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

  const formattedVal = formatter ? formatter(count) : count.toFixed(decimals)

  return (
    <span ref={ref}>
      {formattedVal}
      {suffix}
    </span>
  )
}

const TEAM = [
  {
    name: 'Julian Von Bern',
    role: 'Co-Founder & Chief Architect',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: 'Former principal at ETH Zurich Spatial Lab. 15+ years designing high-altitude alpine sanctuaries.',
  },
  {
    name: 'Kiyomi Takahashi',
    role: 'Co-Founder & Cultural Curator',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    bio: 'Kyoto native with deep lineage in Japanese tea ceremony, garden design, and historic estate preservation.',
  },
  {
    name: 'Dr. Alistair Sterling',
    role: 'Head of Expedition & Wilderness Safety',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    bio: 'Veteran polar explorer and ecologist. Guiding private expeditions across Chilean fjords and Iceland glaciers.',
  },
  {
    name: 'Camille Laurent',
    role: 'Gastronomy & Sommelier Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: '3-Star Michelin alumna specializing in farm-to-table foraging and bio-dynamic wine pairing.',
  },
]

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white text-neutral-900 animate-fade-rise">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-widest mb-4">
          <SparklesIcon size={14} className="text-amber-600" /> The Voyagera Genesis
        </span>
        <h1
          className="text-5xl sm:text-7xl font-serif text-neutral-900 max-w-4xl mx-auto leading-[1.05]"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Crafting Havens for the Thoughtful Soul
        </h1>
        <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mt-6 leading-relaxed">
          Founded on the principle that true luxury is undisturbed stillness, untouched nature, and effortless human connection.
        </p>
      </section>

      {/* Founder Letter & Vision */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-neutral-50 rounded-3xl p-8 sm:p-14 border border-neutral-200/80 relative overflow-hidden">
          <QuoteIcon size={96} className="text-neutral-200/60 absolute top-6 right-6 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2
              className="text-3xl sm:text-4xl font-serif text-neutral-900"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              "We built Voyagera to be the anti-dote to noisy luxury."
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
              When we started Voyagera in 2022, we observed a troubling trend: luxury travel had become performative. Five-star hotels felt crowded, itineraries felt scripted, and true solitude was almost impossible to purchase.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
              Our response was radical simplicity. We negotiated exclusive private access to unlisted architectural residences around the world — places where you hear only the wind through bamboo or mountain mist against triple-glazed glass.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-900 text-white font-serif flex items-center justify-center text-lg">
                V
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Julian & Kiyomi</h4>
                <p className="text-xs text-neutral-400">Co-Founders, Voyagera Private Sanctuaries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Offset & Conservation Pledge */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              100% Zero-Footprint Guarantee
            </span>
            <h2
              className="text-3xl sm:text-4xl font-serif text-white"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Protecting the Landscapes We Inhabit
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Every private booking directly contributes 5% of net proceeds to local land trusts, forest regeneration in Kyoto, and glacial monitoring in Iceland. We ensure our journeys leave zero physical trace and leave ecosystems stronger than we found them.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-neutral-800 rounded-2xl border border-neutral-700">
              <span className="text-3xl font-serif text-amber-300 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <AnimatedCounter
                  target={12500}
                  suffix="+"
                  duration={2200}
                  formatter={(val) => Math.floor(val).toLocaleString()}
                />
              </span>
              <span className="text-[11px] text-neutral-400 font-sans uppercase tracking-wider">Trees Planted</span>
            </div>
            <div className="p-4 bg-neutral-800 rounded-2xl border border-neutral-700">
              <span className="text-3xl font-serif text-amber-300 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <AnimatedCounter target={100} suffix="%" duration={2000} />
              </span>
              <span className="text-[11px] text-neutral-400 font-sans uppercase tracking-wider">Carbon Offset</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Curator Team */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Our Concierge & Curators
          </span>
          <h2
            className="text-4xl font-serif text-neutral-900"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Guided by Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="group bg-neutral-50 border border-neutral-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3
                    className="text-2xl font-serif text-neutral-900"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {member.name}
                  </h3>
                  <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-semibold tracking-wide">
                    {member.role}
                  </span>
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
