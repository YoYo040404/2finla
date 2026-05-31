// components/home/ProofContactZone.tsx
//
// Left: stat-dominant proof ledger (25 YEARS / 332 FIFTH AVE. / DOWNTOWN PITTSBURGH).
// Right: BUILT IN PITTSBURGH. headline → body → social channel rows (TikTok/IG/WA).
// No standalone CTA button — MobileCtaBar handles persistent contact access.
// Tenure wording: "25 years" confirmed 2026-05-31.

import type { ReactNode } from 'react'

const CHANNELS = [
  {
    platform:  'TIKTOK',
    copy:      'Watch the build.',
    handle:    '@2tjewelers',
    href:      'https://www.tiktok.com/@2tjewelers',
    wa:        false,
    label:     'TikTok: @2tjewelers',
    action:    'FOLLOW →',
    iconColor: '#ffffff',
  },
  {
    platform:  'INSTAGRAM',
    copy:      'Real pieces. Real shots.',
    handle:    '@2tjewelers',
    href:      'https://www.instagram.com/2tjewelers/',
    wa:        false,
    label:     'Instagram: @2tjewelers',
    action:    'FOLLOW →',
    iconColor: '#E1306C',
  },
  {
    platform:  'WHATSAPP',
    copy:      'Hit us up. Ask before you buy.',
    handle:    'TEXT 2T',
    href:      'https://wa.me/14124524343',
    wa:        true,
    label:     'WhatsApp: Text 2T',
    action:    'TEXT NOW →',
    iconColor: '#25D366',
  },
] as const

/* ── Platform icons ──────────────────────────────────────────────────────── */

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.95a8.16 8.16 0 004.77 1.52V8.03a4.85 4.85 0 01-1-.34z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const PLATFORM_ICONS: Record<string, ReactNode> = {
  TIKTOK:    <TikTokIcon />,
  INSTAGRAM: <InstagramIcon />,
  WHATSAPP:  <WhatsAppIcon />,
}

/* ── Component ──────────────────────────────────────────────────────────── */

export default function ProofContactZone() {
  return (
    <section
      id="story"
      aria-label="About 2T Jewelers — store, contact, and social"
      className="pb-proof-zone"
    >
      <div className="pb-proof-inner">

        {/* ── Left: stat-dominant proof ledger ─────────────────────── */}
        <div className="pb-proof-left">
          <div style={{
            paddingLeft: '1.5rem',
            borderLeft: '1px solid rgba(201,164,73,0.28)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}>
            {/* 25 YEARS — large, dominant */}
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 8vw, 6rem)',
                fontWeight: 400,
                lineHeight: 0.86,
                color: 'var(--color-brand-white)',
                margin: 0,
                letterSpacing: '0.01em',
              }}>
                25
              </p>
              <p className="mi-mono mi-faint" style={{ margin: '6px 0 0', fontSize: '0.6rem', letterSpacing: '0.18em' }}>
                YEARS
              </p>
            </div>

            {/* 332 FIFTH AVE. — gold, address weight */}
            <div style={{ borderTop: '1px solid rgba(201,164,73,0.16)', paddingTop: '1.25rem' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight: 400,
                lineHeight: 0.92,
                color: 'var(--color-brand-gold)',
                margin: '0 0 5px',
                letterSpacing: '0.025em',
              }}>
                332 FIFTH AVE.
              </p>
              <p className="mi-mono mi-faint" style={{ margin: 0, fontSize: '0.58rem', letterSpacing: '0.14em' }}>
                DOWNTOWN PITTSBURGH
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: Pittsburgh story + Social channels ──────────────── */}
        <div className="pb-proof-right">

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 0.88,
            marginBottom: '1rem',
          }}>
            BUILT IN{' '}
            <em style={{
              fontStyle: 'italic',
              color: 'var(--color-brand-gold)',
              fontFamily: 'var(--font-display)',
            }}>
              PITTSBURGH.
            </em>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            color: 'var(--color-brand-silver)',
            lineHeight: 1.68,
            maxWidth: '40ch',
            marginBottom: '1.75rem',
          }}>
            25 years in downtown Pittsburgh. Chains, watches, grillz, pendants, repairs, and custom work.
          </p>

          {/* Social channel map — platform label removed (icon identifies platform) */}
          <div style={{ borderTop: '1px solid var(--color-brand-border)', paddingTop: '1.5rem' }}>
            <div className="mi-eyebrow" style={{ marginBottom: '0.875rem' }}>
              <span className="mi-diamond-sm" aria-hidden="true" />
              TAP IN WITH 2T.
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {CHANNELS.map((ch) => (
                <a
                  key={ch.platform}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mi-channel-row${ch.wa ? ' mi-channel-row--wa' : ''}`}
                  aria-label={ch.label}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className={`mi-channel-icon${ch.wa ? ' mi-channel-icon--wa' : ''}`}
                    style={{ color: ch.iconColor }}
                  >
                    {PLATFORM_ICONS[ch.platform]}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      margin: 0,
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: 'var(--color-brand-white)',
                    }}>
                      {ch.copy}{' '}
                      <span style={{ color: 'var(--color-brand-muted)' }}>{ch.handle}</span>
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`mi-mono ${ch.wa ? 'mi-gold' : 'mi-faint'}`}
                    style={{ fontSize: '0.58rem', whiteSpace: 'nowrap' }}
                  >
                    {ch.action}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
