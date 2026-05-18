// components/home/PittsburghStory.tsx
//
// Copy rules enforced:
// - "OVER 30" in the large outline number — confirmed by user 2026-05-17
// - No "family-owned" — unconfirmed, omitted by design
// - Media slot is a CSS placeholder — replace inner div with <img> or <video> when assets arrive
import Link from 'next/link'

const WHATSAPP_URL =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece.'
const MAPS_URL =
  'https://maps.google.com/?q=332+Fifth+Ave+Suite+1G+Pittsburgh+PA+15222'

const STAT_CHIPS = [
  'OVER 30 YEARS',
  'DOWNTOWN PITTSBURGH',
  '332 FIFTH AVE',
  'MON–FRI 11–4:30',
]

export default function PittsburghStory() {
  return (
    <section id="story" className="pitt-story-section" aria-label="About 2T Jewelers">
      <div className="pitt-story-inner">
        {/* Large outline typographic treatment — aria-hidden, headline carries the meaning */}
        <div className="pitt-story-number" aria-hidden="true">OVER 30</div>

        <div className="pitt-story-content">
          <span
            className="section-eyebrow"
            style={{ marginBottom: '1.25rem', display: 'block' }}
          >
            BUILT IN PITTSBURGH.
          </span>

          <h2 className="pitt-story-headline">
            OVER 30 YEARS IN DOWNTOWN PITTSBURGH.
          </h2>

          {/* Stat chips */}
          <div
            style={{
              display:    'flex',
              flexWrap:   'wrap',
              gap:        '0.5rem',
              marginTop:  '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            {STAT_CHIPS.map((chip) => (
              <span
                key={chip}
                style={{
                  display:       'inline-block',
                  padding:       '0.35rem 0.85rem',
                  border:        '1px solid rgba(212,175,55,0.35)',
                  color:         'rgba(212,175,55,0.85)',
                  fontSize:      '0.63rem',
                  letterSpacing: '0.12em',
                  fontWeight:    600,
                  textTransform: 'uppercase',
                }}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Media slot — swap this div for <img> or <video> when real store assets arrive.
              Asset path convention: public/assets/store/store-interior.jpg or store-loop.mp4 */}
          <div
            aria-hidden="true"
            style={{
              width:         '100%',
              aspectRatio:   '16 / 9',
              background:    'linear-gradient(135deg, #0e0e0e 0%, #1a1410 60%, #0e0e0e 100%)',
              border:        '1px solid rgba(212,175,55,0.12)',
              marginBottom:  '1.75rem',
              position:      'relative',
              overflow:      'hidden',
            }}
          >
            <div
              style={{
                position:       'absolute',
                inset:          0,
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                color:          'rgba(212,175,55,0.18)',
                fontSize:       '0.6rem',
                letterSpacing:  '0.25em',
                textTransform:  'uppercase',
                fontWeight:     700,
              }}
            >
              STORE PHOTO / VIDEO SLOT
            </div>
          </div>

          <p className="pitt-story-body">
            2T isn&rsquo;t a faceless jewelry site. It&rsquo;s a real Downtown Pittsburgh
            ice shop built around custom pieces, direct conversations, and work that has
            to hit when it lands.
          </p>
          <p className="pitt-story-body" style={{ marginTop: '0.75rem' }}>
            From chains and pendants to grillz, watches, and one-off custom builds &mdash;
            start with the idea, send the reference, and ask before you buy.
          </p>

          {/* Social / brand badge */}
          <p
            style={{
              marginTop:     '1.1rem',
              fontSize:      '0.68rem',
              letterSpacing: '0.15em',
              color:         'rgba(212,175,55,0.65)',
              textTransform: 'uppercase',
              fontWeight:    700,
            }}
          >
            @2tjewelers. BANG.
          </p>

          <div
            style={{
              marginTop: '2rem',
              display:   'flex',
              gap:       '1rem',
              flexWrap:  'wrap',
            }}
          >
            <Link href="/custom" className="btn-primary">
              START THE PIECE →
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              TEXT US →
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              VISIT US →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
