import React, { useState } from 'react'
import Icon from '../../icons/Icon'
import { walletAssets } from '../../../data/mockData'

export default function AssetsScreen() {
  const [expanded, setExpanded] = useState(walletAssets[0].code)

  return (
    <div className="pb-2">
      <div className="text-[15px] font-semibold mb-1">Assets</div>
      <div className="text-[11px] text-muted mb-4">Multi-currency wallet</div>

      {walletAssets.map((a) => {
        const isOpen = expanded === a.code
        return (
          <div key={a.code} className="mb-2.5 bg-surface2 border border-edge rounded-[16px] overflow-hidden">
            <button
              onClick={() => setExpanded(isOpen ? '' : a.code)}
              className="w-full flex items-center gap-2.5 p-3 text-left"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-display font-bold ${a.bgClass} ${a.colorClass}`}>
                {a.code.slice(0, 1)}
              </div>
              <div>
                <div className="text-[12.5px] font-semibold">{a.code}</div>
                <div className="text-[10px] text-muted">{a.name}</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-[12px] font-mono">{a.balance}</div>
                <div className="text-[10px] text-muted">{a.value}</div>
              </div>
            </button>
            {isOpen && (
              <div className="grid grid-cols-4 gap-1.5 px-3 pb-3">
                {[
                  { label: 'Deposit', icon: 'download' as const },
                  { label: 'Withdraw', icon: 'upload' as const },
                  { label: 'Send', icon: 'send' as const },
                  { label: 'Receive', icon: 'arrow-down' as const }
                ].map((action) => (
                  <button key={action.label} className="bg-surface border border-edge rounded-[10px] py-2 flex flex-col items-center gap-1 text-[9px] text-muted hover:text-gold hover:border-gold/30 transition-colors">
                    <Icon name={action.icon} className="w-3.5 h-3.5" />
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
