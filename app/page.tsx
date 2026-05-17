import Link from 'next/link'
import ProofMarquee     from '@/components/home/ProofMarquee'
import PittsburghStory  from '@/components/home/PittsburghStory'
import SocialTeaser     from '@/components/home/SocialTeaser'
import FinalCTABar      from '@/components/home/FinalCTABar'

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

const CUSTOM_SPARKLES = [
  { top: '18%', left: '15%', delay: '0.4s', size: 3, ice: true  },
  { top: '72%', left: '82%', delay: '1.6s', size: 4, ice: false },
  { top: '44%', left: '92%', delay: '2.9s', size: 3, ice: true  },
  { top: '80%', left: '10%', delay: '0.8s', size: 3, ice: false },
] as const

const LANE_TILES = [
  { label: 'CHAINS',   sub: 'Rope, Cuban, Tennis. Hit the neck.',           href: '/collections/chains'   },
  { label: 'PENDANTS', sub: 'Logo, cross, iced-out. Made personal.',        href: '/collections/pendants' },
  { label: 'GRILLZ',   sub: 'Top, bottom, full set. Built to show.',        href: '/grillz'               },
  { label: 'WATCHES',  sub: 'Iced bezels. High-end watch direction.',       href: '/watches'              },
  { label: 'CUSTOM',   sub: 'Logo, sketch, photo. Built from the idea up.', href: '/custom',  gold: true  },
] as const


