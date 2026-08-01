import React, { useState } from 'react'
import { MapPinIcon, StarIcon, ArrowRightIcon, HeartIcon } from './Icons'

export interface Destination {
  id: string
  title: string
  subtitle: string
  category: 'Mountain & Forest' | 'Coastal & Islands' | 'Aurora & Glacier'
  location: string
  rating: number
  reviewsCount: number
  price: string
  image: string
  duration: string
  highlights: string[]
  amenities: string[]
  description: string
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'kyoto-sanctuary',
    title: 'Arashiyama Bamboo Villa',
    subtitle: 'Minimalist Zen Architecture',
    category: 'Mountain & Forest',
    location: 'Kyoto, Japan',
    rating: 4.98,
    reviewsCount: 42,
    price: '$1,450 / night',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    duration: '5 - 10 Days',
    highlights: ['Private Natural Geothermal Onsen', '1-on-1 Tea Master Ceremony', 'Forest Meditation Pavilion & Gardens', 'Private Kaiseki Dining Chef'],
    amenities: ['Geothermal Spring', 'Zen Garden', 'Kaiseki Kitchen', 'Acoustic Soundproofing', 'Starlink Wifi'],
    description:
      'Nested at the edge of the sacred bamboo groves of Arashiyama, this residence combines 200-year-old cedar craft with minimalist glass architecture. Designed for solitude, quietude, and deep physical restoration.',
  },
  {
    id: 'amalfi-cliffside',
    title: 'Ravello Cliffside Residence',
    subtitle: 'Panoramic Tyrrhenian Views',
    category: 'Coastal & Islands',
    location: 'Amalfi Coast, Italy',
    rating: 4.96,
    reviewsCount: 38,
    price: '$2,100 / night',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    duration: '7 - 14 Days',
    highlights: ['Cliffside Heated Infinity Edge Pool', 'Private Yacht & Funicular Dock Access', 'Personal Michelin Sommelier & Chef', 'Organic Citrus Terraces'],
    amenities: ['Infinity Pool', 'Private Yacht Dock', 'Wine Cellar', 'Lime Plaster Spa', 'Helipad'],
    description:
      'Perched 350 meters above the Tyrrhenian Sea, Ravello Residence offers unprecedented privacy and Mediterranean sunset vistas looking out over Positano.',
  },
  {
    id: 'engadin-alpine',
    title: 'Engadin Alpine Timber Lodge',
    subtitle: 'High Altitude Serenity',
    category: 'Mountain & Forest',
    location: 'St. Moritz, Switzerland',
    rating: 4.99,
    reviewsCount: 56,
    price: '$1,850 / night',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop',
    duration: '4 - 8 Days',
    highlights: ['Direct Ski-in Ski-out Access', 'Heated Outdoor Thermal Bath', 'Stargazing Observatory Telescope Deck', 'Private Alpine Ski Guide'],
    amenities: ['Ski-in Access', 'Thermal Bath', 'Cashmere Interiors', 'Fireplace Salon', 'Sauna'],
    description:
      'Embraced by snow-capped peaks and larch forests, this alpine retreat blends rough pine timbers with warm cashmere interiors and private thermal waters.',
  },
  {
    id: 'iceland-aurora',
    title: 'Reykjanes Glass Aurora Dome',
    subtitle: 'Glacier & Celestial Sanctuary',
    category: 'Aurora & Glacier',
    location: 'Reykjanes, Iceland',
    rating: 4.97,
    reviewsCount: 29,
    price: '$1,600 / night',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop',
    duration: '3 - 7 Days',
    highlights: ['360° Heated Acoustic Glass Aurora Roof', 'Geothermal Lava Lagoon Access', 'Helicopter Glacier Exploration Tour', 'Private Northern Lights Alarm'],
    amenities: ['Glass Roof', 'Lava Pool', 'Geothermal Heating', 'Private Helipad', 'Telescope'],
    description:
      'Sleep underneath the dancing Northern Lights inside heated acoustic glass domes surrounded by volcanic lava fields and obsidian silence.',
  },
  {
    id: 'santorini-caldera',
    title: 'Oia Caldera Cave Villa',
    subtitle: 'Aegean Sunset Architecture',
    category: 'Coastal & Islands',
    location: 'Santorini, Greece',
    rating: 4.98,
    reviewsCount: 47,
    price: '$1,950 / night',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
    duration: '5 - 10 Days',
    highlights: ['Cave Infinity Plunge Pool', 'Panoramic Aegean Sea Balcony', 'Private Catamaran Sunset Cruise', 'Sommelier Wine Tasting'],
    amenities: ['Cave Plunge Pool', 'Aegean Deck', 'Private Butler', 'Sun Terrace', 'Cocktail Bar'],
    description:
      'Sculpted directly into the volcanic caldera cliffs of Oia, this whitewashed sanctuary provides total privacy away from public paths with infinite horizon views.',
  },
  {
    id: 'bali-sidemen',
    title: 'Sidemen Valley Sacred Estate',
    subtitle: 'Sacred River & Rice Terrace Views',
    category: 'Mountain & Forest',
    location: 'Karangasem, Bali',
    rating: 4.95,
    reviewsCount: 64,
    price: '$1,200 / night',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    duration: '5 - 12 Days',
    highlights: ['Natural Spring Water Infinity Pool', 'Sound Healing & Yoga Pavilion', 'Organic Farm-to-Table Dining', 'Mount Agung Sunrise Deck'],
    amenities: ['Natural Pool', 'Sound Temple', 'Organic Kitchen', 'Yoga Terrace', 'River Access'],
    description:
      'Overlooking Mount Agung and terraced emerald fields, this hand-carved bamboo structure provides an open-air sanctuary immersed in natural sounds.',
  },
  {
    id: 'patagonia-fjord',
    title: 'Patagonia Wilderness Pavilion',
    subtitle: 'Untamed Fjord Edge Refuge',
    category: 'Aurora & Glacier',
    location: 'Torres del Paine, Chile',
    rating: 4.99,
    reviewsCount: 31,
    price: '$2,400 / night',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1200&auto=format&fit=crop',
    duration: '6 - 10 Days',
    highlights: ['1-on-1 Wildlife Expedition Guide', 'Blue Glacier Kayaking Expedition', 'Wood-fired Cedar Sauna', 'Patagonian Asado Barbecue Master'],
    amenities: ['Fjord Deck', 'Cedar Sauna', 'Glacier Kayaks', 'Fire Pit', 'Binoculars & Optics'],
    description:
      'Situated at the very end of the continent, experience raw granite spires, blue glaciers, and absolute seclusion with sustainable luxury comfort.',
  },
  {
    id: 'maldives-atoll',
    title: 'Baa Atoll Coral Haven',
    subtitle: 'Overwater Turquoise Refuge',
    category: 'Coastal & Islands',
    location: 'Baa Atoll, Maldives',
    rating: 4.99,
    reviewsCount: 52,
    price: '$2,800 / night',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    duration: '7 - 14 Days',
    highlights: ['Overwater Glass Floor Lagoon Villa', 'Private Marine Biologist Guide', 'Submarine Lagoon Excursion', 'Uninhabited Sandbank Dinner'],
    amenities: ['Overwater Deck', 'Glass Floor', 'Private Reef', 'Spa Pavilion', 'Yacht Shuttle'],
    description:
      'A UNESCO Biosphere reserve overwater villa surrounded by crystal turquoise waters, manta rays, and private coral reefs untouched by crowds.',
  },
  {
    id: 'serengeti-safari',
    title: 'Serengeti Migration Lodge',
    subtitle: 'Untamed Savanna Luxury',
    category: 'Mountain & Forest',
    location: 'Serengeti, Tanzania',
    rating: 4.99,
    reviewsCount: 39,
    price: '$2,250 / night',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    duration: '6 - 12 Days',
    highlights: ['Great Migration Hot Air Balloon Flight', 'Private Game Drive Wildlife Tracker', 'Savanna Sunset Infinity Pool', 'Boma Fire Pit Dinner'],
    amenities: ['Infinity Pool', 'Game Drives', 'Savanna Deck', 'Fire Pit', 'Optics & Binoculars'],
    description:
      'Perched on high granite kopjes overlooking endless golden savannas, watch wild zebra and wildebeest migrations from your private luxury tented pavilion.',
  },
]

