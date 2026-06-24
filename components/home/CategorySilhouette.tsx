// components/home/CategorySilhouette.tsx
//
// Fine-line jewelry-case markers for categories that have no product
// photography yet (RINGS / BRACELETS / EARRINGS). Deliberately non-photographic
// line art set inside the lit vitrine — a designed "case marker," never a
// product photo and never presented as real inventory. Color is inherited from
// the parent (currentColor) so each tile can tint it gold or ice. CSS-only,
// no external assets. Swap to a real macro image when 2T provides one.

type SilhouetteType = 'ring' | 'bracelet' | 'earring'

export function CategorySilhouette({ type }: { type: SilhouetteType }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className="cat-silhouette"
    >
      {type === 'ring' && (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {/* band */}
          <ellipse cx="60" cy="76" rx="29" ry="30" />
          <ellipse cx="60" cy="76" rx="22" ry="23" opacity="0.45" />
          {/* solitaire gem */}
          <path d="M47 41 L60 27 L73 41 L60 57 Z" />
          <path d="M47 41 H73 M60 27 V57 M53 41 L60 32 L67 41" opacity="0.6" />
          {/* prongs into band */}
          <path d="M52 53 L49 64 M68 53 L71 64" opacity="0.5" />
          {/* sparkle */}
          <path d="M82 30 v8 M78 34 h8" opacity="0.55" strokeWidth="1.3" />
        </g>
      )}

      {type === 'bracelet' && (
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* tennis band — gentle double arc */}
          <path d="M12 64 Q60 96 108 64" />
          <path d="M12 56 Q60 88 108 56" opacity="0.45" />
          {/* set stones along the arc */}
          <path d="M26 64 l5 -6 l5 6 l-5 6 Z" />
          <path d="M44 71 l5 -6 l5 6 l-5 6 Z" />
          <path d="M60 74 l5 -6 l5 6 l-5 6 Z" />
          <path d="M76 71 l5 -6 l5 6 l-5 6 Z" />
          <path d="M94 64 l5 -6 l5 6 l-5 6 Z" />
          {/* clasp hint */}
          <path d="M12 56 v8 M108 56 v8" opacity="0.6" />
        </g>
      )}

      {type === 'earring' && (
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* hoop */}
          <circle cx="42" cy="62" r="26" />
          <circle cx="42" cy="62" r="19" opacity="0.4" />
          <path d="M36 37 a7 7 0 0 1 12 0" opacity="0.7" />
          {/* stud + drop */}
          <path d="M84 40 l8 -9 l8 9 l-8 9 Z" />
          <path d="M84 40 h16 M92 31 v18" opacity="0.6" />
          <path d="M92 49 v10" opacity="0.55" />
          <circle cx="92" cy="64" r="4.5" />
        </g>
      )}
    </svg>
  )
}
