import React, { useState, useEffect, useRef } from 'react'
import { PageId } from '../components/Navbar'
import {
  SparklesIcon,
  QuoteIcon,
  CompassIcon,
  GlobeIcon,
  ShieldCheckIcon,
  LeafIcon,
  BuildingIcon,
  AwardIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UsersIcon,
  StarIcon,
  XIcon,
} from '../components/Icons'

interface CounterProps {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  formatter?: (val: number) => string
}

const AnimatedCounter: React.FC<CounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2200,
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
      {prefix}
      {formattedVal}
      {suffix}
    </span>
  )
}

interface TeamMember {
  name: string
  role: string
  category: 'Leadership' | 'Expeditions' | 'Culture'
  image: string
  bio: string
  quote: string
  location: string
  specialty: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Julian Von Bern',
    role: 'Co-Founder & Chief Architect',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: 'Former principal at ETH Zurich Spatial Lab. 15+ years designing high-altitude alpine sanctuaries with zero ecological impact.',
    quote: 'True luxury is not about ornamentation; it is the privilege of undisturbed solitude framed by pure architecture.',
    location: 'Engadin, Switzerland',
    specialty: 'Sustainable High-Altitude Design',
  },
  {
    name: 'Kiyomi Takahashi',
    role: 'Co-Founder & Cultural Curator',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    bio: 'Kyoto native with deep lineage in Japanese tea ceremony, zen garden design, and historic estate preservation.',
    quote: 'We curate spaces where time slows down, honoring ancestral craftsmanship and mindful stillness.',
    location: 'Kyoto, Japan',
    specialty: 'Historic Estate Preservation',
  },
  {
    name: 'Dr. Alistair Sterling',
    role: 'Head of Wilderness Expeditions',
    category: 'Expeditions',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    bio: 'Veteran polar explorer and glaciologist. Guiding private expeditions across Chilean fjords, Iceland glaciers, and Svalbard.',
    quote: 'Wilderness is not a place to conquer; it is a sanctuary to listen, respect, and reconnect.',
    location: 'Reykjavik, Iceland',
    specialty: 'Polar Navigation & Conservation',
  },
  {
    name: 'Camille Laurent',
    role: 'Gastronomy & Farm Director',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: '3-Star Michelin alumna specializing in wild foraging, organic estate agriculture, and biodynamic wine pairing.',
    quote: 'Every meal in our sanctuaries tells the story of the surrounding soil, flora, and season.',
    location: 'Provence, France',
    specialty: 'Wild Foraging & Farm-to-Table',
  },
]

const TIMELINE_DATA = [
  {
    year: '2022',
    title: 'The Founding Principle',
    badge: 'Genesis',
    description:
      'Frustrated by noisy, overcrowded resort travel, Julian & Kiyomi acquired 3 off-market alpine sanctuaries in Switzerland & Kyoto, establishing the anti-dote to performative luxury.',
    metrics: '3 Initial Havens • 100% Off-Market Access',
  },
  {
    year: '2023',
    title: 'Architectural Curation',
    badge: 'Expansion',
    description:
      'Expanded our global portfolio to 14 hand-curated private estates. Formed strategic partnerships with regional land trusts in Iceland and Norwegian fjords.',
    metrics: '14 Sanctuaries • 6 Countries Certified',
  },
  {
    year: '2024',
    title: 'Zero-Trace Guarantee',
    badge: 'Sustainability',
    description:
      'Instituted our 100% Zero-Trace Guarantee, directing 5% of all net booking proceeds toward direct habitat restoration and carbon micro-offsetting.',
    metrics: '12,500+ Trees Planted • 100% Offset',
  },
  {
    year: '2025',
    title: 'Bespoke Sanctuary Network',
    badge: 'Present Day',
    description:
      'Operating 24+ ultra-private architectural sanctuaries across 12 pristine regions worldwide, served by dedicated private concierges.',
    metrics: '24+ Sanctuaries • 99.4% Satisfaction Rate',
  },
]

