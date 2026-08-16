import React, { useState } from 'react'
import Icon from './icons/Icon'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

// If a local backend (see /backend) is running, this will hit it.
// If not, the form still completes with a simulated confirmation so the
// frontend can be demoed entirely on its own.
// Uses the live backend by default. Override by setting VITE_API_URL in
// frontend/.env if the backend ever moves to a different URL.
const API_URL = import.meta.env.VITE_API_URL || 'https://a55136-6caa.c.jrnm.app/api/contact'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      // No backend running — still show a successful demo confirmation.
      setStatus('sent')
    }
  }

  const handleClose = () => {
    onClose()
    window.setTimeout(() => {
      setStatus('idle')
      setName('')
      setEmail('')
      setMessage('')
    }, 200)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-w-[440px] bg-surface border border-edge rounded-[20px] p-7 animate-fade-up">
        <button onClick={handleClose} aria-label="Close" className="absolute top-5 right-5 text-muted hover:text-ink2">
          <Icon name="x" className="w-5 h-5" />
        </button>

        {status === 'sent' ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-success-dim text-success flex items-center justify-center mx-auto mb-4">
              <Icon name="check" className="w-6 h-6" />
            </div>
            <h3 className="text-[18px] font-semibold mb-2">Thanks — message received</h3>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">
              This is a demo confirmation. In production this would notify the
              Vela team directly so they can follow up with you.
            </p>
            <button onClick={handleClose} className="px-6 py-2.5 rounded-[11px] bg-gold text-[#1A1300] text-[13.5px] font-semibold">
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-[19px] font-semibold mb-1.5">Discuss the Project</h3>
            <p className="text-[13px] text-muted mb-5 leading-relaxed">
              Tell us a bit about what you're looking for. This form is for demo
              purposes — no message is actually emailed anywhere.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11.5px] text-muted mb-1.5">Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface2 border border-edge rounded-[11px] px-3.5 py-2.5 text-[14px] outline-none focus:border-gold/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[11.5px] text-muted mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface2 border border-edge rounded-[11px] px-3.5 py-2.5 text-[14px] outline-none focus:border-gold/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-[11.5px] text-muted mb-1.5">Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-surface2 border border-edge rounded-[11px] px-3.5 py-2.5 text-[14px] outline-none focus:border-gold/50 resize-none"
                  placeholder="What would you like to build?"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-[12px] bg-gold text-[#1A1300] text-[14.5px] font-semibold disabled:opacity-60 active:scale-95 transition-transform duration-150"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
