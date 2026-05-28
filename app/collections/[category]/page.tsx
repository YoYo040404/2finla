import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type CategoryData = {
  title:       string
  headline:    string
  body:        string
  note:        string
  glow:        string
  svg:         React.ReactNode
  chips?:      string[]
  waMessage:   string
  primaryCta:  string
}

const CATEGORY_DATA: Record<string, CategoryData> = {
  chains: {
    title:      'Chains',
    headline:   'Rope, Cuban, Franco, Tennis.',
    body:       'Foundation of every neck. Ask about available styles or start a custom link build.',
    note:       'Ask about available styles before ordering.',
    glow:       'rgba(201,168,76,0.08)',
    waMessage:  "Hey 2T — I'm looking for a chain. I have a style and direction in mind.",
    primaryCta: 'TEXT 2T ABOUT CHAINS →',
    chips:      ['Cuban', 'Rope', 'Tennis', 'Franco', 'Iced-Out', 'Not Sure Yet'],
    svg: (
      <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
        <ellipse cx="22" cy="24" rx="15" ry="9" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
        <ellipse cx="58" cy="32" rx="15" ry="9" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
        <line x1="35" y1="28" x2="45" y2="28" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="35" cy="28" r="2.5" fill="rgba(208,238,255,0.6)"/>
        <circle cx="45" cy="28" r="2.5" fill="rgba(208,238,255,0.6)"/>
      </svg>
    ),
  },
  pendants: {
    title:      'Pendants',
    headline:   'Your identity, hanging.',
    body:       'Iced, engraved, or fully custom. Have a logo or sketch? Start the request and we\'ll guide the visual direction before quote or production.',
    note:       'Have a logo, photo, or reference? Attach it when you start the request.',
    glow:       'rgba(208,238,255,0.07)',
    waMessage:  "Hey 2T — I'm looking for a pendant. I have a logo, photo, or name idea.",
    primaryCta: 'TEXT 2T ABOUT PENDANTS →',
    chips:      ['Logo', 'Photo', 'Name', 'Number', 'Iced-Out', 'Custom Shape', 'Not Sure Yet'],
    svg: (
      <svg width="58" height="78" viewBox="0 0 58 78" fill="none">
        <rect x="24" y="4" width="10" height="13" rx="5" stroke="rgba(208,238,255,0.5)" strokeWidth="1.5"/>
        <path d="M4 36 L29 16 L54 36 L29 65 Z" stroke="rgba(208,238,255,0.6)" strokeWidth="1.5"/>
        <path d="M4 36 L29 46 L54 36" stroke="rgba(208,238,255,0.28)" strokeWidth="0.75"/>
        <circle cx="29" cy="38" r="5" fill="rgba(208,238,255,0.65)"/>
      </svg>
    ),
  },
  bracelets: {
    title:      'Bracelets',
    headline:   'Wrist weight that hits.',
    body:       'Cuban link, tennis, iced bangle. Ask what\'s available or start a custom piece — budget range helps guide the conversation.',
    note:       'No deposit. No rush. We quote first.',
    glow:       'rgba(201,168,76,0.07)',
    waMessage:  "Hey 2T — I'm looking to ask about bracelets.",
    primaryCta: 'TEXT 2T ABOUT BRACELETS →',
    chips:      ['Cuban Link', 'Tennis', 'Bangle', 'Iced-Out', 'Gold Direction', 'Not Sure Yet'],
    svg: (
      <svg width="70" height="60" viewBox="0 0 70 60" fill="none">
        <path d="M8 52 A31 31 0 1 1 62 52" stroke="rgba(201,168,76,0.55)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="8"  cy="52" r="4.5" fill="rgba(208,238,255,0.65)"/>
        <circle cx="62" cy="52" r="4.5" fill="rgba(208,238,255,0.65)"/>
        <circle cx="35" cy="4"  r="3.5" fill="rgba(201,168,76,0.65)"/>
      </svg>
    ),
  },
  rings: {
    title:      'Rings',
    headline:   'Pinky, statement, signet.',
    body:       'Stack or solo. Custom sizing and stone work available — ask first and we\'ll guide what\'s possible before anything is quoted or produced.',
    note:       'Ask before you buy.',
    glow:       'rgba(208,238,255,0.07)',
    waMessage:  "Hey 2T — I'm looking to ask about rings.",
    primaryCta: 'TEXT 2T ABOUT RINGS →',
    chips:      ['Pinky Ring', 'Statement Ring', 'Signet', 'Iced-Out', 'Gold Direction', 'Not Sure Yet'],
    svg: (
      <svg width="60" height="68" viewBox="0 0 60 68" fill="none">
        <circle cx="30" cy="44" r="20" stroke="rgba(208,238,255,0.55)" strokeWidth="2.5"/>
        <path d="M22 24 L30 14 L38 24" stroke="rgba(208,238,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="14" r="4" fill="rgba(208,238,255,0.7)"/>
      </svg>
    ),
  },
  earrings: {
    title:      'Earrings',
    headline:   'Studs, hoops, drops.',
    body:       'Iced or brushed. Have a reference image or style direction? Text us and we\'ll talk through what\'s possible.',
    note:       'Lease-to-own options may be available through Acima.',
    glow:       'rgba(208,238,255,0.06)',
    waMessage:  "Hey 2T — I'm looking to ask about earrings.",
    primaryCta: 'TEXT 2T ABOUT EARRINGS →',
    chips:      ['Studs', 'Hoops', 'Drop Earrings', 'Iced-Out', 'Gold Direction', 'Not Sure Yet'],
    svg: (
      <svg width="60" height="68" viewBox="0 0 60 68" fill="none">
        <line x1="16" y1="5"  x2="16" y2="18" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="16" cy="38" rx="9" ry="16" stroke="rgba(208,238,255,0.55)" strokeWidth="1.5"/>
        <circle  cx="16" cy="38" r="3.5" fill="rgba(208,238,255,0.55)"/>
        <line x1="44" y1="5"  x2="44" y2="18" stroke="rgba(208,238,255,0.5)"  strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="44" cy="38" rx="9" ry="16" stroke="rgba(208,238,255,0.55)" strokeWidth="1.5"/>
        <circle  cx="44" cy="38" r="3.5" fill="rgba(208,238,255,0.55)"/>
      </svg>
    ),
  },
  'best-sellers': {
    title:      'Best Sellers',
    headline:   'Ask what\'s moving.',
    body:       'Chains, pendants, grillz, watches — text 2T to ask what people are getting and what\'s available now. Product details confirmed per piece.',
    note:       'Ask about current availability. Details confirmed per piece.',
    glow:       'rgba(201,168,76,0.10)',
    waMessage:  "Hey 2T — I want to ask what pieces are popular right now.",
    primaryCta: 'TEXT 2T WHAT\'S MOVING →',
    chips:      ['Chains', 'Pendants', 'Grillz', 'Watches', 'Custom Pieces'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <polygon points="32,4 38,24 60,24 43,37 49,58 32,45 15,58 21,37 4,24 26,24" stroke="rgba(201,168,76,0.65)" strokeWidth="1.5" fill="none"/>
        <circle cx="32" cy="32" r="6" fill="rgba(201,168,76,0.5)"/>
      </svg>
    ),
  },
  'new-arrivals': {
    title:      'New Arrivals',
    headline:   'Ask what just came in.',
    body:       'New pieces and directions as they come in. Text 2T to ask what\'s available and what\'s coming next. Product details confirmed per piece.',
    note:       'Availability changes. Text us to confirm.',
    glow:       'rgba(208,238,255,0.07)',
    waMessage:  "Hey 2T — I want to ask what's new or just came in.",
    primaryCta: 'TEXT 2T WHAT\'S NEW →',
    chips:      ['Chains', 'Pendants', 'Grillz', 'Watches', 'Custom Direction'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="24" stroke="rgba(208,238,255,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
        <line x1="32" y1="10" x2="32" y2="54" stroke="rgba(208,238,255,0.25)" strokeWidth="1"/>
        <line x1="10" y1="32" x2="54" y2="32" stroke="rgba(208,238,255,0.25)" strokeWidth="1"/>
        <circle cx="32" cy="32" r="5" fill="rgba(208,238,255,0.7)"/>
        <circle cx="32" cy="10" r="3" fill="rgba(201,168,76,0.8)"/>
      </svg>
    ),
  },
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_DATA).map((category) => ({ category }))
}

