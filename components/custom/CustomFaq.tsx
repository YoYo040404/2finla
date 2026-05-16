const FAQS = [
  {
    q: 'What do I need to start?',
    a: "A description is enough. A sketch, photo, logo, or reference image helps — but it's not required.",
  },
  {
    q: 'What materials can you work with?',
    a: '925 Silver, Gold-Plated, Vermeil, 10K and 14K Gold, Moissanite, Lab Diamond, CZ, and natural diamond on verified pieces. Ask about what fits your budget.',
  },
  {
    q: 'What happens after I submit?',
    a: "We review the request and follow up with next-step information — available directions, material options, or questions we need answered before any quote or production decision.",
  },
  {
    q: 'Can I upload my own logo or artwork?',
    a: "Yes. Upload it in the form. We'll review and advise on how the design translates to the piece type you're requesting.",
  },
  {
    q: "What if I don't know the material or budget?",
    a: 'Select "Not Sure" — it helps to know, but it\'s not required to start the conversation.',
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
          Common questions
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
        </div>
      </div>
    </section>
  )
}
