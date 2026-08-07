import React, { useState, useEffect, useRef } from 'react'
import { SparklesIcon, QuoteIcon, AkkanamIcon, CompassIcon, ShieldCheckIcon, LeafIcon, ArchIcon, ArrowRightIcon } from '../components/Icons'

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

// Akkanam Triad Pillars Data
const AKKANAM_PILLARS = [
  {
    id: 'solitude',
    dotIndex: 0,
    title: 'Primal Solitude',
    subtitle: 'The Apex Dot',
    tagline: 'Undisturbed silence & off-grid architectural retreats',
    description:
      'We curate sanctuaries situated beyond public reach—high alpine ridges, hidden teak forests, and private sea cliffs where true silence allows the mind to expand.',
    icon: CompassIcon,
    accentColor: 'from-amber-500/20 to-amber-600/5',
    borderColor: 'border-amber-500/40',
    dotPositionClass: 'top-0 left-1/2 -translate-x-1/2',
    stats: '100% Unlisted Locations',
  },
  {
    id: 'architecture',
    dotIndex: 1,
    title: 'Architectural Harmony',
    subtitle: 'The Left Base Dot',
    tagline: 'Structures that dissolve into natural topography',
    description:
      'Every property features sustainable, organic design—rammed earth walls, triple-glazed panoramic glass, and solar-integrated timber built to honor local landscape contours.',
    icon: ArchIcon,
    accentColor: 'from-emerald-500/20 to-emerald-600/5',
    borderColor: 'border-emerald-500/40',
    dotPositionClass: 'bottom-0 left-0',
    stats: 'Zero Visual Noise',
  },
  {
    id: 'stewardship',
    dotIndex: 2,
    title: 'Ecosystem Stewardship',
    subtitle: 'The Right Base Dot',
    tagline: 'Leaving ancient wilderness untouched for generations',
    description:
      '5% of every sanctuary booking flows directly into local land trusts, glacial preservation funds, and indigenous timber reforestation programs.',
    icon: LeafIcon,
    accentColor: 'from-teal-500/20 to-teal-600/5',
    borderColor: 'border-teal-500/40',
    dotPositionClass: 'bottom-0 right-0',
    stats: '100% Carbon Negative',
  },
]