/* ── Shared section wrapper ─────────────────────────────────────────────── */
function Section({
  children,
  bg = 'var(--color-brand-black)',
  border = true,
  py = 'clamp(3rem, 7vw, 5rem)',
}: {
  children: React.ReactNode
  bg?: string
  border?: boolean
  py?: string
}) {
  return (
    <section
      style={{
        backgroundColor: bg,
        borderTop:        border ? '1px solid var(--color-brand-border)' : 'none',
        paddingTop:       py,
        paddingBottom:    py,
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1.5rem' }}>
        {children}
      </div>
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
      {children}
    </span>
  )
}

function SectionHeading({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2
      style={{
        fontFamily:    'var(--font-body)',
        fontSize:      'clamp(1.7rem, 3.8vw, 2.7rem)',
        fontWeight:    800,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        color:         'var(--color-brand-white)',
        lineHeight:    1.0,
        ...style,
      }}
    >
      {children}
    </h2>
  )
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO — FULL BLEED IMMERSIVE ──────────────────────────── */}
      <section
        style={{
          position:  'relative',
          minHeight: 'max(100dvh, 600px)',
          display:   'flex',
          alignItems: 'flex-end',
          overflow:  'hidden',
        }}
        aria-label="Hero"
      >
        {/* Demo video — replace with final 2T store footage when recorded */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position:       'absolute',
            inset:          0,
            width:          '100%',
            height:         '100%',
            objectFit:      'cover',
            objectPosition: 'center 25%',
            zIndex:         0,
          }}
        >
          <source src="/assets/hero-loop-demo.mp4" type="video/mp4" />
        </video>

        {/* Reading gradients — text readability over the jewelry glow */}
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            inset:         0,
            background:    'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.88) 38%, rgba(8,8,8,0.3) 65%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            inset:         0,
            background:    'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.75) 18%, rgba(8,8,8,0.35) 42%, transparent 62%)',
            pointerEvents: 'none',
          }}
        />

        {/* Diagonal sweep ray */}
        <div
          aria-hidden="true"
          style={{
            position:       'absolute',
            top:            '-30%',
            left:           '-10%',
            width:          '35%',
            height:         '200%',
            background:     'linear-gradient(108deg, transparent 40%, rgba(201,168,76,0.055) 50%, transparent 60%)',
            pointerEvents:  'none',
            animation:      'hero-sweep 8s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        {/* Sparkle hits — clustered right side around jewelry art */}
        {HERO_SPARKLES.map((s, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position:        'absolute',
              top:             s.top,
              left:            s.left,
              width:           `${s.size}px`,
              height:          `${s.size}px`,
              borderRadius:    '50%',
              backgroundColor: s.ice ? 'rgba(208,238,255,0.95)' : 'rgba(255,248,220,0.9)',
              boxShadow:       s.ice
                ? `0 0 ${s.size * 5}px ${s.size + 2}px rgba(208,238,255,0.45)`
                : `0 0 ${s.size * 5}px ${s.size + 2}px rgba(201,168,76,0.4)`,
              animation:       'sparkle-hit 3.8s ease-in-out infinite',
              animationDelay:  s.delay,
              pointerEvents:   'none',
            }}
          />
        ))}

        {/* Text — bottom-left */}
        <div
          style={{
            position:      'relative',
            zIndex:        10,
            maxWidth:      '1440px',
            margin:        '0 auto',
            width:         '100%',
            padding:       '0 1.5rem',
            paddingBottom: 'clamp(5.5rem, 14vw, 10rem)',
          }}
        >
          <div style={{ maxWidth: '560px' }}>

            {/* ── BANG stamp — Effi's signature ── */}
            <div style={{ marginBottom: '1rem' }}>
              <em className="hero-bang-stamp">BANG.</em>
            </div>

            <h1
              className="reveal reveal-d2"
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(4.5rem, 11vw, 9.5rem)',
                fontWeight:    700,
                lineHeight:    0.88,
                color:         'var(--color-brand-white)',
                letterSpacing: '-0.03em',
              }}
            >
              BUILT TO{' '}
              <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>HIT.</em>
            </h1>

            <div
              className="reveal reveal-d4"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}
            >
              <Link
                href="/custom"
                className="btn-primary"
                style={{ fontSize: '0.875rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem' }}
              >
                START THE PIECE →
              </Link>
              <a
                href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dim"
              >
                TEXT US FIRST →
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProofMarquee />

      {/* ─── 2. CUSTOM ENTRY BLOCK — promoted, two-column ────────────── */}
      <section
        style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-brand-border)' }}
      >
        {/* Gold top accent line */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            top:        0,
            left:       0,
            right:      0,
            height:     '2px',
            background: 'linear-gradient(90deg, transparent 0%, var(--color-brand-gold-dim) 20%, var(--color-brand-gold) 50%, var(--color-brand-gold-dim) 80%, transparent 100%)',
            zIndex:     2,
          }}
        />

        {/* Two-column on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/*
            CUSTOM PHOTO SLOT (left panel)
            When asset is ready, replace this entire div with:
              <div style={{ position:'relative', minHeight:'460px', overflow:'hidden' }}>
                <Image src="/assets/custom-pendant-closeup.jpg" fill style={{ objectFit:'cover' }} alt="Custom pendant close-up" />
              </div>
            Suggested: macro iced-out pendant · chain-on-neck · grillz sparkle on black background
          */}
          <div className="custom-art-frame">
            <div className="custom-art-glow" aria-hidden="true" />
            <div className="custom-pendant-art" aria-hidden="true">
              <div className="cpa-outer">
                <div className="cpa-mid">
                  <div className="cpa-gem" />
                </div>
              </div>
              <div className="cpa-chain-link cpa-link-top" />
            </div>
            {/* Sparkle hits inside the art frame */}
            {CUSTOM_SPARKLES.map((s, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{
                  position:        'absolute',
                  top:             s.top,
                  left:            s.left,
                  width:           `${s.size}px`,
                  height:          `${s.size}px`,
                  borderRadius:    '50%',
                  backgroundColor: s.ice ? 'rgba(208,238,255,0.9)' : 'rgba(255,248,220,0.85)',
                  boxShadow:       s.ice
                    ? `0 0 ${s.size * 4}px ${s.size + 1}px rgba(208,238,255,0.4)`
                    : `0 0 ${s.size * 4}px ${s.size + 1}px rgba(201,168,76,0.35)`,
                  animation:       'sparkle-hit 3.8s ease-in-out infinite',
                  animationDelay:  s.delay,
                  pointerEvents:   'none',
                }}
              />
            ))}
          </div>

          {/* Right: text + CTA */}
          <div
            style={{
              display:         'flex',
              flexDirection:   'column',
              justifyContent:  'center',
              padding:         'clamp(2.5rem, 6vw, 4.5rem)',
              position:        'relative',
              zIndex:          1,
              backgroundColor: 'var(--color-brand-charcoal)',
            }}
          >
            <Eyebrow>Custom — Built Here</Eyebrow>
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight:    600,
                color:         'var(--color-brand-white)',
                lineHeight:    0.97,
                letterSpacing: '-0.03em',
                marginTop:     '0.75rem',
                marginBottom:  '1.35rem',
              }}
            >
              Bring the logo.
              <br />
              Bring the photo.
              <br />
              <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>
                Bring the idea.
              </em>
            </h2>
            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.9rem',
                color:        'var(--color-brand-muted)',
                lineHeight:   1.65,
                maxWidth:     '44ch',
                marginBottom: '2rem',
              }}
            >
              We&apos;ll shape it into a piece that hits. Send the idea — we guide the next step before quote or production.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Link
                href="/custom"
                className="btn-primary"
                style={{ textAlign: 'center', padding: '0.9rem 2rem', fontSize: '0.875rem', letterSpacing: '0.07em' }}
              >
                SEND THE IDEA →
              </Link>
              <p className="trust-signal">No deposit. No rush. We quote first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. PICK YOUR LANE ────────────────────────────────────────── */}
      <section className="pick-lane-section" aria-label="Shop by category">
        <div className="pick-lane-inner">
          <span className="section-eyebrow">SHOP BY PIECE</span>
          <h2 className="pick-lane-heading">PICK YOUR LANE</h2>

          <div className="pick-lane-grid">
            {LANE_TILES.map((tile) => (
              <Link
                key={tile.label}
                href={tile.href}
                className={`pick-lane-tile${'gold' in tile ? ' pick-lane-tile--custom' : ''}`}
              >
                <span className="pick-lane-tile-label">{tile.label}</span>
                <span className="pick-lane-tile-sub">{tile.sub}</span>
                <span className="pick-lane-tile-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          <div className="pick-lane-secondary" aria-label="More categories">
            <Link href="/collections/bracelets" className="pick-lane-pill">Bracelets</Link>
            <span aria-hidden="true">·</span>
            <Link href="/collections/rings"     className="pick-lane-pill">Rings</Link>
            <span aria-hidden="true">·</span>
            <Link href="/collections/earrings"  className="pick-lane-pill">Earrings</Link>
            <span aria-hidden="true">·</span>
            <Link href="/collections" className="pick-lane-pill pick-lane-pill--all">Browse All →</Link>
          </div>
        </div>
      </section>

      {/* ─── 6. INQUIRY LANES ─────────────────────────────────────────── */}
      <Section bg="var(--color-brand-charcoal)">
        <Eyebrow>Inquiry Only</Eyebrow>
        <SectionHeading style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
          Ask before you buy.
        </SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {[
            { title: 'Diamond Watches', sub: 'Iced bezels. Custom-set looks. High-end watch direction.', href: '/watches', cta: 'Ask About Watches' },
            { title: 'Grillz',          sub: 'Top, bottom, or full set. Gold, silver, iced. Let\'s build.', href: '/grillz', cta: 'Start Grillz Inquiry' },
            { title: 'Custom Jewelry',  sub: 'Logo, sketch, photo, or just an idea. We build from there.', href: '/custom',  cta: 'Start the Piece' },
          ].map((lane) => (
            <div key={lane.title} className="inquiry-power-lane">
              <div style={{ flex: '1 1 260px' }}>
                <h3 style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      'clamp(1.35rem, 2.5vw, 1.7rem)',
                  fontWeight:    700,
                  textTransform: 'uppercase',
                  color:         'var(--color-brand-white)',
                  letterSpacing: '0.03em',
                  lineHeight:    1.0,
                }}>
                  {lane.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-brand-muted)', lineHeight: 1.6, marginTop: '0.45rem' }}>
                  {lane.sub}
                </p>
              </div>
              <Link
                href={lane.href}
                className="btn-primary"
                style={{ fontSize: '0.8125rem', letterSpacing: '0.07em', padding: '0.8rem 1.6rem', whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {lane.cta} →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <PittsburghStory />

      <SocialTeaser />

      <FinalCTABar />
    </>
  )
}
