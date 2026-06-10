import type { Metadata } from 'next'
import Link from 'next/link'

// ── Proof slot types ────────────────────────────────────────────────────────
// All constants below are null / empty by default.
// Populate with real, verified assets before any slot becomes visible.

type FeaturedPiece = {
  label:      string  // e.g. "LOGO PENDANT — GOLD DIRECTION"
  descriptor: string  // claim-safe descriptor, no karat/grade/price claims
  imageSrc:   string  // path under /public/assets/ — real photo required
  imageAlt:   string  // descriptive alt text
  waMessage:  string  // pre-filled WhatsApp text specific to this piece
}

type ProofAsset = {
  src:     string                          // path under /public/assets/ — real photo required
  alt:     string                          // descriptive alt text — no claim language
  caption?: string                         // optional one-liner, no unverified claims
  before?: { src: string; alt: string }   // optional before/after: the input (logo, photo, sketch)
}

type ActiveOffer = {
  headline:    string   // confirmed offer copy only
  body:        string   // claim-safe body
  ctaLabel:    string   // button label
  waMessage:   string   // pre-filled WhatsApp text
  promoTerms?: string   // e.g. "Offer terms shown on eligible items only."
}

type PendantStyle = {
  title:       string        // all-caps label, e.g. "CROSS PENDANT"
  description: string        // one direct sentence
  specs:       string[]      // 4 spec bullets
  imageSrc:    string | null // null = SVG fallback renders
  imageAlt:    string
  waMessage:   string        // pre-filled WhatsApp text
}

type CustomPendantType = {
  label:       string        // all-caps, e.g. "PHOTO PENDANT"
  description: string        // 1–2 lines
  imageSrc:    string | null // null = SVG icon fallback renders; set to real path when photo is ready
  imageAlt:    string        // used only when imageSrc is not null
}

const PENDANT_STYLES: PendantStyle[] = [
  {
    title:       'CROSS PENDANT',
    description: 'Clean or iced. Built to sit right on the chain.',
    specs: [
      'Plain or iced-out direction',
      'Gold or silver direction',
      "Ask what's available",
    ],
    imageSrc:  null,
    imageAlt:  'Cross pendant — clean or iced gold cross shape',
    waMessage: "Hey 2T — I'm looking at cross pendants. What do you have available? Gold or silver direction.",
  },
  {
    title:       'JESUS PIECE',
    description: 'Classic hip-hop icon. Loud when it hits the light.',
    specs: [
      'Clean or iced-out direction',
      'Size confirmed per piece',
      "Ask what's available",
    ],
    imageSrc:  null,
    imageAlt:  'Jesus piece pendant — iced hip-hop style',
    waMessage: "Hey 2T — I'm looking at Jesus pieces. What do you have? Iced or clean, gold or silver.",
  },
  {
    title:       'MEDALLION',
    description: 'Big face. Round, oval, clean, or iced.',
    specs: [
      'Engraved or stone-set direction',
      'Gold or silver direction',
      'Details confirmed per piece',
    ],
    imageSrc:  null,
    imageAlt:  'Medallion pendant — round coin face',
    waMessage: "Hey 2T — I'm looking at medallion pendants. What styles do you have available?",
  },
  {
    title:       'INITIAL PENDANT',
    description: 'Your letter. Block, script, or bubble.',
    specs: [
      'Single letter or monogram',
      'Clean or iced direction',
      "Ask what's available",
    ],
    imageSrc:  null,
    imageAlt:  'Initial pendant — block letter with bail',
    waMessage: "Hey 2T — I'm looking at initial pendants. What letter styles and fonts do you have?",
  },
  {
    title:       'ICED PENDANT',
    description: 'Stone-set face. Built to hit.',
    specs: [
      'Diamond or moissanite direction',
      'Gold or silver setting',
      'Details confirmed per piece',
    ],
    imageSrc:  null,
    imageAlt:  'Iced-out pendant — stone-set face',
    waMessage: "Hey 2T — I'm looking at iced-out pendants. What stone directions and styles do you have?",
  },
  {
    title:       'PENDANT + CHAIN',
    description: 'The full setup. Ask what chain hits right.',
    specs: [
      'Cuban, rope, or tennis pairing',
      'Chain weight and pendant size matter',
      'Ask what pairs right',
    ],
    imageSrc:  null,
    imageAlt:  'Pendant and chain set — full neck setup',
    waMessage: "Hey 2T — I'm looking for a pendant and chain set. What combinations do you have available?",
  },
]

