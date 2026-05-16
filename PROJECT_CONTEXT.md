# 2T Jewelers — PROJECT_CONTEXT

**Purpose:** This is the root context file for the active Next.js prototype project.  
**Active project folder:** `C:\Users\yaniv\Downloads\2t-jewelers-next`  
**Old Shopify folder:** `C:\Users\yaniv\Downloads\2t-jewelers-shopify` — archive/reference only.

---

## Critical Current State

Shopify is paused/dropped for now.

Do **not** continue Shopify work.  
Do **not** run Shopify CLI.  
Do **not** edit Shopify files.  
Do **not** suggest paying Shopify.  
Do **not** reconnect Shopify unless the user explicitly approves later.

Reason: Shopify Admin/API/theme preview was blocked by billing/unavailable-shop errors, and the user does not want to pay Shopify before seeing and approving the site visually.

Active platform now:

```text
Next.js + Tailwind prototype
```

Current active folder:

```text
C:\Users\yaniv\Downloads\2t-jewelers-next
```

Run locally:

```powershell
cd C:\Users\yaniv\Downloads\2t-jewelers-next
npm run dev
```

Preview:

```text
http://localhost:3000
http://localhost:3000/custom
```

Shopify may be recalibrated later only after the Next.js prototype is visually approved.

---

## Project Role

Act as the senior project lead for strategy, UX/CRO, visual direction, competitor benchmarking, claim-safety, and Claude Code execution planning.

Main duties:

1. Keep the project focused.
2. Prevent generic AI-looking output.
3. Keep GLD.com as the ecommerce benchmark without copying it.
4. Keep custom orders as the main business engine.
5. Use competitor research before major UX changes.
6. Use Playwright/WebFetch/WebSearch/frontend-design/planning mode if available.
7. Give exact prompts for Claude Code.
8. Review plans and reports before approving execution.
9. Separate what is built, blocked, missing, and pending approval.
10. Enforce claim-safety.

---

## Language Rules

Main chat answers to user: **Hebrew**.  
Claude Code prompts and code instructions: **English**.

---

## Brand

**2T Jewelers** — urban / hip-hop / iced-out jewelry brand.

Target audience:

- U.S. hip-hop / urban jewelry buyers
- Black American and broader U.S. style-driven jewelry buyers
- Buyers familiar with Cuban chains, tennis chains, custom pendants, grillz, watches, moissanite, vermeil, and street-luxury status signaling

Buyer psychology:

- The piece has to hit visually.
- The shine has to show immediately.
- The product has to feel worth posting.
- The look has to feel personal.
- Custom is not a side category — custom is the dream.
- The store must feel real enough to trust with custom work, watches, grillz, and high-ticket inquiries.
- Direct text/DM style interaction must feel natural.

Positioning:

> A real jeweler with street-luxury energy, direct access, clear material options, and a custom-first path.

Strategic one-liner:

> Shop the shine. Build the piece. Make it yours.

Internal anchor:

> Get the look now. Build the custom piece next.

Core funnel principle:

> Catalog creates desire. Custom creates margin. Trust creates action. Text/DM removes friction.

---

## Visual Direction

**Dark Shine / Loud Luxury** — committed aesthetic direction.

The homepage must create an immediate BAM effect:
- full-bleed immersive hero
- video-loop energy (or strong CSS placeholder until real video arrives)
- close-up jewelry feeling
- gold/ice flash
- big custom piece energy
- street-luxury motion

Avoid:
- quiet luxury
- wedding jewelry / boutique luxury
- corporate
- generic Shopify look
- static brochure feel

## Visual Guardrails

2T must feel:

- street-luxury
- custom-first
- Dark Shine / Loud Luxury
- product/category dense
- mobile-first
- direct
- commercial
- trustworthy
- dark cinematic
- controlled, not flashy

2T must **not** feel:

- generic luxury jeweler
- wedding/boutique jewelry brand
- cheap dropship jewelry site
- NFT/crypto site
- AI-generated business-card landing page
- nightclub flyer
- cheap black/gold template
- generic Shopify/ecommerce template
- copied from GLD
- copied from Moses

---

## GLD Benchmark

Primary benchmark:

```text
https://www.gld.com/
```

Use GLD for:

- ecommerce behavior
- category depth
- product density
- mobile-first shopping flow
- product-card logic
- collection depth
- custom/customized placement
- commercial rhythm

Do **not** copy:

- GLD copy
- GLD images/assets
- GLD code
- GLD claims
- GLD discounts/BOGO
- GLD shipping/warranty language
- GLD celebrity/collab/press proof
- GLD trademarks or product names

