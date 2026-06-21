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

**Latest committed state: Homepage proof-rhythm simplification implemented, live-approved by Yaniv, and pushed (`a113a70 - feat: simplify homepage proof rhythm`). ProofMarquee removed from homepage; ShineRail / Most Asked About kept, relocated below the Custom lane (`fbd203c - feat: relocate ShineRail below custom lane`). Preceded by Trust + Text-Speed + Custom Hero Pass A (`98c56ff - feat: add trust signals and custom hero weight`), Homepage De-Clutter Pass 1 (`c24fd27`), Visual Pass 1B (`a785b85`), and Midnight Flash visual polish (`e1caaba`). Pass 5C Copy/CRO (`5da57da`), Interface Design system at `.interface-design/system.md` (`553834b`), Phase B2-safe (`992a4ca`), and all prior passes remain QA clean. Midnight Icebox homepage live on https://2finla.vercel.app.**

**Homepage proof-rhythm simplification (`a113a70` + `fbd203c`) — completed, live-approved 2026-06-21:**
- `fbd203c`: ShineRail / Most Asked About relocated below the Custom lane (before ProofContactZone) — cuts back-to-back category repetition near the top.
- `a113a70`: ProofMarquee removed from homepage — trust facts already carried by ProofContactZone; removed the duplicate top marquee + double-ticker noise.
- Final homepage rhythm (9 sections): Hero → PICK THE PIECE → ShineDirectionBand → Promo strip → Custom lane → ShineRail / Most Asked About → ProofContactZone → SocialTeaser → FinalCTABar.
- Reason: reduce repeated trust/ticker noise, keep the Most Asked About strip + shop energy, shorter/cleaner page. Promo strip is now the only ticker.
- `app/page.tsx` JSX/import only. ProofMarquee.tsx / ShineRail.tsx / CSS / `data/homeMedia.ts` left intact (ProofMarquee unmounted but not deleted). No copy/claim/asset/inventory/pricing/review/promo/Shopify/product changes. Build + QA clean.

**Trust + Text-Speed + Custom Hero Pass A (`98c56ff`) — completed, live-approved 2026-06-21:**
- desktop Header `TEXT 2T` WhatsApp link, `lg+` only (hidden below 1024, no tablet/mobile crowd)
- ProofContactZone `text 2T` now a real WhatsApp link (`14124524343`)
- new claim-safe transparency line in ProofContactZone: "Ask before you buy. Material and stone details are confirmed per piece — gold or silver, diamond or moissanite."
- CustomBuildFlow upload confidence line: "Your logo, photo, or sketch stays yours. We review it, then quote."
- CustomHero desktop right-side CSS-only lit-case/vitrine visual upgrade (`lg+`, static, reduced-motion safe; gold corner brackets, diamond outlines, ice catch-light, `LOGO · PHOTO · NAME · SKETCH`, `SEND → REVIEW → QUOTE`)
- No new assets, no fake proof/products/pricing/inventory/promos, no Shopify. Build clean, QA clean (desktop 1280/1024, mobile 390, header 768–1024, no horizontal scroll, all WA links `14124524343`).

**Homepage De-Clutter Pass 1 (`c24fd27`):** Reduced product-flow noise on homepage —
- removed PICK THE PIECE material/stone row
- removed discovery strip nav block
- removed pb-custom-band interrupt block
- removed unused pb-custom-band CSS

**Current next phase:** SocialTeaser tightening/upgrade is a possible separate future pass — do NOT implement until separately planned and approved. Known old untracked files remain intentionally untouched.

**Social feed feasibility conclusion (2026-06-03):**
- Phase 1 = manual curated cards in SocialTeaser left canvas (build when 2T provides real still frames + post URLs)
- Do NOT build Instagram/TikTok API yet (requires developer apps + app review)
- Feasibility plan: `docs/superpowers/plans/2026-06-03-social-feed-feasibility.md`

**Current homepage section order (Midnight Icebox - Phase B2-safe, commit `992a4ca`):**

