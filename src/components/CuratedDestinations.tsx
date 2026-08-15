import React, { useState } from 'react'
import { MapPinIcon, StarIcon, ArrowRightIcon, HeartIcon } from './Icons'

export interface Destination {
  id: string
  title: string
  subtitle: string
  category: 'Backwaters & Lagoons' | 'Highland Mist' | 'Wilderness Rainforest' | 'Coastal & Beaches'
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
    id: 'kumarakom-kettuvallam',
    title: 'Cedar Kettuvallam Floating Villa',
    subtitle: 'Backwater Slow Living & Sunset Lagoons',
    category: 'Backwaters & Lagoons',
    location: 'Vembanad Lake, Kumarakom',
    rating: 4.99,
    reviewsCount: 68,
    price: '₹28,500 / night',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop',
    duration: '3 - 6 Days',
    highlights: [
      'Handcrafted Anjili Wood Kettuvallam',
      'Personal Chef for Authentic Nadan Seafood & Sadya',
      'Toddy Palm Sunset Lagoon Cruise',
      'Solar-Powered Quiet Propulsion & Plunge Deck',
    ],
    amenities: ['Solar Deck', 'Private Chef', 'Kayak & Canoe Access', 'Air Conditioned Suite', 'Starlink Wifi'],
    description:
      'Glide through serene backwater channels in a traditional hand-woven houseboat built from aged jackwood and bamboo. Includes private butler service and fresh farm-to-table coastal dining.',
  },
  {
    id: 'munnar-tea-mist',
    title: 'Cloud Forest Tea Sanctuary',
    subtitle: 'High Altitude Colonial Plantation Lodge',
    category: 'Highland Mist',
    location: 'Anamudi Hills, Munnar',
    rating: 4.98,
    reviewsCount: 54,
    price: '₹32,000 / night',
    image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200&auto=format&fit=crop',
    duration: '4 - 8 Days',
    highlights: [
      'Private 100-Acre Organic Tea Estate',
      'Morning Mist Deck & Fireplace Lounge',
      'Artisanal Tea Tasting & Harvesting Experience',
      'Trek to Secret Shola Rainforest Waterfalls',
    ],
    amenities: ['Fireplace Salon', 'Organic Tea Bar', 'Infinity Pool', 'Naturalist Guide', 'Heated Beds'],
    description:
      'Perched 6,000 feet above sea level, this restored stone and teak lodge is enveloped in swirling mountain mist and fragrant tea gardens.',
  },
  {
    id: 'wayanad-rainforest',
    title: 'Wayanad Canopy Treehouse Haven',
    subtitle: 'Teak Rainforest & Bamboo Solitude',
    category: 'Wilderness Rainforest',
    location: 'Vythiri Wilds, Wayanad',
    rating: 4.97,
    reviewsCount: 41,
    price: '₹24,000 / night',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    duration: '3 - 7 Days',
    highlights: [
      'Built 80ft Above Rainforest Floor in Living Teak Trees',
      'Natural Mountain Spring Jacuzzi Deck',
      'Night Safari & Firefly Watching Trails',
      'Traditional Bamboo Rafting Expeditions',
    ],
    amenities: ['Tree Canopy Deck', 'Spring Jacuzzi', 'Naturalist Escort', 'Zero Carbon Footprint', 'Organic Spa'],
    description:
      'Suspended in ancient canopy foliage, experience the soothing rhythm of rain, chirping cicadas, and wild cardamom scents in absolute privacy.',
  },
  {
    id: 'marari-nalukettu',
    title: 'Heritage Nalukettu Ocean Villa',
    subtitle: 'Ancient Courtyard Architecture & Palms',
    category: 'Coastal & Beaches',
    location: 'Marari Coast, Alleppey',
    rating: 4.99,
    reviewsCount: 72,
    price: '₹36,000 / night',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    duration: '5 - 10 Days',
    highlights: [
      'Traditional 4-Wing Nalukettu Open Courtyard',
      'Private Saltwater Plunge Pool & Coconut Grove',
      'Authentic Herbal Ayurvedic Massage Pavilion',
      'Direct Private Access to White Sand Coast',
    ],
    amenities: ['Inner Courtyard', 'Private Beach Dock', 'Ayurveda Pavilion', 'Open Air Rain Shower', 'Bicycles'],
    description:
      'A masterpiece of Kerala wood carving and laterite stone architecture. Relax under open sky courtyards with ocean breezes and private coconut groves.',
  },
  {
    id: 'varkala-cliff',
    title: 'Red Cliff Panorama Eco Lodge',
    subtitle: 'Arabian Sea Sunset Sanctuary',
    category: 'Coastal & Beaches',
    location: 'North Cliff, Varkala',
    rating: 4.96,
    reviewsCount: 39,
    price: '₹26,500 / night',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    duration: '4 - 9 Days',
    highlights: [
      'Panoramic 180° Ocean Sunset Balconies',
      'Private Cliffside Yoga & Meditation Instructor',
      'Fresh Catch Charcoal Seafood Grills',
      'Mineral Spring Bath Access',
    ],
    amenities: ['Infinity Cliff Pool', 'Sunset Deck', 'Yoga Pavilion', 'Personal Concierge', 'Hammock Gardens'],
    description:
      'Perched high above red laterite ocean cliffs, this minimalist eco-sanctuary offers breathtaking views of crashing ocean waves and golden hour horizon.',
  },
  {
    id: 'athirappilly-cascades',
    title: 'Sholayar Riverfront Pavilion',
    subtitle: 'Mist Cascades & Forest Symphony',
    category: 'Wilderness Rainforest',
    location: 'Athirappilly Wilds, Thrissur',
    rating: 4.98,
    reviewsCount: 47,
    price: '₹29,000 / night',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    duration: '3 - 6 Days',
    highlights: [
      'Uninterrupted View of Roaring Forest Cascades',
      'Wild Elephant & Great Hornbill Trail Guided Tour',
      'Natural River Rock Plunge Pools',
      'Forest Herbal Dining Experience',
    ],
    amenities: ['River Deck', 'Cascade Pool', 'Wildlife Optics', 'Outdoor Fire Pit', 'Bamboo Cabana'],
    description:
      'Immerse yourself in the thunderous majesty of Kerala wilderness where lush rainforest meets crystal clear river cascades.',
  },
]

