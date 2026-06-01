import type { Metadata } from 'next'
import Link from 'next/link'

// ── Types ─────────────────────────────────────────────────────────────────────

type GrillzStyle = {
  label:       string
  eyebrow:     string
  description: string
  specs:       string[]
  imageSrc:    string | null
  imageAlt:    string
}

// ── Null-gated hero image slot ────────────────────────────────────────────────
// Set to real grillz photo path under /public/assets/grillz/ when ready.
const heroGrillzImageSrc: string | null = null

// ── Style Cards ───────────────────────────────────────────────────────────────
// Inquiry direction cards — not inventory.
// imageSrc is null until a real verified grillz photo is ready.
// To activate: set imageSrc to path under /public/assets/grillz/

const GRILLZ_STYLES: GrillzStyle[] = [
  {
    label:       'TOP SET',
    eyebrow:     'UPPER ARCH',
    description: 'Cover the top. 4, 6, or 8 teeth. Gold or iced direction.',
    specs:       ['Top 4, 6, or 8 teeth', 'Gold, silver, or stone direction'],
    imageSrc:    null,
    imageAlt:    'Top set grillz — upper arch gold or iced',
  },
  {
    label:       'BOTTOM SET',
    eyebrow:     'LOWER ARCH',
    description: 'Bottom arch. Built to flash when you talk.',
    specs:       ['Bottom 4, 6, or 8 teeth', 'Any material direction'],
    imageSrc:    null,
    imageAlt:    'Bottom set grillz — lower arch',
  },
  {
    label:       'FULL MOUTH',
    eyebrow:     'TOP + BOTTOM',
    description: 'Top and bottom together. The full statement.',
    specs:       ['Top + bottom full set', 'Match or mix directions'],
    imageSrc:    null,
    imageAlt:    'Full mouth grillz — top and bottom set',
  },
  {
    label:       'OPEN FACE',
    eyebrow:     'OPEN FACE DIRECTION',
    description: 'Gold frame around each tooth. The tooth shows through. Loud and clean.',
    specs:       ['Open center, gold or silver border', 'Top or bottom available'],
    imageSrc:    null,
    imageAlt:    'Open face grillz — gold frame, tooth visible through',
  },
  {
    label:       'ICED-OUT',
    eyebrow:     'STONE DIRECTION',
    description: 'Stones set across every tooth. Full ice.',
    specs:       ['Stone-set direction', 'Stone details confirmed per piece'],
    imageSrc:    null,
    imageAlt:    'Iced-out grillz — stone-covered full set',
  },
  {
    label:       'DIAMOND CUT',
    eyebrow:     'CUT DIRECTION',
    description: 'Geometric faceted surface. A different kind of shine.',
    specs:       ['Diamond-cut pattern direction', 'Material confirmed per piece'],
    imageSrc:    null,
    imageAlt:    'Diamond cut grillz — geometric faceted surface',
  },
]

// ── Fit Process ───────────────────────────────────────────────────────────────

const FIT_STEPS = [
  {
    num:   '01',
    label: 'TELL US THE SET',
    body:  'Top, bottom, or full mouth. How many teeth — 4, 6, or 8.',
  },
  {
    num:   '02',
    label: 'CHOOSE THE SHINE',
    body:  'Gold, silver, or stone direction. Open face or stone-covered.',
  },
  {
    num:   '03',
    label: 'FIT STEP CONFIRMED',
    body:  'Mold and fit process confirmed before build. Not skipped.',
  },
  {
    num:   '04',
    label: 'QUOTE FIRST',
    body:  'Price confirmed before production. No deposit to start. Ask before you buy.',
  },
  {
    num:   '05',
    label: 'BUILD BEGINS',
    body:  'Build starts after direction, fit, and price are confirmed.',
  },
]

// ── WhatsApp ──────────────────────────────────────────────────────────────────

const WA_GRILLZ =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20grillz.'

const WA_GRILLZ_FIT =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20asking%20about%20the%20grillz%20fit%20and%20mold%20process.%20What%20does%20that%20step%20look%20like%3F'

