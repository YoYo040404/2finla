import type { Metadata } from 'next'
import Link from 'next/link'

// ── Types ─────────────────────────────────────────────────────────────────────

type WatchDirection = {
  label:       string
  eyebrow:     string
  description: string
  specs:       string[]
  imageSrc:    string | null
  imageAlt:    string
  waMessage:   string
  accentRolex?: boolean  // adds gold accent treatment for the Rolex card
}

type FeaturedWatch = {
  label:      string   // e.g. "BUST-DOWN SUBMARINER DIRECTION"
  descriptor: string   // claim-safe, no authentication/factory/grade claims
  imageSrc:   string   // path under /public/assets/ — real verified photo required
  imageAlt:   string
  waMessage:  string
}

type WatchProofAsset = {
  src:      string
  alt:      string
  caption?: string
}

// ── Null-gated proof slots ────────────────────────────────────────────────────
// Populate only with real, verified watch photos and verified copy.
// When null / empty, nothing renders.

const heroWatchImageSrc: string | null = null  // set to real iced-out watch path under /public/assets/watches/
const FEATURED_WATCH: FeaturedWatch | null = null
const WATCH_PROOF_ASSETS: WatchProofAsset[] = []

// ── Watch Direction Cards ─────────────────────────────────────────────────────
// These are inquiry directions — not fake inventory.
// imageSrc is null until a real verified watch photo is ready.
// To activate: set imageSrc to the path under /public/assets/watches/

const WATCH_DIRECTIONS: WatchDirection[] = [
  {
    label:       'BUST-DOWN',
    eyebrow:     'FULL ICE DIRECTION',
    description: 'Stones on the case, bracelet, and bezel. Built to stop the room.',
    specs: [
      'Full case, bracelet, and bezel stone-set direction',
      'Stone details confirmed per piece',
    ],
    imageSrc:  null,
    imageAlt:  'Bust-down watch — fully iced case, bracelet, and bezel',
    waMessage: "Hey 2T — I'm looking for a bust-down watch. Full ice, stones everywhere. What do you have available?",
  },
  {
    label:       'ICED-OUT',
    eyebrow:     'DIAMOND BEZEL DIRECTION',
    description: 'Diamond bezel. Stone-set dial. Wrist shine that hits.',
    specs: [
      'Bezel and dial stone directions available',
      'Stone setting confirmed per piece',
    ],
    imageSrc:  null,
    imageAlt:  'Iced-out watch — diamond bezel and stone-set dial',
    waMessage: "Hey 2T — I'm looking at iced-out watches. Diamond bezel direction. What do you have available?",
  },
  {
    label:       'REAL ROLEX WATCHES',
    eyebrow:     'VENDOR-SOURCED',
    description: 'Rolex may be available through trusted vendor and dealer sources.',
    specs: [
      'Source and condition confirmed before purchase',
      '2T is not an authorized Rolex dealer',
    ],
    imageSrc:    null,
    imageAlt:    'Rolex watch direction — vendor-sourced, details confirmed per piece',
    waMessage:   "Hey 2T — I'm asking about real Rolex watches. What do you have available through your sources?",
    accentRolex: true,
  },
  {
    label:       'GOLD / TWO-TONE',
    eyebrow:     'METAL DIRECTION',
    description: 'Gold case and bracelet. Two-tone metal. Wrist presence — clean or iced.',
    specs: [
      'Full gold or two-tone direction',
      'Metal and stone details confirmed per piece',
    ],
    imageSrc:  null,
    imageAlt:  'Gold two-tone watch — metal direction',
    waMessage: "Hey 2T — I'm looking at gold or two-tone watches. Iced or clean. What do you have available?",
  },
  {
    label:       'STONE-SET DIAL',
    eyebrow:     'DIAL DIRECTION',
    description: 'Stones on the dial face. Custom hour markers. A different kind of shine.',
    specs: [
      'Diamond dial or stone marker directions may be available',
      'Stone type confirmed per piece',
    ],
    imageSrc:  null,
    imageAlt:  'Watch with stone-set dial — diamond hour markers',
    waMessage: "Hey 2T — I'm looking at watches with stone-set dials. What directions do you have available?",
  },
  {
    label:       'ASK WHAT\'S AVAILABLE',
    eyebrow:     'OPEN INQUIRY',
    description: 'Tell us the wrist, the budget range, and the look. We\'ll tell you what\'s in.',
    specs: [
      'Any iced-out or bust-down direction',
      'Availability confirmed before anything moves',
    ],
    imageSrc:  null,
    imageAlt:  'Open watch inquiry — text 2T and ask what is available',
    waMessage: "Hey 2T — I'm looking for a watch. What iced-out or bust-down directions do you have? I'll tell you the budget range.",
  },
]

// ── What Gets Confirmed ────────────────────────────────────────────────────────

const CONFIRMED_ITEMS = [
  { label: 'AVAILABILITY',   body: 'What is in right now — not what was listed last week.' },
  { label: 'SOURCE',         body: 'Where the watch comes from. Vendor and dealer sourcing confirmed.' },
  { label: 'CONDITION',      body: 'New, pre-owned, or modified — stated before purchase.' },
  { label: 'MODEL / REF',    body: 'Reference, case size, bracelet, dial — confirmed per piece.' },
  { label: 'STONES',         body: 'Stone type, setting, and location. No blanket claims.' },
  { label: 'MODIFICATIONS',  body: 'Aftermarket, custom, or factory origin — clarified per watch.' },
  { label: 'PRICING',        body: 'Confirmed before you commit. No surprises.' },
]

// ── WhatsApp ──────────────────────────────────────────────────────────────────

const WA_WATCHES =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20watch.%20What%20iced-out%20or%20bust-down%20directions%20do%20you%20have%3F'

