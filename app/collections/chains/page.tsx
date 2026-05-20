import Link from 'next/link'

const WA_CHAINS = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20for%20a%20chain.%20I%20have%20a%20style%20and%20direction%20in%20mind.'

const STYLE_CHIPS = [
  'Cuban',
  'Rope',
  'Tennis',
  'Franco',
  'Figaro',
  'Iced-Out',
  'Yellow Gold',
  'White Gold',
  'Rose Gold',
  'Not Sure Yet',
]

const DIRECTION_CARDS = [
  {
    label: 'STYLE',
    body: 'Cuban, rope, tennis, Franco, Figaro — or iced-out. Tell us what\'s catching your eye.',
  },
  {
    label: 'WEIGHT + WIDTH',
    body: 'Heavier and thicker for a statement piece. Lighter and thinner for everyday layering.',
  },
  {
    label: 'PENDANT PAIRING',
    body: 'Already have a pendant in mind? The chain should complement the weight and look of the piece.',
  },
]

export default function ChainsPage() {
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
          <span className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>CHAINS</span>

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
            CHAINS<br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>BUILT TO HIT.</em>
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
            Cuban, rope, tennis, Franco, Figaro, iced-out.
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
            The foundation of every neck. Tell us the style and direction — we guide
            the conversation before quote or production. Pairs with custom pendants.
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
              href={WA_CHAINS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              TEXT 2T ABOUT CHAINS →
            </a>
            <Link href="/custom" className="btn-outline-gold">
              BUILD CUSTOM →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Style Chips ───────────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>PICK YOUR STYLE</span>
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
            What chain are you going for?
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
            Text 2T the style — we guide width, length, and finish from there.
          </p>
        </div>
      </section>

      {/* ── Pick the Direction ────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>PICK THE DIRECTION</span>
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
            Tell us what you&apos;re after.
          </p>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap:                 '1.5rem',
              marginBottom:        '2rem',
            }}
          >
            {DIRECTION_CARDS.map((card) => (
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
              material direction, and width options before committing.
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
              Chain deals come through. Ask what&apos;s available.
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
              Special chain offers, featured pieces, and weekly highlights are confirmed
              per availability. Text 2T to ask what&apos;s running now.
            </p>

            <a
              href={WA_CHAINS}
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

      {/* ── Custom Pairing Bridge ─────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
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
              <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>BUILD THE FULL PIECE</span>
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
                Start with the chain.<br />Build the piece around it.
              </p>
              <p
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '0.9rem',
                  color:        'var(--color-brand-muted)',
                  lineHeight:   1.7,
                  marginBottom: '1.5rem',
                  maxWidth:     '42ch',
                }}
              >
                Got a logo, photo, name, or idea for a pendant? Start the chain direction
                first. We can build the full look — chain and custom piece — together.
              </p>
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <Link href="/custom" className="btn-primary">
                  START THE PIECE →
                </Link>
                <a
                  href={WA_CHAINS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                >
                  TEXT US FIRST →
                </a>
              </div>
            </div>

            {/* Chain + pendant visual */}
            <div
              aria-hidden="true"
              style={{
                flex:            '0 0 auto',
                width:           '140px',
                height:          '140px',
                border:          '1px solid var(--color-brand-border)',
                background:      'var(--color-brand-black)',
                display:         'flex',
                alignItems:      'center',
                justifyContent:  'center',
              }}
            >
              <svg width="90" height="100" viewBox="0 0 90 100" fill="none">
                {/* Chain links */}
                <ellipse cx="30" cy="22" rx="14" ry="8" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
                <ellipse cx="60" cy="30" rx="14" ry="8" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
                <line x1="43" y1="26" x2="47" y2="26" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Pendant bail */}
                <rect x="41" y="32" width="8" height="10" rx="4" stroke="rgba(208,238,255,0.5)" strokeWidth="1.25"/>
                {/* Pendant diamond shape */}
                <path d="M20 55 L45 38 L70 55 L45 80 Z" stroke="rgba(208,238,255,0.6)" strokeWidth="1.5"/>
                <circle cx="45" cy="57" r="5" fill="rgba(208,238,255,0.65)"/>
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
              Text 2T about chains.
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
              Tell us the style and direction. We review and quote before anything starts.
              No deposit to start.
            </p>

            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', position: 'relative' }}>
              <a
                href={WA_CHAINS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                TEXT 2T ABOUT CHAINS →
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
