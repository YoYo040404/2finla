const IDEAS = [
  { label: 'Logo',            dot: '◆' },
  { label: 'Sketch',          dot: '◆' },
  { label: 'Photo',           dot: '◆' },
  { label: 'Name / Number',   dot: '◆' },
  { label: 'Reference Image', dot: '◆' },
  { label: 'Not Sure Yet',    dot: '◈' },
]

export function IdeaTypeStrip() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderTop:       '1px solid var(--color-brand-border)',
        borderBottom:    '1px solid var(--color-brand-border)',
      }}
    >
      <div
        style={{
          maxWidth:  '1440px',
          margin:    '0 auto',
          padding:   '1rem 1.5rem',
          display:   'flex',
          alignItems: 'center',
          gap:       '1rem',
          flexWrap:  'wrap',
        }}
      >
        <p
          style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.62rem',
            fontWeight:    700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         'var(--color-brand-gold)',
            whiteSpace:    'nowrap',
            flexShrink:    0,
          }}
        >
          Start with:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {IDEAS.map((idea) => (
            <a key={idea.label} href="#custom-form" className="idea-chip">
              <span
                aria-hidden="true"
                style={{ color: 'var(--color-brand-gold)', fontSize: '0.5rem', lineHeight: 1 }}
              >
                {idea.dot}
              </span>
              {idea.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