const WA_AVAILABLE =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20watches%20do%20you%20have%20available%20right%20now%3F%20Iced-out%2C%20bust-down%2C%20or%20Rolex%20direction.'

function waUrl(msg: string): string {
  return `https://wa.me/14124524343?text=${encodeURIComponent(msg)}`
}

// ── SEO ───────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: '2T Jewelers | Iced-Out & Bust-Down Watches — Pittsburgh, PA',
  description:
    'Iced-out and bust-down watches in Pittsburgh, PA. Real watches including Rolex may be available through trusted vendor sources. Stone details confirmed per piece. Text 2T.',
}

// ── Confirm Icons ─────────────────────────────────────────────────────────────
// Inline SVG per confirmed item. Gold/ice line style. No external packages.

function ConfirmIcon({ index }: { index: number }) {
  const G  = 'rgba(201,168,76,0.82)'
  const IC = 'rgba(200,230,255,0.75)'
  const s  = {
    width: 17 as const, height: 17 as const,
    fill: 'none' as const, flexShrink: 0 as const, marginTop: '1px' as const,
  }

  switch (index) {
    // AVAILABILITY — clock face with hands
    case 0:
      return (
        <svg viewBox="0 0 18 18" aria-hidden="true" {...s}>
          <circle cx="9" cy="9" r="6.5" stroke={G} strokeWidth="1.2"/>
          {[0,90,180,270].map((deg) => {
            const r = deg * Math.PI / 180
            return <line key={deg}
              x1={9 + 5.2 * Math.cos(r)} y1={9 + 5.2 * Math.sin(r)}
              x2={9 + 6.3 * Math.cos(r)} y2={9 + 6.3 * Math.sin(r)}
              stroke={G} strokeWidth="1.1" strokeLinecap="round"
            />
          })}
          <line x1="9" y1="9" x2="9" y2="5" stroke={IC} strokeWidth="1.3" strokeLinecap="round"/>
          <line x1="9" y1="9" x2="12" y2="10.5" stroke={IC} strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="9" cy="9" r="0.9" fill={G}/>
        </svg>
      )
    // SOURCE — two nodes, connector line
    case 1:
      return (
        <svg viewBox="0 0 18 18" aria-hidden="true" {...s}>
          <circle cx="4.5" cy="9" r="2.5" stroke={G} strokeWidth="1.2"/>
          <circle cx="13.5" cy="9" r="2.5" stroke={G} strokeWidth="1.2"/>
          <line x1="7" y1="9" x2="11" y2="9" stroke={IC} strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      )
    // CONDITION — circle + checkmark
    case 2:
      return (
        <svg viewBox="0 0 18 18" aria-hidden="true" {...s}>
          <circle cx="9" cy="9" r="6.5" stroke={G} strokeWidth="1.2"/>
          <polyline
            points="5.5,9.5 7.5,11.5 12.5,6.5"
            stroke={IC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      )
    // MODEL/REF — document with lines
    case 3:
      return (
        <svg viewBox="0 0 18 18" aria-hidden="true" {...s}>
          <rect x="3.5" y="1.5" width="11" height="15" rx="1.5" stroke={G} strokeWidth="1.2"/>
          <line x1="6" y1="6"   x2="12" y2="6"   stroke={IC} strokeWidth="1.1" strokeLinecap="round"/>
          <line x1="6" y1="9"   x2="12" y2="9"   stroke={IC} strokeWidth="1.1" strokeLinecap="round"/>
          <line x1="6" y1="12"  x2="9.5" y2="12" stroke={IC} strokeWidth="1.1" strokeLinecap="round" opacity={0.55}/>
        </svg>
      )
    // STONES — diamond shape
    case 4:
      return (
        <svg viewBox="0 0 18 18" aria-hidden="true" {...s}>
          <path d="M9,2 l6.5,5.5 -6.5,8.5 -6.5,-8.5 z" stroke={IC} strokeWidth="1.3" strokeLinejoin="round"/>
          <line x1="2.5" y1="7.5" x2="15.5" y2="7.5" stroke={IC} strokeWidth="0.9" opacity={0.45}/>
          <circle cx="9" cy="9.5" r="1.8" fill={IC} opacity={0.2}/>
        </svg>
      )
    // MODIFICATIONS — gear with 6 spokes
    case 5:
      return (
        <svg viewBox="0 0 18 18" aria-hidden="true" {...s}>
          <circle cx="9" cy="9" r="3" stroke={G} strokeWidth="1.2"/>
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = deg * Math.PI / 180
            return <line key={deg}
              x1={9 + 4.2 * Math.cos(rad)} y1={9 + 4.2 * Math.sin(rad)}
              x2={9 + 6.8 * Math.cos(rad)} y2={9 + 6.8 * Math.sin(rad)}
              stroke={G} strokeWidth="1.6" strokeLinecap="round"
            />
          })}
        </svg>
      )
    // PRICING — price tag
    case 6:
    default:
      return (
        <svg viewBox="0 0 18 18" aria-hidden="true" {...s}>
          <path d="M2.5,2.5 h7.5 l5.5,6.5 -5.5,6.5 H2.5 z" stroke={G} strokeWidth="1.2" strokeLinejoin="round"/>
          <circle cx="5.5" cy="9" r="1.5" stroke={IC} strokeWidth="1.1"/>
        </svg>
      )
  }
}

// ── Hero Watch Visual ─────────────────────────────────────────────────────────
// Large editorial watch illustration — renders when heroWatchImageSrc is null.
// Portrait format, dense iced-out bezel, stone bracelet, sparkle bursts.

