import Link from 'next/link'
import ProofMarquee    from '@/components/home/ProofMarquee'
import PittsburghStory from '@/components/home/PittsburghStory'
import SocialTeaser    from '@/components/home/SocialTeaser'

const WA_BUILD = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20want%20to%20build%20something%20custom.'

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

// Product priority: Grillz → Watches → Chains → Rings → Bracelets → Pendants → Earrings → Custom
const GATEWAY_CARDS = [
  { label: 'GRILLZ',    sub: 'Top set, bottom set, full mouth. Custom fit.',          href: '/grillz',                cta: 'GET GRILLZ'       },
  { label: 'WATCHES',   sub: 'Iced bezels. Diamond-set direction.',                   href: '/watches',               cta: 'SEE WATCHES'      },
  { label: 'CHAINS',    sub: 'Cuban, rope, tennis — built to hit the neck.',          href: '/collections/chains',    cta: 'BUILD A CHAIN'    },
  { label: 'RINGS',     sub: 'Big face. Heavy statement.',                            href: '/collections/rings',     cta: 'BUILD A RING'     },
  { label: 'BRACELETS', sub: 'Wrist game with weight.',                               href: '/collections/bracelets', cta: 'BUILD A BRACELET' },
  { label: 'PENDANTS',  sub: 'Logo, name, photo, cross — built from the idea.',      href: '/collections/pendants',  cta: 'BUILD A PENDANT'  },
  { label: 'EARRINGS',  sub: 'Small piece. Real shine.',                              href: '/collections/earrings',  cta: 'BUILD EARRINGS'   },
  { label: 'CUSTOM',    sub: 'Logo, name, grillz, watch direction — send the idea.', href: '/custom',                cta: 'START CUSTOM', gold: true },
] as const

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
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.88) 38%, rgba(8,8,8,0.3) 65%, transparent 100%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.75) 18%, rgba(8,8,8,0.35) 42%, transparent 62%)', pointerEvents: 'none' }} />

        {/* Diagonal sweep ray */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', left: '-10%', width: '35%', height: '200%', background: 'linear-gradient(108deg, transparent 40%, rgba(201,168,76,0.055) 50%, transparent 60%)', pointerEvents: 'none', animation: 'hero-sweep 8s ease-in-out infinite', animationDelay: '2s' }} />

        {/* Sparkle hits */}
        {HERO_SPARKLES.map((s, i) => (
          <span key={i} aria-hidden="true" style={{ position: 'absolute', top: s.top, left: s.left, width: `${s.size}px`, height: `${s.size}px`, borderRadius: '50%', backgroundColor: s.ice ? 'rgba(208,238,255,0.95)' : 'rgba(255,248,220,0.9)', boxShadow: s.ice ? `0 0 ${s.size * 5}px ${s.size + 2}px rgba(208,238,255,0.45)` : `0 0 ${s.size * 5}px ${s.size + 2}px rgba(201,168,76,0.4)`, animation: 'sparkle-hit 3.8s ease-in-out infinite', animationDelay: s.delay, pointerEvents: 'none' }} />
        ))}

        {/* Text — bottom-left */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1440px', margin: '0 auto', width: '100%', padding: '0 1.5rem', paddingBottom: 'clamp(5.5rem, 12vw, 9rem)' }}>
          <div style={{ maxWidth: '600px' }}>

            <h1
              className="reveal reveal-d1"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4.2rem, 10.5vw, 9rem)', fontWeight: 700, lineHeight: 0.88, color: 'var(--color-brand-white)', letterSpacing: '-0.03em' }}
            >
              BUILT TO{' '}
              <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>HIT.</em>
            </h1>

            {/* BANG! — brand signature stamp, intentional and controlled */}
            <div className="reveal reveal-d2" style={{ marginTop: '0.75rem', marginBottom: '1.75rem' }}>
              <span className="hero-bang-stamp">BANG!</span>
            </div>

            {/* Hero CTAs — equal weight: product first, custom second */}
            <div className="reveal reveal-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
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

      {/* ─── 2. SHOP JEWELRY — product gateway ───────────────────────── */}
      <section id="shop-jewelry" className="pg-section" aria-label="Shop jewelry by category">
        <div className="pg-inner">
          <span className="section-eyebrow">SHOP BY PIECE</span>
          <h2 className="pg-heading">SHOP JEWELRY</h2>
          <p className="pg-subline">
            Grillz. Watches. Chains. Rings. Bracelets. Custom pieces built to stand out.
          </p>

          <div className="pg-grid">
            {GATEWAY_CARDS.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className={`pg-card${'gold' in card ? ' pg-card--custom' : ''}`}
                aria-label={card.label}
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
        </div>
      </section>

      {/* ─── 3. CUSTOM BUILT HERE — compressed fast lane ─────────────── */}
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
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>
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
            Send the idea first. No deposit. We quote before the build.
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
