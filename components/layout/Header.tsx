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
      ['New Arrivals', 'Best Sellers'].includes(c.label)
    ),
    gold: false,
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

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

          {/* ── Brand masthead: clean inline — no CSS jewel, no gradient, no class ── */}
          <Link
            href="/"
            aria-label="2T Jewelers"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            '10px',
              textDecoration: 'none',
              cursor:         'pointer',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontFamily:    'var(--font-body)',
                fontWeight:    800,
                fontSize:      '1.15rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-white)',
                lineHeight:    1,
              }}
            >
              2T
            </span>
            <span
              aria-hidden="true"
              style={{
                display:    'inline-block',
                width:      '1px',
                height:     '16px',
                background: 'rgba(201,168,76,0.5)',
                flexShrink: 0,
                alignSelf:  'center',
              }}
            />
            <span
              style={{
                fontFamily:    'var(--font-body)',
                fontWeight:    600,
                fontSize:      '0.68rem',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color:         'var(--color-brand-gold)',
                lineHeight:    1,
              }}
            >
              JEWELERS
            </span>
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

              /* Custom — always gold, visually distinct as the primary nav action */
              if (item.label === 'Custom') {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-link"
                    aria-current={isActive ? 'page' : undefined}
                    style={{ color: 'var(--color-brand-gold)', fontWeight: 600 }}
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
          <div className="hidden md:flex">
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
            className="flex md:hidden flex-col gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
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
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3.5"
              style={{
                borderBottom: '1px solid var(--color-brand-border)',
                color:        item.label === 'Custom' ? 'var(--color-brand-gold)' : 'var(--color-brand-muted)',
                fontFamily:   'var(--font-body)',
                fontSize:     '0.9375rem',
                fontWeight:   item.label === 'Custom' ? 600 : undefined,
              }}
            >
              {item.label}
            </Link>
          ))}

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
              HIT US UP →
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
