import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:       '2T Jewelers | Custom Grillz — Pittsburgh, PA',
  description: 'Custom gold and iced grillz in Pittsburgh, PA. Top, bottom, or full set. Ask 2T first — no deposit to start. 25 years.',
}

const WA_GRILLZ = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20grillz.'

const STYLE_CHIPS = [
  'Top Only',
  'Bottom Only',
  'Full Set',
  'Diamond Set',
  'Gold Direction',
  'Not Sure Yet',
]

const HOW_IT_WORKS = [
  {
    num: '01',
    label: 'TEXT THE DIRECTION',
    body: 'Tell us top, bottom, or full set. Gold or iced. Send any reference you have.',
  },
  {
    num: '02',
    label: 'WE REVIEW',
    body: '2T looks at the style and material direction. No deposit at this stage.',
  },
  {
    num: '03',
    label: 'WE QUOTE FIRST',
    body: 'You get the direction and price before anything starts. Ask before you buy.',
  },
]

export default function GrillzPage() {
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
          <span className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>GRILLZ</span>

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
            GRILLZ{' '}<br />
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
              maxWidth:     '520px',
            }}
          >
            Top. Bottom. Full set. Diamond or gold direction.
          </p>

          <p
            style={{
              fontFamily:  'var(--font-body)',
              fontSize:    'clamp(0.9rem, 1.5vw, 1rem)',
              color:       'var(--color-brand-muted)',
              lineHeight:  1.7,
              maxWidth:    '520px',
              marginBottom: '2rem',
            }}
          >
            Send what you want — the set, the look, the material direction.
            2T reviews the style before quote or production.
            No deposit. We quote first.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <a
              href={WA_GRILLZ}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              TEXT 2T ABOUT GRILLZ →
            </a>
            <Link href="/custom" className="btn-outline-gold">
              BUILD CUSTOM →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Style Direction Chips ─────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>PICK YOUR DIRECTION</span>
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
            What set are you looking for?
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
            Tell us top, bottom, or full set when you text. We review and quote before anything starts.
          </p>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>HOW IT WORKS</span>
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
            Real jeweler. Real grillz. Text first.
          </p>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap:                 '1.5rem',
            }}
          >
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.num}
                style={{
                  padding:    '1.75rem',
                  border:     '1px solid var(--color-brand-border)',
                  background: 'var(--color-brand-black)',
                  position:   'relative',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.62rem',
                    fontWeight:    600,
                    letterSpacing: '0.18em',
                    color:         'var(--color-brand-gold)',
                    marginBottom:  '0.6rem',
                  }}
                >
                  {step.num}
                </p>
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.72rem',
                    fontWeight:    600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         'var(--color-brand-white)',
                    marginBottom:  '0.75rem',
                  }}
                >
                  {step.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.875rem',
                    color:      'var(--color-brand-muted)',
                    lineHeight: 1.65,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pittsburgh Trust ──────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(2.5rem, 5vw, 3.5rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div
          style={{
            maxWidth:     '1100px',
            margin:       '0 auto',
            display:      'flex',
            alignItems:   'center',
            gap:          '1.5rem',
            flexWrap:     'wrap',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width:            '3px',
              height:           '52px',
              background:       'var(--color-brand-gold)',
              flexShrink:       0,
              opacity:          0.6,
            }}
          />
          <div>
            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.65rem',
                fontWeight:    600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-gold)',
                marginBottom:  '0.35rem',
              }}
            >
              DOWNTOWN PITTSBURGH
            </p>
            <p
              style={{
                fontFamily:  'var(--font-body)',
                fontSize:    'clamp(0.9rem, 1.8vw, 1.05rem)',
                color:       'var(--color-brand-white)',
                lineHeight:  1.5,
                fontWeight:  500,
              }}
            >
              Text first or walk in. 332 Fifth Ave, Pittsburgh, PA 15222.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.82rem',
                color:      'var(--color-brand-muted)',
                marginTop:  '0.25rem',
              }}
            >
              25 years. Real jeweler. Text first or walk in.
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
              Text 2T about grillz.
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
              Tell us the set and direction. We review and quote before anything starts.
              No deposit to start.
            </p>

            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', position: 'relative' }}>
              <a
                href={WA_GRILLZ}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                TEXT 2T ABOUT GRILLZ →
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