const PILLARS = [
  {
    id: 'architecture',
    icon: BuildingIcon,
    title: 'Architectural Integrity',
    subtitle: 'Spaces designed to harmonally melt into untouched topography.',
    detail:
      'Each sanctuary is selected or built with strict architectural standards — using raw local stone, charred cedar, and floor-to-ceiling glass that turns the landscape into living canvas.',
  },
  {
    id: 'privacy',
    icon: ShieldCheckIcon,
    title: 'Absolute Solitude',
    subtitle: 'Off-grid sanctuaries with zero light pollution and zero noise.',
    detail:
      'We enforce total privacy for high-profile voyagers. Private helicopter landing zones, encrypted communications, and unlisted physical coordinates ensure complete tranquility.',
  },
  {
    id: 'conservation',
    icon: LeafIcon,
    title: 'Zero-Footprint Pledge',
    subtitle: 'Leaving ecosystems stronger than we found them.',
    detail:
      '5% of every reservation is funneled directly into local land trusts, native forest regeneration, and ocean preservation projects in the sanctuary’s host country.',
  },
  {
    id: 'concierge',
    icon: CompassIcon,
    title: 'Bespoke Curation',
    subtitle: 'Tailored itineraries with Michelin-grade dining and master guides.',
    detail:
      'From private stargazing sessions with astrophysicists to farm-to-table dining prepared by local culinary masters, every detail is crafted around your personal rhythm.',
  },
]

const PRESS_QUOTES = [
  {
    publication: 'Architectural Digest',
    quote: 'Nattuvazhi has quietly redefined what luxury means in the 21st century: pure stillness framed by extraordinary architecture.',
    author: 'Elena Rostova, Senior Editor',
  },
  {
    publication: 'Wallpaper* Magazine',
    quote: 'The antithesis of grand hotels — an intimate portfolio of unlisted sanctuaries where design meets wilderness.',
    author: 'Marcus Vance, Design Critic',
  },
  {
    publication: 'Robb Report',
    quote: 'For those who seek silence over spectacle, Nattuvazhi’s private sanctuaries offer an unparalleled retreat for the soul.',
    author: 'Jonathan Sterling, Luxury Travel Editor',
  },
  {
    publication: 'Condé Nast Traveler',
    quote: 'A masterclass in sustainable, eco-conscious private travel. Every sanctuary feels like a secret world.',
    author: 'Sophia Chen, Global Destinations',
  },
]

interface AboutPageProps {
  onNavigate?: (page: PageId) => void
}

