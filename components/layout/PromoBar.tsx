'use client'

import { useEffect, useState } from 'react'

const MESSAGES = [
  'Custom pieces · Real materials · Ask before you buy',
  'Build the piece around your look',
  'Chains · Pendants · Grillz · Watches · Custom',
]

export function PromoBar() {
  const [index, setIndex]   = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length)
        setVisible(true)
      }, 320)
    }, 4800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      role="banner"
      aria-label="Store announcements"
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderBottom:    '1px solid var(--color-brand-border)',
        height:          '36px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        overflow:        'hidden',
      }}
    >
      <p
        style={{
          fontFamily:      'var(--font-body)',
          fontSize:        '0.68rem',
          letterSpacing:   '0.12em',
          textTransform:   'uppercase',
          color:           'var(--color-brand-muted)',
          userSelect:      'none',
          transition:      'opacity 0.3s ease, transform 0.3s ease',
          opacity:         visible ? 1 : 0,
          transform:       visible ? 'translateY(0)' : 'translateY(-5px)',
        }}
      >
        <span style={{ color: 'var(--color-brand-gold)', marginRight: '0.5em', opacity: 0.7 }}>·</span>
        {MESSAGES[index]}
        <span style={{ color: 'var(--color-brand-gold)', marginLeft: '0.5em', opacity: 0.7 }}>·</span>
      </p>
    </div>
  )
}
