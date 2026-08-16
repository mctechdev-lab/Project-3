import React from 'react'
import Reveal from './Reveal'

interface CTASectionProps {
  onDiscuss: () => void
}

export default function CTASection({ onDiscuss }: CTASectionProps) {
  return (
    <section className="py-[110px] border-t border-edge text-center">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal>
          <h2 className="font-display font-bold text-[38px] sm:text-[44px] tracking-tight mb-4">
            Let's Build the Future of Digital Finance.
          </h2>
          <p className="text-muted text-[16px] mb-8 max-w-[520px] mx-auto">
            This concept is ready to discuss — scope, timeline and what a real,
            licensed version of Vela would take to build.
          </p>
          <button onClick={onDiscuss} className="px-8 py-4 rounded-[13px] text-[15.5px] font-semibold bg-gold text-[#1A1300] hover:bg-gold-light active:scale-95 transition-all duration-150">
            Discuss the Project
          </button>
          <div className="mt-5 text-[12.5px] text-muted">
            Concept preview only — no live functionality, accounts or real transactions.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
