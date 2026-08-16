import React, { useState } from 'react'
import Icon from '../../icons/Icon'
import Sparkline from '../../Sparkline'
import { tradeAssets } from '../../../data/mockData'

export default function TradeScreen() {
  const [selected, setSelected] = useState(tradeAssets[0].symbol)
  const [toast, setToast] = useState<string | null>(null)
  const active = tradeAssets.find((a) => a.symbol === selected) ?? tradeAssets[0]

  const handleTrade = (side: 'Buy' | 'Sell') => {
    setToast(`${side} order simulated — this is demo data, no real trade occurred.`)
    window.setTimeout(() => setToast(null), 2600)
  }

  return (
    <div className="pb-2 relative">
      <div className="text-[15px] font-semibold mb-1">Trade</div>
      <div className="text-[11px] text-muted mb-4">Demo market — prices are illustrative</div>

      {/* pair selector */}
      <div className="flex gap-1.5 overflow-x-auto mb-4 pb-1" style={{ scrollbarWidth: 'none' }}>
        {tradeAssets.map((a) => (
          <button
            key={a.symbol}
            onClick={() => setSelected(a.symbol)}
            className={`px-3 py-1.5 rounded-full text-[11.5px] whitespace-nowrap border transition-colors ${
              selected === a.symbol ? 'bg-gold text-[#1A1300] border-gold font-semibold' : 'border-edge text-muted hover:text-ink2'
            }`}
          >
            {a.symbol}
          </button>
        ))}
      </div>

      {/* chart card */}
      <div className="bg-surface2 border border-edge rounded-[18px] p-4 mb-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-[13px] font-semibold">{active.symbol}/NGN</div>
            <div className="text-[10.5px] text-muted">{active.name}</div>
          </div>
          <div className="text-right">
            <div className="text-[15px] font-mono font-semibold">{active.price}</div>
            <div className={`text-[11px] ${active.changePct > 0 ? 'text-success' : active.changePct < 0 ? 'text-danger' : 'text-muted'}`}>
              {active.changePct > 0 ? '+' : ''}{active.changePct}% (24h)
            </div>
          </div>
        </div>
        <Sparkline data={active.sparkline} positive={active.changePct >= 0} width={264} height={70} className="w-full" />
        <div className="flex gap-2 mt-3">
          <button onClick={() => handleTrade('Buy')} className="flex-1 bg-success text-[#052318] text-[12.5px] font-semibold rounded-[12px] py-2.5 flex items-center justify-center gap-1.5 active:scale-95 transition-transform duration-150">
            <Icon name="arrow-down" className="w-3.5 h-3.5" /> Buy
          </button>
          <button onClick={() => handleTrade('Sell')} className="flex-1 bg-surface border border-edge text-[12.5px] font-semibold rounded-[12px] py-2.5 flex items-center justify-center gap-1.5 active:scale-95 transition-transform duration-150">
            <Icon name="arrow-up" className="w-3.5 h-3.5" /> Sell
          </button>
        </div>
      </div>

      {/* asset list */}
      <div className="text-[12.5px] text-muted mb-2">All assets</div>
      {tradeAssets.map((a) => (
        <button
          key={a.symbol}
          onClick={() => setSelected(a.symbol)}
          className={`w-full flex items-center gap-2.5 py-2 border-b border-white/5 text-left ${selected === a.symbol ? 'opacity-100' : 'opacity-90'}`}
        >
          <div className="text-[12px] font-semibold w-10">{a.symbol}</div>
          <Sparkline data={a.sparkline} positive={a.changePct >= 0} width={48} height={20} />
          <div className="ml-auto text-right">
            <div className="text-[11.5px] font-mono">{a.price}</div>
            <div className={`text-[10px] ${a.changePct > 0 ? 'text-success' : a.changePct < 0 ? 'text-danger' : 'text-muted'}`}>
              {a.changePct > 0 ? '+' : ''}{a.changePct}%
            </div>
          </div>
        </button>
      ))}

      {toast && (
        <div className="absolute bottom-2 left-0 right-0 bg-surface2 border border-gold/30 rounded-[12px] px-3 py-2.5 text-[10.5px] text-center animate-fade-up shadow-card">
          {toast}
        </div>
      )}
    </div>
  )
}
