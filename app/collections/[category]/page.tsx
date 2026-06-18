import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// ─── Types ───────────────────────────────────────────────────────────────────

type StyleCard = {
  title:        string
  description:  string
  specs:        string[]
  imageSrc:     string | null
  imageAlt:     string
  waMessage:    string
  illustration: React.ReactNode
}

type CategoryData = {
  title:           string
  headline:        string
  body:            string
  note:            string
  glow:            string
  svg:             React.ReactNode
  styles?:         StyleCard[]
  stylesEyebrow?:  string
  stylesSubhead?:  string
  ctaHeading?:     string
  chips?:          string[]
  materialChips?:  string[]
  stoneChips?:     string[]
  directionNote?:  string
  waMessage:       string
  primaryCta:      string
  noCtaBox?:       boolean
}

// ─── WhatsApp helper ──────────────────────────────────────────────────────────

function waUrl(msg: string): string {
  return `https://wa.me/14124524343?text=${encodeURIComponent(msg)}`
}

// ─── Illustration palette ─────────────────────────────────────────────────────

const G  = 'rgba(201,168,76,0.82)'
const GF = 'rgba(201,168,76,0.32)'
const GB = 'rgba(201,168,76,0.55)'
const IC = 'rgba(200,230,255,0.72)'
const IF = 'rgba(200,230,255,0.38)'

// ─── Category data ────────────────────────────────────────────────────────────

