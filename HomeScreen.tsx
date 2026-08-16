import React from 'react'
import Icon, { IconName } from '../../icons/Icon'
import Sparkline from '../../Sparkline'
import {
  portfolio,
  quickActions,
  recentTransactions,
  marketPreview,
  savingsGoal
} from '../../../data/mockData'

interface HomeScreenProps {
  onOpenProfile: () => void
}

export default function HomeScreen({ onOpenProfile }: HomeScreenProps) {
  const progressPct = Math.round((savingsGoal.saved / savingsGoal.target) * 100)

  return (
    <div className="pb-2">
      {/* Top bar with profile icon */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[11px] text-muted">Good afternoon</div>
          <div className="text-[14px] font-semibold">Chidera</div>
        </div>
        <button
          onClick={onOpenProfile}
          className="w-9 h-9 rounded-full bg-surface2 border border-edge flex items-center justify-center text-gold"
          aria-label="Open profile"
        >
          <Icon name="user" className="w-[18px] h-[18px]" />
        </button>
      </div>

      {/* Balance card */}
      <div className="rounded-[20px] p-5 mb-4 border border-gold/20 relative overflow-hidden" style={{ background: 'linear-gradient(150deg, #241D08, #16130A 55%, #141417)' }}>
        <div className="text-[11.5px] text-muted mb-1">Total portfolio balance</div>
        <div className="font-display text-[26px] font-semibold tracking-tight">{portfolio.total}</div>
        <div className="flex items-center gap-1 text-[12px] text-success font-mono mt-1.5">
          <Icon name="caret-up" className="w-3 h-3" />
          {portfolio.changePct}% this month
        </div>
        <div className="text-[11px] text-muted mt-3">Available balance</div>
        <div className="text-[14px] font-medium">{portfolio.available}</div>
      </div>

      {/* Quick actions */}
      <div className="flex gap-2 mb-5">
        {quickActions.map((qa) => (
          <button key={qa.id} className="flex-1 bg-surface2 border border-edge rounded-[14px] py-2.5 px-1 text-center text-[10px] text-muted hover:border-gold/30 active:scale-95 transition-all duration-150">
            <div className="w-8 h-8 rounded-[10px] bg-gold-dim text-gold flex items-center justify-center mx-auto mb-1">
              <Icon name={qa.icon as IconName} className="w-4 h-4" />
            </div>
            {qa.label}
          </button>
        ))}
      </div>

      {/* Savings progress preview */}
      <div className="bg-surface2 border border-edge rounded-[16px] p-4 mb-5">
        <div className="flex justify-between items-center mb-2">
          <div className="text-[12.5px] font-semibold">{savingsGoal.name}</div>
          <div className="text-[11px] text-gold font-mono">{progressPct}%</div>
        </div>
        <div className="h-1.5 rounded-full bg-black/40 overflow-hidden mb-2">
          <div className="h-full bg-gold rounded-full" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="text-[10.5px] text-muted">
          ₦{savingsGoal.saved.toLocaleString()} saved of ₦{savingsGoal.target.toLocaleString()}
        </div>
      </div>

      {/* Recent transactions */}
      <div className="flex justify-between items-center text-[12.5px] text-muted mb-2">
        <span>Recent transactions</span>
        <span className="text-gold">See all</span>
      </div>
      <div className="mb-5">
        {recentTransactions.slice(0, 3).map((t) => (
          <div key={t.id} className="flex items-center gap-2.5 py-2 border-b border-white/5">
            <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center ${t.direction === 'in' ? 'bg-success-dim text-success' : 'bg-danger-dim text-danger'}`}>
              <Icon name={t.direction === 'in' ? 'arrow-down' : 'send'} className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-medium truncate">{t.label}</div>
              <div className="text-[10px] text-muted">{t.meta}</div>
            </div>
            <div className="text-[11.5px] font-mono">{t.amount}</div>
          </div>
        ))}
      </div>

      {/* Crypto market preview */}
      <div className="text-[12.5px] text-muted mb-2">Market preview</div>
      {marketPreview.slice(0, 3).map((c) => (
        <div key={c.symbol} className="flex items-center gap-2.5 py-2 border-b border-white/5">
          <div>
            <div className="text-[12px] font-semibold">{c.symbol}</div>
            <div className="text-[10px] text-muted">{c.name}</div>
          </div>
          <Sparkline data={c.sparkline} positive={c.changePct >= 0} width={54} height={22} className="ml-2" />
          <div className="ml-auto text-right">
            <div className="text-[11.5px] font-mono">{c.price}</div>
            <div className={`text-[10px] ${c.changePct > 0 ? 'text-success' : c.changePct < 0 ? 'text-danger' : 'text-muted'}`}>
              {c.changePct > 0 ? '+' : ''}{c.changePct}%
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
