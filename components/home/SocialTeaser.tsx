// components/home/SocialTeaser.tsx
//
// Pittsburgh BANG — live channel map scaffold
// Real links only. No fake follower counts, thumbnails, posts, or screenshots.
// Left canvas: replace div with real social clip when available.

import type { ReactNode } from 'react'
import Image from 'next/image'

const CHANNELS = [
  {
    platform: 'TIKTOK',
    copy:     'Watch the shine. Follow',
    handle:   '@2tjewelers',
    href:     'https://www.tiktok.com/@2tjewelers',
    wa:       false,
    label:    'TikTok: @2tjewelers',
    action:   'FOLLOW →',
    iconColor: '#ffffff',
  },
  {
    platform: 'INSTAGRAM',
    copy:     "See what's dropping.",
    handle:   '@2tjewelers',
    href:     'https://www.instagram.com/2tjewelers/',
    wa:       false,
    label:    'Instagram: @2tjewelers',
    action:   'FOLLOW →',
    iconColor: '#E1306C',
  },
  {
    platform: 'WHATSAPP',
    copy:     "Text before you buy. Ask what's available.",
    handle:   'TEXT 2T',
    href:     'https://wa.me/14124524343?text=Hi%202T%20%E2%80%94%20I%20saw%20the%20site%20and%20want%20to%20ask%20what%27s%20available.',
    wa:       true,
    label:    'WhatsApp: Text 2T',
    action:   'TEXT NOW →',
    iconColor: '#25D366',
  },
] as const

/* ── Inline SVG platform icons ─────────────────────────────────── */

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

export default function SocialTeaser() {
  return (
    <section
      aria-label="Follow 2T Jewelers"
      className="section-reveal"
      style={{
        background: 'var(--color-brand-black)',
        borderTop: '1px solid var(--color-brand-border)',
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
        {/* Left — platform identity vitrine. Replace outer div with <video> when real social clip arrives. */}
        <div
          aria-hidden="true"
          className="mi-vitrine pb-vitrine-social"
          style={{
            aspectRatio: '4/3',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
          }}
        >
          {/* Reel background — demo thumbnail + scanlines */}
          <div className="social-reel-bg" aria-hidden="true">
            <Image
              src="/assets/demo/phase3a/2t-demo-social-thumbnail-01.png"
              alt=""
              width={320}
              height={380}
              loading="lazy"
            />
            <div className="social-scanlines" />
          </div>

          {/* Reel indicator dot */}
          <div className="social-reel-dot" aria-hidden="true" />

          {/* Atmospheric radial — center bloom */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
            background: 'radial-gradient(ellipse 60% 55% at 50% 48%, rgba(201,168,76,0.07) 0%, transparent 65%)',
          }} />

          {/* Platform icon cluster — TikTok / Instagram / WhatsApp */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>

            {/* TikTok */}
            <div style={{ width: 42, height: 42, border: '1px solid rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.04)', flexShrink: 0 }}>
              <TikTokIcon />
            </div>

            {/* Instagram */}
            <div style={{ width: 42, height: 42, border: '1px solid rgba(225,48,108,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(225,48,108,0.04)', flexShrink: 0 }}>
              <InstagramIcon />
            </div>

            {/* WhatsApp — animated pulse border */}
            <div className="social-vitrine-wa" style={{ width: 42, height: 42, border: '1px solid rgba(37,211,102,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37,211,102,0.06)', flexShrink: 0 }}>
              <WhatsAppIcon />
            </div>
          </div>

          {/* Handle */}
          <p className="mi-mono" style={{ color: 'rgba(201,168,76,0.42)', fontSize: '0.55rem', letterSpacing: '0.22em', position: 'relative', zIndex: 2, margin: 0 }}>
            @2TJEWELERS
          </p>

          {/* Bottom label */}
          <div
            style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '10px 14px',
              borderTop: '1px solid var(--color-brand-border)',
              zIndex: 2,
            }}
          >
            <span className="mi-mono mi-faint" style={{ fontSize: '0.55rem' }}>
              WATCH · FOLLOW · TEXT
            </span>
          </div>
        </div>

        {/* Right — heading + channel-map rows */}
        <div>
          <div className="mi-eyebrow" style={{ marginBottom: '0.75rem' }}>
            <span className="mi-diamond-sm" aria-hidden="true" />
            @2TJEWELERS · FOLLOW THE SHOP
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 0.88,
              marginBottom: '0.75rem',
            }}
          >
            TAP IN{' '}
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--color-brand-gold)',
                fontFamily: 'var(--font-display)',
              }}
            >
              WITH 2T.
            </em>
          </h2>

          <p className="mi-mono mi-faint" style={{ marginBottom: '1.5rem', fontSize: '0.6rem' }}>
            SEE WHAT&rsquo;S DROPPING · TEXT BEFORE YOU BUY
          </p>

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
                {/* Platform icon box */}
                <div
                  className={`mi-channel-icon${ch.wa ? ' mi-channel-icon--wa' : ''}`}
                  style={{ color: ch.iconColor }}
                >
                  {PLATFORM_ICONS[ch.platform]}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className="mi-mono mi-gold" style={{ margin: 0, marginBottom: '2px', fontSize: '0.58rem' }}>
                    {ch.platform}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: 'var(--color-brand-white)',
                    }}
                  >
                    {ch.copy}{' '}
                    <span style={{ color: 'var(--color-brand-muted)' }}>{ch.handle}</span>
                  </p>
                </div>

                {/* Action label */}
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
    </section>
  )
}