// NOTE: chains and pendants have dedicated pages (app/collections/chains,
// app/collections/pendants) — do not add entries for them here.
const CATEGORY_DATA: Record<string, CategoryData> = {
  bracelets: {
    title:      'Bracelets',
    headline:   'WRIST GAME WITH WEIGHT.',
    body:       'Tennis, Cuban, bangle. Weight that shows.',
    note:       'Details confirmed per piece.',
    glow:       'rgba(201,168,76,0.07)',
    waMessage:  "Hey 2T — I'm looking at bracelets. What styles and directions do you have available?",
    primaryCta: 'ASK ABOUT BRACELETS →',
    noCtaBox:   true,
    svg: (
      <svg width="70" height="60" viewBox="0 0 70 60" fill="none">
        <path d="M8 52 A31 31 0 1 1 62 52" stroke="rgba(201,168,76,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="8"  cy="52" r="4.5" fill="rgba(208,238,255,0.65)"/>
        <circle cx="62" cy="52" r="4.5" fill="rgba(208,238,255,0.65)"/>
        <circle cx="35" cy="4"  r="3.5" fill="rgba(201,168,76,0.65)"/>
      </svg>
    ),
    styles: [
      {
        title:       'CUBAN BRACELET',
        description: 'Flat interlocking links. Same energy as the chain, locked around the wrist.',
        specs:       ["Width: ask what's available", 'Size: 7"–8.5" most common', 'Gold or silver direction', 'Clean or iced-out'],
        imageSrc:    null,
        imageAlt:    'Cuban link bracelet — flat interlocking links',
        waMessage:   "Hey 2T — I'm looking at Cuban bracelets. What widths and sizes do you have available?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <ellipse cx="120" cy="58" rx="90" ry="36" stroke={G}  strokeWidth="2.5"/>
            <ellipse cx="120" cy="58" rx="66" ry="21" stroke={GF} strokeWidth="1.2"/>
            {([0,1,2,3,4,5,6,7] as const).map(i => {
              const a  = (i / 8) * Math.PI * 2
              const ox = 120 + 78  * Math.cos(a)
              const oy = 58  + 28.5 * Math.sin(a)
              const ix = 120 + 68  * Math.cos(a)
              const iy = 58  + 24.5 * Math.sin(a)
              return <line key={i} x1={ox} y1={oy} x2={ix} y2={iy} stroke={GB} strokeWidth="1.5"/>
            })}
          </svg>
        ),
      },
      {
        title:       'TENNIS BRACELET',
        description: 'Stone-set from clasp to clasp. Every link carries shine.',
        specs:       ['Stone-set all the way around', 'Size: 7"–7.5" most common', 'Diamond or moissanite direction', 'Details confirmed per piece'],
        imageSrc:    null,
        imageAlt:    'Tennis bracelet — continuous stone-set links',
        waMessage:   "Hey 2T — I'm interested in a tennis bracelet. What stone directions and sizes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <ellipse cx="120" cy="58" rx="90" ry="36" stroke={GB} strokeWidth="1.5"/>
            {([0,1,2,3,4,5,6,7,8,9] as const).map(i => {
              const a = (i / 10) * Math.PI * 2 - Math.PI / 2
              const x = 120 + 90 * Math.cos(a)
              const y = 58  + 36 * Math.sin(a)
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="8"   stroke={G}  strokeWidth="1.5"/>
                  <circle cx={x} cy={y} r="4.5" fill={IC}/>
                </g>
              )
            })}
          </svg>
        ),
      },
      {
        title:       'ICED BRACELET',
        description: 'Stone-set Cuban build. Full iced-out look from clasp to clasp.',
        specs:       ["Cuban or rope base — ask what's in", 'Diamond or moissanite direction', 'Gold or silver direction', 'Details confirmed per piece'],
        imageSrc:    null,
        imageAlt:    'Iced-out bracelet — stone-set links',
        waMessage:   "Hey 2T — I want to look at iced bracelets. What stone directions and base styles do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <ellipse cx="120" cy="58" rx="90" ry="36" stroke={G}  strokeWidth="2.5"/>
            <ellipse cx="120" cy="58" rx="66" ry="21" stroke={GF} strokeWidth="1"/>
            {([0,1,2,3,4,5,6,7] as const).map(i => {
              const a = (i / 8) * Math.PI * 2 - Math.PI / 2
              const x = 120 + 78 * Math.cos(a)
              const y = 58  + 29 * Math.sin(a)
              return <circle key={i} cx={x} cy={y} r="5.5" fill={IC} opacity="0.7"/>
            })}
            {([0,2,4,6] as const).map(i => {
              const a = (i / 8) * Math.PI * 2 - Math.PI / 2
              const x = 120 + 78 * Math.cos(a)
              const y = 58  + 29 * Math.sin(a)
              return (
                <g key={`s${i}`}>
                  <line x1={x-9} y1={y} x2={x+9} y2={y} stroke={IC} strokeWidth="1" opacity="0.6"/>
                  <line x1={x} y1={y-9} x2={x} y2={y+9} stroke={IC} strokeWidth="1" opacity="0.6"/>
                </g>
              )
            })}
          </svg>
        ),
      },
      {
        title:       'BANGLE',
        description: 'Solid band. Slip-on or hinged. Clean weight on the wrist.',
        specs:       ["Smooth, hammered, or textured finish", "Width: ask what's available", 'Gold or silver direction', 'Details confirmed per piece'],
        imageSrc:    null,
        imageAlt:    'Bangle bracelet — solid smooth band',
        waMessage:   "Hey 2T — I'm looking at bangles. What styles and finishes do you have available?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <ellipse cx="120" cy="58" rx="90" ry="36" stroke={G}  strokeWidth="9"/>
            <ellipse cx="120" cy="58" rx="90" ry="36" stroke={GF} strokeWidth="4.5" opacity="0.5"/>
            <ellipse cx="120" cy="58" rx="72" ry="24" stroke={GF} strokeWidth="1.2"/>
          </svg>
        ),
      },
      {
        title:       'ROPE BRACELET',
        description: 'Twisted links, textured shine. Same rope DNA, worn on the wrist.',
        specs:       ['Slim or bold thickness', 'Size: 7"–8.5" range', 'Gold or silver direction', 'Diamond-cut or polished finish'],
        imageSrc:    null,
        imageAlt:    'Rope bracelet — twisted link texture',
        waMessage:   "Hey 2T — I'm looking at rope bracelets. What thicknesses and sizes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <ellipse cx="120" cy="58" rx="90" ry="36" stroke={GF} strokeWidth="8" opacity="0.3"/>
            <ellipse cx="120" cy="58" rx="90" ry="36" stroke={G}  strokeWidth="3.5"/>
            <ellipse cx="120" cy="55" rx="84" ry="30" stroke={G}  strokeWidth="2" opacity="0.55" strokeDasharray="12 8"/>
            {([0,1,2,3] as const).map(i => {
              const a = (i / 4) * Math.PI * 2
              const x = 120 + 84 * Math.cos(a)
              const y = 55  + 30 * Math.sin(a)
              return <circle key={i} cx={x} cy={y} r="4" fill={GB}/>
            })}
          </svg>
        ),
      },
      {
        title:       'LINK BRACELET',
        description: 'Bold rectangular or oval links. Heavy feel, structured look.',
        specs:       ['Wide or slim link profile', 'Size: 7"–8.5" most common', 'Gold or silver direction', 'Clean or stone-accented'],
        imageSrc:    null,
        imageAlt:    'Link bracelet — structured rectangular links',
        waMessage:   "Hey 2T — I'm looking at link bracelets. What link styles and sizes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <ellipse cx="120" cy="58" rx="90" ry="36" stroke={GF} strokeWidth="1"/>
            {([0,1,2,3,4,5,6,7] as const).map(i => {
              const a   = (i / 8) * Math.PI * 2 - Math.PI / 2
              const cx  = 120 + 78 * Math.cos(a)
              const cy  = 58  + 30 * Math.sin(a)
              const rot = (a * 180 / Math.PI) + 90
              return (
                <g key={i} transform={`rotate(${rot} ${cx} ${cy})`}>
                  <rect x={cx - 10} y={cy - 5} width="20" height="10" rx="2" stroke={G}  strokeWidth="1.5"/>
                  <rect x={cx - 6}  y={cy - 3} width="12" height="6"  rx="1" stroke={GF} strokeWidth="0.8"/>
                </g>
              )
            })}
          </svg>
        ),
      },
    ],
  },

  rings: {
    title:      'Rings',
    headline:   'RINGS THAT HIT.',
    body:       'Big face, iced face, or clean band. Made to get noticed.',
    note:       'Ask about sizing and available styles.',
    glow:       'rgba(208,238,255,0.07)',
    waMessage:  "Hey 2T — I'm looking at rings. What styles and sizes do you have available?",
    primaryCta: 'ASK ABOUT RINGS →',
    noCtaBox:   true,
    svg: (
      <svg width="60" height="68" viewBox="0 0 60 68" fill="none">
        <circle cx="30" cy="44" r="20" stroke="rgba(208,238,255,0.55)" strokeWidth="2.5"/>
        <path d="M22 24 L30 14 L38 24" stroke="rgba(208,238,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="14" r="4" fill="rgba(208,238,255,0.7)"/>
      </svg>
    ),
    styles: [
      {
        title:       'PINKY RING',
        description: 'Slim profile, clean look. Made for the pinky but sizes for any finger.',
        specs:       ["Sizes: ask what's available", 'Slim to mid-weight band', 'Gold or silver direction', 'Stone or no-stone options'],
        imageSrc:    null,
        imageAlt:    'Pinky ring — slim profile band',
        waMessage:   "Hey 2T — I'm looking at pinky rings. What sizes and styles do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <circle cx="120" cy="70" r="24" stroke={IC} strokeWidth="2.5"/>
            <circle cx="120" cy="70" r="16" stroke={IF} strokeWidth="1"/>
            <circle cx="120" cy="44" r="6"  stroke={IC} strokeWidth="1.5"/>
            <circle cx="120" cy="44" r="3"  fill={IC}   opacity="0.8"/>
            <line x1="114" y1="46" x2="116" y2="46" stroke={IC} strokeWidth="1" opacity="0.5"/>
            <line x1="124" y1="46" x2="126" y2="46" stroke={IC} strokeWidth="1" opacity="0.5"/>
          </svg>
        ),
      },
      {
        title:       'STATEMENT RING',
        description: 'Big face, bold presence. A ring that draws the eye from across the room.',
        specs:       ['Wide face or large stone top', "Sizes: ask what's available", 'Gold or silver direction', 'Stone options available'],
        imageSrc:    null,
        imageAlt:    'Statement ring — bold face design',
        waMessage:   "Hey 2T — I'm looking at statement rings. What face styles and sizes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <circle cx="120" cy="72" r="26" stroke={G}  strokeWidth="3"/>
            <circle cx="120" cy="72" r="18" stroke={GF} strokeWidth="1"/>
            <ellipse cx="120" cy="36" rx="20" ry="14" stroke={G}  strokeWidth="2"/>
            <ellipse cx="120" cy="36" rx="13" ry="8"  fill={IC}   opacity="0.65"/>
            <line x1="100" y1="42" x2="100" y2="46" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="140" y1="42" x2="140" y2="46" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="100" y1="30" x2="100" y2="26" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="140" y1="30" x2="140" y2="26" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title:       'SIGNET RING',
        description: 'Flat-top face. Clean, classic, built for personalization.',
        specs:       ['Wide rectangular face', "Sizes: ask what's available", 'Gold or silver direction', 'Engravable face'],
        imageSrc:    null,
        imageAlt:    'Signet ring — flat rectangular face',
        waMessage:   "Hey 2T — I'm looking at signet rings. What sizes and face styles do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <circle cx="120" cy="74" r="26" stroke={G}  strokeWidth="3"/>
            <circle cx="120" cy="74" r="18" stroke={GF} strokeWidth="1"/>
            <rect x="96"  y="18" width="48" height="36" rx="3" stroke={G}  strokeWidth="2"/>
            <rect x="103" y="25" width="34" height="22" rx="2" stroke={GF} strokeWidth="1"/>
          </svg>
        ),
      },
      {
        title:       'ICED RING',
        description: 'Stone-set face. Built to catch every light in the room.',
        specs:       ['Diamond or moissanite direction', 'Pavé or prong-set options', "Sizes: ask what's available", 'Details confirmed per piece'],
        imageSrc:    null,
        imageAlt:    'Iced-out ring — stone-set face',
        waMessage:   "Hey 2T — I'm looking at iced rings. What stone directions and sizes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <circle cx="120" cy="72" r="26" stroke={G}  strokeWidth="2.5"/>
            <circle cx="120" cy="72" r="18" stroke={GF} strokeWidth="1"/>
            <circle cx="120" cy="36" r="20" stroke={G}  strokeWidth="1.5"/>
            {([-8,0,8] as const).flatMap(dx =>
              ([-8,0,8] as const).map(dy =>
                Math.sqrt(dx * dx + dy * dy) <= 12
                  ? <circle key={`${dx},${dy}`} cx={120 + dx} cy={36 + dy} r="3.5" fill={IC} opacity="0.75"/>
                  : null
              )
            )}
            <line x1="120" y1="12" x2="120" y2="8"  stroke={IC} strokeWidth="1.2"/>
            <line x1="144" y1="36" x2="148" y2="36" stroke={IC} strokeWidth="1.2"/>
            <line x1="96"  y1="36" x2="92"  y2="36" stroke={IC} strokeWidth="1.2"/>
          </svg>
        ),
      },
      {
        title:       'BAND RING',
        description: 'Solid band. Clean finish, heavy feel. No stone — just weight.',
        specs:       ['Wide or slim band profile', 'Smooth or textured finish', "Sizes: ask what's available", 'Gold or silver direction'],
        imageSrc:    null,
        imageAlt:    'Band ring — solid clean band',
        waMessage:   "Hey 2T — I'm looking at band rings. What widths and sizes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <ellipse cx="120" cy="58" rx="52" ry="44" stroke={G}  strokeWidth="12"/>
            <ellipse cx="120" cy="58" rx="52" ry="44" stroke={GF} strokeWidth="6"  opacity="0.4"/>
            <ellipse cx="120" cy="58" rx="36" ry="28" stroke={GF} strokeWidth="1"/>
          </svg>
        ),
      },
      {
        title:       'SIZED & ENGRAVED',
        description: 'Custom sizing, engraving, or face design. Tell us what you need.',
        specs:       ['Special sizing or engraving', 'Custom face or name', "Material direction: ask first", 'Quoted per piece — ask before anything starts'],
        imageSrc:    null,
        imageAlt:    'Custom ring inquiry — special request',
        waMessage:   "Hey 2T — I have a specific ring in mind. Custom size, engraving, or face — can we talk?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <circle cx="120" cy="74" r="26" stroke={G}  strokeWidth="2.5"/>
            <circle cx="120" cy="74" r="18" stroke={GF} strokeWidth="1"/>
            <polygon points="120,16 144,32 144,52 120,58 96,52 96,32" stroke={G}  strokeWidth="1.8"/>
            <polygon points="120,16 144,32 120,58 96,32"              stroke={GF} strokeWidth="0.9"/>
            <circle cx="120" cy="37" r="7" fill={IC} opacity="0.6"/>
          </svg>
        ),
      },
    ],
  },

  earrings: {
    title:      'Earrings',
    headline:   'EARRINGS THAT CATCH LIGHT.',
    body:       'Studs, hoops, iced or clean. Shine at eye level.',
    note:       'Ask what\'s in stock. Details confirmed per piece.',
    glow:       'rgba(208,238,255,0.06)',
    waMessage:  "Hey 2T — I'm looking at earrings. What styles and directions do you have available?",
    primaryCta: 'ASK ABOUT EARRINGS →',
    noCtaBox:   true,
    svg: (
      <svg width="60" height="68" viewBox="0 0 60 68" fill="none">
        <line x1="16" y1="5"  x2="16" y2="18" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="16" cy="38" rx="9" ry="16" stroke="rgba(208,238,255,0.55)" strokeWidth="1.5"/>
        <circle  cx="16" cy="38" r="3.5" fill="rgba(208,238,255,0.55)"/>
        <line x1="44" y1="5"  x2="44" y2="18" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="44" cy="38" rx="9" ry="16" stroke="rgba(208,238,255,0.55)" strokeWidth="1.5"/>
        <circle  cx="44" cy="38" r="3.5" fill="rgba(208,238,255,0.55)"/>
      </svg>
    ),
    styles: [
      {
        title:       'STUD EARRINGS',
        description: 'Clean, round, sits flat on the ear. Classic for a reason.',
        specs:       ['Round or princess cut', "Sizes: ask what's available", 'Gold or silver post', 'Stone or no-stone options'],
        imageSrc:    null,
        imageAlt:    'Stud earrings — round clean studs',
        waMessage:   "Hey 2T — I'm looking at stud earrings. What sizes and stone directions do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <line x1="78"  y1="8" x2="78"  y2="28" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="78"  cy="55" r="22" stroke={G}  strokeWidth="2"/>
            <circle cx="78"  cy="55" r="14" fill={IC}   opacity="0.5"/>
            <circle cx="78"  cy="55" r="6"  fill={IC}   opacity="0.85"/>
            <line x1="162" y1="8" x2="162" y2="28" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="162" cy="55" r="22" stroke={G}  strokeWidth="2"/>
            <circle cx="162" cy="55" r="14" fill={IC}   opacity="0.5"/>
            <circle cx="162" cy="55" r="6"  fill={IC}   opacity="0.85"/>
          </svg>
        ),
      },
      {
        title:       'HOOP EARRINGS',
        description: 'Classic open ring. Thin or chunky, gold or silver.',
        specs:       ['Small (25mm) to large (50mm+)', 'Thin wire or tube body', 'Gold or silver direction', 'Plain or textured finish'],
        imageSrc:    null,
        imageAlt:    'Hoop earrings — open ring style',
        waMessage:   "Hey 2T — I'm looking at hoop earrings. What sizes and finishes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <line x1="78"  y1="8" x2="78"  y2="30" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M48,64 A30,30 0 1 1 108,64" stroke={G} strokeWidth="4" strokeLinecap="round"/>
            <line x1="162" y1="8" x2="162" y2="30" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M132,64 A30,30 0 1 1 192,64" stroke={G} strokeWidth="4" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title:       'DROP EARRINGS',
        description: 'Hangs below the ear. Teardrop or elongated stone shape.',
        specs:       ['Teardrop or elongated form', "Length: ask what's available", 'Gold or silver setting', 'Stone or brushed metal options'],
        imageSrc:    null,
        imageAlt:    'Drop earrings — teardrop hanging style',
        waMessage:   "Hey 2T — I'm looking at drop earrings. What shapes and lengths do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <line x1="78"  y1="5" x2="78"  y2="22" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M58,50 Q58,90 78,92 Q98,90 98,50 Q98,28 78,22 Z" stroke={G} strokeWidth="1.8"/>
            <ellipse cx="78"  cy="63" rx="10" ry="14" fill={IC} opacity="0.45"/>
            <line x1="162" y1="5" x2="162" y2="22" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M142,50 Q142,90 162,92 Q182,90 182,50 Q182,28 162,22 Z" stroke={G} strokeWidth="1.8"/>
            <ellipse cx="162" cy="63" rx="10" ry="14" fill={IC} opacity="0.45"/>
          </svg>
        ),
      },
      {
        title:       'ICED STUDS',
        description: 'Stone-set from the face out. Full shine, flat on the ear.',
        specs:       ['Diamond or moissanite direction', 'Pavé or prong-set face', "Sizes: ask what's available", 'Details confirmed per piece'],
        imageSrc:    null,
        imageAlt:    'Iced stud earrings — stone-set face',
        waMessage:   "Hey 2T — I'm looking at iced studs. What stone directions and sizes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <line x1="78"  y1="8" x2="78"  y2="28" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="78"  cy="55" r="22" stroke={G} strokeWidth="2"/>
            {([-8,0,8] as const).flatMap(dx =>
              ([-8,0,8] as const).map(dy =>
                Math.sqrt(dx * dx + dy * dy) <= 14
                  ? <circle key={`L${dx},${dy}`} cx={78 + dx} cy={55 + dy} r="3" fill={IC} opacity="0.75"/>
                  : null
              )
            )}
            <line x1="78"  y1="28" x2="78"  y2="24" stroke={IC} strokeWidth="1"/>
            <line x1="56"  y1="55" x2="52"  y2="55" stroke={IC} strokeWidth="1"/>
            <line x1="100" y1="55" x2="104" y2="55" stroke={IC} strokeWidth="1"/>
            <line x1="162" y1="8" x2="162" y2="28" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="162" cy="55" r="22" stroke={G} strokeWidth="2"/>
            {([-8,0,8] as const).flatMap(dx =>
              ([-8,0,8] as const).map(dy =>
                Math.sqrt(dx * dx + dy * dy) <= 14
                  ? <circle key={`R${dx},${dy}`} cx={162 + dx} cy={55 + dy} r="3" fill={IC} opacity="0.75"/>
                  : null
              )
            )}
            <line x1="162" y1="28" x2="162" y2="24" stroke={IC} strokeWidth="1"/>
            <line x1="140" y1="55" x2="136" y2="55" stroke={IC} strokeWidth="1"/>
            <line x1="184" y1="55" x2="188" y2="55" stroke={IC} strokeWidth="1"/>
          </svg>
        ),
      },
      {
        title:       'CLUSTER EARRINGS',
        description: 'Multiple stones, one setting. More shine in a smaller surface.',
        specs:       ['Center stone + surrounding stones', 'Diamond or moissanite direction', 'Gold or silver setting', 'Details confirmed per piece'],
        imageSrc:    null,
        imageAlt:    'Cluster earrings — multi-stone setting',
        waMessage:   "Hey 2T — I'm looking at cluster earrings. What styles and stone directions do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <line x1="78"  y1="8" x2="78"  y2="22" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="78"  cy="55" r="26" stroke={G} strokeWidth="1.5"/>
            <circle cx="78"  cy="55" r="9"  fill={IC} opacity="0.85"/>
            {([[0,-15],[15,0],[0,15],[-15,0],[11,-11],[-11,-11],[11,11],[-11,11]] as [number,number][]).map(([dx,dy], i) => (
              <circle key={`lc${i}`} cx={78 + dx} cy={55 + dy} r="4.5" fill={IC} opacity="0.55"/>
            ))}
            <line x1="162" y1="8" x2="162" y2="22" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="162" cy="55" r="26" stroke={G} strokeWidth="1.5"/>
            <circle cx="162" cy="55" r="9"  fill={IC} opacity="0.85"/>
            {([[0,-15],[15,0],[0,15],[-15,0],[11,-11],[-11,-11],[11,11],[-11,11]] as [number,number][]).map(([dx,dy], i) => (
              <circle key={`rc${i}`} cx={162 + dx} cy={55 + dy} r="4.5" fill={IC} opacity="0.55"/>
            ))}
          </svg>
        ),
      },
      {
        title:       'EVERYDAY SHINE',
        description: 'Lightweight, comfortable, always on. Low-key shine for any day.',
        specs:       ['Small to medium size', 'Gold or silver direction', 'Stone or brushed-metal options', 'Details confirmed per piece'],
        imageSrc:    null,
        imageAlt:    'Everyday shine earrings — lightweight daily wear',
        waMessage:   "Hey 2T — I'm looking for everyday earrings, something clean and wearable. What do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <line x1="78"  y1="8" x2="78"  y2="26" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="78"  cy="50" r="18" stroke={G}  strokeWidth="1.8"/>
            <circle cx="78"  cy="50" r="8"  fill={G}    opacity="0.5"/>
            <circle cx="78"  cy="50" r="3.5" fill={IC}  opacity="0.8"/>
            <line x1="78"  y1="27" x2="78"  y2="24" stroke={IC} strokeWidth="1" opacity="0.6"/>
            <line x1="96"  y1="50" x2="99"  y2="50" stroke={IC} strokeWidth="1" opacity="0.6"/>
            <line x1="60"  y1="50" x2="57"  y2="50" stroke={IC} strokeWidth="1" opacity="0.6"/>
            <line x1="162" y1="8" x2="162" y2="26" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="162" cy="50" r="18" stroke={G}  strokeWidth="1.8"/>
            <circle cx="162" cy="50" r="8"  fill={G}    opacity="0.5"/>
            <circle cx="162" cy="50" r="3.5" fill={IC}  opacity="0.8"/>
            <line x1="162" y1="27" x2="162" y2="24" stroke={IC} strokeWidth="1" opacity="0.6"/>
            <line x1="180" y1="50" x2="183" y2="50" stroke={IC} strokeWidth="1" opacity="0.6"/>
            <line x1="144" y1="50" x2="141" y2="50" stroke={IC} strokeWidth="1" opacity="0.6"/>
          </svg>
        ),
      },
    ],
  },

  'best-sellers': {
    title:         'Most Asked About',
    headline:      'What people text 2T for.',
    body:          "Chains that hit the neck. Pendants that mean something. Grillz that fit. Watches that speak. Ask what people are getting — we'll tell you what's available now.",
    note:          "Availability changes. Text 2T to confirm what's in stock now.",
    glow:          'rgba(201,168,76,0.10)',
    waMessage:     "Hey 2T — I want to ask what pieces people are getting most right now and what's available.",
    primaryCta:    "TEXT 2T WHAT'S MOVING →",
    stylesEyebrow: 'MOST ASKED ABOUT',
    stylesSubhead: '6 directions people text 2T for most.',
    ctaHeading:    'Text 2T. Find what people are getting.',
    directionNote: 'Gold or silver. Diamond or moissanite. Different shine. Different direction. Details confirmed per piece.',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <polygon points="32,4 38,24 60,24 43,37 49,58 32,45 15,58 21,37 4,24 26,24" stroke="rgba(201,168,76,0.65)" strokeWidth="1.5" fill="none"/>
        <circle cx="32" cy="32" r="6" fill="rgba(201,168,76,0.5)"/>
      </svg>
    ),
    styles: [
      {
        title:       'CUBAN CHAINS',
        description: 'Foundation of the neck. The most-asked-about chain at 2T. Ask about width, length, material, and what\'s in stock.',
        specs:       ['Cuban link — flat interlocking', "Width and length: ask what's in", 'Gold or silver direction', 'Clean or iced-out'],
        imageSrc:    null,
        imageAlt:    'Cuban chain direction at 2T',
        waMessage:   "Hey 2T — I'm asking about Cuban chains. What widths and styles do you have available?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            {([40, 83, 126, 169] as const).map(cx => (
              <ellipse key={cx} cx={cx} cy="55" rx="21" ry="13" stroke={G} strokeWidth="2"/>
            ))}
            {([62, 105, 148] as const).map(cx => (
              <circle key={cx} cx={cx} cy="55" r="3" fill={IC} opacity="0.65"/>
            ))}
            <line x1="188" y1="55" x2="210" y2="55" stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="210" cy="55" r="4" fill={G} opacity="0.65"/>
          </svg>
        ),
      },
      {
        title:       'CUSTOM PENDANTS',
        description: 'Logo, photo, name, or number. The most requested custom direction. Send the idea — we quote before the build.',
        specs:       ['Photo, logo, name, or number pendant', 'Custom or ready-made direction', 'Gold or silver direction', 'No deposit to start'],
        imageSrc:    null,
        imageAlt:    'Custom pendant direction at 2T',
        waMessage:   "Hey 2T — I'm asking about custom pendants. Can I send a photo, logo, or name?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <rect x="113" y="8" width="14" height="18" rx="7" stroke={IC} strokeWidth="1.5"/>
            <path d="M76 55 L120 22 L164 55 L120 94 Z" stroke={IC} strokeWidth="1.8"/>
            <path d="M76 55 L120 66 L164 55" stroke={IC} strokeWidth="0.75" opacity="0.35"/>
            <circle cx="120" cy="58" r="9" fill={IC} opacity="0.45"/>
            <circle cx="120" cy="58" r="4.5" fill={IC} opacity="0.9"/>
          </svg>
        ),
      },
      {
        title:       'GRILLZ',
        description: 'Top set, bottom set, full mouth. The most asked-about custom piece. Text to start the fit conversation.',
        specs:       ['Top set / bottom set / full mouth', 'Gold or silver direction', 'Stone options available', 'Text to ask about the process'],
        imageSrc:    null,
        imageAlt:    'Grillz direction at 2T',
        waMessage:   "Hey 2T — I'm asking about grillz. What's the process and what's available?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <path d="M52 35 Q120 20 188 35 L188 72 Q120 87 52 72 Z" stroke={G} strokeWidth="1.8" fill="none"/>
            {([0,1,2,3,4,5] as const).map(i => (
              <rect key={i} x={63 + i * 21} y="38" width="14" height="26" rx="2" stroke={GF} strokeWidth="1.2"/>
            ))}
            {([0,2,4] as const).map(i => (
              <circle key={`g${i}`} cx={70 + i * 21} cy="51" r="3.5" fill={IC} opacity="0.5"/>
            ))}
          </svg>
        ),
      },
      {
        title:       'ICED WATCHES',
        description: 'Bust-down and iced-out directions. High-ticket, high-ask. Text before you buy — details confirmed per piece.',
        specs:       ['Ask what watches are available now', 'Condition confirmed per piece', 'Details and pricing by text', 'Ask before you commit'],
        imageSrc:    null,
        imageAlt:    'Iced watch direction at 2T',
        waMessage:   "Hey 2T — I'm asking about iced watches. What do you have available?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <circle cx="120" cy="55" r="34" stroke={G} strokeWidth="2.5"/>
            <circle cx="120" cy="55" r="25" stroke={GF} strokeWidth="1"/>
            <circle cx="120" cy="55" r="16" stroke={GB} strokeWidth="1.5"/>
            {([0,1,2,3,4,5,6,7] as const).map(i => {
              const a = (i / 8) * Math.PI * 2 - Math.PI / 2
              const x = 120 + 30 * Math.cos(a)
              const y = 55  + 30 * Math.sin(a)
              return <circle key={i} cx={x} cy={y} r="3" fill={IC} opacity="0.72"/>
            })}
            <line x1="120" y1="55" x2="120" y2="38" stroke={IC} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="120" y1="55" x2="134" y2="55" stroke={IC} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title:       'ROPE + TENNIS CHAINS',
        description: 'Second and third most-asked chains. Rope or tennis — ask about width, length, material, and what\'s in stock.',
        specs:       ['Rope chain or tennis direction', 'Width and length confirmed per piece', 'Gold or silver direction', 'Stone or clean — ask what fits'],
        imageSrc:    null,
        imageAlt:    'Rope and tennis chain direction at 2T',
        waMessage:   "Hey 2T — I'm asking about rope or tennis chains. What styles and sizes do you have?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <path d="M28 34 Q120 24 212 34" stroke={G} strokeWidth="4" strokeLinecap="round"/>
            <path d="M28 40 Q120 30 212 40" stroke={GF} strokeWidth="2" strokeDasharray="12 7" opacity="0.5"/>
            {([0,1,2,3,4,5,6,7] as const).map(i => {
              const x = 36 + i * 24
              return (
                <g key={i}>
                  <circle cx={x} cy="72" r="7.5" stroke={G} strokeWidth="1.5"/>
                  <circle cx={x} cy="72" r="4"   fill={IC}  opacity="0.6"/>
                </g>
              )
            })}
          </svg>
        ),
      },
      {
        title:       'NOT SURE YET',
        description: 'Start with the look. Text 2T and we\'ll point you to the right piece.',
        specs:       ['Chains, pendants, grillz, or watches', 'Gold or silver direction', 'Details confirmed per piece', 'Ask what\'s available'],
        imageSrc:    null,
        imageAlt:    'Not sure yet — all directions available at 2T',
        waMessage:   "Hey 2T — I'm not sure what I want yet. Can you help me figure out the right piece?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <circle cx="120" cy="55" r="30" stroke={GF} strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="120" cy="55" r="10" stroke={G} strokeWidth="1.5"/>
            <circle cx="120" cy="55" r="4" fill={G} opacity="0.7"/>
            {([0,1,2,3] as const).map(i => {
              const a = (i / 4) * Math.PI * 2 - Math.PI / 4
              const x2 = 120 + 24 * Math.cos(a)
              const y2 = 55  + 24 * Math.sin(a)
              return <line key={i} x1={120} y1={55} x2={x2} y2={y2} stroke={GB} strokeWidth="1.5" strokeLinecap="round"/>
            })}
            {([0,1,2,3] as const).map(i => {
              const a = (i / 4) * Math.PI * 2
              const x = 120 + 44 * Math.cos(a)
              const y = 55  + 44 * Math.sin(a)
              return <circle key={`o${i}`} cx={x} cy={y} r="4.5" stroke={IC} strokeWidth="1.2" fill="none"/>
            })}
          </svg>
        ),
      },
    ],
  },

  'new-arrivals': {
    title:         'Ask What Just Landed',
    headline:      'New pieces. New directions. Text 2T to find out.',
    body:          "New chains, pendants, watches, grillz, and custom directions as they come in. Availability changes. The fastest way to know what just landed is to text us.",
    note:          'Availability changes fast. Text 2T to confirm before you make a move.',
    glow:          'rgba(208,238,255,0.07)',
    waMessage:     "Hey 2T — I want to ask what just came in. What's new in chains, pendants, watches, or custom directions?",
    primaryCta:    "TEXT 2T WHAT'S NEW →",
    stylesEyebrow: 'ASK WHAT JUST LANDED',
    stylesSubhead: '6 directions to ask about now.',
    ctaHeading:    'Text 2T. Ask what just came in.',
    directionNote: 'Gold or silver. Diamond or moissanite. Different shine. Different direction. Details confirmed per piece.',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="24" stroke="rgba(208,238,255,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
        <line x1="32" y1="10" x2="32" y2="54" stroke="rgba(208,238,255,0.25)" strokeWidth="1"/>
        <line x1="10" y1="32" x2="54" y2="32" stroke="rgba(208,238,255,0.25)" strokeWidth="1"/>
        <circle cx="32" cy="32" r="5" fill="rgba(208,238,255,0.7)"/>
        <circle cx="32" cy="10" r="3" fill="rgba(201,168,76,0.8)"/>
      </svg>
    ),
    styles: [
      {
        title:       'NEW CHAINS',
        description: 'When new chains come in, they move. Ask before they go — Cuban, rope, or tennis direction.',
        specs:       ['Cuban, rope, or tennis direction', "Width and length: ask what's in", 'Gold or silver direction', 'Iced or clean'],
        imageSrc:    null,
        imageAlt:    'New chain direction at 2T',
        waMessage:   "Hey 2T — I want to ask what chains just came in. What's new?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            {([40, 83, 126, 169] as const).map(cx => (
              <ellipse key={cx} cx={cx} cy="60" rx="21" ry="13" stroke={G} strokeWidth="2"/>
            ))}
            {([62, 105, 148] as const).map(cx => (
              <circle key={cx} cx={cx} cy="60" r="3" fill={IC} opacity="0.65"/>
            ))}
            <line x1="196" y1="20" x2="196" y2="32" stroke={IC} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="190" y1="26" x2="202" y2="26" stroke={IC} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="196" cy="26" r="6" stroke={IC} strokeWidth="1" opacity="0.4"/>
          </svg>
        ),
      },
      {
        title:       'FRESH PENDANTS',
        description: 'New iced-out, custom-ready, or ready-made pendants as they come in. Ask first — details confirmed per piece.',
        specs:       ['Iced-out or clean direction', 'Custom or ready-made', 'Gold or silver direction', 'Details confirmed per piece'],
        imageSrc:    null,
        imageAlt:    'Fresh pendant direction at 2T',
        waMessage:   "Hey 2T — I want to ask what pendants just came in. What's new?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <rect x="113" y="8" width="14" height="18" rx="7" stroke={G} strokeWidth="1.5"/>
            <path d="M76 55 L120 22 L164 55 L120 94 Z" stroke={G} strokeWidth="1.8"/>
            <path d="M76 55 L120 66 L164 55" stroke={G} strokeWidth="0.75" opacity="0.35"/>
            <circle cx="120" cy="58" r="9" fill={G} opacity="0.38"/>
            <circle cx="120" cy="58" r="4.5" fill={G} opacity="0.85"/>
            <circle cx="163" cy="22" r="4" fill={IC} opacity="0.8"/>
            <line x1="163" y1="13" x2="163" y2="17" stroke={IC} strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="172" y1="22" x2="168" y2="22" stroke={IC} strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title:       'INCOMING GRILLZ',
        description: 'New grillz directions and options as they arrive. Text to start the fit conversation before anything gets made.',
        specs:       ['Top set / bottom set / full mouth', 'Gold or silver direction', 'Stone options as they come in', 'Text to ask about the process'],
        imageSrc:    null,
        imageAlt:    'Incoming grillz direction at 2T',
        waMessage:   "Hey 2T — I want to ask what grillz are available or coming in soon.",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <path d="M52 35 Q120 20 188 35 L188 72 Q120 87 52 72 Z" stroke={GB} strokeWidth="1.8" fill="none"/>
            {([0,1,2,3,4,5] as const).map(i => (
              <rect key={i} x={63 + i * 21} y="38" width="14" height="26" rx="2" stroke={GF} strokeWidth="1.2"/>
            ))}
            {([1,3,5] as const).map(i => (
              <circle key={`n${i}`} cx={70 + i * 21} cy="51" r="3.5" fill={IC} opacity="0.58"/>
            ))}
            <path d="M196 40 L208 53 L196 66" stroke={IC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
      },
      {
        title:       'WATCH INQUIRIES',
        description: 'New watch inventory moves fast. Text before it\'s gone — details and pricing confirmed per piece.',
        specs:       ['Ask what watches are available now', 'Iced-out and bust-down directions', 'Condition confirmed per piece', 'Text before you commit'],
        imageSrc:    null,
        imageAlt:    'Watch inquiry at 2T',
        waMessage:   "Hey 2T — I want to ask what watches just came in or are available now.",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <circle cx="120" cy="55" r="34" stroke={GB} strokeWidth="2.5"/>
            <circle cx="120" cy="55" r="25" stroke={GF} strokeWidth="1"/>
            <circle cx="120" cy="55" r="16" stroke={GF} strokeWidth="1.5"/>
            {([0,1,2,3,4,5,6,7] as const).map(i => {
              const a = (i / 8) * Math.PI * 2 - Math.PI / 2
              const x = 120 + 30 * Math.cos(a)
              const y = 55  + 30 * Math.sin(a)
              return <circle key={i} cx={x} cy={y} r="3" fill={G} opacity="0.65"/>
            })}
            <line x1="120" y1="55" x2="120" y2="40" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="120" y1="55" x2="130" y2="60" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="151" cy="24" r="5" fill={IC} opacity="0.82"/>
          </svg>
        ),
      },
      {
        title:       'CUSTOM DIRECTIONS',
        description: 'New custom ideas, new reference pieces, new material directions. Send the photo, logo, or name — we quote before the build.',
        specs:       ['Photo, logo, name, or number', 'Send the idea for a quote', "Ask what's possible now", 'No deposit to start'],
        imageSrc:    null,
        imageAlt:    'Custom direction inquiry at 2T',
        waMessage:   "Hey 2T — I have a custom idea. What can be made right now? I can send a photo or logo.",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <polygon points="120,14 132,48 168,48 140,68 152,104 120,84 88,104 100,68 72,48 108,48" stroke={G} strokeWidth="1.8" fill="none"/>
            <circle cx="120" cy="60" r="9" fill={IC} opacity="0.42"/>
            <circle cx="120" cy="60" r="4.5" fill={IC} opacity="0.88"/>
            <line x1="120" y1="48" x2="120" y2="42" stroke={IC} strokeWidth="1" opacity="0.55"/>
            <line x1="132" y1="52" x2="136" y2="48" stroke={IC} strokeWidth="1" opacity="0.55"/>
            <line x1="108" y1="52" x2="104" y2="48" stroke={IC} strokeWidth="1" opacity="0.55"/>
          </svg>
        ),
      },
      {
        title:       "ASK WHAT'S RUNNING",
        description: 'Not sure what just came in? Text 2T and ask what\'s moving now.',
        specs:       ['New chains, pendants, watches, or custom directions', 'Availability changes', 'Details confirmed per piece', 'Text before you move'],
        imageSrc:    null,
        imageAlt:    "Ask what's running now at 2T",
        waMessage:   "Hey 2T — I'm not sure what's new. Can you tell me what's moving right now?",
        illustration: (
          <svg viewBox="0 0 240 110" fill="none" width="100%" height="100%">
            <path d="M35 55 L182 55" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M166 38 L188 55 L166 72" stroke={G} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            {([55, 88, 121, 154] as const).map(x => (
              <circle key={x} cx={x} cy="55" r="4" fill={IC} opacity="0.55"/>
            ))}
            <circle cx="35" cy="55" r="4.5" stroke={GB} strokeWidth="1.5" fill="none"/>
            <circle cx="188" cy="55" r="6" fill={G} opacity="0.55"/>
            <circle cx="188" cy="55" r="3" fill={G} opacity="0.9"/>
          </svg>
        ),
      },
    ],
  },
}

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(CATEGORY_DATA).map((category) => ({ category }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

type Props = { params: Promise<{ category: string }> }

const SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  rings: {
    title:       '2T Jewelers | Rings — Iced & Custom | Pittsburgh, PA',
    description: 'Iced-out rings and custom ring designs at 2T Jewelers in Pittsburgh, PA. Ask about styles, materials, and availability. Text 2T.',
  },
  bracelets: {
    title:       '2T Jewelers | Bracelets — Tennis, Cuban & Custom | Pittsburgh, PA',
    description: 'Tennis, Cuban link, and custom bracelets at 2T Jewelers in Pittsburgh, PA. Material details confirmed per piece. Text 2T to ask.',
  },
  earrings: {
    title:       '2T Jewelers | Earrings — Iced Studs & Hoops | Pittsburgh, PA',
    description: 'Iced studs, hoops, and custom earrings at 2T Jewelers in Pittsburgh, PA. Material details confirmed per piece. Ask what\'s available.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const data = CATEGORY_DATA[category]
  if (!data) return {}

  const noIndexCategories = ['best-sellers', 'new-arrivals']
  const robotsMeta = noIndexCategories.includes(category)
    ? { robots: { index: false, follow: true } }
    : {}

  const seo = SEO_OVERRIDES[category] ?? {
    title:       `2T Jewelers | ${data.title} — Pittsburgh, PA`,
    description: `Shop ${data.title.toLowerCase()} at 2T Jewelers in Pittsburgh, PA. Real store. 25 years. Ask about availability and material details. Text to ask.`,
  }

  return { ...seo, ...robotsMeta }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const data = CATEGORY_DATA[category]
  if (!data) notFound()

  const waEncoded = encodeURIComponent(data.waMessage)
  const waHref    = `https://wa.me/14124524343?text=${waEncoded}`

  return (
    <main style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingTop: '80px' }}>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 3vw, 2.5rem) clamp(2.5rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--color-brand-border)',
          position:     'relative',
          overflow:     'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            inset:         0,
            background:    `radial-gradient(ellipse 55% 60% at 20% 50%, ${data.glow} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              display:      'flex',
              gap:          '8px',
              alignItems:   'center',
              marginBottom: '2rem',
              fontFamily:   'var(--font-body)',
              fontSize:     '0.75rem',
              color:        'var(--color-brand-subtle)',
              letterSpacing:'0.04em',
            }}
          >
            <Link href="/collections" className="nav-link-footer" style={{ fontSize: '0.75rem' }}>
              Collections
            </Link>
            <span style={{ color: 'var(--color-brand-border)' }}>›</span>
            <span style={{ color: 'var(--color-brand-silver)' }}>{data.title}</span>
          </nav>

          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div
              style={{
                flexShrink:     0,
                width:          '96px',
                height:         '96px',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                border:         '1px solid var(--color-brand-border)',
                background:     'var(--color-brand-charcoal)',
              }}
            >
              {data.svg}
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h1
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(2.4rem, 6vw, 4.8rem)',
                  fontWeight:    400,
                  lineHeight:    0.92,
                  letterSpacing: '-0.02em',
                  color:         'var(--color-brand-white)',
                  marginBottom:  '1rem',
                }}
              >
                {data.title}
              </h1>
              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontStyle:    'italic',
                  color:        'var(--color-brand-gold)',
                  marginBottom: '1rem',
                  lineHeight:   1.2,
                }}
              >
                {data.headline}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.9375rem',
                  color:      'var(--color-brand-silver)',
                  lineHeight: 1.65,
                  maxWidth:   '52ch',
                }}
              >
                {data.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Style Cards ────────────────────────────────────────────
           Renders only for categories with styles defined.
           Set imageSrc on a card to replace the SVG with a real photo. */}
      {data.styles && data.styles.length > 0 && (
        <section
          style={{
            padding:      'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2.5rem) clamp(3rem, 6vw, 4.5rem)',
            borderBottom: '1px solid var(--color-brand-border)',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>
              {data.stylesEyebrow ?? `SHOP ${data.title.toUpperCase()}`}
            </span>
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
              {data.stylesSubhead ?? `${data.styles.length} styles. One piece that hits.`}
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
              {data.styles.map((style) => (
                <div
                  key={style.title}
                  style={{
                    background:    'var(--color-brand-black)',
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
                      style.illustration
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

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
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
                            style={{ position: 'absolute', left: 0, color: 'var(--color-brand-gold)', opacity: 0.75, fontSize: '0.7rem' }}
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

            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.78rem',
                color:         'var(--color-brand-subtle)',
                letterSpacing: '0.02em',
              }}
            >
              Details confirmed per piece. Ask what&rsquo;s in stock and available.
            </p>
          </div>
        </section>
      )}

      {/* ── Direction Chips ─────────────────────────────────────── */}
      {data.chips && data.chips.length > 0 && (
        <section
          style={{
            padding:      'clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 3vw, 2.5rem)',
            borderBottom: '1px solid var(--color-brand-border)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>NARROW IT DOWN</span>
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
              Tell us the style when you text.
            </p>
            <div className="chip-row" style={{ marginBottom: '1rem' }}>
              {data.chips.map((chip) => (
                <span key={chip} className="direction-chip">{chip}</span>
              ))}
            </div>
            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.8rem',
                color:         'var(--color-brand-subtle)',
                letterSpacing: '0.02em',
              }}
            >
              Tell us the direction when you text. We guide from there.
            </p>
          </div>
        </section>
      )}

      {/* ── Material & Stone Direction ──────────────────────────── */}
      {(data.materialChips || data.stoneChips) && (
        <section
          style={{
            padding:      'clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 3vw, 2.5rem)',
            borderBottom: '1px solid var(--color-brand-border)',
            background:   'var(--color-brand-charcoal)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>MATERIAL DIRECTION</span>
            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight:   400,
                color:        'var(--color-brand-white)',
                lineHeight:   1.1,
                marginBottom: '1.75rem',
              }}
            >
              Gold or silver. Diamond or moissanite.
            </p>

            {data.materialChips && (
              <div style={{ marginBottom: '1.25rem' }}>
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.65rem',
                    fontWeight:    600,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color:         'var(--color-brand-gold)',
                    marginBottom:  '0.6rem',
                    opacity:       0.85,
                  }}
                >
                  METAL
                </p>
                <div className="chip-row">
                  {data.materialChips.map((chip) => (
                    <span key={chip} className="direction-chip">{chip}</span>
                  ))}
                </div>
              </div>
            )}

            {data.stoneChips && (
              <div style={{ marginBottom: '1.5rem' }}>
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.65rem',
                    fontWeight:    600,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color:         'var(--color-brand-gold)',
                    marginBottom:  '0.6rem',
                    opacity:       0.85,
                  }}
                >
                  STONE
                </p>
                <div className="chip-row">
                  {data.stoneChips.map((chip) => (
                    <span key={chip} className="direction-chip">{chip}</span>
                  ))}
                </div>
              </div>
            )}

            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.82rem',
                color:         'var(--color-brand-subtle)',
                letterSpacing: '0.02em',
              }}
            >
              Different shine. Different direction. Details confirmed per piece.
            </p>
          </div>
        </section>
      )}

      {/* ── Direction Note (best-sellers / new-arrivals) ─────────── */}
      {data.directionNote && !data.materialChips && (
        <section
          style={{
            padding:      'clamp(1.5rem, 3vw, 2rem) clamp(1.25rem, 3vw, 2.5rem)',
            borderBottom: '1px solid var(--color-brand-border)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.82rem',
                color:         'var(--color-brand-subtle)',
                letterSpacing: '0.03em',
              }}
            >
              {data.directionNote}
            </p>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 3vw, 2.5rem)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {data.noCtaBox ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {data.primaryCta}
            </a>
          ) : (
            <div
              style={{
                padding:    'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
                border:     '1px solid rgba(201,168,76,0.25)',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.01) 100%)',
                position:   'relative',
                overflow:   'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position:   'absolute',
                  inset:      0,
                  background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
                }}
              />

              <span className="section-eyebrow" style={{ marginBottom: '0.75rem', position: 'relative' }}>
                START THE CONVERSATION
              </span>

              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(1.5rem, 3.5vw, 2.4rem)',
                  fontWeight:   400,
                  color:        'var(--color-brand-white)',
                  lineHeight:   1.0,
                  marginBottom: '0.75rem',
                  position:     'relative',
                }}
              >
                {data.ctaHeading ?? `Text 2T about ${data.title.toLowerCase()}.`}
              </p>

              <p
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '0.875rem',
                  color:        'var(--color-brand-muted)',
                  lineHeight:   1.65,
                  maxWidth:     '46ch',
                  marginBottom: '0.5rem',
                  position:     'relative',
                }}
              >
                {data.note}
              </p>

              <p
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'var(--color-brand-subtle)',
                  marginBottom:  '1.75rem',
                  position:      'relative',
                }}
              >
                Product details confirmed per piece.
              </p>

              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', position: 'relative' }}>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {data.primaryCta}
                </a>
              </div>
            </div>
          )}

          <div style={{ marginTop: '2.5rem' }}>
            <Link
              href="/collections"
              className="nav-link-footer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', letterSpacing: '0.03em' }}
            >
              ← All Collections
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
