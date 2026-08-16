import React, { useState } from 'react'
import PhoneFrame from './PhoneFrame'
import BottomNav from './BottomNav'
import HomeScreen from './screens/HomeScreen'
import FinanceScreen from './screens/FinanceScreen'
import TradeScreen from './screens/TradeScreen'
import RewardsScreen from './screens/RewardsScreen'
import AssetsScreen from './screens/AssetsScreen'
import ProfileScreen from './screens/ProfileScreen'
import type { ScreenId } from '../../types'
import { DEMO_NOTICE } from '../../data/mockData'

const titles: Record<ScreenId, string> = {
  home: 'Vela',
  finance: 'Finance',
  trade: 'Trade',
  rewards: 'Rewards',
  assets: 'Assets',
  profile: 'Profile'
}

export default function AppPreview() {
  const [screen, setScreen] = useState<ScreenId>('home')
  const [profileOpen, setProfileOpen] = useState(false)

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return <HomeScreen onOpenProfile={() => setProfileOpen(true)} />
      case 'finance':
        return <FinanceScreen />
      case 'trade':
        return <TradeScreen />
      case 'rewards':
        return <RewardsScreen />
      case 'assets':
        return <AssetsScreen />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <PhoneFrame
          statusRight={profileOpen ? 'Profile' : titles[screen]}
          bottomNav={!profileOpen ? <BottomNav active={screen} onChange={setScreen} /> : undefined}
        >
          <div key={profileOpen ? 'profile' : screen} className="animate-fade-up">
            {profileOpen ? <ProfileScreen onClose={() => setProfileOpen(false)} /> : renderScreen()}
          </div>
        </PhoneFrame>
      </div>
      <div className="mt-5 text-[11.5px] text-muted flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        {DEMO_NOTICE}
      </div>
    </div>
  )
}