const CATEGORIES = ['All', 'Backwaters & Lagoons', 'Highland Mist', 'Wilderness Rainforest', 'Coastal & Beaches']

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
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-[#EADFCF]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
            Handpicked Nadan Sanctuaries
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-[#1B3B2B] mt-2"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Curated Native Havens & Retreats
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1B3B2B] text-white shadow-md'
                  : 'bg-[#F5F0E6] text-[#4A4744] hover:bg-[#EADFCF] border border-[#EADFCF]'
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
            className="group relative bg-[#FDFBF7] border border-[#EADFCF] rounded-3xl overflow-hidden hover:shadow-xl hover:border-[#C85A32]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden bg-[#F5F0E6]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Location Badge */}
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md text-[#1B3B2B] text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-[#EADFCF]">
                <MapPinIcon size={12} className="text-[#C85A32]" />
                {item.location}
              </div>

              {/* Like Button */}
              <button
                onClick={(e) => toggleLike(item.id, e)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FDFBF7]/85 backdrop-blur-md flex items-center justify-center text-[#1B3B2B] hover:bg-white transition-all shadow-sm border border-[#EADFCF]"
                aria-label="Save retreat"
              >
                <HeartIcon
                  size={16}
                  className={likedIds[item.id] ? 'fill-[#C85A32] text-[#C85A32]' : 'text-[#4A4744]'}
                />
              </button>

              {/* Price & Rating Overlay at Bottom of Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-semibold tracking-wider uppercase bg-[#1B3B2B]/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {item.duration}
                </span>
                <div className="flex items-center gap-1 bg-[#1B3B2B]/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-xs font-medium">
                  <StarIcon size={12} className="text-[#D4AF37]" />
                  <span>{item.rating}</span>
                  <span className="text-white/70">({item.reviewsCount})</span>
                </div>
              </div>
            </div>

            {/* Card Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#C85A32] uppercase tracking-widest">
                  {item.subtitle}
                </span>
                <h3
                  className="text-2xl font-serif text-[#1B3B2B] mt-1 mb-2 group-hover:text-[#C85A32] transition-colors"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A4744] line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EADFCF] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#4A4744] uppercase tracking-wider block">Starting at</span>
                  <span className="text-base font-bold text-[#1B3B2B]">{item.price}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCardClick(item)}
                  className="px-4 py-2 rounded-full bg-[#F5F0E6] group-hover:bg-[#1B3B2B] group-hover:text-white text-xs font-semibold flex items-center gap-1 transition-all duration-300 border border-[#EADFCF]"
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
