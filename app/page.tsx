import Link from 'next/link'
import ProofMarquee    from '@/components/home/ProofMarquee'
import PittsburghStory from '@/components/home/PittsburghStory'
import SocialTeaser    from '@/components/home/SocialTeaser'

const WA_BUILD  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20want%20to%20build%20something%20custom.'
const WA_PROMO  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20promos%20are%20running%20right%20now%3F'

// Sparkles: right side around jewelry art + left side near brand/identity area
const HERO_SPARKLES = [
  { top: '24%', left: '66%', delay: '0s',    size: 5, ice: true  },
  { top: '40%', left: '80%', delay: '1.1s',  size: 6, ice: false },
  { top: '17%', left: '76%', delay: '2.4s',  size: 4, ice: true  },
  { top: '60%', left: '72%', delay: '0.7s',  size: 5, ice: false },
  { top: '32%', left: '90%', delay: '1.8s',  size: 4, ice: true  },
  { top: '72%', left: '85%', delay: '3.0s',  size: 3, ice: false },
  { top: '43%', left: '3%',  delay: '2.2s',  size: 3, ice: true  },
  { top: '38%', left: '32%', delay: '4.5s',  size: 2, ice: true  },
] as const

// Product priority: Grillz → Watches → Chains (featured) → Pendants → Rings → Bracelets → Earrings (secondary) → Custom (full-width)
const LARGE_TILES = [
  { label: 'GRILLZ',  sub: 'Top, bottom, or full set. Gold or iced. Text the look.',  href: '/grillz',             cta: 'ASK ABOUT GRILLZ'  },
  { label: 'WATCHES', sub: "Iced bezels. Diamond faces. Ask what's in.",             href: '/watches',            cta: 'ASK ABOUT WATCHES' },
  { label: 'CHAINS',  sub: "Cuban, rope, and tennis. Ask what's in stock.",      href: '/collections/chains', cta: 'SHOP CHAINS'       },
] as const

const SMALL_TILES = [
  { label: 'PENDANTS',  sub: 'Photo, logo, name, or number. Send the idea.',     href: '/collections/pendants',  cta: 'SHOP PENDANTS'  },
  { label: 'RINGS',     sub: 'Big face. Heavy statement. Details per piece.',     href: '/collections/rings',     cta: 'SHOP RINGS'     },
  { label: 'BRACELETS', sub: 'Wrist game with weight. Text to ask.',              href: '/collections/bracelets', cta: 'SHOP BRACELETS' },
  { label: 'EARRINGS',  sub: 'Iced studs and hoops. Ask what\'s in stock.',       href: '/collections/earrings',  cta: 'SHOP EARRINGS'  },
] as const

const CUSTOM_TILE = {
  label: 'CUSTOM BUILT',
  sub:   'Your logo. Your name. Your piece. Send it.',
  href:  '/custom',
  cta:   'START CUSTOM',
} as const

const CUSTOM_WHAT = [
  'LOGO PIECE', 'NAME PIECE', 'PHOTO PENDANT',
  'CUSTOM GRILLZ', 'WATCH DIRECTION', 'CUSTOM CHAIN',
  'CUSTOM RING', 'CUSTOM BRACELET',
]

