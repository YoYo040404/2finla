import Image from 'next/image'
import Link from 'next/link'

// 8 categories. No fake products, prices, inventory, or material claims.
// image: null → CSS gradient placeholder (intentional, not empty)
const CATEGORIES = [
  {
    label:    'GRILLZ',
    sub:      'Top. Bottom. Full mouth.',
    href:     '/grillz',
    image:    '/assets/demo/phase3a/2t-demo-grillz-flat-01.png',
    imageAlt: 'Grillz — demo concept visual',
    tone:     'gold',
  },
  {
    label:    'WATCHES',
    sub:      'Iced. Bust-down. Inquiry only.',
    href:     '/watches',
    image:    '/assets/demo/phase3a/2t-demo-watch-face-01.png',
    imageAlt: 'Watch — demo concept visual',
    tone:     'ice',
  },
  {
    label:    'CHAINS',
    sub:      'Cuban. Rope. Tennis.',
    href:     '/collections/chains',
    image:    '/assets/demo/phase3a/2t-demo-chains-01.png',
    imageAlt: 'Chain — demo concept visual',
    tone:     'silver',
  },
  {
    label:    'PENDANTS',
    sub:      'Photo. Logo. Name. Number.',
    href:     '/collections/pendants',
    image:    '/assets/demo/phase3a/2t-demo-pendants-01.png',
    imageAlt: 'Pendant — demo concept visual',
    tone:     'gold',
  },
  {
    label:    'CUSTOM',
    sub:      'Logo, sketch, photo, reference.',
    href:     '/custom',
    image:    '/assets/demo/phase3a/2t-demo-custom-before-after-01.png',
    imageAlt: 'Custom work — demo concept visual',
    tone:     'warm',
  },
  {
    label:    'RINGS',
    sub:      'Custom or catalog. Ask what fits.',
    href:     '/collections/rings',
    image:    null,
    imageAlt: '',
    tone:     'gold',
  },
  {
    label:    'BRACELETS',
    sub:      "Tennis. Cuban. Ask what's in.",
    href:     '/collections/bracelets',
    image:    null,
    imageAlt: '',
    tone:     'ice',
  },
  {
    label:    'EARRINGS',
    sub:      "Studs. Hoops. Ask what's in.",
    href:     '/collections/earrings',
    image:    null,
    imageAlt: '',
    tone:     'silver',
  },
] as const

// Duplicate for seamless loop: 16 cards × 220px = 3520px track
// translateX(-1760px) = 8 cards. At max: viewport needs 1760→3040px, track = 3520px. ✓
const ITEMS = [...CATEGORIES, ...CATEGORIES]

export function ShineRail() {
  return (
    <section
      className="src-wrap section-reveal"
      aria-label="Most asked about — browse categories"
    >
      {/* Compact heading — sits above the clipped rail, no overflow issues */}
      <div className="src-heading">
        <div>
          <span className="src-heading-title">MOST ASKED ABOUT</span>
          <p className="src-heading-sub">Pieces people text 2T about first.</p>
        </div>
        <Link href="/collections" className="src-heading-link">
          VIEW ALL →
        </Link>
      </div>

      {/* Scrolling rail — overflow:hidden clips track, edge fades live here */}
      <div className="src-rail">
        <div className="src-track" aria-hidden="true">
          {ITEMS.map((cat, i) => (
            <div key={i} className={`src-card src-card--${cat.tone}`}>
              {/* Image area */}
              <div className="src-img-area">
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    sizes="220px"
                    className="src-img"
                    loading="lazy"
                  />
                ) : (
                  <div className={`src-placeholder src-placeholder--${cat.tone}`} />
                )}
              </div>
              {/* Text */}
              <div className="src-body">
                <span className="src-label">{cat.label}</span>
                <span className="src-sub">{cat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
