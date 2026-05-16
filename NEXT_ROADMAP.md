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

### Complete ✅

- Next.js prototype scaffold
- Homepage Phase 2 — all sections approved (see Phase 2 below)
- Layout components: PromoBar, Header, Footer, MobileCtaBar
- Navigation data
- Design tokens
- Claim-safe copy
- SocialTeaser inline SVG icon polish (Instagram / TikTok / WhatsApp)
- Temporary logos installed (header + footer)
- Contact info wired (address, phone, WhatsApp, Instagram, TikTok, Acima)
- Hero video slot wired (file pending)

### WIP / Approval Pending ⚠️

- `/custom` page — build passes, NOT user-approved (too card-heavy on mobile)
- Material Preview section — renders, audit still pending
- Typography — watching for wedding/boutique feel; audit pending

### Not Yet 🚫

- Real product/category images
- Instagram/TikTok dynamic feed
- WhatsApp floating desktop button
- Formspree backend / lead capture
- Real upload backend
- Final logo SVG/2x/favicon
- Watches page
- Grillz page
- Vercel preview deploy
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
- Claim-safe copy

### Phase 2a — Custom UX Research + Rewrite Plan ✅ Complete
- Competitor research done
- Simplified UX plan defined
- Target mobile flow confirmed (3 steps)

### Phase 2b — Homepage Phase 2 ✅ Complete and user-approved

All 10 homepage sections built, QA'd, and approved:

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | inline `app/page.tsx` | BUILT TO HIT., video slot wired |
| ProofMarquee | `components/home/ProofMarquee.tsx` | CSS marquee, 8 trust facts |
| Custom Entry Block | inline `app/page.tsx` | bring logo/photo/idea, CTA to /custom |
| PICK YOUR LANE | inline `app/page.tsx` | 5 tiles + secondary pills |
| BestSellersStrip | `components/home/BestSellersStrip.tsx` | editorial lanes, inline SVG shapes |
| Inquiry Lanes | inline `app/page.tsx` | Diamond Watches, Grillz, Custom |
| PittsburghStory | `components/home/PittsburghStory.tsx` | outline type, brand story |
| SocialTeaser | `components/home/SocialTeaser.tsx` | inline SVG icons, real links only |
| Material Preview | inline `app/page.tsx` | ⚠️ audit still pending |
| FinalCTABar | `components/home/FinalCTABar.tsx` | HAVE A PIECE IN MIND? |

Removed: old Trust Strip, old Shop by Category / Collection Grid.
Build: TypeScript clean, 15 static pages generated.

### Phase 2c — Custom Page Revision ⚠️ WIP — Build passes. NOT user-approved as final.

- Removed: IdeaTypeStrip, PieceTiles, piece type dropdown, material, stone, email, notes
- Kept: CustomHero, CustomForm (5 fields), HowItWorks, CustomFaq
- User feedback: too card-heavy and too form-like on mobile
- Do not commit or push as an approved milestone
- Next direction: compact selectors (dropdown / bottom-sheet style) instead of chip/card grids

### Phase 2d — Custom UX Approval Gate 🚧 Open

Steps:
1. Plan compact-selector redesign
2. Present plan to user
3. Wait for explicit approval
4. Execute only after approval
5. QA: desktop 1280px + mobile 390px + no horizontal scroll + claim-safety scan

### Phase 3 — Brand Asset Setup ✅ Partial

Done (temporary):
- header logo: `2t-logo-wide-transparent.png`
- footer logo: `2t-logo-full-black-bg.png`
- address, phone, WhatsApp, Instagram, TikTok, Acima wired in Footer

Still needed:
- final SVG transparent logo (2x, retina)
- favicon
- OG / social image
- email address

### Phase 4 — Hero Video Integration ✅ Complete (temporary)

- `<video autoPlay muted loop playsInline>` slot wired in `app/page.tsx`
- source: `public/assets/hero-loop-demo.mp4` (file pending)
- dark background + gradient overlays handle missing-file gracefully

Still needed: real footage at `public/assets/hero-loop-demo.mp4`  
Specs: 8–10 seconds, MP4, muted, loopable, 16:9/21:9 desktop, 9:16 mobile backup if possible.

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
