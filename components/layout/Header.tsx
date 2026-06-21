'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { mainNav, shopCategories } from '@/data/nav'

const WA_GENERAL = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20piece.'

/* Grouped shop dropdown — visual sections with thin dividers */
const SHOP_GROUPS = [
  {
    items: shopCategories.filter(c =>
      ['Chains', 'Pendants', 'Bracelets', 'Rings', 'Earrings'].includes(c.label)
    ),
    gold: false,
  },
  {
    items: shopCategories.filter(c =>
      ['Diamond Watches', 'Grillz'].includes(c.label)
    ),
    gold: false,
  },
  {
    items: shopCategories.filter(c => c.label === 'Custom Jewelry'),
    gold: true,
  },
  {
    items: shopCategories.filter(c =>
      ['Ask What Just Landed', 'Most Asked About'].includes(c.label)
    ),
    gold: false,
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Shop is active for /collections and any collection EXCEPT /collections/pendants
  // (Pendants has its own top-level nav entry)
  const isShopActive =
    pathname === '/collections' ||
    (pathname.startsWith('/collections/') && pathname !== '/collections/pendants')

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: 'var(--color-brand-black)',
        borderBottom:    '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: '1440px' }}>
        <div className="flex items-center justify-between" style={{ height: '68px' }}>

          {/* ── Brand masthead: Anton 2T mark + JEWELERS wordmark ── */}
          <Link
            href="/"
            aria-label="2T Jewelers"
            className="header-brand-lockup"
          >
            <span className="header-2t-mark" aria-hidden="true">2T</span>
            <span
              aria-hidden="true"
              style={{
                display:    'inline-block',
                width:      '1px',
                height:     '22px',
                background: 'rgba(201,168,76,0.45)',
                flexShrink: 0,
                alignSelf:  'center',
              }}
            />
            <span className="header-brand-wordmark">JEWELERS</span>
          </Link>

          {/* ── Desktop Nav (hidden on mobile) ──────────── */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-7"
          >
            {mainNav.map((item) => {

              /* Shop — dropdown */
              if (item.label === 'Shop') {
                return (
                  <div key="shop" className="relative group">
                    <button
                      className="nav-link flex items-center gap-1 bg-transparent border-0 p-0 cursor-pointer"
                      aria-haspopup="true"
                      style={isShopActive ? { color: 'var(--color-brand-gold)' } : undefined}
                    >
                      Shop
                      <svg
                        width="9" height="9" viewBox="0 0 9 9" fill="none"
                        className="transition-transform duration-200 group-hover:rotate-180"
                      >
                        <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </button>

                    {/* Grouped dropdown — 4 sections with thin dividers */}
                    <div
                      className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200"
                      style={{
                        top:             'calc(100% + 8px)',
                        left:            '50%',
                        transform:       'translateX(-50%)',
                        width:           '204px',
                        backgroundColor: 'var(--color-brand-charcoal)',
                        border:          '1px solid var(--color-brand-border)',
                        padding:         '6px',
                        zIndex:          100,
                      }}
                    >
                      {/* All Collections — top of dropdown */}
                      <Link
                        href="/collections"
                        className="nav-link flex items-center px-3 py-2"
                        style={{
                          fontSize:     '0.8125rem',
                          borderRadius: '2px',
                          fontWeight:   600,
                          color:        'var(--color-brand-gold)',
                          opacity:      0.9,
                        }}
                      >
                        All Collections
                      </Link>
                      <div style={{
                        height:     '1px',
                        background: 'var(--color-brand-border)',
                        margin:     '4px 8px',
                      }} />

                      {SHOP_GROUPS.map((group, gi) => (
                        <div key={gi}>
                          {gi > 0 && (
                            <div style={{
                              height:     '1px',
                              background: 'var(--color-brand-border)',
                              margin:     '4px 8px',
                            }} />
                          )}
                          {group.items.map((cat) => (
                            <Link
                              key={cat.href}
                              href={cat.href}
                              className="nav-link flex items-center justify-between px-3 py-2"
                              style={{
                                fontSize:     '0.8125rem',
                                borderRadius: '2px',
                                ...(group.gold ? { color: 'var(--color-brand-gold)' } : {}),
                              }}
                            >
                              {cat.label}
                              {cat.tag && (
                                <span style={{
                                  fontSize:        '0.58rem',
                                  letterSpacing:   '0.06em',
                                  padding:         '1px 5px',
                                  backgroundColor: 'var(--color-brand-gold-dim)',
                                  color:           'var(--color-brand-gold-light)',
                                  borderRadius:    '2px',
                                }}>
                                  {cat.tag}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }

              /* Custom — gold only when actually on /custom */
              if (item.label === 'Custom') {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-link"
                    aria-current={isActive ? 'page' : undefined}
                    style={isActive ? { color: 'var(--color-brand-gold)', fontWeight: 600 } : undefined}
                  >
                    Custom
                  </Link>
                )
              }

              /* All other nav items */
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav-link"
                  style={isActive ? { color: 'var(--color-brand-gold)' } : undefined}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ── Desktop CTA (hidden on mobile) ──────────── */}
          <div className="hidden md:flex items-center" style={{ gap: '1.25rem' }}>
            {/* Text-speed — WhatsApp-first, lg+ only so md nav never crowds */}
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="header-text-link hidden lg:inline-flex"
              aria-label="Text 2T on WhatsApp"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              TEXT 2T
            </a>
            <Link
              href="/custom"
              className="btn-outline-gold"
              style={{ fontSize: '0.8125rem', padding: '0.55rem 1.25rem', letterSpacing: '0.1em', boxShadow: '0 0 14px rgba(201,168,76,0.2), 0 0 0 0 transparent' }}
            >
              BUILD CUSTOM →
            </Link>
          </div>

          {/* ── Mobile Hamburger (hidden on desktop) ─────── */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex md:hidden flex-col items-center justify-center gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block transition-all duration-220"
                style={{
                  width:           '20px',
                  height:          '1px',
                  backgroundColor: 'var(--color-brand-white)',
                  transform:
                    mobileOpen && i === 0 ? 'translateY(6px) rotate(45deg)' :
                    mobileOpen && i === 2 ? 'translateY(-6px) rotate(-45deg)' : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────── */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden flex flex-col px-6 py-5"
          style={{
            borderTop:       '1px solid var(--color-brand-border)',
            backgroundColor: 'var(--color-brand-charcoal)',
          }}
        >
          {mainNav.map((item) => {
            const mobileActive =
              item.label === 'Shop' ? isShopActive : pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3.5"
                style={{
                  borderBottom: '1px solid var(--color-brand-border)',
                  color:        mobileActive ? 'var(--color-brand-gold)' : 'var(--color-brand-silver)',
                  fontFamily:   'var(--font-body)',
                  fontSize:     '0.9375rem',
                  fontWeight:   mobileActive ? 600 : undefined,
                }}
              >
                {item.label}
              </Link>
            )
          })}

          {/* Mobile CTAs: primary build, secondary WhatsApp */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginTop: '1.25rem' }}>
            <Link
              href="/custom"
              onClick={() => setMobileOpen(false)}
              className="btn-outline-gold text-center"
            >
              BUILD CUSTOM →
            </Link>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                display:        'block',
                textAlign:      'center',
                fontFamily:     'var(--font-body)',
                fontSize:       '0.8125rem',
                fontWeight:     600,
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                color:          '#4cba6c',
                padding:        '0.625rem 1rem',
                border:         '1px solid rgba(76,186,108,0.28)',
                textDecoration: 'none',
              }}
            >
              TEXT 2T →
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
