/* Mobile sticky CTA bar — contact links are placeholders until real numbers confirmed. */

const ACTIONS = [
  {
    label: 'Text',
    href:  '#contact',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 1.5C5.134 1.5 2 4.354 2 7.875c0 1.74.74 3.31 1.938 4.44L3 16.5l4.35-1.388A7.37 7.37 0 0 0 9 15.25c3.866 0 7-2.854 7-6.375S12.866 1.5 9 1.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gold: false,
  },
  {
    label: 'DM',
    href:  '#contact',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.25"/>
        <circle cx="9" cy="9" r="3.25" stroke="currentColor" strokeWidth="1.25"/>
        <circle cx="13" cy="5" r="1" fill="currentColor"/>
      </svg>
    ),
    gold: false,
  },
  {
    label: 'Call',
    href:  '#contact',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3.5 3.5h3l1.5 3.5-1.75 1.25a8.25 8.25 0 0 0 3.5 3.5L11 10l3.5 1.5v3c0 1.1-.9 2-2 2A14.5 14.5 0 0 1 1.5 5.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gold: false,
  },
  {
    label: 'Custom',
    href:  '/custom',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 1.5L11 7H16.5L12 10.5L13.75 16L9 13L4.25 16L6 10.5L1.5 7H7L9 1.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gold: true,
  },
]

export function MobileCtaBar() {
  return (
    /* grid + md:hidden — no inline display so media query works correctly */
    <div
      role="navigation"
      aria-label="Quick actions"
      className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 md:hidden"
      style={{
        height:          '54px',
        backgroundColor: 'var(--color-brand-charcoal)',
        borderTop:       '1px solid var(--color-brand-border)',
      }}
    >
      {ACTIONS.map(({ label, href, icon, gold }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex flex-col items-center justify-center gap-[3px] active:opacity-60 transition-opacity duration-100"
          style={{ color: gold ? 'var(--color-brand-gold)' : 'var(--color-brand-muted)' }}
        >
          {icon}
          <span style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.575rem',
            fontWeight:    500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            {label}
          </span>
        </a>
      ))}
      {/* iPhone home indicator clearance */}
      <div
        className="absolute bottom-0 left-0 right-0 col-span-4"
        style={{ height: 'env(safe-area-inset-bottom, 0px)', backgroundColor: 'var(--color-brand-charcoal)' }}
      />
    </div>
  )
}
