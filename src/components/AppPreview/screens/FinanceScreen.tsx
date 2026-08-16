import React from 'react'
import Icon from '../../icons/Icon'
import { savingsGoal, dailySavingsPlan, savingsPlans, savingsHistory } from '../../../data/mockData'

export default function FinanceScreen() {
  const progressPct = Math.round((savingsGoal.saved / savingsGoal.target) * 100)

  return (
    <div className="pb-2">
      <div className="text-[15px] font-semibold mb-1">Finance</div>
      <div className="text-[11px] text-muted mb-4">Savings, goals & locked funds</div>

      {/* Goal card */}
      <div className="bg-surface2 border border-edge rounded-[18px] p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-[10px] bg-gold-dim text-gold flex items-center justify-center">
            <Icon name="target" className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[13px] font-semibold">{savingsGoal.name}</div>
            <div className="text-[10.5px] text-muted">Target ₦{savingsGoal.target.toLocaleString()}</div>
          </div>
          <div className="ml-auto text-[13px] font-mono text-gold">{progressPct}%</div>
        </div>
        <div className="h-1.5 rounded-full bg-black/40 overflow-hidden mb-2">
          <div className="h-full bg-gold rounded-full" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="text-[10.5px] text-muted">₦{savingsGoal.saved.toLocaleString()} saved so far</div>
        <button className="w-full mt-3 bg-gold text-[#1A1300] text-[12.5px] font-semibold rounded-[12px] py-2.5">Add to goal</button>
      </div>

      {/* Daily savings plan */}
      <div className="bg-surface2 border border-edge rounded-[16px] p-4 mb-4">
        <div className="flex justify-between items-center mb-1">
          <div className="text-[12.5px] font-semibold">Daily Savings Plan</div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-success-dim text-success">Active</span>
        </div>
        <div className="text-[11px] text-muted mb-2">{dailySavingsPlan.amount} debited {dailySavingsPlan.frequency.toLowerCase()} · {dailySavingsPlan.streak}-day streak</div>
        <div className="text-[10.5px] text-muted">Next debit: {dailySavingsPlan.nextDebit}</div>
      </div>

      {/* Plan options */}
      <div className="text-[12.5px] text-muted mb-2">Savings plans</div>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {savingsPlans.map((p) => (
          <div key={p.id} className="bg-surface2 border border-edge rounded-[14px] p-3">
            <div className="text-[11.5px] font-semibold mb-1">{p.label}</div>
            <div className="text-[9.5px] text-muted leading-snug mb-2">{p.desc}</div>
            <div className="text-[10px] font-mono text-gold">{p.badge}</div>
          </div>
        ))}
      </div>

      {/* History */}
      <div className="text-[12.5px] text-muted mb-2">Savings history</div>
      {savingsHistory.map((t) => (
        <div key={t.id} className="flex items-center gap-2.5 py-2 border-b border-white/5">
          <div className="w-8 h-8 rounded-[10px] bg-success-dim text-success flex items-center justify-center">
            <Icon name="arrow-down" className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-medium truncate">{t.label}</div>
            <div className="text-[10px] text-muted">{t.meta}</div>
          </div>
          <div className="text-[11.5px] font-mono text-success">{t.amount}</div>
        </div>
      ))}
    </div>
  )
}
