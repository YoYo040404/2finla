// components/home/ShineDirectionBand.tsx
//
// Compact direction band — between the product wall and the promo ticker.
// "Choose your shine direction" commerce signal — not a spec footnote.
// Two equal panel lanes. Four-level hierarchy: eyebrow → main → spec → micro.
// Buyer labels first (Gold, Silver, Diamonds, Moissanite). Specs are secondary proof.
// No product-level claims. CSS-only.

export default function ShineDirectionBand() {
  return (
    <div
      className="sdb-band"
      role="complementary"
      aria-label="Material and stone directions at 2T Jewelers"
    >
      <div className="sdb-inner">

        <p className="sdb-headline">
          CHOOSE THE{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
            SHINE.
          </em>
        </p>

        <div className="sdb-row">

          {/* METAL panel — gold accent */}
          <div className="sdb-panel sdb-panel--gold">
            <span className="sdb-eyebrow">METAL</span>
            <p className="sdb-value sdb-value--gold">GOLD · SILVER</p>
            <span className="sdb-spec">925 Sterling Silver</span>
            <span className="sdb-micro">Pick the metal direction.</span>
          </div>

          {/* STONE panel — ice accent */}
          <div className="sdb-panel sdb-panel--ice">
            <span className="sdb-eyebrow">STONE</span>
            <p className="sdb-value sdb-value--ice">DIAMONDS · MOISSANITE</p>
            <span className="sdb-spec">D-color VVS Moissanite</span>
            <span className="sdb-micro">Pick the stone direction.</span>
          </div>

        </div>

        <p className="sdb-footer">Details confirmed per piece.</p>

      </div>
    </div>
  )
}
