import Image from 'next/image'
import Link from 'next/link'
import { HOME_MEDIA } from '@/data/homeMedia'

// 8 categories. No fake products, prices, inventory, or material claims.
// image: null → CSS gradient placeholder (intentional, not empty)
const CATEGORIES = [
  {
    label:    'GRILLZ',
    sub:      'Top. Bottom. Full mouth.',
    href:     '/grillz',
    image:    HOME_MEDIA.shineRail.grillz,
    imageAlt: 'Grillz — demo concept visual',
    tone:     'gold',
  },
  {
    label:    'WATCHES',
    sub:      'Iced. Bust-down. Inquiry only.',
    href:     '/watches',
    image:    HOME_MEDIA.shineRail.watches,
    imageAlt: 'Watch — demo concept visual',
    tone:     'ice',
  },
  {
    label:    'CHAINS',
    sub:      'Cuban. Rope. Tennis.',
    href:     '/collections/chains',
    image:    HOME_MEDIA.shineRail.chains,
    imageAlt: 'Chain — demo concept visual',
    tone:     'silver',
  },
  {
    label:    'PENDANTS',
    sub:      'Photo. Logo. Name. Number.',
    href:     '/collections/pendants',
    image:    HOME_MEDIA.shineRail.pendants,
    imageAlt: 'Pendant — demo concept visual',
    tone:     'gold',
  },
  {
    label:    'CUSTOM',
    sub:      'Logo, sketch, photo, reference.',
    href:     '/custom',
    image:    HOME_MEDIA.shineRail.custom,
    imageAlt: 'Custom work — demo concept visual',
    tone:     'warm',
  },
  {
    label:    'RINGS',
    sub:      'Custom or catalog. Ask what fits.',
    href:     '/collections/rings',
    image:    HOME_MEDIA.shineRail.rings,
    imageAlt: '',
    tone:     'gold',
  },
  {
    label:    'BRACELETS',
    sub:      "Tennis. Cuban. Ask what's in.",
    href:     '/collections/bracelets',
    image:    HOME_MEDIA.shineRail.bracelets,
    imageAlt: '',
    tone:     'ice',
  },
  {
    label:    'EARRINGS',
    sub:      "Studs. Hoops. Ask what's in.",
    href:     '/collections/earrings',
    image:    HOME_MEDIA.shineRail.earrings,
    imageAlt: '',
    tone:     'silver',
  },
] as const

// Duplicate for seamless loop: 16 cards × 220px = 3520px track
// translateX(-1760px) = 8 cards. At max: viewport needs 1760→3040px, track = 3520px. ✓
type Category = (typeof CATEGORIES)[number]

function RailCard({ cat, hidden = false }: { cat: Category; hidden?: boolean }) {
  return (
    <>
      <div className="src-img-area">
        {cat.image ? (
          <Image
            src={cat.image.src}
            alt={hidden ? '' : cat.image.alt}
            fill
            sizes="220px"
            className="src-img"
            loading="lazy"
          />
        ) : (
          <div className={`src-placeholder src-placeholder--${cat.tone}`} />
        )}
      </div>
      <div className="src-body">
        <span className="src-label">{cat.label}</span>
        <span className="src-sub">{cat.sub}</span>
      </div>
    </>
  )
}

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
        <div className="src-track">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className={`src-card src-card--${cat.tone}`}
            >
              <RailCard cat={cat} />
            </Link>
          ))}
          {CATEGORIES.map((cat) => (
            <div
              key={`${cat.label}-duplicate`}
              className={`src-card src-card--${cat.tone}`}
              aria-hidden="true"
            >
              <RailCard cat={cat} hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
