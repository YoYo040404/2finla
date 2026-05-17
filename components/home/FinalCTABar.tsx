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
          <h2 className="final-cta-headline">BUILD WITH 2T.</h2>
          <p className="final-cta-body">
            Bring the logo. Bring the photo. Bring the idea.
            We&apos;ll shape the next move.
          </p>
        </div>
        <div className="final-cta-actions">
          <Link href="/custom" className="btn-primary final-cta-btn">
            START THE PIECE →
          </Link>
          <a
            href="https://wa.me/14124524343"
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