function HeroWatchVisual() {
  const IC = 'rgba(200,230,255,0.88)'
  const IB = 'rgba(200,230,255,0.62)'
  const IF = 'rgba(200,230,255,0.36)'
  const cx = 130, cy = 178, R = 80

  return (
    <div style={{
      width: '100%', height: '100%',
      position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 65% 55% at 50% 52%, rgba(200,230,255,0.09) 0%, transparent 68%)',
        pointerEvents: 'none',
      }}/>
      <svg viewBox="0 0 260 340" fill="none" aria-hidden="true"
        style={{ width: '100%', maxWidth: '360px', height: 'auto' }}>

        {/* Stone bracelet top — 6 links */}
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={i}>
            <rect x={114} y={10 + i * 11} width={32} height={9} rx={1.5}
              stroke={IB} strokeWidth={0.9} opacity={0.45 + i * 0.07}/>
            {[116, 122, 128, 134, 140].map((x) => (
              <circle key={x} cx={x} cy={14.5 + i * 11} r={1.4} fill={IC} opacity={0.55}/>
            ))}
          </g>
        ))}
        {/* Top lug */}
        <rect x={108} y={76} width={44} height={22} rx={2}
          stroke={IB} strokeWidth={1.4} fill="none" opacity={0.55}/>

        {/* Outer case ring */}
        <circle cx={cx} cy={cy} r={R + 5} stroke={IB} strokeWidth={2.2}/>

        {/* Outer bezel — 44 stones */}
        {Array.from({ length: 44 }).map((_, i) => {
          const a = (i * (360 / 44) - 90) * Math.PI / 180
          return <circle key={i}
            cx={cx + (R + 1) * Math.cos(a)} cy={cy + (R + 1) * Math.sin(a)}
            r={4.2} fill={IC} opacity={0.82}/>
        })}

        {/* Mid bezel — 32 stones */}
        {Array.from({ length: 32 }).map((_, i) => {
          const a = (i * (360 / 32) - 90) * Math.PI / 180
          return <circle key={i}
            cx={cx + (R - 8) * Math.cos(a)} cy={cy + (R - 8) * Math.sin(a)}
            r={2.8} fill={IC} opacity={0.56}/>
        })}

        {/* Inner bezel ring */}
        <circle cx={cx} cy={cy} r={R - 18} stroke={IF} strokeWidth={1}/>

        {/* Dial */}
        <circle cx={cx} cy={cy} r={R - 21}
          fill="rgba(200,230,255,0.022)" stroke={IF} strokeWidth={0.4} opacity={0.5}/>

        {/* Hour markers — 12 */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 - 90) * Math.PI / 180
          const r = R - 30
          return <circle key={i}
            cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)}
            r={i % 3 === 0 ? 5 : 3} fill={IC} opacity={i % 3 === 0 ? 0.95 : 0.65}/>
        })}

        {/* Sparkle bursts — 4 cardinal points */}
        {([
          [cx, cy - R - 5],
          [cx + R + 5, cy],
          [cx, cy + R + 5],
          [cx - R - 5, cy],
        ] as [number, number][]).map(([bx, by], i) => (
          <g key={i} opacity={0.78}>
            <line x1={bx} y1={by - 8}  x2={bx} y2={by - 13} stroke={IC} strokeWidth={1.8}/>
            <line x1={bx} y1={by + 8}  x2={bx} y2={by + 13} stroke={IC} strokeWidth={1.8}/>
            <line x1={bx - 8} y1={by}  x2={bx - 13} y2={by} stroke={IC} strokeWidth={1.8}/>
            <line x1={bx + 8} y1={by}  x2={bx + 13} y2={by} stroke={IC} strokeWidth={1.8}/>
          </g>
        ))}

        {/* Watch hands */}
        <line x1={cx} y1={cy} x2={cx} y2={cy - (R - 33)}
          stroke={IC} strokeWidth={3} strokeLinecap="round"/>
        <line x1={cx} y1={cy} x2={cx + (R - 38)} y2={cy + 14}
          stroke={IB} strokeWidth={2.4} strokeLinecap="round"/>
        <circle cx={cx} cy={cy} r={5} fill={IC} opacity={0.9}/>
        <circle cx={cx} cy={cy} r={2.5} fill="rgba(6,6,6,0.95)"/>

        {/* Crown at 3 */}
        <rect x={cx + R + 10} y={cy - 8} width={18} height={16} rx={4}
          stroke={IB} strokeWidth={2}/>

        {/* Bottom lug */}
        <rect x={108} y={cy + R + 5} width={44} height={22} rx={2}
          stroke={IB} strokeWidth={1.4} fill="none" opacity={0.55}/>

        {/* Stone bracelet bottom — 5 links */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i}>
            <rect x={114} y={287 + i * 10} width={32} height={8} rx={1.5}
              stroke={IB} strokeWidth={0.9} opacity={0.75 - i * 0.08}/>
            {[116, 122, 128, 134, 140].map((x) => (
              <circle key={x} cx={x} cy={291 + i * 10} r={1.4} fill={IC} opacity={0.52}/>
            ))}
          </g>
        ))}

        {/* Micro sparkles — scattered */}
        {([
          [105, 133], [158, 148], [118, 220], [147, 215],
        ] as [number, number][]).map(([sx, sy], i) => (
          <g key={i} opacity={0.28}>
            <line x1={sx} y1={sy - 5} x2={sx} y2={sy + 5} stroke={IC} strokeWidth={0.9}/>
            <line x1={sx - 5} y1={sy} x2={sx + 5} y2={sy} stroke={IC} strokeWidth={0.9}/>
          </g>
        ))}
      </svg>
    </div>
  )
}

// ── Watch Illustrations ───────────────────────────────────────────────────────
// SVG fallback per card — renders when imageSrc is null.
// To replace: set imageSrc on the matching WATCH_DIRECTIONS entry.

