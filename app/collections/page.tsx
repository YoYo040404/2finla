import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       '2T Jewelers | Shop Jewelry — Chains, Pendants & More — Pittsburgh, PA',
  description: 'Shop chains, pendants, bracelets, rings, and earrings at 2T Jewelers in Pittsburgh, PA. Real store. Over 30 years. Ask about availability. Text 2T before you buy.',
}

const WA_STOCK = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20do%20you%20have%20in%20stock%20right%20now%3F'

const CATEGORIES = [
  {
    slug:  'chains',
    label: 'Chains',
    sub:   'Cuban, rope, tennis, iced-out. Ask what\'s in.',
    cta:   'SHOP CHAINS →',
    svg: (
      <svg width="64" height="48" viewBox="0 0 80 56" fill="none">
        <ellipse cx="22" cy="24" rx="15" ry="9" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
        <ellipse cx="58" cy="32" rx="15" ry="9" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
        <line x1="35" y1="28" x2="45" y2="28" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="35" cy="28" r="2.5" fill="rgba(208,238,255,0.6)"/>
        <circle cx="45" cy="28" r="2.5" fill="rgba(208,238,255,0.6)"/>
      </svg>
    ),
    glow: 'rgba(201,168,76,0.10)',
  },
  {
    slug:  'pendants',
    label: 'Pendants',
    sub:   'Logo, photo, name, number. Send the idea.',
    cta:   'SHOP PENDANTS →',
    svg: (
      <svg width="48" height="64" viewBox="0 0 58 78" fill="none">
        <rect x="24" y="4" width="10" height="13" rx="5" stroke="rgba(208,238,255,0.5)" strokeWidth="1.5"/>
        <path d="M4 36 L29 16 L54 36 L29 65 Z" stroke="rgba(208,238,255,0.6)" strokeWidth="1.5"/>
        <path d="M4 36 L29 46 L54 36" stroke="rgba(208,238,255,0.28)" strokeWidth="0.75"/>
        <circle cx="29" cy="38" r="5" fill="rgba(208,238,255,0.65)"/>
      </svg>
    ),
    glow: 'rgba(208,238,255,0.08)',
  },
  {
    slug:  'bracelets',
    label: 'Bracelets',
    sub:   'Wrist weight. Ask what\'s in.',
    cta:   'ASK ABOUT BRACELETS →',
    svg: (
      <svg width="56" height="48" viewBox="0 0 70 60" fill="none">
        <path d="M8 52 A31 31 0 1 1 62 52" stroke="rgba(201,168,76,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="8"  cy="52" r="4.5" fill="rgba(208,238,255,0.65)"/>
        <circle cx="62" cy="52" r="4.5" fill="rgba(208,238,255,0.65)"/>
        <circle cx="35" cy="4"  r="3.5" fill="rgba(201,168,76,0.65)"/>
      </svg>
    ),
    glow: 'rgba(201,168,76,0.08)',
  },
  {
    slug:  'rings',
    label: 'Rings',
    sub:   'Pinky, statement, signet. Ask what\'s in.',
    cta:   'ASK ABOUT RINGS →',
    svg: (
      <svg width="48" height="56" viewBox="0 0 60 68" fill="none">
        <circle cx="30" cy="44" r="20" stroke="rgba(208,238,255,0.55)" strokeWidth="2.5"/>
        <path d="M22 24 L30 14 L38 24" stroke="rgba(208,238,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="14" r="4" fill="rgba(208,238,255,0.7)"/>
      </svg>
    ),
    glow: 'rgba(208,238,255,0.08)',
  },
  {
    slug:  'earrings',
    label: 'Earrings',
    sub:   'Studs, hoops, drops. Ask what\'s available.',
    cta:   'ASK ABOUT EARRINGS →',
    svg: (
      <svg width="48" height="56" viewBox="0 0 60 68" fill="none">
        <line x1="16" y1="5"  x2="16" y2="18" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="16" cy="38" rx="9" ry="16" stroke="rgba(208,238,255,0.55)" strokeWidth="1.5"/>
        <circle  cx="16" cy="38" r="3.5" fill="rgba(208,238,255,0.55)"/>
        <line x1="44" y1="5"  x2="44" y2="18" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="44" cy="38" rx="9" ry="16" stroke="rgba(208,238,255,0.55)" strokeWidth="1.5"/>
        <circle  cx="44" cy="38" r="3.5" fill="rgba(208,238,255,0.55)"/>
      </svg>
    ),
    glow: 'rgba(208,238,255,0.07)',
  },
  {
    slug:  'best-sellers',
    label: 'Best Sellers',
    sub:   'Ask what people are getting. Text 2T to confirm.',
    cta:   'TEXT 2T →',
    svg: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <polygon points="32,4 38,24 60,24 43,37 49,58 32,45 15,58 21,37 4,24 26,24" stroke="rgba(201,168,76,0.65)" strokeWidth="1.5" fill="none"/>
        <circle cx="32" cy="32" r="6" fill="rgba(201,168,76,0.5)"/>
      </svg>
    ),
    glow: 'rgba(201,168,76,0.12)',
  },
  {
    slug:  'new-arrivals',
    label: 'New Arrivals',
    sub:   'Ask what\'s coming in. Text 2T to confirm.',
    cta:   'TEXT 2T →',
    svg: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="24" stroke="rgba(208,238,255,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
        <line x1="32" y1="10" x2="32" y2="54" stroke="rgba(208,238,255,0.25)" strokeWidth="1"/>
        <line x1="10" y1="32" x2="54" y2="32" stroke="rgba(208,238,255,0.25)" strokeWidth="1"/>
        <circle cx="32" cy="32" r="5" fill="rgba(208,238,255,0.7)"/>
        <circle cx="32" cy="10" r="3" fill="rgba(201,168,76,0.8)"/>
      </svg>
    ),
    glow: 'rgba(208,238,255,0.08)',
  },
]

