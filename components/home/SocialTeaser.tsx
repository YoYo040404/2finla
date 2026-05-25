// components/home/SocialTeaser.tsx
//
// Midnight Icebox — channel-map row layout
// Real links only. No fake images, follower counts, quotes, or screenshots.
// Left slot: brand canvas placeholder — replace with real media when ready.

const CHANNELS = [
  {
    platform: 'TIKTOK',
    copy:     'Watch us build. Drop in.',
    handle:   '@2tjewelers',
    href:     'https://www.tiktok.com/@2tjewelers',
    wa:       false,
    label:    'TikTok: @2tjewelers',
  },
  {
    platform: 'INSTAGRAM',
    copy:     'Real pieces. Real shots.',
    handle:   '@2tjewelers',
    href:     'https://www.instagram.com/2tjewelers/',
    wa:       false,
    label:    'Instagram: @2tjewelers',
  },
  {
    platform: 'WHATSAPP',
    copy:     'Hit us up. Ask before you buy.',
    handle:   'TEXT 2T',
    href:     'https://wa.me/14124524343',
    wa:       true,
    label:    'WhatsApp: Text 2T',
  },
] as const

export default function SocialTeaser() {
  return (
    <section
      aria-label="Follow 2T Jewelers"
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
        {/* Left — brand canvas: replace with real social media clip when available */}
        {/*
          <video autoPlay muted loop playsInline style={{ position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover' }}>
            <source src="/assets/store/social-clip.mp4" type="video/mp4" />
          </video>
        */}
        <div
          aria-hidden="true"
          className="mi-vitrine mi-vitrine-deep"
          style={{
            aspectRatio: '4/3',
            position: 'relative',
          }}
        />

        {/* Right — heading + channel-map rows */}
        <div>
          <div className="mi-eyebrow" style={{ marginBottom: '1rem' }}>
            <span className="mi-diamond-sm" aria-hidden="true" />
            @2TJEWELERS · FOLLOW THE WORK
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              marginBottom: '0.75rem',
            }}
          >
            TAP IN<br />
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

          <p
            className="mi-mono mi-faint"
            style={{ marginBottom: '1.75rem', lineHeight: 1.6 }}
          >
            WATCH THE BUILD. SEE THE WORK. TEXT BEFORE YOU BUY.
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
                {/* Diamond icon box */}
                <div className={`mi-channel-icon${ch.wa ? ' mi-channel-icon--wa' : ''}`}>
                  <span
                    className="mi-diamond"
                    aria-hidden="true"
                    style={{ margin: 0 }}
                  />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="mi-mono mi-gold"
                    style={{ margin: 0, marginBottom: '3px' }}
                  >
                    {ch.platform}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: 'var(--color-brand-white)',
                    }}
                  >
                    {ch.copy}{' '}
                    <span style={{ color: 'var(--color-brand-muted)' }}>{ch.handle}</span>
                  </p>
                </div>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className={`mi-mono ${ch.wa ? 'mi-gold' : 'mi-faint'}`}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
