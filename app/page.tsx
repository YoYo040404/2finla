import Link from 'next/link'
import ProofContactZone from '@/components/home/ProofContactZone'
import ShineDirectionBand from '@/components/home/ShineDirectionBand'
import { ShineRail } from '@/components/home/ShineRail'
import SocialTeaser from '@/components/home/SocialTeaser'
import FinalCTABar from '@/components/home/FinalCTABar'
import ScrollRevealController from '@/components/home/ScrollRevealController'
import StickyConversionBar from '@/components/home/StickyConversionBar'
import { TileGlareController } from '@/components/home/TileGlareController'

const WA_BUILD  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20want%20to%20build%20something%20custom.'
const WA_PROMO  = 'https://wa.me/14124524343?text=What%27s%20running%20this%20week%20at%202T%3F'
const WA_STOCK  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20do%20you%20have%20in%20stock%20right%20now%3F'
const WA_ASK    = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20piece.'

// Anchor tiles — 1.4fr 1fr 1fr, GRILLZ dominant
const ANCHOR_TILES = [
  {
    label:    'GRILLZ.',
    tone:     'pb-grillz',
    gleam:    true,
    sub:      'Top. Bottom. Full mouth. Custom fit.',
    href:     '/grillz',
    image:    '/assets/demo/phase3a/2t-demo-grillz-flat-01.png',
    imageAlt: 'Grillz — demo concept visual',
  },
  {
    label:    'WATCHES.',
    tone:     'pb-watches',
    gleam:    true,
    sub:      "Iced. Bust-down. Ask what's available.",
    href:     '/watches',
    image:    '/assets/demo/phase3a/2t-demo-watch-face-01.png',
    imageAlt: 'Watch — demo concept visual',
  },
  {
    label:    'CHAINS.',
    tone:     'pb-chains',
    gleam:    true,
    sub:      "Cuban. Rope. Tennis. Ask what's in.",
    href:     '/collections/chains',
    image:    '/assets/demo/phase3a/2t-demo-chains-01.png',
    imageAlt: 'Chain — demo concept visual',
  },
] as const

// Secondary tiles — each tone maps to a per-category vitrine surface in globals.css
const SECONDARY_TILES = [
  { label: 'PENDANTS.',  tone: 'pb-pendants',  sub: 'Photo. Logo. Name. Number.',                    href: '/collections/pendants'  },
  { label: 'RINGS.',     tone: 'pb-rings',     sub: 'Custom or catalog. Ask what fits.',              href: '/collections/rings'     },
  { label: 'BRACELETS.', tone: 'pb-bracelets', sub: "Tennis. Cuban. Ask what's available.",          href: '/collections/bracelets' },
  { label: 'EARRINGS.',  tone: 'pb-earrings',  sub: "Studs. Hoops. Ask what's in.",                  href: '/collections/earrings'  },
] as const

// Demo concept visuals for secondary tiles — replace with real 2T product media when available
const SECONDARY_DEMO_IMAGES: Record<string, { src: string; alt: string }> = {
  'PENDANTS.': { src: '/assets/demo/phase3a/2t-demo-pendants-01.png', alt: 'Pendant — demo concept visual' },
}

