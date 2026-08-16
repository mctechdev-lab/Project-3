import type { Asset, MarketCoin, Transaction, SavingsGoal, RewardEntry } from '../types'

// All values on this page are DEMO / MOCK data for product presentation
// purposes only. No figure here represents a real balance or transaction.

export const DEMO_NOTICE = 'Demo data — for product presentation only'

export const portfolio = {
  total: '₦245,800.00',
  available: '₦198,250.00',
  changePct: 3.1
}

export const quickActions = [
  { id: 'deposit', label: 'Deposit', icon: 'arrow-down' },
  { id: 'withdraw', label: 'Withdraw', icon: 'arrow-up' },
  { id: 'send', label: 'Send', icon: 'send' },
  { id: 'buy', label: 'Buy', icon: 'plus' },
  { id: 'sell', label: 'Sell', icon: 'minus' }
] as const

export const recentTransactions: Transaction[] = [
  { id: 't1', label: 'Bought BTC', meta: 'Today, 10:24 AM', amount: '+0.0024 BTC', direction: 'in' },
  { id: 't2', label: 'Sent to Amaka O.', meta: 'Yesterday', amount: '-₦45,000.00', direction: 'out' },
  { id: 't3', label: 'Daily savings', meta: '2 days ago', amount: '-₦2,000.00', direction: 'out' },
  { id: 't4', label: 'Referral reward', meta: '3 days ago', amount: '+₦1,500.00', direction: 'in' }
]

export const marketPreview: MarketCoin[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: '$62,140.20', changePct: 1.8, sparkline: [22, 24, 21, 26, 25, 29, 31, 28, 33] },
  { symbol: 'ETH', name: 'Ethereum', price: '$3,412.55', changePct: 0.9, sparkline: [18, 19, 17, 20, 22, 21, 23, 25, 24] },
  { symbol: 'SOL', name: 'Solana', price: '$168.42', changePct: -1.4, sparkline: [30, 28, 29, 26, 27, 24, 23, 22, 21] },
  { symbol: 'USDT', name: 'Tether', price: '$1.00', changePct: 0.0, sparkline: [20, 20, 20, 20, 20, 20, 20, 20, 20] }
]

export const savingsGoal: SavingsGoal = {
  name: 'Laptop Fund',
  target: 500000,
  saved: 185000
}

export const dailySavingsPlan = {
  amount: '₦2,000.00',
  frequency: 'Daily',
  streak: 12,
  nextDebit: 'Tomorrow, 8:00 AM'
}

export const savingsPlans = [
  { id: 'daily', label: 'Daily Savings', desc: 'Small fixed amount saved automatically every day.', badge: '₦2,000 / day' },
  { id: 'weekly', label: 'Weekly Savings', desc: 'A set amount saved once a week toward a goal.', badge: '₦15,000 / week' },
  { id: 'monthly', label: 'Monthly Savings', desc: 'Save a larger amount on the same day each month.', badge: '₦60,000 / month' },
  { id: 'locked', label: 'Locked Funds', desc: 'Funds locked for a fixed term for a better return.', badge: '90-day lock' }
]

export const savingsHistory: Transaction[] = [
  { id: 's1', label: 'Daily savings — Laptop Fund', meta: 'Today', amount: '+₦2,000.00', direction: 'in' },
  { id: 's2', label: 'Daily savings — Laptop Fund', meta: 'Yesterday', amount: '+₦2,000.00', direction: 'in' },
  { id: 's3', label: 'Weekly savings — Rent Fund', meta: '4 days ago', amount: '+₦15,000.00', direction: 'in' }
]

export const tradeAssets: MarketCoin[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: '$62,140.20', changePct: 1.8, sparkline: [22, 24, 21, 26, 25, 29, 31, 28, 33] },
  { symbol: 'ETH', name: 'Ethereum', price: '$3,412.55', changePct: 0.9, sparkline: [18, 19, 17, 20, 22, 21, 23, 25, 24] },
  { symbol: 'USDT', name: 'Tether', price: '$1.00', changePct: 0.0, sparkline: [20, 20, 20, 20, 20, 20, 20, 20, 20] },
  { symbol: 'SOL', name: 'Solana', price: '$168.42', changePct: -1.4, sparkline: [30, 28, 29, 26, 27, 24, 23, 22, 21] },
  { symbol: 'BNB', name: 'BNB', price: '$584.10', changePct: 2.2, sparkline: [15, 16, 15, 18, 19, 18, 21, 22, 23] },
  { symbol: 'XRP', name: 'XRP', price: '$0.612', changePct: -0.6, sparkline: [19, 18, 19, 17, 18, 17, 16, 17, 16] }
]

export const referralCode = 'DEMO123'

export const rewardCampaigns: RewardEntry[] = [
  { id: 'r1', label: 'Invite 3 friends', meta: 'Earn ₦1,000 per successful invite', amount: '₦3,000' },
  { id: 'r2', label: 'Complete your first savings goal', meta: 'One-time reward', amount: '₦500' },
  { id: 'r3', label: 'Verify your identity', meta: 'One-time reward', amount: '₦250' }
]

export const rewardHistory: Transaction[] = [
  { id: 'h1', label: 'Referral bonus — Tunde A.', meta: '2 days ago', amount: '+₦1,000.00', direction: 'in' },
  { id: 'h2', label: 'Campaign reward', meta: '1 week ago', amount: '+₦500.00', direction: 'in' }
]

export const referralStats = {
  invited: 8,
  joined: 5,
  earned: '₦4,750.00'
}

export const walletAssets: Asset[] = [
  { code: 'NGN', name: 'Nigerian Naira', balance: '198,250.00', value: '₦198,250.00', changePct: 0, colorClass: 'text-success', bgClass: 'bg-success-dim' },
  { code: 'USD', name: 'US Dollar', balance: '120.40', value: '₦185,416.00', changePct: 0, colorClass: 'text-success', bgClass: 'bg-success-dim' },
  { code: 'USDT', name: 'Tether', balance: '680.00', value: '₦1,047,200.00', changePct: 0.0, colorClass: 'text-success', bgClass: 'bg-success-dim' },
  { code: 'BTC', name: 'Bitcoin', balance: '0.0821', value: '₦7,880,540.00', changePct: 1.8, colorClass: 'text-[#F7931A]', bgClass: 'bg-[#3A2415]' },
  { code: 'ETH', name: 'Ethereum', balance: '1.42', value: '₦3,604,720.00', changePct: 0.9, colorClass: 'text-[#8C9EFF]', bgClass: 'bg-[#1B2038]' },
  { code: 'SOL', name: 'Solana', balance: '12.6', value: '₦326,900.00', changePct: -1.4, colorClass: 'text-[#C77DFF]', bgClass: 'bg-[#2A1B38]' }
]

export const kycStatus = {
  phoneVerified: true,
  idUploaded: true,
  selfieMatch: 'in_progress' as const,
  addressProof: 'pending' as const
}
