import Link from 'next/link'
import { notFound } from 'next/navigation'

type CategoryData = {
  title: string
  headline: string
  body: string
  note: string
  glow: string
  svg: React.ReactNode
}

const CATEGORY_DATA: Record<string, CategoryData> = {
  chains: {
    title: 'Chains',
    headline: 'Rope, Cuban, Franco, Tennis.',
    body: 'Foundation of every neck. Ask about available styles or start a custom link build.',
    note: 'Ask about available styles before ordering.',
    glow: 'rgba(201,168,76,0.08)',
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
    title: 'Pendants',
    headline: 'Your identity, hanging.',
    body: 'Iced, engraved, or fully custom. Have a logo or sketch? Start the request and we\'ll guide the visual direction before quote or production.',
    note: 'Have a logo, photo, or reference? Attach it when you start the request.',
    glow: 'rgba(208,238,255,0.07)',
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
    title: 'Bracelets',
    headline: 'Wrist stacks that hit.',
    body: 'Tennis, Cuban link, iced bangle. Ask what\'s available or start a custom piece — budget range helps guide the conversation.',
    note: 'No deposit. No rush. We quote first.',
    glow: 'rgba(201,168,76,0.07)',
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
    title: 'Rings',
    headline: 'Pinky, statement, signet.',
    body: 'Stack or solo. Custom sizing and stone work available — ask first and we\'ll guide what\'s possible before anything is quoted or produced.',
    note: 'Ask before you buy.',
    glow: 'rgba(208,238,255,0.07)',
    svg: (
      <svg width="60" height="68" viewBox="0 0 60 68" fill="none">
        <circle cx="30" cy="44" r="20" stroke="rgba(208,238,255,0.55)" strokeWidth="2.5"/>
        <path d="M22 24 L30 14 L38 24" stroke="rgba(208,238,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="14" r="4" fill="rgba(208,238,255,0.7)"/>
      </svg>
    ),
  },
  earrings: {
    title: 'Earrings',
    headline: 'Studs, hoops, drops.',
    body: 'Iced or brushed. Have a reference image or style direction? Text us and we\'ll talk through what\'s possible.',
    note: 'Lease-to-own options may be available through Acima.',
    glow: 'rgba(208,238,255,0.06)',
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
    title: 'Best Sellers',
    headline: 'Pieces people ask for first.',
    body: 'Chains, pendants, grillz, watches, and iced-out looks built to get noticed. Start a custom request or text us to ask what\'s available.',
    note: 'Ask about current availability before ordering.',
    glow: 'rgba(201,168,76,0.10)',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <polygon points="32,4 38,24 60,24 43,37 49,58 32,45 15,58 21,37 4,24 26,24" stroke="rgba(201,168,76,0.65)" strokeWidth="1.5" fill="none"/>
        <circle cx="32" cy="32" r="6" fill="rgba(201,168,76,0.5)"/>
      </svg>
    ),
  },
  'new-arrivals': {
    title: 'New Arrivals',
    headline: 'Fresh shine. New directions.',
    body: 'Check the latest styles, then text us to ask what\'s available or start a custom piece based on what you see.',
    note: 'Styles and availability change. Text us to confirm.',
    glow: 'rgba(208,238,255,0.07)',
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

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const data = CATEGORY_DATA[category]
  if (!data) notFound()

  const waText = encodeURIComponent(`Hey 2T — I want to ask about ${data.title}.`)

  return (
    <main style={{ background: '#080808', minHeight: '100vh', paddingTop: '80px' }}>

      {/* Hero block */}
      <section style={{
        padding: '72px 24px 64px',
        borderBottom: '1px solid #252525',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 55% 60% at 20% 50%, ${data.glow} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}/>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginBottom: '40px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: '#686868',
            letterSpacing: '0.04em',
          }}>
            <Link href="/collections" className="nav-link-footer" style={{ fontSize: '0.75rem' }}>
              Collections
            </Link>
            <span style={{ color: '#363636' }}>›</span>
            <span style={{ color: '#9fa8b3' }}>{data.title}</span>
          </nav>

          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* SVG */}
            <div style={{
              flexShrink: 0,
              width: '96px', height: '96px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid #252525',
              background: '#141414',
            }}>
              {data.svg}
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 6vw, 4.8rem)',
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: '#f0f0f0',
                marginBottom: '16px',
              }}>
                {data.title}
              </h1>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontStyle: 'italic',
                color: '#c9a84c',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}>
                {data.headline}
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: '#9fa8b3',
                lineHeight: 1.65,
                maxWidth: '540px',
              }}>
                {data.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section style={{
        padding: '56px 24px 72px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <div style={{
          background: '#141414',
          border: '1px solid #252525',
          padding: '40px 36px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}/>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#686868',
            marginBottom: '12px',
          }}>
            Next Step
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            fontWeight: 400,
            color: '#f0f0f0',
            marginBottom: '8px',
            lineHeight: 1.15,
          }}>
            Start a request or ask a question.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: '#686868',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}>
            {data.note}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/custom" className="btn-primary">
              Start Custom →
            </Link>
            <a
              href={`https://wa.me/14124524343?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              Text Us on WhatsApp
            </a>
          </div>
        </div>

        {/* Back link */}
        <div style={{ marginTop: '40px' }}>
          <Link
            href="/collections"
            className="nav-link-footer"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', letterSpacing: '0.03em' }}
          >
            ← All Collections
          </Link>
        </div>
      </section>

    </main>
  )
}
