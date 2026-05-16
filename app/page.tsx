import Link from 'next/link'
import { homepageCategories } from '@/data/nav'

// Sparkles clustered around the right-side jewelry art
const HERO_SPARKLES = [
  { top: '24%', left: '66%', delay: '0s',    size: 5, ice: true  },
  { top: '40%', left: '80%', delay: '1.1s',  size: 6, ice: false },
  { top: '17%', left: '76%', delay: '2.4s',  size: 4, ice: true  },
  { top: '60%', left: '72%', delay: '0.7s',  size: 5, ice: false },
  { top: '32%', left: '90%', delay: '1.8s',  size: 4, ice: true  },
  { top: '72%', left: '85%', delay: '3.0s',  size: 3, ice: false },
] as const

const CUSTOM_SPARKLES = [
  { top: '18%', left: '15%', delay: '0.4s', size: 3, ice: true  },
  { top: '72%', left: '82%', delay: '1.6s', size: 4, ice: false },
  { top: '44%', left: '92%', delay: '2.9s', size: 3, ice: true  },
  { top: '80%', left: '10%', delay: '0.8s', size: 3, ice: false },
] as const

// Larger, stronger SVG silhouettes — category identity without placeholder text
const CATEGORY_SVGS: Record<string, React.ReactNode> = {
  Chains: (
    <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
      <ellipse cx="22" cy="24" rx="15" ry="9" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
      <ellipse cx="58" cy="32" rx="15" ry="9" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
      <line x1="35" y1="28" x2="45" y2="28" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="35" cy="28" r="2.5" fill="rgba(208,238,255,0.6)"/>
      <circle cx="45" cy="28" r="2.5" fill="rgba(208,238,255,0.6)"/>
    </svg>
  ),
  Pendants: (
    <svg width="58" height="78" viewBox="0 0 58 78" fill="none">
      <rect x="24" y="4" width="10" height="13" rx="5" stroke="rgba(208,238,255,0.5)" strokeWidth="1.5"/>
      <path d="M4 36 L29 16 L54 36 L29 65 Z" stroke="rgba(208,238,255,0.6)" strokeWidth="1.5"/>
      <path d="M4 36 L29 46 L54 36" stroke="rgba(208,238,255,0.28)" strokeWidth="0.75"/>
      <circle cx="29" cy="38" r="5" fill="rgba(208,238,255,0.65)"/>
    </svg>
  ),
  Bracelets: (
    <svg width="70" height="60" viewBox="0 0 70 60" fill="none">
      <path d="M8 52 A31 31 0 1 1 62 52" stroke="rgba(201,168,76,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="8"  cy="52" r="4.5" fill="rgba(208,238,255,0.65)"/>
      <circle cx="62" cy="52" r="4.5" fill="rgba(208,238,255,0.65)"/>
      <circle cx="35" cy="4"  r="3.5" fill="rgba(201,168,76,0.65)"/>
    </svg>
  ),
  Rings: (
    <svg width="60" height="68" viewBox="0 0 60 68" fill="none">
      <circle cx="30" cy="44" r="20" stroke="rgba(208,238,255,0.55)" strokeWidth="2.5"/>
      <path d="M22 24 L30 14 L38 24" stroke="rgba(208,238,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="30" cy="14" r="4" fill="rgba(208,238,255,0.7)"/>
    </svg>
  ),
  Earrings: (
    <svg width="60" height="68" viewBox="0 0 60 68" fill="none">
      <line x1="16" y1="5"  x2="16" y2="18" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="16" cy="38" rx="9" ry="16" stroke="rgba(208,238,255,0.55)" strokeWidth="1.5"/>
      <circle  cx="16" cy="38" r="3.5" fill="rgba(208,238,255,0.55)"/>
      <line x1="44" y1="5"  x2="44" y2="18" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="44" cy="38" rx="9" ry="16" stroke="rgba(208,238,255,0.55)" strokeWidth="1.5"/>
      <circle  cx="44" cy="38" r="3.5" fill="rgba(208,238,255,0.55)"/>
    </svg>
  ),
  Custom: (
    <svg width="64" height="80" viewBox="0 0 64 80" fill="none">
      <rect x="27" y="4" width="10" height="14" rx="5" stroke="rgba(201,168,76,0.65)" strokeWidth="1.5"/>
      <path d="M4 38 L32 16 L60 38 L32 68 Z" stroke="rgba(201,168,76,0.75)" strokeWidth="1.5"/>
      <path d="M4 38 L32 50 L60 38" stroke="rgba(201,168,76,0.38)" strokeWidth="1"/>
      <line x1="32" y1="16" x2="32" y2="50" stroke="rgba(201,168,76,0.22)" strokeWidth="1"/>
      <circle cx="32" cy="43" r="6"   fill="rgba(201,168,76,0.8)"/>
      <circle cx="32" cy="43" r="3.5" fill="rgba(255,248,220,0.95)"/>
    </svg>
  ),
}

// Per-category atmospheric glow — no visible labels, visual identity only
const CARD_GLOWS: Record<string, { center: string; outer: string }> = {
  Chains:    { center: 'rgba(201,168,76,0.12)',  outer: 'rgba(201,168,76,0.04)'  },
  Pendants:  { center: 'rgba(208,238,255,0.1)',  outer: 'rgba(208,238,255,0.03)' },
  Bracelets: { center: 'rgba(201,168,76,0.1)',   outer: 'rgba(201,168,76,0.03)'  },
  Rings:     { center: 'rgba(208,238,255,0.1)',  outer: 'rgba(208,238,255,0.03)' },
  Earrings:  { center: 'rgba(208,238,255,0.08)', outer: 'rgba(208,238,255,0.02)' },
  Custom:    { center: 'rgba(201,168,76,0.18)',  outer: 'rgba(201,168,76,0.06)'  },
}

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
        fontFamily: 'var(--font-display)',
        fontSize:   'clamp(1.6rem, 3.5vw, 2.5rem)',
        fontWeight: 400,
        color:      'var(--color-brand-white)',
        lineHeight: 1.08,
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
        {/* Temporary demo video — replace with real 2T store footage when recorded */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position:  'absolute',
            inset:     0,
            width:     '100%',
            height:    '100%',
            objectFit: 'cover',
            zIndex:    0,
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
            background:    'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.55) 28%, transparent 55%)',
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
            paddingBottom: 'clamp(3.5rem, 10vw, 6rem)',
          }}
        >
          <div style={{ maxWidth: '560px' }}>
            <p
              className="reveal"
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.68rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-gold)',
                marginBottom:  '1.25rem',
              }}
            >
              2T Jewelers — Custom-First
            </p>

            <h1
              className="reveal reveal-d1"
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(4rem, 10.5vw, 8.5rem)',
                fontWeight:    300,
                lineHeight:    0.9,
                color:         'var(--color-brand-white)',
                letterSpacing: '-0.03em',
              }}
            >
              BUILD THE
              <br />
              <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>piece.</em>
            </h1>

            <p
              className="reveal reveal-d2"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '0.9375rem',
                color:      'var(--color-brand-muted)',
                lineHeight: 1.6,
                marginTop:  '1.5rem',
                maxWidth:   '40ch',
              }}
            >
              Chains, pendants, grillz, diamond watches, custom work.
              Real materials. Ask before you buy.
            </p>

            <div
              className="reveal reveal-d3"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2.25rem' }}
            >
              <Link
                href="/custom"
                className="btn-primary"
                style={{ fontSize: '0.875rem', letterSpacing: '0.08em', padding: '0.875rem 1.75rem' }}
              >
                START CUSTOM →
              </Link>
              <Link href="/collections" className="btn-outline-dim">
                Shop All
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            <Eyebrow>Custom Work</Eyebrow>
            <h2
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight:   300,
                color:        'var(--color-brand-white)',
                lineHeight:   1.0,
                marginTop:    '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              Have an idea?{' '}
              <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>
                Let&apos;s build it.
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
              Logo, sketch, photo, or just a name — bring your vision.
              We&apos;ll guide the next step before quote or production.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Link
                href="/custom"
                className="btn-primary"
                style={{ textAlign: 'center', padding: '0.9rem 2rem', fontSize: '0.875rem', letterSpacing: '0.07em' }}
              >
                START YOUR CUSTOM PIECE →
              </Link>
              <p className="trust-signal">No deposit. No rush. We quote first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. TRUST STRIP ───────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-surface)',
          borderTop:       '1px solid var(--color-brand-border)',
          borderBottom:    '1px solid var(--color-brand-border)',
        }}
        aria-label="Why 2T Jewelers"
      >
        <div
          style={{
            maxWidth: '1440px',
            margin:   '0 auto',
            padding:  '1.25rem 1.5rem',
            display:  'grid',
            gap:      '1rem',
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {[
            { label: 'Real Materials',     sub: '925 Silver · 10K · 14K · Moissanite' },
            { label: 'Custom-First',       sub: 'Upload your idea. We build it.' },
            { label: 'Ask Before You Buy', sub: 'Direct inquiry. No pressure.' },
            { label: 'Built in Pittsburgh', sub: 'Family-owned. Nearly 30 years. Own manufacturing.' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center', padding: '0.5rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8125rem', color: 'var(--color-brand-white)' }}>
                {item.label}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--color-brand-muted)', marginTop: '3px' }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 4. CATEGORY PILLS ────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor:         'var(--color-brand-charcoal)',
          borderBottom:            '1px solid var(--color-brand-border)',
          overflowX:               'auto',
          WebkitOverflowScrolling: 'touch' as const,
        }}
        aria-label="Browse categories"
      >
        <div
          style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '0.5rem',
            padding:    '0.875rem 1.5rem',
            minWidth:   'max-content',
          }}
        >
          {homepageCategories.map((cat, i) => (
            <Link
              key={cat}
              href={
                cat === 'All'    ? '/collections' :
                cat === 'Custom' ? '/custom' :
                `/collections/${cat.toLowerCase()}`
              }
              className={`category-pill ${
                i === 0          ? 'category-pill-active' :
                cat === 'Custom' ? 'category-pill-gold'   :
                ''
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* ─── 5. COLLECTION GRID ───────────────────────────────────────── */}
      <Section bg="var(--color-brand-black)">
        <Eyebrow>Collections</Eyebrow>
        <SectionHeading style={{ marginBottom: '2.5rem', marginTop: '0.5rem' }}>
          Shop by Category
        </SectionHeading>

        <div
          style={{ display: 'grid', gap: '0.75rem' }}
          className="grid-cols-2 md:grid-cols-3"
        >
          {[
            { name: 'Chains',    desc: 'Cuban · Rope · Tennis · Figaro',          href: '/collections/chains'    },
            { name: 'Pendants',  desc: 'Cross · Name · Photo · Iced',             href: '/collections/pendants'  },
            { name: 'Bracelets', desc: 'Cuban · Tennis · Rope',                   href: '/collections/bracelets' },
            { name: 'Rings',     desc: 'Iced · Band · Custom',                    href: '/collections/rings'     },
            { name: 'Earrings',  desc: 'Studs · Hoops · Drops',                  href: '/collections/earrings'  },
            { name: 'Custom',    desc: 'Your idea · Your materials · Your piece', href: '/custom'                },
          ].map((cat) => {
            const glow     = CARD_GLOWS[cat.name] ?? CARD_GLOWS.Chains
            const isCustom = cat.name === 'Custom'
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className="collection-card card-shine card-glow"
                style={{
                  display:        'flex',
                  flexDirection:  'column',
                  justifyContent: 'flex-end',
                  aspectRatio:    '4/5',
                  padding:        '1.25rem',
                  ...(isCustom ? { borderColor: 'var(--color-brand-gold-dim)' } : {}),
                }}
              >
                {/* Category-specific atmospheric glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position:      'absolute',
                    inset:         0,
                    background:    `radial-gradient(ellipse 70% 60% at 50% 35%, ${glow.center} 0%, ${glow.outer} 50%, transparent 75%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/*
                  CATEGORY PHOTO SLOT — {cat.name}
                  When ready, replace the silhouette below with:
                    <Image src={`/assets/categories/${cat.name.toLowerCase()}.jpg`} fill style={{ objectFit:'cover', opacity:0.75 }} alt={cat.name} />
                */}
                {/* Jewelry silhouette — centered, intentional CSS art */}
                <div
                  aria-hidden="true"
                  style={{
                    position:  'absolute',
                    top:       '50%',
                    left:      '50%',
                    transform: 'translate(-50%, -58%)',
                  }}
                >
                  {CATEGORY_SVGS[cat.name]}
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize:   '1.3rem',
                      color:      isCustom ? 'var(--color-brand-gold)' : 'var(--color-brand-white)',
                      fontWeight: 400,
                    }}
                  >
                    {cat.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--color-brand-muted)', marginTop: '0.3rem' }}>
                    {cat.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </Section>

      {/* ─── 6. INQUIRY LANES ─────────────────────────────────────────── */}
      <Section bg="var(--color-brand-charcoal)">
        <Eyebrow>Inquiry Only</Eyebrow>
        <SectionHeading style={{ marginBottom: '2.5rem', marginTop: '0.5rem' }}>
          Ask before you buy.
        </SectionHeading>

        <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-3">
          {[
            { title: 'Diamond Watches', sub: 'Iced, custom, high-end. Ask about availability.',          href: '/watches', cta: 'Ask About Watches'   },
            { title: 'Grillz',          sub: 'Custom fit. Your material. Your design. Inquire to start.', href: '/grillz',  cta: 'Start Grillz Inquiry' },
            { title: 'Custom Jewelry',  sub: 'Logo, sketch, idea. We guide the next step.',              href: '/custom',  cta: 'Start Custom Piece'   },
          ].map((lane) => (
            <div
              key={lane.title}
              style={{
                display:         'flex',
                flexDirection:   'column',
                gap:             '1.5rem',
                padding:         '1.75rem',
                backgroundColor: 'var(--color-brand-surface)',
                border:          '1px solid var(--color-brand-border)',
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 400, color: 'var(--color-brand-white)' }}>
                  {lane.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-brand-muted)', lineHeight: 1.6, marginTop: '0.5rem' }}>
                  {lane.sub}
                </p>
              </div>
              <Link href={lane.href} className="inquiry-link self-start">
                {lane.cta} →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 7. MATERIAL PREVIEW ──────────────────────────────────────── */}
      <Section bg="var(--color-brand-black)" py="2.5rem">
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brand-muted)', marginBottom: '1rem' }}>
          Material Options
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['925 Silver','Gold-Plated','Vermeil','10K Gold','14K Gold','Moissanite','Lab Diamond','Natural Diamond*','CZ'].map((mat) => (
            <span key={mat} className="material-chip">{mat}</span>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--color-brand-subtle)', marginTop: '0.875rem' }}>
          * Natural diamond availability verified per product. Ask before purchase.
        </p>
      </Section>
    </>
  )
}
