import type { Metadata } from 'next'
import Link from 'next/link'

// ── Proof slot types ────────────────────────────────────────────────────────
// All constants below are null / empty by default.
// Populate with real, verified assets before any slot becomes visible.

type FeaturedPiece = {
  label:      string   // e.g. "MIAMI CUBAN — GOLD DIRECTION"
  descriptor: string   // claim-safe descriptor, no karat/grade/price claims
  imageSrc:   string   // path under /public/assets/ — real photo required
  imageAlt:   string   // descriptive alt text
  waMessage:  string   // pre-filled WhatsApp text specific to this piece
}

type ProofAsset = {
  src:      string  // path under /public/assets/ — real photo required
  alt:      string  // descriptive alt text — no claim language
  caption?: string  // optional one-liner, no unverified claims
}

type ActiveOffer = {
  headline:    string   // confirmed offer copy only
  body:        string   // claim-safe body
  ctaLabel:    string   // button label
  waMessage:   string   // pre-filled WhatsApp text
  promoTerms?: string   // e.g. "Offer terms shown on eligible items only."
}

// ── Chain style catalog type ─────────────────────────────────────────────────
// imageSrc is null until a real verified photo is ready for that style.
// When null, a geometric SVG illustration renders as the visual fallback.
// To activate a real photo: set imageSrc to the path under /public/assets/chains/

type ChainStyle = {
  title:       string
  description: string
  specs:       string[]
  imageSrc:    string | null
  imageAlt:    string
  waMessage:   string
}

// ── Gated proof / offer constants ────────────────────────────────────────────
// Set to populated objects only when real verified assets / offers exist.

const FEATURED_PIECE: FeaturedPiece | null = null
const PROOF_ASSETS: ProofAsset[] = []
const HAS_ACTIVE_OFFER = false
const ACTIVE_OFFER: ActiveOffer | null = null

// ── Chain style catalog ───────────────────────────────────────────────────────
// imageSrc defaults to null — SVG fallback renders until a real photo is provided.

const CHAIN_STYLES: ChainStyle[] = [
  {
    title:       'CUBAN CHAIN',
    description: 'Bold link style. The most requested chain to hold the piece.',
    specs:       ['Width and length confirmed per piece', 'Gold or silver direction', "Ask what's available"],
    imageSrc:    null,
    imageAlt:    'Cuban link chain — flat interlocking links',
    waMessage:   "Hey 2T — I'm looking at Cuban chains. What widths and lengths do you have available?",
  },
  {
    title:       'ROPE CHAIN',
    description: 'Twisted links. A classic shine that moves.',
    specs:       ['Length confirmed per piece', 'Gold or silver direction', "Ask what's available"],
    imageSrc:    null,
    imageAlt:    'Rope chain — twisted link texture',
    waMessage:   "Hey 2T — I'm looking at rope chains. What thicknesses and lengths do you have? Gold or silver direction.",
  },
  {
    title:       'TENNIS CHAIN',
    description: 'Stone-set all the way around. Built for shine.',
    specs:       ['Diamond or moissanite direction', 'Stone details confirmed per piece', "Ask what's available"],
    imageSrc:    null,
    imageAlt:    'Tennis chain — continuous stone-set links',
    waMessage:   "Hey 2T — I'm interested in a tennis chain. What stone directions and lengths do you have? Diamond or moissanite — let me know what's available.",
  },
  {
    title:       'FRANCO CHAIN',
    description: 'Four-sided structure. Heavier build. Strong profile.',
    specs:       ['Width and length confirmed per piece', 'Gold or silver direction', "Ask what's available"],
    imageSrc:    null,
    imageAlt:    'Franco chain — four-sided box links',
    waMessage:   "Hey 2T — I'm looking at Franco chains. What widths and lengths do you have? I want something solid for a pendant.",
  },
  {
    title:       'FIGARO CHAIN',
    description: 'Classic link structure. Alternating long-short rhythm.',
    specs:       ['Gold or silver direction', 'Length confirmed per piece', "Ask what's available"],
    imageSrc:    null,
    imageAlt:    'Figaro chain — alternating small and large links',
    waMessage:   "Hey 2T — I'm looking at Figaro chains. What widths and metal directions do you have?",
  },
  {
    title:       'ICED-OUT CHAIN',
    description: 'Stone-set links from clasp to clasp. Built to hit the light.',
    specs:       ['Stone details confirmed per piece', 'Material confirmed per piece', "Ask what's available"],
    imageSrc:    null,
    imageAlt:    'Stone-set chain — fully iced links',
    waMessage:   "Hey 2T — I want to look at stone-set or iced-out chains. What stone directions and base styles do you have?",
  },
]

// ── WhatsApp helper ───────────────────────────────────────────────────────────

const WA_CHAINS = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20for%20a%20chain.%20What%20styles%20and%20directions%20do%20you%20have%20available%3F'

function waUrl(msg: string): string {
  return `https://wa.me/14124524343?text=${encodeURIComponent(msg)}`
}

// ── Chain illustration SVG fallbacks ─────────────────────────────────────────
// Geometric line-art per chain style — renders when imageSrc is null.
// Replace with a real photo by setting imageSrc on the matching CHAIN_STYLES entry.

function ChainIllustration({ index }: { index: number }) {
  const G  = 'rgba(201,168,76,0.82)'   // gold outline
  const GF = 'rgba(201,168,76,0.32)'   // gold faint / inner detail
  const GB = 'rgba(201,168,76,0.55)'   // gold mid
  const IC = 'rgba(200,230,255,0.72)'  // ice / stone fill
  const IF = 'rgba(200,230,255,0.38)'  // ice faint

  const base = {
    width:       '100%' as const,
    height:      '100%' as const,
    fill:        'none' as const,
  }

  switch (index) {
    // ── Cuban ──────────────────────────────────────────────────────────────
    case 0:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* flat links */}
          <ellipse cx="38"  cy="55" rx="28" ry="14" stroke={G}  strokeWidth="2"/>
          <ellipse cx="38"  cy="55" rx="19" ry="8"  stroke={GF} strokeWidth="1.1"/>
          <ellipse cx="118" cy="55" rx="28" ry="14" stroke={G}  strokeWidth="2"/>
          <ellipse cx="118" cy="55" rx="19" ry="8"  stroke={GF} strokeWidth="1.1"/>
          <ellipse cx="198" cy="55" rx="28" ry="14" stroke={G}  strokeWidth="2"/>
          <ellipse cx="198" cy="55" rx="19" ry="8"  stroke={GF} strokeWidth="1.1"/>
          {/* vertical connectors */}
          <ellipse cx="78"  cy="55" rx="12" ry="22" stroke={GB} strokeWidth="1.5"/>
          <ellipse cx="158" cy="55" rx="12" ry="22" stroke={GB} strokeWidth="1.5"/>
          {/* fade-out hints */}
          <ellipse cx="8"   cy="55" rx="12" ry="22" stroke={GF} strokeWidth="1" opacity="0.5"/>
          <ellipse cx="232" cy="55" rx="12" ry="22" stroke={GF} strokeWidth="1" opacity="0.5"/>
        </svg>
      )

    // ── Rope ───────────────────────────────────────────────────────────────
    case 1:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* strand A — rises left to right */}
          <path
            d="M 10,72 C 45,68 55,38 90,34 S 145,68 180,72 S 225,42 238,38"
            stroke={G} strokeWidth="3.5" strokeLinecap="round"
          />
          {/* strand A shadow */}
          <path
            d="M 10,72 C 45,68 55,38 90,34 S 145,68 180,72 S 225,42 238,38"
            stroke={GF} strokeWidth="9" strokeLinecap="round"
          />
          {/* strand A front */}
          <path
            d="M 10,72 C 45,68 55,38 90,34 S 145,68 180,72 S 225,42 238,38"
            stroke={G} strokeWidth="3.5" strokeLinecap="round"
          />
          {/* strand B — drops left to right */}
          <path
            d="M 10,38 C 45,42 55,72 90,76 S 145,42 180,38 S 225,68 238,72"
            stroke={G} strokeWidth="3.5" strokeLinecap="round"
          />
          {/* crossover dots */}
          <circle cx="50"  cy="55" r="5" fill={GB}/>
          <circle cx="120" cy="55" r="5" fill={GB}/>
          <circle cx="190" cy="55" r="5" fill={GB}/>
        </svg>
      )

    // ── Tennis ─────────────────────────────────────────────────────────────
    case 2:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* chain bar */}
          <line x1="10" y1="55" x2="230" y2="55" stroke={GF} strokeWidth="3.5"/>
          {/* stone settings */}
          {[22, 52, 82, 112, 142, 172, 202, 228].map((x, i) => (
            <g key={i}>
              {/* outer bezel */}
              <circle cx={x} cy="55" r="11"  stroke={G}  strokeWidth="1.5"/>
              {/* inner stone fill */}
              <circle cx={x} cy="55" r="6.5" fill={IC}/>
              <circle cx={x} cy="55" r="6.5" stroke={IF} strokeWidth="1"/>
              {/* prong marks */}
              <line x1={x - 11} y1="55" x2={x - 15} y2="55" stroke={GF} strokeWidth="1.4"/>
              <line x1={x + 11} y1="55" x2={x + 15} y2="55" stroke={GF} strokeWidth="1.4"/>
            </g>
          ))}
        </svg>
      )

    // ── Franco ─────────────────────────────────────────────────────────────
    case 3:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {[20, 64, 108, 152, 196].map((x, i) => (
            <g key={i}>
              {/* outer box link */}
              <rect x={x - 18} y={37} width={36} height={36} rx="3" stroke={G}  strokeWidth="2"/>
              {/* inner cross-section detail */}
              <rect x={x - 11} y={44} width={22} height={22} rx="2" stroke={GF} strokeWidth="1.1"/>
              {/* X cross inside */}
              <line x1={x - 8} y1={47} x2={x + 8} y2={63} stroke={GF} strokeWidth="0.9"/>
              <line x1={x + 8} y1={47} x2={x - 8} y2={63} stroke={GF} strokeWidth="0.9"/>
              {/* connector bar */}
              {i < 4 && (
                <rect x={x + 18} y={51} width={28} height={8} rx="4" fill={GB}/>
              )}
            </g>
          ))}
        </svg>
      )

    // ── Figaro ─────────────────────────────────────────────────────────────
    case 4:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* large link 1 */}
          <ellipse cx="38"  cy="55" rx="28" ry="14" stroke={G}  strokeWidth="2"/>
          <ellipse cx="38"  cy="55" rx="18" ry="8"  stroke={GF} strokeWidth="1"/>
          {/* 3 small links */}
          <ellipse cx="84"  cy="55" rx="13" ry="10" stroke={G}  strokeWidth="1.8"/>
          <ellipse cx="112" cy="55" rx="13" ry="10" stroke={G}  strokeWidth="1.8"/>
          <ellipse cx="140" cy="55" rx="13" ry="10" stroke={G}  strokeWidth="1.8"/>
          {/* large link 2 */}
          <ellipse cx="188" cy="55" rx="28" ry="14" stroke={G}  strokeWidth="2"/>
          <ellipse cx="188" cy="55" rx="18" ry="8"  stroke={GF} strokeWidth="1"/>
          {/* tiny connectors */}
          <line x1="66"  y1="55" x2="71"  y2="55" stroke={GF} strokeWidth="2"/>
          <line x1="97"  y1="55" x2="99"  y2="55" stroke={GF} strokeWidth="2"/>
          <line x1="125" y1="55" x2="127" y2="55" stroke={GF} strokeWidth="2"/>
          <line x1="153" y1="55" x2="160" y2="55" stroke={GF} strokeWidth="2"/>
        </svg>
      )

    // ── Iced-Out ───────────────────────────────────────────────────────────
    case 5:
    default:
      return (
        <svg viewBox="0 0 240 110" aria-hidden="true" {...base}>
          {/* Cuban base — flat links */}
          <ellipse cx="38"  cy="55" rx="28" ry="14" stroke={G}  strokeWidth="2"/>
          <ellipse cx="118" cy="55" rx="28" ry="14" stroke={G}  strokeWidth="2"/>
          <ellipse cx="198" cy="55" rx="28" ry="14" stroke={G}  strokeWidth="2"/>
          {/* vertical connectors */}
          <ellipse cx="78"  cy="55" rx="12" ry="22" stroke={GB} strokeWidth="1.5"/>
          <ellipse cx="158" cy="55" rx="12" ry="22" stroke={GB} strokeWidth="1.5"/>
          {/* stone fills in flat links */}
          <circle cx="38"  cy="55" r="8" fill={IC} opacity="0.65"/>
          <circle cx="118" cy="55" r="8" fill={IC} opacity="0.65"/>
          <circle cx="198" cy="55" r="8" fill={IC} opacity="0.65"/>
          {/* crosshair sparkles — flat links */}
          {[38, 118, 198].map((cx) => (
            <g key={cx}>
              <line x1={cx}      y1={55 - 12} x2={cx}      y2={55 - 16} stroke={IC} strokeWidth="1.3"/>
              <line x1={cx}      y1={55 + 12} x2={cx}      y2={55 + 16} stroke={IC} strokeWidth="1.3"/>
              <line x1={cx - 12} y1={55}      x2={cx - 16} y2={55}      stroke={IC} strokeWidth="1.3"/>
              <line x1={cx + 12} y1={55}      x2={cx + 16} y2={55}      stroke={IC} strokeWidth="1.3"/>
            </g>
          ))}
          {/* smaller stone dots in connectors */}
          <circle cx="78"  cy="55" r="4" fill={IC} opacity="0.45"/>
          <circle cx="158" cy="55" r="4" fill={IC} opacity="0.45"/>
          {/* fade hints */}
          <ellipse cx="8"   cy="55" rx="12" ry="22" stroke={GF} strokeWidth="1" opacity="0.45"/>
          <ellipse cx="232" cy="55" rx="12" ry="22" stroke={GF} strokeWidth="1" opacity="0.45"/>
        </svg>
      )
  }
}

