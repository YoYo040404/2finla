// components/home/PittsburghStory.tsx
//
// Copy rules enforced:
// - Approved tenure wording: "over 30 years" — confirmed by user 2026-05-17
// - No "family-owned" — unconfirmed, omitted by design
// - No address chip — address lives in the Footer only
// - Media slot is a CSS placeholder — replace inner div with <img> or <video> when store assets arrive
//   Asset convention: public/assets/store/store-interior.jpg or store-loop.mp4
import Link from 'next/link'

const WHATSAPP_URL =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece.'

const CHIPS = ['OVER 30 YEARS', 'DOWNTOWN PITTSBURGH']

export default function PittsburghStory() {
  return (
    <section id="story" className="pitt-story-section" aria-label="About 2T Jewelers">
      <div className="pitt-story-inner">

        {/* Media slot — swap this div for <img> or <video> when real store assets arrive.
            Asset convention: public/assets/store/store-interior.jpg or store-loop.mp4 */}
        <div className="pitt-story-media" aria-hidden="true">
          <div className="pitt-story-media-glint" />
          <div className="pitt-story-media-label">
            PITTSBURGH
          </div>
          <div className="pitt-story-media-watermark">BANG.</div>
        </div>

        <div className="pitt-story-content">
          <span className="section-eyebrow" style={{ marginBottom: '1rem', display: 'block' }}>
            BUILT IN PITTSBURGH.
          </span>

          <h2 className="pitt-story-headline">
            REAL STORE.<br />REAL WORK.
          </h2>

          <div className="pitt-story-chips">
            {CHIPS.map((chip) => (
              <span key={chip} className="pitt-story-chip">{chip}</span>
            ))}
          </div>

          <p className="pitt-story-body">
            Downtown Pittsburgh. 30+ years in the game.
            Text or come through.
          </p>

          <p className="pitt-story-body" style={{ marginTop: '0.9rem' }}>
            We quote before the build.
            Product details confirmed per piece.
          </p>

          <div className="pitt-story-cta">
            <Link href="/custom" className="btn-primary">
              BUILD CUSTOM →
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pitt-story-text-link"
            >
              Or text us →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