1. Hero - full-bleed campaign, BUILT TO HIT., BANG. gold brand stamp, dual CTAs: SHOP THE PIECES + BUILD CUSTOM; existing video remains unchanged, poster attribute retained, reduced-motion users get poster fallback with video hidden
2. ProofMarquee — CSS-only animated trust strip, gold borders
3. PICK THE PIECE — stronger vitrine gateway, anchor row (GRILLZ dominant), TileGlareController (3D cursor tilt/glare on anchor tiles, desktop only); secondary tiles collapse to text-only on mobile. (Material/stone row and discovery strip removed in De-Clutter Pass 1 `c24fd27`)
4. ShineDirectionBand — METAL: GOLD · SILVER / 925 Sterling Silver — STONE: DIAMONDS · MOISSANITE / D-color VVS Moissanite; section-reveal on scroll
5. Promo strip — "ASK WHAT'S RUNNING NOW · CUSTOM PIECES BUILT HERE · DETAILS CONFIRMED PER PIECE" — fully claim-safe
6. ShineRail - seamless auto-scrolling category carousel; first 8 cards are clickable links; duplicate rail cards are aria-hidden/non-link duplicates; hover/focus pauses animation; GRILLZ/WATCHES/CHAINS/PENDANTS/CUSTOM use demo images; RINGS/BRACELETS/EARRINGS use CSS placeholders
7. Custom lane — YOUR LOGO. YOUR NAME. YOUR PIECE., demo sketch+pendant image, keyword chips, NO DEPOSIT TO START · WE QUOTE FIRST
8. ProofContactZone — stat ledger: 25 YEARS (animated countUp on scroll entry) / 332 FIFTH AVE (static); BANG. signature; Pittsburgh proof only — social channel rows removed in Pass 4C
9. SocialTeaser — TAP IN WITH 2T.; reel thumbnail renders (2t-demo-social-thumbnail-01.png); platform icon cluster left; channel-map rows right (TikTok/Instagram/WhatsApp real links); scroll-reveal on entry
10. FinalCTABar — MAKE IT HIT. / START THE PIECE → + TEXT US →; scroll-reveal on entry

- Header logo: `2t-logo-wide-transparent.png` — numeric width/height, TODO for final SVG/2x
- Footer logo: `2t-logo-full-black-bg.png` — installed
- Address, phone, WhatsApp, Instagram, TikTok, Acima: all wired in Footer
- Hero video: `public/assets/hero-loop-demo.mp4` remains unchanged; `preload="metadata"` and poster attribute retained; reduced-motion fallback uses the poster and hides the video layer

**Custom Flow: user-approved and live on Vercel.**

CRO pass and selector grouping committed (commits `60c7d06`, `2303850`). P0/P1 mobile lead-flow simplification committed (`38d814e`) and live QA clean. P2 build recap + dynamic WhatsApp + multi-upload committed (`0633c9e`) and QA clean. Resend lead capture verified live. All 9 fields including metal/stone direction and file attachments confirmed working; Custom P2 supports up to 3 uploads, image thumbnails, and oversized-file WhatsApp fallback.

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

**Pass 3A–3C + Homepage SHOP Boost committed (2026-06-02):**

- `b8a9688` copy: pass 3a homepage copy sharpening
- `d4fa052` copy: pass 3b-a grillz and pendants copy sharpening
- `619cd6a` fix: simplify pendants page
- `5e6cfee` fix: simplify grillz hero
- `4d566bb` fix: clean chains bottom and sharpen watches copy
- `6cedd28` fix: clean rings bracelets earrings category ctas
- `b58c9a0` feat: add claim-safe discovery collections (Most Asked About / Ask What Just Landed)
- `0b5252e` feat: boost homepage shop discovery — stronger PICK THE PIECE, discovery strip, BestSellersStrip, hero CTA SHOP THE PIECES, All Collections in Shop dropdown, /collections layout improved

**SEO foundation + social docs (2026-06-03):**

