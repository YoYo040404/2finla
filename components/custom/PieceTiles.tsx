const PIECES = [
  { name: 'Name Piece',       desc: 'Custom lettering, any name or word' },
  { name: 'Logo Piece',       desc: 'Your logo or design, iced or plain' },
  { name: 'Photo Pendant',    desc: 'Photo-based custom pendant' },
  { name: 'Number Piece',     desc: 'Jersey numbers, dates, area codes' },
  { name: 'Iced-Out Pendant', desc: 'Custom silhouette, fully iced' },
  { name: 'Custom Chain',     desc: 'Length, width, link style, material' },
]

export function PieceTiles() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderTop:       '1px solid var(--color-brand-border)',
        paddingTop:      '2rem',
        paddingBottom:   '2rem',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem' }}>
        <p
          style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.65rem',
            fontWeight:    700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         'var(--color-brand-gold)',
            marginBottom:  '0.875rem',
          }}
        >
          Need inspiration? Select a piece type.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {PIECES.map((piece) => (
            <a key={piece.name} href="#custom-form" className="piece-chip">
              {piece.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
