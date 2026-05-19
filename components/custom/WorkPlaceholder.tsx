/* PENDING ASSETS — Replace with real WorkGallery in Pass B */

export function WorkPlaceholder() {
  return (
    <section
      style={{
        background: 'var(--color-brand-charcoal)',
        borderTop:  '1px solid var(--color-brand-border)',
        padding:    'clamp(3rem, 6vw, 5rem) 1.5rem',
        textAlign:  'center',
      }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        <h2
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(1.8rem, 5vw, 3rem)',
            fontWeight:    400,
            color:         'var(--color-brand-white)',
            letterSpacing: '-0.025em',
            lineHeight:    0.95,
            marginBottom:  '1rem',
          }}
        >
          REAL PIECES.{' '}
          <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>
            REAL WORK.
          </em>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.9rem',
            color:      'var(--color-brand-muted)',
            lineHeight: 1.6,
            maxWidth:   '38ch',
            margin:     '0 auto 2rem',
          }}
        >
          Built in Pittsburgh. Every piece is custom-started from what you send.
        </p>

        {/* Gold divider */}
        <div
          aria-hidden="true"
          style={{
            width:        60,
            height:       1,
            background:   'var(--color-brand-gold)',
            margin:       '0 auto 2rem',
            opacity:      0.55,
          }}
        />

        <a
          href="https://www.instagram.com/2tjewelers"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold"
          style={{ display: 'inline-block', marginBottom: '1.75rem', fontSize: '0.8rem', letterSpacing: '0.08em' }}
        >
          SEE CUSTOM WORK ON INSTAGRAM →
        </a>

        <div
          style={{
            display:        'flex',
            flexWrap:       'wrap',
            gap:            '0.75rem',
            justifyContent: 'center',
          }}
        >
          <a
            href="#custom-form"
            className="btn-primary"
            style={{ fontSize: '0.8125rem', letterSpacing: '0.07em', padding: '0.75rem 1.5rem' }}
          >
            START MY PIECE →
          </a>
          <a
            href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20building%20a%20piece%20and%20want%20to%20chat."
            target="_blank"
            rel="noopener noreferrer"
            className="bypass-cta"
            style={{ display: 'inline-block', marginTop: '0.25rem' }}
          >
            Text 2T on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  )
}
