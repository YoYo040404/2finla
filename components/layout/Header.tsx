'use client'

import Link from 'next/link'
import { useState } from 'react'
import { mainNav, shopCategories } from '@/data/nav'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

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

          {/* ── Brand lockup: CSS diamond mark + gradient gold wordmark ─────── */}
          <Link href="/" aria-label="2T Jewelers" className="brand-lockup">
            <span className="brand-mark-css" aria-hidden="true" />
            <span className="brand-wordmark">2T JEWELERS</span>
          </Link>

          {/* ── Desktop Nav (hidden on mobile) ──────────── */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-7"
          >
            {mainNav.map((item) => {
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

                    {/* Shop dropdown — CSS group-hover */}
                    <div
                      className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200"
                      style={{
                        top:             'calc(100% + 8px)',
                        left:            '50%',
                        transform:       'translateX(-50%)',
                        width:           '192px',
                        backgroundColor: 'var(--color-brand-charcoal)',
                        border:          '1px solid var(--color-brand-border)',
                        padding:         '6px',
                        zIndex:          100,
                      }}
                    >
                      {shopCategories.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          className="nav-link flex items-center justify-between px-3 py-2"
                          style={{ fontSize: '0.8125rem', borderRadius: '2px' }}
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
                  </div>
                )
              }

              return (
                <Link key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ── Desktop CTA (hidden on mobile) ──────────── */}
          <div className="hidden md:flex">
            <Link href="/custom" className="btn-outline-gold" style={{ fontSize: '0.8125rem', padding: '0.55rem 1.25rem', letterSpacing: '0.1em', boxShadow: '0 0 14px rgba(201,168,76,0.2), 0 0 0 0 transparent' }}>
              START THE PIECE →
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
                color:        'var(--color-brand-muted)',
                fontFamily:   'var(--font-body)',
                fontSize:     '0.9375rem',
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/custom"
            onClick={() => setMobileOpen(false)}
            className="btn-outline-gold text-center mt-5"
          >
            START THE PIECE →
          </Link>
        </nav>
      )}
    </header>
  )
}
