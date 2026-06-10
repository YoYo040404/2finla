'use client'

import { useEffect } from 'react'

// Attaches IntersectionObserver to all .section-reveal and [class*="tile-reveal"] elements.
// Adds 'is-revealed' on first viewport entry. Runs once per element.
// Renders nothing — Server Component pages can safely import this as a child.
//
// Phase A cold-state guard: a fallback timer force-reveals every remaining
// target after FORCE_REVEAL_MS. Content must never stay invisible if the
// observer can't fire (programmatic capture, prerender, slow hydration).
// Engaged users scrolling within the window still get the staggered reveals.
const FORCE_REVEAL_MS = 3000

export default function ScrollRevealController() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.section-reveal, [class*="tile-reveal-"]'
      )
    )

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      // rootMargin extends the trigger zone below the viewport so reveals
      // start slightly before entry — less chance of a visibly empty band.
      { threshold: 0.12, rootMargin: '0px 0px 12% 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    const fallback = window.setTimeout(() => {
      targets.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          el.classList.add('is-revealed')
          observer.unobserve(el)
        }
      })
    }, FORCE_REVEAL_MS)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])

  return null
}
