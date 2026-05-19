
const SPARKLES: { top: string; left: string; delay: string; size: number; ice: boolean }[] = [
  { top: '13%', left: '66%', delay: '0s',    size: 3, ice: true  },
  { top: '27%', left: '80%', delay: '0.75s', size: 2, ice: false },
  { top: '53%', left: '73%', delay: '1.45s', size: 4, ice: true  },
  { top: '19%', left: '57%', delay: '2.15s', size: 2, ice: false },
  { top: '70%', left: '87%', delay: '0.35s', size: 3, ice: true  },
  { top: '41%', left: '92%', delay: '1.85s', size: 2, ice: false },
  { top: '8%',  left: '77%', delay: '2.65s', size: 3, ice: true  },
  { top: '83%', left: '61%', delay: '1.15s', size: 2, ice: false },
  { top: '46%', left: '62%', delay: '3.25s', size: 4, ice: true  },
  { top: '35%', left: '85%', delay: '0.55s', size: 2, ice: false },
]

export function CustomHero() {
  return (
    <section
      style={{
        position:   'relative',
        minHeight:  'clamp(240px, 38vh, 320px)',
        display:    'flex',
        alignItems: 'flex-end',
        overflow:   'hidden',
        background: '#040302',
      }}
      aria-label="Custom Jewelry"
    >
      {/* ── Diamond grid — right panel (animated drift) ──────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          top:             0,
          right:           0,
          width:           '62%',
          height:          '100%',
          backgroundImage: [
            'repeating-linear-gradient(45deg,  rgba(201,168,76,0.065) 0px, transparent 1px, transparent 20px)',
            'repeating-linear-gradient(-45deg, rgba(201,168,76,0.065) 0px, transparent 1px, transparent 20px)',
          ].join(','),
          backgroundSize:   '28px 28px',
          maskImage:        'radial-gradient(ellipse 88% 98% at 82% 52%, black 0%, transparent 80%)',
          WebkitMaskImage:  'radial-gradient(ellipse 88% 98% at 82% 52%, black 0%, transparent 80%)',
          pointerEvents:    'none',
          animation:        'chain-drift 9s linear infinite',
        }}
      />

      {/* ── Gold atmospheric radial — bottom-left, pulsing ───────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 85% 65% at 8% 100%, rgba(201,168,76,0.38) 0%, rgba(201,168,76,0.11) 35%, transparent 62%)',
          pointerEvents: 'none',
          animation:     'pulse-glow 5s ease-in-out infinite',
        }}
      />

      {/* ── Secondary gold glow — upper center-right ─────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:           0,
          background:      'radial-gradient(ellipse 45% 35% at 76% 16%, rgba(201,168,76,0.13) 0%, transparent 70%)',
          pointerEvents:   'none',
          animation:       'pulse-glow 7s ease-in-out infinite',
          animationDelay:  '2.5s',
        }}
      />

      {/* ── Ice-blue ambient — upper right ───────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 42% 34% at 97% 4%, rgba(208,238,255,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Diagonal sweep ray 1 — gold, slow ────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:       'absolute',
          top:            '-25%',
          left:           '-25%',
          width:          '48%',
          height:         '200%',
          background:     'linear-gradient(108deg, transparent 40%, rgba(201,168,76,0.075) 50%, transparent 60%)',
          pointerEvents:  'none',
          animation:      'hero-sweep 7.5s ease-in-out infinite',
          animationDelay: '0.5s',
        }}
      />

      {/* ── Diagonal sweep ray 2 — ice-blue, faster ──────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:       'absolute',
          top:            '-40%',
          left:           '5%',
          width:          '32%',
          height:         '220%',
          background:     'linear-gradient(115deg, transparent 40%, rgba(208,238,255,0.042) 50%, transparent 62%)',
          pointerEvents:  'none',
          animation:      'hero-sweep 4.8s ease-in-out infinite',
          animationDelay: '2.5s',
        }}
      />

      {/* ── Grain noise ──────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize:   '180px 180px',
          opacity:          0.048,
          mixBlendMode:     'overlay' as const,
          pointerEvents:    'none',
        }}
      />

      {/* ── Ice sparkle hits ─────────────────────────────────────────────── */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position:        'absolute',
            top:             s.top,
            left:            s.left,
            width:           `${s.size}px`,
            height:          `${s.size}px`,
            borderRadius:    '50%',
            backgroundColor: s.ice ? 'rgba(208,238,255,0.92)' : 'rgba(255,248,220,0.88)',
            boxShadow:       s.ice
              ? `0 0 ${s.size * 4}px ${s.size + 1}px rgba(208,238,255,0.46)`
              : `0 0 ${s.size * 4}px ${s.size + 1}px rgba(201,168,76,0.42)`,
            animation:       'sparkle-hit 3.8s ease-in-out infinite',
            animationDelay:  s.delay,
            pointerEvents:   'none',
          }}
        />
      ))}

      {/* ── Bottom vignette ──────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          bottom:        0,
          left:          0,
          right:         0,
          height:        '200px',
          background:    'linear-gradient(to top, #040302 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div
        style={{
          position:      'relative',
          zIndex:        10,
          maxWidth:      '1440px',
          margin:        '0 auto',
          width:         '100%',
          padding:       '0 1.5rem',
          paddingBottom: 'clamp(2rem, 5vw, 3.5rem)',
        }}
      >
        <div style={{ maxWidth: '620px' }}>
          <p
            className="reveal section-eyebrow"
            style={{ marginBottom: '1.25rem' }}
          >
            CUSTOM BUILD
          </p>

          <h1
            className="reveal reveal-d1"
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(3.2rem, 9vw, 6.5rem)',
              fontWeight:    400,
              lineHeight:    0.88,
              color:         'var(--color-brand-white)',
              letterSpacing: '-0.035em',
            }}
          >
            YOUR LOGO.
            <br />
            YOUR NAME.
            <br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>
              YOUR PIECE.
            </em>
          </h1>

          <p
            className="reveal reveal-d2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.9375rem',
              color:      'var(--color-brand-muted)',
              lineHeight: 1.65,
              marginTop:  '1.25rem',
              maxWidth:   '44ch',
            }}
          >
            Send the logo, photo, sketch, name, number, or rough idea. We&apos;ll review the direction before quote or production.
          </p>

          <div
            className="reveal reveal-d3"
            style={{ marginTop: '2.25rem' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <a
                href="#custom-form"
                className="btn-primary"
                style={{ padding: '0.9rem 1.875rem', fontSize: '0.875rem', letterSpacing: '0.07em' }}
              >
                START MY PIECE →
              </a>
              <a
                href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20building%20a%20piece%20and%20want%20to%20chat."
                target="_blank"
                rel="noopener noreferrer"
                className="custom-hero-wa"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                TEXT US ON WHATSAPP →
              </a>
            </div>
            <p className="permission-strip" aria-hidden="true">
              Logo&nbsp;·&nbsp;Photo&nbsp;·&nbsp;Name&nbsp;·&nbsp;Number&nbsp;·&nbsp;Sketch&nbsp;·&nbsp;Reference
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
