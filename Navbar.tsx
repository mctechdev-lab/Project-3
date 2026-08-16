import React from 'react'
import Icon from './icons/Icon'

interface NavbarProps {
  onDiscuss: () => void
}

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#security', label: 'Security' },
  { href: '#roadmap', label: 'Roadmap' }
]

export default function Navbar({ onDiscuss }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-ink/85 backdrop-blur-md border-b border-edge">
      <div className="max-w-[1180px] mx-auto px-8 h-[76px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-[20px] tracking-tight">
          <span className="w-8 h-8 rounded-[9px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F0B90B, #C4930A)' }}>
            <Icon name="check" className="w-[17px] h-[17px] text-[#0A0A0C]" strokeWidth={2.4} />
          </span>
          Vela
        </a>
        <div className="hidden md:flex gap-8 text-[14.5px] text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink2 transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onDiscuss} className="hidden sm:inline-flex px-5 py-2.5 rounded-[11px] text-[14.5px] font-semibold border border-edge hover:border-white/25 active:scale-95 transition-all duration-150">
            Log in
          </button>
          <button onClick={onDiscuss} className="px-5 py-2.5 rounded-[11px] text-[14.5px] font-semibold bg-gold text-[#1A1300] hover:bg-gold-light active:scale-95 transition-all duration-150">
            Discuss the Project
          </button>
        </div>
      </div>
    </nav>
  )
}