function WatchIllustration({ index }: { index: number }) {
  const G  = 'rgba(201,168,76,0.82)'
  const GF = 'rgba(201,168,76,0.32)'
  const GB = 'rgba(201,168,76,0.55)'
  const IC = 'rgba(200,230,255,0.75)'
  const IF = 'rgba(200,230,255,0.38)'
  const IB = 'rgba(200,230,255,0.55)'
  const base = { width: '100%' as const, height: '100%' as const, fill: 'none' as const }

  switch (index) {

    // ── 0: Bust-Down — stones on everything ─────────────────────────────────
    case 0:
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          {/* Stone-covered bracelet top */}
          {Array.from({ length: 7 }).map((_, i) => (
            <g key={i}>
              <rect x="89" y={9 + i * 4} width="42" height="3.5" rx="1" stroke={IB} strokeWidth="0.8" opacity={0.6 + i * 0.06}/>
              {[92, 100, 108, 116, 124].map((x) => (
                <circle key={x} cx={x} cy={10.5 + i * 4} r="1.3" fill={IC} opacity="0.65"/>
              ))}
            </g>
          ))}
          {/* Case outer ring — thick ice */}
          <circle cx="110" cy="98" r="54" stroke={IC} strokeWidth="2.5"/>
          {/* Dense outer bezel — 36 stones */}
          {Array.from({ length: 36 }).map((_, i) => {
            const a = (i * 10 - 90) * Math.PI / 180
            const r = 50
            return <circle key={i} cx={110 + r * Math.cos(a)} cy={98 + r * Math.sin(a)} r="3.5" fill={IC} opacity="0.75"/>
          })}
          {/* Mid bezel ring — 28 stones */}
          {Array.from({ length: 28 }).map((_, i) => {
            const a = (i * (360 / 28) - 90) * Math.PI / 180
            const r = 43
            return <circle key={i} cx={110 + r * Math.cos(a)} cy={98 + r * Math.sin(a)} r="2.5" fill={IC} opacity="0.55"/>
          })}
          {/* Inner bezel — 20 stones */}
          {Array.from({ length: 20 }).map((_, i) => {
            const a = (i * 18 - 90) * Math.PI / 180
            const r = 37
            return <circle key={i} cx={110 + r * Math.cos(a)} cy={98 + r * Math.sin(a)} r="1.8" fill={IC} opacity="0.4"/>
          })}
          {/* Dial — stone markers */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 - 90) * Math.PI / 180
            const r = 27
            return <circle key={i} cx={110 + r * Math.cos(a)} cy={98 + r * Math.sin(a)} r={i % 3 === 0 ? 3.5 : 2.2} fill={IC} opacity={i % 3 === 0 ? 0.9 : 0.55}/>
          })}
          {/* Sparkle bursts — 4 positions */}
          {[[110, 44], [156, 98], [110, 152], [64, 98]].map(([cx, cy], i) => (
            <g key={i} opacity="0.7">
              <line x1={cx} y1={cy - 7} x2={cx} y2={cy - 11} stroke={IC} strokeWidth="1.4"/>
              <line x1={cx} y1={cy + 7} x2={cx} y2={cy + 11} stroke={IC} strokeWidth="1.4"/>
              <line x1={cx - 7} y1={cy} x2={cx - 11} y2={cy} stroke={IC} strokeWidth="1.4"/>
              <line x1={cx + 7} y1={cy} x2={cx + 11} y2={cy} stroke={IC} strokeWidth="1.4"/>
            </g>
          ))}
          {/* Hands */}
          <line x1="110" y1="98" x2="110" y2="74" stroke={IC} strokeWidth="2" strokeLinecap="round"/>
          <line x1="110" y1="98" x2="132" y2="106" stroke={IB} strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="110" cy="98" r="3" fill={IC}/>
          {/* Stone bracelet bottom */}
          {Array.from({ length: 7 }).map((_, i) => (
            <g key={i}>
              <rect x="89" y={126 + i * 4} width="42" height="3.5" rx="1" stroke={IB} strokeWidth="0.8"/>
              {[92, 100, 108, 116, 124].map((x) => (
                <circle key={x} cx={x} cy={127.5 + i * 4} r="1.3" fill={IC} opacity="0.65"/>
              ))}
            </g>
          ))}
        </svg>
      )

    // ── 1: Iced-Out — diamond bezel + stone dial ─────────────────────────────
    case 1:
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          {/* Bracelet links top */}
          <rect x="90" y="9"  width="40" height="16" rx="3" stroke={IB} strokeWidth="1.5"/>
          <line x1="90" y1="17" x2="130" y2="17" stroke={IF} strokeWidth="0.8"/>
          {/* Case ring */}
          <circle cx="110" cy="97" r="50" stroke={IC} strokeWidth="1.8"/>
          {/* Bezel stones — 28 stones */}
          {Array.from({ length: 28 }).map((_, i) => {
            const a = (i * (360 / 28) - 90) * Math.PI / 180
            const r = 46
            return <circle key={i} cx={110 + r * Math.cos(a)} cy={97 + r * Math.sin(a)} r="4" fill={IC} stroke={IF} strokeWidth="0.8"/>
          })}
          {/* Inner dial ring */}
          <circle cx="110" cy="97" r="33" stroke={IF} strokeWidth="0.8"/>
          {/* Hour marker stones — 12 positions */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 - 90) * Math.PI / 180
            const r = 28
            return (
              <circle key={i}
                cx={110 + r * Math.cos(a)} cy={97 + r * Math.sin(a)}
                r={i % 3 === 0 ? 3.5 : 2} fill={IC} opacity={i % 3 === 0 ? 0.9 : 0.6}
              />
            )
          })}
          {/* Sparkle at 12 */}
          <line x1="110" y1="58" x2="110" y2="53" stroke={IC} strokeWidth="1.3" opacity="0.8"/>
          <line x1="106" y1="57" x2="114" y2="57" stroke={IC} strokeWidth="1.3" opacity="0.5"/>
          {/* Hands */}
          <line x1="110" y1="97" x2="110" y2="72" stroke={IC} strokeWidth="2" strokeLinecap="round"/>
          <line x1="110" y1="97" x2="131" y2="105" stroke={IB} strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="110" cy="97" r="3" fill={IC}/>
          {/* Crown at 3 */}
          <rect x="157" y="93" width="10" height="8" rx="2" stroke={IB} strokeWidth="1.2"/>
          {/* Bracelet bottom */}
          <rect x="90" y="145" width="40" height="16" rx="3" stroke={IB} strokeWidth="1.5"/>
          <line x1="90" y1="153" x2="130" y2="153" stroke={IF} strokeWidth="0.8"/>
        </svg>
      )

    // ── 2: Rolex direction — round watch face, gold accent ──────────────────
    case 2:
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          {/* Bracelet top */}
          <rect x="90" y="8"  width="40" height="20" rx="3" stroke={GB} strokeWidth="1.5"/>
          <line x1="90" y1="18" x2="130" y2="18" stroke={GF} strokeWidth="1"/>
          {/* Case outer */}
          <circle cx="110" cy="97" r="50" stroke={G} strokeWidth="2.2"/>
          {/* Bezel fluting — 36 segments */}
          {Array.from({ length: 36 }).map((_, i) => {
            const a  = (i * 10 - 90) * Math.PI / 180
            const a2 = ((i + 0.5) * 10 - 90) * Math.PI / 180
            const r1 = 43, r2 = 49
            return (
              <line key={i}
                x1={110 + r1 * Math.cos(a)} y1={97 + r1 * Math.sin(a)}
                x2={110 + r2 * Math.cos(a2)} y2={97 + r2 * Math.sin(a2)}
                stroke={GB} strokeWidth="1.2" opacity="0.7"
              />
            )
          })}
          {/* Bezel ring */}
          <circle cx="110" cy="97" r="41" stroke={GF} strokeWidth="0.8"/>
          {/* Dial */}
          <circle cx="110" cy="97" r="33" stroke={GF} strokeWidth="0.6" opacity="0.5"/>
          {/* Hour markers */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 - 90) * Math.PI / 180
            const r1 = 27, r2 = i % 3 === 0 ? 38 : 34
            return (
              <line key={i}
                x1={110 + r1 * Math.cos(a)} y1={97 + r1 * Math.sin(a)}
                x2={110 + r2 * Math.cos(a)} y2={97 + r2 * Math.sin(a)}
                stroke={G} strokeWidth={i % 3 === 0 ? 2.2 : 1.3}
              />
            )
          })}
          {/* Hands */}
          <line x1="110" y1="97" x2="110" y2="63" stroke={G} strokeWidth="2" strokeLinecap="round"/>
          <line x1="110" y1="97" x2="132" y2="105" stroke={GB} strokeWidth="1.6" strokeLinecap="round"/>
          {/* Crown at 3 */}
          <rect x="157" y="93" width="11" height="8" rx="2" stroke={G} strokeWidth="1.4"/>
          <circle cx="110" cy="97" r="3" fill={G}/>
          {/* Bracelet bottom */}
          <rect x="90" y="142" width="40" height="20" rx="3" stroke={GB} strokeWidth="1.5"/>
          <line x1="90" y1="152" x2="130" y2="152" stroke={GF} strokeWidth="1"/>
        </svg>
      )

    // ── 3: Gold / Two-Tone — metal direction ──────────────────────────────────
    case 3:
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          {/* Two-tone bracelet top — alternating gold/ice */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="90" y={8 + i * 6} width="20" height="5" rx="1" fill={GF} stroke={G} strokeWidth="0.9"/>
              <rect x="110" y={8 + i * 6} width="20" height="5" rx="1" fill="rgba(200,230,255,0.06)" stroke={IB} strokeWidth="0.9"/>
            </g>
          ))}
          {/* Case — two-tone halves */}
          <path d="M 110 47 A 50 50 0 0 1 160 97 L 110 97 Z" fill={GF} stroke={G} strokeWidth="1.6"/>
          <path d="M 160 97 A 50 50 0 0 1 110 147 L 110 97 Z" fill="rgba(200,230,255,0.05)" stroke={IB} strokeWidth="1.6"/>
          <path d="M 110 147 A 50 50 0 0 1 60 97 L 110 97 Z" fill="rgba(200,230,255,0.05)" stroke={IB} strokeWidth="1.6"/>
          <path d="M 60 97 A 50 50 0 0 1 110 47 L 110 97 Z" fill={GF} stroke={G} strokeWidth="1.6"/>
          {/* Inner dial */}
          <circle cx="110" cy="97" r="32" stroke={G} strokeWidth="1.3"/>
          {/* Hour markers */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a      = (i * 30 - 90) * Math.PI / 180
            const r1     = 24, r2 = i % 3 === 0 ? 31 : 28
            const isGold = i >= 9 || i <= 0
            return (
              <line key={i}
                x1={110 + r1 * Math.cos(a)} y1={97 + r1 * Math.sin(a)}
                x2={110 + r2 * Math.cos(a)} y2={97 + r2 * Math.sin(a)}
                stroke={isGold ? G : IB} strokeWidth={i % 3 === 0 ? 2 : 1.2}
              />
            )
          })}
          {/* Hands */}
          <line x1="110" y1="97" x2="110" y2="69" stroke={G} strokeWidth="1.8"/>
          <line x1="110" y1="97" x2="130" y2="105" stroke={IB} strokeWidth="1.4"/>
          <circle cx="110" cy="97" r="2.8" fill={G}/>
          {/* Crown */}
          <rect x="157" y="93" width="10" height="8" rx="2" stroke={GB} strokeWidth="1.2"/>
          {/* Two-tone bracelet bottom */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="90" y={122 + i * 6} width="20" height="5" rx="1" fill={GF} stroke={G} strokeWidth="0.9"/>
              <rect x="110" y={122 + i * 6} width="20" height="5" rx="1" fill="rgba(200,230,255,0.06)" stroke={IB} strokeWidth="0.9"/>
            </g>
          ))}
        </svg>
      )

    // ── 4: Stone-Set Dial — dial focus ────────────────────────────────────────
    case 4:
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          {/* Clean bracelet */}
          <rect x="90" y="8"  width="40" height="18" rx="3" stroke={GB} strokeWidth="1.5"/>
          <line x1="90" y1="17" x2="130" y2="17" stroke={GF} strokeWidth="0.8"/>
          {/* Case */}
          <circle cx="110" cy="97" r="50" stroke={G} strokeWidth="2"/>
          <circle cx="110" cy="97" r="43" stroke={GF} strokeWidth="0.7"/>
          {/* Dial — fully stone-set background */}
          <circle cx="110" cy="97" r="37" fill="rgba(200,230,255,0.04)" stroke={IC} strokeWidth="1"/>
          {/* Dense dial stones grid */}
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => {
              const x = 89 + col * 7
              const y = 76 + row * 7
              const dx = x - 110, dy = y - 97
              if (dx * dx + dy * dy > 34 * 34) return null
              return <circle key={`${row}-${col}`} cx={x} cy={y} r="2.2" fill={IC} opacity="0.35"/>
            })
          )}
          {/* Prominent hour markers */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 - 90) * Math.PI / 180
            const r = 32
            return (
              <circle key={i}
                cx={110 + r * Math.cos(a)} cy={97 + r * Math.sin(a)}
                r={i % 3 === 0 ? 4 : 2.5} fill={IC} opacity={i % 3 === 0 ? 1 : 0.7}
                stroke={i % 3 === 0 ? IF : 'none'} strokeWidth="0.8"
              />
            )
          })}
          {/* Sparkle at 12 */}
          <line x1="110" y1="57" x2="110" y2="51" stroke={IC} strokeWidth="1.5"/>
          <line x1="106" y1="56" x2="114" y2="56" stroke={IC} strokeWidth="1" opacity="0.6"/>
          {/* Hands */}
          <line x1="110" y1="97" x2="110" y2="71" stroke={IC} strokeWidth="2" strokeLinecap="round"/>
          <line x1="110" y1="97" x2="131" y2="106" stroke={IB} strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="110" cy="97" r="3" fill={IC}/>
          {/* Crown */}
          <rect x="157" y="93" width="10" height="8" rx="2" stroke={GF} strokeWidth="1.2"/>
          {/* Bracelet bottom */}
          <rect x="90" y="143" width="40" height="18" rx="3" stroke={GB} strokeWidth="1.5"/>
          <line x1="90" y1="152" x2="130" y2="152" stroke={GF} strokeWidth="0.8"/>
        </svg>
      )

    // ── 5: Ask What's Available — target / inquiry ────────────────────────────
    case 5:
    default:
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          {/* Ghost watch */}
          <circle cx="110" cy="87" r="50" stroke={GF} strokeWidth="1" strokeDasharray="6 5" opacity="0.35"/>
          <circle cx="110" cy="87" r="36" stroke={GF} strokeWidth="0.7" strokeDasharray="3 5" opacity="0.2"/>
          {/* Target crosshair */}
          <line x1="110" y1="50"  x2="110" y2="58"  stroke={G} strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
          <line x1="110" y1="116" x2="110" y2="124" stroke={G} strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
          <line x1="73"  y1="87"  x2="81"  y2="87"  stroke={G} strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
          <line x1="139" y1="87"  x2="147" y2="87"  stroke={G} strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
          {/* Target rings */}
          <circle cx="110" cy="87" r="15" stroke={G} strokeWidth="1.4" opacity="0.5"/>
          <circle cx="110" cy="87" r="6"  fill={G} opacity="0.6"/>
          {/* Diagonal scan lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i}
              x1={78 + i * 9} y1="60" x2={58 + i * 9} y2="114"
              stroke={GF} strokeWidth="0.5" opacity="0.12"
            />
          ))}
          {/* Ghost bracelet */}
          <rect x="90" y="8"   width="40" height="16" rx="3" stroke={GF} strokeWidth="0.8" opacity="0.3"/>
          <rect x="90" y="146" width="40" height="16" rx="3" stroke={GF} strokeWidth="0.8" opacity="0.3"/>
        </svg>
      )
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WatchesPage() {
  return (
    <main style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingTop: '106px' }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          position:     'relative',
          padding:      'clamp(3.5rem, 8vw, 6rem) 1.5rem clamp(3rem, 7vw, 5rem)',
          borderBottom: '1px solid var(--color-brand-border)',
          overflow:     'hidden',
        }}
      >
        {/* Ice-blue ambient glow — deep left */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 75% 65% at 0% 55%, rgba(200,230,255,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        {/* Cold glow — top right corner */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 50% 50% at 100% 0%, rgba(200,230,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 3.5rem)', flexWrap: 'wrap', alignItems: 'center' }}>

            {/* Left: text */}
            <div style={{ flex: '1 1 340px', minWidth: 0 }}>
              <span className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>WATCHES</span>

              <h1
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(3.2rem, 7vw, 6rem)',
                  fontWeight:    600,
                  lineHeight:    0.92,
                  letterSpacing: '-0.03em',
                  color:         'var(--color-brand-white)',
                  marginBottom:  '1.25rem',
                }}
              >
                WATCHES{' '}<br />
                <em style={{ color: 'var(--color-ice-blue)', fontStyle: 'italic' }}>THAT HIT.</em>
              </h1>

              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(1.1rem, 2.3vw, 1.5rem)',
                  fontStyle:    'italic',
                  color:        '#a8cce0',
                  marginBottom: '1.5rem',
                  lineHeight:   1.2,
                }}
              >
                Iced-out. Bust-down. Diamond-covered.
              </p>

              {/* Two trust lines — clean, not a list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {[
                  'Real iced-out and bust-down watches available — diamond-covered and stone-set directions.',
                  'Rolex may be available through trusted vendor sources. All details confirmed per piece.',
                ].map((line) => (
                  <p
                    key={line}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   'clamp(0.84rem, 1.4vw, 0.9rem)',
                      color:      '#c0ccd8',
                      lineHeight: 1.6,
                      display:    'flex',
                      gap:        '0.5rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ color: 'var(--color-ice-blue)', flexShrink: 0, fontSize: '0.65rem', marginTop: '0.38em', opacity: 0.65 }}
                    >
                      ◆
                    </span>
                    {line}
                  </p>
                ))}
              </div>

              {/* Disclosure */}
              <p
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.72rem',
                  color:         'rgba(180,175,165,0.6)',
                  letterSpacing: '0.015em',
                  marginBottom:  '1.875rem',
                  paddingLeft:   '0.875rem',
                  borderLeft:    '1px solid rgba(201,168,76,0.2)',
                  lineHeight:    1.5,
                }}
              >
                2T is not an authorized Rolex dealer. Condition, source, and details confirmed per piece.
              </p>

              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <a href={WA_WATCHES} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  TEXT 2T ABOUT WATCHES →
                </a>
                <a href={WA_AVAILABLE} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                  ASK WHAT&rsquo;S AVAILABLE →
                </a>
              </div>
            </div>

            {/* Right: hero watch visual */}
            <div
              style={{
                flex:        '0 0 clamp(240px, 38%, 380px)',
                minHeight:   '320px',
                display:     'flex',
                alignItems:  'center',
                justifyContent: 'center',
                position:    'relative',
              }}
            >
              {heroWatchImageSrc ? (
                <img
                  src={heroWatchImageSrc}
                  alt="Iced-out bust-down watch"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <HeroWatchVisual />
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Featured Watch slot ──────────────────────────────────────────────
           Renders nothing while FEATURED_WATCH is null.
           To activate: set FEATURED_WATCH to a real verified watch object above.
           imageSrc must point to a real verified photo under /public/assets/ */}
      {FEATURED_WATCH !== null && (
        <section
          style={{
            padding:      'clamp(3rem, 6vw, 4.5rem) 1.5rem',
            borderBottom: '1px solid var(--color-brand-border)',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>FEATURED</span>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div
                style={{
                  flex:        '0 0 auto',
                  width:       'clamp(200px, 40%, 360px)',
                  aspectRatio: '1 / 1',
                  background:  'var(--color-brand-charcoal)',
                  border:      '1px solid var(--color-brand-border)',
                  overflow:    'hidden',
                }}
              >
                <img
                  src={FEATURED_WATCH.imageSrc}
                  alt={FEATURED_WATCH.imageAlt}
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
                  {FEATURED_WATCH.label}
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
                  {FEATURED_WATCH.descriptor}
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
                  Availability, condition, and details confirmed per piece.
                </p>
                <a
                  href={waUrl(FEATURED_WATCH.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  TEXT 2T ABOUT THIS WATCH →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Watch Directions ──────────────────────────────────────────────
           Inquiry direction cards — not fake inventory.
           SVG illustration renders when imageSrc is null.
           To add a real photo: set imageSrc on the matching WATCH_DIRECTIONS entry
           to a path under /public/assets/watches/ */}
      <section
        style={{
          padding:      'clamp(2rem, 4vw, 3rem) 1.5rem clamp(3rem, 6vw, 4.5rem)',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WATCH DIRECTIONS</span>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.5rem, 3.5vw, 2.6rem)',
              fontWeight:   400,
              color:        'var(--color-brand-white)',
              lineHeight:   1.1,
              marginBottom: '0.75rem',
            }}
          >
            Ask what&rsquo;s available.
          </p>
          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '0.875rem',
              color:        'var(--color-brand-muted)',
              lineHeight:   1.65,
              maxWidth:     '54ch',
              marginBottom: '2rem',
            }}
          >
            These are inquiry directions — not fake inventory. Tell us the direction, budget range, and look. We confirm availability before anything moves.
          </p>

          {/* Direction card grid */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap:                 '1px',
              background:          'var(--color-brand-border)',
              marginBottom:        '1.5rem',
            }}
          >
            {WATCH_DIRECTIONS.map((dir, i) => (
              <div
                key={dir.label}
                style={{
                  background:    dir.accentRolex ? 'linear-gradient(160deg, #0c0a05 0%, #070604 100%)' : 'var(--color-brand-black)',
                  display:       'flex',
                  flexDirection: 'column',
                  position:      'relative',
                }}
              >
                {/* Visual area */}
                <div
                  style={{
                    width:          '100%',
                    aspectRatio:    '4 / 3',
                    background:     dir.accentRolex
                      ? 'linear-gradient(155deg, #100d06 0%, #080704 100%)'
                      : 'var(--color-brand-charcoal)',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    overflow:       'hidden',
                    flexShrink:     0,
                    padding:        dir.imageSrc ? '0' : '1.75rem',
                    position:       'relative',
                  }}
                >
                  {dir.accentRolex && (
                    <div aria-hidden="true" style={{
                      position:   'absolute',
                      inset:      0,
                      background: 'radial-gradient(ellipse 65% 65% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
                    }} />
                  )}
                  {!dir.accentRolex && i < 2 && (
                    <div aria-hidden="true" style={{
                      position:   'absolute',
                      inset:      0,
                      background: 'radial-gradient(ellipse 65% 65% at 50% 55%, rgba(200,230,255,0.055) 0%, transparent 70%)',
                    }} />
                  )}
                  {dir.imageSrc ? (
                    <img
                      src={dir.imageSrc}
                      alt={dir.imageAlt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <WatchIllustration index={i} />
                  )}
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding:       '1.5rem',
                    flex:          1,
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           '0.55rem',
                    borderTop:     dir.accentRolex
                      ? '1px solid rgba(201,168,76,0.22)'
                      : '1px solid var(--color-brand-border)',
                  }}
                >
                  <p
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.62rem',
                      fontWeight:    600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color:         dir.accentRolex ? 'var(--color-brand-gold)' : 'var(--color-ice-blue)',
                      opacity:       0.85,
                    }}
                  >
                    {dir.eyebrow}
                  </p>

                  <p
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.72rem',
                      fontWeight:    700,
                      letterSpacing: '0.11em',
                      textTransform: 'uppercase',
                      color:         'var(--color-brand-white)',
                    }}
                  >
                    {dir.label}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize:   'clamp(0.95rem, 1.8vw, 1.15rem)',
                      fontWeight: 400,
                      color:      '#bebab3',
                      lineHeight: 1.25,
                    }}
                  >
                    {dir.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
                    {dir.specs.map((spec) => (
                      <li
                        key={spec}
                        style={{
                          fontFamily:  'var(--font-body)',
                          fontSize:    '0.78rem',
                          color:       '#928E86',
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
                            color:    dir.accentRolex ? 'var(--color-brand-gold)' : 'rgba(200,230,255,0.55)',
                            opacity:  0.7,
                          }}
                        >
                          —
                        </span>
                        {spec}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.78rem',
              color:         'var(--color-brand-subtle)',
              letterSpacing: '0.02em',
            }}
          >
            Availability changes. Ask what&rsquo;s in now — details confirmed before you move forward.
          </p>
        </div>
      </section>

      {/* ── What Gets Confirmed ──────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(2.5rem, 5vw, 4rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WHAT GETS CONFIRMED</span>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight:   400,
              color:        'var(--color-brand-white)',
              lineHeight:   1.1,
              marginBottom: '1.5rem',
            }}
          >
            Confirmed per piece.
          </p>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap:                 '1px',
              background:          'var(--color-brand-border)',
            }}
          >
            {[
              { label: 'AVAILABILITY',      body: 'In right now — confirmed before anything moves.' },
              { label: 'SOURCE & CONDITION', body: 'Where it comes from. New, pre-owned, or modified.' },
              { label: 'STONES & MODS',     body: 'Stone type, setting, and origin — per watch.' },
              { label: 'PRICING',           body: 'Confirmed before you commit. No surprises.' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'var(--color-brand-charcoal)',
                  padding:    '1.375rem 1.25rem',
                  borderTop:  '2px solid rgba(201,168,76,0.38)',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.6rem',
                    fontWeight:    700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color:         'var(--color-brand-gold)',
                    opacity:       0.82,
                    marginBottom:  '0.5rem',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.8125rem',
                    color:      '#C4C0B8',
                    lineHeight: 1.55,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Dealer / Source Disclosure ────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(2rem, 4vw, 2.75rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            style={{
              padding:    '1.5rem 1.75rem',
              border:     '1px solid rgba(201,168,76,0.15)',
              background: 'rgba(201,168,76,0.02)',
              display:    'flex',
              gap:        '1rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              aria-hidden="true"
              style={{ color: 'rgba(201,168,76,0.55)', fontSize: '0.85rem', flexShrink: 0, marginTop: '2px' }}
            >
              ◆
            </span>
            <div>
              <p
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.72rem',
                  fontWeight:    600,
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color:         'rgba(201,168,76,0.65)',
                  marginBottom:  '0.5rem',
                }}
              >
                WATCH SOURCE & DISCLOSURE
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.8125rem',
                  color:      '#AEA9A1',
                  lineHeight: 1.7,
                }}
              >
                2T Jewelers is not an authorized Rolex dealer. Watches may be sourced through trusted vendor and dealer relationships. Condition, source, modifications, stones, and pricing are confirmed per piece before purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Watch Proof Rail slot ──────────────────────────────────────────────
           Renders nothing while WATCH_PROOF_ASSETS is empty.
           To activate: add real verified watch photos to WATCH_PROOF_ASSETS above. */}
      {WATCH_PROOF_ASSETS.length > 0 && (
        <section
          style={{
            padding:      'clamp(2.5rem, 5vw, 3.5rem) 1.5rem',
            borderBottom: '1px solid var(--color-brand-border)',
            overflow:     'hidden',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>WHAT WE&rsquo;VE MOVED</span>
            <div
              style={{
                display:                 'flex',
                gap:                     '1px',
                overflowX:               'auto',
                background:              'var(--color-brand-border)',
                scrollSnapType:          'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {WATCH_PROOF_ASSETS.map((asset, idx) => (
                <div
                  key={idx}
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
                        background: 'rgba(5,5,5,0.78)',
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Footer nav ───────────────────────────────────────────────── */}
      <div style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem) 1.5rem' }}>
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
