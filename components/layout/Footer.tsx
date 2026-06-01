import Link from 'next/link'
import { footerNav } from '@/data/nav'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-brand-charcoal)',
        borderTop:       '1px solid var(--color-brand-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.5rem 2rem' }}>

        {/* Brand + contact — strong single identity row */}
        <div
          style={{
            marginBottom: '2.75rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--color-brand-border)',
          }}
        >
          <Link href="/" aria-label="2T Jewelers" className="footer-brand-lockup">
            <span className="footer-2t-mark">2T</span>
            <span
              aria-hidden="true"
              style={{
                display:    'inline-block',
                width:      '1px',
                height:     '26px',
                background: 'rgba(201,168,76,0.35)',
                flexShrink: 0,
                alignSelf:  'center',
              }}
            />
            <span className="footer-brand-wordmark">JEWELERS</span>
          </Link>
          <p
            style={{
              marginTop:     '0.875rem',
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--color-brand-silver)',
              lineHeight:    1.85,
            }}
          >
            332 FIFTH AVE, PITTSBURGH
            <span style={{ color: 'rgba(201,168,76,0.3)', margin: '0 0.4em' }}>·</span>
            <a
              href="tel:+14122817072"
              style={{ color: 'var(--color-brand-silver)', textDecoration: 'none' }}
            >
              +1 412-281-7072
            </a>
            <span style={{ color: 'rgba(201,168,76,0.3)', margin: '0 0.4em' }}>·</span>
            <a
              href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-brand-gold)', textDecoration: 'none' }}
            >
              TEXT ON WHATSAPP
            </a>
          </p>
        </div>

        {/* Nav columns — 2×2 mobile, 4 desktop, tighter gap */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: '1.75rem', marginBottom: '2.75rem' }}
        >
          {footerNav.map((group) => (
            <div key={group.title}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', marginBottom: '0.875rem' }}>
                {group.title}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="nav-link-footer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect column — social, WhatsApp */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', marginBottom: '0.875rem' }}>
              Connect
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <li>
                <a href="https://www.instagram.com/2tjewelers/" target="_blank" rel="noopener noreferrer" className="nav-link-footer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#E1306C', flexShrink: 0 }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="#E1306C" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@2tjewelers" target="_blank" rel="noopener noreferrer" className="nav-link-footer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: 'var(--color-brand-silver)', flexShrink: 0 }}>
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.95a8.16 8.16 0 004.77 1.52V8.03a4.85 4.85 0 01-1-.34z" />
                  </svg>
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece." target="_blank" rel="noopener noreferrer" className="nav-link-footer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: '#25D366', flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Acima — pay over time card, clearer hierarchy */}
        <div className="footer-acima-card">
          <div style={{ flex: '1' }}>
            <p style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.1rem',
              fontWeight:    400,
              letterSpacing: '0.04em',
              color:         'var(--color-brand-white)',
              marginBottom:  '0.35rem',
              lineHeight:    1,
            }}>
              PAY OVER TIME
            </p>
            <p style={{
              fontSize:   '0.78rem',
              color:      'var(--color-brand-muted)',
              lineHeight: 1.55,
              maxWidth:   '52ch',
            }}>
              Lease-to-own options may be available through Acima.
              Approval and terms are handled by Acima.
            </p>
          </div>
          <a
            href="https://apply.acima.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold footer-acima-btn"
            style={{ fontSize: '0.75rem', padding: '0.6rem 1.25rem', letterSpacing: '0.08em' }}
          >
            Apply with Acima →
          </a>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--color-brand-border)' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-brand-subtle)' }}>
            © {year} 2T Jewelers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
