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
    question: 'How does Nattuvazhi private sanctuary membership work?',
    answer:
      'Membership is by invitation or application. Members receive exclusive access to unlisted private estates, dedicated 24/7 native concierge team, and priority reservations across all coastal, backwater, and highland regions.',
  },
  {
    question: 'Are all residences 100% private and non-commercial?',
    answer:
      'Yes. Every property in our portfolio is a privately owned heritage residence, luxury kettuvallam, or eco-pavilion reserved exclusively for our guests during their stay.',
  },
  {
    question: 'Can Nattuvazhi arrange private flight charters and ground transfers?',
    answer:
      'Yes. Our concierge coordinates custom luxury transfers, private speedboat charters across Vembanad lake, and discreet ground escorts whenever requested.',
  },
  {
    question: 'What is your cancellation and booking flexibility policy?',
    answer:
      'We offer flexible rescheduling up to 14 days prior to arrival. Full discretion and privacy agreements (NDA) are provided upon request.',
  },
]

const OFFICES = [
  { city: 'Zurich', country: 'Switzerland', address: 'Bahnhofstrasse 42, 8001 Zürich', phone: '+41 44 215 8800' },
  { city: 'Kyoto', country: 'Japan', address: 'Arashiyama Bamboo Grove Atelier 12', phone: '+81 75 861 2400' },
  { city: 'New York', country: 'United States', address: '5th Avenue & 57th Street, NY 10022', phone: '+1 212 555 0199' },
]

const ReachUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: 'Kumarakom Backwaters',
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
    <div className="pt-24 pb-20 bg-[#FDFBF7] text-[#1A1918] animate-fade-rise">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C85A32]/20">
          <SparklesIcon size={14} className="text-[#C85A32]" /> Private Native Concierge
        </span>
        <h1
          className="text-5xl sm:text-7xl font-serif text-[#1B3B2B] max-w-4xl mx-auto leading-[1.05]"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Begin Your Native Journey
        </h1>
        <p className="text-base sm:text-lg text-[#4A4744] max-w-2xl mx-auto mt-6 leading-relaxed">
          Our local concierge team is available 24/7 to curate custom itineraries and secure unlisted kettuvallam & heritage keys.
        </p>
      </section>

      {/* Inquiry Form & Offices Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F5F0E6] border border-[#EADFCF] rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2
              className="text-3xl font-serif text-[#1B3B2B] mb-2"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              Private Reservation Inquiry
            </h2>
            <p className="text-xs text-[#4A4744] mb-8">
              Fill out your details below and a dedicated native travel director will reach out within 2 hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#1B3B2B] text-white rounded-2xl text-center space-y-4 animate-fade-rise border border-[#C85A32]/40">
                <ShieldCheckIcon size={48} className="text-[#D4AF37] mx-auto" />
                <h3 className="text-2xl font-serif" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                  Inquiry Received with Discretion
                </h3>
                <p className="text-xs text-[#EADFCF] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your private itinerary advisor has received your request for {formData.region}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#C85A32] text-white text-xs font-semibold rounded-full hover:bg-[#A64320] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Nair"
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#EADFCF] rounded-xl text-sm text-[#1B3B2B] focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@domain.com"
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#EADFCF] rounded-xl text-sm text-[#1B3B2B] focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1.5">
                      Phone Number / Whatsapp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#EADFCF] rounded-xl text-sm text-[#1B3B2B] focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1.5">
                      Target Region / Sanctuary
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#EADFCF] rounded-xl text-sm text-[#1B3B2B] focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                    >
                      <option value="Kyoto Sanctuary">Kyoto Arashiyama Bamboo Villa</option>
                      <option value="Amalfi Coast">Amalfi Ravello Cliffside Residence</option>
                      <option value="Swiss Alps">Swiss Engadin Alpine Timber Lodge</option>
                      <option value="Iceland Domes">Iceland Reykjanes Glass Aurora Dome</option>
                      <option value="Santorini Caldera">Santorini Oia Caldera Cave Villa</option>
                      <option value="Custom Global Expedition">Custom Global Expedition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1.5">
                    Special Requirements or Preferences
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your preferred travel dates, dietary needs (Nadan Sadya, Seafood, Vegan), or private charter requirements..."
                    className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#EADFCF] rounded-xl text-sm text-[#1B3B2B] focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1B3B2B] hover:bg-[#12291E] text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg"
                >
                  Submit Private Request
                </button>
              </form>
            )}
          </div>

          {/* Global Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1B3B2B] text-white rounded-3xl p-8 space-y-6 border border-[#C85A32]/30 shadow-lg">
              <h3 className="text-2xl font-serif text-[#D4AF37]" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Native Concierge Ateliers
              </h3>

              <div className="space-y-6 pt-2">
                {OFFICES.map((off, idx) => (
                  <div key={idx} className="pb-4 border-b border-white/10 last:border-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between text-[#C85A32] text-xs font-semibold uppercase tracking-wider">
                      <span>{off.city}</span>
                      <span className="text-[#D4AF37]">{off.country}</span>
                    </div>
                    <p className="text-xs text-[#EADFCF]">{off.address}</p>
                    <p className="text-xs text-white/80 font-mono">{off.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Encrypted Direct Contact Card */}
            <div className="p-6 bg-[#F5F0E6] border border-[#EADFCF] rounded-3xl space-y-3">
              <h4 className="text-sm font-semibold text-[#1B3B2B] flex items-center gap-2">
                <ShieldCheckIcon size={16} className="text-[#C85A32]" /> Direct Concierge Line
              </h4>
              <p className="text-xs text-[#4A4744]">
                Encrypted email: <span className="font-mono text-[#1B3B2B] font-bold">concierge@nattuvazhi.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#EADFCF] mt-12">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">Questions & Clarifications</span>
          <h2 className="text-3xl font-serif text-[#1B3B2B] mt-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#F5F0E6] border border-[#EADFCF] rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between font-serif text-lg text-[#1B3B2B]"
                style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
              >
                <span>{faq.question}</span>
                <ChevronDown isOpen={openFaq === idx} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-xs text-[#4A4744] leading-relaxed font-sans border-t border-[#EADFCF] pt-4">
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
