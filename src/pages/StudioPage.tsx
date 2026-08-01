import React, { useState } from 'react'
import { SparklesIcon, ShieldCheckIcon, CompassIcon, ArrowRightIcon, XIcon, MapPinIcon, CalendarIcon } from '../components/Icons'

interface Project {
  id: string
  title: string
  location: string
  year: string
  category: string
  image: string
  description: string
  area: string
  materials: string[]
  highlights: string[]
}

const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Arashiyama Monolith Villa',
    location: 'Kyoto, Japan',
    year: '2025',
    category: 'Residential Sanctuary',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    description: 'A structural ode to Japanese cedar craft and glass transparency, built into the slope of bamboo forests with acoustic quietude.',
    area: '480 m²',
    materials: ['Shou-sugi-ban Charred Cedar', 'Triple-glazed Acoustic Glass', 'Unpolished Kyoto Basalt'],
    highlights: ['Subterranean Natural Onsen', 'Acoustic Sound Absorption Rating -45dB', 'Forest Meditation Terrace'],
  },
  {
    id: 'p2',
    title: 'Engadin Alpine Timber Lodge',
    location: 'St. Moritz, Switzerland',
    year: '2024',
    category: 'High Altitude Refuge',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop',
    description: 'Hand-milled larch timber framing integrated with geothermal heating and subterranean thermal waters in high Alpine mountains.',
    area: '620 m²',
    materials: ['Hand-hewn Alpine Larch', 'Swiss Granite Stone', 'Zero-VOC Wool Insulation'],
    highlights: ['Direct Ski-in Ski-out Access', 'Heated Outdoor Thermal Spa Pool', 'High Altitude Stargazing Deck'],
  },
  {
    id: 'p3',
    title: 'Ravello Cliffside Pavilion',
    location: 'Amalfi, Italy',
    year: '2026',
    category: 'Coastal Estate',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    description: 'Cantilevered concrete and lime plaster terraces looking 350 meters down onto the Tyrrhenian Sea.',
    area: '710 m²',
    materials: ['Natural Lime Plaster', 'Cast Architectural Concrete', 'Carrara Marble Flooring'],
    highlights: ['Infinity Pool Overlooking Cliffside', 'Private Funicular & Dock Access', 'Terraced Organic Citrus Garden'],
  },
  {
    id: 'p4',
    title: 'Reykjanes Lava Glass Dome',
    location: 'Reykjanes, Iceland',
    year: '2025',
    category: 'Celestial Observatory',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop',
    description: 'Triple-glazed acoustic glass shell engineered to withstand sub-zero arctic winds while capturing 360-degree aurora views.',
    area: '340 m²',
    materials: ['Argon Gas Glass Dome', 'Volcanic Basalt Slab', 'Recycled Steel Skeleton'],
    highlights: ['360° Northern Lights Glass Ceiling', 'Geothermal Heating System', 'Private Helipad Access'],
  },
]

const StudioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="pt-24 pb-20 bg-white text-neutral-900 animate-fade-rise">
      {/* Studio Hero Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-widest mb-4">
          <SparklesIcon size={14} className="text-neutral-700" /> Voyagera Spatial Design Studio
        </span>
        <h1
          className="text-5xl sm:text-7xl font-serif text-neutral-900 max-w-4xl mx-auto leading-[1.05]"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Architecture of Silence & Sacred Shelter
        </h1>
        <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mt-6 leading-relaxed">
          We design physical residences that disappear into nature — using raw stone, cedar, glass, and shadow to cultivate deep quietude.
        </p>
      </section>

      {/* Featured Studio Projects */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-neutral-200">
          <h2 className="text-2xl font-serif text-neutral-900" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
            Selected Works & Residences
          </h2>
          <span className="text-xs text-neutral-400 font-mono">2023 — 2026 Portfolio</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200/80 hover:shadow-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-80 overflow-hidden bg-neutral-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-full font-medium shadow-sm">
                  {proj.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="flex items-center gap-1"><MapPinIcon size={12} /> {proj.location}</span>
                    <span className="flex items-center gap-1"><CalendarIcon size={12} /> {proj.year}</span>
                  </div>
                  <h3
                    className="text-3xl font-serif text-neutral-900 group-hover:text-neutral-600 transition-colors"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-neutral-900">
                  <span>Footprint: {proj.area}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Studio Case <ArrowRightIcon size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="bg-neutral-900 text-white my-20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Design Philosophy
            </span>
            <h2
              className="text-4xl sm:text-5xl font-serif text-white"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              The Three Craft Mandates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800/60 p-8 rounded-3xl border border-neutral-700/60">
              <span className="text-3xl font-serif text-amber-300 block mb-4">01</span>
              <h3 className="text-xl font-serif text-white mb-2" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Acoustic Sanctuary
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every wall angle and textile choice is calculated to absorb exterior decibels, creating natural silence for uninterrupted human thought.
              </p>
            </div>

            <div className="bg-neutral-800/60 p-8 rounded-3xl border border-neutral-700/60">
              <span className="text-3xl font-serif text-amber-300 block mb-4">02</span>
              <h3 className="text-xl font-serif text-white mb-2" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Tactile Materiality
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We work strictly with authentic natural materials: unpolished basalt, charred shou-sugi-ban cedar, linen, and hand-towel lime wash.
              </p>
            </div>

            <div className="bg-neutral-800/60 p-8 rounded-3xl border border-neutral-700/60">
              <span className="text-3xl font-serif text-amber-300 block mb-4">03</span>
              <h3 className="text-xl font-serif text-white mb-2" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Ecosystem Integration
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Residences are designed around pre-existing trees, natural water springs, and solar angles without altering the underlying landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Case Detail Modal — Perfectly Aligned & Responsive */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-rise"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col border border-neutral-100 my-auto"
          >
            {/* Header Image with Gradient & Floating Close Button */}
            <div className="relative h-60 sm:h-72 w-full shrink-0 bg-neutral-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 z-20 shadow-md cursor-pointer"
                aria-label="Close Case Detail"
              >
                <XIcon size={18} />
              </button>

              {/* Overlay Location & Title */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider">
                  {selectedProject.location} • {selectedProject.year}
                </span>
                <h3
                  className="text-3xl sm:text-4xl font-serif text-white mt-2 leading-tight"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                  {selectedProject.category}
                </span>
                <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Materiality */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Key Spatial Materials
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materials.map((m, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architectural Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Sanctuary Features & Engineering
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-800 font-medium">
                      <ShieldCheckIcon size={16} className="text-emerald-600 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer specs bar */}
              <div className="pt-5 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Total Footprint Area</span>
                  <span className="text-base font-bold text-neutral-900">{selectedProject.area}</span>
                </div>
                <button
                  onClick={() => {
                    alert(`Case study requested for ${selectedProject.title}. Our studio team will send full architectural blueprints.`)
                    setSelectedProject(null)
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
                >
                  Request Studio Blueprints
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudioPage
