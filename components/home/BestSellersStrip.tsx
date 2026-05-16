// components/home/BestSellersStrip.tsx
//
// Style lanes only — no fake product names, prices, inventory, or rankings.
// Cards are category style guides, not real products.
// Primary CTA → /custom. Secondary browse link → /collections/[lane].
import Link from 'next/link'
import type { ReactNode } from 'react'

type CardShape = 'chain' | 'pendant' | 'bracelet' | 'ring' | 'custom' | 'watch' | 'grillz' | 'earring'

interface LaneCard {
  label: string
  shape: CardShape
}

interface Lane {
  id:         string
  label:      string
  sub:        string
  ctaHref:    string
  cta:        string
  browseHref: string
  cards:      LaneCard[]
}

const LANES: Lane[] = [
  {
    id:         'best-sellers',
    label:      'BEST SELLERS',
    sub:        'Pieces people ask for first.',
    ctaHref:    '/custom',
    cta:        'ASK ABOUT THIS STYLE →',
    browseHref: '/collections/best-sellers',
    cards: [
      { label: 'CHAINS',    shape: 'chain'    },
      { label: 'PENDANTS',  shape: 'pendant'  },
      { label: 'BRACELETS', shape: 'bracelet' },
      { label: 'RINGS',     shape: 'ring'     },
    ],
  },
  {
    id:         'new-arrivals',
    label:      'NEW ARRIVALS',
    sub:        'Fresh shine. New directions.',
    ctaHref:    '/custom',
    cta:        'START THE PIECE →',
    browseHref: '/collections/new-arrivals',
    cards: [
      { label: 'CUSTOM',   shape: 'custom'  },
      { label: 'WATCHES',  shape: 'watch'   },
      { label: 'GRILLZ',   shape: 'grillz'  },
      { label: 'EARRINGS', shape: 'earring' },
    ],
  },
]

