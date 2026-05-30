import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       '2T Jewelers | Custom Pendants — Logo, Photo & Name — Pittsburgh, PA',
  description: 'Custom pendants from your logo, photo, name, or idea. Pittsburgh jeweler. Over 30 years. Send the idea — we quote before the build.',
}

const WA_PENDANTS = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20for%20a%20pendant.%20I%20have%20a%20logo%2C%20photo%2C%20or%20name%20idea.%20Gold%20or%20silver%2C%20diamond%20or%20moissanite%20if%20iced.'

const STYLE_CHIPS = [
  'Logo',
  'Photo',
  'Name',
  'Number',
  'Cross',
  'Iced-Out',
  'Custom Shape',
  'Symbol',
  'Pendant + Chain',
  'Not Sure Yet',
]

const WHAT_TO_SEND = [
  {
    label: 'THE IDEA',
    body: 'Logo, photo, name, number, sketch, or a reference you like. We work from whatever you have.',
  },
  {
    label: 'THE LOOK',
    body: 'Iced-out, clean, gold or silver — tell us the finish direction. Diamond or moissanite if iced. Details confirmed per piece.',
  },
  {
    label: 'THE CHAIN',
    body: 'Cuban, rope, tennis, or something else? The pendant and chain should work together.',
  },
]

