// components/home/PittsburghStory.tsx
//
// Midnight Icebox — Variation B stat ledger layout
// Tenure wording: "over 30 years" confirmed 2026-05-17
// Media slot: swap mi-vitrine div for <img>/<video> when store assets arrive
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
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 3vw, 2.5rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
        }}
      >
        {/* Left — vitrine placeholder for storefront photo */}
        {/* Replace this div with <img src="/assets/store/store-interior.jpg" ...> when asset arrives */}
        <div
          aria-hidden="true"
          className="mi-vitrine mi-vitrine-deep"
          style={{
            aspectRatio: '16/9',
            position: 'relative',
          }}
        />

        {/* Right — text + stat ledger */}
        <div>
          <div className="mi-eyebrow" style={{ marginBottom: '1rem' }}>
            <span className="mi-diamond-sm" aria-hidden="true" />
            BUILT IN PITTSBURGH · REAL STORE · 5TH AVE
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              marginBottom: '1.25rem',
            }}
          >
            REAL STORE.<br />
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--color-brand-gold)',
                fontFamily: 'var(--font-display)',
              }}
            >
              REAL WORK.
            </em>
          </h2>

          {/* Stat ledger — Variation B */}
          <div className="mi-stat-ledger">
            <div className="mi-stat-col">
              <p className="mi-stat-number">30+</p>
              <p className="mi-stat-label">YEARS IN THE GAME</p>
            </div>
            <div className="mi-stat-col">
              <p className="mi-stat-number">5TH</p>
              <p className="mi-stat-label">AVE · DOWNTOWN PGH</p>
            </div>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--color-brand-silver)',
              lineHeight: 1.65,
              marginBottom: '0.5rem',
            }}
          >
            Real jeweler. Real store. Text or come through.
          </p>

          <p className="mi-mono mi-faint" style={{ marginBottom: '1.75rem' }}>
            <span className="mi-diamond-sm" aria-hidden="true" />
            PRODUCT DETAILS CONFIRMED PER PIECE
          </p>

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
