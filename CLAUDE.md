# 2T Jewelers — Claude Code Operating Rules

Read `PROJECT_CONTEXT.md` before any work.

## Active Project

Work only in:

```text
C:\Users\yaniv\Downloads\2t-jewelers-next
```

## Paused / Archive Project

Do not work in:

```text
C:\Users\yaniv\Downloads\2t-jewelers-shopify
```

The Shopify project is paused/dropped for now because the user does not want to pay Shopify before visually approving the website.

Do not run Shopify CLI.  
Do not edit Shopify files.  
Do not update Shopify docs.  
Do not use Shopify Admin/API.  
Do not suggest paying Shopify.  
Shopify may be recalibrated later only after the Next.js prototype is approved.

---

## User Workflow

The user works in planning mode and wants strict phase control.

Do not modify files unless a specific execution phase has been approved.

For planning tasks:
- research first
- inspect current code
- use available tools
- produce a concise implementation plan
- stop and wait for approval

For execution tasks:
- modify only approved files
- do not expand scope
- run checks
- report exact files changed and QA status

---

## Current Active Task

**Midnight Icebox homepage is live and user-approved. Custom flow is live. Category pages completed. Post-Pass-2B QA clean.**

**Current homepage section order (Midnight Icebox — commit `af7f20d` and later):**

1. Hero — full-bleed campaign, BUILT TO HIT., BANG. gold brand stamp, dual CTAs: SHOP JEWELRY + BUILD CUSTOM →, video slot wired
2. ProofMarquee — CSS-only animated trust strip, gold borders
3. PICK THE PIECE — vitrine display-case gateway, anchor row (GRILLZ dominant), inline text direction labels + material cue
4. ShineDirectionBand — METAL: GOLD · SILVER / 925 Sterling Silver — STONE: DIAMONDS · MOISSANITE / D-color VVS Moissanite
5. Promo strip — ASK WHAT'S RUNNING NOW, claim-safe
6. Custom lane — YOUR LOGO. YOUR NAME. YOUR PIECE., keyword chips, NO DEPOSIT TO START · WE QUOTE FIRST
7. PittsburghStory — stat ledger: 25 YEARS / 5TH AVE, gold left-border rules
8. SocialTeaser — channel-map rows: TikTok / Instagram / WhatsApp, real links only

- Header logo: `2t-logo-wide-transparent.png` — numeric width/height, TODO for final SVG/2x
- Footer logo: `2t-logo-full-black-bg.png` — installed
- Address, phone, WhatsApp, Instagram, TikTok, Acima: all wired in Footer
- Hero video: slot wired at `public/assets/hero-loop-demo.mp4`, file pending

**Custom Flow: user-approved and live on Vercel.**

CRO pass and selector grouping committed (commits `60c7d06`, `2303850`). Resend lead capture verified live. All 9 fields including metal/stone direction and file attachments confirmed working.

**Category pages completed (as of 2026-06-01):**

- Header Navigation Cleanup — Shop ▾ / Pendants / Grillz / Watches / Custom / About; `/collections/pendants` highlights Pendants; other `/collections/*` highlight Shop; `/custom`, `/grillz`, `/watches` active states correct. Files: `components/layout/Header.tsx`, `data/nav.ts`
- Chains — six chain style cards, SHOP product/category language, image-ready SVG fallback structure
- Bracelets / Rings / Earrings — shared category template, six style cards per category, SHOP language, no BUILD CUSTOM CTA on these pages
- Pendants split — SHOP section (six pendant cards) + compact custom pendant selector (photo/logo/name/number/memorial/custom-shape); regular pendants = SHOP, photo/logo/name/number/custom-shape pendants = CUSTOM
- Watches — `app/watches/page.tsx` fully reworked; high-ticket iced/bust-down/Rolex-aware inquiry architecture; non-authorized-dealer disclosure included; image-ready structure; no fake inventory/prices/claims
- Grillz — `app/grillz/page.tsx` fully reworked; custom/fit/process-driven; six style cards (Top Set, Bottom Set, Full Mouth, Open Face, Stone Direction/Iced-Out, Cut Direction/Diamond Cut); no dental/medical/fit-guarantee/mold-kit claims

**Post-category polish passes committed (2026-06-01 → 2026-06-02):**

- `4fc8e3a` docs: sync current 2T project state
- `5cdb34e` fix: improve mobile readability and route ctas
- `3dcb65d` fix: refine typography and contrast system
- `7567917` fix: make static direction chips non-interactive

**Post-Pass-2B QA status: CLEAN (2026-06-02)**

Routes tested: /, /collections/chains, /collections/pendants, /custom, /watches, /grillz, /about.
Mobile 390px: passed. Desktop 1280px: key routes passed.
No horizontal scroll. Sticky mobile CTA clears content. Static direction chips render as non-interactive spec labels.
Claim-safety grep: clean. Build passed. Site is healthy/shippable.

**Working tree — do not stage without explicit approval:**
- `docs/superpowers/plans/` and `docs/superpowers/specs/` — planning/spec notes
- `public/assets/demo/phase3a/` — demo PNG assets
- `public/assets/logo-to-use.png` — replacement logo candidate, not yet approved for wiring
- `qa-2b-*.jpeg` — QA screenshots (do not commit; add to .gitignore if not already)

