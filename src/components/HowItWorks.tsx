import React from 'react'
import Icon, { IconName } from './icons/Icon'
import Reveal from './Reveal'

const steps: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'user', title: 'Create an account', desc: 'Sign up with a phone number and email in a couple of minutes.' },
  { icon: 'user-check', title: 'Verify your identity', desc: 'Complete KYC so the account is ready for full functionality.' },
  { icon: 'wallet', title: 'Fund your wallet', desc: 'Add money through a supported, licensed payment provider.' },
  { icon: 'layers', title: 'Manage money & assets', desc: 'Save, trade, convert and send — all from one dashboard.' }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-[100px] border-t border-edge">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[600px] mb-14">
          <div className="text-[12.5px] font-semibold uppercase tracking-wide text-gold mb-3">How it works</div>
          <h2 className="font-display font-semibold text-[34px] tracking-tight mb-4">Four simple steps</h2>
          <p className="text-muted text-[15.5px] leading-relaxed">
            This is the intended user journey for the finished product. These are
            planned capabilities being proposed for development — not a
            currently functioning financial service.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="relative bg-surface border border-edge rounded-[18px] p-6 h-full hover:-translate-y-1 hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-[12px] bg-gold-dim text-gold flex items-center justify-center">
                    <Icon name={s.icon} className="w-5 h-5" />
                  </div>
                  <span className="font-display text-[13px] text-muted">0{i + 1}</span>
                </div>
                <h3 className="text-[15.5px] font-semibold mb-2">{s.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
