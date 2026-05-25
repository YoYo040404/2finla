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
4. Catalog creates desire. Custom creates margin. Trust creates action. Text/DM removes friction.
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

> A real Pittsburgh street-luxury jewelry store — real products, real custom work, direct access.

Strategic one-liner:

> Shop the shine. Build the piece. Make it yours.

Internal anchor:

> I can shop jewelry here. I can build custom here. I can text 2T directly. This is a real Pittsburgh jeweler.

Core funnel principle:

> Catalog creates desire. Custom creates margin. Trust creates action. Text/DM removes friction.

**The site must not feel custom-only.** Two equal paths: SHOP JEWELRY and BUILD CUSTOM.

Product priority (Grillz → Watches → Chains → Rings → Bracelets → Custom Jewelry → Pendants / Earrings):

| Priority | Category | Notes |
|---|---|---|
| 1 | Grillz | Top set / bottom set / full mouth. Also an intake path for custom grillz. |
| 2 | Watches | High-ticket. Iced bezels. Diamond-set direction. |
| 3 | Chains | Cuban, rope, tennis — built to hit the neck. |
| 4 | Rings | Big face, heavy statement. |
| 5 | Bracelets | Wrist game with weight. |
| 6 | Custom Jewelry | Logo, name, photo, sketch, reference, number idea. |
| 7 | Pendants / Earrings | Built from the idea. |

---

## Brand Personality — BANG.

**BANG.** is the owned brand signature of 2T Jewelers.

> **Note (updated 2026-05-18):** A personal brand name ("Effi") was previously referenced here as the face of 2T on TikTok and Instagram. That direction has been removed. Do not reference that name in any visible website copy, documentation, planning prompts, or code comments. Use **@2tjewelers** as the social handle reference in all visible copy.

Brand personality rules:
- BANG. is real and owned. Use it as a brand signature, not as placeholder copy.
- Social handle in all visible copy: **@2tjewelers**
- Future About, Store, and Social sections must use BANG. and real @2tjewelers content — not invented copy.
- The site should eventually feature the real downtown Pittsburgh store and real store/product media footage.

**Asset rules (strict — no exceptions):**
- Do not use fake store images.
- Do not use fake social clips.
- Do not write invented quotes or testimonials.
- Until real assets are provided, use structural placeholders (CSS/layout slots).

**Tenure language guard:**
Current approved wording is **"over 30 years"** — confirmed by user 2026-05-17.
Do not change to "nearly 30 years" or any other formulation unless the user explicitly confirms the exact language.

---

## Visual Direction

**Midnight Icebox — interpreted through hard hip-hop / hood street-luxury energy.**

This is not restrained luxury. The site must feel:
- black, urban, hood/street
- loud, flashy, bling-heavy
- ice / diamond / gold shine
- rapper / athlete / big-car energy
- real Pittsburgh jeweler
- product-dominant, shop-ready and custom-ready
- high-visibility, direct and street-commercial

The homepage must create an immediate BAM effect:
- full-bleed immersive hero
- video-loop energy (or strong CSS placeholder until real video arrives)
- close-up jewelry feeling
- gold/ice flash
- big custom piece energy
- street-luxury motion

**Active design system (as of commit `af7f20d` — 2026-05-25):**

| Token | Value |
|---|---|
| Obsidian (bg) | `#050505` |
| Charcoal (card) | `#0E0E0E` |
| Border | `#1F1D1A` |
| Bone (text) | `#F3F0EA` |
| Silver (dim) | `#9B958A` |
| Muted (faint) | `#5B554C` |
| Gold (accent) | `#C9A449` |
| Ice (accent) | `#D8EBFF` |
| Display font | Anton |
| Body font | Archivo |
| Mono font | JetBrains Mono |
| Italic accent | Cormorant Garamond |

## Visual Guardrails

2T must feel:

- black, urban, hood/street
- loud, flashy, bling-heavy
- ice / diamond / gold shine energy
- rapper / athlete / big-car energy
- real Pittsburgh jeweler
- product-dominant, shop-ready and custom-ready
- street-luxury
- custom-first
- product/category dense
- mobile-first
- direct, commercial, high-visibility

2T must **not** feel:

- quiet luxury
- boutique jewelry / wedding jewelry brand
- corporate
- generic dark luxury
- SaaS / spec-sheet UI
- over-clean ecommerce
- fake streetwear / parody AAVE
- cheap nightclub flyer
- NFT/Web3 / fake AI jewelry brand
- cheap black/gold template
- generic Shopify/ecommerce template
- copied from GLD
- copied from Moses