const CUSTOM_PENDANT_TYPES: CustomPendantType[] = [
  {
    label:       'PHOTO PENDANT',
    description: 'Your picture, built into a piece.',
    imageSrc:    null,
    imageAlt:    'Custom photo pendant — portrait or personal image cast in gold or silver',
  },
  {
    label:       'LOGO PENDANT',
    description: 'Business mark, personal logo, or design.',
    imageSrc:    null,
    imageAlt:    'Custom logo pendant — your design cast as a wearable pendant',
  },
  {
    label:       'NAME PIECE',
    description: 'Your name, iced and clean.',
    imageSrc:    null,
    imageAlt:    'Custom name piece — letters set in gold or silver',
  },
  {
    label:       'NUMBER PENDANT',
    description: 'Jersey, area code, or date.',
    imageSrc:    null,
    imageAlt:    'Custom number pendant — personal number cast in gold',
  },
  {
    label:       'MEMORIAL PENDANT',
    description: 'Keep the memory close.',
    imageSrc:    null,
    imageAlt:    'Custom memorial pendant — tribute piece in gold or silver',
  },
  {
    label:       'CUSTOM SHAPE',
    description: 'Your concept, your silhouette.',
    imageSrc:    null,
    imageAlt:    'Custom shape pendant — your unique form cast in metal',
  },
]

// Set to a populated object only when a real verified photo exists.
const FEATURED_PIECE: FeaturedPiece | null = null

// Add entries only when real photos are confirmed and available.
// If an entry has a `before` field, the ProofRail renders a before/after layout for that item.
const PROOF_ASSETS: ProofAsset[] = []

// Set to true and populate ACTIVE_OFFER only when a real confirmed offer exists.
const HAS_ACTIVE_OFFER = false
const ACTIVE_OFFER: ActiveOffer | null = null

function waUrl(msg: string): string {
  return `https://wa.me/14124524343?text=${encodeURIComponent(msg)}`
}