const CATEGORIES = ['All', 'Mountain & Forest', 'Coastal & Islands', 'Aurora & Glacier']

interface CuratedDestinationsProps {
  onSelectDestination?: (destination: Destination) => void
}

const CuratedDestinations: React.FC<CuratedDestinationsProps> = ({ onSelectDestination }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({})

  const filteredDestinations =
    activeCategory === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === activeCategory)

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleCardClick = (item: Destination) => {
    if (onSelectDestination) {
      onSelectDestination(item)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-100">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Handpicked World Sanctuaries
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-neutral-900 mt-2"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Curated Sanctuaries & Havens
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="group relative bg-white border border-neutral-200/80 rounded-3xl overflow-hidden hover:shadow-md hover:border-neutral-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden bg-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Location Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                <MapPinIcon size={12} className="text-neutral-700" />
                {item.location}
              </div>

              {/* Like Button */}
              <button
                onClick={(e) => toggleLike(item.id, e)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-800 hover:bg-white transition-all shadow-sm"
                aria-label="Save retreat"
              >
                <HeartIcon
                  size={16}
                  className={likedIds[item.id] ? 'fill-red-500 text-red-500' : 'text-neutral-700'}
                />
              </button>

              {/* Price & Rating Overlay at Bottom of Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-semibold tracking-wider uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {item.duration}
                </span>
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-xs font-medium">
                  <StarIcon size={12} className="text-amber-400" />
                  <span>{item.rating}</span>
                  <span className="text-white/70">({item.reviewsCount})</span>
                </div>
              </div>
            </div>

            {/* Card Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
                  {item.subtitle}
                </span>
                <h3
                  className="text-2xl font-serif text-neutral-900 mt-1 mb-2 group-hover:text-neutral-600 transition-colors"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Starting at</span>
                  <span className="text-base font-semibold text-neutral-900">{item.price}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCardClick(item)}
                  className="px-4 py-2 rounded-full bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white text-xs font-semibold flex items-center gap-1 transition-all duration-300"
                >
                  <span>Explore Haven</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CuratedDestinations
