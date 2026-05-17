const STEPS = [
  {
    num:   '01',
    title: 'Send the idea',
    copy:  'Upload a sketch, photo, logo, or describe the piece. A rough idea is enough.',
  },
  {
    num:   '02',
    title: 'We review the direction',
    copy:  'Material, stone, width, budget — we map options from what you send.',
  },
  {
    num:   '03',
    title: 'We quote first',
    copy:  'We review and follow up before anything moves to production.',
  },
]

export function HowItWorks() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-brand-black)',
        borderTop:       '1px solid var(--color-brand-border)',
        borderBottom:    '1px solid var(--color-brand-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin:   '0 auto',
          padding:  '2rem 1.5rem',
          display:  'grid',
          gap:      '1.5rem',
        }}
        className="md:grid-cols-3"
      >
        {STEPS.map((step) => (
          <div
            key={step.num}
            style={{
              display:    'flex',
              alignItems: 'flex-start',
              gap:        '1rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize:   '1.6rem',
                fontWeight: 400,
                color:      'var(--color-brand-gold)',
                lineHeight: 1,
                opacity:    0.6,
                flexShrink: 0,
                paddingTop: '2px',
              }}
            >
              {step.num}
            </span>
            <div>
              <p
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.78rem',
                  fontWeight:    600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color:         'var(--color-brand-white)',
                  marginBottom:  '0.2rem',
                }}
              >
                {step.title}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.78rem',
                  color:      'var(--color-brand-muted)',
                  lineHeight: 1.55,
                }}
              >
                {step.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
