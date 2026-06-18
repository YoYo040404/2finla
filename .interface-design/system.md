# 2T Jewelers — Interface Design System

**Direction: Midnight Icebox / Lit Case at Night · Pittsburgh Street-Luxury**

> This file governs all future UI work on 2T Jewelers Next.js.
> Do not introduce patterns that contradict this document without explicit approval.

---

## Brand Direction

Dark Shine / Loud Luxury. Pittsburgh jewelry buyer. Hip-hop, custom-first, product-dense, mobile-first, cinematic dark, controlled not flashy, not boutique, not NFT, not generic AI.

Anti-patterns to guard against: SaaS dashboard aesthetic, boutique bridal softness, alternating white/gray sections, purple gradients, Inter font, identical card grids.

---

## Type Stack

| Role    | Family              | Weight      | Notes                                         |
|---------|---------------------|-------------|-----------------------------------------------|
| Display | Anton               | 400         | Headlines, stats, addresses, labels           |
| Accent  | Cormorant Garamond  | 400 italic  | Gold `<em>` only — one per heading cluster    |
| Body    | Archivo             | 400         | Paragraph copy, form labels                   |
| Mono    | JetBrains Mono      | 400         | Eyebrows, captions, micro labels              |

### Type Rules

- Display `line-height: 0.88` — never relax to `1.0+`
- Display `letter-spacing: 0.02–0.04em`
- Anton weight: always 400. Never 700.
- Body: `0.9375rem–1rem`, `line-height: 1.68`, `color: var(--color-brand-silver)`
- Mono: `0.55–0.72rem`, `letter-spacing: 0.14–0.28em`
- Eyebrow: `.mi-eyebrow` class + `.mi-diamond-sm`. Never replicate inline.

---

## Color Tokens

### Surface Elevation

```css
--surface-base:  #030303;  /* Page canvas */
--surface-lift:  #070707;  /* Mid-page sections */
--surface-deep:  #0A0702;  /* Vitrines, hero — slightly warm */
```

### Gold Scale

```css
--gold-full:   rgba(201, 168, 76, 1.0);   /* CTA fills, headline accents */
--gold-mid:    rgba(201, 168, 76, 0.55);  /* Hover states, secondary elements */
--gold-faint:  rgba(201, 168, 76, 0.28);  /* Borders, card edges */
--gold-trace:  rgba(201, 168, 76, 0.15);  /* Atmospheric fills, vitrine backgrounds */
```

### Brand Palette

```css
--color-brand-gold:   rgba(201, 168, 76, 1.0);
--color-brand-white:  #F2EDE6;
--color-brand-silver: #ABA7A0;
--color-brand-muted:  #6B6560;
--color-brand-border: rgba(201, 164, 73, 0.22);
--color-brand-black:  #030303;
```

### Ice

```css
--ice-accent: rgba(200, 230, 255, 0.85); /* BANG. sparkles only — not for general use */
```

---

## Depth Strategy

**Borders-only with surface color shifts. No drop shadows.**

- 1px `var(--color-brand-border)` for section tops and card edges
- Background color shift (`base → lift → deep`) for elevation
- Vitrines: gradient fills for atmospheric depth
- Hover: `border-color` shift to `--gold-mid` + `translateY(-2px)`. Nothing else.

Do not mix shadows into this system.

---

## Spacing

Base unit: `0.25rem` (4px). Multiples: 4 / 8 / 12 / 16 / 20 / 28 / 32 / 44 / 56 / 72.

| Context                   | Value                         |
|---------------------------|-------------------------------|
| Section padding (vertical)    | `clamp(2.5rem, 5vw, 4.5rem)`  |
| Section padding (horizontal)  | `clamp(1.25rem, 3vw, 2.5rem)` |
| Two-column gap                | `clamp(1.75rem, 4vw, 3.5rem)` |
| Card inner padding (mobile)   | `1.25rem`                     |
| Card inner padding (desktop)  | `1.5rem`                      |
| Touch target minimum          | `44px` height                 |

Non-round micro values (`14px`, `43px`, `line-height: 1.67`) are intentional. Preserve them.

---

## Easing

Single curve sitewide: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — deceleration only. No spring, no bounce.

---

## Motion System

