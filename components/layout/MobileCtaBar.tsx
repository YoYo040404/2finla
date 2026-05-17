/* Mobile sticky CTA bar — upgraded to prominent primary action layout */

export function MobileCtaBar() {
  return (
    <div
      role="navigation"
      aria-label="Quick actions"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderTop:       '1px solid var(--color-brand-border)',
      }}
    >
      {/* Gold top accent line */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          top:        0,
          left:       0,
          right:      0,
          height:     '1px',
          background: 'linear-gradient(90deg, transparent 0%, var(--color-brand-gold-dim) 20%, var(--color-brand-gold) 50%, var(--color-brand-gold-dim) 80%, transparent 100%)',
        }}
      />

      <div
        style={{
          display:    'grid',
          gridTemplateColumns: 'auto auto 1fr',
          height:     '56px',
          alignItems: 'stretch',
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece."
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-[3px] active:opacity-60 transition-opacity duration-100"
          style={{ color: 'var(--color-brand-muted)', padding: '0 1.125rem', borderRight: '1px solid var(--color-brand-border)' }}
        >
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
            <path d="M9.5 1.5C5.358 1.5 2 4.858 2 9c0 1.8.626 3.455 1.67 4.758L2.5 17.5l3.87-1.24A7.454 7.454 0 0 0 9.5 17c4.142 0 7.5-3.358 7.5-7.5S13.642 1.5 9.5 1.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 7.25c.12-.5.75-1.5 2-1 .75.3.875 1 .75 1.5L9 9c-.125.5.5 1.5 1.5 2.25 1 .75 1.625.625 2.125.25.375-.28.5-.875.375-1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.53rem', fontWeight: 500, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
            Text
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+14122817072"
          aria-label="Call us"
          className="flex flex-col items-center justify-center gap-[3px] active:opacity-60 transition-opacity duration-100"
          style={{ color: 'var(--color-brand-muted)', padding: '0 1.125rem', borderRight: '1px solid var(--color-brand-border)' }}
        >
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
            <path d="M4 4h3.25L8.75 8l-2 1.375a9.25 9.25 0 0 0 3.875 3.875L12 11.25 16 12.75v3.25C16 17.1 15.1 18 14 18A15.5 15.5 0 0 1 1 5c0-1.1.9-2 2-2h1Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.53rem', fontWeight: 500, letterSpacing: '0.09em', textTransform: 'uppercase' }}>
            Call
          </span>
        </a>

        {/* Primary CTA — full remaining width */}
        <a
          href="/custom"
          aria-label="Start the piece"
          className="flex items-center justify-center active:opacity-80 transition-opacity duration-100"
          style={{
            backgroundColor: 'var(--color-brand-gold)',
            color:           'var(--color-brand-black)',
            fontFamily:      'var(--font-body)',
            fontWeight:      600,
            fontSize:        '0.78rem',
            letterSpacing:   '0.07em',
            textTransform:   'uppercase',
            gap:             '0.4rem',
          }}
        >
          Start the Piece
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M7.5 3l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* iPhone home indicator clearance */}
      <div
        style={{
          height:          'env(safe-area-inset-bottom, 0px)',
          backgroundColor: 'var(--color-brand-charcoal)',
        }}
      />
    </div>
  )
}
