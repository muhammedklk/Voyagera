import React, { useState } from 'react'
import { SparklesIcon, CalendarIcon, ArrowRightIcon, XIcon, GlobeIcon } from '../components/Icons'

interface Article {
  id: string
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
  excerpt: string
  fullText: string[]
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
    excerpt: 'Stepping into 42°C natural spring waters as autumn leaves drift silently across steam clouds.',
    fullText: [
      'In the mountains outside Kyoto, time is measured not by seconds, but by the slow dripping of geothermal water over moss-covered granite stones.',
      'For over eight centuries, Japanese monks and poets have retreated to natural hot springs to shed the noise of court life and city hustle. At our private Arashiyama villa, the spring water emerges from 800 meters underground, rich in natural minerals that calm the nervous system.',
      'When you submerge yourself in total quietude at dawn, surrounded only by ancient Japanese cedar and bamboo, your mind naturally aligns with the rhythm of the forest.',
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
    excerpt: 'Zero light pollution, sub-zero air, and the Milky Way stretching over high-altitude Swiss peaks.',
    fullText: [
      'High above St. Moritz, when the last alpine skiers return to the valleys below, a profound stillness envelops the Engadin valley.',
      'At 2,000 meters altitude, atmospheric distortion drops to near zero. Armed with heated cashmere blankets and hot spiced cider, guests step onto the private telescope deck to gaze directly into the spiral arms of Andromeda.',
      'There is something deeply grounding about realizing how small our everyday worries are against the backdrop of eternal cosmic silence.',
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
    excerpt: 'How triple-glazed acoustic glass turned harsh sub-arctic blizzards into cozy celestial theaters.',
    fullText: [
      'The Northern Lights do not make a sound, yet their movement feels almost musical. Emerald ribbon waves flare across the dark void of the Iceland sky.',
      'Designing glass domes in an environment where winds can reach 80 km/h required engineering precision. Each pane is triple-laminated with sound-absorbing argon gas, ensuring complete warmth while keeping 360-degree clear sightlines to the night sky.',
    ],
  },
  {
    id: 'art-4',
    title: 'Foraging with Amalfi Michelin Masters',
    subtitle: 'Wild Herbs & Cliffside Vineyards of Ravello',
    category: 'Gastronomy',
    date: 'April 12, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    author: 'Camille Laurent',
    excerpt: 'Harvesting wild rosemary, lemons, and coastal fennel on steep terraced gardens overlooking Positano.',
    fullText: [
      'On the sheer terraces of Ravello, agriculture has remained virtually unchanged for five centuries. Hand-built stone walls hold rich volcanic soil that produces lemons the size of melons.',
      'We joined local chef Giovanni to forage wild herbs along ancient mule tracks, pairing our harvest with rare coastal wines aged in underwater sea cellars.',
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
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
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
              onClick={() => setReadingArticle(art)}
              className="group cursor-pointer bg-white rounded-3xl border border-neutral-200/80 overflow-hidden hover:shadow-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-neutral-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full">
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

      {/* Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-rise">
          <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            <div className="relative h-64 sm:h-80 w-full shrink-0">
              <img src={readingArticle.image} alt={readingArticle.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <XIcon size={18} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">
                  {readingArticle.category} • {readingArticle.date}
                </span>
                <h2 className="text-4xl font-serif text-neutral-900 mt-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                  {readingArticle.title}
                </h2>
                <span className="text-xs text-neutral-400 block mt-1">By {readingArticle.author}</span>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                {readingArticle.fullText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-neutral-100 flex justify-end">
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-6 py-2.5 bg-neutral-900 text-white text-xs font-medium rounded-full"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default JournalPage