**Next recommended phase: Full Site VOC + Competitor + Social Copywriting/SEO Research Plan.**
No random CSS/layout cleanup unless QA finds a real issue. Asset/media request list comes after research.

Do not commit or push new category pages without visual QA and user approval.  
Do not wire Formspree.  
Do not add backend.  
Do not deploy.  
Do not install final logo until user provides the SVG/2x file.

---

## Brand Personality — BANG.

**"BANG."** is the owned brand signature of 2T Jewelers.

- Do not use personal names in visible website copy or comments.
- Use **@2tjewelers** as the social handle reference in all visible copy.
- Future About, Store, and Social sections must treat BANG as a real, owned brand element — not placeholder copy.
- The site should eventually feature the real downtown Pittsburgh store and real social media footage.

**Asset rules (strict):**
- Do not use fake store images.
- Do not use fake social clips.
- Do not write invented quotes or testimonials.

**Tenure language guard:**
Current approved wording is **"25 years"** — confirmed by user 2026-05-31.
Do not change to any other formulation unless the user explicitly confirms the exact language.

---

## Design Direction

Visual direction: **Dark Shine / Loud Luxury.**

Homepage must create an immediate BAM effect — full-bleed immersive hero, video-loop energy, gold/ice flash, big custom piece energy.

2T should be:

- Dark Shine / Loud Luxury
- GLD-calibrated ecommerce behavior
- original 2T brand
- street-luxury
- custom-first
- product/category dense
- mobile-first
- dark cinematic
- controlled, not flashy
- not quiet luxury
- not wedding jewelry / boutique
- not NFT/crypto
- not generic AI
- not cheap black/gold
- not business-card layout

**Benchmarks:**

GLD.com — ecommerce behavior only. Do not copy GLD assets, copy, claims, products, discounts, policies, celebrity proof, or trademarks.

Moses NYC — full-bleed visual discipline, smooth homepage rhythm, inquiry-led structure. Do not copy Moses assets, copy, layout, or restrained tone. 2T must be louder, shinier, more custom-first, and more hip-hop than Moses.

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

## Target Audience

U.S. hip-hop / urban / Black American and broader style-driven jewelry buyers.

They want:
- pieces that hit visually
- custom identity pieces
- direct inquiry
- confidence before spending
- clear materials and budget direction
- simple way to submit logo/sketch/photo/reference/name/number/idea

---

## Claim-Safety

Never add unverified claims.

Forbidden unless verified:
- free mockup
- free render
- CAD render / CAD promise
- turnaround time
- production timeline
- deposit terms
- guaranteed proof
- warranty / guarantee / lifetime guarantee
- fast/free shipping
- returns policy
- financing
- customer count
- fake reviews
- fake UGC
- fake press proof
- fake celebrity references
- Rolex / GIA / VVS / authenticity claims
- natural diamond / solid gold / karat claims unless product-level verified
- grillz FDA / dentist-approved / safe-for-teeth / fit guarantee / mold kit

Approved safe copy:
- “Have a logo, sketch, photo, or reference? Start the request here and we’ll guide the next visual direction before quote or production.”
- “Your request was received. We’ll review the details and follow up with next-step information.”
- “Budget range helps guide the conversation. It is not a final quote.”
- “Ask before you buy.”
- “No deposit. No rush. We quote first.”
- “Lease-to-own options may be available through Acima.”
- “Apply with Acima →”
- “Gold or silver. Diamond or moissanite. Different shine. Different direction.”
- “Material and stone details confirmed per piece.”
- “Ask what fits the piece.”

---

## Material & Stone Rules

2T sells gold, silver, diamonds, and moissanite. All four are equal product directions.

**Never write:**
- “moissanite diamond” or “VVS moissanite diamonds”
- “diamond alternative,” “diamond substitute,” or “diamond simulant”
- “fake diamond” for any 2T product
- “looks like a diamond” in reference to moissanite
- silver described as cheaper than gold or inferior to gold
- “budget moissanite” or “affordable alternative to diamonds”

**Material/stone claims require per-piece verification before publishing:**
- “925 sterling silver” — confirm per piece
- “D-color moissanite” / “VVS moissanite” — confirm per piece
- “GRA-certified moissanite” — confirm GRA cert ships with piece
- “GIA-graded diamond” — confirm GIA report exists per stone
- “Lab-grown diamond” / “Natural diamond” — confirm per piece
- “Solid gold” / “14K / 10K / 18K gold” — confirm per piece
- “Gold-plated over 925 sterling silver” — confirm per piece

Until confirmed: “Material and stone details confirmed per piece.”

Full rules: `CLAIM_SAFETY.md` → Material & Stone Language Rules.
Architecture planning: `PROJECT_CONTEXT.md` → Material & Stone Strategy.

---

## Required QA

Use when available:
- npm/type checks
- Playwright screenshots
- desktop 1280px
- mobile 390px
- no horizontal scroll
- form usability
- visual non-generic check
- claim-safety scan

Always report:
- files changed
- what was not changed
- QA result
- known blockers
- next recommended step