/* Subtle category silhouettes — abstract gold shapes, aria-hidden, low opacity */
const PG_ICONS = {
  GRILLZ: (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="26" width="56" height="20" rx="4"/>
      <line x1="22" y1="26" x2="22" y2="46"/>
      <line x1="36" y1="26" x2="36" y2="46"/>
      <line x1="50" y1="26" x2="50" y2="46"/>
    </svg>
  ),
  WATCHES: (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="36" cy="36" r="20"/>
      <line x1="36" y1="36" x2="36" y2="20"/>
      <line x1="36" y1="36" x2="50" y2="36"/>
      <rect x="30" y="12" width="12" height="6" rx="2"/>
      <rect x="30" y="54" width="12" height="6" rx="2"/>
    </svg>
  ),
  CHAINS: (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="28" width="27" height="16" rx="8"/>
      <rect x="41" y="28" width="27" height="16" rx="8"/>
      <line x1="31" y1="36" x2="41" y2="36"/>
    </svg>
  ),
  RINGS: (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="36" cy="40" r="20" strokeWidth="5"/>
      <ellipse cx="36" cy="40" rx="20" ry="8" strokeWidth="2"/>
    </svg>
  ),
  BRACELETS: (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 22 Q14 60 36 60 Q58 60 58 22"/>
    </svg>
  ),
  PENDANTS: (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M36 16 C36 16 52 30 52 46 A16 16 0 0 1 20 46 C20 30 36 16 36 16Z"/>
      <line x1="36" y1="8" x2="36" y2="16"/>
    </svg>
  ),
  EARRINGS: (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M36 10 a8 8 0 0 1 8 0"/>
      <line x1="36" y1="10" x2="36" y2="24"/>
      <ellipse cx="36" cy="46" rx="10" ry="18"/>
    </svg>
  ),
  CUSTOM: (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="36,8 64,36 36,64 8,36"/>
      <polygon points="36,22 50,36 36,50 22,36"/>
    </svg>
  ),
} as const

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO — FULL BLEED ────────────────────────────────────── */}
      <section
        style={{
          position:  'relative',
          minHeight: 'max(94vh, 560px)',
          maxHeight: 'min(100dvh, 860px)',
          display:   'flex',
          alignItems: 'flex-end',
          overflow:  'hidden',
        }}
        aria-label="Hero"
      >
        {/* Demo video — replace with final 2T store footage when recorded */}
        <video
          autoPlay muted loop playsInline preload="metadata"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 25%',
            zIndex: 0,
          }}
        >
          <source src="/assets/hero-loop-demo.mp4" type="video/mp4" />
        </video>

        {/* Reading gradients */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.93) 42%, rgba(8,8,8,0.4) 68%, transparent 100%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.85) 22%, rgba(8,8,8,0.48) 46%, transparent 68%)', pointerEvents: 'none' }} />

        {/* Diagonal sweep ray */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', left: '-10%', width: '35%', height: '200%', background: 'linear-gradient(108deg, transparent 40%, rgba(201,168,76,0.055) 50%, transparent 60%)', pointerEvents: 'none', animation: 'hero-sweep 8s ease-in-out infinite', animationDelay: '2s' }} />

        {/* Sparkle hits */}
        {HERO_SPARKLES.map((s, i) => (
          <span key={i} aria-hidden="true" style={{ position: 'absolute', top: s.top, left: s.left, width: `${s.size}px`, height: `${s.size}px`, borderRadius: '50%', backgroundColor: s.ice ? 'rgba(208,238,255,0.95)' : 'rgba(255,248,220,0.9)', boxShadow: s.ice ? `0 0 ${s.size * 6}px ${s.size + 2}px rgba(208,238,255,0.55), 0 0 ${s.size * 14}px ${s.size + 4}px rgba(208,238,255,0.18)` : `0 0 ${s.size * 6}px ${s.size + 2}px rgba(201,168,76,0.52), 0 0 ${s.size * 14}px ${s.size + 4}px rgba(201,168,76,0.16)`, animation: 'sparkle-hit 3.8s ease-in-out infinite', animationDelay: s.delay, pointerEvents: 'none' }} />
        ))}

        {/* Text — bottom-left */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', width: '100%', padding: '0 1.5rem', paddingBottom: 'max(clamp(5.5rem, 12vw, 9rem), calc(env(safe-area-inset-bottom, 0px) + 8rem))' }}>
          <div style={{ maxWidth: '600px' }}>

            <h1
              className="reveal reveal-d1"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4.5rem, 11vw, 9.5rem)', fontWeight: 700, lineHeight: 0.88, color: 'var(--color-brand-white)', letterSpacing: '-0.03em' }}
            >
              BUILT TO{' '}
              <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic', fontFamily: 'var(--font-display-accent)' }}>HIT.</em>
            </h1>

            {/* Hero secondary copy — product density + Pittsburgh trust anchor */}
            <p
              className="reveal reveal-d2"
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      'clamp(0.8rem, 1.6vw, 1rem)',
                fontWeight:    500,
                letterSpacing: '0.05em',
                color:         'var(--color-brand-silver)',
                lineHeight:    1.55,
                marginTop:     '1.1rem',
              }}
            >
              Grillz. Watches. Chains. Pendants. Custom.<br />
              <span style={{ color: 'var(--color-brand-muted)', fontSize: '0.9em' }}>
                Pittsburgh-built. Text 2T.
              </span>
            </p>

            {/* BANG. — brand signature stamp, intentional and controlled */}
            <style>{`
              .hero-bang-stamp {
                font-size: clamp(1rem, 2vw, 1.4rem) !important;
                padding: 0.45em 1.15em !important;
                border-color: rgba(201,168,76,0.55) !important;
                letter-spacing: 0.24em !important;
                box-shadow: 0 0 22px rgba(201,168,76,0.22), inset 0 0 10px rgba(201,168,76,0.07) !important;
              }
            `}</style>
            <div className="reveal reveal-d3" style={{ marginTop: '0.75rem', marginBottom: '1.75rem' }}>
              <span className="hero-bang-stamp">BANG.</span>
            </div>

            {/* Hero CTAs — equal weight: product first, custom second */}
            <div className="reveal reveal-d4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href="#shop-jewelry"
                className="btn-primary"
                style={{ fontSize: '0.875rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem' }}
              >
                SHOP JEWELRY
              </a>
              <Link
                href="/custom"
                className="btn-outline-gold"
                style={{ fontSize: '0.875rem', letterSpacing: '0.08em' }}
              >
                BUILD CUSTOM →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProofMarquee />

      {/* ─── 2. SHOP JEWELRY — 3-tier hybrid product gateway ────────────── */}
      <section id="shop-jewelry" className="pg-section" aria-label="Shop jewelry by category">
        <div className="pg-inner">
          {/* Enhanced hover states — supplement globals.css pg-card rules */}
          <style>{`
            .pg-card:hover {
              box-shadow: inset 0 0 40px rgba(201,168,76,0.04);
            }
            .pg-card:hover .pg-card__silhouette {
              color: rgba(201,168,76,0.28) !important;
            }
            .pg-card--custom:hover {
              box-shadow: 0 0 32px rgba(201,168,76,0.14) !important;
            }
          `}</style>
          <span className="section-eyebrow">SHOP BY PIECE</span>
          <h2 className="pg-heading">SHOP JEWELRY</h2>
          <p className="pg-subline">
            Grillz. Watches. Chains. Pendants. Pieces that hit.
          </p>

          {/* ── LARGE TILES: Grillz / Watches / Chains ── */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap:                 '1px',
              backgroundColor:     'var(--color-brand-border)',
              border:              '1px solid var(--color-brand-border)',
              borderTop:           '3px solid var(--color-brand-gold)',
              marginBottom:        '1px',
            }}
          >
            {LARGE_TILES.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="pg-card"
                aria-label={card.label}
                style={{ minHeight: 'clamp(220px, 30vw, 340px)' }}
              >
                <div className="pg-card__art" aria-hidden="true" />
                <div className="pg-card__silhouette" aria-hidden="true">
                  {PG_ICONS[card.label as keyof typeof PG_ICONS]}
                </div>
                <div className="pg-card__body">
                  <span className="pg-card__label">{card.label}</span>
                  <span className="pg-card__sub">{card.sub}</span>
                  <span className="pg-card__cta" aria-hidden="true">{card.cta} →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured / secondary visual separator */}
          <div
            aria-hidden="true"
            style={{
              display:         'flex',
              alignItems:      'center',
              gap:             '0.75rem',
              padding:         '0.6rem 0',
              backgroundColor: 'var(--color-brand-black)',
            }}
          >
            <span style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.6rem',
              fontWeight:    600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         'var(--color-brand-subtle)',
              whiteSpace:    'nowrap',
            }}>
              MORE PIECES
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-brand-border)' }} />
          </div>

          {/* ── SMALL TILES: Pendants / Rings / Bracelets / Earrings ── */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap:                 '1px',
              backgroundColor:     'var(--color-brand-border)',
              border:              '1px solid var(--color-brand-border)',
              marginBottom:        '1px',
            }}
          >
            {SMALL_TILES.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="pg-card"
                aria-label={card.label}
                style={{ minHeight: '170px' }}
              >
                <div className="pg-card__art" aria-hidden="true" />
                <div className="pg-card__silhouette" aria-hidden="true">
                  {PG_ICONS[card.label as keyof typeof PG_ICONS]}
                </div>
                <div className="pg-card__body">
                  <span className="pg-card__label" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }}>
                    {card.label}
                  </span>
                  <span className="pg-card__sub">{card.sub}</span>
                  <span className="pg-card__cta" aria-hidden="true">{card.cta} →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* ── CUSTOM TILE: full-width ── */}
          <div
            style={{
              border:       '1px solid var(--color-brand-border)',
              borderTop:    'none',
              marginBottom: '1.5rem',
            }}
          >
            <Link
              href={CUSTOM_TILE.href}
              className="pg-card pg-card--custom"
              aria-label={CUSTOM_TILE.label}
              style={{ minHeight: '140px' }}
            >
              <div className="pg-card__art" aria-hidden="true" />
              <div className="pg-card__body">
                <span className="pg-card__label">{CUSTOM_TILE.label}</span>
                <span className="pg-card__sub">{CUSTOM_TILE.sub}</span>
                <span className="pg-card__cta" aria-hidden="true">{CUSTOM_TILE.cta} →</span>
              </div>
            </Link>
          </div>

          {/* ── UTILITY CTA RAIL ── */}
          <style>{`.util-cta:hover { color: var(--color-brand-gold) !important; }`}</style>
          <div
            style={{
              display:    'flex',
              flexWrap:   'wrap',
              gap:        '0.5rem 0',
              borderTop:  '1px solid var(--color-brand-border)',
              paddingTop: '1rem',
            }}
          >
            {[
              { label: "Ask what's in stock now →", href: 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20do%20you%20have%20in%20stock%20right%20now%3F' },
              { label: "Ask what's running now →",  href: 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20promos%20are%20running%20right%20now%3F' },
              { label: 'Text 2T →',                 href: 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20piece.' },
            ].map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="util-cta"
                style={{
                  fontFamily:     'var(--font-body)',
                  fontSize:       '0.75rem',
                  fontWeight:     600,
                  letterSpacing:  '0.06em',
                  color:          'var(--color-brand-silver)',
                  textDecoration: 'none',
                  padding:        '0.375rem 1.5rem 0.375rem 0.875rem',
                  borderLeft:     '1px solid var(--color-brand-border)',
                  transition:     'color 0.18s ease',
                }}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. SPECIAL OF THE WEEK — promo surface ─────────────────── */}
      {/*
       * CLAIM SAFETY: do not add %, BOGO, free shipping, inventory,
       * material, or urgency claims without verification.
       * Placeholder copy is intentional. Replace headline/body only
       * when a real verified offer exists.
       */}
      <section
        aria-label="This week's promotion"
        style={{
          position:   'relative',
          borderTop:  '1px solid var(--color-brand-border)',
          background: 'linear-gradient(150deg, #0e0d0b 0%, #13110a 55%, #0a0908 100%)',
          padding:    'clamp(2.75rem, 6vw, 4.25rem) 1.5rem',
          overflow:   'hidden',
        }}
      >
        {/* Diagonal gold ray — subtle, matches hero language */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            top:        '-20%',
            right:      '-5%',
            width:      '40%',
            height:     '160%',
            background: 'linear-gradient(112deg, transparent 38%, rgba(201,168,76,0.045) 50%, transparent 62%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth:    '1200px',
            margin:      '0 auto',
            display:     'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:         'clamp(1.5rem, 4vw, 3rem)',
            alignItems:  'center',
          }}
        >
          {/* ── LEFT: copy ── */}
          <div>
            {/* Eyebrow + live dot */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.9rem' }}>
              <span
                aria-hidden="true"
                style={{
                  display:         'inline-block',
                  width:           '7px',
                  height:          '7px',
                  borderRadius:    '50%',
                  backgroundColor: 'var(--color-brand-gold)',
                  flexShrink:      0,
                  animation:       'pulse-glow 2.4s ease-in-out infinite',
                }}
              />
              <span className="section-eyebrow">THIS WEEK AT 2T</span>
            </div>

            {/* WEEKLY SPECIAL badge */}
            <span
              style={{
                display:       'inline-block',
                fontFamily:    'var(--font-body)',
                fontSize:      '0.58rem',
                fontWeight:    700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-gold)',
                border:        '1px solid rgba(201,168,76,0.4)',
                borderRadius:  '2px',
                padding:       '0.28rem 0.65rem',
                marginBottom:  '0.85rem',
              }}
            >
              WEEKLY SPECIAL
            </span>

            {/* Headline — big, hard */}
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2.6rem, 5.5vw, 4.5rem)',
                fontWeight:    700,
                lineHeight:    0.9,
                letterSpacing: '-0.03em',
                color:         'var(--color-brand-white)',
                marginBottom:  '1.25rem',
              }}
            >
              WHAT&rsquo;S{' '}
              <em
                style={{
                  color:      'var(--color-brand-gold)',
                  fontStyle:  'italic',
                  fontFamily: 'var(--font-display-accent)',
                }}
              >
                RUNNING THIS WEEK.
              </em>
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.875rem',
                color:        'var(--color-brand-muted)',
                lineHeight:   1.6,
                maxWidth:     '44ch',
                marginBottom: '0.5rem',
              }}
            >
              Chains, pendants, watches, grillz &mdash; promo terms confirmed on eligible pieces.
            </p>

            {/* Terms fine print */}
            <p
              aria-hidden="true"
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.6rem',
                color:        'var(--color-brand-subtle)',
                letterSpacing:'0.08em',
                textTransform:'uppercase',
                marginBottom: '1.75rem',
              }}
            >
              Details confirmed per piece
            </p>

            {/* CTA */}
            <a
              href={WA_PROMO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display:       'inline-block',
                fontSize:      '0.875rem',
                letterSpacing: '0.09em',
                padding:       '0.9rem 2rem',
                minWidth:      '180px',
                textAlign:     'center',
              }}
            >
              TEXT 2T &rarr;
            </a>
          </div>

          {/* ── RIGHT: visual panel placeholder ── */}
          {/*
           * IMAGE SLOT: replace background/content here when a real
           * product photo or verified offer visual is available.
           * Do NOT add fake product images, fake prices, or fake labels.
           */}
          <div
            aria-hidden="true"
            style={{
              position:     'relative',
              minHeight:    'clamp(160px, 22vw, 240px)',
              borderRadius: '3px',
              border:       '1px solid rgba(201,168,76,0.18)',
              background:   'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 60%, transparent 100%)',
              overflow:     'hidden',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
            }}
          >
            {/* Corner accent lines */}
            <div style={{ position: 'absolute', top: 12, left: 12, width: 28, height: 28, borderTop: '1.5px solid rgba(201,168,76,0.5)', borderLeft: '1.5px solid rgba(201,168,76,0.5)' }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 28, height: 28, borderBottom: '1.5px solid rgba(201,168,76,0.5)', borderRight: '1.5px solid rgba(201,168,76,0.5)' }} />

            {/* Label */}
            <span
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.6rem',
                fontWeight:    600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color:         'rgba(201,168,76,0.38)',
                userSelect:    'none',
              }}
            >
              DETAILS CONFIRMED PER PIECE
            </span>
          </div>
        </div>
      </section>

      {/* ─── 4. CUSTOM BUILT HERE — compressed fast lane ─────────────── */}
      <section
        aria-label="Custom jewelry"
        style={{
          position:   'relative',
          background: 'linear-gradient(160deg, #0c0b07 0%, #0f0d06 50%, #080808 100%)',
          borderTop:  '1px solid var(--color-brand-border)',
          padding:    'clamp(3rem, 7vw, 5rem) 1.5rem',
          overflow:   'hidden',
        }}
      >
        {/* Gold accent top */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 0%, var(--color-brand-gold-dim) 20%, var(--color-brand-gold) 50%, var(--color-brand-gold-dim) 80%, transparent 100%)' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
            CUSTOM BUILT HERE
          </span>
          <h2
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.8rem, 5.5vw, 4.8rem)',
              fontWeight:    600,
              color:         'var(--color-brand-white)',
              lineHeight:    0.93,
              letterSpacing: '-0.03em',
              marginBottom:  '1.5rem',
            }}
          >
            Logo. Name. Photo.
            <br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic', fontFamily: 'var(--font-display-accent)' }}>
              Grillz. Watch direction.
            </em>
          </h2>

          <p
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '0.9rem',
              color:        'var(--color-brand-muted)',
              lineHeight:   1.65,
              maxWidth:     '50ch',
              marginBottom: '2rem',
            }}
          >
            Send the idea. No deposit. We quote before the build.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Link href="/custom" className="btn-primary" style={{ fontSize: '0.875rem', letterSpacing: '0.07em', padding: '0.875rem 1.75rem' }}>
              BUILD CUSTOM →
            </Link>
            <a
              href={WA_BUILD}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ fontSize: '0.875rem', letterSpacing: '0.07em' }}
            >
              TEXT 2T →
            </a>
          </div>

          {/* What we build — keyword chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {CUSTOM_WHAT.map((item) => (
              <span
                key={item}
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.63rem',
                  fontWeight:    600,
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color:         'var(--color-brand-gold-dim)',
                  border:        '1px solid rgba(201,168,76,0.28)',
                  borderRadius:  '2px',
                  padding:       '0.38rem 0.65rem',
                  whiteSpace:    'nowrap',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <PittsburghStory />

      <SocialTeaser />
    </>
  )
}