---

## Audience-First Research Rule

For every major UX, copy, visual, or conversion decision:

- Do not rely only on internal taste.
- Research a broader set of relevant competitor and audience examples first.
- Include major brands (GLD, Moses NYC, King Ice, etc.) and smaller mom-and-pop custom jewelry stores.
- Understand the target buyer's language, motivation, friction, and visual expectations.
- 2T must speak the audience's language: iced-out, flashy, custom-first, streetwise, clear, direct.
- Avoid fake slang, parody, generic luxury, corporate tone, wedding/boutique tone, and unverified claims.
- The target buyer wants a piece that hits visually and an easy path to send an idea, logo, photo, name, number, sketch, or reference.
- Research output should influence copy, UX, SEO, CTA wording, and visual direction before implementation.

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

See Visual Direction section above for the full Midnight Icebox token table (updated 2026-05-25).

### Homepage — Midnight Icebox Pass 3 ✅ Committed

**Latest commit:** `af7f20d — feat: apply Midnight Icebox homepage visual pass` (2026-05-25)

Homepage is a product-first store with a custom lane — NOT custom-only. Hero dual CTAs: SHOP JEWELRY + BUILD CUSTOM →.

**Midnight Icebox system active:**

| # | Section | Component | Status |
|---|---------|-----------|--------|
| 1 | Hero — BUILT TO HIT. + BANG. stamp | inline in `app/page.tsx` | ✅ Full-bleed campaign media, video opacity 0.60, BANG. as borderless gold brand text stamp |
| 2 | ProofMarquee | `components/home/ProofMarquee.tsx` | ✅ CSS-only marquee, gold borders, trust facts, accessible |
| 3 | SHOP JEWELRY — vitrine gateway | inline in `app/page.tsx` | ✅ Anchor row 1.4fr/1fr/1fr (GRILLZ dominant), vitrine display-case tiles, inline mono text direction labels (no border-box pills) |
| 4 | WHAT'S RUNNING THIS WEEK — promo | inline in `app/page.tsx` | ✅ Two-column, vitrine slot right, gleam moment |
| 5 | LOGO. NAME. PHOTO. — custom lane | inline in `app/page.tsx` | ✅ Vitrine left, text right, keyword chips |
| 6 | REAL STORE. REAL WORK. | `components/home/PittsburghStory.tsx` | ✅ Stat ledger: 30+ YEARS / 5TH AVE with gold left-border rules |
| 7 | TAP IN WITH 2T. | `components/home/SocialTeaser.tsx` | ✅ Channel-map rows with diamond glyphs, WhatsApp gold-bordered |

**Vitrine system:** Striped diagonal-pattern CSS placeholder wells with corner crop marks. Replace with real `<img>` or `<video>` when media assets arrive.

**Gleam budget:** 2 of 3 used (GRILLZ anchor tile + promo vitrine). One remaining.

**No fake products, claims, prices, testimonials, social metrics, celebrity proof, or inventory introduced.**

**Not redesigned in this pass:** `/custom`, `/grillz`, `/watches`.

Do not drift back to:
- custom-only homepage
- too many repeated CTA sections
- stacked duplicate product grids
- generic dark luxury / SaaS-spec-sheet UI
- border-box pill spec labels on shop tiles

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
- TAP IN WITH 2T. (SocialTeaser heading)
- See what's dropping. (TikTok card copy)
- BUILD WITH 2T. (FinalCTABar heading — updated in 84af600)
- Let's build. (Grillz inquiry lane — tightened in 84af600)
- START THE REQUEST → (primary /custom CTA — updated in 84af600)

Voice rules: no N-word, no parody Ebonics, no fake rapper imitation. Voice is confident, direct, street-fluent — not corporate, not boutique, not cheap.

### Custom Flow Status

The `/custom` page is **WIP — build passes (TypeScript + static generation clean), but NOT user-approved as final.**

Flow: CustomHero → CustomForm (5 fields: piece type chip, idea textarea, reference upload, name, phone, budget) → HowItWorks → CustomFaq

