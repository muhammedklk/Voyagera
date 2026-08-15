import React, { useState } from 'react'
import { StarIcon, QuoteIcon, MapPinIcon, ArrowRightIcon } from './Icons'

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Our seven days at the Arashiyama Bamboo Villa felt like stepping out of time entirely. The private tea ceremony master and morning mountain fog restored a peace I had lost years ago.',
    author: 'Elena Rostova',
    role: 'Principal Architect & Partner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    location: 'Kyoto Sanctuary Journey',
    rating: 5,
    year: 'Spring 2026',
  },
  {
    id: 2,
    quote:
      'The Ravello Cliffside Residence was completely unmatched. From the private helicopter arrival to the sunset yacht charter, every micro-detail was executed with quiet perfection.',
    author: 'Marcus Vance',
    role: 'Venture Investor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    location: 'Amalfi Coast Expedition',
    rating: 5,
    year: 'Summer 2025',
  },
  {
    id: 3,
    quote:
      'Watching the Northern Lights from a heated glass dome in the middle of Iceland lava fields was the most ethereal experience of our lives. Voyagera is in a class of its own.',
    author: 'Dr. Sophia & Julian Thorne',
    role: 'Biomedical Researchers',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    location: 'Reykjanes Celestial Retreat',
    rating: 5,
    year: 'Winter 2026',
  },
]

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-neutral-50 py-24 px-6 border-t border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Voices & Stories
          </span>
          <h2
            className="text-4xl sm:text-5xl font-serif text-neutral-900"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Reflections from Our Voyagers
          </h2>
          <p className="text-sm text-neutral-500">
            Read authentic accounts from founders, creators, and leaders who trusted Voyagera with their sacred time.
          </p>
        </div>

        {/* Featured Large Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xl shadow-neutral-900/5 relative overflow-hidden transition-all duration-300">
          <QuoteIcon size={80} className="text-neutral-100 absolute -top-4 -right-4 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <StarIcon key={i} size={18} />
                ))}
              </div>

              <blockquote
                className="text-2xl sm:text-3xl font-serif text-neutral-900 leading-relaxed italic"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-neutral-200"
                />
                <div>
                  <h4 className="text-base font-semibold text-neutral-900">
                    {TESTIMONIALS[activeIndex].author}
                  </h4>
                  <p className="text-xs text-neutral-500 font-sans">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-400 mt-0.5">
                    <MapPinIcon size={12} />
                    <span>{TESTIMONIALS[activeIndex].location}</span>
                    <span>•</span>
                    <span>{TESTIMONIALS[activeIndex].year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Selector List */}
            <div className="lg:col-span-4 space-y-3 lg:border-l lg:border-neutral-100 lg:pl-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                Select Story
              </span>
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                    activeIndex === idx
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-neutral-200'
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
