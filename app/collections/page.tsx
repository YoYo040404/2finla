import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '2T Jewelers | Collections - Pittsburgh, PA',
  description:
    "Shop hip hop jewelry in Pittsburgh — Cuban chains, iced-out pendants, grillz, watches, rings. Real store. Text 2T to ask what's in.",
}

const WA_ASK =
  'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%27m%20looking%20at%20the%20collections.%20What%27s%20available%3F'

type CaseCategory = {
  slug: string
  label: string
  href: string
  line: string
  tone: 'gold' | 'ice' | 'mixed'
  icon: ReactNode
}

const heroLine  = 'Grillz. Watches. Chains. Pendants. Gold or silver. Diamond or moissanite.'
const trustLine = 'Details confirmed per piece. Ask before you buy.'

function ctaLabel(category: CaseCategory): string {
  if (category.slug === 'grillz')  return 'ASK ABOUT GRILLZ →'
  if (category.slug === 'watches') return 'ASK ABOUT WATCHES →'
  if (category.slug === 'custom')  return 'START CUSTOM →'
  return `SHOP ${category.label.toUpperCase()} →`
}

const caseCategories: CaseCategory[] = [
  {
    slug: 'grillz',
    label: 'Grillz',
    href: '/grillz',
    line: 'Top. Bottom. Full mouth. Built around the fit.',
    tone: 'gold',
    icon: (
      <svg viewBox="0 0 120 82" aria-hidden="true">
        <path d="M18 39C31 22 49 16 60 16s29 6 42 23" />
        <path d="M25 42c6 16 17 24 35 24s29-8 35-24" />
        <path d="M35 37v23M48 31v34M60 28v38M72 31v34M85 37v23" />
      </svg>
    ),
  },
  {
    slug: 'watches',
    label: 'Watches',
    href: '/watches',
    line: "Iced-out. Bust-down. Ask what's in.",
    tone: 'ice',
    icon: (
      <svg viewBox="0 0 120 82" aria-hidden="true">
        <path d="M47 12h26l5 17a28 28 0 0 1 0 24L73 70H47l-5-17a28 28 0 0 1 0-24l5-17Z" />
        <circle cx="60" cy="41" r="20" />
        <path d="M60 28v14l10 7M52 6h16M52 76h16" />
      </svg>
    ),
  },
  {
    slug: 'chains',
    label: 'Chains',
    href: '/collections/chains',
    line: 'Cuban. Rope. Tennis. The neck comes first.',
    tone: 'mixed',
    icon: (
      <svg viewBox="0 0 120 82" aria-hidden="true">
        <ellipse cx="36" cy="37" rx="23" ry="13" transform="rotate(-18 36 37)" />
        <ellipse cx="84" cy="45" rx="23" ry="13" transform="rotate(-18 84 45)" />
        <path d="M55 40h10" />
        <circle cx="53" cy="40" r="3" />
        <circle cx="67" cy="40" r="3" />
      </svg>
    ),
  },
  {
    slug: 'pendants',
    label: 'Pendants',
    href: '/collections/pendants',
    line: 'Photo. Logo. Name. Number. Pieces that mean something.',
    tone: 'ice',
    icon: (
      <svg viewBox="0 0 120 82" aria-hidden="true">
        <path d="M54 8h12v15H54z" />
        <path d="M60 22 31 43l29 31 29-31-29-21Z" />
        <path d="M31 43h58M45 43l15 31 15-31" />
      </svg>
    ),
  },
  {
    slug: 'bracelets',
    label: 'Bracelets',
    href: '/collections/bracelets',
    line: 'Tennis. Cuban. Bangle. Weight on the wrist.',
    tone: 'gold',
    icon: (
      <svg viewBox="0 0 120 82" aria-hidden="true">
        <path d="M21 61a42 42 0 1 1 78 0" />
        <path d="M32 62a30 30 0 1 1 56 0" />
        <circle cx="21" cy="61" r="6" />
        <circle cx="99" cy="61" r="6" />
        <circle cx="60" cy="20" r="4" />
      </svg>
    ),
  },
  {
    slug: 'rings',
    label: 'Rings',
    href: '/collections/rings',
    line: 'Big face or clean band. Ask what fits.',
    tone: 'ice',
    icon: (
      <svg viewBox="0 0 120 82" aria-hidden="true">
        <circle cx="60" cy="50" r="24" />
        <path d="m47 27 13-16 13 16" />
        <path d="M47 27h26" />
        <circle cx="60" cy="12" r="4" />
      </svg>
    ),
  },
  {
    slug: 'earrings',
    label: 'Earrings',
    href: '/collections/earrings',
    line: 'Studs. Hoops. Iced or clean.',
    tone: 'mixed',
    icon: (
      <svg viewBox="0 0 120 82" aria-hidden="true">
        <path d="M37 10v17M83 10v17" />
        <ellipse cx="37" cy="48" rx="14" ry="22" />
        <ellipse cx="83" cy="48" rx="14" ry="22" />
        <circle cx="37" cy="48" r="4" />
        <circle cx="83" cy="48" r="4" />
      </svg>
    ),
  },
  {
    slug: 'custom',
    label: 'Custom',
    href: '/custom',
    line: 'Your logo. Your name. Your piece.',
    tone: 'gold',
    icon: (
      <svg viewBox="0 0 120 82" aria-hidden="true">
        <path d="M23 58 56 14l41 10-33 44-41-10Z" />
        <path d="M56 14 64 68M35 42l41 10M44 30l41 10" />
        <circle cx="78" cy="26" r="4" />
      </svg>
    ),
  },
]

