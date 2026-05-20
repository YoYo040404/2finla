// components/home/ProofMarquee.tsx
//
// Accessibility: outer container uses aria-label so screen readers get the
// trust facts announced once. The animated track is aria-hidden so doubled
// items aren't read twice.

type ProofItem = { text: string; bang?: true }

const PROOF_ITEMS: ProofItem[] = [
  { text: 'BANG!', bang: true },
  { text: 'GRILLZ' },
  { text: 'WATCHES' },
  { text: 'DOWNTOWN PITTSBURGH' },
  { text: 'OVER 30 YEARS' },
  { text: 'CUSTOM PIECES' },
  { text: 'REAL MATERIALS' },
  { text: 'WE QUOTE FIRST' },
  { text: 'NO DEPOSIT TO START' },
  { text: 'ASK BEFORE YOU BUY' },
]

export default function ProofMarquee() {
  const items = [...PROOF_ITEMS, ...PROOF_ITEMS]

  return (
    <div
      className="proof-marquee"
      aria-label="2T Jewelers: Grillz, Watches, Downtown Pittsburgh, over 30 years, custom pieces, real materials, we quote first, no deposit to start, ask before you buy"
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
