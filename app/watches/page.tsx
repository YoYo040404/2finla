import Link from 'next/link'

export default function WatchesPage() {
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
          background: 'radial-gradient(ellipse 50% 55% at 15% 50%, rgba(208,238,255,0.06) 0%, transparent 70%)',
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
            <span style={{ color: '#9fa8b3' }}>Diamond Watches</span>
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
              <svg width="60" height="72" viewBox="0 0 60 72" fill="none">
                <rect x="22" y="4" width="16" height="8" rx="2" stroke="rgba(208,238,255,0.4)" strokeWidth="1.5"/>
                <rect x="22" y="60" width="16" height="8" rx="2" stroke="rgba(208,238,255,0.4)" strokeWidth="1.5"/>
                <circle cx="30" cy="36" r="20" stroke="rgba(208,238,255,0.55)" strokeWidth="2"/>
                <circle cx="30" cy="36" r="14" stroke="rgba(208,238,255,0.25)" strokeWidth="1"/>
                <line x1="30" y1="26" x2="30" y2="36" stroke="rgba(208,238,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="30" y1="36" x2="38" y2="41" stroke="rgba(201,168,76,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="30" cy="36" r="2" fill="rgba(208,238,255,0.8)"/>
                <circle cx="30" cy="17" r="1.5" fill="rgba(201,168,76,0.7)"/>
                <circle cx="30" cy="55" r="1.5" fill="rgba(201,168,76,0.7)"/>
                <circle cx="11" cy="36" r="1.5" fill="rgba(201,168,76,0.7)"/>
                <circle cx="49" cy="36" r="1.5" fill="rgba(201,168,76,0.7)"/>
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
                Diamond Watches
              </h1>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontStyle: 'italic',
                color: '#d0eeff',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}>
                Iced bezels. Presidential-style. High-end watch direction.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: '#9fa8b3',
                lineHeight: 1.65,
                maxWidth: '540px',
              }}>
                We source and set. Tell us the brand, budget, and style direction — we guide the conversation before quote or production.
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
            background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(208,238,255,0.03) 0%, transparent 70%)',
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
            Tell us what you&apos;re looking for.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: '#686868',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}>
            Budget range, brand, style direction — we quote first. No deposit, no rush.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/custom" className="btn-primary">
              Start the Request →
            </Link>
            <a
              href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20want%20to%20ask%20about%20a%20diamond%20watch."
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
