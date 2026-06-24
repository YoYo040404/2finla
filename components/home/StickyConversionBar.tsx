'use client'

import { useState, useEffect } from 'react'

const WA_LINK =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20ask%20about%20a%20piece.'

const SESSION_KEY = 'sticky2tDismissed'

// Desktop/tablet only sticky conversion bar.
// Appears when the #sticky-trigger sentinel scrolls out of view (user is ~60% down the page).
// Hidden on mobile (max-width: 767px) — MobileCtaBar already handles mobile CTAs.
// Dismissed state persisted in sessionStorage.
export default function StickyConversionBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return

    const sentinel = document.getElementById('sticky-trigger')
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show only when the sentinel has scrolled ABOVE the viewport (user is
        // past it / lower on the page). A non-intersecting sentinel that is
        // still BELOW the viewport (near the top) must keep the bar hidden,
        // otherwise the bar shows at the top and the floating WA flips on/off
        // as the sentinel crosses the viewport.
        const scrolledPast = !entry.isIntersecting && entry.boundingClientRect.top < 0
        if (scrolledPast) {
          if (!sessionStorage.getItem(SESSION_KEY)) setVisible(true)
        } else {
          setVisible(false)
        }
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // Toggle a body flag so the floating WhatsApp button can hide while this bar shows
  useEffect(() => {
    document.body.classList.toggle('sticky-bar-active', visible)
    return () => document.body.classList.remove('sticky-bar-active')
  }, [visible])

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="sticky-bar" role="complementary" aria-label="Ask about a piece">
      <span className="sticky-bar-label">ASK ABOUT A PIECE</span>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-bar-cta"
        aria-label="Text 2T on WhatsApp"
      >
        TEXT 2T →
      </a>
      <button
        onClick={dismiss}
        className="sticky-bar-dismiss"
        aria-label="Dismiss"
        type="button"
      >
        ×
      </button>
    </div>
  )
}
