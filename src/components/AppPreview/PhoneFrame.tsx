import React from 'react'

interface PhoneFrameProps {
  children: React.ReactNode
  bottomNav?: React.ReactNode
  statusRight?: string
}

export default function PhoneFrame({ children, bottomNav, statusRight = 'Vela' }: PhoneFrameProps) {
  return (
    <div className="w-[300px] h-[620px] mx-auto bg-black rounded-[42px] p-3 shadow-phone relative shrink-0">
      {/* notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-full z-20" />
      <div className="w-full h-full bg-ink rounded-[32px] overflow-hidden relative flex flex-col">
        <div className="flex justify-between px-5 pt-4 pb-1 text-[11px] text-muted shrink-0">
          <span>9:41</span>
          <span>{statusRight}</span>
        </div>
        <div className="flex-1 overflow-y-auto phone-scroll px-[18px] pb-3">
          {children}
        </div>
        {bottomNav}
      </div>
    </div>
  )
}
