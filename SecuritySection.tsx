import React from 'react'
import Icon, { IconName } from './icons/Icon'
import Reveal from './Reveal'

const items: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'lock', title: 'PIN protection', desc: 'A transaction PIN required for sensitive actions inside the app.' },
  { icon: 'shield', title: 'Two-factor authentication', desc: 'An additional verification step for login and withdrawals.' },
  { icon: 'fingerprint', title: 'Biometric authentication', desc: 'Face or fingerprint unlock on supported devices.' },
  { icon: 'bell', title: 'Transaction alerts', desc: 'Real-time notifications for every transaction on the account.' },
  { icon: 'layers', title: 'Secure API architecture', desc: 'A backend designed around least-privilege access and encrypted transport.' },
  { icon: 'chart', title: 'Account activity monitoring', desc: 'Ongoing monitoring intended to flag unusual account activity.' }
]

export default function SecuritySection() {
  return (
    <section id="security" className="py-[100px] border-t border-edge text-center">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mx-auto mb-14">
          <div className="text-[12.5px] font-semibold uppercase tracking-wide text-gold mb-3">Security</div>
          <h2 className="font-display font-semibold text-[32px] tracking-tight mb-4">Designed to be protected at every step</h2>
          <p className="text-muted text-[15px] leading-relaxed">
            These are the security features planned for the finished product. This
            demo does not implement real authentication, encryption, or regulatory
            compliance — it exists to communicate the intended design.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="bg-surface border border-edge rounded-[16px] p-7 text-left h-full hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-[10px] bg-gold-dim text-gold flex items-center justify-center mb-4">
                  <Icon name={it.icon} className="w-5 h-5" />
                </div>
                <h4 className="text-[14.5px] font-semibold mb-1.5">{it.title}</h4>
                <p className="text-[12.5px] text-muted leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
