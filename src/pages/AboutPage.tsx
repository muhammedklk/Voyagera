import React, { useState, useEffect, useRef } from 'react'
import {
  SparklesIcon,
  QuoteIcon,
  AkkanamIcon,
  ShieldCheckIcon,
  LeafIcon,
  FeatherIcon,
  AwardIcon,
  ArrowRightIcon,
  CompassIcon,
  CheckIcon,
  StarIcon,
  XIcon
} from '../components/Icons'

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

// Data for Team Members
const TEAM = [
  {
    name: 'Julian Von Bern',
    role: 'Co-Founder & Chief Architect',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: 'Former principal at ETH Zurich Spatial Lab. 15+ years designing high-altitude alpine sanctuaries with zero ecological impact.',
    specialty: 'High-Altitude Timber & Glass Architecture',
    quote: 'Architecture should not conquer nature; it should serve as an invisible frame to its silent majesty.'
  },
  {
    name: 'Kiyomi Takahashi',
    role: 'Co-Founder & Cultural Curator',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    bio: 'Kyoto native with deep lineage in Japanese tea ceremony, zen garden design, and historic heritage estate preservation.',
    specialty: 'Wabi-Sabi Aesthetics & Tea Rituals',
    quote: 'True luxury is found in the stillness between moments — where stillness becomes poetry.'
  },
  {
    name: 'Dr. Alistair Sterling',
    role: 'Head of Wilderness & Expedition',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    bio: 'Veteran polar explorer and ecologist. Guiding private ultra-exclusive expeditions across Chilean fjords and Iceland glaciers.',
    specialty: 'Glacial Ecology & High-Altitude Safety',
    quote: 'To step into untouched wilderness is to remember humanity’s original connection to the cosmos.'
  },
  {
    name: 'Camille Laurent',
    role: 'Gastronomy & Sommelier Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: '3-Star Michelin alumna specializing in farm-to-table wild foraging, hyper-local gastronomy, and bio-dynamic wine pairing.',
    specialty: 'Hyper-Local Botanical Foraging',
    quote: 'Every dish tells the geological and botanical history of the soil from which it sprang.'
  },
]