type Props = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const data = CATEGORY_DATA[category]
  if (!data) return {}
  return {
    title:       `2T Jewelers | ${data.title} — Pittsburgh, PA`,
    description: `Shop ${data.title.toLowerCase()} at 2T Jewelers in Pittsburgh, PA. Real store. Over 30 years. Ask about availability and material details. Text to ask.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const data = CATEGORY_DATA[category]
  if (!data) notFound()

  const waEncoded = encodeURIComponent(data.waMessage)
  const waHref    = `https://wa.me/14124524343?text=${waEncoded}`

  return (
    <main
      style={{
        background:  'var(--color-brand-black)',
        minHeight:   '100vh',
        paddingTop:  '80px',
      }}
    >

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      'clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 3vw, 2.5rem) clamp(2.5rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--color-brand-border)',
          position:     'relative',
          overflow:     'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            inset:         0,
            background:    `radial-gradient(ellipse 55% 60% at 20% 50%, ${data.glow} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display:    'flex',
              gap:        '8px',
              alignItems: 'center',
              marginBottom: '2rem',
              fontFamily:   'var(--font-body)',
              fontSize:     '0.75rem',
              color:        'var(--color-brand-subtle)',
              letterSpacing:'0.04em',
            }}
          >
            <Link href="/collections" className="nav-link-footer" style={{ fontSize: '0.75rem' }}>
              Collections
            </Link>
            <span style={{ color: 'var(--color-brand-border)' }}>›</span>
            <span style={{ color: 'var(--color-brand-silver)' }}>{data.title}</span>
          </nav>

          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* SVG mark */}
            <div
              style={{
                flexShrink:     0,
                width:          '96px',
                height:         '96px',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                border:         '1px solid var(--color-brand-border)',
                background:     'var(--color-brand-charcoal)',
              }}
            >
              {data.svg}
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h1
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(2.4rem, 6vw, 4.8rem)',
                  fontWeight:    400,
                  lineHeight:    0.92,
                  letterSpacing: '-0.02em',
                  color:         'var(--color-brand-white)',
                  marginBottom:  '1rem',
                }}
              >
                {data.title}
              </h1>
              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontStyle:    'italic',
                  color:        'var(--color-brand-gold)',
                  marginBottom: '1rem',
                  lineHeight:   1.2,
                }}
              >
                {data.headline}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.9375rem',
                  color:      'var(--color-brand-silver)',
                  lineHeight: 1.65,
                  maxWidth:   '52ch',
                }}
              >
                {data.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direction Chips ─────────────────────────────────────── */}
      {data.chips && data.chips.length > 0 && (
        <section
          style={{
            padding:      'clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 3vw, 2.5rem)',
            borderBottom: '1px solid var(--color-brand-border)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-eyebrow" style={{ marginBottom: '0.75rem' }}>PICK YOUR DIRECTION</span>
            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight:   400,
                color:        'var(--color-brand-white)',
                lineHeight:   1.1,
                marginBottom: '1.5rem',
              }}
            >
              What are you going for?
            </p>
            <div className="chip-row" style={{ marginBottom: '1rem' }}>
              {data.chips.map((chip) => (
                <span key={chip} className="direction-chip">
                  {chip}
                </span>
              ))}
            </div>
            <p
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.8rem',
                color:         'var(--color-brand-subtle)',
                letterSpacing: '0.02em',
              }}
            >
              Tell us the direction when you text. We guide from there.
            </p>
          </div>
        </section>
      )}

      {/* ── CTA section ─────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 4.5rem) clamp(1.25rem, 3vw, 2.5rem)',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            style={{
              padding:    'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
              border:     '1px solid rgba(201,168,76,0.25)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.01) 100%)',
              position:   'relative',
              overflow:   'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position:   'absolute',
                inset:      0,
                background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
              }}
            />

            <span className="section-eyebrow" style={{ marginBottom: '0.75rem', position: 'relative' }}>
              ASK BEFORE YOU BUY
            </span>

            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(1.5rem, 3.5vw, 2.4rem)',
                fontWeight:   400,
                color:        'var(--color-brand-white)',
                lineHeight:   1.0,
                marginBottom: '0.75rem',
                position:     'relative',
              }}
            >
              Text 2T about {data.title.toLowerCase()}.
            </p>

            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '0.875rem',
                color:        'var(--color-brand-muted)',
                lineHeight:   1.65,
                maxWidth:     '46ch',
                marginBottom: '0.5rem',
                position:     'relative',
              }}
            >
              {data.note}
            </p>

            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-subtle)',
                marginBottom:  '1.75rem',
                position:      'relative',
              }}
            >
              Product details confirmed per piece.
            </p>

            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', position: 'relative' }}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {data.primaryCta}
              </a>
              <Link href="/custom" className="btn-outline-gold">
                BUILD CUSTOM →
              </Link>
            </div>
          </div>

          {/* Back link */}
          <div style={{ marginTop: '2.5rem' }}>
            <Link
              href="/collections"
              className="nav-link-footer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', letterSpacing: '0.03em' }}
            >
              ← All Collections
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
