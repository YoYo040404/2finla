import Link from 'next/link'
import ProofContactZone from '@/components/home/ProofContactZone'
import ShineDirectionBand from '@/components/home/ShineDirectionBand'

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
    sub:         'Custom fit. Gold or stones. Ask 2T first.',
    pills:       ['TOP SET', 'BOTTOM SET', 'FULL MOUTH', 'ICE'],
    pillGold:    'ICE',
    cornerL:     'GOLD TEETH',
    href:        '/grillz',
    image:       '/assets/demo/phase3a/2t-demo-grillz-flat-01.png',
    imageAlt:    'Grillz — demo concept visual',
  },
  {
    label:       'WATCHES.',
    tone:        'pb-watches',
    gleam:       true,
    sub:         'Iced looks. Details confirmed per piece.',
    pills:       ['ICED BEZEL', 'BUST DOWN', 'ICED OUT'],
    pillIce:     'ICED BEZEL',
    cornerL:     'ICE BEZEL',
    href:        '/watches',
    image:       '/assets/demo/phase3a/2t-demo-watch-face-01.png',
    imageAlt:    'Watch — demo concept visual',
  },
  {
    label:       'CHAINS.',
    tone:        'pb-chains',
    gleam:       true,
    sub:         "Cuban, rope, and tennis. Ask what's in.",
    pills:       ['CUBAN', 'ROPE', 'TENNIS'],
    cornerL:     'NECK GAME',
    href:        '/collections/chains',
    image:       '/assets/demo/phase3a/2t-demo-chains-01.png',
    imageAlt:    'Chain — demo concept visual',
  },
] as const

// Secondary tiles — each tone maps to a per-category vitrine surface in globals.css
const SECONDARY_TILES = [
  { label: 'PENDANTS.',  tone: 'pb-pendants',  sub: 'Photo, logo, name. Send the idea.',           href: '/collections/pendants'  },
  { label: 'RINGS.',     tone: 'pb-rings',     sub: 'Big face. Heavy statement. Details per piece.', href: '/collections/rings'     },
  { label: 'BRACELETS.', tone: 'pb-bracelets', sub: 'Wrist shine with weight. Text to ask.',        href: '/collections/bracelets' },
  { label: 'EARRINGS.',  tone: 'pb-earrings',  sub: "Iced and clean. Ask what's available.",        href: '/collections/earrings'  },
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

        {/* BANG. cinematic overlay — one-time title-card flash on load, fades permanently */}
        <div className="bang-cinematic-overlay" aria-hidden="true">
          <span className="bang-cinematic-text">BANG.</span>
        </div>

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
            <span style={{ color: 'var(--color-brand-muted)' }}>Real Pittsburgh jeweler. Text 2T.</span>
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
              Pick the piece. Then pick the shine.
            </p>
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
                    className="pb-anchor-img"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {tile.gleam && <div className="mi-gleam" />}
                  {/* Corner label — category identity */}
                  <span className="mi-corner">{tile.cornerL}</span>
                </div>
                <div className="pb-tile-foot">
                  <h5 className="pb-tile-label pb-tile-title">{tile.label}</h5>
                </div>
                <div className="pb-tile-pills">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.63rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-brand-muted)', display: 'block', paddingBottom: '0.3rem', borderBottom: '1px solid rgba(201,168,76,0.10)', marginBottom: '0.3rem', lineHeight: 1.4 }}>
                    {tile.sub}
                  </span>
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
                style={{ display: 'flex', flexDirection: 'column', minHeight: '288px', textDecoration: 'none', color: 'inherit' }}
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
                  <h5 className="pb-tile-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.08rem, 2.1vw, 1.35rem)', margin: 0, lineHeight: 0.9 }}>{tile.label}</h5>
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

      {/* ─── 2b. SHINE DIRECTION BAND — compact material/stone signal ──── */}
      <ShineDirectionBand />

      {/* ─── 3. PROMO TICKER — slim commercial strip (claim-safe) ──────── */}
      {/*
       * CLAIM SAFETY: no %, BOGO, free shipping, material, or inventory
       * claims. Safe phrases only. Promo terms confirmed per piece.
       */}
      <div className="promo-ticker" role="complementary" aria-label="What's running at 2T">
        <div className="promo-ticker-inner">
          <span className="promo-ticker-item">ASK WHAT&rsquo;S RUNNING THIS WEEK</span>
          <span className="promo-ticker-sep" aria-hidden="true">◆</span>
          <span className="promo-ticker-item">DETAILS CONFIRMED PER PIECE</span>
          <span className="promo-ticker-sep promo-ticker-wide" aria-hidden="true">◆</span>
          <span className="promo-ticker-item promo-ticker-wide">TEXT 2T FOR CURRENT DEALS</span>
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
    </>
  )
}