// ── SEO ───────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:       '2T Jewelers | Chains — Cuban, Rope & Tennis — Pittsburgh, PA',
  description: "Cuban, rope, tennis, Franco, and iced-out chains in Pittsburgh, PA. Browse styles and ask 2T what's available. Pittsburgh jeweler. 25 years.",
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ChainsPage() {
  return (
    <main style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingTop: '106px' }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          position:     'relative',
          padding:      'clamp(1.75rem, 3.5vw, 2.75rem) 1.5rem clamp(1.25rem, 2.5vw, 2rem)',
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

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>CHAINS</span>

          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(3.2rem, 7vw, 6rem)',
              fontWeight:    400,
              lineHeight:    0.92,
              letterSpacing: '-0.03em',
              color:         'var(--color-brand-white)',
              marginBottom:  '1.25rem',
            }}
          >
            CHAINS<br />
            {/* Phase A: "BUILT TO HIT." is reserved for the homepage hero.
                Line derived from approved on-page copy ("the most requested
                chain to hold the piece"). */}
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>HOLD THE PIECE.</em>
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
            Cuban, rope, or tennis. The chain carries the piece — ask what&rsquo;s in.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <a
              href={WA_CHAINS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cta-shimmer"
            >
              ASK ABOUT CHAINS →
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
                <a
                  href={`https://wa.me/14124524343?text=${encodeURIComponent(FEATURED_PIECE.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  TEXT 2T ABOUT THIS CHAIN →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Shop Chain Styles ─────────────────────────────────────────
           Mini-catalog: 6 chain style cards with per-style WhatsApp CTAs.
           SVG illustration renders when imageSrc is null.
           Replace with a real photo by setting imageSrc on the style entry. */}
      <section
        style={{
          padding:      'clamp(2rem, 4vw, 3rem) 1.5rem clamp(3rem, 6vw, 4.5rem)',
          borderBottom: '1px solid var(--color-brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>SHOP CHAIN STYLES</span>
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
            Six styles. One chain that hits.
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
            {CHAIN_STYLES.map((style, i) => (
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
                    width:           '100%',
                    aspectRatio:     '16 / 9',
                    background:      'var(--color-brand-charcoal)',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    overflow:        'hidden',
                    flexShrink:      0,
                    padding:         style.imageSrc ? '0' : '1.5rem',
                  }}
                >
                  {style.imageSrc ? (
                    <img
                      src={style.imageSrc}
                      alt={style.imageAlt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <ChainIllustration index={i} />
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
                          fontFamily:   'var(--font-body)',
                          fontSize:     '0.78rem',
                          color:        '#B0ADA6',
                          lineHeight:   1.9,
                          paddingLeft:  '1rem',
                          position:     'relative',
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

          {/* Footnote + CTA */}
          <p
            style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.78rem',
              color:         'var(--color-brand-subtle)',
              letterSpacing: '0.02em',
              marginBottom:  '1.25rem',
            }}
          >
            Details confirmed per piece.
          </p>
          <a
            href={WA_CHAINS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            TEXT 2T ABOUT CHAINS →
          </a>
        </div>
      </section>

      {/* ── Proof Rail slot ───────────────────────────────────────────────
           Renders nothing while PROOF_ASSETS is empty.
           Add real verified chain photos to make this visible. */}
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
                display:                 'flex',
                gap:                     '1px',
                overflowX:               'auto',
                background:              'var(--color-brand-border)',
                scrollSnapType:          'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {PROOF_ASSETS.map((asset, i) => (
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
              ))}
            </div>
          </div>
        </section>
      )}


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
              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(1.4rem, 3vw, 2.2rem)',
                  fontWeight:   400,
                  color:        'var(--color-brand-white)',
                  lineHeight:   1.1,
                  marginBottom: '0.75rem',
                  position:     'relative',
                }}
              >
                {ACTIVE_OFFER.headline}
              </p>
              <p
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '0.875rem',
                  color:        'var(--color-brand-muted)',
                  lineHeight:   1.65,
                  maxWidth:     '46ch',
                  marginBottom: ACTIVE_OFFER.promoTerms ? '0.75rem' : '1.5rem',
                  position:     'relative',
                }}
              >
                {ACTIVE_OFFER.body}
              </p>
              {ACTIVE_OFFER.promoTerms && (
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.7rem',
                    color:         'var(--color-brand-subtle)',
                    letterSpacing: '0.03em',
                    marginBottom:  '1.5rem',
                    position:      'relative',
                  }}
                >
                  {ACTIVE_OFFER.promoTerms}
                </p>
              )}
              <a
                href={`https://wa.me/14124524343?text=${encodeURIComponent(ACTIVE_OFFER.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ position: 'relative' }}
              >
                {ACTIVE_OFFER.ctaLabel}
              </a>
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
