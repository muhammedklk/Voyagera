import React, { useState } from 'react'
import { StarIcon, QuoteIcon, MapPinIcon, ArrowRightIcon } from './Icons'

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Our three days on the Cedar Kettuvallam through Vembanad Lake felt like floating through a dream. The private sadya meal and sunset palm cruises restored a quietude we had forgotten.',
    author: 'Elena & Marcus Vance',
    role: 'Architect & Design Curator',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    location: 'Kumarakom Backwater Expedition',
    rating: 5,
    year: 'Monsoon 2026',
  },
  {
    id: 2,
    quote:
      'The Cloud Forest Tea Sanctuary in Munnar was completely unmatched. Waking up above mountain mist with fresh estate tea brewed by our host was absolute bliss.',
    author: 'Dr. Julian Thorne',
    role: 'Botanical Researcher',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    location: 'Munnar Highland Retreat',
    rating: 5,
    year: 'Winter 2025',
  },
  {
    id: 3,
    quote:
      'Staying at the Heritage Nalukettu Villa near Marari Beach gave us a deep appreciation of Kerala woodwork and ancient courtyard design. Nattuvazhi is in a class of its own.',
    author: 'Sophia & Anand Nair',
    role: 'Heritage Art Historians',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    location: 'Marari Ocean Sanctuary',
    rating: 5,
    year: 'Spring 2026',
  },
]

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-[#F5F0E6] py-24 px-6 border-t border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
            Native Dispatches & Voices
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-[#1B3B2B]"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Reflections from Our Voyagers
          </h2>
          <p className="text-sm text-[#4A4744]">
            Read authentic accounts from travelers and creators who explored secret native trails with Nattuvazhi.
          </p>
        </div>

        {/* Featured Large Card */}
        <div className="bg-[#FDFBF7] rounded-3xl p-8 sm:p-12 border border-[#EADFCF] shadow-xl relative overflow-hidden transition-all duration-300">
          <QuoteIcon size={80} className="text-[#EADFCF] absolute -top-4 -right-4 pointer-events-none opacity-50" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <StarIcon key={i} size={18} />
                ))}
              </div>

              <blockquote
                className="text-2xl sm:text-3xl font-serif text-[#1B3B2B] leading-relaxed italic"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-[#EADFCF]">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#C85A32]"
                />
                <div>
                  <h4 className="text-base font-semibold text-[#1B3B2B]">
                    {TESTIMONIALS[activeIndex].author}
                  </h4>
                  <p className="text-xs text-[#4A4744] font-sans">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-[#C85A32] font-medium mt-0.5">
                    <MapPinIcon size={12} />
                    <span>{TESTIMONIALS[activeIndex].location}</span>
                    <span>•</span>
                    <span>{TESTIMONIALS[activeIndex].year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Selector List */}
            <div className="lg:col-span-4 space-y-3 lg:border-l lg:border-[#EADFCF] lg:pl-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] block mb-2">
                Select Native Account
              </span>
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                    activeIndex === idx
                      ? 'bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-md'
                      : 'bg-[#F5F0E6] hover:bg-[#EADFCF] text-[#1A1918] border-[#EADFCF]'
                  }`}
                >
                  <p className="text-xs font-medium line-clamp-1 mb-1 font-serif italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between text-[11px] opacity-80">
                    <span>{t.author}</span>
                    <ArrowRightIcon size={12} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
