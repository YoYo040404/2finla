import Link from 'next/link'
import ProofContactZone from '@/components/home/ProofContactZone'

const WA_BUILD  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20want%20to%20build%20something%20custom.'
const WA_PROMO  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20promos%20are%20running%20right%20now%3F'
const WA_STOCK  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20do%20you%20have%20in%20stock%20right%20now%3F'
const WA_ASK    = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20piece.'

// Anchor tiles — 1.4fr 1fr 1fr, GRILLZ dominant
const ANCHOR_TILES = [
  {
    label:       'GRILLZ.',
    tone:        'pb-grillz',
    gleam:       true,
    pills:       ['TOP SET', 'BOTTOM SET', 'FULL MOUTH', 'DIAMOND'],
    pillGold:    'DIAMOND',
    cornerL:     'GOLD TEETH',
    href:        '/grillz',
    image:       '/assets/demo/phase3a/2t-demo-grillz-flat-01.png',
    imageAlt:    'Grillz — demo concept visual',
  },
  {
    label:       'WATCHES.',
    tone:        'pb-watches',
    gleam:       false,
    pills:       ['ICED BEZEL', 'BUST DOWN', 'DIAMOND-SET'],
    pillIce:     'ICED BEZEL',
    cornerL:     'ICE BEZEL',
    href:        '/watches',
    image:       '/assets/demo/phase3a/2t-demo-watch-face-01.png',
    imageAlt:    'Watch — demo concept visual',
  },
  {
    label:       'CHAINS.',
    tone:        'pb-chains',
    gleam:       false,
    pills:       ['CUBAN', 'ROPE', 'TENNIS'],
    cornerL:     'NECK GAME',
    href:        '/collections/chains',
    image:       '/assets/demo/phase3a/2t-demo-chains-01.png',
    imageAlt:    'Chain — demo concept visual',
  },
] as const

// Secondary tiles
const SECONDARY_TILES = [
  { label: 'PENDANTS.',  tone: 'pb-secondary', sub: 'Logo. Photo. Name. Number.',  href: '/collections/pendants'  },
  { label: 'RINGS.',     tone: 'pb-secondary', sub: 'Big face. Heavy statement.',  href: '/collections/rings'     },
  { label: 'BRACELETS.', tone: 'pb-secondary', sub: 'Wrist weight. Ask what\'s in.', href: '/collections/bracelets' },
  { label: 'EARRINGS.',  tone: 'pb-secondary', sub: 'Iced studs. Diamond hoops.',  href: '/collections/earrings'  },
] as const

// Demo concept visuals for secondary tiles — replace with real 2T product media when available
const SECONDARY_DEMO_IMAGES: Record<string, { src: string; alt: string }> = {
  'PENDANTS.': { src: '/assets/demo/phase3a/2t-demo-pendants-01.png', alt: 'Pendant — demo concept visual' },
}

const CUSTOM_CHIPS = [
  'LOGO PIECE', 'NAME PENDANT', 'PHOTO PENDANT',
  'CUSTOM GRILLZ', 'WATCH DIRECTION', 'CUSTOM CHAIN',
]

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO — Full-bleed campaign ──────────────────────────────── */}
      <section
        aria-label="Hero"
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
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
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
            Grillz. Watches. Chains. Rings. Custom pendants.{' '}
            <span style={{ color: 'var(--color-brand-muted)' }}>Shop it or build it. Text before you buy.</span>
          </p>

          <div className="reveal reveal-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
            <a
              href="#shop-jewelry"
              className="btn-primary"
              style={{ fontSize: '0.875rem', letterSpacing: '0.08em', padding: '0.9rem 1.875rem' }}
            >
              SHOP JEWELRY
            </a>
            <Link
              href="/custom"
              className="btn-outline-gold"
              style={{ fontSize: '0.875rem', letterSpacing: '0.08em', padding: '0.9rem 1.875rem' }}
            >
              BUILD CUSTOM →
            </Link>
          </div>

          {/* BANG. — owned brand hallmark, stands alone */}
          <div className="reveal reveal-d4" style={{ marginTop: '0.5rem' }}>
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
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 0.88,
                margin: 0,
              }}
            >
              PICK THE{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
                PIECE.
              </em>
            </h2>
          </div>

          {/* ── ANCHOR ROW: 1.4fr 1fr 1fr — GRILLZ dominant ── */}
          <div className="mi-anchor-row">
            {ANCHOR_TILES.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                className="pb-tile-link"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 'clamp(280px, 30vw, 420px)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  className={`mi-vitrine pb-vitrine-${tile.tone}`}
                  style={{ flex: 1, position: 'relative', overflow: 'hidden' }}
                >
                  {/* Demo concept visual — replace with real 2T product media when available */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tile.image}
                    alt={tile.imageAlt}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.88,
                    }}
                  />
                  {tile.gleam && <div className="mi-gleam" />}
                  {/* Corner label — category identity */}
                  <span className="mi-corner">{tile.cornerL}</span>
                </div>
                <div className="pb-tile-foot">
                  <h5 className="pb-tile-label">{tile.label}</h5>
                </div>
                <div className="pb-tile-pills">
                  {tile.pills.map((p) => (
                    <span
                      key={p}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: ('pillGold' in tile && tile.pillGold === p)
                          ? 'var(--color-brand-gold)'
                          : ('pillIce' in tile && tile.pillIce === p)
                            ? 'var(--color-ice-blue)'
                            : 'var(--color-brand-silver)',
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* ── SECONDARY TILES: 4-col, compressed ── */}
          <div className="mi-secondary-row">
            {SECONDARY_TILES.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                className="pb-tile-link"
                style={{ display: 'flex', flexDirection: 'column', minHeight: '230px', textDecoration: 'none', color: 'inherit' }}
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
                </div>
                <div className="pb-tile-foot">
                  <h5 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', margin: 0, lineHeight: 0.9 }}>{tile.label}</h5>
                </div>
                <div className="pb-tile-pills">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-brand-silver)' }}>{tile.sub}</span>
                </div>
              </Link>
            ))}
          </div>

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

      {/* ─── 3. PROMO TICKER — slim commercial strip (claim-safe) ──────── */}
      {/*
       * CLAIM SAFETY: no %, BOGO, free shipping, material, or inventory
       * claims. Safe phrases only. Promo terms confirmed per piece.
       */}
      <div className="promo-ticker" role="complementary" aria-label="What's running at 2T">
        <div className="promo-ticker-inner">
          <span className="promo-ticker-item">ASK WHAT&rsquo;S RUNNING NOW</span>
          <span className="promo-ticker-sep" aria-hidden="true">◆</span>
          <span className="promo-ticker-item">DETAILS CONFIRMED PER PIECE</span>
          <span className="promo-ticker-sep promo-ticker-wide" aria-hidden="true">◆</span>
          <span className="promo-ticker-item promo-ticker-wide">PROMO TERMS SHOWN ON ELIGIBLE PIECES</span>
          <span className="promo-ticker-sep" aria-hidden="true">◆</span>
          <a
            href={WA_PROMO}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-ticker-cta"
          >
            TEXT 2T →
          </a>
        </div>
      </div>

      {/* ─── 4. BUILD CUSTOM — identity flex lane ──────────────────────── */}
      <section
        aria-label="Custom jewelry"
        style={{
          background: '#0A0702',
          borderTop: '1px solid rgba(201,164,73,0.18)',
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
          {/* Left — custom art vitrine */}
          <div
            aria-hidden="true"
            className="mi-vitrine pb-vitrine-custom"
            style={{
              aspectRatio: '4/3',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            {/* Identity objects inside the frame */}
            <div style={{ padding: '14px', borderTop: '1px solid rgba(201,168,76,0.18)' }}>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['LOGO', 'PHOTO', 'NAME', 'SKETCH'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.16em',
                      padding: '3px 7px',
                      border: '1px solid rgba(201,168,76,0.28)',
                      color: 'rgba(201,168,76,0.72)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
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

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/custom" className="btn-primary" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem' }}>
                START THE REQUEST →
              </Link>
              <a href={WA_BUILD} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                TEXT 2T →
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProofContactZone />
    </>
  )
}