export default function CollectionsPage() {
  return (
    <main
      style={{
        background:  'var(--color-brand-black)',
        minHeight:   '100vh',
        paddingTop:  '80px',
      }}
    >

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 3vw, 2.5rem) clamp(2.5rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--color-brand-border)',
          position:     'relative',
          overflow:     'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            inset:         0,
            background:    'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}>
          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.65rem',
              letterSpacing: '0.14em',
              color:         'var(--color-brand-gold)',
              textTransform: 'uppercase',
              marginBottom:  '1rem',
            }}
          >
            2T Jewelers — Pittsburgh
          </p>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight:    400,
              lineHeight:    0.92,
              letterSpacing: '-0.02em',
              color:         'var(--color-brand-white)',
              marginBottom:  '1.25rem',
            }}
          >
            SHOP 2T{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
              JEWELRY.
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   'clamp(0.9rem, 1.5vw, 1rem)',
              color:      'var(--color-brand-muted)',
              maxWidth:   '48ch',
              lineHeight: 1.65,
            }}
          >
            Shop by category. Ask what&apos;s available. Text 2T before you buy.
          </p>
          <p
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.62rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color:         'var(--color-brand-gold)',
              marginTop:     '0.75rem',
              opacity:       0.7,
            }}
          >
            Gold or Silver&nbsp;·&nbsp;Diamond or Moissanite
          </p>
          <p
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--color-brand-subtle)',
              marginTop:     '0.3rem',
            }}
          >
            Material and stone details confirmed per piece. Text 2T to ask what fits.
          </p>
        </div>
      </section>

      {/* ── Category grid ───────────────────────────────────────── */}
      <section
        style={{
          padding:   'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 3vw, 2.5rem)',
          maxWidth:  '1080px',
          margin:    '0 auto',
        }}
      >
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap:                 '1px',
            background:          'var(--color-brand-border)',
            border:              '1px solid var(--color-brand-border)',
          }}
        >
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="cat-grid-link"
              style={{
                display:        'flex',
                flexDirection:  'column',
                alignItems:     'flex-start',
                gap:            '20px',
                padding:        '36px 28px',
                position:       'relative',
                overflow:       'hidden',
                textDecoration: 'none',
                background:     'var(--color-brand-black)',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position:      'absolute',
                  inset:         0,
                  background:    `radial-gradient(circle at 30% 40%, ${cat.glow} 0%, transparent 65%)`,
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'relative' }}>{cat.svg}</div>
              <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize:   'clamp(1.3rem, 2.5vw, 1.5rem)',
                    fontWeight: 400,
                    color:      'var(--color-brand-white)',
                    lineHeight: 1.0,
                  }}
                >
                  {cat.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.8125rem',
                    color:      'var(--color-brand-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {cat.sub}
                </div>
              </div>
              <div
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.72rem',
                  letterSpacing: '0.08em',
                  color:         'var(--color-brand-gold)',
                  textTransform: 'uppercase',
                  position:      'relative',
                }}
              >
                {cat.cta}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 3vw, 2.5rem)',
          borderTop:    '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.3rem, 3vw, 2rem)',
              fontWeight:   400,
              color:        'var(--color-brand-white)',
              marginBottom: '0.5rem',
              lineHeight:   1.1,
            }}
          >
            Don&apos;t see your piece?
          </p>
          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '0.9rem',
              color:        'var(--color-brand-muted)',
              marginBottom: '1.75rem',
              lineHeight:   1.6,
              maxWidth:     '48ch',
            }}
          >
            Send the logo, photo, name, or idea. We quote before the build. No deposit to start.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <Link href="/custom" className="btn-primary">
              BUILD CUSTOM →
            </Link>
            <a
              href={WA_STOCK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              ASK WHAT&rsquo;S IN →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
