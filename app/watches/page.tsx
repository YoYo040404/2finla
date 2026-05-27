import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       '2T Jewelers | Iced-Out Watches — Pittsburgh, PA',
  description: 'Iced-out watch direction in Pittsburgh, PA. Ask 2T about style and pricing — details confirmed per piece. Real store. Over 30 years. Text to ask.',
}

const WA_WATCHES = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20watch.'

const DIRECTION_CHIPS = [
  'Diamond Bezel Direction',
  'Iced Watch Direction',
  'Watch Band Direction',
  'High-End Inquiry',
  'Custom Watch Look',
  'Ask What\'s Available',
]

const WHAT_TO_TELL = [
  {
    label: 'BUDGET RANGE',
    body: 'A budget range helps 2T quote the right direction. Not a final price.',
  },
  {
    label: 'WATCH DIRECTION',
    body: 'Style, size, brand direction, how you plan to wear it.',
  },
  {
    label: 'LOOK YOU\'RE AFTER',
    body: 'Diamond set, iced bezel, custom band, full custom look — tell us what you\'re picturing.',
  },
]

export default function WatchesPage() {
  return (
    <main style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingTop: '106px' }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          position:     'relative',
          padding:      'clamp(3.5rem, 8vw, 6rem) 1.5rem clamp(3rem, 7vw, 5rem)',
          borderBottom: '1px solid var(--color-brand-border)',
          overflow:     'hidden',
        }}
      >
        {/* Ice-blue ambient glow */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 60% 60% at 8% 50%, rgba(208,238,255,0.07) 0%, transparent 72%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <span className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>WATCHES</span>

          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(3.2rem, 7vw, 6rem)',
              fontWeight:    600,
              lineHeight:    0.92,
              letterSpacing: '-0.03em',
              color:         'var(--color-brand-white)',
              marginBottom:  '1.25rem',
            }}
          >
            WATCHES{' '}<br />
            <em style={{ color: 'var(--color-ice-blue)', fontStyle: 'italic' }}>THAT HIT.</em>
          </h1>

          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.05rem, 2.2vw, 1.45rem)',
              fontStyle:    'italic',
              color:        '#a8cce0',
              marginBottom: '1.25rem',
              lineHeight:   1.25,
              maxWidth:     '520px',
            }}
          >
            Diamond bezels. Iced directions. High-end watch looks.
          </p>

          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     'clamp(0.9rem, 1.5vw, 1rem)',
              color:        'var(--color-brand-muted)',
              lineHeight:   1.7,
              maxWidth:     '520px',
              marginBottom: '0.5rem',
            }}
          >
            Ask what 2T has available now. Details, condition, and pricing are confirmed per piece.
          </p>

          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.8rem',
              color:         'var(--color-brand-subtle)',
              marginBottom:  '2rem',
              letterSpacing: '0.02em',
            }}
          >
            No deposit. We quote before the build.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <a
              href={WA_WATCHES}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              TEXT 2T ABOUT WATCHES →
            </a>
            <Link href="/custom" className="btn-outline-gold">
              BUILD CUSTOM →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Direction Chips ───────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WHAT ARE YOU LOOKING FOR?</span>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.5rem, 3.5vw, 2.6rem)',
              fontWeight:   400,
              color:        'var(--color-brand-white)',
              lineHeight:   1.1,
              marginBottom: '1.75rem',
            }}
          >
            Tell us the direction.
          </p>

          <div className="chip-row" style={{ marginBottom: '1.25rem' }}>
            {DIRECTION_CHIPS.map((chip) => (
              <span key={chip} className="direction-chip">
                {chip}
              </span>
            ))}
          </div>

          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.82rem',
              color:         'var(--color-brand-subtle)',
              letterSpacing: '0.02em',
            }}
          >
            Text 2T the direction — we review before the quote, quote before the build.
          </p>
        </div>
      </section>

      {/* ── What to Tell Us ───────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WHAT TO TELL US</span>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.5rem, 3.5vw, 2.6rem)',
              fontWeight:   400,
              color:        'var(--color-brand-white)',
              lineHeight:   1.1,
              marginBottom: '2.5rem',
            }}
          >
            Tell us the direction. We review and quote first.
          </p>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap:                 '1.5rem',
              marginBottom:        '2rem',
            }}
          >
            {WHAT_TO_TELL.map((item) => (
              <div
                key={item.label}
                style={{
                  padding:    '1.75rem',
                  border:     '1px solid var(--color-brand-border)',
                  background: 'var(--color-brand-black)',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.68rem',
                    fontWeight:    600,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color:         'var(--color-ice-blue)',
                    marginBottom:  '0.6rem',
                    opacity:       0.85,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.875rem',
                    color:      'var(--color-brand-muted)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              padding:    '1.1rem 1.4rem',
              border:     '1px solid var(--color-brand-border)',
              background: 'rgba(208,238,255,0.03)',
              display:    'flex',
              gap:        '0.75rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-ice-blue)', fontSize: '0.85rem', flexShrink: 0, opacity: 0.7, marginTop: '1px' }}
            >
              ◆
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.82rem',
                color:      'var(--color-brand-muted)',
                lineHeight: 1.6,
              }}
            >
              Product details are confirmed per piece. Ask about current availability.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Card ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(3.5rem, 7vw, 5.5rem) 1.5rem',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            style={{
              padding:    'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
              border:     '1px solid rgba(208,238,255,0.2)',
              background: 'linear-gradient(135deg, rgba(208,238,255,0.03) 0%, rgba(208,238,255,0.01) 100%)',
              position:   'relative',
              overflow:   'hidden',
            }}
          >
            <div aria-hidden="true" style={{
              position:   'absolute',
              inset:      0,
              background: 'radial-gradient(ellipse 60% 70% at 90% 20%, rgba(208,238,255,0.05) 0%, transparent 70%)',
            }} />

            <span className="section-eyebrow" style={{ marginBottom: '0.75rem', position: 'relative' }}>
              START THE CONVERSATION
            </span>

            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(1.8rem, 4vw, 3rem)',
                fontWeight:   400,
                color:        'var(--color-brand-white)',
                lineHeight:   1.0,
                marginBottom: '0.75rem',
                position:     'relative',
              }}
            >
              Text 2T about watches.
            </p>

            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.9rem',
                color:        'var(--color-brand-muted)',
                lineHeight:   1.65,
                maxWidth:     '46ch',
                marginBottom: '2rem',
                position:     'relative',
              }}
            >
              Tell us the direction — bezel, look, budget range. We review and
              quote before anything starts. No deposit to start.
            </p>

            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', position: 'relative' }}>
              <a
                href={WA_WATCHES}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                TEXT 2T ABOUT WATCHES →
              </a>
              <Link href="/custom" className="btn-outline-gold">
                BUILD CUSTOM →
              </Link>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link
              href="/collections"
              className="nav-link-footer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', letterSpacing: '0.03em' }}
            >
              ← All Collections
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
