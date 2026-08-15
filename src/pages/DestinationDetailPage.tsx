import React, { useState, useRef, useEffect } from 'react'
import {
  MapPinIcon,
  StarIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon,
  CalendarIcon,
  UsersIcon,
  GlobeIcon,
  ChevronDownIcon,
} from '../components/Icons'
import { Destination, DESTINATIONS } from '../components/CuratedDestinations'

interface DestinationDetailPageProps {
  destination: Destination
  onBack: () => void
  onSelectDestination?: (dest: Destination) => void
}

const SEASON_OPTIONS = [
  { value: 'Autumn 2026', label: 'Autumn 2026 (Oct - Nov)' },
  { value: 'Winter 2026', label: 'Winter 2026 (Dec - Feb)' },
  { value: 'Spring 2027', label: 'Spring 2027 (Mar - May)' },
  { value: 'Summer 2027', label: 'Summer 2027 (Jun - Aug)' },
]

const GUEST_OPTIONS = [
  { value: 'Solo Voyager', label: 'Solo Voyager' },
  { value: '2 Guests', label: '2 Guests (Couples Retreat)' },
  { value: '4 Guests', label: '4 Guests (Private Charter)' },
  { value: '6+ Guests', label: '6+ Guests (Estate Charter)' },
]

interface SelectOption {
  value: string
  label: string
}

interface CustomSelectProps {
  label: string
  icon: React.ReactNode
  value: string
  options: SelectOption[]
  onChange: (val: string) => void
}

const CustomDetailSelect: React.FC<CustomSelectProps> = ({
  label,
  icon,
  value,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((o) => o.value === value) || options[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5 flex items-center gap-1">
        {icon} {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-neutral-900 flex items-center justify-between transition-all focus:outline-none ${
          isOpen ? 'border-neutral-900 ring-2 ring-neutral-900/10' : 'border-neutral-200'
        }`}
      >
        <span className="truncate font-medium">{selectedOption.label}</span>
        <ChevronDownIcon
          size={14}
          className={`text-neutral-500 transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-neutral-900' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-xl shadow-xl z-50 overflow-hidden py-1 animate-fade-rise">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center justify-between ${
                opt.value === value
                  ? 'bg-neutral-900 text-white font-medium'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <span>{opt.label}</span>
              {opt.value === value && <span className="text-amber-400 text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destination,
  onBack,
  onSelectDestination,
}) => {
  const [isLiked, setIsLiked] = useState(false)
  const [selectedSeason, setSelectedSeason] = useState('Autumn 2026')
  const [guestsCount, setGuestsCount] = useState('2 Guests')
  const [inquirySubmitted, setInquirySubmitted] = useState(false)

  // Filter out the active destination so each page shows different recommendations
  const otherDestinations = DESTINATIONS.filter((d) => d.id !== destination.id)

  // Deterministically rotate/pick 3 different destinations for each page
  const currentIndex = DESTINATIONS.findIndex((d) => d.id === destination.id)
  const recommendedDestinations = Array.from({ length: 3 }, (_, i) => {
    const idx = (currentIndex + 1 + i) % otherDestinations.length
    return otherDestinations[idx]
  })

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInquirySubmitted(true)
  }

  return (
    <div className="pt-20 pb-24 bg-white text-neutral-900 animate-fade-rise">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-neutral-100">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <span>← Back to All Sanctuaries</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400">Haven Ref: #{destination.id}</span>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full border transition-colors ${
              isLiked
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-900'
            }`}
            title="Save Retreat"
          >
            <HeartIcon size={16} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Hero Banner Showcase */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        <div className="relative h-[320px] sm:h-[480px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Floating Category & Rating Pills */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-semibold uppercase tracking-wider">
              {destination.category}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-semibold flex items-center gap-1">
              <StarIcon size={14} className="text-amber-400" /> {destination.rating} ({destination.reviewsCount} Reviews)
            </span>
          </div>

          {/* Title & Location Overlay */}
          <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-300 mb-2">
                <MapPinIcon size={14} className="text-amber-300" /> {destination.location}
              </div>
              <h1
                className="text-4xl sm:text-6xl font-serif leading-tight"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                {destination.title}
              </h1>
            </div>

            <div className="text-left md:text-right shrink-0">
              <span className="text-xs text-neutral-300 block uppercase tracking-wider">Duration</span>
              <span className="text-lg font-serif italic text-amber-200" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                {destination.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Detailed Overview & Story */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
                The Sanctuary Experience
              </span>
              <h2
                className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                {destination.subtitle}
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed font-sans">
                {destination.description}
              </p>
            </div>

            {/* Signature Inclusions */}
            <div className="space-y-4 pt-6 border-t border-neutral-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <SparklesIcon size={16} className="text-amber-600" /> Signature Inclusions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/70 text-xs font-medium text-neutral-800 flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Residence Amenities */}
            <div className="space-y-4 pt-6 border-t border-neutral-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                Residence Amenities
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {destination.amenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-neutral-100 text-neutral-800 text-xs font-medium rounded-full border border-neutral-200"
                  >
                    ✓ {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Conservation & Discretion Guarantee */}
            <div className="p-8 bg-neutral-900 text-white rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <GlobeIcon size={16} /> Ecosystem Regeneration Guarantee
              </div>
              <h4 className="text-2xl font-serif" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Zero-Footprint Sanctuary Pledge
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                5% of your total stay investment is allocated to local wilderness conservation, reforestation projects, and native community heritage preservation in {destination.location}.
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Booking & Reservation Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-neutral-50 border border-neutral-200/80 rounded-3xl p-8 shadow-xl shadow-neutral-900/5 space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider block">Investment</span>
                  <span className="text-2xl font-bold text-neutral-900">{destination.price}</span>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                  Available Seasonally
                </span>
              </div>

              {inquirySubmitted ? (
                <div className="p-6 bg-neutral-900 text-white rounded-2xl text-center space-y-3 animate-fade-rise">
                  <ShieldCheckIcon size={36} className="text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-serif" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                    Reservation Inquiry Registered
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Our private concierge for <span className="text-white font-semibold">{destination.location}</span> will contact you within 4 hours to confirm dates and custom preferences.
                  </p>
                  <button
                    onClick={() => setInquirySubmitted(false)}
                    className="px-5 py-2 bg-white text-neutral-900 text-xs font-semibold rounded-full mt-2"
                  >
                    Modify Preferences
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  {/* Custom Travel Period Dropdown */}
                  <CustomDetailSelect
                    label="Travel Period"
                    icon={<CalendarIcon size={14} />}
                    value={selectedSeason}
                    options={SEASON_OPTIONS}
                    onChange={setSelectedSeason}
                  />

                  {/* Custom Guests Count Dropdown */}
                  <CustomDetailSelect
                    label="Guests & Party"
                    icon={<UsersIcon size={14} />}
                    value={guestsCount}
                    options={GUEST_OPTIONS}
                    onChange={setGuestsCount}
                  />

                  <button
                    type="submit"
                    className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-neutral-900/10"
                  >
                    Reserve {destination.title}
                  </button>
                </form>
              )}

              <div className="pt-4 border-t border-neutral-200 text-center space-y-1">
                <span className="text-[11px] text-neutral-400 block">Strict Confidentiality & Discretion</span>
                <span className="text-xs text-neutral-600 font-medium">Encrypted Direct Line: concierge@voyagera-expeditions.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Recommended Destinations Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-8 border-t border-neutral-200 mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Curated Alternatives
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-neutral-900 mt-1"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              More Recommended Destinations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm">
            Explore other unlisted architectural havens tailored for quiet luxury and deep immersion.
          </p>
        </div>

        {/* 3 Recommended Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedDestinations.map((recItem) => (
            <div
              key={recItem.id}
              onClick={() => onSelectDestination && onSelectDestination(recItem)}
              className="group bg-white border border-neutral-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={recItem.image}
                    alt={recItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-semibold">
                      {recItem.location.split(',')[0]}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-semibold flex items-center gap-1">
                    <StarIcon size={12} className="text-amber-400" /> {recItem.rating}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 block">
                    {recItem.subtitle}
                  </span>
                  <h3
                    className="text-2xl font-serif text-neutral-900"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {recItem.title}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {recItem.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-400 block uppercase">Starting at</span>
                  <span className="text-sm font-bold text-neutral-900">{recItem.price}</span>
                </div>
                <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-800 text-xs font-semibold rounded-full transition-colors flex items-center gap-1">
                  <span>Explore Haven</span>
                  <ArrowRightIcon size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DestinationDetailPage
