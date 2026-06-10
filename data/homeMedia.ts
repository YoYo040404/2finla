type HomeImageSlot = {
  src: string
  alt: string
}

type DecorativeHomeImageSlot = {
  src: string
  alt: ''
}

type ShineRailImageSlot = HomeImageSlot | null

export const HOME_MEDIA = {
  hero: {
    // Future real 2T asset: owned 8-12s muted MP4 loop, dark jewelry macro, poster-matched.
    videoSrc: '/assets/hero-loop-demo.mp4',
    // Future real 2T asset: chain/pendant macro poster, 16:9 or wider, dark lit-case background.
    posterSrc: '/assets/demo/phase3a/2t-demo-hero-chain-pendant-01.png',
  },
  anchorTiles: {
    // Future real 2T asset: grillz macro, portrait-friendly crop, hard light on black.
    grillz: {
      src: '/assets/demo/phase3a/2t-demo-grillz-flat-01.png',
      alt: 'Grillz - demo concept visual',
    },
    // Future real 2T asset: watch face/bezel macro, portrait-friendly crop, icy highlights.
    watches: {
      src: '/assets/demo/phase3a/2t-demo-watch-face-01.png',
      alt: 'Watch - demo concept visual',
    },
    // Future real 2T asset: chain macro, portrait-friendly crop, gold or ice catch-light.
    chains: {
      src: '/assets/demo/phase3a/2t-demo-chains-01.png',
      alt: 'Chain - demo concept visual',
    },
  },
  // Future real 2T asset: pendant macro matching secondary tile crop; no product claims in alt.
  pendantSecondary: {
    src: '/assets/demo/phase3a/2t-demo-pendants-01.png',
    alt: 'Pendant - demo concept visual',
  },
  // Future real 2T asset: sketch-to-piece, bench, or handoff shot; decorative ambient layer.
  customVitrine: {
    src: '/assets/demo/phase3a/2t-demo-custom-before-after-01.png',
    alt: '',
  },
  shineRail: {
    // Future real 2T assets: category closeups at least 440x320 for the 220x160 rail cards.
    grillz: {
      src: '/assets/demo/phase3a/2t-demo-grillz-flat-01.png',
      alt: 'Grillz - demo concept visual',
    },
    watches: {
      src: '/assets/demo/phase3a/2t-demo-watch-face-01.png',
      alt: 'Watch - demo concept visual',
    },
    chains: {
      src: '/assets/demo/phase3a/2t-demo-chains-01.png',
      alt: 'Chain - demo concept visual',
    },
    pendants: {
      src: '/assets/demo/phase3a/2t-demo-pendants-01.png',
      alt: 'Pendant - demo concept visual',
    },
    custom: {
      src: '/assets/demo/phase3a/2t-demo-custom-before-after-01.png',
      alt: 'Custom work - demo concept visual',
    },
    rings: null,
    bracelets: null,
    earrings: null,
  } satisfies Record<string, ShineRailImageSlot>,
} satisfies {
  hero: {
    videoSrc: string
    posterSrc: string
  }
  anchorTiles: Record<'grillz' | 'watches' | 'chains', HomeImageSlot>
  pendantSecondary: HomeImageSlot
  customVitrine: DecorativeHomeImageSlot
  shineRail: Record<
    | 'grillz'
    | 'watches'
    | 'chains'
    | 'pendants'
    | 'custom'
    | 'rings'
    | 'bracelets'
    | 'earrings',
    ShineRailImageSlot
  >
}
