import React, { useState } from 'react'
import { SparklesIcon, MapPinIcon, StarIcon, ArrowRightIcon, ShieldCheckIcon } from '../components/Icons'
import { DESTINATIONS, Destination } from '../components/CuratedDestinations'

interface StudioPageProps {
  onSelectDestination?: (destination: Destination) => void
}

const CATEGORIES = ['All', 'Mountain & Forest', 'Coastal & Islands', 'Aurora & Glacier']

const StudioPage: React.FC<StudioPageProps> = ({ onSelectDestination }) => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredDestinations =
    activeCategory === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === activeCategory)

  const handleCardClick = (dest: Destination) => {
    if (onSelectDestination) {
      onSelectDestination(dest)
    }
  }

  return (
    <div className="pt-24 pb-20 bg-[#FDFBF7] text-[#1A1918] animate-fade-rise">
      {/* Destinations Hero Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C85A32]/20">
          <SparklesIcon size={14} className="text-[#C85A32]" /> Handpicked Global Sanctuaries
        </span>
        <h1
          className="text-5xl sm:text-7xl font-serif text-[#1B3B2B] max-w-4xl mx-auto leading-[1.05]"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Unlisted Global Sanctuaries & Retreats
        </h1>
        <p className="text-base sm:text-lg text-[#4A4744] max-w-2xl mx-auto mt-6 leading-relaxed">
          Explore Kyoto bamboo villas, Swiss alpine lodges, Iceland aurora domes, Amalfi cliffside retreats, and private island havens.
        </p>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1B3B2B] text-white shadow-md'
                  : 'bg-[#F5F0E6] text-[#4A4744] hover:bg-[#EADFCF] border border-[#EADFCF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EADFCF]">
          <span className="text-xs text-[#4A4744] font-mono">
            Showing {filteredDestinations.length} Unlisted Native Sanctuaries
          </span>
          <span className="text-xs text-[#C85A32] font-semibold">Click any sanctuary to view full details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleCardClick(dest)}
              className="group cursor-pointer bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#EADFCF] hover:shadow-xl hover:border-[#C85A32]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-[#F5F0E6]">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 bg-[#1B3B2B]/80 backdrop-blur-md text-white text-[11px] font-semibold rounded-full shadow-sm">
                    {dest.category}
                  </span>
                  <span className="px-3 py-1 bg-[#FDFBF7]/90 backdrop-blur-md text-[#1B3B2B] text-[11px] font-bold rounded-full shadow-sm border border-[#EADFCF]">
                    {dest.price}
                  </span>
                </div>

                {/* Bottom Location & Rating */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1.5 backdrop-blur-sm px-2.5 py-1 rounded-lg bg-black/40">
                    <MapPinIcon size={12} className="text-[#C85A32]" /> {dest.location}
                  </span>
                  <span className="flex items-center gap-1 backdrop-blur-sm px-2.5 py-1 rounded-lg bg-black/40 text-[#D4AF37] font-semibold">
                    <StarIcon size={12} /> {dest.rating} ({dest.reviewsCount})
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="text-2xl font-serif text-[#1B3B2B] group-hover:text-[#C85A32] transition-colors"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {dest.title}
                  </h3>
                  <p className="text-xs text-[#C85A32] font-semibold uppercase tracking-wider mt-0.5">{dest.subtitle}</p>
                  <p className="text-xs text-[#4A4744] mt-3 leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>
                </div>

                {/* Highlights Preview */}
                <div className="pt-3 border-t border-[#EADFCF] space-y-1.5">
                  {dest.highlights.slice(0, 2).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-[#4A4744]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Button */}
                <div className="pt-3 flex items-center justify-between text-xs font-semibold text-[#1B3B2B]">
                  <span className="text-[#4A4744] font-normal">Recommended stay: {dest.duration}</span>
                  <span className="inline-flex items-center gap-1 text-[#1B3B2B] group-hover:text-[#C85A32] group-hover:translate-x-1 transition-all">
                    Explore Haven <ArrowRightIcon size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sanctuary Promise Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12 mt-8">
        <div className="bg-[#1B3B2B] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl border border-[#C85A32]/30">
          <ShieldCheckIcon size={32} className="text-[#D4AF37] mx-auto" />
          <h2
            className="text-3xl sm:text-4xl font-serif text-white max-w-xl mx-auto"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Looking for an Unlisted Custom Residence?
          </h2>
          <p className="text-xs sm:text-sm text-[#EADFCF] max-w-lg mx-auto leading-relaxed">
            Our native concierges maintain off-market keys to private backwater islets, secret tea bunglows, and cliffside eco-villas across South Asian coastal trails.
          </p>
        </div>
      </section>
    </div>
  )
}

export default StudioPage
