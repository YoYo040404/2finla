import Image from 'next/image'
import Link from 'next/link'
import ProofContactZone from '@/components/home/ProofContactZone'
import ShineDirectionBand from '@/components/home/ShineDirectionBand'
import { ShineRail } from '@/components/home/ShineRail'
import SocialTeaser from '@/components/home/SocialTeaser'
import FinalCTABar from '@/components/home/FinalCTABar'
import ScrollRevealController from '@/components/home/ScrollRevealController'
import StickyConversionBar from '@/components/home/StickyConversionBar'
import { TileGlareController } from '@/components/home/TileGlareController'
import { CategorySilhouette } from '@/components/home/CategorySilhouette'
import { HOME_MEDIA } from '@/data/homeMedia'

const WA_BUILD  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20want%20to%20build%20something%20custom.'
const WA_PROMO  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%27s%20running%20this%20week%3F'
const WA_STOCK  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20do%20you%20have%20in%20stock%20right%20now%3F'
const WA_ASK    = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20piece.'
const WA_CASE   = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20do%20you%20have%20in%20the%20case%20right%20now%3F'

// Anchor tiles — 1.4fr 1fr 1fr, GRILLZ dominant
const ANCHOR_TILES = [
  {
    label:    'GRILLZ.',
    tone:     'pb-grillz',
    gleam:    true,
    sub:      'Top, bottom, full mouth. Built around your fit.',
    href:     '/grillz',
    image:    HOME_MEDIA.anchorTiles.grillz.src,
    imageAlt: 'Grillz — demo concept visual',
  },
  {
    label:    'WATCHES.',
    tone:     'pb-watches',
    gleam:    true,
    sub:      "Iced and bust-down. Ask what's in the case now.",
    href:     '/watches',
    image:    HOME_MEDIA.anchorTiles.watches.src,
    imageAlt: 'Watch — demo concept visual',
  },
  {
    label:    'CHAINS.',
    tone:     'pb-chains',
    gleam:    true,
    sub:      'Cuban, rope, tennis. Match it to your pendant.',
    href:     '/collections/chains',
    image:    HOME_MEDIA.anchorTiles.chains.src,
    imageAlt: 'Chain — demo concept visual',
  },
] as const

// Secondary tiles — each tone maps to a per-category vitrine surface in globals.css.
// PENDANTS uses the demo macro; RINGS / BRACELETS / EARRINGS have no product
// photography yet, so they get a designed fine-line silhouette case marker
// (CategorySilhouette) — clearly non-photographic, never shown as real inventory.
// Swap a silhouette tile to `image` when 2T provides a real macro.
type SecondaryTile = {
  label:      string
  tone:       string
  sub:        string
  href:       string
  image?:     { src: string; alt: string }
  silhouette?: 'ring' | 'bracelet' | 'earring'
  inkColor?:  string
}

const SECONDARY_TILES: SecondaryTile[] = [
  { label: 'PENDANTS.',  tone: 'pb-pendants',  sub: 'Photo, logo, name, number. Made to order.',     href: '/collections/pendants',  image: HOME_MEDIA.pendantSecondary },
  { label: 'RINGS.',     tone: 'pb-rings',     sub: 'Big face, heavy statement. Catalog or custom.', href: '/collections/rings',     silhouette: 'ring',     inkColor: 'rgba(201,168,76,0.85)' },
  { label: 'BRACELETS.', tone: 'pb-bracelets', sub: 'Tennis or Cuban. Built to match the chain.',    href: '/collections/bracelets', silhouette: 'bracelet', inkColor: 'rgba(216,235,255,0.82)' },
  { label: 'EARRINGS.',  tone: 'pb-earrings',  sub: 'Studs and hoops. Clean, iced, ready.',          href: '/collections/earrings',  silhouette: 'earring',  inkColor: 'rgba(238,244,250,0.85)' },
]

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
        className="homepage-hero grain-field"
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
          className="hero-media-kenburns"
          poster={HOME_MEDIA.hero.posterSrc}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            zIndex: 0, opacity: 0.60,
          }}
        >
          <source src={HOME_MEDIA.hero.videoSrc} type="video/mp4" />
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
            <em className="hero-hit-sweep">
              HIT.
            </em>
          </h1>

          {/* Product stack — immediate category signal */}
          <p
            className="reveal reveal-d2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.0625rem)',
              lineHeight: 1.5,
              marginBottom: '1.5rem',
              maxWidth: '46ch',
              textShadow: '0 1px 8px rgba(0,0,0,0.6)',
            }}
          >
            <span style={{ color: 'var(--color-brand-white)', fontWeight: 500 }}>Grillz. Watches. Chains. Pendants. Custom pieces.</span>
            <br />
            <span style={{ color: 'var(--color-brand-silver)' }}>Real Pittsburgh jeweler. Text 2T before you buy.</span>
          </p>

          <div className="reveal reveal-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
            <a
              href="#shop-jewelry"
              className="btn-primary cta-shimmer"
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
        className="grain-field"
        style={{
          background: 'var(--color-brand-black)',
          borderTop: '1px solid var(--color-brand-border)',
          padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 3vw, 2.5rem)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Masthead — hard, commercial */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div className="mi-eyebrow" style={{ marginBottom: '0.55rem' }}>
              <span className="mi-diamond-sm" aria-hidden="true" />
              SHOP THE CASE
            </div>
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
                  <Image
                    src={tile.image}
                    alt={tile.imageAlt}
                    fill
                    sizes={idx === 0 ? '(max-width: 767px) 100vw, 45vw' : '(max-width: 767px) 100vw, 28vw'}
                    className="pb-anchor-img"
                    style={{
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
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-brand-silver)', lineHeight: 1.45, margin: 0 }}>
                    {tile.sub}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* ── SECONDARY TILES: 4-col case shelf — every tile has a visual ── */}
          <div className="mi-secondary-row">
            {SECONDARY_TILES.map((tile, idx) => (
              <Link
                key={tile.label}
                href={tile.href}
                className={`pb-tile-link tile-reveal-s${idx}`}
                style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className={`mi-vitrine pb-vitrine-${tile.tone} pb-vitrine-secondary`}
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  {tile.image ? (
                    /* Demo concept visual — replace with real 2T product media when available */
                    <Image
                      src={tile.image.src}
                      alt={tile.image.alt}
                      fill
                      sizes="(max-width: 767px) 50vw, 25vw"
                      className="pb-anchor-img"
                      style={{ objectFit: 'cover', objectPosition: 'center 40%', filter: 'brightness(1.06) contrast(1.03)' }}
                    />
                  ) : tile.silhouette ? (
                    /* Designed case marker — non-photographic line art, not real inventory */
                    <div className="pb-silhouette-wrap" style={{ color: tile.inkColor }}>
                      <CategorySilhouette type={tile.silhouette} />
                    </div>
                  ) : null}
                  <div className="mi-gleam" />
                </div>
                <div className="pb-tile-foot">
                  <h5 className="pb-tile-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', margin: 0, lineHeight: 0.9 }}>{tile.label}</h5>
                </div>
                <div className="pb-tile-pills">
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-brand-silver)', lineHeight: 1.45, margin: 0 }}>{tile.sub}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Text-first exit — low-emphasis WhatsApp path out of the case ── */}
          <div className="case-text-exit">
            <span className="case-text-exit-q">{"Don't see it in the case?"}</span>
            <a
              href={WA_CASE}
              target="_blank"
              rel="noopener noreferrer"
              className="case-text-exit-cta"
            >
              TEXT 2T — ASK WHAT'S IN →
            </a>
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
      <div className="promo-ticker" role="complementary" aria-label="Shop 2T by category">
        <div className="promo-ticker-inner">
          <span className="promo-ticker-item">THIS WEEK AT 2T</span>
          <span className="promo-ticker-sep" aria-hidden="true">◆</span>
          <span className="promo-ticker-item">CHAINS · PENDANTS · GRILLZ · CUSTOM</span>
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

      {/* Sentinel for StickyConversionBar — appears when user scrolls past this point */}
      <div id="sticky-trigger" aria-hidden="true" />

      {/* ─── 4. BUILD CUSTOM — identity flex lane ──────────────────────── */}
      <section
        aria-label="Custom jewelry"
        className="custom-inquiry-section grain-field"
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
            <Image
              src={HOME_MEDIA.customVitrine.src}
              alt={HOME_MEDIA.customVitrine.alt}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="custom-vitrine-pulse"
              style={{
                objectFit: 'cover',
                opacity: 0.22,
                filter: 'brightness(0.65) saturate(0.55) contrast(1.1)',
                pointerEvents: 'none',
              }}
            />
            {/* Single diamond outline — clean piece-in-case frame, ambient accent */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -54%) rotate(45deg)',
              width: 'clamp(96px, 20vw, 132px)', height: 'clamp(96px, 20vw, 132px)',
              border: '1px solid rgba(201,168,76,0.30)', pointerEvents: 'none',
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

            <Link href="/custom" className="btn-primary cta-shimmer" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem' }}>
              START THE REQUEST →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 6b. SHINE RAIL — Most Asked About merchandising rail ──────── */}
      <ShineRail />

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
