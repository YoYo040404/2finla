import Link from 'next/link'
import ProofMarquee    from '@/components/home/ProofMarquee'
import PittsburghStory from '@/components/home/PittsburghStory'
import SocialTeaser    from '@/components/home/SocialTeaser'

const WA_BUILD  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20want%20to%20build%20something%20custom.'
const WA_PROMO  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20promos%20are%20running%20right%20now%3F'
const WA_STOCK  = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20do%20you%20have%20in%20stock%20right%20now%3F'
const WA_ASK    = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20piece.'

// Anchor tiles — Variation A structure, 1.4fr 1fr 1fr from Variation B
const ANCHOR_TILES = [
  {
    label:    'GRILLZ.',
    tone:     'gold',
    gleam:    true,
    pills:    ['TOP', 'BOTTOM', 'FULL SET', 'DIAMOND'],
    pillGold: 'DIAMOND',
    href:     '/grillz',
  },
  {
    label:   'WATCHES.',
    tone:    'ice',
    gleam:   false,
    pills:   ['ICED BEZEL', 'BUST DOWN'],
    pillIce: 'ICED BEZEL',
    href:    '/watches',
  },
  {
    label: 'CHAINS.',
    tone:  'spot',
    gleam: false,
    pills: ['CUBAN', 'ROPE', 'TENNIS'],
    href:  '/collections/chains',
  },
] as const