// Akkanam Triad Pillars
const AKKANAM_PILLARS = [
  {
    id: 'aram',
    tamilDot: 'ஃ₁',
    title: 'Aram (அறம்)',
    subtitle: 'Earth & Ecosystem Conservation',
    icon: LeafIcon,
    accentColor: 'from-emerald-500 to-teal-700',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    description: 'The foundation dot of Akkanam. Every sanctuary directly funds 5% of net booking revenues into wild land trusts, Kyoto forest protection, and Arctic glacier preservation.',
    highlights: [
      '100% Net Zero Carbon Footprint Guarantee',
      '5% Proceeds to Indigenous Habitat Protection',
      'Solar-Powered Off-Grid Microstructures'
    ],
    image: 'https://images.unsplash.com/photo-1511497584788-8767611136f6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'porul',
    tamilDot: 'ஃ₂',
    title: 'Porul (பொருள்)',
    subtitle: 'Architectural Solitude & Craftsmanship',
    icon: ShieldCheckIcon,
    accentColor: 'from-amber-400 to-amber-600',
    badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    description: 'The structural dot of Akkanam. Unlisted architectural residences made of local charred larch timber, triple-glazed acoustic glass, and hand-carved stone.',
    highlights: [
      'Acoustically Isolated Silent Living Spaces',
      'Unlisted Private Estates (No Public Listings)',
      'Natural Local Materials & Organic Design'
    ],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'inbam',
    tamilDot: 'ஃ₃',
    title: 'Inbam (இன்பம்)',
    subtitle: 'Curated Transcendence & Harmony',
    icon: FeatherIcon,
    accentColor: 'from-amber-300 to-orange-500',
    badgeColor: 'bg-orange-500/10 text-orange-300 border-orange-500/30',
    description: 'The spiritual dot of Akkanam. Unscripted, effortless experiences tailored to individual desires — from private stargazing to zen master tea ceremonies.',
    highlights: [
      '24/7 Dedicated Private Master Curator',
      'Bespoke Michelin Wild Foraging Dinners',
      'Private High-Altitude Stargazing Labs'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
  }
]

// Timeline Milestones
const TIMELINE = [
  {
    year: '2022',
    title: 'The Founding Spark in Zurich & Kyoto',
    description: 'Julian Von Bern and Kiyomi Takahashi combine architectural mastery with Japanese sanctuary philosophies to create Voyagera.'
  },
  {
    year: '2023',
    title: 'First Alpine Sanctuary Launch',
    description: 'Unveiled the Swiss Alpine Glass Haven in Zermatt — setting the gold standard for silent off-grid luxury.'
  },
  {
    year: '2024',
    title: 'The Akkanam (ஃ) 100% Zero-Footprint Pledge',
    description: 'Formalized our 3-dot sustainability charter, pledging 5% of all revenues to glacier protection and Kyoto bamboo forest restoration.'
  },
  {
    year: '2025',
    title: 'Global Expansion to Patagonia & Iceland',
    description: 'Expanded private unlisted sanctuary portfolio across 15 breathtaking global wilderness locations.'
  },
  {
    year: '2026',
    title: 'The Future of Thoughtful Travel',
    description: 'Introducing bespoke private stargazing labs, bio-dynamic gastronomy, and AI-curated custom itineraries.'
  }
]

const AboutPage: React.FC = () => {
  const [activeDot, setActiveDot] = useState<number>(0) // 0, 1, 2 for Akkanam dots
  const [selectedCurator, setSelectedCurator] = useState<typeof TEAM[0] | null>(null)

  return (
    <div className="bg-neutral-950 text-white min-h-screen animate-fade-rise selection:bg-amber-500 selection:text-neutral-900">

      {/* ========================================================================= */}
      {/* 1. INNER PAGE HERO SECTION WITH AKKANAM (ஃ) MOTIF */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-neutral-800/60 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        
        {/* Background Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle Background Geometric Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">

          {/* AKKANAM (ஃ) HERO EMBLEM BADGE */}
          <div className="inline-flex flex-col items-center mb-8 group cursor-pointer" onClick={() => setActiveDot((prev) => (prev + 1) % 3)}>
            <div className="relative p-4 rounded-full bg-neutral-900/80 border border-amber-500/30 backdrop-blur-xl shadow-2xl hover:border-amber-400 transition-all duration-500 group-hover:scale-105">
              {/* Glowing Aura around Akkanam Icon */}
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-md group-hover:blur-lg transition-all" />
              
              {/* Akkanam Symbol (ஃ) SVG */}
              <AkkanamIcon size={44} className="text-amber-400 relative z-10 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
            </div>

            <div className="mt-3 flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>THE AKKANAM (ஃ) TRIAD STANDARD</span>
            </div>
          </div>

          {/* HERO HEADLINE */}
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.02] max-w-5xl mx-auto drop-shadow-sm"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Guided by <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">Akkanam (ஃ)</span> — Sacred Balance in Solitude
          </h1>

          {/* HERO SUBTITLE */}
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto mt-6 leading-relaxed font-sans font-light">
            Rooted in the ancient Tamil concept of <strong className="text-amber-300 font-normal">Akkanam (ஃ)</strong> — three sacred dots representing <span className="text-emerald-400 font-medium">Aram (Nature & Conservation)</span>, <span className="text-amber-400 font-medium">Porul (Architectural Solitude)</span>, and <span className="text-orange-400 font-medium">Inbam (Curated Joy)</span>. We craft unlisted architectural havens undisturbed by noisy luxury.
          </p>

          {/* INTERACTIVE 3-DOT PILLAR SELECTOR TABS */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
            {AKKANAM_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              const isActive = activeDot === idx
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveDot(idx)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 font-semibold shadow-lg shadow-amber-500/20 scale-[1.02]'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  <span className="font-mono font-bold text-xs">{pillar.tamilDot}</span>
                  <Icon size={16} />
                  <span>{pillar.title}</span>
                </button>
              )
            })}
          </div>

          {/* DYNAMIC HERO STATS BAR */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center hover:border-amber-500/40 transition-colors">
              <span className="text-3xl sm:text-4xl font-serif text-amber-300 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <AnimatedCounter target={100} suffix="%" duration={2000} />
              </span>
              <span className="text-[11px] text-neutral-400 font-sans uppercase tracking-widest mt-1 block">Zero Carbon Footprint</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center hover:border-amber-500/40 transition-colors">
              <span className="text-3xl sm:text-4xl font-serif text-amber-300 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <AnimatedCounter target={15} suffix="+" duration={1800} />
              </span>
              <span className="text-[11px] text-neutral-400 font-sans uppercase tracking-widest mt-1 block">Unlisted Havens</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center hover:border-amber-500/40 transition-colors">
              <span className="text-3xl sm:text-4xl font-serif text-amber-300 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <AnimatedCounter
                  target={12500}
                  suffix="+"
                  duration={2200}
                  formatter={(val) => Math.floor(val).toLocaleString()}
                />
              </span>
              <span className="text-[11px] text-neutral-400 font-sans uppercase tracking-widest mt-1 block">Trees Planted</span>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm text-center hover:border-amber-500/40 transition-colors">
              <div className="flex items-center justify-center gap-1 text-amber-400 text-2xl font-serif" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <span>4.98</span>
                <StarIcon size={18} className="fill-amber-400 text-amber-400 mb-0.5" />
              </div>
              <span className="text-[11px] text-neutral-400 font-sans uppercase tracking-widest mt-1 block">Voyager Rating</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE AKKANAM (ஃ) TRIAD PHILOSOPHY SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <AkkanamIcon size={14} className="text-amber-400" />
            <span>The Three Sacred Dots</span>
          </div>
          <h2
            className="text-4xl sm:text-6xl font-serif text-white leading-tight"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            The Akkanam (ஃ) Triad Philosophy
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Just as the Tamil letter Akkanam ஃ requires all three dots to achieve structural balance, Voyagera unites ecosystem protection, architectural solitude, and bespoke human transcendence.
          </p>
        </div>

        {/* 3-CARD INTERACTIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AKKANAM_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            const isSelected = activeDot === idx
            return (
              <div
                key={pillar.id}
                onClick={() => setActiveDot(idx)}
                className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-400 bg-neutral-900 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-400/40 -translate-y-2'
                    : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:-translate-y-1'
                }`}
              >
                {/* Top Image Banner */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  
                  {/* Tamil Dot Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800 text-xs font-mono text-amber-300 backdrop-blur-md">
                    <span>{pillar.tamilDot}</span>
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    <span>Dot {idx + 1}</span>
                  </div>

                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-amber-400 backdrop-blur-md">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-3 ${pillar.badgeColor}`}>
                      {pillar.subtitle}
                    </span>
                    <h3
                      className="text-3xl font-serif text-white group-hover:text-amber-300 transition-colors"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mt-3 font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800/80">
                    {pillar.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckIcon size={14} className="text-amber-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Selection Indicator */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                    <span>{isSelected ? 'Active Pillar Focus' : 'Explore Pillar'}</span>
                    <ArrowRightIcon size={16} className={`transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FOUNDER LETTER & GENESIS STORY */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-neutral-900 rounded-3xl p-8 sm:p-14 border border-neutral-800 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
          <QuoteIcon size={120} className="text-neutral-800/40 absolute top-6 right-6 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <SparklesIcon size={14} /> The Genesis Story (2022)
            </div>

            <h2
              className="text-3xl sm:text-5xl font-serif text-white leading-tight"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              "We built Voyagera to be the antidote to noisy, performative luxury."
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              <p>
                When we founded Voyagera in 2022, luxury hospitality had become performative. Five-star hotels felt crowded with influencers, itineraries were overly scripted, and true undisturbed solitude was almost impossible to find.
              </p>

              <p>
                Our answer was radical simplicity grounded in the Tamil concept of <strong className="text-amber-300 font-normal">Akkanam (ஃ)</strong>. We negotiated exclusive private access to unlisted architectural sanctuaries — places where you hear only mountain wind through bamboo or quiet mist settling on triple-glazed glass.
              </p>

              <p>
                Every property in our portfolio is chosen because it honours the triad: absolute ecological respect, uncompromising spatial artistry, and deep personal rejuvenation.
              </p>
            </div>

            {/* Founder Signatures */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-serif flex items-center justify-center text-xl font-bold">
                  ஃ
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Julian Von Bern & Kiyomi Takahashi</h4>
                  <p className="text-xs text-neutral-400">Co-Founders, Voyagera Private Sanctuaries</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-neutral-400 bg-neutral-950/60 px-4 py-2 rounded-xl border border-neutral-800">
                <AwardIcon size={16} className="text-amber-400" />
                <span>Certified B-Corp & 100% Zero-Trace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE GENESIS TIMELINE (2022 - 2026) */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Our Evolution
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-white"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            The Voyagera Chronology
          </h2>
        </div>

        <div className="relative border-l border-neutral-800 ml-4 sm:ml-32 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300" />
              
              {/* Year Marker for Large Screens */}
              <span className="hidden sm:block absolute -left-28 top-0 text-sm font-mono font-bold text-amber-400">
                {item.year}
              </span>

              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <span className="sm:hidden text-xs font-mono font-bold text-amber-400 block mb-1">
                  {item.year}
                </span>
                <h3
                  className="text-2xl font-serif text-white group-hover:text-amber-300 transition-colors"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MASTER CURATORS & LEADERSHIP TEAM GRID */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Our Concierge & Visionaries
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-white"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Guided by World Masters
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Architects, cultural tea masters, polar explorers, and Michelin foragers ensuring your journey is extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCurator(member)}
              className="group bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden bg-neutral-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />
                
                {/* Specialty Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800 text-[10px] font-semibold tracking-wider text-amber-300 backdrop-blur-md">
                  {member.specialty}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3
                    className="text-2xl font-serif text-white group-hover:text-amber-300 transition-colors"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {member.name}
                  </h3>
                  <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-semibold tracking-wide">
                    {member.role}
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans mt-3 line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800/80 text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center justify-center gap-1">
                  <span>View Curator Profile</span>
                  <ArrowRightIcon size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CURATOR DETAIL MODAL */}
      {/* ========================================================================= */}
      {selectedCurator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-fade-rise">
          <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedCurator(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <XIcon size={20} />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img
                src={selectedCurator.image}
                alt={selectedCurator.name}
                className="w-32 h-32 rounded-2xl object-cover border border-neutral-700"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/20">
                  {selectedCurator.role}
                </span>
                <h3
                  className="text-3xl font-serif text-white"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {selectedCurator.name}
                </h3>
                <p className="text-xs text-amber-400 font-mono">Specialty: {selectedCurator.specialty}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-800 space-y-4 text-neutral-300 text-xs sm:text-sm leading-relaxed">
              <p>{selectedCurator.bio}</p>
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 italic text-amber-200">
                "{selectedCurator.quote}"
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedCurator(null)}
                className="px-6 py-2 rounded-xl bg-amber-500 text-neutral-950 font-semibold text-xs hover:bg-amber-400 transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. CALL TO ACTION - EXPERIENCE THE AKKANAM STANDARD */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0,transparent_70%)] pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest">
            <AkkanamIcon size={14} /> Private Member Access
          </div>

          <h2
            className="text-4xl sm:text-6xl font-serif text-white max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Ready to Experience the Akkanam (ஃ) Standard?
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Connect directly with our master curators to request private access to unlisted architectural sanctuaries around the globe.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reachus"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-sm transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105"
            >
              <span>Inquire for Sanctuary Access</span>
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage
