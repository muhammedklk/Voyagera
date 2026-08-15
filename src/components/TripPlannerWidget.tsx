import React, { useState, useRef, useEffect } from 'react'
import { MapPinIcon, CalendarIcon, UsersIcon, SparklesIcon, SearchIcon, ChevronDownIcon, XIcon } from './Icons'

const DESTINATIONS = [
  'Kyoto & Arashiyama, Japan',
  'Amalfi & Positano, Italy',
  'Engadin Alps, Switzerland',
  'Reykjavik & Highland Glaciers, Iceland',
  'Ubud & Sidemen Valley, Bali',
  'Patagonia Fjords, Chile',
]

const SEASON_OPTIONS = [
  { value: 'Autumn 2026', label: 'Autumn 2026 (Oct - Nov)' },
  { value: 'Winter 2026', label: 'Winter 2026 (Dec - Feb)' },
  { value: 'Spring 2027', label: 'Spring 2027 (Mar - May)' },
  { value: 'Summer 2027', label: 'Summer 2027 (Jun - Aug)' },
]

const GUEST_OPTIONS = [
  { value: 'Solo Voyager', label: 'Solo Voyager' },
  { value: '2 Travelers', label: '2 Travelers (Couples Sanctuary)' },
  { value: 'Small Group (4-6)', label: 'Small Group (4 - 6 Guests)' },
  { value: 'Master Charter (8+)', label: 'Master Charter (8+ Guests)' },
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

const CustomSelect: React.FC<CustomSelectProps> = ({
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
      <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1">
        {icon} {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 bg-neutral-50 hover:bg-neutral-100/90 border rounded-2xl text-sm text-neutral-900 flex items-center justify-between transition-all focus:outline-none ${
          isOpen ? 'border-neutral-900 ring-2 ring-neutral-900/10 bg-white' : 'border-neutral-200'
        }`}
      >
        <span className="truncate font-medium">{selectedOption.label}</span>
        <ChevronDownIcon
          size={16}
          className={`text-neutral-500 transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-neutral-900' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-2xl shadow-xl z-50 overflow-hidden py-1.5 animate-fade-rise">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm transition-colors flex items-center justify-between ${
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

const TripPlannerWidget: React.FC = () => {
  const [destination, setDestination] = useState('')
  const [season, setSeason] = useState('Autumn 2026')
  const [guests, setGuests] = useState('2 Travelers')
  const [isSearching, setIsSearching] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setSearched(true)
    }, 600)
  }

  return (
    <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-20 mb-20">
      <div className="bg-white/95 backdrop-blur-md border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-neutral-900/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-medium tracking-wide uppercase">
              <SparklesIcon size={14} /> Tailored Expeditions
            </span>
            <h2
              className="text-2xl sm:text-3xl font-serif text-neutral-900 mt-2"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Curate Your Sanctuary
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-xs">
            Select your preferences to unlock unlisted private residences and bespoke itineraries.
          </p>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Destination */}
          <div className="relative group">
            <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1">
              <MapPinIcon size={14} className="text-neutral-600" /> Destination
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Kyoto, Alps, Amalfi..."
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            />
          </div>

          {/* Custom Travel Period Dropdown */}
          <CustomSelect
            label="Travel Period"
            icon={<CalendarIcon size={14} className="text-neutral-600" />}
            value={season}
            options={SEASON_OPTIONS}
            onChange={setSeason}
          />

          {/* Custom Guests & Party Dropdown */}
          <CustomSelect
            label="Guests & Party"
            icon={<UsersIcon size={14} className="text-neutral-600" />}
            value={guests}
            options={GUEST_OPTIONS}
            onChange={setGuests}
          />

          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <button
              type="submit"
              disabled={isSearching}
              className="w-full h-[46px] bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-neutral-900/10 disabled:opacity-75"
            >
              {isSearching ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <SearchIcon size={16} /> Explore Private Journeys
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Suggestion Chips */}
        <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2">
          <span className="text-xs text-neutral-400 font-medium">Popular:</span>
          {DESTINATIONS.slice(0, 4).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setDestination(item.split(',')[0])}
              className="text-xs px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
            >
              {item.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Search Results Banner */}
        {searched && (
          <div className="mt-6 p-4 rounded-2xl bg-neutral-900 text-white flex items-center justify-between animate-fade-rise">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                ✦
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  {destination || 'Curated Destinations'} • {season}
                </h4>
                <p className="text-xs text-neutral-300">
                  8 unlisted sanctuaries found for {guests}. Scroll down to explore private havens.
                </p>
              </div>
            </div>
            <button
              onClick={() => setSearched(false)}
              className="text-neutral-400 hover:text-white p-1"
            >
              <XIcon size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default TripPlannerWidget
