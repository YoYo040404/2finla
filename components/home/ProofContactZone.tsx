// components/home/ProofContactZone.tsx
//
// Pittsburgh proof ledger — store, tenure, address.
// Left: stat-dominant (25 YEARS / 332 FIFTH AVE. / DOWNTOWN PITTSBURGH).
// Right: PITTSBURGH JEWELER. headline + body + BANG. signature.
// Social channels handled exclusively by SocialTeaser to avoid duplication.
// Tenure wording: "25 years" confirmed 2026-05-31.

import ProofCounterTrigger from '@/components/home/ProofCounterTrigger'

export default function ProofContactZone() {
  return (
    <section
      id="story"
      aria-label="About 2T Jewelers — Pittsburgh jeweler, 25 years"
      className="pb-proof-zone section-reveal"
    >
      <ProofCounterTrigger />
      <div className="pb-proof-inner">

        {/* ── Left: stat-dominant proof ledger ─────────────────────── */}
        <div className="pb-proof-left">
          <div style={{
            paddingLeft: '1.5rem',
            borderLeft: '1px solid rgba(201,164,73,0.28)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}>
            {/* 25 YEARS — large, dominant; span animated by ProofCounterTrigger */}
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 8vw, 6rem)',
                fontWeight: 400,
                lineHeight: 0.86,
                color: 'var(--color-brand-white)',
                margin: 0,
                letterSpacing: '0.01em',
              }}>
                <span className="stat-counter" data-target="25">25</span>
              </p>
              <p className="mi-mono mi-faint" style={{ margin: '6px 0 0', fontSize: '0.6rem', letterSpacing: '0.18em' }}>
                YEARS
              </p>
            </div>

            {/* 332 FIFTH AVE. — gold, address weight */}
            <div style={{ borderTop: '1px solid rgba(201,164,73,0.16)', paddingTop: '1.25rem' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight: 400,
                lineHeight: 0.92,
                color: 'var(--color-brand-gold)',
                margin: '0 0 5px',
                letterSpacing: '0.025em',
              }}>
                332 FIFTH AVE.
              </p>
              <p className="mi-mono mi-faint" style={{ margin: 0, fontSize: '0.58rem', letterSpacing: '0.14em' }}>
                DOWNTOWN PITTSBURGH
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: Pittsburgh story ────────────────────────────────── */}
        <div className="pb-proof-right">

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 0.88,
            marginBottom: '1rem',
          }}>
            PITTSBURGH JEWELER.{' '}
            <em style={{
              fontStyle: 'italic',
              color: 'var(--color-brand-gold)',
              fontFamily: 'var(--font-display)',
            }}>
              25 YEARS.
            </em>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            color: 'var(--color-brand-silver)',
            lineHeight: 1.68,
            maxWidth: '40ch',
            marginBottom: '1.5rem',
          }}>
            Text or come through. Direct access. Details confirmed per piece.
          </p>

          <div>
            <span className="bang-signature bang-signature--section">BANG.</span>
          </div>

        </div>

      </div>
    </section>
  )
}
