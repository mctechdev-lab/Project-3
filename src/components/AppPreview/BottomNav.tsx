import React from 'react'
import Icon, { IconName } from '../icons/Icon'
import type { ScreenId } from '../../types'

const items: { id: ScreenId; label: string; icon: IconName }[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'finance', label: 'Finance', icon: 'target' },
  { id: 'trade', label: 'Trade', icon: 'chart' },
  { id: 'rewards', label: 'Rewards', icon: 'gift' },
  { id: 'assets', label: 'Assets', icon: 'layers' }
]

interface BottomNavProps {
  active: ScreenId
  onChange: (id: ScreenId) => void
}

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <div className="flex justify-around px-2 py-2 border-t border-edge text-[9.5px] text-muted shrink-0 bg-ink">
      {items.map((item) => {
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-all duration-200 active:scale-90 ${isActive ? 'text-gold' : 'text-muted hover:text-ink2'}`}
          >
            <Icon name={item.icon} className={`w-[18px] h-[18px] transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
