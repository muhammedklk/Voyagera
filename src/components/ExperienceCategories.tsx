import React from 'react'
import { CompassIcon, SparklesIcon, ShieldCheckIcon, GlobeIcon, ArrowRightIcon } from './Icons'

const PILLARS = [
  {
    number: '01',
    title: 'Private Expeditions',
    description:
      'Uncharted paths guided by polar explorers and local naturalists. Yacht charters across Chilean fjords and remote volcanic peaks.',
    tag: 'Wilderness & Stars',
    icon: CompassIcon,
    features: ['Custom Flight Charters', '1-on-1 Expeditions Guide', 'Zero-Footprint Camping'],
  },
  {
    number: '02',
    title: 'Mindful Retreats',
    description:
      'Digital quietude designed for deep focus and physical renewal. Thermal springs, sound baths, and silence in pristine nature.',
    tag: 'Restoration',
    icon: SparklesIcon,
    features: ['Private Onsen & Spa', 'Personal Wellness Chef', 'Circadian Lighting Design'],
  },
  {
    number: '03',
    title: 'Architectural Havens',
    description:
      'Living in structural masterpieces. From brutalist coastal glass structures to 200-year-old restored Japanese cedar estates.',
    tag: 'Living Art',
    icon: ShieldCheckIcon,
    features: ['Curated Art Collections', 'Acoustic Soundproofing', 'Private Infinity Edge Pools'],
  },
  {
    number: '04',
    title: 'Cultural Immersions',
    description:
      'Private access to living legends — ancient ceramic masters, private vineyard cellars, and secret temple gardens closed to the public.',
    tag: 'Ancestral Craft',
    icon: GlobeIcon,
    features: ['Master Artisan Workshops', 'Private Michelin Dining', 'Exclusive Heritage Access'],
  },
]

interface ExperienceCategoriesProps {
  onExploreClick?: () => void
}

const ExperienceCategories: React.FC<ExperienceCategoriesProps> = ({ onExploreClick }) => {
  return (
    <section className="bg-neutral-900 text-white py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Blur Circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              The Nādvora Experience
            </span>
            <h2
              className="text-4xl sm:text-6xl font-serif text-white mt-2"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Four Pillars of Pure Flow
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
            Every journey is crafted around total harmony — balancing solitude, high-design shelter, and unforgettable human connection.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((item) => {
            const IconComp = item.icon
            return (
              <div
                key={item.number}
                onClick={onExploreClick}
                className="group relative bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/60 hover:border-neutral-500 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-serif italic text-neutral-500 text-lg">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-neutral-700/50 group-hover:bg-white group-hover:text-neutral-900 flex items-center justify-center transition-all duration-300">
                      <IconComp size={20} />
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold tracking-wider text-amber-300/80 uppercase">
                    {item.tag}
                  </span>
                  <h3
                    className="text-2xl font-serif text-white mt-1 mb-3"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 pt-4 border-t border-neutral-700/50">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="text-[11px] text-neutral-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber-400" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onExploreClick}
                    className="mt-6 pt-4 flex items-center gap-2 text-xs text-white font-medium group-hover:text-amber-300 transition-colors w-full text-left"
                  >
                    <span>Explore Journeys</span>
                    <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceCategories
