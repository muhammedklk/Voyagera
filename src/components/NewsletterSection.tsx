import React, { useState } from 'react'
import { SparklesIcon, ShieldCheckIcon, ArrowRightIcon } from './Icons'

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="relative bg-neutral-900 rounded-3xl p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        {/* Background Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-800 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <SparklesIcon size={14} /> Private Member Dispatches
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Unlock Unlisted Havens & Private Charters
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Join 12,000+ discerning voyagers who receive our quarterly print journal and private notifications for unlisted residence keys.
          </p>

          {subscribed ? (
            <div className="p-6 bg-white/10 border border-white/20 rounded-2xl max-w-md mx-auto animate-fade-rise backdrop-blur-md">
              <ShieldCheckIcon size={32} className="text-emerald-400 mx-auto mb-2" />
              <h4 className="text-lg font-serif text-white" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Welcome to Nādvora Circle
              </h4>
              <p className="text-xs text-neutral-300 mt-1">
                A confirmation key has been dispatched to <span className="font-semibold text-white">{email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your personal email..."
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all backdrop-blur-md"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-white text-neutral-900 font-semibold text-sm rounded-full hover:bg-neutral-100 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 shrink-0 shadow-lg"
              >
                <span>Subscribe</span>
                <ArrowRightIcon size={16} />
              </button>
            </form>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheckIcon size={14} className="text-emerald-400" /> Discretion Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheckIcon size={14} className="text-emerald-400" /> Quarterly Print Journal
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheckIcon size={14} className="text-emerald-400" /> No Spam, Unsubscribe Anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