Latest update (commit 84af600 — 2026-05-17):
- Hero is more compact; primary CTA is START THE REQUEST →
- Browse Ready-Made removed
- Piece type chips wrap cleanly
- Upload zone appears above textarea on mobile
- Textarea reduced to 4 rows; Material + Budget chips remain
- WHATSAPP OR PHONE label; gold-bordered trust callout
- SEND REQUEST → full-width
- Bypass CTA: Not sure yet? Hit us up on WhatsApp →
- HowItWorks step 02: WE REVIEW THE DIRECTION
- HowItWorks step 03: WE QUOTE FIRST

Visual QA and user approval still required. **Do not mark /custom as final.**

---

## Current Next Task

**Priority 1 — Strategic Visual Reset Audit (OPEN CONCERN):**
Even after Midnight Icebox Pass 3, the project may still need a larger strategic visual reset to reach the desired hood / hard hip-hop / flashy bling energy. The current system is Midnight Icebox (dark, gold, structured, vitrine display-case) — which reads as controlled dark luxury. It may not yet feel loud/flashy/bling-heavy enough for the target audience.

**Before any further major build work**, run a Strategic Visual Reset Audit / Deep Research pass. Do not keep polishing blindly. Research the target energy (GLD, King Ice, TraxNYC, Johnny Dang, Icebox) and confirm whether the current direction is hard enough, or whether a deeper reset is needed.

**Priority 2:** Visual QA of `/custom` — wait for user approval before further changes.

**Priority 3:** Real photo/video assets — hero, grillz, watches, store footage, product footage. Real media will be the single biggest upgrade to the bling/shine feeling.

**Pending (not started):** Instagram/TikTok feed strategy, lead capture/backend, Vercel preview deploy.

---

## Committed Work (as of 2026-05-25)

| Commit | Description |
|---|---|
| `af7f20d` | Homepage Midnight Icebox Pass 3 — Anton/Archivo/JetBrains Mono font system, obsidian/bone/gold/ice palette, full-bleed campaign hero (BANG. as brand stamp), vitrine Shop Jewelry gateway, Pittsburgh stat ledger, Social channel-map rows |
| `b049d30` | 2T voice hardening across core pages |
| `84af600` | /custom compact revision: compact hero, START THE REQUEST →, Browse Ready-Made removed, upload above textarea mobile, textarea 4 rows, gold-bordered trust callout, full-width SEND REQUEST →, WhatsApp bypass CTA, updated HowItWorks steps |
| `8fd4497` | Homepage reset — product store + custom lane. SHOP JEWELRY gateway (8 cards, priority order). CUSTOM BUILT HERE fast lane. |
| `200e5a1` | Grillz and Watches landing pages upgraded — `/grillz` and `/watches` committed. |

---

## Promotions + Verified Claims Policy

2T Jewelers does run promotions and sales. The site should support promotional architecture as a planned future capability.

### Planned Promotional Features (Not Yet Built)
- Special of the Week — featured deal/product module
- Sale strip / promo bar
- Percentage-off campaign banners
- Bundle or BOGO-style campaigns
- Seasonal campaign modules
- Offer modules on collection/category pages

### Stronger Claims — Allowed When Verified and Scoped

These claims are **permitted** only when verified (confirmed product data, real policy, supplier cert) and scoped to the correct product, category, or policy — not as blanket site-wide statements:

- solid gold (product-level)
- real diamonds (product-level)
- natural diamonds (product-level)
- VVS / VS / SI (product-level, confirmed grade)
- GIA certificate (product-level, cert must exist)
- free shipping (policy-level, confirmed)
- lifetime warranty (policy-level, confirmed)
- guaranteed (scoped to a real policy)
- in stock (product-level, confirmed inventory)

**Never** use these as global blanket claims across the site.  
**Never** publish without product-level, category-level, or policy-level verification.

For details see `CLAIM_SAFETY.md`.

---

## Do Not Do Yet

Do not:

- continue Shopify
- run Shopify CLI
- edit Shopify files
- wire Formspree
- add backend
- integrate Cloudinary/Supabase upload
- install logo (unless user provides files)
- deploy to Vercel
- add fake products/reviews/UGC/press
- add unverified or blanket discounts, shipping, warranty, timelines, or policies (verified and scoped claims are allowed — see Promotions + Verified Claims Policy above)
- use GLD copy/assets
- use Moses copy/assets
- promise CAD/render/free mockup
- turn `/custom` into a generic intake form
- redesign `/grillz` or `/watches` unless specifically approved
- redesign `/custom` unless specifically approved

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
