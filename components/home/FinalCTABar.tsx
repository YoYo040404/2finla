// components/home/FinalCTABar.tsx
//
// Final conversion push before footer.
// Primary CTA → /custom. Secondary → WhatsApp.
import Link from 'next/link'

export default function FinalCTABar() {
  return (
    <section className="final-cta-bar" aria-label="Start your custom piece">
      <div aria-hidden="true" className="gold-rule" />
      <div className="final-cta-inner">
        <div>
          <h2 className="final-cta-headline">MAKE IT HIT.</h2>
          <p className="final-cta-body">
            Send the idea. We quote before the build.
          </p>
        </div>
        <div className="final-cta-actions">
          <Link href="/custom" className="btn-primary final-cta-btn">
            START THE PIECE →
          </Link>
          <a
            href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20to%20build%20a%20piece."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold final-cta-btn"
          >
            TEXT US →
          </a>
        </div>
      </div>
    </section>
  )
}