- `1b36f09` feat: add seo foundation metadata sitemap robots
- `eb3fcd9` docs: document production site url env
- `c9e8817` docs: sync tooling and social feed strategy
- `cfefe89` docs: add asset request social phase 1 plan

**Pass 4A — sitewide visual polish + claim safety (2026-06-03):**

- `f8101dd` fix: polish site visuals and claim-safe promo bar
  - PromoBar "20% OFF YOUR FIRST CUSTOM ORDER" removed — replaced with claim-safe copy
  - Secondary tiles (RINGS/BRACELETS/EARRINGS) — mi-gleam animation added
  - BestSellersStrip — mobile CTA visible at 55% opacity; card-enter stagger animation
  - SocialTeaser left canvas — platform icon cluster (TikTok/Instagram/WhatsApp); WA pulse animation
  - BANG. signature added to ProofContactZone and About page
  - Hover states (style-card-hover) on Grillz, Watches, Chains, Pendants, Collections hub cards
  - cat-grid-link hover upgraded (gold outline + translateY)
  - Screenshot gitignore patterns added (qa-*.jpeg, audit-*.jpeg)

**Pass 4C — homepage motion + category rail (2026-06-03):**

- `70fcdd6` feat: add pass 4c homepage motion and category rail
  - `ShineRail.tsx` — new seamless category carousel; 8 categories × 2 duplicated = 16 cards × 220px; `translateX(-1760px)` loop; GRILLZ/WATCHES/CHAINS/PENDANTS/CUSTOM with demo images; RINGS/BRACELETS/EARRINGS CSS gradient placeholders
  - `TileGlareController.tsx` — new client component; cursor-tracked 3D tilt + glare on GRILLZ/WATCHES/CHAINS anchor tiles; desktop only
  - `BestSellersStrip.tsx` — deleted; replaced by ShineRail
  - Oversized BANG entrance animation removed from hero; BANG. brand stamp stays as static element
  - Custom vitrine background: `2t-demo-custom-before-after-01.png` committed and wired
  - SocialTeaser reel: `2t-demo-social-thumbnail-01.png` committed and wired
  - ProofContactZone: duplicate social channel rows removed — Pittsburgh proof only
  - SocialTeaser: now owns all TikTok/Instagram/WhatsApp channel rows
  - PICK THE PIECE text readability improved; secondary tiles collapse to text-only on mobile
  - `app/globals.css` and `app/page.tsx` updated accordingly
  - Live QA passed: https://2finla.vercel.app — zero console errors, zero 404s, no horizontal scroll

**Pass 4B — interactive homepage motion (2026-06-03):**

- `9849b81` feat: add interactive homepage motion pass
  - `ScrollRevealController.tsx` — new client component; IntersectionObserver attaches `.is-revealed` to `.section-reveal` / `[class*="tile-reveal-"]` elements on scroll entry; threshold 0.12, fires once; app/page.tsx stays a Server Component
  - `StickyConversionBar.tsx` — new client component; desktop/tablet only (hidden on mobile, `display:none` at ≤767px); `position:fixed bottom:0 z-index:30`; sentinel-triggered IntersectionObserver; sessionStorage dismiss; WA link `wa.me/14124524343`
  - `ProofCounterTrigger.tsx` — new client component; rAF countUp on "25" in "25 YEARS" only; "332 FIFTH AVE" stays static; fires once per session
  - Scroll reveals on `ShineDirectionBand`, `ProofContactZone`, `SocialTeaser`, `FinalCTABar` (class `section-reveal`)
  - Anchor tile stagger: `tile-reveal-0/1/2` on GRILLZ/WATCHES/CHAINS — 0/80/160ms delays; `translateY(18px)` → none
  - Secondary tile stagger: `tile-reveal-s0/1/2/3` on RINGS/BRACELETS/EARRINGS + 4th — 0/60/120/180ms delays; `scale(0.97)` → 1
  - `BestSellersStrip` — `bss-snap-container` / `bss-snap-card` classes added; mobile `scroll-snap-type: x mandatory` infrastructure in place (no visual effect at current 2-col card widths)
  - `ShineDirectionBand` chips — `.sdb-chip` hover tilt: `perspective(400px) rotateX(-4deg) rotateY(3deg) scale(1.04)` desktop only
  - `FinalCTABar` and `SocialTeaser` added to app/page.tsx (were missing — now rendered in correct section order)
  - All new CSS covered by `prefers-reduced-motion: reduce`; z-index: StickyConversionBar=30, FloatingWhatsAppButton=40 (no conflict)
  - No new npm packages; zero TypeScript errors; app/page.tsx has no hooks