const HERO_SANCTUARIES = [
  {
    id: 'alpine',
    title: 'Engadin Alpine Haven',
    location: 'Swiss Alps • 2,100m Altitude',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop',
    tag: 'Architectural Sanctuary',
  },
  {
    id: 'kyoto',
    title: 'Arashiyama Zen Estate',
    location: 'Kyoto, Japan • Bamboo Groves',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000&auto=format&fit=crop',
    tag: 'Historic Heritage',
  },
  {
    id: 'fjord',
    title: 'Reykjavik Glass Lodge',
    location: 'Iceland • Glacial Fjord',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
    tag: 'Wilderness Solitude',
  },
]

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [heroBgIndex, setHeroBgIndex] = useState(0)
  const [activeYear, setActiveYear] = useState('2025')
  const [activeTeamFilter, setActiveTeamFilter] = useState<'All' | 'Leadership' | 'Expeditions' | 'Culture'>('All')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [selectedPillar, setSelectedPillar] = useState<(typeof PILLARS)[0] | null>(null)
  const [activePress, setActivePress] = useState(0)
  const [showFullLetter, setShowFullLetter] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const currentHeroSanctuary = HERO_SANCTUARIES[heroBgIndex]

  const filteredTeam =
    activeTeamFilter === 'All'
      ? TEAM
      : TEAM.filter((member) => member.category === activeTeamFilter)

  const activeTimelineItem = TIMELINE_DATA.find((t) => t.year === activeYear) || TIMELINE_DATA[3]

  return (
    <div className="bg-stone-50/40 text-stone-900 min-h-screen animate-fade-rise selection:bg-amber-100 selection:text-amber-900">
      {/* 
        ========================================================================
        1. REDESIGNED INNER PAGE HERO SECTION WITH BG IMAGE SWITCHER (LIGHT THEME)
        ========================================================================
      */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-between">
        {/* Dynamic Background Image with Smooth Light Gradient Overlay */}
        <div className="absolute inset-0 z-0 transition-opacity duration-1000">
          <img
            key={currentHeroSanctuary.id}
            src={currentHeroSanctuary.image}
            alt={currentHeroSanctuary.title}
            className="w-full h-full object-cover object-center filter brightness-105 contrast-[0.96] transition-all duration-1000 scale-105"
          />
          {/* Light Theme Atmospheric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50/95 via-stone-50/85 to-stone-50/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-stone-50" />
          <div className="absolute inset-0 bg-radial-at-c from-amber-50/30 via-transparent to-transparent pointer-events-none" />

          {/* Subtle Grid Lines Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#1c1917 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        {/* Main Hero Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full my-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-medium mb-8">
            <span
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-amber-800 cursor-pointer transition-colors"
            >
              Home
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-amber-900 font-semibold">About Nattuvazhi</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Glowing Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm text-stone-800 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
                </span>
                <span className="font-semibold uppercase tracking-wider text-[11px] text-amber-900">
                  The Nattuvazhi Genesis & Story
                </span>
              </div>

              {/* Display Headline */}
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.06] tracking-tight"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                Where Pure Architecture Meets Undisturbed Solitude
              </h1>

              {/* Subtitle Paragraph */}
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed font-sans font-light">
                Founded on the belief that true luxury is not performative noise, but the rare privilege of undisturbed stillness, pristine nature, and deep architectural harmony.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const elem = document.getElementById('founder-letter')
                    elem?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2.5 group"
                >
                  <span>Explore Heritage Story</span>
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="px-7 py-4 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-stone-300 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs shadow-sm animate-pulse">
                    ▶
                  </div>
                  <span>Watch Brand Film</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Glass Viewfinder Card */}
            <div className="lg:col-span-5">
              <div className="backdrop-blur-xl bg-white/75 border border-white/90 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-stone-300/50 space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <SparklesIcon size={14} className="text-amber-600" /> Sanctuary Viewfinder
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                    {currentHeroSanctuary.tag}
                  </span>
                </div>

                {/* Sanctuary Preview Thumb Card */}
                <div className="relative h-44 rounded-2xl overflow-hidden border border-stone-200/80 group">
                  <img
                    src={currentHeroSanctuary.image}
                    alt={currentHeroSanctuary.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h4
                      className="text-xl font-serif text-white"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      {currentHeroSanctuary.title}
                    </h4>
                    <p className="text-xs text-amber-200/90 font-sans">{currentHeroSanctuary.location}</p>
                  </div>
                </div>

                {/* Sanctuary Selector Switcher Pills */}
                <div>
                  <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                    Switch Sanctuary Mood:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {HERO_SANCTUARIES.map((sanct, idx) => (
                      <button
                        key={sanct.id}
                        onClick={() => setHeroBgIndex(idx)}
                        className={`p-2 rounded-xl text-left transition-all duration-200 border text-xs ${
                          heroBgIndex === idx
                            ? 'bg-stone-900 text-white border-stone-900 shadow-md scale-[1.02]'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                        }`}
                      >
                        <span className="block truncate font-medium text-[11px]">{sanct.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Micro Key Feature Badges */}
                <div className="pt-3 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheckIcon size={13} className="text-amber-600" /> 100% Unlisted Access
                  </span>
                  <span className="flex items-center gap-1">
                    <LeafIcon size={13} className="text-emerald-600" /> Zero Trace
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Bottom Metric Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-3xl backdrop-blur-xl bg-white/80 border border-white/90 shadow-xl shadow-stone-200/60">
            <div className="p-3 text-center border-r border-stone-200/60 last:border-0">
              <span className="text-2xl sm:text-3xl font-serif text-amber-900 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <AnimatedCounter target={24} suffix="+" duration={1800} />
              </span>
              <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Global Estates</span>
            </div>

            <div className="p-3 text-center border-r border-stone-200/60 last:border-0">
              <span className="text-2xl sm:text-3xl font-serif text-amber-900 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <AnimatedCounter target={100} suffix="%" duration={1600} />
              </span>
              <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Carbon Neutral</span>
            </div>

            <div className="p-3 text-center border-r border-stone-200/60 last:border-0">
              <span className="text-2xl sm:text-3xl font-serif text-amber-900 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                <AnimatedCounter target={99.4} suffix="%" decimals={1} duration={2000} />
              </span>
              <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Guest Rating</span>
            </div>

            <div className="p-3 text-center">
              <span className="text-2xl sm:text-3xl font-serif text-amber-900 block" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                2022
              </span>
              <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Founded</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. FOUNDER LETTER & VISION SECTION (LIGHT THEME)
        ========================================================================
      */}
      <section id="founder-letter" className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="bg-gradient-to-br from-white via-amber-50/40 to-stone-50 border border-amber-900/10 rounded-3xl p-8 sm:p-16 shadow-xl relative overflow-hidden">
          <QuoteIcon size={120} className="text-amber-800/10 absolute -top-4 -right-4 pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-800">
              <AwardIcon size={16} className="text-amber-600" />
              <span>A Note From Our Founders</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 leading-tight"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              "We created Nattuvazhi to be the anti-dote to noisy luxury."
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              <p>
                When we launched Nattuvazhi in 2022, we observed a troubling trend in high-end travel: luxury had become performative. Five-star hotels felt crowded, itineraries felt scripted, and true solitude was almost impossible to purchase.
              </p>

              <p>
                Our response was radical simplicity. We negotiated exclusive private access to unlisted architectural residences around the world — places where you hear only the wind through bamboo or alpine mist against triple-glazed glass.
              </p>

              {showFullLetter && (
                <div className="space-y-4 pt-2 border-t border-amber-200/60 animate-fade-rise">
                  <p>
                    Every residence in our private portfolio is hand-selected not for brand labels, but for architectural soul and environmental harmony. We believe that true rejuvenation occurs when human craftsmanship yields to nature’s grandeur.
                  </p>
                  <p>
                    Whether you are spending a fortnight deep in the Kyoto bamboo groves or meditating over an Icelandic glacier, our dedicated concierges ensure your presence leaves zero trace on the ecosystem, while restoring your spirit.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-6 border-t border-amber-200/60">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-stone-900 text-amber-100 font-serif flex items-center justify-center text-xl shadow-md">
                  V
                </div>
                <div>
                  <h4 className="text-base font-semibold text-stone-900 font-sans">Julian & Kiyomi</h4>
                  <p className="text-xs text-stone-500 font-sans">Co-Founders, Nattuvazhi Private Sanctuaries</p>
                </div>
              </div>

              <button
                onClick={() => setShowFullLetter(!showFullLetter)}
                className="text-xs font-semibold text-amber-900 hover:text-amber-700 underline underline-offset-4 transition-colors"
              >
                {showFullLetter ? 'Collapse Letter' : 'Read Full Manifesto'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. FOUR CORE PILLARS OF LUXURY (INTERACTIVE CARDS)
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            Our Architectural Foundations
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-stone-900"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            The Four Pillars of Nattuvazhi
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl mx-auto leading-relaxed">
            Every sanctuary and journey in our portfolio is benchmarked against four uncompromising principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className="group cursor-pointer bg-white border border-stone-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>

                  <h3
                    className="text-2xl font-serif text-stone-900 mb-2"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-900">
                  <span>Learn Pillar</span>
                  <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 
        ========================================================================
        4. INTERACTIVE TIMELINE & MILESTONES (LIGHT THEME)
        ========================================================================
      */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-14 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
              Our Journey Over Time
            </span>
            <h2
              className="text-3xl sm:text-4xl font-serif text-stone-900"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              The Evolution of Nattuvazhi
            </h2>
          </div>

          {/* Timeline Year Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {TIMELINE_DATA.map((t) => (
              <button
                key={t.year}
                onClick={() => setActiveYear(t.year)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeYear === t.year
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {t.year} — {t.badge}
              </button>
            ))}
          </div>

          {/* Timeline Content Card */}
          <div className="bg-stone-50/80 rounded-2xl p-6 sm:p-10 border border-stone-200/70 max-w-3xl mx-auto space-y-4 animate-fade-rise">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-4xl font-serif text-amber-900" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                {activeTimelineItem.year}
              </span>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                {activeTimelineItem.badge}
              </span>
            </div>

            <h3
              className="text-2xl sm:text-3xl font-serif text-stone-900"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              {activeTimelineItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans font-light">
              {activeTimelineItem.description}
            </p>

            <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-medium text-amber-900">
              <CheckCircleIcon size={16} className="text-amber-600" />
              <span>{activeTimelineItem.metrics}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        5. CONSERVATION & CARBON OFFSET SECTION (PREMIUM LIGHT ECO CARD)
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-neutral-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="lg:col-span-7 space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest">
              <LeafIcon size={14} className="text-emerald-400" />
              100% Zero-Footprint Guarantee
            </div>

            <h2
              className="text-3xl sm:text-5xl font-serif text-white leading-tight"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Protecting the Untouched Landscapes We Inhabit
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans font-light">
              Every private booking directly contributes 5% of net proceeds to local land trusts, forest regeneration in Kyoto, and glacial monitoring in Iceland. We ensure our journeys leave zero physical trace and leave ecosystems stronger than we found them.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-300">
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon size={14} className="text-amber-400" /> 100% Solar-Powered Sanctuaries
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon size={14} className="text-amber-400" /> Local Forest Restoration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon size={14} className="text-amber-400" /> Micro-Helicopter Offsets
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-center relative z-10">
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-amber-400/50 transition-colors">
              <span
                className="text-3xl sm:text-4xl font-serif text-amber-300 block mb-1"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter
                  target={12500}
                  suffix="+"
                  duration={2200}
                  formatter={(val) => Math.floor(val).toLocaleString()}
                />
              </span>
              <span className="text-[11px] text-stone-400 font-sans uppercase tracking-wider">Trees Planted</span>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-amber-400/50 transition-colors">
              <span
                className="text-3xl sm:text-4xl font-serif text-amber-300 block mb-1"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter target={100} suffix="%" duration={2000} />
              </span>
              <span className="text-[11px] text-stone-400 font-sans uppercase tracking-wider">Carbon Offset</span>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-amber-400/50 transition-colors">
              <span
                className="text-3xl sm:text-4xl font-serif text-amber-300 block mb-1"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter target={4800} suffix=" ha" duration={2400} formatter={(val) => Math.floor(val).toLocaleString()} />
              </span>
              <span className="text-[11px] text-stone-400 font-sans uppercase tracking-wider">Land Protected</span>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-amber-400/50 transition-colors">
              <span
                className="text-3xl sm:text-4xl font-serif text-amber-300 block mb-1"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                5%
              </span>
              <span className="text-[11px] text-stone-400 font-sans uppercase tracking-wider">Net Revenue Donated</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        6. CURATORS & LEADERSHIP TEAM SECTION (WITH FILTER & MODAL)
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            Our Concierge & Curators
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-stone-900"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Guided by Visionary Experts
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl mx-auto leading-relaxed">
            Our team brings together world-class architects, polar explorers, cultural historians, and Michelin-star alumni.
          </p>

          {/* Team Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {(['All', 'Leadership', 'Expeditions', 'Culture'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTeamFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeTeamFilter === cat
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTeam.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer bg-white border border-stone-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-stone-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/90 text-stone-950 text-[10px] font-bold uppercase tracking-wider mb-1">
                    {member.category}
                  </span>
                  <h3
                    className="text-2xl font-serif text-white"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {member.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                <div>
                  <p className="text-xs font-semibold text-amber-800">{member.role}</p>
                  <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-900">
                  <span className="text-stone-400 font-normal text-[11px]">{member.location}</span>
                  <span className="text-amber-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Profile <ArrowRightIcon size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        7. PRESS ACCOLADES & VOYAGER REVIEWS (CAROUSEL / TABS)
        ========================================================================
      */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              International Recognition
            </span>
            <h2
              className="text-3xl sm:text-4xl font-serif text-white"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              What the World Says
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="min-h-[120px] flex flex-col justify-center">
              <p
                className="text-xl sm:text-2xl font-serif text-stone-200 italic leading-relaxed"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                "{PRESS_QUOTES[activePress].quote}"
              </p>
              <div className="mt-4">
                <span className="text-sm font-semibold text-amber-300 block">
                  {PRESS_QUOTES[activePress].publication}
                </span>
                <span className="text-xs text-stone-400">{PRESS_QUOTES[activePress].author}</span>
              </div>
            </div>

            {/* Press Selector Dots */}
            <div className="flex items-center justify-center gap-3 pt-4">
              {PRESS_QUOTES.map((pq, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePress(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activePress === idx ? 'w-8 bg-amber-400' : 'w-2 bg-stone-700 hover:bg-stone-500'
                  }`}
                  aria-label={`Select quote from ${pq.publication}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        8. CALL TO ACTION BANNER (LIGHT THEME LUXURY)
        ========================================================================
      */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="bg-gradient-to-br from-amber-500/10 via-stone-100 to-amber-100/30 border border-amber-900/10 rounded-3xl p-8 sm:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center mx-auto shadow-md">
            <GlobeIcon size={28} />
          </div>

          <h2
            className="text-3xl sm:text-5xl font-serif text-stone-900 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Ready to Experience Undisturbed Solitude?
          </h2>

          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
            Our private concierges maintain unlisted keys to architectural havens, private islands, and high-altitude sanctuaries across the globe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate && onNavigate('studio')}
              className="px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Explore Curated Sanctuaries</span>
              <ArrowRightIcon size={16} />
            </button>

            <button
              onClick={() => onNavigate && onNavigate('reachus')}
              className="px-8 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              Contact Private Concierge
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        MODAL: TEAM MEMBER DETAIL MODAL
        ========================================================================
      */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-stone-200 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-scale-up">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900 transition-colors"
            >
              <XIcon size={18} />
            </button>

            <div className="relative h-64 overflow-hidden bg-stone-100">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-stone-950 text-[10px] font-bold uppercase tracking-wider">
                  {selectedMember.category}
                </span>
                <h3
                  className="text-3xl font-serif text-white mt-1"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {selectedMember.name}
                </h3>
                <p className="text-xs text-amber-200">{selectedMember.role}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 text-left">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">Specialty</h4>
                <p className="text-sm font-medium text-stone-800">{selectedMember.specialty}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">Biography</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans mt-1">
                  {selectedMember.bio}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                <p
                  className="text-sm font-serif text-stone-800 italic"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  "{selectedMember.quote}"
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-stone-500">
                <span>Based in: {selectedMember.location}</span>
                <button
                  onClick={() => {
                    setSelectedMember(null)
                    if (onNavigate) onNavigate('reachus')
                  }}
                  className="text-amber-900 font-semibold underline"
                >
                  Consult Curator
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 
        ========================================================================
        MODAL: PILLAR DETAIL MODAL
        ========================================================================
      */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-stone-200 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative animate-scale-up text-left space-y-4">
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-stone-200 transition-colors"
            >
              <XIcon size={16} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-800 flex items-center justify-center mb-2">
              <selectedPillar.icon size={26} />
            </div>

            <h3
              className="text-3xl font-serif text-stone-900"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              {selectedPillar.title}
            </h3>

            <p className="text-xs font-semibold text-amber-800">{selectedPillar.subtitle}</p>

            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              {selectedPillar.detail}
            </p>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-end">
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close Pillar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 
        ========================================================================
        MODAL: BRAND FILM VIDEO PREVIEW MODAL
        ========================================================================
      */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-scale-up">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <SparklesIcon size={14} /> Nattuvazhi Brand Sanctuary Film
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-800 text-stone-300 flex items-center justify-center hover:bg-stone-700"
              >
                <XIcon size={16} />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                autoPlay
                controls
                src="https://assets.mixkit.co/videos/preview/mixkit-serene-view-of-a-mountain-lake-at-sunset-41484-large.mp4"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutPage
