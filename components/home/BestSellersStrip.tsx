// components/home/BestSellersStrip.tsx
//
// Style guide cards — inquiry-first. No real product names, prices, rankings, or inventory claims.
// Each card links to a category page or /custom. CTA is an inquiry prompt, not a purchase prompt.
'use client'

import Link from 'next/link'
import { useState } from 'react'

type Tone = 'gold' | 'ice' | 'smoke'

interface StyleCard {
  label:       string
  sub:         string
  href:        string
  tone:        Tone
  enterDelay?: string
}

interface Lane {
  id:    string
  label: string
  sub:   string
  cards: StyleCard[]
}

const LANES: Lane[] = [
  {
    id:    'most-requested',
    label: 'MOST REQUESTED STYLES',
    sub:   'Pieces people ask for first.',
    cards: [
      { label: 'Cuban Chains',   sub: 'Heavy links. Neck piece energy.',         href: '/collections/chains',   tone: 'gold',  enterDelay: '0ms'   },
      { label: 'Logo Pendants',  sub: 'Bring the mark. Make it hit.',            href: '/collections/pendants', tone: 'ice',   enterDelay: '60ms'  },
      { label: 'Grillz',        sub: 'Top, bottom, full set.',                  href: '/grillz',               tone: 'gold',  enterDelay: '120ms' },
      { label: 'Tennis Chains', sub: 'Clean shine. Everyday flash.',            href: '/collections/chains',   tone: 'ice',   enterDelay: '180ms' },
    ],
  },
  {
    id:    'whats-dropping',
    label: "WHAT'S DROPPING",
    sub:   'Style directions worth asking about.',
    cards: [
      { label: 'Photo Pendants',     sub: 'Turn the image into a piece.',               href: '/custom',               tone: 'ice',   enterDelay: '0ms'   },
      { label: 'Diamond Watches',    sub: 'Iced bezels. Custom-set direction.',         href: '/watches',              tone: 'ice',   enterDelay: '60ms'  },
      { label: 'Custom Name Pieces', sub: 'Name, number, logo — built from the idea.', href: '/custom',               tone: 'gold',  enterDelay: '120ms' },
      { label: 'Earrings & Rings',   sub: 'Small piece. Loud signal.',                 href: '/collections/earrings', tone: 'smoke', enterDelay: '180ms' },
    ],
  },
]

const TONE_GLOW: Record<Tone, string> = {
  gold:  'radial-gradient(ellipse 90% 90% at 15% 85%, rgba(201,168,76,0.22) 0%, transparent 58%)',
  ice:   'radial-gradient(ellipse 90% 90% at 85% 15%, rgba(208,238,255,0.13) 0%, transparent 58%)',
  smoke: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(156,163,175,0.10) 0%, transparent 65%)',
}

const TONE_BORDER: Record<Tone, string> = {
  gold:  'rgba(201,168,76,0.22)',
  ice:   'rgba(208,238,255,0.18)',
  smoke: 'rgba(156,163,175,0.16)',
}

const TONE_HOVER_BORDER: Record<Tone, string> = {
  gold:  'rgba(201,168,76,0.60)',
  ice:   'rgba(208,238,255,0.55)',
  smoke: 'rgba(156,163,175,0.45)',
}

const TONE_MARK: Record<Tone, string> = {
  gold:  'rgba(201,168,76,0.45)',
  ice:   'rgba(208,238,255,0.50)',
  smoke: 'rgba(156,163,175,0.40)',
}

function StyleCard({ card }: { card: StyleCard }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={card.href}
      aria-label={`${card.label} — ask about this style`}
      className="bss-card-enter"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:        'relative',
        overflow:        'hidden',
        display:         'flex',
        flexDirection:   'column',
        justifyContent:  'space-between',
        minHeight:       '160px',
        padding:         '1.25rem 1.125rem 1rem',
        backgroundColor: '#141414',
        border:          `1px solid ${hovered ? TONE_HOVER_BORDER[card.tone] : TONE_BORDER[card.tone]}`,
        textDecoration:  'none',
        cursor:          'pointer',
        transform:       hovered ? 'scale(1.014)' : 'scale(1)',
        boxShadow:       hovered ? '0 8px 28px rgba(0,0,0,0.45)' : 'none',
        transition:      'border-color 0.25s ease, transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.25s ease',
        animationDelay:  card.enterDelay ?? '0ms',
      }}
    >
      {/* Atmospheric glow */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          background:    TONE_GLOW[card.tone],
          opacity:       hovered ? 1 : 0.75,
          pointerEvents: 'none',
          transition:    'opacity 0.3s ease',
        }}
      />

      {/* Diagonal shine */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          background:    'linear-gradient(135deg, transparent 38%, rgba(255,255,255,0.035) 55%, transparent 72%)',
          opacity:       hovered ? 1 : 0,
          pointerEvents: 'none',
          transition:    'opacity 0.3s ease',
        }}
      />

      {/* Corner mark */}
      <span
        aria-hidden="true"
        style={{
          position:      'absolute',
          top:           '0.75rem',
          right:         '0.875rem',
          fontSize:      '0.5rem',
          color:         TONE_MARK[card.tone],
          opacity:       hovered ? 0.9 : 0.45,
          pointerEvents: 'none',
          transition:    'opacity 0.2s ease',
        }}
      >
        ◆
      </span>

      {/* Card body */}
      <div
        style={{
          display:       'flex',
          flexDirection: 'column',
          gap:           '0.35rem',
          position:      'relative',
          zIndex:        1,
          flex:          1,
        }}
      >
        <span
          style={{
            display:       'block',
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(1.05rem, 2.2vw, 1.4rem)',
            fontWeight:    700,
            color:         hovered ? '#c9a84c' : '#f0f0f0',
            letterSpacing: '0.01em',
            lineHeight:    1.08,
            textTransform: 'uppercase',
            transition:    'color 0.2s ease',
          }}
        >
          {card.label}
        </span>
        <span
          style={{
            display:    'block',
            fontFamily: 'var(--font-body)',
            fontSize:   '0.73rem',
            color:      '#686868',
            lineHeight: 1.45,
          }}
        >
          {card.sub}
        </span>
      </div>

      {/* CTA — visible at low opacity by default; full on hover (mobile-accessible) */}
      <span
        style={{
          position:      'relative',
          zIndex:        1,
          display:       'block',
          marginTop:     '0.875rem',
          fontFamily:    'var(--font-body)',
          fontSize:      '0.6rem',
          fontWeight:    600,
          letterSpacing: '0.1em',
          color:         '#c9a84c',
          opacity:       hovered ? 1 : 0.55,
          transition:    'opacity 0.2s ease',
        }}
      >
        ASK ABOUT THIS STYLE →
      </span>
    </Link>
  )
}

export default function BestSellersStrip() {
  return (
    <section
      aria-label="Most Requested Styles"
      style={{
        backgroundColor: '#080808',
        borderTop:       '1px solid #252525',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin:   '0 auto',
          padding:  'clamp(2.5rem,6vw,4rem) 1.5rem',
        }}
      >
        {/* Two-lane grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap:                 '3rem',
          }}
        >
          {LANES.map((lane) => (
            <div key={lane.id}>

              {/* Lane header */}
              <div style={{ marginBottom: '1.125rem' }}>
                <span className="section-eyebrow">{lane.label}</span>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.775rem',
                    color:      '#686868',
                    marginTop:  '0.35rem',
                  }}
                >
                  {lane.sub}
                </p>
              </div>

              {/* 2×2 card grid — scroll-snap on mobile */}
              <div
                className="bss-snap-container"
                style={{
                  display:             'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap:                 '0.5rem',
                }}
              >
                {lane.cards.map((card) => (
                  <div key={card.label} className="bss-snap-card">
                    <StyleCard card={card} />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
