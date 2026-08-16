export type ScreenId = 'home' | 'finance' | 'trade' | 'rewards' | 'assets' | 'profile'

export interface Asset {
  code: string
  name: string
  balance: string
  value: string
  changePct: number
  colorClass: string
  bgClass: string
}

export interface MarketCoin {
  symbol: string
  name: string
  price: string
  changePct: number
  sparkline: number[]
}

export interface Transaction {
  id: string
  label: string
  meta: string
  amount: string
  direction: 'in' | 'out'
}

export interface SavingsGoal {
  name: string
  target: number
  saved: number
}

export interface RewardEntry {
  id: string
  label: string
  meta: string
  amount: string
}