// Secondary tiles
const SECONDARY_TILES = [
  { label: 'PENDANTS.',  tone: 'deep', sub: 'Photo, logo, name, or number.',  href: '/collections/pendants'  },
  { label: 'RINGS.',     tone: 'deep', sub: 'Big face. Heavy statement.',      href: '/collections/rings'     },
  { label: 'BRACELETS.', tone: 'deep', sub: 'Wrist game. Ask what\'s in.',   href: '/collections/bracelets' },
  { label: 'EARRINGS.',  tone: 'deep', sub: 'Iced studs and hoops.',          href: '/collections/earrings'  },
] as const

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
          {/* Eyebrow — direct, gold, readable */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-gold)',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span className="mi-diamond-sm" aria-hidden="true" />
            PITTSBURGH · 30+ YEARS · GRILLZ · WATCHES · CHAINS · CUSTOM
          </div>

          <h1
            className="reveal reveal-d1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 13vw, 11rem)',
              fontWeight: 400,
              lineHeight: 0.85,
              letterSpacing: '0.01em',
              color: 'var(--color-brand-white)',
              margin: '0 0 1.25rem',
            }}
          >
            BUILT TO{' '}
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
              HIT.
            </em>
          </h1>

          <p
            className="reveal reveal-d2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
              color: 'var(--color-brand-silver)',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
              maxWidth: '48ch',
            }}
          >
            Grillz. Watches. Chains. Pendants. Custom.{' '}
            <span style={{ color: 'var(--color-brand-muted)' }}>Pittsburgh-built. Over 30 years.</span>
          </p>

          {/* BANG. — brand stamp */}
          <div className="reveal reveal-d3" style={{ marginBottom: '1.75rem' }}>
            <span className="hero-bang-stamp">BANG.</span>
          </div>

          <div className="reveal reveal-d4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
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

          <span className="mi-mono mi-faint">
            <span className="mi-diamond-sm" aria-hidden="true" />
            NO DEPOSIT · WE QUOTE FIRST · DETAILS CONFIRMED PER PIECE
          </span>
        </div>

      </section>

      <ProofMarquee />

      {/* ─── 2. SHOP JEWELRY — Midnight Icebox vitrine gateway ──────────── */}
      <section
        id="shop-jewelry"
        aria-label="Shop jewelry by category"
        style={{
          background: 'var(--color-brand-black)',
          borderTop: '1px solid var(--color-brand-border)',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 3vw, 2.5rem)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Masthead */}
          <div className="mi-eyebrow" style={{ marginBottom: '6px' }}>
            <span className="mi-diamond-sm" aria-hidden="true" />
            SHOP BY PIECE
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              marginBottom: '0.5rem',
            }}
          >
            SHOP{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
              JEWELRY.
            </em>
          </h2>
          <p className="mi-mono mi-faint" style={{ marginBottom: '1.75rem' }}>
            GRILLZ · WATCHES · CHAINS · PENDANTS · RINGS · BRACELETS · EARRINGS · CUSTOM
          </p>

          {/* ── ANCHOR ROW: 1.4fr 1fr 1fr — GRILLZ dominant ── */}
          <div className="mi-anchor-row">
            {ANCHOR_TILES.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 'clamp(300px, 32vw, 440px)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  className={`mi-vitrine mi-vitrine-${tile.tone}`}
                  style={{ flex: 1, position: 'relative' }}
                >
                  {tile.gleam && <div className="mi-gleam" />}
                </div>
                <div
                  className="mi-vitrine-foot"
                  style={{ background: 'var(--color-brand-charcoal)' }}
                >
                  <h5>{tile.label}</h5>
                  <span className="mi-ask">ASK 2T</span>
                </div>
                <div
                  className="mi-vitrine-pills"
                  style={{ background: 'var(--color-brand-charcoal)', gap: '10px' }}
                >
                  {tile.pills.map((p) => (
                    <span
                      key={p}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.12em',
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

          {/* Thin rule between anchor and secondary */}
          <div aria-hidden="true" style={{ height: '1px', background: 'var(--color-brand-border)', marginBottom: '1px' }} />

          {/* ── SECONDARY TILES: 4-col ── */}
          <div className="mi-secondary-row">
            {SECONDARY_TILES.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                style={{ display: 'flex', flexDirection: 'column', minHeight: '200px', textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className={`mi-vitrine mi-vitrine-${tile.tone}`}
                  style={{ flex: 1, position: 'relative' }}
                />
                <div
                  className="mi-vitrine-foot"
                  style={{ background: 'var(--color-brand-charcoal)' }}
                >
                  <h5 style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)' }}>{tile.label}</h5>
                </div>
                <div
                  className="mi-vitrine-pills"
                  style={{ background: 'var(--color-brand-charcoal)' }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-muted)' }}>{tile.sub}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* ── CUSTOM BAND: full-width gold-bordered ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap',
              background: '#0a0703',
              border: '1px solid var(--color-brand-gold)',
              padding: 'clamp(1rem, 2.5vw, 1.5rem) clamp(1rem, 2.5vw, 1.75rem)',
              marginTop: '1px',
              marginBottom: '1.25rem',
            }}
          >
            <div>
              <span className="mi-eyebrow" style={{ marginBottom: '4px' }}>
                <span className="mi-diamond-sm" aria-hidden="true" />
                CUSTOM BUILT HERE
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  lineHeight: 0.9,
                  margin: '0 0 6px',
                }}
              >
                YOUR LOGO. YOUR NAME.{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
                  YOUR PIECE.
                </em>
              </h3>
              <span className="mi-mono mi-faint">SEND THE IDEA · WE QUOTE FIRST · NO DEPOSIT</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/custom" className="btn-primary" style={{ fontSize: '0.8rem', letterSpacing: '0.08em', padding: '0.8rem 1.5rem' }}>
                BUILD CUSTOM →
              </Link>
              <a href={WA_BUILD} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ fontSize: '0.8rem', letterSpacing: '0.08em' }}>
                TEXT 2T →
              </a>
            </div>
          </div>

          {/* ── UTILITY RAIL ── */}
          <div
            style={{
              display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
              borderTop: '1px solid var(--color-brand-border)',
              paddingTop: '1rem',
            }}
          >
            {[
              { label: 'ASK WHAT\'S IN STOCK NOW →', href: WA_STOCK,  gold: true },
              { label: 'ASK WHAT\'S RUNNING NOW →',  href: WA_PROMO,  gold: false },
              { label: 'TEXT 2T →',                   href: WA_ASK,   gold: false },
            ].map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cta.gold ? 'mi-pill mi-pill-gold' : 'mi-pill'}
                style={{ textDecoration: 'none', transition: 'border-color 0.18s, color 0.18s' }}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. WEEKLY SPECIAL — Midnight Icebox promo surface ──────────── */}
      {/*
       * CLAIM SAFETY: no %, BOGO, free shipping, material, or inventory
       * claims without per-piece verification. Placeholder copy is intentional.
       */}
      <section
        aria-label="This week's promotion"
        style={{
          background: '#070707',
          borderTop: '1px solid var(--color-brand-border)',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 3vw, 2.5rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Left — copy */}
          <div>
            <div className="mi-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="mi-diamond-sm" aria-hidden="true" />
              THIS WEEK AT 2T
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                fontWeight: 400,
                lineHeight: 0.9,
                marginBottom: '1.25rem',
              }}
            >
              WHAT&rsquo;S<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
                RUNNING
              </em>
              <br />
              THIS WEEK.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-brand-silver)',
                lineHeight: 1.65,
                maxWidth: '42ch',
                marginBottom: '1.75rem',
              }}
            >
              Chains, pendants, watches, grillz. Ask what&rsquo;s running &mdash; terms confirmed per piece.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={WA_PROMO} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem' }}>
                ASK WHAT&rsquo;S RUNNING →
              </a>
              <a href="#shop-jewelry" className="btn-outline-gold" style={{ fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                SHOP JEWELRY →
              </a>
            </div>
          </div>

          {/* Right — promo vitrine (gleam #2 of 3) */}
          <div
            aria-hidden="true"
            className="mi-vitrine mi-vitrine-spot"
            style={{
              aspectRatio: '4/3',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <div className="mi-gleam" />
            <div style={{ padding: '10px 14px', borderTop: '1px solid var(--color-brand-border)' }}>
              <span className="mi-mono mi-faint" style={{ fontSize: '0.6rem' }}>
                WEEKLY SLOT · ASK WHAT&rsquo;S RUNNING
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CUSTOM BUILT HERE — two-column vitrine + text ───────────── */}
      <section
        aria-label="Custom jewelry"
        style={{
          background: 'var(--color-brand-black)',
          borderTop: '1px solid var(--color-brand-border)',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 3vw, 2.5rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Left — vitrine (no gleam) */}
          <div
            aria-hidden="true"
            className="mi-vitrine mi-vitrine-gold"
            style={{
              aspectRatio: '4/3',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          />

          {/* Right — text */}
          <div>
            <div className="mi-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="mi-diamond-sm" aria-hidden="true" />
              CUSTOM BUILT HERE
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 0.9,
                marginBottom: '1.25rem',
              }}
            >
              LOGO. NAME.<br />PHOTO.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)' }}>
                YOUR PIECE.
              </em>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-brand-silver)',
                lineHeight: 1.65,
                maxWidth: '44ch',
                marginBottom: '1.5rem',
              }}
            >
              Send the logo, photo, name, number, or sketch.
              We review before the quote. We quote before the build. No deposit to start.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {CUSTOM_CHIPS.map((chip) => (
                <span key={chip} className="mi-pill">{chip}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/custom" className="btn-primary" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem' }}>
                BUILD CUSTOM →
              </Link>
              <a href={WA_BUILD} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                TEXT 2T →
              </a>
            </div>
          </div>
        </div>
      </section>

      <PittsburghStory />

      <SocialTeaser />
    </>
  )
}