// ── SEO ───────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:       '2T Jewelers | Custom Grillz — Pittsburgh, PA',
  description: 'Custom gold and iced grillz in Pittsburgh, PA. Top, bottom, or full set. Fit confirmed before build. Ask 2T first — no deposit to start. 25 years.',
}

// ── Hero Grillz Visual ────────────────────────────────────────────────────────
// Large editorial grillz illustration — renders when heroGrillzImageSrc is null.
// Portrait format, iced-out upper arch, sparkle bursts.

function HeroGrillzVisual() {
  const G  = 'rgba(201,168,76,0.88)'
  const GF = 'rgba(201,168,76,0.35)'
  const IC = 'rgba(200,230,255,0.88)'
  const IB = 'rgba(200,230,255,0.58)'

  // 8 hero teeth: [x left-edge, gumY top-of-tooth, height]
  const HERO_ARCH: [number, number, number][] = [
    [ 36, 155, 46],
    [ 60, 143, 54],
    [ 84, 133, 62],
    [108, 128, 65],
    [132, 128, 65],
    [156, 133, 62],
    [180, 143, 54],
    [204, 155, 46],
  ]
  const TW = 20

  return (
    <div style={{
      width: '100%', height: '100%',
      position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(201,168,76,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
      }}/>
      <svg viewBox="0 0 260 340" fill="none" aria-hidden="true"
        style={{ width: '100%', maxWidth: '360px', height: 'auto' }}>

        {/* Gum arch backing */}
        <path
          d="M 28,108 C 90,78 170,78 232,108 L 232,160 C 170,128 90,128 28,160 Z"
          fill={GF} stroke={G} strokeWidth="2" opacity="0.4"
        />

        {/* Gum arch line */}
        <path d="M 28,157 C 90,124 170,124 232,157"
          stroke={G} strokeWidth="2.2" opacity="0.65"/>

        {/* Gum line stones — 14 along the arch */}
        {Array.from({ length: 14 }).map((_, i) => {
          const t  = i / 13
          const ex = 28 + t * 204
          const ey = 157 - Math.sin(t * Math.PI) * 33
          return <circle key={i} cx={ex} cy={ey} r="2.8" fill={G} opacity="0.65"/>
        })}

        {/* 8 iced teeth */}
        {HERO_ARCH.map(([x, gy, h], i) => (
          <g key={i}>
            <rect x={x} y={gy} width={TW} height={h} rx="2.5"
              fill="rgba(200,230,255,0.04)" stroke={IC} strokeWidth="1.8"/>
            {/* Stone coverage — 4 rows × 2 cols */}
            {[0, 1, 2, 3].map((row) =>
              [0, 1].map((col) => {
                const sx = x + 3.5 + col * 7
                const sy = gy + 7 + row * Math.max((h - 16) / 3, 7)
                if (sy + 3 > gy + h - 3) return null
                return <circle key={`${row}-${col}`} cx={sx} cy={sy} r="2.1" fill={IC} opacity="0.72"/>
              })
            )}
            <rect x={x + 2} y={gy + 3} width={4} height={h - 8} rx="1"
              fill="rgba(255,255,255,0.05)"/>
          </g>
        ))}

        {/* Primary gold sparkle — top center */}
        <g opacity="0.85">
          <line x1="130" y1="90"  x2="130" y2="78"  stroke={G} strokeWidth="2.4"/>
          <line x1="130" y1="118" x2="130" y2="130" stroke={G} strokeWidth="2.4"/>
          <line x1="118" y1="104" x2="106" y2="104" stroke={G} strokeWidth="2.4"/>
          <line x1="142" y1="104" x2="154" y2="104" stroke={G} strokeWidth="2.4"/>
        </g>
        <g opacity="0.5">
          <line x1="122" y1="92"  x2="114" y2="84"  stroke={G} strokeWidth="1.6"/>
          <line x1="138" y1="92"  x2="146" y2="84"  stroke={G} strokeWidth="1.6"/>
          <line x1="122" y1="116" x2="114" y2="124" stroke={G} strokeWidth="1.6"/>
          <line x1="138" y1="116" x2="146" y2="124" stroke={G} strokeWidth="1.6"/>
        </g>

        {/* Ice sparkle — right outer */}
        <g opacity="0.72">
          <line x1="214" y1="143" x2="214" y2="135" stroke={IC} strokeWidth="1.8"/>
          <line x1="214" y1="159" x2="214" y2="167" stroke={IC} strokeWidth="1.8"/>
          <line x1="206" y1="151" x2="198" y2="151" stroke={IC} strokeWidth="1.8"/>
          <line x1="222" y1="151" x2="230" y2="151" stroke={IC} strokeWidth="1.8"/>
        </g>

        {/* Ice sparkle — left outer */}
        <g opacity="0.62">
          <line x1="46"  y1="143" x2="46"  y2="135" stroke={IC} strokeWidth="1.6"/>
          <line x1="46"  y1="159" x2="46"  y2="167" stroke={IC} strokeWidth="1.6"/>
          <line x1="38"  y1="151" x2="30"  y2="151" stroke={IC} strokeWidth="1.6"/>
          <line x1="54"  y1="151" x2="62"  y2="151" stroke={IC} strokeWidth="1.6"/>
        </g>

        {/* Micro sparkles */}
        {([[80, 116], [180, 116], [110, 94], [150, 94]] as [number, number][]).map(([sx, sy], idx) => (
          <g key={idx} opacity="0.28">
            <line x1={sx} y1={sy - 5} x2={sx} y2={sy + 5} stroke={IC} strokeWidth="0.9"/>
            <line x1={sx - 5} y1={sy} x2={sx + 5} y2={sy} stroke={IC} strokeWidth="0.9"/>
          </g>
        ))}

        {/* Editorial label */}
        <text x="130" y="248"
          fontFamily="monospace" fontSize="8" fill={GF}
          textAnchor="middle" letterSpacing="3" opacity="0.42">
          CUSTOM BUILT
        </text>
        <line x1="60" y1="260" x2="200" y2="260" stroke={GF} strokeWidth="0.8" opacity="0.2"/>

      </svg>
    </div>
  )
}

// ── Grillz Style Illustrations ────────────────────────────────────────────────
// SVG fallback per card — renders when imageSrc is null.
// To replace: set imageSrc on the matching GRILLZ_STYLES entry
// to a path under /public/assets/grillz/

function GrillzIllustration({ index }: { index: number }) {
  const G  = 'rgba(201,168,76,0.82)'
  const GF = 'rgba(201,168,76,0.32)'
  const GB = 'rgba(201,168,76,0.55)'
  const IC = 'rgba(200,230,255,0.82)'
  const IF = 'rgba(200,230,255,0.38)'
  const IB = 'rgba(200,230,255,0.55)'
  const base = { width: '100%' as const, height: '100%' as const, fill: 'none' as const }

  // 8-tooth arch for card illustrations (viewBox 220 × 170)
  // TW=14, step=15 (1px gap), centered at x=110
  const ARCH: [number, number, number][] = [
    [ 51, 85, 23], [ 66, 80, 26], [ 81, 76, 28], [ 96, 74, 30],
    [111, 74, 30], [126, 76, 28], [141, 80, 26], [156, 85, 23],
  ]
  const TW = 14

  switch (index) {

    // ── 0: Top Set — gold upper arch ──────────────────────────────────────────
    case 0: {
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          <path d="M 47,56 C 80,42 140,42 173,56 L 173,89 C 140,77 80,77 47,89 Z"
            fill={GF} stroke={G} strokeWidth="1.2" opacity="0.35"/>
          <path d="M 47,87 C 80,75 140,75 173,87"
            stroke={G} strokeWidth="1.5" opacity="0.62"/>
          {ARCH.map(([x, gy, h], i) => (
            <g key={i}>
              <rect x={x} y={gy} width={TW} height={h} rx="1.5"
                fill={GF} stroke={G} strokeWidth="1.3"/>
              <line x1={x + TW / 2} y1={gy + 4} x2={x + TW / 2} y2={gy + h - 3}
                stroke={GB} strokeWidth="0.7" opacity="0.45"/>
              <rect x={x + 2} y={gy + 3} width={3} height={h - 8} rx="0.8"
                fill="rgba(255,255,255,0.07)"/>
            </g>
          ))}
          <g opacity="0.65">
            <line x1="110" y1="54" x2="110" y2="47" stroke={G} strokeWidth="1.4"/>
            <line x1="106" y1="53" x2="114" y2="53" stroke={G} strokeWidth="1" opacity="0.6"/>
          </g>
          <g opacity="0.35">
            <line x1="53"  y1="92" x2="53"  y2="86" stroke={G} strokeWidth="1"/>
            <line x1="50"  y1="91" x2="56"  y2="91" stroke={G} strokeWidth="0.8"/>
          </g>
          <g opacity="0.35">
            <line x1="167" y1="92" x2="167" y2="86" stroke={G} strokeWidth="1"/>
            <line x1="164" y1="91" x2="170" y2="91" stroke={G} strokeWidth="0.8"/>
          </g>
        </svg>
      )
    }

    // ── 1: Bottom Set — gold lower arch ───────────────────────────────────────
    case 1: {
      // gumY here is the BOTTOM of the tooth; teeth extend upward
      const BOT: [number, number, number][] = [
        [ 51, 100, 23], [ 66, 105, 26], [ 81, 109, 28], [ 96, 111, 30],
        [111, 111, 30], [126, 109, 28], [141, 105, 26], [156, 100, 23],
      ]
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          <path d="M 47,79 C 80,93 140,93 173,79 L 173,114 C 140,126 80,126 47,114 Z"
            fill={GF} stroke={G} strokeWidth="1.2" opacity="0.35"/>
          <path d="M 47,83 C 80,95 140,95 173,83"
            stroke={G} strokeWidth="1.5" opacity="0.62"/>
          {BOT.map(([x, gy, h], i) => (
            <g key={i}>
              <rect x={x} y={gy - h} width={TW} height={h} rx="1.5"
                fill={GF} stroke={G} strokeWidth="1.3"/>
              <line x1={x + TW / 2} y1={gy - h + 3} x2={x + TW / 2} y2={gy - 4}
                stroke={GB} strokeWidth="0.7" opacity="0.45"/>
              <rect x={x + 2} y={gy - h + 3} width={3} height={h - 8} rx="0.8"
                fill="rgba(255,255,255,0.07)"/>
            </g>
          ))}
          <g opacity="0.65">
            <line x1="110" y1="120" x2="110" y2="127" stroke={G} strokeWidth="1.4"/>
            <line x1="106" y1="119" x2="114" y2="119" stroke={G} strokeWidth="1" opacity="0.6"/>
          </g>
        </svg>
      )
    }

    // ── 2: Full Mouth — top + bottom arches ───────────────────────────────────
    case 2: {
      const TOP_S: [number, number, number][] = [
        [ 51, 65, 18], [ 66, 61, 20], [ 81, 58, 21], [ 96, 57, 22],
        [111, 57, 22], [126, 58, 21], [141, 61, 20], [156, 65, 18],
      ]
      const BOT_S: [number, number, number][] = [
        [ 51, 105, 18], [ 66, 109, 20], [ 81, 112, 21], [ 96, 113, 22],
        [111, 113, 22], [126, 112, 21], [141, 109, 20], [156, 105, 18],
      ]
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          {/* Top arch gum */}
          <path d="M 47,46 C 80,34 140,34 173,46 L 173,68 C 140,58 80,58 47,68 Z"
            fill={GF} stroke={G} strokeWidth="1" opacity="0.3"/>
          {TOP_S.map(([x, gy, h], i) => (
            <g key={i}>
              <rect x={x} y={gy} width={TW} height={h} rx="1.5"
                fill={GF} stroke={G} strokeWidth="1.2"/>
              <rect x={x + 2} y={gy + 2} width={2.5} height={h - 5} rx="0.6"
                fill="rgba(255,255,255,0.06)"/>
            </g>
          ))}
          {/* Center gap — bite line */}
          <line x1="47" y1="85" x2="173" y2="85"
            stroke="rgba(201,168,76,0.1)" strokeWidth="0.6"/>
          {/* Bottom arch gum */}
          <path d="M 47,102 C 80,116 140,116 173,102 L 173,126 C 140,138 80,138 47,126 Z"
            fill={GF} stroke={G} strokeWidth="1" opacity="0.3"/>
          {BOT_S.map(([x, gy, h], i) => (
            <g key={i}>
              <rect x={x} y={gy - h} width={TW} height={h} rx="1.5"
                fill={GF} stroke={G} strokeWidth="1.2"/>
              <rect x={x + 2} y={gy - h + 2} width={2.5} height={h - 5} rx="0.6"
                fill="rgba(255,255,255,0.06)"/>
            </g>
          ))}
          {/* Sparkle — top center */}
          <g opacity="0.6">
            <line x1="110" y1="37" x2="110" y2="30" stroke={G} strokeWidth="1.3"/>
            <line x1="107" y1="36" x2="113" y2="36" stroke={G} strokeWidth="0.9" opacity="0.6"/>
          </g>
        </svg>
      )
    }

    // ── 3: Open Face — gold frame, tooth shows through ────────────────────────
    case 3: {
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          <path d="M 47,56 C 80,42 140,42 173,56 L 173,89 C 140,77 80,77 47,89 Z"
            fill={GF} stroke={G} strokeWidth="1.2" opacity="0.28"/>
          {ARCH.map(([x, gy, h], i) => (
            <g key={i}>
              {/* Outer frame only — no fill */}
              <rect x={x} y={gy} width={TW} height={h} rx="1.5"
                fill="none" stroke={G} strokeWidth="1.6"/>
              {/* Open window */}
              <rect x={x + 2.5} y={gy + 4.5} width={TW - 5} height={h - 10} rx="0.5"
                fill="rgba(201,168,76,0.03)" stroke={GB} strokeWidth="0.6"/>
              {/* Top cap — gum connection */}
              <rect x={x + 1} y={gy} width={TW - 2} height={4} rx="1"
                fill={GF} opacity="0.65"/>
              {/* Bottom edge */}
              <line x1={x + 1} y1={gy + h - 1} x2={x + TW - 1} y2={gy + h - 1}
                stroke={G} strokeWidth="0.9" opacity="0.5"/>
            </g>
          ))}
          <path d="M 47,87 C 80,75 140,75 173,87"
            stroke={G} strokeWidth="1.2" opacity="0.5"/>
          <g opacity="0.55">
            <line x1="110" y1="55" x2="110" y2="48" stroke={G} strokeWidth="1.3"/>
            <line x1="107" y1="54" x2="113" y2="54" stroke={G} strokeWidth="1" opacity="0.5"/>
          </g>
        </svg>
      )
    }

    // ── 4: Iced-Out — full stone coverage ─────────────────────────────────────
    case 4: {
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          <path d="M 47,56 C 80,42 140,42 173,56 L 173,89 C 140,77 80,77 47,89 Z"
            fill="rgba(200,230,255,0.05)" stroke={IB} strokeWidth="1.2" opacity="0.5"/>
          {ARCH.map(([x, gy, h], i) => (
            <g key={i}>
              <rect x={x} y={gy} width={TW} height={h} rx="1.5"
                fill="rgba(200,230,255,0.04)" stroke={IC} strokeWidth="1.3"/>
              {/* 3 rows × 2 cols stone coverage */}
              {[0, 1, 2].map((row) =>
                [0, 1].map((col) => {
                  const sx = x + 2.5 + col * 4.5
                  const sy = gy + 5 + row * Math.max((h - 12) / 2, 6)
                  if (sy + 2 > gy + h - 2) return null
                  return <circle key={`${row}-${col}`} cx={sx} cy={sy} r="1.6" fill={IC} opacity="0.7"/>
                })
              )}
            </g>
          ))}
          <path d="M 47,87 C 80,75 140,75 173,87"
            stroke={IC} strokeWidth="1.2" opacity="0.45"/>
          {([[110, 50], [51, 84], [169, 84]] as [number, number][]).map(([sx, sy], idx) => (
            <g key={idx} opacity="0.72">
              <line x1={sx} y1={sy - 7} x2={sx} y2={sy - 11} stroke={IC} strokeWidth="1.5"/>
              <line x1={sx} y1={sy + 7} x2={sx} y2={sy + 11} stroke={IC} strokeWidth="1.5"/>
              <line x1={sx - 7} y1={sy} x2={sx - 11} y2={sy} stroke={IC} strokeWidth="1.5"/>
              <line x1={sx + 7} y1={sy} x2={sx + 11} y2={sy} stroke={IC} strokeWidth="1.5"/>
            </g>
          ))}
        </svg>
      )
    }

    // ── 5: Diamond Cut — geometric faceted surface ────────────────────────────
    case 5:
    default: {
      return (
        <svg viewBox="0 0 220 170" aria-hidden="true" {...base}>
          <path d="M 47,56 C 80,42 140,42 173,56 L 173,89 C 140,77 80,77 47,89 Z"
            fill="rgba(200,230,255,0.04)" stroke={IB} strokeWidth="1" opacity="0.4"/>
          {ARCH.map(([x, gy, h], i) => (
            <g key={i}>
              <rect x={x} y={gy} width={TW} height={h} rx="1.5"
                fill="rgba(200,230,255,0.03)" stroke={IC} strokeWidth="1.3"/>
              {/* Center crease */}
              <line x1={x + TW / 2} y1={gy + 2} x2={x + TW / 2} y2={gy + h - 2}
                stroke={IC} strokeWidth="0.7" opacity="0.55"/>
              {/* Diagonal facets */}
              <line x1={x + 2}       y1={gy + 4}     x2={x + TW / 2} y2={gy + h / 2}
                stroke={IB} strokeWidth="0.6" opacity="0.52"/>
              <line x1={x + TW - 2}  y1={gy + 4}     x2={x + TW / 2} y2={gy + h / 2}
                stroke={IB} strokeWidth="0.6" opacity="0.52"/>
              <line x1={x + 2}       y1={gy + h - 4} x2={x + TW / 2} y2={gy + h / 2}
                stroke={IB} strokeWidth="0.6" opacity="0.4"/>
              <line x1={x + TW - 2}  y1={gy + h - 4} x2={x + TW / 2} y2={gy + h / 2}
                stroke={IB} strokeWidth="0.6" opacity="0.4"/>
              {/* Center facet dot */}
              <circle cx={x + TW / 2} cy={gy + h / 2} r="1.2" fill={IC} opacity="0.72"/>
              {/* Top cap stone */}
              <circle cx={x + TW / 2} cy={gy + 3} r="1.3" fill={IC} opacity="0.8"/>
            </g>
          ))}
          <path d="M 47,87 C 80,75 140,75 173,87"
            stroke={IC} strokeWidth="1.2" opacity="0.5"/>
          {/* 8-point sparkle — center */}
          <g opacity="0.78">
            <line x1="110" y1="52" x2="110" y2="44" stroke={IC} strokeWidth="1.8"/>
            <line x1="110" y1="66" x2="110" y2="74" stroke={IC} strokeWidth="1.8"/>
            <line x1="102" y1="59" x2="94"  y2="59" stroke={IC} strokeWidth="1.8"/>
            <line x1="118" y1="59" x2="126" y2="59" stroke={IC} strokeWidth="1.8"/>
          </g>
          <g opacity="0.45">
            <line x1="104" y1="55" x2="99"  y2="50" stroke={IC} strokeWidth="1.2"/>
            <line x1="116" y1="55" x2="121" y2="50" stroke={IC} strokeWidth="1.2"/>
            <line x1="104" y1="63" x2="99"  y2="68" stroke={IC} strokeWidth="1.2"/>
            <line x1="116" y1="63" x2="121" y2="68" stroke={IC} strokeWidth="1.2"/>
          </g>
        </svg>
      )
    }
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GrillzPage() {
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
        {/* Gold ambient glow — deep left */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 72% 65% at 0% 55%, rgba(201,168,76,0.08) 0%, transparent 68%)',
          pointerEvents: 'none',
        }} />
        {/* Warm glow — top right */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         0,
          background:    'radial-gradient(ellipse 45% 45% at 100% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 3.5rem)', flexWrap: 'wrap', alignItems: 'center' }}>

            {/* Text */}
            <div style={{ flex: '1 1 340px', minWidth: 0 }}>
              <span className="section-eyebrow" style={{ marginBottom: '1.25rem' }}>GRILLZ</span>

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
                GRILLZ{' '}<br />
                <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>BUILT TO HIT.</em>
              </h1>

              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(1.1rem, 2.3vw, 1.5rem)',
                  fontStyle:    'italic',
                  color:        'var(--color-brand-gold-light)',
                  marginBottom: '1.25rem',
                  lineHeight:   1.2,
                }}
              >
                Top. Bottom. Full set. Gold or stones. Fit starts first.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.875rem' }}>
                {[
                  'Custom built top, bottom, or full mouth. 4, 6, or 8 teeth.',
                  'Fit step confirmed before build. Quote confirmed before production.',
                ].map((line) => (
                  <p
                    key={line}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   'clamp(0.84rem, 1.4vw, 0.9rem)',
                      color:      '#CECAC2',
                      lineHeight: 1.6,
                      display:    'flex',
                      gap:        '0.5rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ color: 'var(--color-brand-gold)', flexShrink: 0, fontSize: '0.65rem', marginTop: '0.38em', opacity: 0.65 }}
                    >
                      ◆
                    </span>
                    {line}
                  </p>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <a
                  href={WA_GRILLZ}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  TEXT 2T ABOUT GRILLZ →
                </a>
                <a
                  href={WA_GRILLZ_FIT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                >
                  ASK ABOUT THE FIT →
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div
              style={{
                flex:           '0 0 clamp(240px, 38%, 380px)',
                minHeight:      '320px',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                position:       'relative',
              }}
            >
              {heroGrillzImageSrc ? (
                <img
                  src={heroGrillzImageSrc}
                  alt="Custom iced-out grillz"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <HeroGrillzVisual />
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Grillz Styles ─────────────────────────────────────────────
           Inquiry direction cards — not inventory.
           SVG illustration renders when imageSrc is null.
           To add a real photo: set imageSrc on the matching GRILLZ_STYLES entry
           to a path under /public/assets/grillz/ */}
      <section
        style={{
          padding:      'clamp(2rem, 4vw, 3rem) 1.5rem clamp(3rem, 6vw, 4.5rem)',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>GRILLZ STYLES</span>
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
            Pick the style. Text 2T to start.
          </p>
          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '0.875rem',
              color:        '#C8C4BC',
              lineHeight:   1.65,
              maxWidth:     '54ch',
              marginBottom: '2rem',
            }}
          >
            Style directions — not fake inventory. Tell us the set, teeth count, and material.
            Fit and quote confirmed before anything starts.
          </p>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap:                 '1px',
              background:          'var(--color-brand-border)',
              marginBottom:        '1.5rem',
            }}
          >
            {GRILLZ_STYLES.map((style, i) => {
              const isIce = i === 4 || i === 5
              return (
                <div
                  key={style.label}
                  style={{
                    background:    isIce ? 'linear-gradient(160deg, #070a10 0%, #050608 100%)' : 'var(--color-brand-black)',
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
                      background:     isIce
                        ? 'linear-gradient(155deg, #080c14 0%, #050609 100%)'
                        : 'var(--color-brand-charcoal)',
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      overflow:       'hidden',
                      flexShrink:     0,
                      padding:        style.imageSrc ? '0' : '1.75rem',
                      position:       'relative',
                    }}
                  >
                    <div aria-hidden="true" style={{
                      position:   'absolute',
                      inset:      0,
                      background: isIce
                        ? 'radial-gradient(ellipse 65% 65% at 50% 55%, rgba(200,230,255,0.05) 0%, transparent 70%)'
                        : 'radial-gradient(ellipse 65% 65% at 50% 55%, rgba(201,168,76,0.06) 0%, transparent 70%)',
                    }} />
                    {style.imageSrc ? (
                      <img
                        src={style.imageSrc}
                        alt={style.imageAlt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <GrillzIllustration index={i} />
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
                      borderTop:     '1px solid var(--color-brand-border)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily:    'var(--font-body)',
                        fontSize:      '0.72rem',
                        fontWeight:    600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color:         isIce ? 'var(--color-ice-blue)' : 'var(--color-brand-gold)',
                        opacity:       0.85,
                      }}
                    >
                      {style.eyebrow}
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
                      {style.label}
                    </p>

                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize:   'clamp(0.95rem, 1.8vw, 1.15rem)',
                        fontWeight: 400,
                        color:      '#D2CEC6',
                        lineHeight: 1.25,
                      }}
                    >
                      {style.description}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
                      {style.specs.map((spec) => (
                        <li
                          key={spec}
                          style={{
                            fontFamily:  'var(--font-body)',
                            fontSize:    '0.78rem',
                            color:       '#ABA7A0',
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
                              color:    isIce ? 'rgba(200,230,255,0.55)' : 'var(--color-brand-gold)',
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
              )
            })}
          </div>

          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.78rem',
              color:         '#B8B4AC',
              letterSpacing: '0.02em',
            }}
          >
            Grillz are custom built per order. Fit confirmed before build. Material and stone details confirmed per piece.
          </p>
        </div>
      </section>

      {/* ── Fit First ─────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(2.5rem, 5vw, 4rem) 1.5rem',
          borderBottom: '1px solid var(--color-brand-border)',
          background:   'var(--color-brand-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>FIT FIRST</span>
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
            How the build works.
          </p>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap:                 '1px',
              background:          'var(--color-brand-border)',
            }}
          >
            {FIT_STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  background: 'var(--color-brand-black)',
                  padding:    '1.75rem 1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.72rem',
                    fontWeight:    600,
                    letterSpacing: '0.18em',
                    color:         'var(--color-brand-gold)',
                    marginBottom:  '0.6rem',
                  }}
                >
                  {step.num}
                </p>
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.72rem',
                    fontWeight:    600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         'var(--color-brand-white)',
                    marginBottom:  '0.75rem',
                  }}
                >
                  {step.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.875rem',
                    color:      '#C8C4BC',
                    lineHeight: 1.65,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Gets Confirmed ──────────────────────────────────────────── */}
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
              { label: 'SET & TEETH COUNT', body: 'Top, bottom, or full. 4, 6, or 8 teeth confirmed before build.' },
              { label: 'FIT & MOLD',        body: 'Fit process confirmed before build starts. Not skipped.' },
              { label: 'MATERIAL & STONES', body: 'Gold, silver, diamond, or moissanite. Confirmed per piece.' },
              { label: 'QUOTE FIRST',       body: 'Price confirmed before production. No deposit to start.' },
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
                    color:      '#CFCBC3',
                    lineHeight: 1.55,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.78rem',
              color:         '#B8B4AC',
              letterSpacing: '0.02em',
              marginTop:     '1.25rem',
              lineHeight:    1.6,
            }}
          >
            Gold, silver, stones, or no stones — details confirmed before build.
          </p>
        </div>
      </section>

      {/* ── Footer nav ──────────────────────────────────────────────── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) 1.5rem' }}>
        <Link
          href="/collections"
          className="nav-link-footer"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', letterSpacing: '0.03em' }}
        >
          ← All Collections
        </Link>
      </div>

    </main>
  )
}
