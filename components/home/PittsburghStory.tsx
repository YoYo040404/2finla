// components/home/PittsburghStory.tsx
//
// Copy rules enforced:
// - "NEARLY 30" in the large outline number (not bare "30")
// - Headline confirms "Nearly 30 years" so the number is never misread
// - No defensive wording — positive statements only
import Link from 'next/link'

export default function PittsburghStory() {
  return (
    <section className="pitt-story-section" aria-label="About 2T Jewelers">
      <div className="pitt-story-inner">
        {/* Large outline typographic treatment — aria-hidden, headline carries the meaning */}
        <div className="pitt-story-number" aria-hidden="true">NEARLY 30</div>

        <div className="pitt-story-content">
          <span
            className="section-eyebrow"
            style={{ marginBottom: '1.25rem', display: 'block' }}
          >
            OUR STORY
          </span>
          <h2 className="pitt-story-headline">
            Nearly 30 years<br />in Pittsburgh.
          </h2>
          <p className="pitt-story-body">
            Family-owned. Custom-first. Own manufacturing.
          </p>
          <p className="pitt-story-body" style={{ marginTop: '0.875rem' }}>
            Real store. Direct contact. Built in Pittsburgh.
            Custom work starts with your idea — we shape the next move from there.
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
            <Link href="/collections" className="btn-outline-gold">
              BROWSE ALL →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
