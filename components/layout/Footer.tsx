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
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '3.5rem 1.5rem 2rem' }}>

        {/* Logo + address block */}
        <div style={{ marginBottom: '3rem' }}>
          <Link href="/" aria-label="2T Jewelers" className="brand-lockup">
            <span className="brand-mark-css brand-mark-css-lg" aria-hidden="true" />
            <span className="brand-wordmark brand-wordmark-lg">2T JEWELERS</span>
          </Link>
          <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--color-brand-muted)', lineHeight: 1.65, maxWidth: '260px' }}>
            Pittsburgh-built. Custom-first. Nearly 30 years.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-brand-muted)' }}>
              332 Fifth Ave, Pittsburgh, PA 15222
            </p>
            <a
              href="tel:+14122817072"
              style={{ fontSize: '0.78rem', color: 'var(--color-brand-muted)' }}
              className="nav-link-footer"
            >
              Call the store: +1 412-281-7072
            </a>
            <a
              href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece."
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.78rem', color: 'var(--color-brand-gold)' }}
            >
              Text us on WhatsApp
            </a>
          </div>
        </div>

        {/* Nav columns — 2×2 mobile, 4 desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}
        >
          {footerNav.map((group) => (
            <div key={group.title}>
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.65rem',
                fontWeight:    600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-gold)',
                marginBottom:  '1rem',
              }}>
                {group.title}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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

          {/* Connect column — social, WhatsApp, Acima */}
          <div>
            <p style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.65rem',
              fontWeight:    600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color:         'var(--color-brand-gold)',
              marginBottom:  '1rem',
            }}>
              Connect
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a
                  href="https://www.instagram.com/2tjewelers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-footer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@2tjewelers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-footer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-footer"
                >
                  WhatsApp
                </a>
              </li>
              <li style={{ marginTop: '0.75rem' }}>
                <a
                  href="https://apply.acima.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-footer"
                  style={{ fontSize: '0.78rem' }}
                >
                  Apply with Acima →
                </a>
                <p style={{ fontSize: '0.68rem', color: 'var(--color-brand-subtle)', marginTop: '4px', lineHeight: 1.4, maxWidth: '22ch' }}>
                  Lease-to-own options may be available through Acima.
                </p>
              </li>
            </ul>
          </div>
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
