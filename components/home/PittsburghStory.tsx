// components/home/PittsburghStory.tsx
//
// Pittsburgh BANG — compressed real-store proof block
// Tenure wording: "25 years" confirmed 2026-05-31
// Left slot: swap mi-vitrine div for <img>/<video> when store assets arrive
//   Asset convention: public/assets/store/store-interior.jpg or store-loop.mp4

const WHATSAPP_URL =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece.'

export default function PittsburghStory() {
  return (
    <section
      id="story"
      aria-label="About 2T Jewelers"
      style={{
        background: '#070707',
        borderTop: '1px solid var(--color-brand-border)',
        padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 3vw, 2.5rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1.75rem, 4vw, 3.5rem)',
          alignItems: 'center',
        }}
      >
        {/* Left — store identity card: swap outer div for <img> when store photo arrives
            Intentional brand card so section never reads as "missing media"        */}
        <div
          aria-hidden="true"
          className="pb-vitrine-store"
          style={{
            height: '240px',
            position: 'relative',
            border: '1px solid rgba(201,164,73,0.22)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.5rem 1.5rem 0',
          }}
        >
          {/* Corner registration marks */}
          <div style={{ position: 'absolute', top: 8, left: 8, width: 12, height: 12, borderTop: '1px solid rgba(201,164,73,0.45)', borderLeft: '1px solid rgba(201,164,73,0.45)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 8, right: 8, width: 12, height: 12, borderBottom: '1px solid rgba(201,164,73,0.45)', borderRight: '1px solid rgba(201,164,73,0.45)', pointerEvents: 'none' }} />

          {/* 2T brand identity mark */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: '0.04em',
                color: 'var(--color-brand-gold)',
                margin: 0,
              }}
            >
              2T
            </p>
            <p
              className="mi-mono"
              style={{ color: 'rgba(201,168,76,0.42)', margin: '6px 0 0', fontSize: '0.52rem', letterSpacing: '0.28em' }}
            >
              JEWELERS
            </p>
          </div>

          {/* Address footer */}
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.18)', padding: '12px 0 14px' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontWeight: 400,
                lineHeight: 1,
                color: 'var(--color-brand-white)',
                margin: '0 0 5px',
              }}
            >
              332 FIFTH AVE.
            </p>
            <p className="mi-mono mi-faint" style={{ margin: 0, fontSize: '0.55rem' }}>
              DOWNTOWN PITTSBURGH · TEXT OR WALK IN
            </p>
          </div>
        </div>

        {/* Right — About 2T */}
        <div>
          <div className="mi-eyebrow" style={{ marginBottom: '0.75rem' }}>
            <span className="mi-diamond-sm" aria-hidden="true" />
            ABOUT 2T
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 0.88,
              marginBottom: '1.25rem',
            }}
          >
            BUILT IN{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--color-brand-gold)',
                fontFamily: 'var(--font-display)',
              }}
            >
              PITTSBURGH.
            </em>
          </h2>

          {/* Approved copy block */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-brand-silver)',
              lineHeight: 1.68,
              maxWidth: '40ch',
              marginBottom: '1rem',
            }}
          >
            25 years in downtown Pittsburgh. Chains, watches, grillz, pendants, repairs, and custom pieces built to stand out.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-brand-muted)',
              lineHeight: 1.65,
              maxWidth: '40ch',
              marginBottom: '1.75rem',
            }}
          >
            Shop what&rsquo;s available or bring the idea. Text 2T before you buy or build.
          </p>

          {/* BANG. — brand signature */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span className="bang-signature bang-signature--section">BANG.</span>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.85rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem', display: 'inline-block' }}
          >
            TEXT OR COME THROUGH →
          </a>
        </div>
      </div>
    </section>
  )
}
