import React from 'react'
import Icon from './icons/Icon'
import { marketPreview } from '../data/mockData'

const doubled = [...marketPreview, ...marketPreview]

export default function Ticker() {
  return (
    <div className="border-b border-edge bg-surface overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-11 py-2.5 animate-ticker">
        {doubled.map((c, i) => (
          <span key={`${c.symbol}-${i}`} className="inline-flex items-center gap-2 text-[13px]">
            <span className="text-muted font-semibold">{c.symbol}</span>
            <span className="font-mono">{c.price}</span>
            <Icon
              name={c.changePct > 0 ? 'caret-up' : c.changePct < 0 ? 'caret-down' : 'minus'}
              className={`w-2.5 h-2.5 ${c.changePct > 0 ? 'text-success' : c.changePct < 0 ? 'text-danger' : 'text-muted'}`}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
