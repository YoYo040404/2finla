// components/home/ProofMarquee.tsx
//
// Accessibility: outer container uses aria-label so screen readers get the
// trust facts announced once. The animated track is aria-hidden so doubled
// items aren't read twice.

const PROOF_ITEMS = [
  'PITTSBURGH-BUILT',
  'FAMILY-OWNED',
  'NEARLY 30 YEARS',
  'OWN MANUFACTURING',
  'WE QUOTE FIRST',
  'CUSTOM PIECES',
  'REAL MATERIALS',
  'ASK BEFORE YOU BUY',
]

export default function ProofMarquee() {
  // Duplicate for seamless CSS-only infinite loop (translateX(-50%) = one copy width)
  const items = [...PROOF_ITEMS, ...PROOF_ITEMS]

  return (
    <div
      className="proof-marquee"
      aria-label="2T Jewelers trust facts: Pittsburgh-built, family-owned, nearly 30 years, own manufacturing, we quote first, custom pieces, real materials, ask before you buy"
    >
      <div className="proof-marquee-track" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span className="proof-marquee-item">{item}</span>
            <span className="proof-marquee-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