**Phase B2-safe - homepage asset-ready media pipeline (2026-06-10):**

- Commit `992a4ca - feat: prepare homepage media pipeline` completed, pushed, and live checked by Yaniv.
- Homepage media paths centralized in `data/homeMedia.ts`.
- Safe homepage raw `<img>` usage migrated to `next/image` where appropriate.
- Hero video remains unchanged with poster attribute retained; reduced-motion users get poster fallback and the video layer is hidden.
- ShineDirectionBand micro text made more readable.
- First 8 ShineRail cards are clickable links; duplicate rail cards are aria-hidden/non-link duplicates; ShineRail pauses on hover/focus.
- No asset resizing, moving, deleting, renaming, or re-exporting was done.
- No copy/claim changes. No Shopify work.
- Codex browser QA was limited by sandbox/browser failures; Yaniv manually checked the live Vercel homepage after deploy and confirmed it looks good.
- B2-safe is closed.
**Working tree — do not stage without explicit approval:**
- `docs/superpowers/plans/` and `docs/superpowers/specs/` — planning/spec notes
- `public/assets/demo/phase3a/` — demo PNG assets (includes Pass 4C additions: `2t-demo-custom-before-after-01.png`, `2t-demo-social-thumbnail-01.png`)
- `public/assets/logo-to-use.png` — replacement logo candidate, not yet approved for wiring
- QA screenshots (qa-*.jpeg) in project root — gitignored, safe to leave
- Known untracked files remain intentionally untouched unless the user explicitly approves handling them

**Pass 5C Copy/CRO — completed (commit `5da57da`):** Implemented, QA passed, committed, and pushed.

**Interface Design system — added (commit `553834b`):** `.interface-design/system.md` created. Contains the extracted 2T visual system: type stack, color tokens (surface elevation + four-level gold scale), depth strategy, spacing, easing, motion system, CTA variants, card rules, eyebrow pattern, shine/atmosphere rules, BANG. signature, section structure rules, and anti-generic checklist. Use this file before any future UI/visual work.

**Next queued work:** SocialTeaser tightening/upgrade — possible separate future pass (plan + approve before any implementation). Then continue Visual/UI pass planning using `.interface-design/system.md` as the governing system document. No implementation yet beyond what is committed. Candidate work defined in the interface-design audit plan (P0: eyebrow standardization, gold token consolidation, card padding system, MobileCtaBar route audit; P1: category cross-sell rail, About page proof-ledger rebuild, grain-field extension, TileGlare expansion; P2: surface token system, Watches vitrine, category card stagger). Motion add-on ideas documented in audit (Hero Video Vignette, BANG. Sparkle Burst, Card Border Edge Glint as top P0 candidates).
No random CSS/layout cleanup unless QA finds a real issue.

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

**Approved creative direction:** "The Lit Case at Night."

Moses The Jeweler is energy/reference only, not a source to copy. Translate the inspiration into 2T-owned Pittsburgh street-luxury: cinematic product macros, black glass, velvet, hard light, chrome/ice highlights, gold accents, real-store energy, social-first pacing, handoff moments, and real Pittsburgh proof.

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

Moses NYC — energy/reference direction only: cinematic macros, real-store energy, social-first pacing, shine, movement, Pittsburgh street-luxury. Do not copy Moses assets, copy, layout, restrained tone, celebrity proof, Knicks/NBA/MSG references, gestures, captions, or social assets. 2T must be louder, shinier, more custom-first, and more hip-hop than Moses.

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
