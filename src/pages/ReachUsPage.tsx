import React, { useState } from 'react'
import { SparklesIcon, ShieldCheckIcon } from '../components/Icons'

// Helper Accordion Icon
const ChevronDown: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const FAQS = [
  {
    question: 'How does Voyagera private sanctuary membership work?',
    answer:
      'Membership is by invitation or application. Members receive exclusive access to unlisted private estates, dedicated 24/7 personal concierge team, and priority reservations across all global regions.',
  },
  {
    question: 'Are all residences 100% private and non-commercial?',
    answer:
      'Yes. Every property in our portfolio is a privately owned architectural residence or custom-built eco-pavilion reserved exclusively for our guests during their stay.',
  },
  {
    question: 'Can Voyagera arrange private flight charters and ground security?',
    answer:
      'Yes. Our global concierge coordinates custom long-range jet charters, helicopter transfers, and discreet executive protection whenever requested.',
  },
  {
    question: 'What is your cancellation and booking flexibility policy?',
    answer:
      'We offer flexible rescheduling up to 21 days prior to arrival. Full discretion and privacy agreements (NDA) are provided upon request.',
  },
]

const OFFICES = [
  { city: 'Zurich', country: 'Switzerland', address: 'Bahnhofstrasse 42, 8001 Zurich', phone: '+41 44 210 9980' },
  { city: 'Kyoto', country: 'Japan', address: 'Gion-machi Minamigawa 570, Kyoto', phone: '+81 75 531 4410' },
  { city: 'New York', country: 'United States', address: '560 Madison Avenue, NY 10022', phone: '+1 212 890 3200' },
]

const ReachUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: 'Kyoto, Japan',
    dates: '',
    guests: '2 Guests',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-24 pb-20 bg-white text-neutral-900 animate-fade-rise">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-widest mb-4">
          <SparklesIcon size={14} className="text-amber-600" /> Private Concierge & Inquiries
        </span>
        <h1
          className="text-5xl sm:text-7xl font-serif text-neutral-900 max-w-4xl mx-auto leading-[1.05]"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Begin Your Private Journey
        </h1>
        <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mt-6 leading-relaxed">
          Our global concierge team is available 24/7 to curate custom itineraries and secure unlisted residence keys.
        </p>
      </section>

      {/* Inquiry Form & Offices Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2
              className="text-3xl font-serif text-neutral-900 mb-2"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Private Reservation Inquiry
            </h2>
            <p className="text-xs text-neutral-500 mb-8">
              Fill out your details below and a personal travel director will reach out within 4 hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-neutral-900 text-white rounded-2xl text-center space-y-4 animate-fade-rise">
                <ShieldCheckIcon size={48} className="text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-serif" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                  Inquiry Received with Discretion
                </h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your private itinerary advisor has received your request for {formData.region}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-white text-neutral-900 text-xs font-semibold rounded-full hover:bg-neutral-100 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@domain.com"
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Phone Number / Signal
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Target Region / Sanctuary
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    >
                      <option value="Kyoto, Japan">Kyoto Bamboo Sanctuary (Japan)</option>
                      <option value="Amalfi, Italy">Amalfi Cliffside (Italy)</option>
                      <option value="Swiss Alps">Engadin Alpine Lodge (Switzerland)</option>
                      <option value="Reykjanes, Iceland">Iceland Aurora Dome (Iceland)</option>
                      <option value="Patagonia, Chile">Patagonia Wilderness (Chile)</option>
                      <option value="Custom Sanctuary">Custom Private Charter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Special Requirements or Preferences
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your preferred travel dates, dietary needs, or security requirements..."
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-neutral-900/10"
                >
                  Submit Private Request
                </button>
              </form>
            )}
          </div>

          {/* Global Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-900 text-white rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-serif" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Global Concierge Ateliers
              </h3>

              <div className="space-y-6 pt-2">
                {OFFICES.map((off, idx) => (
                  <div key={idx} className="pb-4 border-b border-neutral-800 last:border-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between text-amber-300 text-xs font-semibold uppercase tracking-wider">
                      <span>{off.city}</span>
                      <span>{off.country}</span>
                    </div>
                    <p className="text-xs text-neutral-300">{off.address}</p>
                    <p className="text-xs text-neutral-400 font-mono">{off.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Encrypted Direct Contact Card */}
            <div className="p-6 bg-neutral-100 border border-neutral-200 rounded-3xl space-y-3">
              <h4 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                <ShieldCheckIcon size={16} className="text-emerald-600" /> Direct Concierge Line
              </h4>
              <p className="text-xs text-neutral-500">
                Encrypted email: <span className="font-mono text-neutral-900 font-semibold">concierge@voyagera-expeditions.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-neutral-200 mt-12">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Questions & Clarifications</span>
          <h2 className="text-3xl font-serif text-neutral-900 mt-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between font-serif text-lg text-neutral-900"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <span>{faq.question}</span>
                <ChevronDown isOpen={openFaq === idx} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-xs text-neutral-600 leading-relaxed font-sans border-t border-neutral-200/60 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ReachUsPage
