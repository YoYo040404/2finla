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

## Brand Personality — Effi

**Effi** is the visible face and personality of 2T Jewelers on TikTok and Instagram.

- Effi's signature catchphrase / slogan: **"BANG."**
- Future About, Store, and Social sections must use Effi and "BANG" as real brand personality elements, not as placeholders or invented copy.
- The site should eventually feature the real downtown Pittsburgh store and real Effi / social media footage.

**Asset rules (strict — no exceptions):**
- Do not use fake Effi images.
- Do not use fake store images.
- Do not use fake social clips.
- Do not write invented Effi quotes.
- Until real assets are provided, use structural placeholders (CSS/layout slots) and note "real Effi footage pending" in code comments.

**Spelling:** Always write **Effi**. Never write "Effie."

**Tenure language guard:**
Current approved wording on site is **"nearly 30 years"** (used in ProofMarquee, PittsburghStory, and related copy).
Do not change to "over 30 years" or any alternate phrasing unless the user explicitly confirms the correct number.

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

### Layout components

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

### Design tokens

```text
Dark base: #080808
Charcoal card: #141414
Gold accent: #c9a84c
Display font: Cormorant Garamond
Body font: Outfit
```

Note: Cormorant Garamond may feel too aristocratic / wedding / boutique. If too soft, test stronger display fonts such as Archivo, Sora, or similar. Typography audit is pending.

### Homepage Phase 2 — Complete and user-approved ✅

Approved section order:

| # | Section | Component | Status |
|---|---------|-----------|--------|
| 1 | Hero | inline in `app/page.tsx` | ✅ Full-bleed, BUILT TO HIT., video slot wired |
| 2 | ProofMarquee | `components/home/ProofMarquee.tsx` | ✅ CSS-only marquee, 8 trust facts, accessible |
| 3 | Custom Entry Block | inline in `app/page.tsx` | ✅ Bring the logo / photo / idea, CTA to /custom |
| 4 | PICK YOUR LANE | inline in `app/page.tsx` | ✅ 5 category tiles + secondary category pills |
| 5 | BestSellersStrip | `components/home/BestSellersStrip.tsx` | ✅ Two editorial lanes, inline SVG shape cards, no real product data |
| 6 | Inquiry Lanes | inline in `app/page.tsx` | ✅ 3 inquiry lanes (Diamond Watches, Grillz, Custom), each with CTA |
| 7 | PittsburghStory | `components/home/PittsburghStory.tsx` | ✅ Outline typography brand story, dual CTAs |
| 8 | SocialTeaser | `components/home/SocialTeaser.tsx` | ✅ Inline SVG icons (IG/TT/WA), real links only, no fake data |
| 9 | Material Preview | inline in `app/page.tsx` | ⚠️ Chips render; audit still pending |
| 10 | FinalCTABar | `components/home/FinalCTABar.tsx` | ✅ HAVE A PIECE IN MIND? + two CTAs |

Removed from homepage: old Trust Strip, old Shop by Category / Collection Grid.

### Demo Video (slot wired — file pending)

The `<video>` slot is wired in `app/page.tsx`. Source: `public/assets/hero-loop-demo.mp4`.

When real footage is available, drop the file at:

```text
public/assets/hero-loop-demo.mp4
```

Specs: 8–10 seconds, MP4, muted, loopable, 16:9 or 21:9 desktop, 9:16 mobile backup if possible. No logos, text, celebrity likeness, or fake product proof in video.

### Approved Copy Direction

Hard, direct, street-fluent, hip-hop jewelry focused. Not parody. Not fake Ebonics.

Approved lines:
- BUILT TO HIT.
- Bring the logo. Bring the photo. Bring the idea.
- We'll shape the next move.
- Pick your lane.
- Start the piece.
- Text 2T.
- No deposit. No rush. We quote first.
- Ask before you buy.

Voice rules: no N-word, no parody Ebonics, no fake rapper imitation. Voice is confident, direct, street-fluent — not corporate, not boutique, not cheap.

### Custom Flow Status

The `/custom` page is **WIP — build passes (TypeScript + static generation clean), but NOT user-approved as final.**

Flow: CustomHero → CustomForm (5 fields: piece type chip, idea textarea, reference upload, name, phone, budget) → HowItWorks → CustomFaq

User feedback: too card-heavy and too form-like on mobile. Not the final design.

**Do not commit or push `/custom` as an approved milestone.**

Future direction: compact selectors (dropdown / bottom-sheet style) instead of large chip/card grids.

---

## Current Next Task

**Priority 1:** Get `/custom` user-approved — plan compact-selector redesign, wait for approval, then execute.

**Priority 2:** Real product/category images.

**Priority 3:** Typography audit + Material Preview section audit.

**Pending (not started):** Instagram/TikTok dynamic feed, WhatsApp floating desktop button, Vercel preview deploy, lead capture / backend.

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
