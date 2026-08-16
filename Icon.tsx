import React from 'react'

export type IconName =
  | 'check' | 'arrow-down' | 'arrow-up' | 'swap' | 'send' | 'wallet' | 'chart'
  | 'receipt' | 'card' | 'shield' | 'globe' | 'lock' | 'fingerprint' | 'bell'
  | 'key' | 'user-check' | 'home' | 'grid' | 'user' | 'arrow-right' | 'caret-up'
  | 'caret-down' | 'minus' | 'plus' | 'target' | 'gift' | 'users' | 'clock'
  | 'x' | 'settings' | 'help-circle' | 'file-text' | 'log-out' | 'chevron-right'
  | 'trending-up' | 'layers' | 'download' | 'upload' | 'repeat'

const paths: Record<IconName, React.ReactNode> = {
  check: <polyline points="20 6 9 17 4 12" />,
  'arrow-down': (<><circle cx="12" cy="12" r="9" /><path d="M12 8v8M9 13l3 3 3-3" /></>),
  'arrow-up': (<><circle cx="12" cy="12" r="9" /><path d="M12 16V8M9 11l3-3 3 3" /></>),
  swap: <path d="M7 4v13M7 17l-3-3M7 17l3-3M17 20V7M17 7l-3 3M17 7l3 3" />,
  send: (<><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></>),
  wallet: (<><path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" /><path d="M16 5H6a2 2 0 0 0-2 2" /><path d="M18 13h.01" /></>),
  chart: (<><path d="M3 3v18h18" /><path d="M7 15v3M12 11v7M17 6v12" /></>),
  receipt: (<><path d="M4 3h16v18l-3-2-3 2-3-2-3 2-3-2-1 2Z" /><path d="M8 8h8M8 12h8M8 16h4" /></>),
  card: (<><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>),
  shield: (<><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5Z" /><path d="m9 12 2 2 4-4" /></>),
  globe: (<><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></>),
  lock: (<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>),
  fingerprint: (<><path d="M12 2a8 8 0 0 0-8 8v3a15 15 0 0 0 3 9" /><path d="M12 6a6 6 0 0 0-6 6v2a13 13 0 0 0 2.5 7.5" /><path d="M12 10a2 2 0 0 0-2 2v1a10 10 0 0 0 2 6" /><path d="M12 2a8 8 0 0 1 8 8v2a17 17 0 0 1-1 5.5" /><path d="M16 8a4 4 0 0 1 .9 5" /></>),
  bell: (<><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path d="M10 20a2 2 0 0 0 4 0" /></>),
  key: (<><circle cx="8" cy="15" r="4" /><path d="M10.5 12.5 19 4M17 6l2 2M14 9l2 2" /></>),
  'user-check': (<><circle cx="9" cy="8" r="4" /><path d="M2 21v-1a6 6 0 0 1 6-6h2" /><path d="m16 16 2 2 4-4" /></>),
  home: (<><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /></>),
  grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  user: (<><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" /></>),
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'caret-up': <path d="M6 15l6-6 6 6" />,
  'caret-down': <path d="M6 9l6 6 6-6" />,
  minus: <path d="M5 12h14" />,
  plus: <path d="M12 5v14M5 12h14" />,
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>),
  gift: (<><rect x="3" y="8" width="18" height="13" rx="1" /><path d="M12 8v13M3 12h18" /><path d="M12 8c-1.7 0-4-1-4-3a2 2 0 0 1 4 0c0-1 2.3-2 4-2a2 2 0 0 1 0 4c0 1-2.3 1-4 1Z" /></>),
  users: (<><path d="M17 21v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-1a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>),
  x: <path d="M18 6 6 18M6 6l12 12" />,
  settings: (<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z" /></>),
  'help-circle': (<><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 0 1 4.9.8c0 1.7-2.4 1.9-2.4 3.5" /><path d="M12 17.5h.01" /></>),
  'file-text': (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>),
  'log-out': (<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="M16 17l5-5-5-5M21 12H9" /></>),
  'chevron-right': <path d="M9 18l6-6-6-6" />,
  'trending-up': (<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>),
  layers: (<><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>),
  download: (<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><path d="M12 15V3" /></>),
  upload: (<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><path d="M12 3v12" /></>),
  repeat: (<><path d="m17 2 4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" /></>)
}

interface IconProps {
  name: IconName
  className?: string
  strokeWidth?: number
}

/**
 * Vela's original line-icon set — hand-built, not sourced from any
 * third-party icon library or existing product's branding.
 */
export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.8 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