const MILESTONES = [
  {
    year: '2022',
    title: 'The Voyagera Genesis',
    desc: 'Founded in Zurich by architects Julian Von Bern and Kiyomi Takahashi to challenge performative luxury travel.',
  },
  {
    year: '2023',
    title: 'Alpine & Kyoto Expansion',
    desc: 'Secured exclusive stewardship over 18 unlisted private residences across the Swiss Alps and Kyoto bamboo groves.',
  },
  {
    year: '2024',
    title: 'Zero-Footprint Charter',
    desc: 'Pledged 5% of net booking revenue to land trusts, planting over 12,500 native trees across protected biomes.',
  },
  {
    year: '2025',
    title: 'The Akkanam Protocol',
    desc: 'Introduced the Akkanam Triad Philosophy standard for noise pollution reduction and ecosystem integrity.',
  },
]

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
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0)
  const activePillar = AKKANAM_PILLARS[activePillarIndex]

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans animate-fade-rise overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. AKKANAM HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Background Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Fine Decorative Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Akkanam Manifesto */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-500/5">
              <AkkanamIcon size={16} className="text-amber-400 animate-pulse" />
              <span>Akkanam Triad Philosophy • அஃகனம்</span>
            </div>

            <h1
              className="text-5xl sm:text-7xl font-serif text-white tracking-tight leading-[1.04]"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Crafting Havens for the <span className="italic text-amber-200">Thoughtful Soul</span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-light">
              Rooted in the ancient Tamil concept of <strong className="text-amber-300 font-normal">Akkanam (ஃ)</strong>—the three dots of balance, solitude, and completeness—Voyagera curates disturbance-free sanctuaries across Earth’s quietest landscapes.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#akkanam-pillars"
                className="px-6 py-3.5 rounded-full bg-amber-400 text-neutral-950 font-semibold text-sm hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20 flex items-center gap-2"
              >
                <span>Explore The 3 Pillars</span>
                <ArrowRightIcon size={16} />
              </a>

              <a
                href="#founder-story"
                className="px-6 py-3.5 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-200 font-medium text-sm hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300"
              >
                Read Founder Manifesto
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Akkanam (ஃ) Emblem Motif */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center p-6 bg-neutral-900/60 rounded-3xl border border-neutral-800 backdrop-blur-xl shadow-2xl">
              
              {/* Triangular Connecting Constellation Lines */}
              <svg className="absolute inset-0 w-full h-full p-12 pointer-events-none" viewBox="0 0 100 100">
                {/* SVG Triangle connecting 3 dots */}
                <polygon
                  points="50,15 15,80 85,80"
                  fill="none"
                  stroke="rgba(245, 158, 11, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
                {/* Active line highlighting current pillar */}
                {activePillarIndex === 0 && (
                  <line x1="50" y1="15" x2="15" y2="80" stroke="rgba(245, 158, 11, 0.8)" strokeWidth="2" />
                )}
                {activePillarIndex === 1 && (
                  <line x1="15" y1="80" x2="85" y2="80" stroke="rgba(16, 185, 129, 0.8)" strokeWidth="2" />
                )}
                {activePillarIndex === 2 && (
                  <line x1="85" y1="80" x2="50" y2="15" stroke="rgba(20, 184, 166, 0.8)" strokeWidth="2" />
                )}
              </svg>

              {/* Central Glowing Badge Label */}
              <div className="text-center z-10 space-y-1">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
                  {activePillar.subtitle}
                </span>
                <h3 
                  className="text-2xl font-serif text-white tracking-wide"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {activePillar.title}
                </h3>
                <span className="inline-block text-[10px] uppercase font-semibold text-neutral-400 bg-neutral-800/90 px-2.5 py-0.5 rounded-full border border-neutral-700">
                  {activePillar.stats}
                </span>
              </div>

              {/* Dot 0: APEX DOT (Primal Solitude) */}
              <button
                onClick={() => setActivePillarIndex(0)}
                onMouseEnter={() => setActivePillarIndex(0)}
                className={`absolute top-6 left-1/2 -translate-x-1/2 group flex flex-col items-center transition-all duration-500 focus:outline-none ${
                  activePillarIndex === 0 ? 'scale-125 z-20' : 'scale-100 opacity-70 hover:opacity-100'
                }`}
                title="Apex Dot: Primal Solitude"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  activePillarIndex === 0 
                    ? 'bg-amber-400 text-neutral-950 ring-4 ring-amber-400/30 shadow-amber-400/50' 
                    : 'bg-neutral-800 text-amber-400 border border-neutral-700'
                }`}>
                  <AkkanamIcon size={20} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Solitude
                </span>
              </button>

              {/* Dot 1: LEFT BASE DOT (Architectural Harmony) */}
              <button
                onClick={() => setActivePillarIndex(1)}
                onMouseEnter={() => setActivePillarIndex(1)}
                className={`absolute bottom-6 left-8 group flex flex-col items-center transition-all duration-500 focus:outline-none ${
                  activePillarIndex === 1 ? 'scale-125 z-20' : 'scale-100 opacity-70 hover:opacity-100'
                }`}
                title="Left Base Dot: Architectural Harmony"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  activePillarIndex === 1 
                    ? 'bg-emerald-400 text-neutral-950 ring-4 ring-emerald-400/30 shadow-emerald-400/50' 
                    : 'bg-neutral-800 text-emerald-400 border border-neutral-700'
                }`}>
                  <ArchIcon size={20} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Architecture
                </span>
              </button>

              {/* Dot 2: RIGHT BASE DOT (Ecosystem Stewardship) */}
              <button
                onClick={() => setActivePillarIndex(2)}
                onMouseEnter={() => setActivePillarIndex(2)}
                className={`absolute bottom-6 right-8 group flex flex-col items-center transition-all duration-500 focus:outline-none ${
                  activePillarIndex === 2 ? 'scale-125 z-20' : 'scale-100 opacity-70 hover:opacity-100'
                }`}
                title="Right Base Dot: Ecosystem Stewardship"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  activePillarIndex === 2 
                    ? 'bg-teal-400 text-neutral-950 ring-4 ring-teal-400/30 shadow-teal-400/50' 
                    : 'bg-neutral-800 text-teal-400 border border-neutral-700'
                }`}>
                  <LeafIcon size={20} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Stewardship
                </span>
              </button>

            </div>

            <p className="text-xs text-neutral-400 text-center mt-4 font-mono tracking-wide">
              ✦ Click or hover any dot to activate its Akkanam Pillar
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE PILLARS OF AKKANAM CARDS */}
      {/* ========================================================================= */}
      <section id="akkanam-pillars" className="py-16 px-6 max-w-7xl mx-auto border-t border-neutral-800/80">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            The Three Sacred Points of Equilibrium
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-white tracking-tight"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            The Akkanam Triad Standard
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            Every sanctuary in our collection must satisfy all three nodes of the Akkanam emblem before being made available to Voyagera private members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AKKANAM_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            const isActive = activePillarIndex === idx

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarIndex(idx)}
                className={`cursor-pointer group p-8 rounded-3xl border backdrop-blur-md transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? `bg-gradient-to-b ${pillar.accentColor} ${pillar.borderColor} shadow-2xl ring-1 ring-white/10 scale-[1.02]`
                    : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                {/* Background Number Watermark */}
                <span className="absolute top-4 right-6 text-6xl font-serif text-neutral-800/40 select-none font-bold">
                  0{idx + 1}
                </span>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl border ${
                      isActive ? 'bg-neutral-950 border-amber-500/40 text-amber-300' : 'bg-neutral-800 border-neutral-700 text-neutral-300'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-serif text-white mb-2"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-300/90 mb-3">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-mono text-neutral-400">
                    {pillar.stats}
                  </span>
                  <span className={`text-xs font-semibold flex items-center gap-1 transition-transform duration-300 ${
                    isActive ? 'text-amber-300 translate-x-1' : 'text-neutral-500 group-hover:text-white'
                  }`}>
                    <span>View Detail</span>
                    <ArrowRightIcon size={14} />
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FOUNDER MANIFESTO & STORY */}
      {/* ========================================================================= */}
      <section id="founder-story" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-900/90 rounded-3xl p-8 sm:p-14 border border-neutral-800 relative overflow-hidden shadow-2xl">
          <QuoteIcon size={120} className="text-neutral-800/40 absolute top-6 right-8 pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <SparklesIcon size={14} /> Co-Founders' Dispatch
            </span>

            <h2
              className="text-3xl sm:text-5xl font-serif text-white leading-tight"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              "We built Voyagera to be the anti-dote to performative, noisy luxury."
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              When we started Voyagera in 2022, we observed a troubling shift: high-end travel had become performative. Five-star hotels felt crowded, itineraries felt scripted, and true stillness was impossible to purchase.
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Our response was the <strong className="text-white font-normal">Akkanam Philosophy</strong>. We negotiated exclusive private access to unlisted architectural sanctuaries around the world—places where you hear only the wind through bamboo or mountain mist against triple-glazed glass.
            </p>

            <div className="pt-6 flex items-center gap-4 border-t border-neutral-800">
              <div className="w-12 h-12 rounded-full bg-amber-400 text-neutral-950 font-serif flex items-center justify-center text-lg font-bold">
                V
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Julian Von Bern & Kiyomi Takahashi</h4>
                <p className="text-xs text-neutral-400 font-mono">Co-Founders, Voyagera Private Sanctuaries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. IMPACT & CONSERVATION STATS */}
      {/* ========================================================================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-neutral-900/90 rounded-3xl p-8 sm:p-12 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
              <ShieldCheckIcon size={16} /> 100% Zero-Footprint Guarantee
            </span>

            <h2
              className="text-3xl sm:text-4xl font-serif text-white"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Protecting the Landscapes We Inhabit
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Every private booking directly contributes 5% of net proceeds to local land trusts, forest regeneration in Kyoto, and glacial monitoring in Iceland. We ensure our journeys leave zero physical trace.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-4 text-center">
            
            <div className="p-6 bg-neutral-950/80 rounded-2xl border border-neutral-800">
              <span 
                className="text-3xl sm:text-4xl font-serif text-amber-400 block mb-1" 
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter
                  target={12500}
                  suffix="+"
                  duration={2200}
                  formatter={(val) => Math.floor(val).toLocaleString()}
                />
              </span>
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Trees Planted</span>
            </div>

            <div className="p-6 bg-neutral-950/80 rounded-2xl border border-neutral-800">
              <span 
                className="text-3xl sm:text-4xl font-serif text-emerald-400 block mb-1" 
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter target={100} suffix="%" duration={2000} />
              </span>
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Carbon Offset</span>
            </div>

            <div className="p-6 bg-neutral-950/80 rounded-2xl border border-neutral-800">
              <span 
                className="text-3xl sm:text-4xl font-serif text-teal-400 block mb-1" 
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter target={48} suffix="+" duration={2000} />
              </span>
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Private Havens</span>
            </div>

            <div className="p-6 bg-neutral-950/80 rounded-2xl border border-neutral-800">
              <span 
                className="text-3xl sm:text-4xl font-serif text-amber-300 block mb-1" 
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter 
                  target={2.4} 
                  suffix="M+" 
                  decimals={1}
                  duration={2200} 
                  formatter={(val) => `$${val.toFixed(1)}`}
                />
              </span>
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">Land Trust Fund</span>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VOYAGERA GENESIS TIMELINE */}
      {/* ========================================================================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-neutral-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-mono">
            Heritage & Evolution
          </span>
          <h2
            className="text-4xl font-serif text-white"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            The Voyagera Genesis
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {MILESTONES.map((m, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl hover:border-neutral-700 transition-all duration-300 relative"
            >
              <span className="text-2xl font-mono font-bold text-amber-400 block mb-2">
                {m.year}
              </span>
              <h3 
                className="text-xl font-serif text-white mb-2"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                {m.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. LEADERSHIP & CURATOR TEAM */}
      {/* ========================================================================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-neutral-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-mono">
            Our Concierge & Curators
          </span>
          <h2
            className="text-4xl font-serif text-white"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Guided by Master Curators
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="group bg-neutral-900/80 border border-neutral-800 rounded-3xl overflow-hidden shadow-md hover:border-amber-500/40 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3
                    className="text-2xl font-serif text-white"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {member.name}
                  </h3>
                  <span className="inline-block mt-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[11px] font-mono tracking-wide border border-amber-500/20">
                    {member.role}
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. MEMBER CALL TO ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-amber-500/10 via-neutral-900 to-amber-500/10 border border-amber-500/30 p-10 sm:p-16 rounded-3xl backdrop-blur-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-mono border border-amber-500/20">
            <AkkanamIcon size={14} /> Sanctuary Concierge Desk
          </div>

          <h2
            className="text-4xl sm:text-6xl font-serif text-white"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Ready for Undisturbed Stillness?
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto font-light">
            Connect with our master curators to design your bespoke retreat across our 48 unlisted private sanctuaries.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href="mailto:concierge@voyagera-expeditions.com"
              className="px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-bold text-sm hover:bg-amber-300 transition-all duration-300 shadow-xl shadow-amber-400/20"
            >
              Request Private Access
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage
