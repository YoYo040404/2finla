// components/home/SocialTeaser.tsx
//
// Real links only. No fake thumbnails, follower counts, or post images.
// Icon-style action cards: Instagram / TikTok / WhatsApp.

import type { ReactNode } from 'react'

const IgIcon = () => (
  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const TtIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88
      2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32
      6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0
      0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
  </svg>
)

const WaIcon = () => (
  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
      -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39
      -1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298
      -.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669
      -1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52
      .074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149
      .198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118
      .571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198
      -.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L2 22l1.538-4.786A9.86
      9.86 0 0 1 2.111 12.1C2.114 6.535 6.657 2 12.06 2c2.614 0 5.073 1.016 6.919 2.862
      A9.715 9.715 0 0 1 22 11.772c-.003 5.414-4.548 9.016-9.949 9.013zm0-18.5C6.523
      3.285 3.614 6.21 3.614 12.063a8.55 8.55 0 0 0 1.403 4.697l-1.517 4.74 3.852-1.51
      a8.572 8.572 0 0 0 4.697 1.4c5.449 0 8.354-2.925 8.354-8.779A8.578 8.578 0 0 0
      17.905 6.582 8.578 8.578 0 0 0 12.051 3.285z" />
  </svg>
)

interface Social {
  platform: string
  handle:   string
  copy:     string
  href:     string
  icon:     ReactNode
  accent:   string
}

const SOCIALS: Social[] = [
  {
    platform: 'INSTAGRAM',
    handle:   '@2tjewelers',
    copy:     'Follow the shine.',
    href:     'https://www.instagram.com/2tjewelers/',
    icon:     <IgIcon />,
    accent:   '#c9a84c',
  },
  {
    platform: 'TIKTOK',
    handle:   '@2tjewelers',
    copy:     "See what's dropping.",
    href:     'https://www.tiktok.com/@2tjewelers',
    icon:     <TtIcon />,
    accent:   '#9fa8b3',
  },
  {
    platform: 'WHATSAPP',
    handle:   'HIT US UP',
    copy:     "Text us when you're ready to build.",
    href:     'https://wa.me/14124524343',
    icon:     <WaIcon />,
    accent:   '#25D366',
  },
]

export default function SocialTeaser() {
  return (
    <section
      aria-label="Follow 2T Jewelers"
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderTop:       '1px solid var(--color-brand-border)',
        borderBottom:    '1px solid var(--color-brand-border)',
        padding:         '4rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <span
          className="section-eyebrow"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          STAY CONNECTED
        </span>
        <h2
          style={{
            fontFamily:    'var(--font-body)',
            fontSize:      'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight:    800,
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            color:         'var(--color-brand-white)',
            marginBottom:  '2.5rem',
            lineHeight:    0.95,
          }}
        >
          TAP IN WITH 2T.
        </h2>

        <div className="social-teaser-grid">
          {SOCIALS.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{ borderColor: 'var(--color-brand-border)' }}
              aria-label={`${social.platform}: ${social.handle}`}
            >
              <div
                className="social-card-icon"
                style={{ color: social.accent, borderColor: social.accent }}
              >
                {social.icon}
              </div>
              <div className="social-card-content">
                <p className="social-card-platform" style={{ color: social.accent }}>
                  {social.platform}
                </p>
                <p className="social-card-handle">{social.handle}</p>
                <p className="social-card-copy">{social.copy}</p>
              </div>
              <span className="social-card-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
