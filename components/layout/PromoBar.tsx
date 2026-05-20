'use client'

import { useEffect, useState } from 'react'

const MESSAGES = [
  'GRILLZ  ◆  WATCHES  ◆  CHAINS  ◆  RINGS  ◆  BRACELETS  ◆  CUSTOM',
  'PITTSBURGH STREET LUXURY  ◆  REAL JEWELER  ◆  OVER 30 YEARS',
  'NO DEPOSIT TO START  ◆  WE QUOTE BEFORE THE BUILD',
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
    }, 5800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      role="banner"
      aria-label="Store announcements"
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderBottom:    '1px solid rgba(201,168,76,0.2)',
        height:          '38px',
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
          color:           '#a0a0a0',
          userSelect:      'none',
          transition:      'opacity 0.3s ease, transform 0.3s ease',
          opacity:         visible ? 1 : 0,
          transform:       visible ? 'translateY(0)' : 'translateY(-5px)',
        }}
      >
        <span style={{ color: 'var(--color-brand-gold)', marginRight: '0.6em' }}>◆</span>
        {MESSAGES[index]}
        <span style={{ color: 'var(--color-brand-gold)', marginLeft: '0.6em' }}>◆</span>
      </p>
    </div>
  )
}
