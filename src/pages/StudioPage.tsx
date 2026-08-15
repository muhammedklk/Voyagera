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
    <div className="pt-24 pb-20 bg-white text-neutral-900 animate-fade-rise">
      {/* Destinations Hero Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-widest mb-4">
          <SparklesIcon size={14} className="text-amber-600" /> Handpicked World Sanctuaries
        </span>
        <h1
          className="text-5xl sm:text-7xl font-serif text-neutral-900 max-w-4xl mx-auto leading-[1.05]"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Curated Destinations & Private Sanctuaries
        </h1>
        <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mt-6 leading-relaxed">
          Explore unlisted private estates, remote wilderness retreats, alpine lodges, and coastal havens reserved exclusively for our voyagers.
        </p>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
          <span className="text-xs text-neutral-400 font-mono">
            Showing {filteredDestinations.length} Unlisted Sanctuaries
          </span>
          <span className="text-xs text-neutral-500 font-medium">Click any destination to view full details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleCardClick(dest)}
              className="group cursor-pointer bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200/80 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-neutral-100">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold rounded-full shadow-sm">
                    {dest.category}
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-neutral-900 text-[11px] font-bold rounded-full shadow-sm">
                    {dest.price}
                  </span>
                </div>

                {/* Bottom Location & Rating */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1.5 backdrop-blur-sm px-2.5 py-1 rounded-lg bg-black/30">
                    <MapPinIcon size={12} className="text-amber-300" /> {dest.location}
                  </span>
                  <span className="flex items-center gap-1 backdrop-blur-sm px-2.5 py-1 rounded-lg bg-black/30 text-amber-300 font-semibold">
                    <StarIcon size={12} /> {dest.rating} ({dest.reviewsCount})
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="text-2xl font-serif text-neutral-900 group-hover:text-neutral-600 transition-colors"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {dest.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">{dest.subtitle}</p>
                  <p className="text-xs text-neutral-600 mt-3 leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>
                </div>

                {/* Highlights Preview */}
                <div className="pt-3 border-t border-neutral-200/70 space-y-1.5">
                  {dest.highlights.slice(0, 2).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Button */}
                <div className="pt-3 flex items-center justify-between text-xs font-semibold text-neutral-900">
                  <span className="text-neutral-400 font-normal">Recommended stay: {dest.duration}</span>
                  <span className="inline-flex items-center gap-1 text-neutral-900 group-hover:translate-x-1 transition-transform">
                    Explore Sanctuary <ArrowRightIcon size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sanctuary Promise Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12 mt-8">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <ShieldCheckIcon size={32} className="text-amber-400 mx-auto" />
          <h2
            className="text-3xl sm:text-4xl font-serif text-white max-w-xl mx-auto"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Looking for an Unlisted Custom Residence?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Our private concierges maintain off-market keys to private islands, historical châteaux, and high-altitude alpine retreats worldwide.
          </p>
        </div>
      </section>
    </div>
  )
}

export default StudioPage
