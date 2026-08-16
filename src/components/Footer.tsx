import React from 'react'
import Icon from './icons/Icon'

export default function Footer() {
  return (
    <footer className="py-11 border-t border-edge">
      <div className="max-w-[1180px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-muted">
        <div className="flex items-center gap-2 font-display font-semibold text-[15px] text-ink2">
          <span className="w-6 h-6 rounded-[7px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F0B90B, #C4930A)' }}>
            <Icon name="check" className="w-3 h-3 text-[#0A0A0C]" strokeWidth={2.6} />
          </span>
          Vela
        </div>
        <div className="flex gap-6">
          <span>Buy & Sell</span>
          <span>Savings</span>
          <span>Trade</span>
          <span>Rewards</span>
        </div>
        <div>© 2026 Vela — concept preview</div>
      </div>
    </footer>
  )
}
