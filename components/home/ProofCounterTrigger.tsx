'use client'

import { useEffect } from 'react'

// Finds .stat-counter[data-target] elements and runs a one-time countUp animation
// on first IntersectionObserver entry (threshold 0.3).
// Renders nothing — can be safely placed inside a Server Component.
export default function ProofCounterTrigger() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.stat-counter[data-target]')
    )
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.target ?? '0', 10)
          if (!target) return
          observer.unobserve(el)

          const duration = 1200
          const startTime = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            el.textContent = String(Math.floor(progress * target))
            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              el.textContent = String(target)
            }
          }
          requestAnimationFrame(step)
        })
      },
      { threshold: 0.3 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
