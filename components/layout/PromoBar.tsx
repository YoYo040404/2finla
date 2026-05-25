// Swap promo copy here when a new promotion runs — two lines to change.
// Desktop: full promotional sentence. Mobile: compressed to one short line.

export function PromoBar() {
  return (
    <div
      role="banner"
      aria-label="Store promotion"
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderBottom:    '1px solid rgba(201,168,76,0.25)',
        height:          '38px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        overflow:        'hidden',
        padding:         '0 1rem',
      }}
    >
      <p
        style={{
          fontFamily:    'var(--font-body)',
          fontSize:      '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight:    600,
          color:         'var(--color-brand-gold)',
          userSelect:    'none',
          margin:        0,
          whiteSpace:    'nowrap',
          overflow:      'hidden',
          textOverflow:  'ellipsis',
        }}
      >
        <span style={{ color: 'var(--color-brand-gold)', marginRight: '0.6em' }}>◆</span>
        {/* Desktop copy — hidden on narrow viewports via CSS */}
        <span className="promo-bar-full">20% OFF YOUR FIRST CUSTOM ORDER &nbsp;◆&nbsp; START YOUR PIECE TODAY</span>
        {/* Mobile copy — shown only on narrow viewports via CSS */}
        <span className="promo-bar-short">20% OFF FIRST CUSTOM ORDER</span>
        <span style={{ color: 'var(--color-brand-gold)', marginLeft: '0.6em' }}>◆</span>
      </p>
    </div>
  )
}
