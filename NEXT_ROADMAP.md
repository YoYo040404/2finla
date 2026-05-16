# 2T Jewelers — Next.js Prototype Roadmap

## Current Active Strategy

```text
Next.js / Tailwind prototype first
→ approve design and custom flow
→ deploy Vercel preview if needed
→ only later decide whether to return to Shopify
```

Shopify is paused/dropped for now.

---

## Active Project

```text
C:\Users\yaniv\Downloads\2t-jewelers-next
```

Run:

```powershell
cd C:\Users\yaniv\Downloads\2t-jewelers-next
npm run dev
```

---

## Current Status

### Complete

- Next.js prototype scaffold
- Homepage shell
- Layout components:
  - PromoBar
  - Header
  - Footer
  - MobileCtaBar
- Navigation data
- Design tokens
- Initial `/custom` page
- Mock custom form
- Claim-safe copy

### Needs Revision

- `/custom` page UX is too heavy
- form needs to appear earlier or feel easier
- piece type grid may need to become chips/buttons
- homepage custom entry may need to be stronger
- custom upload/reference intent needs to be more immediate

### Blocked / Not Yet

- Formspree backend
- real upload backend
- logo installation
- Watches page
- Grillz page
- Vercel deploy
- Shopify recalibration

---

## Benchmarks

### GLD.com
Use for: ecommerce behavior, category depth, product density, mobile shopping flow.
Do not copy: assets, copy, claims, discounts, celebrity proof, or trademarks.

### Moses NYC
Use for: full-bleed visual discipline, smooth homepage rhythm, credibility, inquiry-led structure, simple custom/contact flow, strong visual hierarchy.
Do not copy: assets, videos, copy, product names, claims, layout exactly, or restrained tone.
2T must be louder, shinier, more custom-first, and more hip-hop than Moses.

---

## Phase Status

### Phase 1 — Scaffold ✅ Complete
- Next.js prototype scaffold
- Homepage shell
- Layout components (PromoBar, Header, Footer, MobileCtaBar)
- Design tokens
- Initial `/custom` page
- Mock custom form, claim-safe copy

### Phase 2a — Custom UX Research + Rewrite Plan ✅ Complete
- Competitor research done
- Simplified UX plan defined
- Target mobile flow confirmed (3 questions)
- Homepage custom-entry recommendation documented

### Phase 2b — Custom Page Revision ← Default next step
**Pending user approval.**

Default next step: Custom Flow Simplification, unless the user provides hero video, logo files, contact details, Instagram/TikTok links, or other ready assets first.

After approval:
- revise `/custom`
- simplify hero / flow / form
- move form higher
- convert heavy cards to chips/buttons if approved
- QA desktop/mobile

### Phase 2c — Visual QA

- desktop 1280px
- mobile 390px
- no horizontal scroll
- screenshot review
- Dark Shine / BAM effect check
- non-generic check

### Phase 3 — Brand Asset Setup ✅ Partial

Done (temporary assets in place):
- header logo installed (`2t-logo-wide-transparent.png`, numeric width/height, TODO comment for final SVG/2x)
- footer logo installed (`2t-logo-full-black-bg.png`)
- address: 332 Fifth Ave, Pittsburgh, PA 15222
- phone: +1 412-281-7072
- WhatsApp: wa.me/14124524343
- Instagram: @2tjewelers
- TikTok: @2tjewelers
- Acima link: apply.acima.com (safe wording only)

Still needed:
- final SVG transparent logo (2x, retina)
- favicon
- OG / social image
- email address
- real logo approved by user

### Phase 4 — Hero Video Integration ✅ Complete (temporary)

Completed:
- `<video autoPlay muted loop playsInline>` slot in place in `app/page.tsx`
- source: `public/assets/hero-loop-demo.mp4` (slot wired, file pending)
- no CSS placeholder label visible
- dark background + gradient overlays handle missing-file gracefully

Still needed:
- real store footage recorded and placed at `public/assets/hero-loop-demo.mp4`
- specs: 8–10 seconds, MP4, muted, loopable, 16:9/21:9 desktop, 9:16 mobile backup if possible
- no logos, no text, no celebrity likeness, no fake product proof in video

### Phase 5 — Watches / Grillz Prototype Pages

After custom flow and brand basics:
- `/watches`
- `/grillz`
- inquiry forms
- claim-safe copy

### Phase 6 — Form Backend + Upload Handling

Only after design approval:
- Formspree or similar for lead capture
- reference upload handling
- test submissions
- no real upload unless backend chosen

### Phase 7 — Analytics Setup

Only after user approves:
- analytics (GA4 or similar)
- Meta Pixel
- TikTok Pixel

### Phase 8 — Content & Copy Pass

- real custom gallery/assets
- copywriting pass with final brand voice
- no fake products, reviews, or UGC

### Phase 9 — Vercel Preview

- deploy preview
- full QA before publish
- mobile review

### Phase 10 — Optional Shopify Recalibration

Only if user explicitly approves:
- decide whether to pay Shopify
- migrate approved design logic back into Shopify
- map Next components to Shopify sections

---

## Dates

Any dates from older reports are placeholders only, not deadlines.
