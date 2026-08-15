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
      <div className="pt-28 pb-20 bg-[#FDFBF7] text-[#1A1918] animate-fade-rise">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Bar Navigation & Actions */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#EADFCF]">
            <button
              onClick={() => {
                setReadingArticle(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F0E6] text-[#1B3B2B] text-xs font-semibold hover:bg-[#EADFCF] transition-all duration-200 border border-[#EADFCF]"
            >
              ← Back to All Dispatches
            </button>

            <div className="flex items-center gap-3 text-xs text-[#C85A32] font-mono">
              <span>{readingArticle.category}</span>
              <span>•</span>
              <span>{readingArticle.readTime}</span>
            </div>
          </div>

          {/* Article Header & Title */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              {readingArticle.location} Dispatch
            </span>
            <h1
              className="text-4xl sm:text-6xl font-serif text-[#1B3B2B] leading-[1.08]"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              {readingArticle.title}
            </h1>
            <p className="text-lg text-[#4A4744] font-medium max-w-2xl mx-auto">
              {readingArticle.subtitle}
            </p>

            <div className="flex items-center justify-center gap-3 pt-4 text-xs text-[#4A4744]">
              <span className="font-semibold text-[#1B3B2B]">{readingArticle.author}</span>
              <span>•</span>
              <span>{readingArticle.date}</span>
            </div>
          </div>

          {/* Featured Hero Banner Image */}
          <div className="max-w-5xl mx-auto h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-14 relative border border-[#EADFCF]">
            <img
              src={readingArticle.image}
              alt={readingArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-medium flex items-center justify-between backdrop-blur-md bg-black/40 px-5 py-3 rounded-2xl border border-white/20">
              <span className="flex items-center gap-1.5">
                <MapPinIcon size={14} className="text-[#C85A32]" /> Location: {readingArticle.location}
              </span>
              <span>Nattuvazhi Editorial Dispatch</span>
            </div>
          </div>

          {/* Article Body Content Grid (8 cols content, 4 cols sidebar) */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Editorial Text Column (8 cols) */}
            <div className="lg:col-span-8 space-y-6 font-sans">
              <p className="text-xl text-[#1B3B2B] font-medium leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#C85A32]">
                {readingArticle.fullText[0]}
              </p>

              {readingArticle.fullText.slice(1).map((paragraph, idx) => (
                <p key={idx} className="text-base sm:text-lg text-[#4A4744] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Editorial Pull Quote Block */}
              <blockquote className="my-10 p-8 sm:p-10 bg-[#F5F0E6] border-l-4 border-[#C85A32] rounded-r-3xl space-y-3 shadow-sm border-t border-b border-r border-[#EADFCF]">
                <p
                  className="text-2xl sm:text-3xl font-serif italic text-[#1B3B2B] leading-snug"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  "{readingArticle.excerpt}"
                </p>
                <cite className="text-xs text-[#C85A32] font-semibold block not-italic">
                  — {readingArticle.author}, Nattuvazhi Editorial Dispatch
                </cite>
              </blockquote>

              {/* Dispatch Key Highlights Box */}
              <div className="p-8 bg-[#1B3B2B] text-white rounded-3xl space-y-4 my-10 shadow-xl border border-[#C85A32]/30">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  Dispatch Takeaways
                </span>
                <h3
                  className="text-2xl font-serif text-white"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  Key Sanctuary Highlights
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#EADFCF]">
                  {readingArticle.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#C85A32] shrink-0 mt-1.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky Editorial Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              {/* Author Profile Card */}
              <div className="bg-[#F5F0E6] border border-[#EADFCF] rounded-3xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src={readingArticle.authorAvatar}
                    alt={readingArticle.author}
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#C85A32]"
                  />
                  <div>
                    <h4 className="text-lg font-serif text-[#1B3B2B]" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                      {readingArticle.author}
                    </h4>
                    <span className="text-xs text-[#C85A32] font-semibold block">{readingArticle.authorRole}</span>
                  </div>
                </div>
                <p className="text-xs text-[#4A4744] leading-relaxed">
                  Curating unlisted private eco-villas and bespoke native dispatches for Nattuvazhi members.
                </p>
              </div>

              {/* Related Dispatches Card */}
              <div className="bg-[#1B3B2B] text-white rounded-3xl p-6 space-y-6 border border-[#C85A32]/30">
                <h4 className="text-xl font-serif text-[#D4AF37] border-b border-white/10 pb-3" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
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
                      className="group cursor-pointer space-y-2 pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <span className="text-[10px] text-[#C85A32] font-semibold uppercase tracking-wider">
                        {rel.category} • {rel.readTime}
                      </span>
                      <h5
                        className="text-lg font-serif text-white group-hover:text-[#D4AF37] transition-colors"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        {rel.title}
                      </h5>
                      <span className="text-xs text-[#EADFCF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Essay <ArrowRightIcon size={12} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-20 pt-8 border-t border-[#EADFCF] flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => {
                setReadingArticle(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-[#1B3B2B] hover:bg-[#12291E] text-white text-xs font-semibold rounded-full transition-all duration-200 shadow-lg"
            >
              ← Return to All Journal Dispatches
            </button>

            <span className="text-xs text-[#4A4744] font-mono">
              Published by Nattuvazhi Editorial • Fort Kochi / Kumarakom / Munnar
            </span>
          </div>
        </div>
      </div>
    )
  }

  // ── Journal Grid View ──
  return (
    <div className="pt-24 pb-20 bg-[#FDFBF7] text-[#1A1918] animate-fade-rise">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C85A32]/20">
          <SparklesIcon size={14} className="text-[#C85A32]" /> Nattuvazhi Print & Digital Journal
        </span>
        <h1
          className="text-5xl sm:text-7xl font-serif text-[#1B3B2B] max-w-4xl mx-auto leading-[1.05]"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Native Dispatches & Cultural Essays
        </h1>
        <p className="text-base sm:text-lg text-[#4A4744] max-w-2xl mx-auto mt-6 leading-relaxed">
          Stories of kettuvallam craftsmanship, cloud forest solitude, spice gastronomy, and ancient heritage architecture.
        </p>

        {/* Category Filters */}
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

      {/* Main Journal Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => {
                setReadingArticle(art)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="group cursor-pointer bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#EADFCF] hover:shadow-xl hover:border-[#C85A32]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-80 overflow-hidden bg-[#F5F0E6]">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3.5 py-1 bg-[#1B3B2B]/85 backdrop-blur-md text-white text-[11px] font-semibold rounded-full shadow-sm">
                    {art.category}
                  </span>
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-[#EADFCF] text-[11px] font-mono rounded-full">
                    {art.readTime}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium flex items-center justify-between">
                  <span className="flex items-center gap-1.5 backdrop-blur-sm px-2.5 py-1 rounded-lg bg-black/30">
                    <MapPinIcon size={12} className="text-[#C85A32]" /> {art.location}
                  </span>
                  <span className="flex items-center gap-1 opacity-80">
                    <CalendarIcon size={12} /> {art.date}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h2
                    className="text-3xl font-serif text-[#1B3B2B] group-hover:text-[#C85A32] transition-colors leading-tight"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {art.title}
                  </h2>
                  <h4 className="text-xs text-[#C85A32] font-semibold uppercase tracking-wider mt-1">{art.subtitle}</h4>
                  <p className="text-xs text-[#4A4744] mt-3 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EADFCF] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={art.authorAvatar}
                      alt={art.author}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#C85A32]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#1B3B2B] block leading-none">{art.author}</span>
                      <span className="text-[10px] text-[#4A4744] font-sans">{art.authorRole}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B3B2B] group-hover:text-[#C85A32] group-hover:translate-x-1 transition-all">
                    Read Essay <ArrowRightIcon size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default JournalPage
