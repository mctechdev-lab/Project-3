import React from 'react'
import Reveal from './Reveal'

const phases = [
  { n: '01', title: 'Product design & MVP', desc: 'Define the core experience, finalize the visual identity and build a minimum viable product.' },
  { n: '02', title: 'Wallet & financial infrastructure', desc: 'Build the multi-currency wallet, ledger and core account infrastructure.' },
  { n: '03', title: 'Crypto & payment integrations', desc: 'Connect licensed payment providers and crypto liquidity partners.' },
  { n: '04', title: 'KYC, compliance & security', desc: 'Implement identity verification, monitoring and the full security stack.' },
  { n: '05', title: 'Testing & production launch', desc: 'Quality assurance, regulatory review and a phased public launch.' }
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-[100px] border-t border-edge">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[600px] mb-14">
          <div className="text-[12.5px] font-semibold uppercase tracking-wide text-gold mb-3">Future roadmap</div>
          <h2 className="font-display font-semibold text-[34px] tracking-tight mb-4">From concept to launch</h2>
          <p className="text-muted text-[15.5px] leading-relaxed">
            A proposed sequence for turning this concept into a real, licensed
            product. Timelines and scope would be refined together during
            project planning.
          </p>
        </Reveal>
        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-edge" />
          <div className="grid lg:grid-cols-5 gap-5">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="relative bg-surface border border-edge rounded-[16px] p-5 pt-6 h-full hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="hidden lg:block absolute -top-[7px] left-5 w-3.5 h-3.5 rounded-full bg-gold border-4 border-ink" />
                  <div className="font-mono text-[12px] text-gold mb-3">Phase {p.n}</div>
                  <h4 className="text-[14px] font-semibold mb-2 leading-snug">{p.title}</h4>
                  <p className="text-[12px] text-muted leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
