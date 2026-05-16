import Link from 'next/link'

export default function GrillzPage() {
  return (
    <main style={{ background: '#080808', minHeight: '100vh', paddingTop: '80px' }}>

      {/* Hero */}
      <section style={{
        padding: '72px 24px 64px',
        borderBottom: '1px solid #252525',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 50% 55% at 15% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginBottom: '40px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: '#686868',
            letterSpacing: '0.04em',
          }}>
            <Link href="/collections" className="nav-link-footer" style={{ fontSize: '0.75rem' }}>
              Collections
            </Link>
            <span style={{ color: '#363636' }}>›</span>
            <span style={{ color: '#9fa8b3' }}>Grillz</span>
          </nav>

          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* SVG icon */}
            <div style={{
              flexShrink: 0,
              width: '96px', height: '96px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid #252525',
              background: '#141414',
            }}>
              <svg width="72" height="48" viewBox="0 0 72 48" fill="none">
                {/* Top arch */}
                <path d="M8 24 Q36 4 64 24" stroke="rgba(201,168,76,0.6)" strokeWidth="2" fill="none"/>
                {/* Teeth top row */}
                <rect x="14" y="16" width="8"  height="10" rx="1.5" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" fill="rgba(201,168,76,0.08)"/>
                <rect x="24" y="12" width="8"  height="14" rx="1.5" stroke="rgba(201,168,76,0.55)" strokeWidth="1.2" fill="rgba(201,168,76,0.08)"/>
                <rect x="34" y="11" width="8"  height="15" rx="1.5" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2" fill="rgba(201,168,76,0.10)"/>
                <rect x="44" y="12" width="8"  height="14" rx="1.5" stroke="rgba(201,168,76,0.55)" strokeWidth="1.2" fill="rgba(201,168,76,0.08)"/>
                <rect x="54" y="16" width="6"  height="10" rx="1.5" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" fill="rgba(201,168,76,0.08)"/>
                {/* Ice accent dots on center teeth */}
                <circle cx="38" cy="15" r="1.5" fill="rgba(208,238,255,0.7)"/>
                <circle cx="42" cy="15" r="1.5" fill="rgba(208,238,255,0.7)"/>
                <circle cx="34" cy="19" r="1" fill="rgba(208,238,255,0.5)"/>
                <circle cx="46" cy="19" r="1" fill="rgba(208,238,255,0.5)"/>
                {/* Bottom band */}
                <path d="M8 30 Q36 44 64 30" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 6vw, 4.8rem)',
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: '#f0f0f0',
                marginBottom: '16px',
              }}>
                Grillz
              </h1>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontStyle: 'italic',
                color: '#c9a84c',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}>
                Bottom, top, or full set.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: '#9fa8b3',
                lineHeight: 1.65,
                maxWidth: '540px',
              }}>
                Gold, silver, iced out. Custom fit. Tell us the set, the material direction, and budget range — we quote first. No deposit, no rush.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '56px 24px 72px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <div style={{
          background: '#141414',
          border: '1px solid #252525',
          padding: '40px 36px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}/>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#686868',
            marginBottom: '12px',
          }}>
            Inquire
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            fontWeight: 400,
            color: '#f0f0f0',
            marginBottom: '8px',
            lineHeight: 1.15,
          }}>
            Ask about styles and what fits your budget.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: '#686868',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}>
            Tell us bottom, top, or full set — material preference and budget range helps start the conversation. We quote first.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/custom" className="btn-primary">
              Start the Request →
            </Link>
            <a
              href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20want%20to%20ask%20about%20grillz."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              Text Us on WhatsApp
            </a>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <Link
            href="/collections"
            className="nav-link-footer"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', letterSpacing: '0.03em' }}
          >
            ← All Collections
          </Link>
        </div>
      </section>

    </main>
  )
}