const CUSTOM_CHIPS = ['LOGO PIECE', 'NAME PENDANT', 'PHOTO PENDANT']

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* Scroll-reveal controller — client component, attaches IntersectionObserver */}
      <ScrollRevealController />
      <TileGlareController />

      {/* ─── 1. HERO — Full-bleed campaign ──────────────────────────────── */}
      <section
        aria-label="Hero"
        className="homepage-hero"
        style={{
          position:       'relative',
          minHeight:      'max(90vh, 600px)',
          maxHeight:      'min(100dvh, 960px)',
          overflow:       'hidden',
          background:     '#030303',
          display:        'flex',
          alignItems:     'flex-end',
          paddingBottom:  'clamp(3.5rem, 8vh, 6rem)',
        }}
      >
        {/* Campaign video — jewelry media is the visual */}
        <video
          autoPlay muted loop playsInline preload="metadata"
          poster="/assets/demo/phase3a/2t-demo-hero-chain-pendant-01.png"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            zIndex: 0, opacity: 0.60,
          }}
        >
          <source src="/assets/hero-loop-demo.mp4" type="video/mp4" />
        </video>

        {/* Atmospheric depth — left text protection + bottom grounding */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #030303 0%, rgba(3,3,3,0.82) 38%, rgba(3,3,3,0.22) 68%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #030303 0%, rgba(3,3,3,0.82) 20%, rgba(3,3,3,0.35) 45%, transparent 75%)', zIndex: 1, pointerEvents: 'none' }} />
        {/* Subtle gold bloom — low-key richness */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 70% at 72% 38%, rgba(201,164,73,0.11) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }} />

        {/* Single-column content — text anchored left, campaign breathes right */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1360px',
            margin: '0 auto',
            width: '100%',
            padding: '0 clamp(1.25rem, 3vw, 2.5rem)',
          }}
        >
          <h1
            className="reveal reveal-d1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4.5rem, 12vw, 10.5rem)',
              fontWeight: 400,
              lineHeight: 0.85,
              letterSpacing: '0.01em',
              color: 'var(--color-brand-white)',
              margin: '0 0 1rem',
            }}
          >
            BUILT TO{' '}
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic', fontFamily: 'var(--font-display)', textShadow: '0 0 20px rgba(201,168,76,0.55), 0 0 44px rgba(201,168,76,0.24)' }}>
              HIT.
            </em>
          </h1>

          {/* Product stack — immediate category signal */}
          <p
            className="reveal reveal-d2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
              color: 'var(--color-brand-silver)',
              lineHeight: 1.55,
              marginBottom: '1.5rem',
              maxWidth: '44ch',
            }}
          >
            Grillz. Watches. Chains. Pendants. Custom.{' '}
            <span style={{ color: 'var(--color-brand-muted)' }}>Pittsburgh jeweler. Text 2T or come through.</span>
          </p>

          <div className="reveal reveal-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
            <a
              href="#shop-jewelry"
              className="btn-primary"
              style={{ fontSize: '0.875rem', letterSpacing: '0.08em', padding: '0.9rem 1.875rem' }}
            >
              SHOP THE PIECES
            </a>
            <Link
              href="/custom"
              className="btn-outline-gold"
              style={{ fontSize: '0.875rem', letterSpacing: '0.08em', padding: '0.9rem 1.875rem' }}
            >
              BUILD CUSTOM →
            </Link>
          </div>

          {/* BANG. — permanent brand signature, settles in after cinematic overlay clears */}
          <div style={{ marginTop: '1.25rem' }}>
            <span className="bang-signature bang-signature--hero">BANG.</span>
          </div>
        </div>

      </section>

      {/* ─── Hero → Product Wall transition — breathing space, no content ── */}
      <div
        aria-hidden="true"
        style={{
          background:    'linear-gradient(to bottom, #030303 0%, var(--color-brand-black) 100%)',
          height:        'clamp(1.5rem, 3vw, 2.5rem)',
          borderBottom:  '1px solid rgba(201,168,76,0.12)',
          position:      'relative',
          overflow:      'hidden',
        }}
      >
        {/* Faint centered gold glow — depth cue, not decorative text */}
        <div style={{
          position:    'absolute',
          left:        '50%',
          top:         '50%',
          transform:   'translate(-50%, -50%)',
          width:       '280px',
          height:      '1px',
          background:  'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(201,168,76,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* ─── 2. SHOP JEWELRY — Pittsburgh BANG product wall ────────────── */}
      <section
        id="shop-jewelry"
        aria-label="Shop jewelry by category"
        style={{
          background: 'var(--color-brand-black)',
          borderTop: '1px solid var(--color-brand-border)',
          padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 3vw, 2.5rem)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Masthead — hard, commercial */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.62rem',
              letterSpacing: '0.18em',
              color:         'rgba(201,168,76,0.65)',
              textTransform: 'uppercase',
              display:       'block',
              marginBottom:  '0.55rem',
            }}>
              WHAT 2T MAKES
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 0.88,
                margin: '0 0 0.75rem',
              }}
            >
              PICK THE{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)', textShadow: '0 0 16px rgba(201,168,76,0.48), 0 0 36px rgba(201,168,76,0.20)' }}>
                PIECE.
              </em>
            </h2>
            {/* Material direction cue — all categories, all directions. Not a filter. */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.22rem', marginBottom: '0.3rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.13em', color: 'var(--color-brand-gold)' }}>GOLD</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-brand-muted)' }}>·</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.13em', color: 'var(--color-brand-silver)' }}>SILVER</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(201,168,76,0.35)', padding: '0 0.15rem' }}>◆</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.13em', color: 'var(--color-ice-blue)' }}>DIAMONDS</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-brand-muted)' }}>·</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.13em', color: 'var(--color-ice-blue)' }}>MOISSANITE</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--color-brand-muted)', margin: 0, letterSpacing: '0.01em' }}>
              Details confirmed per piece. Ask before you buy.
            </p>
          </div>

          {/* ── ANCHOR ROW: 1.4fr 1fr 1fr — GRILLZ dominant ── */}
          <div className="mi-anchor-row">
            {ANCHOR_TILES.map((tile, idx) => (
              <Link
                key={tile.label}
                href={tile.href}
                className={`pb-tile-link tile-reveal-${idx} pb-tile-scan pb-tile-3d`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 'clamp(280px, 30vw, 420px)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div className="pb-tile-glare" aria-hidden="true" />
                <div
                  className={`mi-vitrine pb-vitrine-${tile.tone}`}
                  style={{ flex: 1, position: 'relative', overflow: 'hidden' }}
                >
                  {/* Demo concept visual — replace with real 2T product media when available */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tile.image}
                    alt={tile.imageAlt}
                    className="pb-anchor-img"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {/* Layered depth — warm base glow + cool edge + bottom richness */}
                  <div aria-hidden="true" style={{
                    position:      'absolute',
                    inset:         0,
                    zIndex:        2,
                    pointerEvents: 'none',
                    background:    tile.label === 'GRILLZ.'
                      ? 'linear-gradient(to bottom, rgba(201,168,76,0.05) 0%, transparent 38%), linear-gradient(to top, rgba(201,168,76,0.32) 0%, rgba(201,168,76,0.08) 42%, transparent 68%)'
                      : tile.label === 'WATCHES.'
                      ? 'linear-gradient(to bottom, rgba(208,238,255,0.06) 0%, transparent 38%), linear-gradient(to top, rgba(185,215,245,0.26) 0%, rgba(185,215,245,0.06) 42%, transparent 68%)'
                      : 'linear-gradient(to bottom, rgba(201,168,76,0.04) 0%, transparent 38%), linear-gradient(to top, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.05) 42%, transparent 68%)',
                  }} />
                  {/* Diagonal metallic sweep — breaks flat surface, adds premium depth */}
                  <div aria-hidden="true" style={{
                    position:      'absolute',
                    inset:         0,
                    zIndex:        3,
                    pointerEvents: 'none',
                    background:    'linear-gradient(135deg, transparent 22%, rgba(255,255,255,0.045) 46%, rgba(255,255,255,0.02) 54%, transparent 78%)',
                  }} />
                  {/* Radial hot-spot — center brightness for bling energy */}
                  <div aria-hidden="true" style={{
                    position:      'absolute',
                    inset:         0,
                    zIndex:        3,
                    pointerEvents: 'none',
                    background:    tile.label === 'GRILLZ.'
                      ? 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.10) 0%, transparent 65%)'
                      : tile.label === 'WATCHES.'
                      ? 'radial-gradient(ellipse 55% 45% at 50% 38%, rgba(208,238,255,0.09) 0%, transparent 65%)'
                      : 'radial-gradient(ellipse 55% 45% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 65%)',
                  }} />
                  {tile.gleam && <div className="mi-gleam" />}
                </div>
                <div className="pb-tile-foot" style={{ borderTop: '1.5px solid rgba(201,168,76,0.28)' }}>
                  <h5 className="pb-tile-label pb-tile-title" style={{ fontSize: 'clamp(1.3rem, 2.8vw, 1.8rem)' }}>{tile.label}</h5>
                </div>
                <div style={{ padding: '0 0.875rem 0.875rem' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-brand-muted)', lineHeight: 1.5, margin: 0 }}>
                    {tile.sub}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* ── SECONDARY TILES: 4-col, compressed ── */}
          <div className="mi-secondary-row">
            {SECONDARY_TILES.map((tile, idx) => (
              <Link
                key={tile.label}
                href={tile.href}
                className={`pb-tile-link tile-reveal-s${idx}`}
                style={{ display: 'flex', flexDirection: 'column', minHeight: '200px', textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className={`mi-vitrine pb-vitrine-${tile.tone}`}
                  style={{ flex: 1, position: 'relative', overflow: 'hidden' }}
                >
                  {/* Demo concept visual — replace with real 2T product media when available */}
                  {SECONDARY_DEMO_IMAGES[tile.label] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={SECONDARY_DEMO_IMAGES[tile.label].src}
                      alt={SECONDARY_DEMO_IMAGES[tile.label].alt}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.88,
                      }}
                    />
                  )}
                  <div className="mi-gleam" />
                </div>
                <div className="pb-tile-foot">
                  <h5 className="pb-tile-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.08rem, 2.1vw, 1.35rem)', margin: 0, lineHeight: 0.9 }}>{tile.label}</h5>
                </div>
                <div className="pb-tile-pills">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-brand-silver)' }}>{tile.sub}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* ── DISCOVERY STRIP — collection hub entry points ── */}
          <nav
            aria-label="Browse collections"
            style={{
              borderTop:    '1px solid rgba(201,168,76,0.20)',
              marginTop:    '1.875rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              border:              '1px solid rgba(201,168,76,0.14)',
              borderTop:           'none',
              overflow:            'hidden',
            }}>
              {([
                {
                  label: 'MOST ASKED ABOUT',
                  copy:  'What most people text 2T for first.',
                  cta:   'Browse →',
                  href:  '/collections/best-sellers',
                },
                {
                  label: 'ASK WHAT JUST LANDED',
                  copy:  "What's moving now. Ask before it moves.",
                  cta:   'Ask →',
                  href:  '/collections/new-arrivals',
                },
                {
                  label: 'VIEW ALL CATEGORIES',
                  copy:  'Browse everything. Text 2T before you buy.',
                  cta:   'Browse all →',
                  href:  '/collections',
                },
              ] as const).map((entry, i) => (
                <Link
                  key={entry.href}
                  href={entry.href}
                  style={{
                    display:        'flex',
                    flexDirection:  'column',
                    gap:            '0.3rem',
                    padding:        '1.25rem 1.375rem 1.125rem',
                    background:     '#0e0e0e',
                    textDecoration: 'none',
                    color:          'inherit',
                    borderLeft:     i > 0 ? '1px solid rgba(201,168,76,0.10)' : 'none',
                  }}
                >
                  <span style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '0.6rem',
                    letterSpacing: '0.16em',
                    color:         'var(--color-brand-gold)',
                    textTransform: 'uppercase',
                    lineHeight:    1.2,
                  }}>
                    {entry.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.73rem',
                    color:      'var(--color-brand-muted)',
                    lineHeight: 1.5,
                  }}>
                    {entry.copy}
                  </span>
                  <span style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '0.58rem',
                    letterSpacing: '0.1em',
                    color:         'rgba(201,168,76,0.50)',
                    marginTop:     '0.2rem',
                    textTransform: 'uppercase',
                  }}>
                    {entry.cta}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          {/* ── CUSTOM INTERRUPT BAND ── */}
          <div className="pb-custom-band">
            <div>
              <h3 className="pb-custom-band-headline">
                SEND THE PHOTO.{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
                  SEND THE IDEA.
                </em>
              </h3>
              <span className="mi-mono mi-faint" style={{ fontSize: '0.58rem' }}>DETAILS CONFIRMED PER PIECE</span>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link href="/custom" className="btn-primary" style={{ fontSize: '0.8rem', letterSpacing: '0.08em', padding: '0.8rem 1.5rem' }}>
                BUILD CUSTOM →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 2b. SHINE DIRECTION BAND — compact material/stone signal ──── */}
      <ShineDirectionBand />

      {/* ─── 3. PROMO TICKER — slim commercial strip (claim-safe) ──────── */}
      {/*
       * CLAIM SAFETY: no %, BOGO, free shipping, material, or inventory
       * claims. Safe phrases only. Promo terms confirmed per piece.
       */}
      <div className="promo-ticker" role="complementary" aria-label="What's running at 2T">
        <div className="promo-ticker-inner">
          <span className="promo-ticker-item">THIS WEEK AT 2T</span>
          <span className="promo-ticker-sep" aria-hidden="true">◆</span>
          <span className="promo-ticker-item">ASK WHAT&rsquo;S RUNNING — CHAINS · PENDANTS · GRILLZ · CUSTOM</span>
          <span className="promo-ticker-sep promo-ticker-wide" aria-hidden="true">◆</span>
          <span className="promo-ticker-item promo-ticker-wide">PROMO TERMS ON ELIGIBLE PIECES ONLY</span>
          <span className="promo-ticker-sep" aria-hidden="true">◆</span>
          <a
            href={WA_PROMO}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-ticker-cta"
          >
            ASK WHAT&rsquo;S RUNNING →
          </a>
        </div>
      </div>

      {/* ─── 3b. SHINE RAIL — primary visual merchandising rail ────────── */}
      <ShineRail />

      {/* Sentinel for StickyConversionBar — appears when user scrolls past this point */}
      <div id="sticky-trigger" aria-hidden="true" />

      {/* ─── 4. BUILD CUSTOM — identity flex lane ──────────────────────── */}
      <section
        aria-label="Custom jewelry"
        style={{
          background: '#0A0702',
          borderTop: '1px solid rgba(201,164,73,0.30)',
          padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 3vw, 2.5rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.75rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left — abstract media-ready custom vitrine */}
          <div
            aria-hidden="true"
            className="mi-vitrine pb-vitrine-custom"
            style={{
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1rem 1.125rem 0.875rem',
            }}
          >
            {/* Custom concept image — ambient bling energy, no product claims */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/demo/phase3a/2t-demo-custom-before-after-01.png"
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.22,
                filter: 'brightness(0.65) saturate(0.55) contrast(1.1)',
                pointerEvents: 'none',
              }}
            />
            {/* Diamond outline depth marks — ambient accent, not headline */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -54%) rotate(45deg)',
              width: 'clamp(100px, 22vw, 140px)', height: 'clamp(100px, 22vw, 140px)',
              border: '1px solid rgba(201,168,76,0.16)', pointerEvents: 'none',
            }} />
            <div aria-hidden="true" style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -54%) rotate(45deg)',
              width: 'clamp(58px, 12vw, 80px)', height: 'clamp(58px, 12vw, 80px)',
              border: '1px solid rgba(201,168,76,0.28)', pointerEvents: 'none',
            }} />
            {/* Ice catch-light — top right */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: '10%', right: '12%',
              width: 'clamp(32px, 6vw, 52px)', height: 'clamp(32px, 6vw, 52px)',
              background: 'radial-gradient(circle, rgba(216,235,255,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Top identity label */}
            <p className="mi-mono mi-faint" style={{ fontSize: '0.5rem', letterSpacing: '0.24em', margin: 0, position: 'relative', zIndex: 1 }}>
              CUSTOM WORK
            </p>

            {/* Bottom rail — compact entry hint */}
            <div style={{ borderTop: '1px solid rgba(201,168,76,0.20)', paddingTop: '0.625rem', position: 'relative', zIndex: 1 }}>
              <p className="mi-mono" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'rgba(201,168,76,0.68)', margin: 0 }}>
                LOGO · PHOTO · NAME · SKETCH
              </p>
            </div>
          </div>

          {/* Right — identity copy, direct and fast */}
          <div>
            <div className="mi-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <span className="mi-diamond-sm" aria-hidden="true" />
              CUSTOM BUILT HERE
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 0.88,
                marginBottom: '1rem',
              }}
            >
              YOUR LOGO.<br />YOUR NAME.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
                YOUR PIECE.
              </em>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--color-brand-silver)',
                lineHeight: 1.6,
                maxWidth: '40ch',
                marginBottom: '1.25rem',
              }}
            >
              Send the logo, photo, name, sketch, or reference.
              We review before the quote. We quote before the build.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {CUSTOM_CHIPS.map((chip) => (
                <span key={chip} className="mi-pill">{chip}</span>
              ))}
            </div>

            {/* Trust line — clean, direct */}
            <p className="mi-mono mi-faint" style={{ marginBottom: '1.5rem', fontSize: '0.58rem' }}>
              <span className="mi-diamond-sm" aria-hidden="true" />
              NO DEPOSIT TO START · WE QUOTE FIRST
            </p>

            <Link href="/custom" className="btn-primary" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem' }}>
              START THE REQUEST →
            </Link>
          </div>
        </div>
      </section>

      <ProofContactZone />

      {/* ─── 8. SOCIAL TEASER — tap in with 2T ─────────────────────────── */}
      <SocialTeaser />

      {/* ─── 9. FINAL CTA BAR — last conversion push ───────────────────── */}
      <FinalCTABar />

      {/* Desktop/tablet sticky conversion bar — client component, no mobile */}
      <StickyConversionBar />
    </>
  )
}