function PendantIllustration({ index }: { index: number }) {
  const G  = 'rgba(201,168,76,0.82)'
  const GF = 'rgba(201,168,76,0.32)'
  const GB = 'rgba(201,168,76,0.55)'
  const IC = 'rgba(200,230,255,0.72)'

  const base = {
    width:  '100%' as const,
    height: '100%' as const,
    fill:   'none' as const,
  }

  switch (index) {

    // ── Cross Pendant ─────────────────────────────────────────────────────
    case 0:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* Bail */}
          <ellipse cx="120" cy="10" rx="8" ry="5" stroke={G} strokeWidth="1.5"/>
          <line x1="120" y1="15" x2="120" y2="22" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          {/* Vertical bar */}
          <rect x="112" y="22" width="16" height="76" rx="2" stroke={G} strokeWidth="1.8"/>
          {/* Horizontal bar */}
          <rect x="76"  y="42" width="88" height="16" rx="2" stroke={G} strokeWidth="1.8"/>
          {/* Inner detail */}
          <line x1="120" y1="26" x2="120" y2="48"  stroke={GF} strokeWidth="0.9"/>
          <line x1="120" y1="64" x2="120" y2="94"  stroke={GF} strokeWidth="0.9"/>
          <line x1="80"  y1="50" x2="112" y2="50"  stroke={GF} strokeWidth="0.9"/>
          <line x1="128" y1="50" x2="160" y2="50"  stroke={GF} strokeWidth="0.9"/>
          {/* Center accent */}
          <circle cx="120" cy="50" r="5" fill={IC} opacity="0.65"/>
          <circle cx="120" cy="50" r="2" fill={IC} opacity="0.9"/>
        </svg>
      )

    // ── Jesus Piece ───────────────────────────────────────────────────────
    case 1:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* Bail */}
          <ellipse cx="120" cy="8" rx="9" ry="5.5" stroke={G} strokeWidth="1.5"/>
          <line x1="120" y1="13.5" x2="120" y2="20" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          {/* Outer circle */}
          <circle cx="120" cy="63" r="42" stroke={G} strokeWidth="1.8"/>
          {/* Inner ring */}
          <circle cx="120" cy="63" r="33" stroke={GF} strokeWidth="1"/>
          {/* Head oval */}
          <ellipse cx="120" cy="40" rx="11" ry="10" stroke={G} strokeWidth="1.5"/>
          <circle cx="120" cy="40" r="4" fill={IC} opacity="0.5"/>
          {/* Crown rays */}
          {([-18,-9,0,9,18] as const).map((dx, i) => (
            <line key={i} x1={120 + dx} y1={32} x2={120 + dx} y2={27} stroke={IC} strokeWidth="1" opacity="0.65"/>
          ))}
          {/* Shoulders */}
          <path d="M98,58 Q100,68 120,70 Q140,68 142,58" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
          {/* Robe lines */}
          <line x1="110" y1="70" x2="107" y2="90" stroke={GF} strokeWidth="1" strokeLinecap="round"/>
          <line x1="130" y1="70" x2="133" y2="90" stroke={GF} strokeWidth="1" strokeLinecap="round"/>
          <line x1="120" y1="70" x2="120" y2="90" stroke={GF} strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )

    // ── Medallion ─────────────────────────────────────────────────────────
    case 2:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* Bail */}
          <ellipse cx="120" cy="7" rx="9" ry="5.5" stroke={G} strokeWidth="1.5"/>
          <line x1="120" y1="12.5" x2="120" y2="20" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          {/* Outer circle */}
          <circle cx="120" cy="64" r="42" stroke={G} strokeWidth="2"/>
          {/* Mid ring */}
          <circle cx="120" cy="64" r="30" stroke={GF} strokeWidth="1.2"/>
          {/* Inner ring */}
          <circle cx="120" cy="64" r="16" stroke={GB} strokeWidth="1.2"/>
          {/* Compass points */}
          <line x1="120" y1="48" x2="120" y2="42" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="120" y1="80" x2="120" y2="86" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="104" y1="64" x2="98"  y2="64" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="136" y1="64" x2="142" y2="64" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
          {/* Diagonal accents */}
          <line x1="109" y1="53" x2="105" y2="49" stroke={GF} strokeWidth="1" strokeLinecap="round"/>
          <line x1="131" y1="53" x2="135" y2="49" stroke={GF} strokeWidth="1" strokeLinecap="round"/>
          <line x1="109" y1="75" x2="105" y2="79" stroke={GF} strokeWidth="1" strokeLinecap="round"/>
          <line x1="131" y1="75" x2="135" y2="79" stroke={GF} strokeWidth="1" strokeLinecap="round"/>
          {/* Center fill */}
          <circle cx="120" cy="64" r="5" fill={IC} opacity="0.75"/>
          <circle cx="120" cy="64" r="2" fill={IC} opacity="0.95"/>
        </svg>
      )

    // ── Initial Pendant ───────────────────────────────────────────────────
    case 3:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* Bail */}
          <ellipse cx="120" cy="7" rx="9" ry="5.5" stroke={G} strokeWidth="1.5"/>
          <line x1="120" y1="12.5" x2="120" y2="18" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          {/* Outer bounding rect (pendant body) */}
          <rect x="84" y="18" width="72" height="88" rx="3" stroke={G} strokeWidth="1.5"/>
          {/* Letter A — outer */}
          <line x1="120" y1="28" x2="92"  y2="100" stroke={G}  strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="120" y1="28" x2="148" y2="100" stroke={G}  strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="99"  y1="72" x2="141" y2="72"  stroke={G}  strokeWidth="4"   strokeLinecap="round"/>
          {/* Letter A — inner detail */}
          <line x1="120" y1="34" x2="96"  y2="96"  stroke={GF} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="120" y1="34" x2="144" y2="96"  stroke={GF} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="102" y1="69" x2="138" y2="69"  stroke={GF} strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      )

    // ── Iced Pendant ──────────────────────────────────────────────────────
    case 4:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* Bail */}
          <ellipse cx="120" cy="7" rx="9" ry="5.5" stroke={G} strokeWidth="1.5"/>
          <line x1="120" y1="12.5" x2="120" y2="20" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          {/* Diamond/kite shape */}
          <path d="M120 20 L162 58 L120 103 L78 58 Z" stroke={G} strokeWidth="1.8"/>
          {/* Inner facet lines */}
          <path d="M120 20 L162 58" stroke={GF} strokeWidth="0.85"/>
          <path d="M120 20 L78  58" stroke={GF} strokeWidth="0.85"/>
          <line x1="78" y1="58" x2="162" y2="58" stroke={GF} strokeWidth="0.85"/>
          {/* Stone fills */}
          <circle cx="120" cy="50" r="7"   fill={IC} opacity="0.72"/>
          <circle cx="120" cy="67" r="5.5" fill={IC} opacity="0.55"/>
          <circle cx="106" cy="58" r="4"   fill={IC} opacity="0.45"/>
          <circle cx="134" cy="58" r="4"   fill={IC} opacity="0.45"/>
          <circle cx="120" cy="83" r="3.5" fill={IC} opacity="0.35"/>
          {/* Sparkle crosshairs */}
          <line x1="120" y1="37"  x2="120" y2="31"  stroke={IC} strokeWidth="1.2"/>
          <line x1="150" y1="55"  x2="156" y2="55"  stroke={IC} strokeWidth="1.2"/>
          <line x1="90"  y1="55"  x2="84"  y2="55"  stroke={IC} strokeWidth="1.2"/>
          <line x1="120" y1="97"  x2="120" y2="103" stroke={IC} strokeWidth="1.2"/>
        </svg>
      )

    // ── Pendant + Chain ───────────────────────────────────────────────────
    case 5:
    default:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* Chain links */}
          <ellipse cx="80"  cy="20" rx="22" ry="10" stroke={G}  strokeWidth="1.8"/>
          <ellipse cx="80"  cy="20" rx="14" ry="6"  stroke={GF} strokeWidth="1"/>
          <ellipse cx="160" cy="20" rx="22" ry="10" stroke={G}  strokeWidth="1.8"/>
          <ellipse cx="160" cy="20" rx="14" ry="6"  stroke={GF} strokeWidth="1"/>
          {/* Center connector */}
          <ellipse cx="120" cy="20" rx="10" ry="18" stroke={GB} strokeWidth="1.4"/>
          {/* Bail */}
          <ellipse cx="120" cy="36" rx="5" ry="3.5" stroke={G} strokeWidth="1.2"/>
          <line x1="120" y1="39.5" x2="120" y2="44" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          {/* Pendant diamond shape */}
          <path d="M120 44 L150 66 L120 98 L90 66 Z" stroke={G} strokeWidth="1.8"/>
          <path d="M120 44 L150 66"  stroke={GF} strokeWidth="0.85"/>
          <path d="M120 44 L90  66"  stroke={GF} strokeWidth="0.85"/>
          <line x1="90" y1="66" x2="150" y2="66" stroke={GF} strokeWidth="0.85"/>
          {/* Center stone */}
          <circle cx="120" cy="70" r="5.5" fill={IC} opacity="0.68"/>
          <circle cx="120" cy="70" r="2"   fill={IC} opacity="0.9"/>
        </svg>
      )
  }
}

