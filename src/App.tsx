import React, { useState } from 'react'
import Navbar, { PageId } from './components/Navbar'
import VideoBackground from './components/VideoBackground'
import HeroSection from './components/HeroSection'
import TripPlannerWidget from './components/TripPlannerWidget'
import CuratedDestinations, { Destination } from './components/CuratedDestinations'
import ExperienceCategories from './components/ExperienceCategories'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

// Inner Pages
import StudioPage from './pages/StudioPage'
import AboutPage from './pages/AboutPage'
import JournalPage from './pages/JournalPage'
import ReachUsPage from './pages/ReachUsPage'
import DestinationDetailPage from './pages/DestinationDetailPage'

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('home')
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

  const handleNavigate = (page: PageId) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest)
    setActivePage('destination-detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToSanctuaries = () => {
    setActivePage('home')
    setSelectedDestination(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen w-full bg-white text-neutral-900 overflow-x-hidden">
      {/* Top Header Navigation */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Page Routing Switcher */}
      {activePage === 'home' && (
        <>
          {/* Background Video for Hero area */}
          <VideoBackground />

          <main className="relative z-10">
            {/* 1. Hero Section */}
            <HeroSection onExploreClick={() => handleNavigate('reachus')} />

            {/* 2. Interactive Trip Planner / Search Bar */}
            <TripPlannerWidget />

            {/* 3. Handpicked Curated Destinations & Havens */}
            <CuratedDestinations onSelectDestination={handleSelectDestination} />

            {/* 4. Four Pillars of Experience */}
            <ExperienceCategories onExploreClick={() => handleNavigate('reachus')} />

            {/* 5. Philosophy, Story & Stats Counter */}
            <AboutSection />

            {/* 6. Voyager Stories & Testimonials */}
            <TestimonialsSection />

            {/* 7. Exclusive Member Newsletter */}
            <NewsletterSection />
          </main>
        </>
      )}

      {activePage === 'studio' && (
        <main className="relative z-10">
          <StudioPage onSelectDestination={handleSelectDestination} />
        </main>
      )}

      {activePage === 'about' && (
        <main className="relative z-10">
          <AboutPage onNavigate={handleNavigate} />
        </main>
      )}

      {activePage === 'journal' && (
        <main className="relative z-10">
          <JournalPage />
        </main>
      )}

      {activePage === 'reachus' && (
        <main className="relative z-10">
          <ReachUsPage />
        </main>
      )}

      {activePage === 'destination-detail' && selectedDestination && (
        <main className="relative z-10">
          <DestinationDetailPage
            destination={selectedDestination}
            onBack={handleBackToSanctuaries}
            onSelectDestination={handleSelectDestination}
          />
        </main>
      )}

      {/* Complete Brand Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
