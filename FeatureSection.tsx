import React from 'react'
import Icon, { IconName } from './icons/Icon'
import Reveal from './Reveal'

const features: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'wallet', title: 'Multi-Currency Wallet', desc: 'Hold naira, major foreign currencies and crypto side by side, with one clear view of total net worth.' },
  { icon: 'trending-up', title: 'Crypto Trading', desc: 'Buy, sell and trade supported crypto assets against live-style market pricing.' },
  { icon: 'target', title: 'Smart Savings', desc: 'Daily, weekly, monthly and locked savings plans built around real goals.' },
  { icon: 'globe', title: 'International Transfers', desc: 'Send and receive money across supported countries and currencies.' },
  { icon: 'gift', title: 'Rewards', desc: 'Referral rewards and campaigns that give users a reason to invite others.' },
  { icon: 'shield', title: 'Security', desc: 'PIN, biometrics and two-factor authentication designed in from the start.' },
  { icon: 'receipt', title: 'Transaction Tracking', desc: 'A complete, exportable history of every transaction across the wallet.' },
  { icon: 'user-check', title: 'KYC & Compliance', desc: 'Identity verification and monitoring built to support regulatory requirements.' }
]

export default function FeatureSection() {
  return (
    <section id="features" className="py-[100px] border-t border-edge">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[600px] mb-14">
          <div className="text-[12.5px] font-semibold uppercase tracking-wide text-gold mb-3">The concept</div>
          <h2 className="font-display font-semibold text-[34px] tracking-tight mb-4">One Wallet. Multiple Possibilities.</h2>
          <p className="text-muted text-[15.5px] leading-relaxed">
            Instead of juggling a bank app, a crypto exchange and a separate savings
            tool, Vela proposes bringing everyday money management, digital assets,
            trading, savings and rewards into a single, coherent product.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="group bg-surface border border-edge rounded-[18px] p-6 h-full hover:border-gold/35 hover:-translate-y-1 hover:shadow-card transition-all duration-300">
                <div className="w-11 h-11 rounded-[12px] bg-gold-dim text-gold flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={f.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-[16.5px] font-semibold mb-2">{f.title}</h3>
                <p className="text-[13.5px] text-muted leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
