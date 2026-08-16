import React, { useState } from 'react'
import Icon from '../../icons/Icon'
import { referralCode, rewardCampaigns, rewardHistory, referralStats } from '../../../data/mockData'

export default function RewardsScreen() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="pb-2">
      <div className="text-[15px] font-semibold mb-1">Reward Hub</div>
      <div className="text-[11px] text-muted mb-4">Invite friends and earn rewards</div>

      {/* referral card */}
      <div className="rounded-[18px] p-4 mb-4 border border-gold/20" style={{ background: 'linear-gradient(150deg, #241D08, #16130A 60%, #141417)' }}>
        <div className="w-9 h-9 rounded-[10px] bg-gold-dim text-gold flex items-center justify-center mb-3">
          <Icon name="gift" className="w-4 h-4" />
        </div>
        <div className="text-[12.5px] font-semibold mb-1">Invite & Earn</div>
        <div className="text-[10.5px] text-muted mb-3">Share your code — you and your friend both earn when they sign up.</div>
        <div className="flex items-center justify-between bg-black/30 border border-edge rounded-[12px] px-3 py-2.5">
          <span className="font-mono text-[13px] tracking-wide text-gold">{referralCode}</span>
          <button onClick={handleCopy} className="text-[10.5px] font-semibold text-ink2">
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {/* referral stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-surface2 border border-edge rounded-[14px] p-3 text-center">
          <div className="text-[15px] font-display font-semibold">{referralStats.invited}</div>
          <div className="text-[9.5px] text-muted">Invited</div>
        </div>
        <div className="bg-surface2 border border-edge rounded-[14px] p-3 text-center">
          <div className="text-[15px] font-display font-semibold">{referralStats.joined}</div>
          <div className="text-[9.5px] text-muted">Joined</div>
        </div>
        <div className="bg-surface2 border border-edge rounded-[14px] p-3 text-center">
          <div className="text-[13px] font-display font-semibold text-gold">{referralStats.earned}</div>
          <div className="text-[9.5px] text-muted">Earned</div>
        </div>
      </div>

      {/* campaigns */}
      <div className="text-[12.5px] text-muted mb-2">Available rewards</div>
      <div className="mb-4">
        {rewardCampaigns.map((c) => (
          <div key={c.id} className="flex items-center gap-2.5 py-2 border-b border-white/5">
            <div className="w-8 h-8 rounded-[10px] bg-gold-dim text-gold flex items-center justify-center">
              <Icon name="users" className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-medium truncate">{c.label}</div>
              <div className="text-[10px] text-muted">{c.meta}</div>
            </div>
            <div className="text-[11.5px] font-mono text-gold">{c.amount}</div>
          </div>
        ))}
      </div>

      {/* history */}
      <div className="text-[12.5px] text-muted mb-2">Reward history</div>
      {rewardHistory.map((t) => (
        <div key={t.id} className="flex items-center gap-2.5 py-2 border-b border-white/5">
          <div className="w-8 h-8 rounded-[10px] bg-success-dim text-success flex items-center justify-center">
            <Icon name="gift" className="w-4 h-4" />
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