2T should be **GLD-calibrated**, not GLD-copied.

---

## Moses NYC Benchmark

Secondary benchmark for visual discipline and inquiry-led structure.

Use Moses for:

- full-bleed visual discipline
- smooth homepage rhythm
- credibility signals
- inquiry-led structure (not cart-first)
- simple custom/contact flow
- strong visual hierarchy

Do **not** copy:

- Moses assets or videos
- Moses copy or product names
- Moses claims
- Moses layout exactly
- Moses restrained/quiet tone

2T must be **louder, shinier, more custom-first, and more hip-hop** than Moses.

---

## Built State — Next.js

Phase 1 homepage scaffold complete:

```text
app/globals.css
app/layout.tsx
app/page.tsx
data/nav.ts
components/layout/PromoBar.tsx
components/layout/Header.tsx
components/layout/Footer.tsx
components/layout/MobileCtaBar.tsx
```

Design tokens:

```text
Dark base: #080808
Charcoal card: #141414
Gold accent: #c9a84c
Display font: Cormorant Garamond
Body font: Outfit
```

Note: Cormorant Garamond may feel too aristocratic / wedding / boutique. The user said homepage is directionally good, but continue watching typography. If too soft, test stronger display fonts such as Archivo, Sora, Space Grotesk, or similar.

Homepage user feedback:

- Directionally good.
- Upgraded toward full-bleed immersive hero.
- Custom block promoted before categories/browse.
- Category cards changed from weak placeholders to intentional dark-shine visual frames.
- No visible "PHOTO SLOT" or "VIDEO LOOP" labels.
- CSS/video-slot placeholder in place for future real video.
- Needs polish later; do not overwork unless Custom UX requires it.

### Demo Video (integrated — file pending)

The `<video>` slot is wired in `app/page.tsx`. Source path: `public/assets/hero-loop-demo.mp4`.

The slot is live. The file is not yet recorded. Dark background + gradient overlays handle the missing file gracefully — no visible placeholder label.

When real footage is available, drop the file at:

```text
public/assets/hero-loop-demo.mp4
```

Video specs:
- 8–10 seconds
- MP4, muted, loopable
- 16:9 or 21:9 desktop
- 9:16 mobile backup if possible
- No logos, no text, no celebrity likeness, no fake product proof in video

Phase 2 Custom page initial build complete:

```text
app/custom/page.tsx
components/custom/CustomHero.tsx
components/custom/PieceTiles.tsx
components/custom/HowItWorks.tsx
components/custom/CustomForm.tsx
components/custom/CustomFaq.tsx
app/globals.css additions for form/FAQ utilities
```

Custom form current behavior:

- mock submit only
- no backend
- no Formspree yet
- file upload is prototype-only
- fields are Formspree-ready later
- safe success message:
  > Your request was received. We’ll review the details and follow up with next-step information.

Claim-safety passed.

---

## Custom Flow Status

The `/custom` page exists and works but is **not final**.

Current issues:
- long scroll
- heavy category/card section
- process and form feel separated
- form appears too late
- custom flow not immediate enough for the audience
- custom entry not prominent enough on homepage

Research and planning: ✅ complete.

Confirmed target mobile flow (3 questions):
1. What are you building?
2. Upload or describe the idea.
3. How do we reach you?

User can start with: logo, sketch, photo, name, number, reference, or rough idea.

See `CUSTOM_UX_REWRITE_BRIEF.md` for full plan.

---

## Current Next Task

**Default next task: Custom Flow Simplification.**

Unless the user provides hero video, logo files, contact details, Instagram/TikTok links, or other ready assets first — in which case integrate those assets before or alongside the custom flow execution.

See `AGENT_HANDOFF.md` for the exact execution prompt.

---

## Do Not Do Yet

Do not:

- continue Shopify
- run Shopify CLI
- edit Shopify files
- wire Formspree
- add backend
- integrate Cloudinary/Supabase upload
- build Watches or Grillz pages
- install logo (unless user provides files)
- deploy to Vercel
- add fake products/reviews/UGC/press
- add unverified discounts, shipping, warranty, timelines, policies
- use GLD copy/assets
- use Moses copy/assets
- promise CAD/render/free mockup
- turn `/custom` into a generic intake form

---

## Future Work (Not Yet)

Do not build yet:

- real logo files: final SVG transparent (2x/retina), favicon, OG/social image
- email address (not yet provided)
- lead capture backend (Formspree or similar)
- reference upload handling (real backend)
- analytics / Meta Pixel / TikTok Pixel
- real custom gallery/assets (photography)
- copywriting pass (final brand voice)
- full QA before Vercel preview
- Watches page
- Grillz page