const CARD_SVGS: Record<CardShape, ReactNode> = {
  chain: (
    <svg width="56" height="40" viewBox="0 0 56 40" fill="none" aria-hidden="true">
      <ellipse cx="16" cy="18" rx="11" ry="7" stroke="rgba(201,168,76,0.45)" strokeWidth="1.4"/>
      <ellipse cx="40" cy="22" rx="11" ry="7" stroke="rgba(201,168,76,0.45)" strokeWidth="1.4"/>
      <line x1="25" y1="20" x2="31" y2="20" stroke="rgba(201,168,76,0.3)" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="25" cy="20" r="2" fill="rgba(208,238,255,0.55)"/>
      <circle cx="31" cy="20" r="2" fill="rgba(208,238,255,0.55)"/>
    </svg>
  ),
  pendant: (
    <svg width="42" height="56" viewBox="0 0 42 56" fill="none" aria-hidden="true">
      <rect x="17" y="2" width="8" height="10" rx="4" stroke="rgba(208,238,255,0.45)" strokeWidth="1.4"/>
      <path d="M3 26 L21 12 L39 26 L21 48 Z" stroke="rgba(208,238,255,0.55)" strokeWidth="1.4"/>
      <circle cx="21" cy="29" r="4" fill="rgba(208,238,255,0.55)"/>
    </svg>
  ),
  bracelet: (
    <svg width="52" height="44" viewBox="0 0 52 44" fill="none" aria-hidden="true">
      <path d="M6 38 A24 24 0 1 1 46 38" stroke="rgba(201,168,76,0.5)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="6"  cy="38" r="3.5" fill="rgba(208,238,255,0.6)"/>
      <circle cx="46" cy="38" r="3.5" fill="rgba(208,238,255,0.6)"/>
      <circle cx="26" cy="2"  r="3"   fill="rgba(201,168,76,0.6)"/>
    </svg>
  ),
  ring: (
    <svg width="44" height="50" viewBox="0 0 44 50" fill="none" aria-hidden="true">
      <circle cx="22" cy="33" r="15" stroke="rgba(208,238,255,0.5)" strokeWidth="2"/>
      <path d="M16 18 L22 10 L28 18" stroke="rgba(208,238,255,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="22" cy="10" r="3.5" fill="rgba(208,238,255,0.65)"/>
    </svg>
  ),
  custom: (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <path
        d="M26 4 L36 18 L50 22 L38 34 L40 48 L26 41 L12 48 L14 34 L2 22 L16 18 Z"
        stroke="rgba(201,168,76,0.55)" strokeWidth="1.4" fill="rgba(201,168,76,0.06)"
      />
      <circle cx="26" cy="26" r="6" fill="rgba(201,168,76,0.35)"/>
    </svg>
  ),
  watch: (
    <svg width="36" height="56" viewBox="0 0 36 56" fill="none" aria-hidden="true">
      <rect x="4"  y="14" width="28" height="28" rx="6" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.4"/>
      <circle cx="18" cy="28" r="9" stroke="rgba(208,238,255,0.35)" strokeWidth="1"/>
      <rect x="10" y="4"  width="16" height="10" rx="2" fill="rgba(208,238,255,0.15)" stroke="rgba(208,238,255,0.3)" strokeWidth="1"/>
      <rect x="10" y="42" width="16" height="10" rx="2" fill="rgba(208,238,255,0.15)" stroke="rgba(208,238,255,0.3)" strokeWidth="1"/>
      <line x1="18" y1="22" x2="18" y2="28" stroke="rgba(208,238,255,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="18" y1="28" x2="22" y2="28" stroke="rgba(208,238,255,0.7)" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  grillz: (
    <svg width="56" height="36" viewBox="0 0 56 36" fill="none" aria-hidden="true">
      <path
        d="M8 10 Q28 4 48 10 L50 28 Q28 32 6 28 Z"
        stroke="rgba(201,168,76,0.5)" strokeWidth="1.4" fill="rgba(201,168,76,0.06)"
      />
      <line x1="16" y1="10" x2="15" y2="28" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8"/>
      <line x1="24" y1="8"  x2="23" y2="29" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8"/>
      <line x1="32" y1="8"  x2="33" y2="29" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8"/>
      <line x1="40" y1="10" x2="41" y2="28" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8"/>
    </svg>
  ),
  earring: (
    <svg width="44" height="56" viewBox="0 0 44 56" fill="none" aria-hidden="true">
      <line x1="12" y1="4"  x2="12" y2="14" stroke="rgba(208,238,255,0.45)" strokeWidth="1.4" strokeLinecap="round"/>
      <ellipse cx="12" cy="30" rx="7" ry="13" stroke="rgba(208,238,255,0.5)" strokeWidth="1.4"/>
      <circle  cx="12" cy="30" r="3" fill="rgba(208,238,255,0.5)"/>
      <line x1="32" y1="4"  x2="32" y2="14" stroke="rgba(208,238,255,0.45)" strokeWidth="1.4" strokeLinecap="round"/>
      <ellipse cx="32" cy="30" rx="7" ry="13" stroke="rgba(208,238,255,0.5)" strokeWidth="1.4"/>
      <circle  cx="32" cy="30" r="3" fill="rgba(208,238,255,0.5)"/>
    </svg>
  ),
}

export default function BestSellersStrip() {
  return (
    <section
      aria-label="Best Sellers and New Arrivals"
      style={{
        backgroundColor: 'var(--color-brand-black)',
        borderTop:       '1px solid var(--color-brand-border)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div className="best-sellers-grid">
          {LANES.map((lane) => (
            <div key={lane.id}>
              {/* Lane header */}
              <div
                style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  alignItems:     'flex-end',
                  marginBottom:   '1.5rem',
                  flexWrap:       'wrap',
                  gap:            '0.75rem',
                }}
              >
                <div>
                  <span className="section-eyebrow">{lane.label}</span>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.8rem',
                      color:      'var(--color-brand-muted)',
                      marginTop:  '0.3rem',
                    }}
                  >
                    {lane.sub}
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <Link href={lane.ctaHref} className="best-sellers-lane-cta">
                    {lane.cta}
                  </Link>
                  <Link
                    href={lane.browseHref}
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.65rem',
                      color:         'var(--color-brand-muted)',
                      letterSpacing: '0.06em',
                      transition:    'color 0.18s ease',
                    }}
                  >
                    BROWSE ALL →
                  </Link>
                </div>
              </div>

              {/* Style cards — SVG silhouette art, no real products */}
              <div className="best-sellers-cards">
                {lane.cards.map((card) => (
                  <Link
                    key={card.label}
                    href={lane.ctaHref}
                    className="best-sellers-card collection-card card-glow card-shine"
                    aria-label={`${card.label} — ${lane.cta}`}
                  >
                    <div aria-hidden="true" className="best-sellers-card-glow" />
                    <div aria-hidden="true" className="best-sellers-card-art">
                      {CARD_SVGS[card.shape]}
                    </div>
                    <span className="best-sellers-card-label" aria-hidden="true">{card.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