function CustomTypeIllustration({ index }: { index: number }) {
  const G  = 'rgba(201,168,76,0.82)'
  const GF = 'rgba(201,168,76,0.32)'
  const GB = 'rgba(201,168,76,0.55)'
  const IC = 'rgba(200,230,255,0.72)'

  const base = {
    width:  '100%' as const,
    height: '100%' as const,
    fill:   'none' as const,
  }

  switch (index) {

    // ── Photo Pendant — oval portrait frame with silhouette ───────────────
    case 0:
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true" {...base}>
          <ellipse cx="40" cy="7"  rx="6"  ry="4"  stroke={G}  strokeWidth="1.5"/>
          <line x1="40" y1="11" x2="40" y2="17" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          <ellipse cx="40" cy="48" rx="22" ry="27" stroke={G}  strokeWidth="1.8"/>
          <ellipse cx="40" cy="48" rx="17" ry="22" stroke={GF} strokeWidth="0.8"/>
          <ellipse cx="40" cy="36" rx="6.5" ry="7.5" fill={IC} opacity="0.45"/>
          <path d="M23 70 Q31 57 40 55 Q49 57 57 70" fill={IC} opacity="0.28"/>
        </svg>
      )

    // ── Logo Pendant — shield / badge ─────────────────────────────────────
    case 1:
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true" {...base}>
          <ellipse cx="40" cy="6" rx="6" ry="4" stroke={G} strokeWidth="1.5"/>
          <line x1="40" y1="10" x2="40" y2="16" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M40 18 L62 27 L62 48 Q62 65 40 72 Q18 65 18 48 L18 27 Z" stroke={G} strokeWidth="1.8"/>
          <path d="M40 24 L56 31 L56 49 Q56 62 40 67 Q24 62 24 49 L24 31 Z" stroke={GF} strokeWidth="0.8"/>
          <line x1="40" y1="33" x2="40" y2="42" stroke={IC} strokeWidth="1.4" strokeLinecap="round"/>
          <circle cx="40" cy="48" r="4.5" fill={IC} opacity="0.55"/>
        </svg>
      )

    // ── Name Piece — text / letter bars ───────────────────────────────────
    case 2:
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true" {...base}>
          <ellipse cx="40" cy="7"  rx="7" ry="4.5" stroke={G}  strokeWidth="1.5"/>
          <line x1="40" y1="11.5" x2="40" y2="17" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="13" y="17" width="54" height="58" rx="2" stroke={G} strokeWidth="1.5"/>
          <rect x="21" y="29" width="38" height="5.5" rx="1" fill={G}  opacity="0.72"/>
          <rect x="21" y="41" width="30" height="3.5" rx="1" fill={GF} opacity="0.85"/>
          <rect x="21" y="51" width="34" height="3.5" rx="1" fill={GF} opacity="0.75"/>
          <rect x="21" y="61" width="22" height="3"   rx="1" fill={GF} opacity="0.5"/>
        </svg>
      )

    // ── Number Pendant — bold numeral block ───────────────────────────────
    case 3:
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true" {...base}>
          <ellipse cx="40" cy="7" rx="6" ry="4" stroke={G} strokeWidth="1.5"/>
          <line x1="40" y1="11" x2="40" y2="17" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="15" y="17" width="50" height="58" rx="2" stroke={G} strokeWidth="1.5"/>
          {/* Numeral 7 */}
          <line x1="24" y1="30" x2="56" y2="30" stroke={G}  strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="56" y1="30" x2="36" y2="68" stroke={G}  strokeWidth="4.5" strokeLinecap="round"/>
          <line x1="25" y1="33" x2="57" y2="33" stroke={GF} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="57" y1="33" x2="37" y2="65" stroke={GF} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )

    // ── Memorial Pendant — cross in halo circle ───────────────────────────
    case 4:
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true" {...base}>
          <ellipse cx="40" cy="6" rx="6" ry="4" stroke={G} strokeWidth="1.5"/>
          <line x1="40" y1="10" x2="40" y2="15" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="40" cy="46" r="30" stroke={G}  strokeWidth="1.8"/>
          <circle cx="40" cy="46" r="24" stroke={GF} strokeWidth="0.8"/>
          {/* Cross */}
          <rect x="36" y="24" width="8" height="44" rx="1.5" fill={G} opacity="0.68"/>
          <rect x="21" y="38" width="38" height="8" rx="1.5" fill={G} opacity="0.68"/>
          <circle cx="40" cy="46" r="4.5" fill={IC} opacity="0.65"/>
        </svg>
      )

    // ── Custom Shape — abstract polygon with accent ───────────────────────
    case 5:
    default:
      return (
        <svg viewBox="0 0 80 80" aria-hidden="true" {...base}>
          <ellipse cx="40" cy="6" rx="6" ry="4" stroke={G} strokeWidth="1.5"/>
          <line x1="40" y1="10" x2="40" y2="15" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          <polygon
            points="40,16 57,21 68,37 68,53 57,68 40,74 23,68 12,53 12,37 23,21"
            stroke={G} strokeWidth="1.8"
          />
          <polygon
            points="40,23 54,27 63,40 63,51 54,63 40,67 26,63 17,51 17,40 26,27"
            stroke={GF} strokeWidth="0.8"
          />
          <circle cx="40" cy="45" r="9"   stroke={GB} strokeWidth="1.2"/>
          <circle cx="40" cy="45" r="3.5" fill={IC}   opacity="0.65"/>
          <line x1="40" y1="34" x2="40" y2="38" stroke={IC} strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      )
  }
}

