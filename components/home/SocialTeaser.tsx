// components/home/SocialTeaser.tsx
//
// Effi / BANG social energy section.
// Real links only. No fake images, follower counts, quotes, or screenshots.
// Effi content slot is clearly a placeholder — replace with real photo/video when ready.

const IgIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const TtIcon = () => (
  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88
      2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32
      6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0
      0 0 6.33-6.34V8.69a8.28 8.28 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
  </svg>
)

const WaIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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

const SOCIALS = [
  {
    platform: 'INSTAGRAM',
    handle:   '@2tjewelers',
    copy:     'See the work.',
    href:     'https://www.instagram.com/2tjewelers/',
    icon:     <IgIcon />,
    accent:   '#c9a84c',
    label:    'Instagram: @2tjewelers',
  },
  {
    platform: 'TIKTOK',
    handle:   '@2tjewelers',
    copy:     'Watch it get built.',
    href:     'https://www.tiktok.com/@2tjewelers',
    icon:     <TtIcon />,
    accent:   '#9fa8b3',
    label:    'TikTok: @2tjewelers',
  },
  {
    platform: 'WHATSAPP',
    handle:   'HIT US UP',
    copy:     'Tap in directly.',
    href:     'https://wa.me/14124524343',
    icon:     <WaIcon />,
    accent:   '#25D366',
    label:    'WhatsApp: Hit us up',
  },
] as const

const EFFI_SPARKLES = [
  { top: '12%', left: '8%',  delay: '0s',   size: 5, ice: true  },
  { top: '28%', left: '72%', delay: '1.1s', size: 4, ice: false },
  { top: '18%', left: '42%', delay: '2.4s', size: 3, ice: true  },
  { top: '55%', left: '88%', delay: '0.6s', size: 5, ice: false },
  { top: '72%', left: '18%', delay: '1.8s', size: 4, ice: true  },
  { top: '85%', left: '60%', delay: '3.1s', size: 3, ice: false },
  { top: '42%', left: '28%', delay: '2.8s', size: 3, ice: true  },
  { top: '65%', left: '50%', delay: '0.4s', size: 4, ice: false },
] as const

export default function SocialTeaser() {
  return (
    <section className="effi-section" aria-label="Follow 2T Jewelers">
      <div className="effi-inner">

        {/* ── Left: Effi visual slot ─────────────────────────────────────── */}
        {/*
          CONTENT SLOT — replace this entire div with real Effi media when ready:
            <div style={{ position:'relative', minHeight:'560px', overflow:'hidden' }}>
              <video autoPlay muted loop playsInline style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}>
                <source src="/assets/effi-clip.mp4" type="video/mp4" />
              </video>
            </div>
          Or: <Image fill style={{ objectFit:'cover' }} alt="Effi — 2T Jewelers" />
        */}
        <div className="effi-art-slot" aria-hidden="true">

          {/* Gradient overlay — keep when real media is added */}
          <div className="effi-art-overlay" />

          {/* Diagonal gold sweep — cinematic energy */}
          <div className="effi-art-sweep" />

          {/* Premium media frame — replaces with real content */}
          <div className="effi-slot-frame">
            <span className="effi-slot-frame-line">EFFI CONTENT SLOT</span>
            <span className="effi-slot-frame-sub">PHOTO · VIDEO · CLIP</span>
          </div>

          {/* BANG stamp — Effi's signature mark */}
          <em className="effi-bang-stamp" aria-hidden="true">BANG.</em>

          {/* Diamond / ice sparkle hits */}
          {EFFI_SPARKLES.map((s, i) => (
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
                backgroundColor: s.ice ? 'rgba(208,238,255,0.92)' : 'rgba(255,248,220,0.88)',
                boxShadow:       s.ice
                  ? `0 0 ${s.size * 5}px ${s.size + 2}px rgba(208,238,255,0.45)`
                  : `0 0 ${s.size * 5}px ${s.size + 2}px rgba(201,168,76,0.4)`,
                animation:       'sparkle-hit 3.8s ease-in-out infinite',
                animationDelay:  s.delay,
                pointerEvents:   'none',
                zIndex:          3,
              }}
            />
          ))}
        </div>

        {/* ── Right: heading + social tap targets ───────────────────────── */}
        <div className="effi-content">
          <span className="section-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
            2T × EFFI
          </span>

          <h2 className="effi-heading">
            BANG.<br />
            <em style={{ color: 'var(--color-brand-gold)', fontStyle: 'italic' }}>
              THAT&apos;S THE<br />SIGNATURE.
            </em>
          </h2>

          <p className="effi-subline">Follow the work. Tap in directly.</p>

          {/* Social tap targets — platform accent color per row */}
          <div className="effi-links" role="list">
            {SOCIALS.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="effi-link"
                style={{ '--effi-accent': s.accent } as React.CSSProperties}
                aria-label={s.label}
                role="listitem"
              >
                <div className="effi-link-icon" style={{ color: s.accent }}>
                  {s.icon}
                </div>
                <div className="effi-link-body">
                  <span className="effi-link-platform" style={{ color: s.accent }}>
                    {s.platform}
                  </span>
                  <span className="effi-link-handle">{s.handle}</span>
                  <span className="effi-link-copy">{s.copy}</span>
                </div>
                <span className="effi-link-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
