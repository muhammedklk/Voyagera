import React, { useState, useEffect, useRef } from 'react'
import {
  SparklesIcon,
  QuoteIcon,
  ShieldCheckIcon,
  GlobeIcon,
  MapPinIcon,
  ArrowRightIcon,
  XIcon,
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

const CheckMarkIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

interface TeamMember {
  id: string
  name: string
  role: string
  category: 'Founders' | 'Wilderness' | 'Culture & Gastronomy'
  image: string
  bio: string
  fullBio: string
  credentials: string[]
  quote: string
}

const TEAM: TeamMember[] = [
  {
    id: 'julian',
    name: 'Julian Von Bern',
    role: 'Co-Founder & Chief Architect',
    category: 'Founders',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    bio: 'Former principal at ETH Zurich Spatial Lab. 15+ years designing high-altitude alpine sanctuaries.',
    fullBio: 'Julian spent over a decade leading experimental alpine architecture at ETH Zurich before founding Voyagera. His vision fuses bio-climatic construction with absolute privacy. He personally approves every off-market residence added to the Voyagera portfolio, ensuring acoustic isolation, natural lighting, and zero environmental footprint.',
    credentials: ['M.Arch ETH Zurich', 'Pritzker Architecture Nominee 2021', 'Alpine Heritage Trustee'],
    quote: 'Architecture at its peak does not declare itself; it blends seamlessly into the silence of nature.',
  },
  {
    id: 'kiyomi',
    name: 'Kiyomi Takahashi',
    role: 'Co-Founder & Cultural Curator',
    category: 'Founders',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    bio: 'Kyoto native with deep lineage in Japanese tea ceremony, garden design, and historic estate preservation.',
    fullBio: 'Descended from a family of Kyoto timber craftsmen and tea masters, Kiyomi brings centuries of traditional Japanese aesthetic philosophy to Voyagera. She curates the sensory details of every stay — from custom incense formulation to private tea master introductions in hidden Arashiyama estates.',
    credentials: ['Urasenke Tea Master Class', 'Kyoto Historic Preservation Board', 'BFA Waseda University'],
    quote: 'True luxury is the luxury of presence — undisturbed by time, noise, or performative spectacle.',
  },
  {
    id: 'alistair',
    name: 'Dr. Alistair Sterling',
    role: 'Head of Expedition & Wilderness Safety',
    category: 'Wilderness',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    bio: 'Veteran polar explorer and ecologist. Guiding private expeditions across Chilean fjords and Iceland glaciers.',
    fullBio: 'Dr. Sterling holds a PhD in Arctic Glaciology from Cambridge. Having led over 40 polar and sub-Antarctic scientific expeditions, he leads Voyagera’s wilderness safety protocol and custom expedition itineraries into unmapped coastal and glacial havens.',
    credentials: ['PhD Glaciology Cambridge', 'Fellow Royal Geographical Society', 'Wilderness EMT Certified'],
    quote: 'The wilderness is not a backdrop; it is a living entity that demands respect, care, and quiet awe.',
  },
  {
    id: 'camille',
    name: 'Camille Laurent',
    role: 'Gastronomy & Sommelier Director',
    category: 'Culture & Gastronomy',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: '3-Star Michelin alumna specializing in farm-to-table foraging and bio-dynamic wine pairing.',
    fullBio: 'Camille trained in Paris and Lyon before managing culinary direction at 3-star Michelin establishments in Provence. At Voyagera, she collaborates with local organic micro-farmers and foragers to craft private hyper-seasonal dining journeys served in-residence.',
    credentials: ['Master Sommelier Institute', '3-Star Michelin Chef Alumna', 'Biodynamic Agriculture Advocate'],
    quote: 'Food should taste of the soil and sea from which it came — unadulterated, seasonal, and poetic.',
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Acoustic & Interior Design Lead',
    category: 'Founders',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    bio: 'Specialist in bio-mimetic interior textures, natural acoustic baffling, and sustainable glass architecture.',
    fullBio: 'Elena studied industrial design in Milan before specializing in psycho-acoustics. She designs the sanctuary interior environments to lower heart rates, eliminate exterior noise pollution, and incorporate natural tactile materials like hand-honed slate and untreated cedar.',
    credentials: ['Politecnico di Milano', 'International Acoustic Society Member', 'LEED Platinum Specialist'],
    quote: 'When an interior space achieves true acoustic harmony, your mind relaxes instantly upon entry.',
  },
  {
    id: 'kenjiro',
    name: 'Kenjiro Sato',
    role: 'Landscape & Moss Ecology Specialist',
    category: 'Culture & Gastronomy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: '4th generation Kyoto garden master dedicated to moss ecology and stone garden restoration.',
    fullBio: 'Kenjiro oversees the integration between Voyagera residences and their surrounding ecosystems. From ancient moss gardens in Japan to native pine alpine trails, he ensures zero disruption to indigenous plant life while restoring degraded soil around properties.',
    credentials: ['Kyoto Master Craftsman Guild', 'Japanese Garden Society Vice President', '30+ Years Experience'],
    quote: 'A garden is not created in a day; it is a conversation between human hands and centuries of weather.',
  },
]

const TIMELINE = [
  {
    year: '2022',
    title: 'The Genesis of Voyagera',
    subtitle: 'The Anti-Dote to Performative Luxury',
    content:
      'Observation of a troubling global trend: luxury travel had become crowded, scripted, and loud. Voyagera was born to acquire off-market access to unlisted architectural sanctuaries where quietude is sacred.',
    metrics: '12 Original Sanctuaries • 3 Countries',
  },
  {
    year: '2023',
    title: 'Off-Market Sanctuary Guild',
    subtitle: 'Exclusive Architectural Access',
    content:
      'Formed exclusive partnerships with private estate owners, ETH Zurich architects, and Kyoto master carpenters to expand unlisted havens across Swiss Alps, Kyoto, and Amalfi Coast.',
    metrics: '45 Private Havens • 100% Verified Privacy',
  },
  {
    year: '2024',
    title: '100% Zero-Footprint Guarantee',
    subtitle: 'Direct Ecosystem Stewardship',
    content:
      'Instituted a binding pledge: 5% of net proceeds directly fund local land trusts, native cedar rewilding in Arashiyama, and glacial ice monitoring in Iceland.',
    metrics: '12,500+ Trees Planted • 100% Carbon Offset',
  },
  {
    year: '2025+',
    title: 'Global Expedition Horizon',
    subtitle: 'Unmapped Wilderness Frontiers',
    content:
      'Expanding bespoke private concierge services into Chilean Patagonia fjords and Arctic circle retreats, providing private polar vessel access and unlisted cliffside sanctuaries.',
    metrics: '120+ Global Sanctuaries • 99.4% Member Satisfaction',
  },
]

const PILLARS = [
  {
    id: 'solitude',
    title: 'Uncompromising Solitude',
    badge: 'Privacy Protocol',
    description:
      'Unlisted private residences with encrypted guest concierge services, zero shared amenities, and acoustic isolation.',
    details: [
      'Encrypted end-to-end guest communication channel',
      'No public photography or geotagging allowed',
      'Triple-glazed soundproof glass & isolated mountain driveways',
      'Private security protocols available upon request',
    ],
  },
  {
    id: 'stewardship',
    title: 'Zero-Trace Stewardship',
    badge: '100% Carbon Neutral',
    description:
      'Every journey actively leaves ecosystems cleaner and healthier than we found them, backed by 5% net proceed conservation funding.',
    details: [
      '100% verified carbon offset for guest transfers',
      '5% net revenue donated to native land trusts',
      'Zero single-use plastics across all sanctuaries',
      'Solar & geothermal powered climate management',
    ],
  },
  {
    id: 'heritage',
    title: 'Architectural Heritage',
    badge: 'Design Curation',
    description:
      'Hand-scouted residences crafted by master architects using native timber, local stone, and bioclimatic design principles.',
    details: [
      'Strict architectural evaluation standard (ETH Zurich metrics)',
      'Integration with surrounding natural landscape',
      'Preservation of historical timber & traditional masonry',
      'Custom acoustic and lighting design for deep sleep',
    ],
  },
  {
    id: 'curation',
    title: 'Bespoke Micro-Curations',
    badge: 'Personalized Stay',
    description:
      'Tailored dining, private tea ceremonies, guided polar expeditions, and hyper-local cultural introductions.',
    details: [
      'Private 3-Star Michelin alumna chef in-residence',
      'Dedicated expedition lead & wilderness guide',
      'Custom herbal wellness & thermal bath rituals',
      '24/7 personal sanctuary concierge',
    ],
  },
]

const CONSERVATION_PROJECTS = [
  {
    id: 'kyoto',
    name: 'Kyoto Forest Rewilding',
    location: 'Arashiyama & Kitayama, Japan',
    trees: '12,500+',
    area: '180 Hectares',
    description:
      'Funding native Cryptomeria cedar and bamboo grove restoration in northern Kyoto, protecting natural soil drainage and indigenous wildlife corridors.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    stat: '12.5k Trees',
  },
  {
    id: 'iceland',
    name: 'Iceland Glacial Watch',
    location: 'Vatnajökull & Snaefellsnes, Iceland',
    trees: '0 (Ice Shield)',
    area: '340 Sq. Km',
    description:
      'Partnering with Nordic glaciologists to deploy real-time acoustic sensors monitoring glacial retreat and supporting sub-Arctic lichen rewilding.',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=800&auto=format&fit=crop',
    stat: '100% Carbon Neutral',
  },
  {
    id: 'alps',
    name: 'Alpine Wildlife Corridors',
    location: 'Valais & Engadin, Switzerland',
    trees: '8,200+',
    area: '450 Hectares',
    description:
      'Securing high-altitude alpine meadow reserves free from commercial development, safeguarding ibex, golden eagles, and rare alpine flora.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
    stat: '45k+ Acres',
  },
]

const REGIONS = [
  {
    name: 'Kyoto & Bamboo Highlands',
    country: 'Japan',
    count: '14 Sanctuaries',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
    tag: 'Tea Estates & Cedar Forests',
  },
  {
    name: 'Swiss & Tyrolean Alps',
    country: 'Switzerland / Austria',
    count: '22 Sanctuaries',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    tag: 'High-Altitude Glass Chalets',
  },
  {
    name: 'Icelandic Fjords & Glaciers',
    country: 'Iceland',
    count: '11 Sanctuaries',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop',
    tag: 'Aurora & Obsidian Coast',
  },
  {
    name: 'Patagonia Wilderness Fjords',
    country: 'Chile',
    count: '8 Sanctuaries',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    tag: 'Glacial Valleys & Remote Lodges',
  },
]

const AboutPage: React.FC = () => {
  const [selectedTimeline, setSelectedTimeline] = useState(0)
  const [activeProjectTab, setActiveProjectTab] = useState(0)
  const [teamCategory, setTeamCategory] = useState<'All' | 'Founders' | 'Wilderness' | 'Culture & Gastronomy'>('All')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [expandedPillar, setExpandedPillar] = useState<string | null>('solitude')

  const filteredTeam =
    teamCategory === 'All' ? TEAM : TEAM.filter((member) => member.category === teamCategory)

  return (
    <div className="pt-24 pb-20 bg-white text-neutral-900 animate-fade-rise selection:bg-amber-500/20 selection:text-amber-900">
      {/* 1. HERO SECTION — Atmospheric & Luxurious */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="relative rounded-3xl overflow-hidden bg-neutral-950 text-white p-8 sm:p-16 lg:p-20 border border-neutral-800 shadow-2xl">
          {/* Subtle Ambient Background Graphic */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-neutral-950 to-neutral-950 opacity-90 pointer-events-none" />
          <div
            className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-medium tracking-widest uppercase shadow-sm">
              <SparklesIcon size={14} className="text-amber-400" /> The Voyagera Genesis
            </span>

            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.02]"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Crafting Havens for the Thoughtful Soul
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 font-sans leading-relaxed font-light max-w-2xl">
              Founded on the principle that true luxury is undisturbed stillness, untouched nature, and effortless human connection.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>120+ Unlisted Havens</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>100% Zero-Trace Pledge</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>45 Global Wilderness Regions</span>
              </div>
            </div>
          </div>

          {/* Quick Floating Stat Cards */}
          <div className="mt-12 pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <span
                className="text-3xl sm:text-4xl font-serif text-amber-300 block"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter target={120} suffix="+" duration={2000} />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans mt-1 block">
                Off-Market Estates
              </span>
            </div>
            <div>
              <span
                className="text-3xl sm:text-4xl font-serif text-amber-300 block"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter
                  target={12500}
                  suffix="+"
                  duration={2200}
                  formatter={(val) => Math.floor(val).toLocaleString()}
                />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans mt-1 block">
                Trees Planted
              </span>
            </div>
            <div>
              <span
                className="text-3xl sm:text-4xl font-serif text-amber-300 block"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter target={100} suffix="%" duration={1800} />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans mt-1 block">
                Carbon Offset
              </span>
            </div>
            <div>
              <span
                className="text-3xl sm:text-4xl font-serif text-amber-300 block"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <AnimatedCounter target={99.4} suffix="%" decimals={1} duration={2000} />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans mt-1 block">
                Member Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER MANIFESTO & INTERACTIVE STORY TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-mono">
            Our Journey & Principles
          </span>
          <h2
            className="text-4xl sm:text-6xl font-serif text-neutral-900"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            The Anti-Dote to Noisy Luxury
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed font-sans">
            Click through our genesis timeline to explore how Voyagera redefined private travel from 2022 to today.
          </p>
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="bg-neutral-50 border border-neutral-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Year Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 pb-6 border-b border-neutral-200">
            {TIMELINE.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => setSelectedTimeline(idx)}
                className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  selectedTimeline === idx
                    ? 'bg-neutral-900 text-white shadow-md scale-105'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>{item.year}</span>
              </button>
            ))}
          </div>

          {/* Timeline Content Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-800 text-[11px] font-bold rounded-full uppercase tracking-wider">
                {TIMELINE[selectedTimeline].subtitle}
              </span>

              <h3
                className="text-3xl sm:text-5xl font-serif text-neutral-900 leading-tight"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                {TIMELINE[selectedTimeline].title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                {TIMELINE[selectedTimeline].content}
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-500">
                <ShieldCheckIcon size={16} className="text-amber-600" />
                <span>Milestone: {TIMELINE[selectedTimeline].metrics}</span>
              </div>
            </div>

            {/* Founder Letter Highlight Box */}
            <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-lg">
              <QuoteIcon size={80} className="text-neutral-800 absolute top-4 right-4 pointer-events-none opacity-40" />

              <div className="relative z-10 space-y-4">
                <p
                  className="text-lg font-serif italic text-neutral-200 leading-relaxed"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  "We negotiated exclusive private access to unlisted architectural residences where you hear only wind through bamboo or mountain mist."
                </p>

                <div className="pt-4 border-t border-neutral-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-neutral-950 font-serif font-bold flex items-center justify-center text-base">
                    V
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Julian & Kiyomi</h4>
                    <p className="text-[11px] text-neutral-400">Founders, Voyagera Private Sanctuaries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE PILLARS (Interactive Expandable Cards) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-mono">
            Foundational Excellence
          </span>
          <h2
            className="text-4xl sm:text-6xl font-serif text-neutral-900"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            The Four Pillars of Voyagera
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Click any pillar to reveal our operational standards and guest promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar) => {
            const isExpanded = expandedPillar === pillar.id
            return (
              <div
                key={pillar.id}
                onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                className={`cursor-pointer rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-neutral-900 text-white border-neutral-800 shadow-xl'
                    : 'bg-neutral-50 text-neutral-900 border-neutral-200/80 hover:border-neutral-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isExpanded ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {pillar.badge}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {isExpanded ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-serif"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {pillar.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isExpanded ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {pillar.description}
                  </p>

                  {/* Expandable Details List */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-neutral-800 space-y-2.5 animate-fade-rise">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                        Operational Standards:
                      </h4>
                      {pillar.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckMarkIcon size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 flex items-center justify-between text-xs font-semibold">
                  <span className={isExpanded ? 'text-amber-300' : 'text-neutral-500'}>
                    {isExpanded ? 'Pillar Active' : 'Explore Pillar Details'}
                  </span>
                  <ArrowRightIcon
                    size={16}
                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-90 text-amber-300' : 'text-neutral-400'}`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. CARBON OFFSET & ECOSYSTEM CONSERVATION HUB */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest">
                <GlobeIcon size={14} className="text-emerald-400" /> 100% Zero-Footprint Guarantee
              </span>

              <h2
                className="text-4xl sm:text-6xl font-serif text-white leading-tight"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                Protecting the Landscapes We Inhabit
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                Every private sanctuary booking directly channels 5% of net proceeds into local land trusts, native forest regeneration in Kyoto, and glacial monitoring in Iceland.
              </p>

              {/* Project Selectors */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Select Active Stewardship Project:
                </span>
                <div className="flex flex-col gap-2">
                  {CONSERVATION_PROJECTS.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => setActiveProjectTab(idx)}
                      className={`p-3 rounded-xl text-left text-xs font-medium transition-all duration-200 flex items-center justify-between ${
                        activeProjectTab === idx
                          ? 'bg-emerald-950 border border-emerald-500/50 text-white shadow-md'
                          : 'bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                      }`}
                    >
                      <span>{proj.name}</span>
                      <span className="text-[11px] font-mono text-emerald-400">{proj.stat}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Project Highlight Visual Card */}
            <div className="lg:col-span-7">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={CONSERVATION_PROJECTS[activeProjectTab].image}
                    alt={CONSERVATION_PROJECTS[activeProjectTab].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono">
                      <MapPinIcon size={12} className="text-emerald-400" />
                      {CONSERVATION_PROJECTS[activeProjectTab].location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-neutral-950 font-bold text-[11px]">
                      Active Ecosystem Trust
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3
                    className="text-2xl font-serif text-white"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {CONSERVATION_PROJECTS[activeProjectTab].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {CONSERVATION_PROJECTS[activeProjectTab].description}
                  </p>

                  <div className="pt-3 border-t border-neutral-800 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-neutral-500 block text-[10px] uppercase">Trees / Flora Impact</span>
                      <span className="text-emerald-400 font-bold text-sm">
                        {CONSERVATION_PROJECTS[activeProjectTab].trees}
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px] uppercase">Protected Land Reserve</span>
                      <span className="text-emerald-400 font-bold text-sm">
                        {CONSERVATION_PROJECTS[activeProjectTab].area}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP & CURATOR TEAM (Filterable Grid + Bio Detail Modal) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-mono">
            Concierges & Naturalists
          </span>
          <h2
            className="text-4xl sm:text-6xl font-serif text-neutral-900"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Guided by Visionaries
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Meet the architects, tea masters, polar explorers, and sommeliers behind your stay.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {(['All', 'Founders', 'Wilderness', 'Culture & Gastronomy'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setTeamCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  teamCategory === cat
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer bg-neutral-50 border border-neutral-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-neutral-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-semibold">
                  {member.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3
                    className="text-2xl font-serif"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-300">{member.role}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-neutral-600 leading-relaxed font-sans line-clamp-3">
                  {member.bio}
                </p>

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors">
                  <span>View Full Credentials & Bio</span>
                  <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TEAM MEMBER DETAIL MODAL */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 relative animate-fade-rise max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-900/80 text-white flex items-center justify-center hover:bg-neutral-900 transition-colors"
                aria-label="Close bio modal"
              >
                <XIcon size={18} />
              </button>

              <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-amber-400 text-neutral-950 text-[11px] font-bold rounded-full uppercase tracking-wider">
                    {selectedMember.category}
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-serif mt-2"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">{selectedMember.role}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                    Background & Expertise
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">{selectedMember.fullBio}</p>
                </div>

                {/* Key Credentials */}
                <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 font-mono">
                    Distinctions & Accreditation:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedMember.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Quote */}
                <div className="border-l-2 border-amber-500 pl-4 py-1 italic text-neutral-600 font-serif text-base" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                  "{selectedMember.quote}"
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="px-6 py-2.5 bg-neutral-900 text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition-colors"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. GLOBAL SANCTUARY FOOTPRINT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-mono">
            Global Reach
          </span>
          <h2
            className="text-4xl sm:text-6xl font-serif text-neutral-900"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Sanctuary Footprint
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Unlisted private estates across five continents reserved exclusively for Voyagera guests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONS.map((region, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden border border-neutral-200/80 h-80 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={region.image}
                alt={region.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-mono rounded-full border border-white/10">
                  {region.count}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-300 block">
                  {region.country}
                </span>
                <h3
                  className="text-2xl font-serif leading-tight"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {region.name}
                </h3>
                <p className="text-[11px] text-neutral-300 font-sans opacity-90">{region.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRIVATE MEMBERSHIP & INQUIRY BANNER */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <ShieldCheckIcon size={40} className="text-amber-400 mx-auto" />
          <h2
            className="text-4xl sm:text-6xl font-serif text-white max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Begin Your Sanctuary Journey
          </h2>
          <p className="text-xs sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed font-sans">
            Our private concierges maintain off-market keys to unlisted alpine chalets, Kyoto bamboo estates, and coastal havens worldwide.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reachus"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-lg hover:scale-105"
            >
              Inquire for Private Access <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
