'use client'

import { useEffect } from 'react'

// Attaches IntersectionObserver to all .section-reveal and [class*="tile-reveal"] elements.
// Adds 'is-revealed' on first viewport entry. Runs once per element.
// Renders nothing — Server Component pages can safely import this as a child.
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
      { threshold: 0.12 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
