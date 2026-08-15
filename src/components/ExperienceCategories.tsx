import React from 'react'
import { CompassIcon, SparklesIcon, ShieldCheckIcon, GlobeIcon, ArrowRightIcon } from './Icons'

const PILLARS = [
  {
    number: '01',
    title: 'Backwater Slow Cruises',
    description:
      'Glide quietly through palm-fringed channels on solar-assisted kettuvallams with private naturalists and native chefs.',
    tag: 'Lagoons & Quiet Waters',
    icon: CompassIcon,
    features: ['Solar Kettuvallam Charters', 'Toddy Palm Sunset Expeditions', 'Private Seafood & Sadya Chefs'],
  },
  {
    number: '02',
    title: 'Mist & Hill Estate Living',
    description:
      'High-altitude cloud forest retreats nestled within historic tea gardens and cardamom estates in Anamudi hills.',
    tag: 'Highland Solitude',
    icon: SparklesIcon,
    features: ['Private Tea Harvesting', 'Mist Deck Fireplaces', 'Shola Waterfall Treks'],
  },
  {
    number: '03',
    title: 'Ayurvedic & Forest Healing',
    description:
      'Ancient botanical wellness regimens, herbal steam therapies, and natural mountain spring plunge baths in pure quietude.',
    tag: 'Mindful Restoration',
    icon: SparklesIcon,
    features: ['Custom Botanical Therapies', 'Herbal Spring Baths', 'Naturalist Guided Meditation'],
  },
  {
    number: '04',
    title: 'Heritage Illams & Spice Trails',
    description:
      'Staying in restored 4-wing Nalukettu courtyards. Experience ancient woodwork craft and organic spice culinary journeys.',
    tag: 'Ancestral Craft',
    icon: GlobeIcon,
    features: ['Nalukettu Courtyard Living', 'Organic Farm-to-Table Meals', 'Ancient Artisan Workshops'],
  },
]

interface ExperienceCategoriesProps {
  onExploreClick?: () => void
}

const ExperienceCategories: React.FC<ExperienceCategoriesProps> = ({ onExploreClick }) => {
  return (
    <section className="bg-[#1B3B2B] text-white py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Blur Circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              The Nattuvazhi Experience
            </span>
            <h2
              className="text-4xl sm:text-6xl font-serif text-white mt-2"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Four Pillars of Native Flow
            </h2>
          </div>
          <p className="text-sm text-[#EADFCF] max-w-md leading-relaxed">
            Every journey is crafted around deep harmony — balancing untouched nature, heritage architecture, and authentic local warmth.
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
                className="group relative bg-[#12291E] hover:bg-[#12291E]/90 border border-[#C85A32]/20 hover:border-[#C85A32] rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-serif italic text-[#C85A32] text-lg">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#1B3B2B] group-hover:bg-[#C85A32] group-hover:text-white flex items-center justify-center transition-all duration-300 text-[#D4AF37]">
                      <IconComp size={20} />
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold tracking-wider text-[#D4AF37] uppercase">
                    {item.tag}
                  </span>
                  <h3
                    className="text-2xl font-serif text-white mt-1 mb-3"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EADFCF]/80 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 pt-4 border-t border-[#C85A32]/20">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="text-[11px] text-[#EADFCF] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onExploreClick}
                    className="mt-6 pt-4 flex items-center gap-2 text-xs text-white font-medium group-hover:text-[#D4AF37] transition-colors w-full text-left"
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
