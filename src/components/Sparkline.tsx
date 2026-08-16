import React from 'react'

interface SparklineProps {
  data: number[]
  positive?: boolean
  width?: number
  height?: number
  className?: string
}

/**
 * Small line chart used for market previews and trading rows.
 * Deliberately dependency-free so the demo has no chart-library
 * version to keep in sync.
 */
export default function Sparkline({ data, positive = true, width = 96, height = 32, className = '' }: SparklineProps) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const step = width / (data.length - 1)

  const points = data
    .map((v, i) => {
      const x = i * step
      const y = height - ((v - min) / range) * height
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  const color = positive ? '#16C784' : '#EA3943'

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className}>
      <polyline points={points} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