export default function CollectionsPage() {
  return (
    <main className="collections-case-page">
      <section className="collections-case-hero">
        <div className="collections-case-shell collections-case-hero__inner">
          <div className="collections-case-hero__copy">
            <p className="collections-case-kicker">2T JEWELERS · PITTSBURGH</p>
            <h1>
              Pick the
              <span> piece.</span>
            </h1>
            <p>{heroLine}</p>
          </div>

          <div className="collections-case-hero__vitrine" aria-hidden="true">
            <div className="collections-case-glass collections-case-glass--top" />
            <div className="collections-case-glass collections-case-glass--middle" />
            <div className="collections-case-glass collections-case-glass--bottom" />
          </div>
        </div>
      </section>

      <section className="collections-case-shell collections-case-grid-section" aria-labelledby="collections-case-heading">
        <div className="collections-case-section-head">
          <p className="collections-case-kicker">THE CASE</p>
          <h2 id="collections-case-heading">Eight ways to hit.</h2>
          <p>{trustLine}</p>
        </div>

        <div className="collections-case-grid">
          {caseCategories.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className={`collections-case-card collections-case-card--${category.tone}`}
              aria-label={category.label}
            >
              <span className="collections-case-card__media">
                <span className="collections-case-card__tray" />
                <span className="collections-case-card__icon">{category.icon}</span>
                <span className="collections-case-card__spark collections-case-card__spark--one" />
                <span className="collections-case-card__spark collections-case-card__spark--two" />
              </span>
              <span className="collections-case-card__body">
                <span className="collections-case-card__title">{category.label}</span>
                <span className="collections-case-card__copy">{category.line}</span>
                <span className="collections-case-card__cta">{ctaLabel(category)}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="collections-case-ask">
        <div className="collections-case-shell collections-case-ask__inner">
          <div>
            <p className="collections-case-kicker">DON&rsquo;T GUESS</p>
            <h2>Text 2T. Ask what&apos;s in.</h2>
          </div>
          <p>Availability moves. The fastest answer is a text.</p>
          <a href={WA_ASK} target="_blank" rel="noopener noreferrer" className="collections-case-ask__link">
            TEXT 2T →
          </a>
        </div>
      </section>
    </main>
  )
}
