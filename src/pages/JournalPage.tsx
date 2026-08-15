import React, { useState } from 'react'
import { SparklesIcon, CalendarIcon, ArrowRightIcon, MapPinIcon } from '../components/Icons'

interface Article {
  id: string
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
  authorRole: string
  authorAvatar: string
  excerpt: string
  fullText: string[]
  location: string
  highlights: string[]
}

const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'The Art of Japanese Onsen Solitude',
    subtitle: 'Finding Silence in Arashiyama Cedar Groves',
    category: 'Culture',
    date: 'July 24, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    author: 'Kiyomi Takahashi',
    authorRole: 'Co-Founder & Cultural Curator',
    authorAvatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
    location: 'Kyoto, Japan',
    excerpt: 'Stepping into 42°C natural spring waters as autumn leaves drift silently across steam clouds.',
    highlights: [
      'Subterranean natural geothermal mineral springs emerging at 42°C',
      'Zero acoustic noise pollution & deep circadian sleep restoration',
      'Private 1-on-1 tea ceremony & seasonal bamboo grove meditation',
    ],
    fullText: [
      'In the mountains outside Kyoto, time is measured not by seconds, but by the slow dripping of geothermal water over moss-covered granite stones.',
      'For over eight centuries, Japanese monks and poets have retreated to natural hot springs to shed the noise of court life and city hustle. At our private Arashiyama villa, the spring water emerges from 800 meters underground, rich in natural minerals that calm the nervous system.',
      'When you submerge yourself in total quietude at dawn, surrounded only by ancient Japanese cedar and bamboo, your mind naturally aligns with the rhythm of the forest.',
      'Every season brings a distinct olfactory landscape: spring cherry blossoms floating over natural wooden tubs, summer pine resin carried by mountain breezes, crisp maple amber in autumn, and deep silent snow blankets in winter.',
    ],
  },
  {
    id: 'art-2',
    title: 'Stargazing at 2,000 Meters',
    subtitle: 'Winter Notes from the Engadin Alps',
    category: 'Wilderness',
    date: 'June 18, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop',
    author: 'Julian Von Bern',
    authorRole: 'Co-Founder & Chief Architect',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    location: 'St. Moritz, Switzerland',
    excerpt: 'Zero light pollution, sub-zero air, and the Milky Way stretching over high-altitude Swiss peaks.',
    highlights: [
      'High altitude dark sky reserve with zero light pollution',
      'Private celestial telescope deck equipped with heated cashmere blankets',
      'Geothermal alpine thermal baths under winter star fields',
    ],
    fullText: [
      'High above St. Moritz, when the last alpine skiers return to the valleys below, a profound stillness envelops the Engadin valley.',
      'At 2,000 meters altitude, atmospheric distortion drops to near zero. Armed with heated cashmere blankets and hot spiced cider, guests step onto the private telescope deck to gaze directly into the spiral arms of Andromeda.',
      'There is something deeply grounding about realizing how small our everyday worries are against the backdrop of eternal cosmic silence.',
      'Our high-altitude refuge was built specifically to protect dark sky corridors. Modern architectural lighting is strictly recessed and shielded, allowing the night sky to shine with unhindered brilliance.',
    ],
  },
  {
    id: 'art-3',
    title: 'Living Below the Aurora Borealis',
    subtitle: 'Architectural Glass Domes in Reykjanes',
    category: 'Essay',
    date: 'May 30, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop',
    author: 'Dr. Alistair Sterling',
    authorRole: 'Head of Expedition & Wilderness Safety',
    authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    location: 'Reykjanes, Iceland',
    excerpt: 'How triple-glazed acoustic glass turned harsh sub-arctic blizzards into cozy celestial theaters.',
    highlights: [
      '360° heated argon-filled acoustic glass dome ceiling',
      'Private volcanic lava geothermal lagoon access',
      'Automated Northern Lights celestial alarm system',
    ],
    fullText: [
      'Reykjanes is a realm forged by sub-arctic wind and subterranean magma. To live here is to exist between ice and fire.',
      'When designing our glass domes, the challenge was engineering a ceiling that could withstand 100 km/h blizzard gusts while remaining heated and crystal clear for viewing solar flares.',
      'Lying back in bed at 2:00 AM while emerald and violet auroral curtains dance directly above your head is an experience that stays with you for a lifetime.',
    ],
  },
  {
    id: 'art-4',
    title: 'Cliffside Mediterranean Gastronomy',
    subtitle: 'Harvesting Bio-Dynamic Amalfi Terraces',
    category: 'Gastronomy',
    date: 'April 12, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    author: 'Camille Laurent',
    authorRole: 'Gastronomy & Sommelier Director',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    location: 'Amalfi Coast, Italy',
    excerpt: 'From wild mountain oregano to sun-ripened Sfusato lemons overlooking the Tyrrhenian Sea.',
    highlights: [
      'Private 3-Star Michelin chef farm-to-table culinary service',
      'Organic Sfusato lemon & heirloom sea-salt terraced gardens',
      'Rare bio-dynamic Campania wine cellar tasting sessions',
    ],
    fullText: [
      'The terraced lemon groves of Ravello descend 300 meters straight into turquoise waters. Here, soil is nurtured by sea salt air and volcanic minerals.',
      'Every morning, our kitchen team hand-harvests sun-drenched lemons, wild caper leaves, and heirloom tomatoes to prepare intimate farm-to-table meals paired with rare biodynamic Campania vintages.',
    ],
  },
]

const CATEGORIES = ['All', 'Essay', 'Culture', 'Wilderness', 'Gastronomy']

const JournalPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [readingArticle, setReadingArticle] = useState<Article | null>(null)

  const filteredArticles =
    activeCategory === 'All'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory)

  // ── Redesigned Magazine-Grade Editorial Article Details View ──
  if (readingArticle) {
    const otherArticles = ARTICLES.filter((a) => a.id !== readingArticle.id).slice(0, 2)

    return (
      <div className="pt-28 pb-20 bg-white text-neutral-900 animate-fade-rise">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Bar Navigation & Actions */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-200">
            <button
              onClick={() => {
                setReadingArticle(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition-all duration-200"
            >
              ← Back to All Dispatches
            </button>

            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                {readingArticle.category}
              </span>
              <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                {readingArticle.readTime}
              </span>
            </div>
          </div>

          {/* Article Header Headline */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-serif text-neutral-900 leading-[1.03]"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              {readingArticle.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-500 font-serif italic max-w-2xl mx-auto">
              {readingArticle.subtitle}
            </p>

            {/* Author Byline Bar */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <img
                src={readingArticle.authorAvatar}
                alt={readingArticle.author}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-neutral-200"
              />
              <div className="text-left">
                <h4 className="text-sm font-semibold text-neutral-900">{readingArticle.author}</h4>
                <p className="text-xs text-neutral-400">{readingArticle.authorRole} • {readingArticle.date}</p>
              </div>
            </div>
          </div>

          {/* Hero Feature Image */}
          <div className="relative h-[400px] sm:h-[540px] w-full rounded-3xl overflow-hidden mb-16">
            <img
              src={readingArticle.image}
              alt={readingArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md text-white text-xs rounded-full font-medium flex items-center gap-2">
              <MapPinIcon size={14} className="text-amber-300" /> {readingArticle.location}
            </div>
          </div>

          {/* 2-Column Magazine Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Editorial Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8 font-sans">
              {/* First Lead Paragraph with Classic Drop-Cap */}
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-amber-700 text-lg sm:text-xl text-neutral-800 leading-relaxed font-sans">
                {readingArticle.fullText[0]}
              </p>

              {/* Subsequent Body Paragraphs */}
              {readingArticle.fullText.slice(1).map((paragraph, idx) => (
                <p key={idx} className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Editorial Pull Quote Block */}
              <blockquote className="my-10 p-8 sm:p-10 bg-neutral-50 border-l-4 border-amber-600 rounded-r-3xl space-y-3 shadow-sm">
                <p
                  className="text-2xl sm:text-3xl font-serif italic text-neutral-900 leading-snug"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  "{readingArticle.excerpt}"
                </p>
                <cite className="text-xs text-neutral-400 font-mono block not-italic">
                  — {readingArticle.author}, Voyagera Editorial Dispatch
                </cite>
              </blockquote>

              {/* Dispatch Key Highlights Box */}
              <div className="p-8 bg-neutral-900 text-white rounded-3xl space-y-4 my-10 shadow-xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  Dispatch Takeaways
                </span>
                <h3
                  className="text-2xl font-serif text-white"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  Key Sanctuary Highlights
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  {readingArticle.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky Editorial Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              {/* Author Profile Card */}
              <div className="bg-neutral-50 border border-neutral-200/80 rounded-3xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src={readingArticle.authorAvatar}
                    alt={readingArticle.author}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-serif text-neutral-900" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                      {readingArticle.author}
                    </h4>
                    <span className="text-xs text-amber-700 font-semibold block">{readingArticle.authorRole}</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Curating unlisted private residences and bespoke wilderness dispatches for Voyagera global members.
                </p>
              </div>

              {/* Related Dispatches Card */}
              <div className="bg-neutral-900 text-white rounded-3xl p-6 space-y-6">
                <h4 className="text-xl font-serif text-white border-b border-neutral-800 pb-3" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                  Related Dispatches
                </h4>

                <div className="space-y-6">
                  {otherArticles.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => {
                        setReadingArticle(rel)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className="group cursor-pointer space-y-2 pb-4 border-b border-neutral-800 last:border-0 last:pb-0"
                    >
                      <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
                        {rel.category} • {rel.readTime}
                      </span>
                      <h5
                        className="text-lg font-serif text-white group-hover:text-amber-200 transition-colors"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        {rel.title}
                      </h5>
                      <span className="text-xs text-neutral-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Essay <ArrowRightIcon size={12} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-20 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => {
                setReadingArticle(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-full transition-all duration-200 shadow-lg"
            >
              ← Return to All Journal Dispatches
            </button>

            <span className="text-xs text-neutral-400 font-mono">
              Published by Voyagera Editorial • Zurich / Kyoto / New York
            </span>
          </div>
        </div>
      </div>
    )
  }

  // ── Journal Grid View ──
  return (
    <div className="pt-24 pb-20 bg-white text-neutral-900 animate-fade-rise">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-widest mb-4">
          <SparklesIcon size={14} className="text-amber-600" /> Voyagera Print & Digital Journal
        </span>
        <h1
          className="text-5xl sm:text-7xl font-serif text-neutral-900 max-w-4xl mx-auto leading-[1.05]"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Dispatches from Quiet Corners of the Earth
        </h1>
        <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mt-6 leading-relaxed">
          Essays, architectural studies, and travel dispatches published quarterly for our global community.
        </p>

        {/* Filter Categories */}
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

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => {
                setReadingArticle(art)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="group cursor-pointer bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200/80 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-neutral-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-full font-medium">
                  {art.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1"><CalendarIcon size={12} /> {art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h2
                    className="text-3xl font-serif text-neutral-900 group-hover:text-neutral-600 transition-colors"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {art.title}
                  </h2>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mt-1 mb-3">
                    {art.subtitle}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">By {art.author}</span>
                  <span className="text-xs font-semibold text-neutral-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Essay <ArrowRightIcon size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default JournalPage
