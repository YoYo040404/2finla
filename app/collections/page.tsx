import Link from 'next/link'

const CATEGORIES = [
  {
    slug: 'chains',
    label: 'Chains',
    sub: 'Cuban to rope. Heavy to clean. Pick your weight.',
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
    slug: 'pendants',
    label: 'Pendants',
    sub: 'Your identity, hanging.',
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
    slug: 'bracelets',
    label: 'Bracelets',
    sub: 'Wrist stacks that hit.',
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
    slug: 'rings',
    label: 'Rings',
    sub: 'Pinky, statement, signet.',
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
    slug: 'earrings',
    label: 'Earrings',
    sub: 'Studs, hoops, drops.',
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
    slug: 'best-sellers',
    label: 'Best Sellers',
    sub: 'Pieces people ask for first.',
    svg: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <polygon points="32,4 38,24 60,24 43,37 49,58 32,45 15,58 21,37 4,24 26,24" stroke="rgba(201,168,76,0.65)" strokeWidth="1.5" fill="none"/>
        <circle cx="32" cy="32" r="6" fill="rgba(201,168,76,0.5)"/>
      </svg>
    ),
    glow: 'rgba(201,168,76,0.12)',
  },
  {
    slug: 'new-arrivals',
    label: 'New Arrivals',
    sub: 'Fresh shine. New directions.',
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
    <main style={{ background: '#080808', minHeight: '100vh', paddingTop: '80px' }}>

      {/* Hero */}
      <section style={{
        padding: '72px 24px 56px',
        borderBottom: '1px solid #252525',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            color: '#c9a84c',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            2T Jewelers — Pittsburgh
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: '#f0f0f0',
            marginBottom: '20px',
          }}>
            Shop the Shine
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            color: '#686868',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}>
            Build the piece next. Browse by category or start a custom request.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section style={{ padding: '56px 24px 72px', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1px',
          background: '#252525',
          border: '1px solid #252525',
        }}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="cat-grid-link"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '36px 28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.2s ease',
                textDecoration: 'none',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(circle at 30% 40%, ${cat.glow} 0%, transparent 65%)`,
                pointerEvents: 'none',
              }}/>
              <div style={{ position: 'relative' }}>{cat.svg}</div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: '#f0f0f0',
                  lineHeight: 1.1,
                  marginBottom: '6px',
                }}>
                  {cat.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: '#686868',
                  lineHeight: 1.5,
                }}>
                  {cat.sub}
                </div>
              </div>
              <div style={{
                marginTop: 'auto',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                color: '#c9a84c',
                textTransform: 'uppercase',
              }}>
                View →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        padding: '48px 24px 80px',
        borderTop: '1px solid #252525',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          color: '#686868',
          marginBottom: '28px',
        }}>
          Don&apos;t see your piece? Start a custom request.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/custom" className="btn-primary">
            Start Custom →
          </Link>
          <a
            href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20have%20a%20question%20about%20a%20piece."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            Text Us on WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}