export default function PendantsPage() {
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
        {/* Gold ambient glow */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 60% 60% at 8% 50%, rgba(201,168,76,0.09) 0%, transparent 72%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <span className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>PENDANTS</span>

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
            PENDANTS THAT<br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>HIT DIFFERENT.</em>
          </h1>

          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.05rem, 2.2vw, 1.45rem)',
              fontStyle:    'italic',
              color:        'var(--color-brand-gold-light)',
              marginBottom: '1.25rem',
              lineHeight:   1.25,
              maxWidth:     '540px',
            }}
          >
            Logo, photo, name, number, cross, iced-out, custom shape.
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
            The pendant is the statement. Send the logo, the photo, the name, or the idea —
            we build the direction before any quote or production. Pairs with custom chains.
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
              href={WA_PENDANTS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              TEXT 2T ABOUT PENDANTS →
            </a>
            <Link href="/custom" className="btn-outline-gold">
              BUILD CUSTOM →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Style / Type Chips ────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WHAT ARE YOU GOING FOR?</span>
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
            Pick the pendant type.
          </p>

          <div className="chip-row" style={{ marginBottom: '1.25rem' }}>
            {STYLE_CHIPS.map((chip) => (
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
            Text 2T the type — we guide the size, finish, and chain pairing from there.
          </p>
        </div>
      </section>

      {/* ── Material Direction ──────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>MATERIAL DIRECTION</span>
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
            Gold or silver. Diamond or moissanite.
          </p>

          <div style={{ marginBottom: '1.25rem' }}>
            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.65rem',
                fontWeight:    600,
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-gold)',
                marginBottom:  '0.6rem',
                opacity:       0.85,
              }}
            >
              METAL
            </p>
            <div className="chip-row">
              {['Gold', 'Silver', 'Not Sure Yet'].map((chip) => (
                <span key={chip} className="direction-chip">{chip}</span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.65rem',
                fontWeight:    600,
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-gold)',
                marginBottom:  '0.6rem',
                opacity:       0.85,
              }}
            >
              STONE
            </p>
            <div className="chip-row">
              {['Diamond', 'Moissanite', 'No Stones', 'Not Sure Yet'].map((chip) => (
                <span key={chip} className="direction-chip">{chip}</span>
              ))}
            </div>
          </div>

          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.82rem',
              color:         'var(--color-brand-subtle)',
              letterSpacing: '0.02em',
            }}
          >
            Different shine. Different direction. Details confirmed per piece.
          </p>
        </div>
      </section>

      {/* ── What to Send ─────────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WHAT TO SEND US</span>
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
            Start with what you have.
          </p>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap:                 '1.5rem',
              marginBottom:        '2rem',
            }}
          >
            {WHAT_TO_SEND.map((card) => (
              <div
                key={card.label}
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
                    color:         'var(--color-brand-gold)',
                    marginBottom:  '0.6rem',
                    opacity:       0.85,
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.875rem',
                    color:      'var(--color-brand-muted)',
                    lineHeight: 1.65,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              padding:    '1.1rem 1.4rem',
              border:     '1px solid var(--color-brand-border)',
              background: 'rgba(201,168,76,0.03)',
              display:    'flex',
              gap:        '0.75rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              aria-hidden="true"
              style={{ color: 'var(--color-brand-gold)', fontSize: '0.85rem', flexShrink: 0, opacity: 0.7, marginTop: '1px' }}
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
              Product details are confirmed per piece. Ask about current availability,
              material direction, and finish options before committing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Promo-Ready Module ────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>SPECIAL OF THE WEEK</span>

          <div
            style={{
              padding:    'clamp(1.5rem, 4vw, 2.5rem)',
              border:     '1px solid rgba(201,168,76,0.18)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.01) 100%)',
              position:   'relative',
              overflow:   'hidden',
            }}
          >
            <div aria-hidden="true" style={{
              position:   'absolute',
              inset:      0,
              background: 'radial-gradient(ellipse 50% 60% at 90% 20%, rgba(201,168,76,0.05) 0%, transparent 70%)',
            }} />

            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight:   400,
                color:        'var(--color-brand-white)',
                lineHeight:   1.1,
                marginBottom: '0.75rem',
                position:     'relative',
              }}
            >
              Ask what pendant specials are running now.
            </p>

            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.875rem',
                color:        'var(--color-brand-muted)',
                lineHeight:   1.65,
                maxWidth:     '46ch',
                marginBottom: '1.5rem',
                position:     'relative',
              }}
            >
              Featured pendant deals, weekly highlights, and current offers are confirmed
              per availability. Text 2T to ask what&apos;s running now.
            </p>

            <a
              href={WA_PENDANTS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ position: 'relative' }}
            >
              ASK ABOUT CURRENT OFFERS →
            </a>
          </div>
        </div>
      </section>

      {/* ── Custom Build Bridge ───────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display:    'flex',
              gap:        '2.5rem',
              alignItems: 'flex-start',
              flexWrap:   'wrap',
            }}
          >
            <div style={{ flex: '1 1 300px' }}>
              <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>SEND THE IDEA. WE BUILD IT.</span>
              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(1.5rem, 3.5vw, 2.4rem)',
                  fontWeight:   400,
                  color:        'var(--color-brand-white)',
                  lineHeight:   1.1,
                  marginBottom: '1rem',
                }}
              >
                Bring the logo. Bring the photo. Bring the name.<br />We&apos;ll help build the piece.
              </p>
              <p
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '0.9rem',
                  color:        'var(--color-brand-muted)',
                  lineHeight:   1.7,
                  marginBottom: '1.5rem',
                  maxWidth:     '44ch',
                }}
              >
                Send the logo, the photo, the name, the number, the sketch, or a reference.
                We&apos;ll review the direction before quote or production. No deposit to start.
              </p>
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <Link href="/custom" className="btn-primary">
                  START THE PIECE →
                </Link>
                <a
                  href={WA_PENDANTS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                >
                  TEXT US FIRST →
                </a>
              </div>
            </div>

            {/* Pendant visual — iced diamond shape with chain bail */}
            <div
              aria-hidden="true"
              style={{
                flex:           '0 0 auto',
                width:          '140px',
                height:         '140px',
                border:         '1px solid var(--color-brand-border)',
                background:     'var(--color-brand-charcoal)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
              }}
            >
              <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
                {/* Bail / chain loop */}
                <ellipse cx="40" cy="14" rx="8" ry="5" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5"/>
                <line x1="40" y1="19" x2="40" y2="28" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Pendant outer diamond shape */}
                <path d="M40 30 L65 50 L40 80 L15 50 Z" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
                {/* Inner facet lines */}
                <path d="M40 30 L65 50" stroke="rgba(208,238,255,0.18)" strokeWidth="0.75"/>
                <path d="M40 30 L15 50" stroke="rgba(208,238,255,0.18)" strokeWidth="0.75"/>
                <line x1="15" y1="50" x2="65" y2="50" stroke="rgba(208,238,255,0.2)" strokeWidth="0.75"/>
                {/* Center sparkle */}
                <circle cx="40" cy="55" r="4" fill="rgba(208,238,255,0.6)"/>
                <circle cx="40" cy="55" r="1.5" fill="rgba(255,255,255,0.8)"/>
              </svg>
            </div>
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
              border:     '1px solid rgba(201,168,76,0.3)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.01) 100%)',
              position:   'relative',
              overflow:   'hidden',
            }}
          >
            <div aria-hidden="true" style={{
              position:   'absolute',
              inset:      0,
              background: 'radial-gradient(ellipse 60% 70% at 90% 20%, rgba(201,168,76,0.06) 0%, transparent 70%)',
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
              Text 2T about pendants.
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
              Send the logo, the photo, the name, or the idea. We review the direction and
              quote before anything starts. No deposit to start.
            </p>

            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', position: 'relative' }}>
              <a
                href={WA_PENDANTS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                TEXT 2T ABOUT PENDANTS →
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
