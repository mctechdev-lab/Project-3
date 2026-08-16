import React from 'react'
import Icon, { IconName } from '../../icons/Icon'
import { kycStatus } from '../../../data/mockData'

interface ProfileScreenProps {
  onClose: () => void
}

const settingsRows: { icon: IconName; label: string; meta?: string }[] = [
  { icon: 'lock', label: 'Transaction PIN', meta: 'Set' },
  { icon: 'fingerprint', label: 'Biometric login', meta: 'Enabled' },
  { icon: 'shield', label: 'Two-factor authentication', meta: 'Enabled' },
  { icon: 'bell', label: 'Notifications', meta: 'On' },
  { icon: 'card', label: 'Transaction limits', meta: '₦2,000,000/day' },
  { icon: 'help-circle', label: 'Help & Support' },
  { icon: 'file-text', label: 'Terms & Privacy' }
]

export default function ProfileScreen({ onClose }: ProfileScreenProps) {
  return (
    <div className="pb-2">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[15px] font-semibold">Profile & Settings</div>
        <button onClick={onClose} aria-label="Close profile" className="w-8 h-8 rounded-full bg-surface2 border border-edge flex items-center justify-center text-muted">
          <Icon name="x" className="w-4 h-4" />
        </button>
      </div>

      {/* personal info */}
      <div className="flex items-center gap-3 bg-surface2 border border-edge rounded-[16px] p-3.5 mb-4">
        <div className="w-12 h-12 rounded-full bg-gold-dim text-gold flex items-center justify-center">
          <Icon name="user" className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[13px] font-semibold">Chidera Okafor</div>
          <div className="text-[10.5px] text-muted">chidera•••@example.com</div>
        </div>
      </div>

      {/* verification status */}
      <div className="bg-surface2 border border-edge rounded-[16px] p-3.5 mb-4">
        <div className="flex items-center gap-2 mb-2.5">
          <Icon name="user-check" className="w-4 h-4 text-gold" />
          <div className="text-[12.5px] font-semibold">Identity verification</div>
        </div>
        {[
          { label: 'Phone number verified', done: kycStatus.phoneVerified },
          { label: 'Government ID uploaded', done: kycStatus.idUploaded },
          { label: 'Selfie match', done: false, status: 'In progress' },
          { label: 'Proof of address', done: false, status: 'Pending' }
        ].map((step) => (
          <div key={step.label} className="flex items-center gap-2.5 py-1.5">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${step.done ? 'bg-success-dim text-success' : 'bg-surface text-muted border border-edge'}`}>
              {step.done && <Icon name="check" className="w-3 h-3" />}
            </div>
            <div className="text-[11.5px]">{step.label}</div>
            {!step.done && <div className="ml-auto text-[10px] text-muted">{step.status}</div>}
          </div>
        ))}
      </div>

      {/* settings list */}
      <div className="bg-surface2 border border-edge rounded-[16px] overflow-hidden mb-4">
        {settingsRows.map((row, i) => (
          <button key={row.label} className={`w-full flex items-center gap-2.5 px-3.5 py-3 text-left ${i !== settingsRows.length - 1 ? 'border-b border-white/5' : ''}`}>
            <Icon name={row.icon} className="w-4 h-4 text-muted" />
            <span className="text-[12px] flex-1">{row.label}</span>
            {row.meta && <span className="text-[10.5px] text-muted">{row.meta}</span>}
            <Icon name="chevron-right" className="w-3.5 h-3.5 text-muted" />
          </button>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 text-[12.5px] text-danger py-2.5">
        <Icon name="log-out" className="w-4 h-4" />
        Log out
      </button>
    </div>
  )
}