export const metadata: Metadata = {
  title:       '2T Jewelers | Pendants — Custom Photo, Logo, Name | Pittsburgh, PA',
  description: 'Shop iced pendants or build custom. Photo, logo, name, number, memorial — Pittsburgh jeweler. No deposit to start. We quote before the build. 25 years.',
}

const WA_PENDANTS        = 'https://wa.me/14124524343?text=What%20pendants%20do%20you%20have%20available%20now%3F'
const WA_PENDANTS_CUSTOM = 'https://wa.me/14124524343?text=I%20want%20a%20custom%20pendant.%20Can%20I%20send%20a%20photo%2C%20logo%2C%20name%2C%20or%20number%3F'


export default function PendantsPage() {
  return (
    <main style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingTop: '106px' }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          position:     'relative',
          padding:      'clamp(3.5rem, 8vw, 6rem) 1.5rem clamp(2rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--color-brand-border)',
          overflow:     'hidden',
        }}
      >
        {/* Gold ambient glow */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 60% 60% at 8% 50%, rgba(201,168,76,0.09) 0%, transparent 72%)',
          pointerEvents: 'none',
        }} />

        {/* Pendant vignette — right-side atmosphere, clips on narrow viewports */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          right:         '-40px',
          top:           '50%',
          transform:     'translateY(-50%)',
          width:         '280px',
          height:        '360px',
          opacity:       0.11,
          pointerEvents: 'none',
        }}>
          <svg viewBox="0 0 180 240" fill="none" style={{ width: '100%', height: '100%' }}>
            <ellipse cx="90" cy="12" rx="13" ry="8" stroke="rgba(201,168,76,1)" strokeWidth="2.5"/>
            <line x1="90" y1="20" x2="90" y2="32" stroke="rgba(201,168,76,0.7)" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M90 34 L168 112 L90 228 L12 112 Z" stroke="rgba(201,168,76,1)" strokeWidth="3"/>
            <line x1="12" y1="112" x2="168" y2="112" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5"/>
            <path d="M90 34 L168 112" stroke="rgba(200,230,255,0.7)" strokeWidth="1.2"/>
            <path d="M90 34 L12 112"  stroke="rgba(200,230,255,0.7)" strokeWidth="1.2"/>
            <circle cx="90"  cy="98"  r="18" fill="rgba(200,230,255,1)"/>
            <circle cx="90"  cy="128" r="13" fill="rgba(200,230,255,0.75)"/>
            <circle cx="58"  cy="112" r="9"  fill="rgba(200,230,255,0.6)"/>
            <circle cx="122" cy="112" r="9"  fill="rgba(200,230,255,0.6)"/>
            <circle cx="90"  cy="158" r="8"  fill="rgba(200,230,255,0.45)"/>
            <circle cx="62"  cy="138" r="5"  fill="rgba(200,230,255,0.35)"/>
            <circle cx="118" cy="138" r="5"  fill="rgba(200,230,255,0.35)"/>
            <circle cx="90"  cy="180" r="5"  fill="rgba(200,230,255,0.25)"/>
            <line x1="90"  y1="48"  x2="90"  y2="38"  stroke="rgba(200,230,255,1)" strokeWidth="2.5"/>
            <line x1="155" y1="108" x2="165" y2="108" stroke="rgba(200,230,255,1)" strokeWidth="2.5"/>
            <line x1="25"  y1="108" x2="15"  y2="108" stroke="rgba(200,230,255,1)" strokeWidth="2.5"/>
            <line x1="90"  y1="220" x2="90"  y2="230" stroke="rgba(200,230,255,1)" strokeWidth="2.5"/>
          </svg>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <span className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>PENDANTS</span>

          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.8rem, 6.5vw, 5rem)',
              fontWeight:    400,
              lineHeight:    1.05,
              letterSpacing: '-0.03em',
              color:         'var(--color-brand-white)',
              marginBottom:  '1.25rem',
            }}
          >
            PENDANTS THAT<br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>HIT DIFFERENT.</em>
          </h1>

          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     'clamp(0.95rem, 1.5vw, 1.05rem)',
              color:        'var(--color-brand-silver)',
              marginBottom: '2rem',
              lineHeight:   1.65,
              maxWidth:     '42ch',
            }}
          >
            Photo, logo, name, or number. Send the idea — we quote before the build.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <a
              href={WA_PENDANTS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              ASK ABOUT PENDANTS →
            </a>
          </div>
        </div>
      </section>

      {/* ── Featured Piece slot ───────────────────────────────────────
           Renders nothing while FEATURED_PIECE is null.
           Populate with a real verified photo to make this visible. */}
      {FEATURED_PIECE !== null && (
        <section
          style={{
            padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
            borderBottom: '1px solid var(--color-brand-border)',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>FEATURED</span>
            <div
              style={{
                display:    'flex',
                gap:        '2rem',
                flexWrap:   'wrap',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  flex:        '0 0 auto',
                  width:       'clamp(200px, 40%, 360px)',
                  aspectRatio: '1 / 1',
                  background:  'var(--color-brand-charcoal)',
                  border:      '1px solid var(--color-brand-border)',
                  overflow:    'hidden',
                  position:    'relative',
                }}
              >
                <img
                  src={FEATURED_PIECE.imageSrc}
                  alt={FEATURED_PIECE.imageAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ flex: '1 1 260px' }}>
                <p
                  style={{
                    fontFamily:   'var(--font-display)',
                    fontSize:     'clamp(1.4rem, 3vw, 2rem)',
                    fontWeight:   400,
                    color:        'var(--color-brand-white)',
                    lineHeight:   1.05,
                    marginBottom: '0.75rem',
                  }}
                >
                  {FEATURED_PIECE.label}
                </p>
                <p
                  style={{
                    fontFamily:   'var(--font-body)',
                    fontSize:     '0.875rem',
                    color:        'var(--color-brand-muted)',
                    lineHeight:   1.65,
                    marginBottom: '0.5rem',
                  }}
                >
                  {FEATURED_PIECE.descriptor}
                </p>
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.72rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         'var(--color-brand-subtle)',
                    marginBottom:  '1.5rem',
                  }}
                >
                  Details confirmed per piece.
                </p>
                <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                  <a
                    href={`https://wa.me/14124524343?text=${encodeURIComponent(FEATURED_PIECE.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    TEXT 2T ABOUT THIS PENDANT →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Shop Pendant Styles ──────────────────────────────────────
           Mini-catalog: 6 pendant style cards with per-style WhatsApp CTAs.
           SVG illustration renders when imageSrc is null.
           Replace with a real photo by setting imageSrc on the style entry. */}
      <section
        style={{
          padding:      'clamp(2rem, 4vw, 3rem) 1.5rem clamp(3rem, 6vw, 4.5rem)',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>READY TO SHOP</span>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.5rem, 3.5vw, 2.6rem)',
              fontWeight:   400,
              color:        'var(--color-brand-white)',
              lineHeight:   1.1,
              marginBottom: '2rem',
            }}
          >
            Pick the pendant that hits.
          </p>

          {/* Card grid */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap:                 '1px',
              background:          'var(--color-brand-border)',
              marginBottom:        '1.5rem',
            }}
          >
            {PENDANT_STYLES.map((style, i) => (
              <div
                key={style.title}
                className="style-card-hover"
                style={{
                  background:    'var(--color-brand-black)',
                  border:        '1px solid var(--color-brand-border)',
                  display:       'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Visual area */}
                <div
                  className="lit-diagram"
                  style={{
                    width:          '100%',
                    aspectRatio:    '16 / 9',
                    background:     'var(--color-brand-charcoal)',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    overflow:       'hidden',
                    flexShrink:     0,
                    padding:        style.imageSrc ? '0' : '1.5rem',
                  }}
                >
                  {style.imageSrc ? (
                    <img
                      src={style.imageSrc}
                      alt={style.imageAlt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <PendantIllustration index={i} />
                  )}
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding:       '1.5rem',
                    flex:          1,
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           '0.75rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.7rem',
                      fontWeight:    600,
                      letterSpacing: '0.13em',
                      textTransform: 'uppercase',
                      color:         'var(--color-brand-gold)',
                      opacity:       0.9,
                    }}
                  >
                    {style.title}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize:   'clamp(1rem, 2vw, 1.25rem)',
                      fontWeight: 400,
                      color:      'var(--color-brand-white)',
                      lineHeight: 1.15,
                    }}
                  >
                    {style.description}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding:   0,
                      margin:    0,
                      flexGrow:  1,
                    }}
                  >
                    {style.specs.map((spec) => (
                      <li
                        key={spec}
                        style={{
                          fontFamily:  'var(--font-body)',
                          fontSize:    '0.78rem',
                          color:       '#B0ADA6',
                          lineHeight:  1.9,
                          paddingLeft: '1rem',
                          position:    'relative',
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            left:     0,
                            color:    'var(--color-brand-gold)',
                            opacity:  0.75,
                            fontSize: '0.7rem',
                          }}
                        >
                          ✓
                        </span>
                        {spec}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

          {/* Section-level CTA */}
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href={WA_PENDANTS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              ASK ABOUT PENDANTS →
            </a>
            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.72rem',
                color:         'var(--color-brand-subtle)',
                letterSpacing: '0.02em',
                margin:        0,
              }}
            >
              Details confirmed per piece. Ask what&rsquo;s in stock and available.
            </p>
          </div>
        </div>
      </section>

      {/* ── Proof Rail slot ───────────────────────────────────────────────
           Renders nothing while PROOF_ASSETS is empty.
           When an asset has a `before` field, it renders as a before/after pair.
           Add real verified pendant photos (or before/after pairs) to make this visible. */}
      {PROOF_ASSETS.length > 0 && (
        <section
          style={{
            padding:      'clamp(2.5rem, 5vw, 3.5rem) 1.5rem',
            borderBottom: '1px solid var(--color-brand-border)',
            overflow:     'hidden',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WHAT WE&rsquo;VE BUILT</span>
            <div
              style={{
                display:               'flex',
                gap:                   '1px',
                overflowX:             'auto',
                background:            'var(--color-brand-border)',
                scrollSnapType:        'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {PROOF_ASSETS.map((asset, i) =>
                asset.before ? (
                  // Before/after layout: input on left, finished piece on right
                  <div
                    key={i}
                    style={{
                      flex:            '0 0 auto',
                      display:         'flex',
                      gap:             '1px',
                      scrollSnapAlign: 'start',
                      background:      'var(--color-brand-border)',
                    }}
                  >
                    <div
                      style={{
                        width:      'clamp(160px, 22vw, 260px)',
                        aspectRatio: '1 / 1',
                        background: 'var(--color-brand-charcoal)',
                        overflow:   'hidden',
                        position:   'relative',
                      }}
                    >
                      <img
                        src={asset.before.src}
                        alt={asset.before.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                      <p
                        style={{
                          position:   'absolute',
                          bottom:     0,
                          left:       0,
                          right:      0,
                          padding:    '0.4rem 0.6rem',
                          background: 'rgba(5,5,5,0.8)',
                          fontFamily: 'var(--font-body)',
                          fontSize:   '0.65rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color:      'var(--color-brand-subtle)',
                        }}
                      >
                        THE IDEA
                      </p>
                    </div>
                    <div
                      style={{
                        width:      'clamp(160px, 22vw, 260px)',
                        aspectRatio: '1 / 1',
                        background: 'var(--color-brand-charcoal)',
                        overflow:   'hidden',
                        position:   'relative',
                      }}
                    >
                      <img
                        src={asset.src}
                        alt={asset.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                      <p
                        style={{
                          position:   'absolute',
                          bottom:     0,
                          left:       0,
                          right:      0,
                          padding:    '0.4rem 0.6rem',
                          background: 'rgba(5,5,5,0.8)',
                          fontFamily: 'var(--font-body)',
                          fontSize:   '0.65rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color:      'var(--color-brand-gold)',
                        }}
                      >
                        THE PIECE
                      </p>
                    </div>
                  </div>
                ) : (
                  // Standard single photo
                  <div
                    key={i}
                    style={{
                      flex:            '0 0 auto',
                      width:           'clamp(220px, 30vw, 340px)',
                      aspectRatio:     '1 / 1',
                      background:      'var(--color-brand-charcoal)',
                      overflow:        'hidden',
                      scrollSnapAlign: 'start',
                      position:        'relative',
                    }}
                  >
                    <img
                      src={asset.src}
                      alt={asset.alt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    {asset.caption && (
                      <p
                        style={{
                          position:   'absolute',
                          bottom:     0,
                          left:       0,
                          right:      0,
                          padding:    '0.5rem 0.75rem',
                          background: 'rgba(5,5,5,0.75)',
                          fontFamily: 'var(--font-body)',
                          fontSize:   '0.72rem',
                          color:      'var(--color-brand-muted)',
                          lineHeight: 1.3,
                        }}
                      >
                        {asset.caption}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Custom Pendant Module ────────────────────────────────────────────
           Compact /custom-style selector: metal → stone → type tiles.
           Reuses build-decision-header / build-decision-num / build-decision-text
           from globals.css (same pattern as CustomBuildFlow).
           ──────────────────────────────────────────────────────────────────────
           IMAGE GUIDE: To add a real 2T photo to a custom type tile, set
           imageSrc on the matching entry in CUSTOM_PENDANT_TYPES above.
           Example: imageSrc: '/assets/pendants/photo-pendant-01.jpg'
           The SVG icon fallback disappears automatically when imageSrc is set. */}
      <section
        style={{
          padding:    'clamp(2.5rem, 5vw, 4rem) 1.5rem',
          background: 'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <span className="section-eyebrow" style={{ marginBottom: '0.6rem' }}>BUILD THE PIECE</span>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.5rem, 3.5vw, 2.4rem)',
              fontWeight:   400,
              color:        'var(--color-brand-white)',
              lineHeight:   1.05,
              marginBottom: '0.5rem',
            }}
          >
            Send the photo, logo, or name.
          </p>
          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '0.875rem',
              color:        'var(--color-brand-silver)',
              lineHeight:   1.6,
              marginBottom: '2rem',
              maxWidth:     '48ch',
            }}
          >
            Send the idea — we quote before the build.
          </p>

          {/* Custom pendant type tiles — visual gateway to /custom */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap:                 '1px',
              background:          'var(--color-brand-border)',
              marginBottom:        '2rem',
            }}
          >
            {CUSTOM_PENDANT_TYPES.map((type, i) => (
              <div
                key={type.label}
                className="style-card-hover"
                style={{
                  background:    'var(--color-brand-black)',
                  border:        '1px solid var(--color-brand-border)',
                  display:       'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Visual: real photo if imageSrc set, SVG icon fallback otherwise */}
                <div
                  style={{
                    aspectRatio:    '4 / 3',
                    background:     'var(--color-brand-charcoal)',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    overflow:       'hidden',
                    padding:        type.imageSrc ? '0' : '1.25rem',
                  }}
                >
                  {type.imageSrc ? (
                    <img
                      src={type.imageSrc}
                      alt={type.imageAlt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <CustomTypeIllustration index={i} />
                  )}
                </div>
                {/* Label + description */}
                <div style={{ padding: '0.75rem 0.875rem' }}>
                  <p
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.62rem',
                      fontWeight:    700,
                      letterSpacing: '0.11em',
                      textTransform: 'uppercase',
                      color:         'var(--color-brand-gold)',
                      marginBottom:  '0.3rem',
                      opacity:       0.9,
                    }}
                  >
                    {type.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.72rem',
                      color:      'var(--color-brand-white)',
                      lineHeight: 1.45,
                      opacity:    0.72,
                    }}
                  >
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Claim note — custom only */}
          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.75rem',
              color:         'var(--color-brand-subtle)',
              letterSpacing: '0.01em',
              marginBottom:  '1.5rem',
            }}
          >
            Pittsburgh jeweler. No deposit to start. We quote before the build.
          </p>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <Link href="/custom" className="btn-primary">
              START CUSTOM PENDANT →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Active Offer slot ─────────────────────────────────────────────
           Renders nothing while HAS_ACTIVE_OFFER is false.
           Set HAS_ACTIVE_OFFER = true and populate ACTIVE_OFFER only when
           a real confirmed offer exists. */}
      {HAS_ACTIVE_OFFER && ACTIVE_OFFER !== null && (
        <section
          style={{
            padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
            borderBottom: '1px solid var(--color-brand-border)',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>SPECIAL OF THE WEEK</span>
            <div
              style={{
                padding:    'clamp(1.5rem, 4vw, 2.5rem)',
                border:     '1px solid rgba(201,168,76,0.18)',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.01) 100%)',
                position:   'relative',
                overflow:   'hidden',
              }}
            >
              <div aria-hidden="true" style={{
                position:   'absolute',
                inset:      0,
                background: 'radial-gradient(ellipse 50% 60% at 90% 20%, rgba(201,168,76,0.05) 0%, transparent 70%)',
              }} />
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--color-brand-white)', lineHeight: 1.1, marginBottom: '0.75rem', position: 'relative' }}>
                {ACTIVE_OFFER.headline}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-brand-muted)', lineHeight: 1.65, maxWidth: '46ch', marginBottom: ACTIVE_OFFER.promoTerms ? '0.75rem' : '1.5rem', position: 'relative' }}>
                {ACTIVE_OFFER.body}
              </p>
              {ACTIVE_OFFER.promoTerms && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--color-brand-subtle)', letterSpacing: '0.03em', marginBottom: '1.5rem', position: 'relative' }}>
                  {ACTIVE_OFFER.promoTerms}
                </p>
              )}
              <a href={`https://wa.me/14124524343?text=${encodeURIComponent(ACTIVE_OFFER.waMessage)}`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ position: 'relative' }}>
                {ACTIVE_OFFER.ctaLabel}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* All Collections */}
      <div style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link
            href="/collections"
            className="nav-link-footer"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', letterSpacing: '0.03em' }}
          >
            ← All Collections
          </Link>
        </div>
      </div>

    </main>
  )
}
