import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       '2T Jewelers | About — Pittsburgh, PA',
  description: '2T Jewelers. Downtown Pittsburgh. 332 Fifth Ave. 25 years in the game. Custom jewelry, grillz, watches — text first, ask before you buy.',
}

export default function AboutPage() {
  return (
    <main style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingTop: '106px' }}>

      {/* ── Hero ── */}
      <section
        style={{
          padding:      'clamp(3rem, 7vw, 5.5rem) clamp(1.25rem, 3vw, 2.5rem)',
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
            background:    'radial-gradient(ellipse 55% 60% at 15% 45%, rgba(201,168,76,0.07) 0%, transparent 70%), radial-gradient(ellipse 45% 50% at 88% 50%, rgba(201,168,76,0.04) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>
            2T JEWELERS
          </span>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(3rem, 7vw, 5.5rem)',
              fontWeight:    400,
              lineHeight:    0.9,
              letterSpacing: '-0.03em',
              color:         'var(--color-brand-white)',
              marginBottom:  '1.25rem',
            }}
          >
            DOWNTOWN<br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>PITTSBURGH.</em>
          </h1>
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="bang-signature bang-signature--section">BANG.</span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   'clamp(1rem, 2vw, 1.2rem)',
              color:      'var(--color-brand-silver)',
              lineHeight: 1.65,
              maxWidth:   '52ch',
            }}
          >
            25 years on Fifth Ave. Grillz, watches, chains, pendants, custom.
            Real store, real counter — ask before you buy.
          </p>
        </div>
      </section>

      {/* ── Facts ── */}
      <section
        style={{
          padding:      'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 3vw, 2.5rem)',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap:                 '1px',
              background:          'var(--color-brand-border)',
            }}
          >
            {[
              { label: 'LOCATION', value: '332 Fifth Ave', note: 'Downtown Pittsburgh, PA' },
              { label: 'IN THE GAME', value: '25 Years', note: 'Pittsburgh built' },
              { label: 'HOW IT WORKS', value: 'Text First', note: 'Ask before you buy' },
              { label: 'DETAILS', value: 'Per Piece', note: 'Confirmed per order — not estimated' },
            ].map(({ label, value, note }) => (
              <div
                key={label}
                style={{
                  background: 'var(--color-brand-charcoal)',
                  padding:    '2rem 1.75rem',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.72rem',
                    fontWeight:    600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color:         'var(--color-brand-gold)',
                    opacity:       0.85,
                    marginBottom:  '0.5rem',
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight:    400,
                    color:         'var(--color-brand-white)',
                    lineHeight:    1.1,
                    marginBottom:  '0.4rem',
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.82rem',
                    color:      'var(--color-brand-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section
        style={{
          padding:      'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 3vw, 2.5rem)',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WHAT WE DO</span>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight:   400,
              color:        'var(--color-brand-white)',
              lineHeight:   1.1,
              marginBottom: '1.5rem',
            }}
          >
            Custom. Grillz. Watches. Chains.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.9375rem',
              color:      'var(--color-brand-silver)',
              lineHeight: 1.7,
              maxWidth:   '56ch',
              marginBottom: '0.75rem',
            }}
          >
            Send the logo, photo, name, or sketch — we build the piece from it.
            Direction first. Quote before the build.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.9375rem',
              color:      'var(--color-brand-silver)',
              lineHeight: 1.7,
              maxWidth:   '56ch',
            }}
          >
            Grillz get fitted before anything is made. Watches are ask-first — source,
            condition, and stones confirmed per piece. No deposit to start.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 4.5rem) clamp(1.25rem, 3vw, 2.5rem)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            style={{
              padding:    'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
              border:     '1px solid rgba(201,168,76,0.25)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.01) 100%)',
              position:   'relative',
              overflow:   'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position:   'absolute',
                inset:      0,
                background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
              }}
            />
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem', position: 'relative' }}>
              COME THROUGH
            </span>
            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(1.5rem, 3.5vw, 2.4rem)',
                fontWeight:   400,
                color:        'var(--color-brand-white)',
                lineHeight:   1.0,
                marginBottom: '0.75rem',
                position:     'relative',
              }}
            >
              332 Fifth Ave. Downtown Pittsburgh.
            </p>
            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.875rem',
                color:        'var(--color-brand-muted)',
                lineHeight:   1.65,
                maxWidth:     '46ch',
                marginBottom: '1.75rem',
                position:     'relative',
              }}
            >
              Walk in or text first. Ask what&rsquo;s in the case, what just landed,
              or what it takes to build yours.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', position: 'relative' }}>
              <a
                href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20your%20store%20and%20what%20you%20have%20available."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                TEXT 2T →
              </a>
              <a href="tel:+14122817072" className="btn-outline-gold">
                CALL →
              </a>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link
              href="/"
              className="nav-link-footer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', letterSpacing: '0.03em' }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
