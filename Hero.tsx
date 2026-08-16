import React from 'react'
import AppPreview from './AppPreview/AppPreview'

export default function Hero() {
  return (
    <section id="top" className="pt-[80px] pb-[60px]">
      <div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.05fr,0.95fr] gap-16 items-center">
        <div className="animate-appear">
          <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wide text-gold bg-gold-dim border border-gold/25 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Product concept — presentation demo
          </div>
          <h1 className="font-display font-bold text-[42px] sm:text-[52px] leading-[1.05] tracking-tight mb-6">
            Your Money. Your Assets.<br /><span className="text-gold">One Powerful Wallet.</span>
          </h1>
          <p className="text-[17px] text-muted leading-relaxed max-w-[460px] mb-9">
            Vela is a proposed digital wallet for Nigeria that brings everyday money
            management, digital assets, trading, savings and rewards together in a
            single, secure app.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-10">
            <a href="#preview" className="px-7 py-3.5 rounded-[13px] text-[15.5px] font-semibold bg-gold text-[#1A1300] hover:bg-gold-light active:scale-95 transition-all duration-150">
              Explore the App
            </a>
            <a href="#features" className="px-7 py-3.5 rounded-[13px] text-[15.5px] font-semibold border border-edge hover:border-white/25 active:scale-95 transition-all duration-150">
              View Features
            </a>
          </div>
          <div className="flex gap-9">
            <div>
              <div className="font-display text-[22px] font-semibold">6+</div>
              <div className="text-[12.5px] text-muted">Currencies & assets planned</div>
            </div>
            <div>
              <div className="font-display text-[22px] font-semibold">5</div>
              <div className="text-[12.5px] text-muted">Core app sections</div>
            </div>
            <div>
              <div className="font-display text-[22px] font-semibold">1</div>
              <div className="text-[12.5px] text-muted">Wallet for everything</div>
            </div>
          </div>
        </div>
        <div id="preview" className="animate-appear [animation-delay:150ms] [animation-fill-mode:backwards]">
          <div className="animate-float">
            <AppPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