| Pattern           | Class / Component                             | Notes                                      |
|-------------------|-----------------------------------------------|--------------------------------------------|
| Section entry     | `.section-reveal` → `.is-revealed`            | ScrollRevealController, threshold 0.12     |
| Tile stagger      | `tile-reveal-0` / `tile-reveal-1` / `tile-reveal-2`    | 0 / 80 / 160ms, `translateY(18px)` start  |
| Secondary stagger | `tile-reveal-s0` / `tile-reveal-s1` / `tile-reveal-s2` / `tile-reveal-s3` | 0 / 60 / 120 / 180ms, `scale(0.97)` start |
| 3D cursor tilt    | `.pb-tile-3d`                                 | TileGlareController, desktop only          |
| Counter           | `.stat-counter[data-target]`                  | ProofCounterTrigger, rAF countUp           |

### Motion Rules

- All motion behind `prefers-reduced-motion: reduce`. No exceptions.
- 3s force-reveal fallback in ScrollRevealController is required. Keep it.
- Do not add new keyframes unless replacing an existing one.

---

## CTA System

Three variants only. Never add a fourth.

| Variant   | Class                        | Use                         |
|-----------|------------------------------|-----------------------------|
| Primary   | `.btn-primary` + `cta-shimmer` | Main conversion             |
| Secondary | `.btn-outline-gold`          | Supporting conversion       |
| Tertiary  | `.btn-outline-dim`           | Low-emphasis actions        |

### CTA Rules

- Arrow suffix `→` is mandatory on all CTAs. No exceptions.
- Every page needs `.btn-primary` + `.btn-outline-gold` in its primary CTA zone.
- WhatsApp links always use per-context `?text=` pre-fill: `wa.me/14124524343?text=…`
- Never use the bare `wa.me` domain without a pre-fill.

---

## Card System

Surface treatment applies to all card types (`.style-card`, `.collection-card`, `.src-card`):

| Property        | Value                                            |
|-----------------|--------------------------------------------------|
| Border          | `1px solid var(--gold-faint)`                   |
| Background      | Matches section surface — never white            |
| Border-radius   | Max `2px`                                        |
| Padding (mobile)  | `1.25rem`                                      |
| Padding (desktop) | `1.5rem`                                       |
| Box-shadow      | None                                             |
| Hover           | `border-color` → `--gold-mid` + `translateY(-2px)` |
| Image area      | `aspect-ratio: 4/3` or `1/1` — never variable height |

---

## Eyebrow Pattern

```jsx
<div className="mi-eyebrow">
  <span className="mi-diamond-sm" aria-hidden="true" />
  SECTION LABEL IN CAPS
</div>
```

Use `.mi-eyebrow` + `.mi-diamond-sm` on every section eyebrow. Never replicate inline.

---

## Shine & Atmosphere

- **Standard radial bloom** (reuse exactly — do not improvise variations):

  ```css
  background: radial-gradient(ellipse 60% 55% at 50% 48%, rgba(201, 168, 76, 0.07) 0%, transparent 65%);
  ```

- **Grain texture** (`.grain-field`): for high-contrast dark CTA sections only.
- **Ice accent** (`--ice-accent`): BANG. sparkles only. Not for general decoration.
- **Glare**: TileGlareController-style cursor glare reserved for 2–4 anchor product tiles per page max.

---

## BANG. Signature

```jsx
<span className="bang-signature bang-signature--section">BANG.</span>
```

Required on any section that discusses the brand, store, or tenure proof.

Current locations: `ProofContactZone`, `About`, `PittsburghStory`.

---

## Section Structure Rules

- Section separator: `borderTop: '1px solid var(--color-brand-border)'` — nothing else.
- Max-width: `1360px` (content), `1200px` (footer inner).
- All surfaces are dark. Never introduce a white or light-gray section.
- Every section must have a conversion path within one scroll distance.
- Proof format: large Anton stat number + mono label below (e.g. `25 YEARS`, `332 FIFTH AVE.`). Never use testimonial carousels. Never use invented quotes.

---

## Anti-Generic Checklist

Before shipping any component or page, confirm all boxes pass:

- [ ] No `Inter`, `Roboto`, `Arial`, or `system-ui` as any visible font
- [ ] No white or light-background sections
- [ ] No `border-radius > 4px` on surface containers
- [ ] No `box-shadow` on cards or panels
- [ ] No purple, lavender, or violet tones
- [ ] No "Experience / Premium / Luxury / Crafted" in any headline
- [ ] No three identical cards in a row — break the grid at least once per section
- [ ] No alternating white/gray section backgrounds
- [ ] Arrow `→` on every CTA
- [ ] `BANG.` signature on any brand/proof section
- [ ] WhatsApp is primary CTA, not a form
- [ ] "Pittsburgh" appears within first scroll of any proof or about section

---

## Last Updated

2026-06-18 · Post Pass 5C · Extracted by interface-design skill audit
