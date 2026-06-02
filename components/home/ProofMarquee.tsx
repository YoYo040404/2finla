// components/home/ProofMarquee.tsx
//
// Accessibility: outer container uses aria-label so screen readers get the
// trust facts announced once. The animated track is aria-hidden so tripled
// items aren't read repeatedly.
//
// Loop math: base items are tripled before doubling (6× total).
// Animation runs to -50% = exactly 3 base-set widths.
// This ensures the track always overfills even the widest desktop viewport,
// eliminating the dead-space gap seen when only 2× was used on screens ≥1280px.

type ProofItem = { text: string; bang?: true }

const PROOF_ITEMS: ProofItem[] = [
  { text: 'DOWNTOWN PITTSBURGH JEWELER' },
  { text: '25 YEARS' },
  { text: 'DETAILS CONFIRMED PER PIECE' },
  { text: 'TEXT BEFORE YOU BUY' },
  { text: 'WE QUOTE FIRST' },
  { text: 'NO DEPOSIT TO START' },
]

export default function ProofMarquee() {
  // Triple the base set, then duplicate once — animation scrolls -50% = 3× base width.
  const base  = [...PROOF_ITEMS, ...PROOF_ITEMS, ...PROOF_ITEMS]
  const items = [...base, ...base]

  return (
    <div
      className="proof-marquee"
      aria-label="2T Jewelers: Downtown Pittsburgh jeweler, 25 years, details confirmed per piece, text before you buy"
    >
      <div className="proof-marquee-track" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} style={{ display: 'contents' }}>
            {item.bang ? (
              <em className="proof-marquee-bang">{item.text}</em>
            ) : (
              <span className="proof-marquee-item">{item.text}</span>
            )}
            <span className="proof-marquee-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
