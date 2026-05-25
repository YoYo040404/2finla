const FAQS = [
  {
    q: 'What can I send?',
    a: "Anything works — a logo file, photo, sketch, name, number, or a written description of what you want built. Upload it directly in the form. We'll review the design and advise on how it translates to the piece type you're requesting. A rough idea is enough to start.",
  },
  {
    q: 'What materials do you work with?',
    a: '925 Silver, Gold-Plated, Vermeil, 10K and 14K Gold, Moissanite, Lab Diamond, and CZ. Stone and material details are confirmed per piece. Ask 2T for details on the specific build.',
  },
  {
    q: 'What happens after I send the idea?',
    a: "We review the request and come back with the piece direction — available options, material directions, and any questions before anything is quoted or moved to production. We confirm the direction with you before production.",
  },
  {
    q: 'How does the quote step work?',
    a: 'Send the idea first. We review the direction, ask any needed questions, and quote before production.',
  },
]

export function CustomFaq() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderTop:       '1px solid var(--color-brand-border)',
        paddingTop:      'clamp(3rem, 7vw, 5rem)',
        paddingBottom:   'clamp(3rem, 7vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem' }}>
        <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          FAQ
        </span>
        <h2
          style={{
            fontFamily:   'var(--font-display)',
            fontSize:     'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight:   400,
            color:        'var(--color-brand-white)',
            lineHeight:   1.08,
            marginBottom: '2.5rem',
            marginTop:    '0.5rem',
          }}
        >
          QUESTIONS BEFORE YOU BUILD
        </h2>

        <div style={{ maxWidth: '720px' }}>
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              style={{ borderBottom: '1px solid var(--color-brand-border)' }}
            >
              <summary
                style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  alignItems:     'center',
                  padding:        '1.1rem 0',
                  cursor:         'pointer',
                  fontFamily:     'var(--font-body)',
                  fontSize:       '0.9375rem',
                  fontWeight:     500,
                  color:          'var(--color-brand-white)',
                  userSelect:     'none',
                }}
              >
                {faq.q}
                <span className="faq-toggle" aria-hidden="true" style={{ flexShrink: 0, marginLeft: '1rem' }} />
              </summary>
              <p
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.875rem',
                  color:         'var(--color-brand-muted)',
                  lineHeight:    1.65,
                  paddingBottom: '1.1rem',
                  paddingRight:  '2rem',
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}

          <div style={{ marginTop: '2.5rem' }}>
            <a
              href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20building%20a%20piece%20and%20want%20to%20chat."
              target="_blank"
              rel="noopener noreferrer"
              className="bypass-cta"
              style={{ display: 'inline-block' }}
            >
              Not ready yet? Text us first. →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
