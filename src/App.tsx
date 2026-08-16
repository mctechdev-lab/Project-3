import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Ticker from './components/Ticker'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import HowItWorks from './components/HowItWorks'
import SecuritySection from './components/SecuritySection'
import Roadmap from './components/Roadmap'
import CTASection from './components/CTASection'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 ambient-glow pointer-events-none" />
      <div className="relative">
        <Navbar onDiscuss={() => setContactOpen(true)} />
        <Ticker />
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <SecuritySection />
        <Roadmap />
        <CTASection onDiscuss={() => setContactOpen(true)} />
        <Footer />
      </div>

      <div className="fixed bottom-5 right-5 z-40 bg-surface2 border border-edge px-4 py-2.5 rounded-full text-[12px] text-muted shadow-card flex items-center gap-2">
        <span className="w-[7px] h-[7px] rounded-full bg-gold animate-pulse" />
        Prototype for client review — not a live product
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
