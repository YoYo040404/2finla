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
- Homepage reset — product store + custom lane (commit 8fd4497)
- Grillz landing page `/grillz` (commit 200e5a1)
- Watches landing page `/watches` (commit 200e5a1)
- Layout components: PromoBar, Header, Footer, MobileCtaBar
- Navigation data
- Design tokens
- Claim-safe copy
- SocialTeaser inline SVG icon polish (Instagram / TikTok / WhatsApp)
- Temporary logos installed (header + footer)
- Contact info wired (address, phone, WhatsApp, Instagram, TikTok, Acima)
- Hero video slot wired; current demo MP4 exists, poster attribute retained, reduced-motion poster fallback added in B2-safe
- **Homepage Midnight Icebox Pass 3** (commit af7f20d — 2026-05-25)
  - Anton / Archivo / JetBrains Mono / Cormorant Garamond font system
  - Obsidian / bone / gold `#C9A449` / ice palette
  - Full-bleed campaign hero, BANG. as borderless gold brand text stamp
  - Shop Jewelry: vitrine display-case gateway, anchor row 1.4fr/1fr/1fr
  - Pittsburgh: stat ledger 25 / 5TH AVE with gold left-border rules
  - Social: channel-map rows, WhatsApp gold-bordered
  - No fake products, claims, or inventory introduced
- **Pittsburgh BANG homepage merged into main** (PR #1 — commit 39a3b70 — 2026-05-25)
- **Repo QA cleanup** — screenshot artifacts gitignored, QA utility added (commit 854c15e)
- **`/custom` Pass A simplification** — repetition removed, page shorter, HowItWorks and WorkPlaceholder unmounted from /custom flow, component files preserved (commit 03991f5)
- **`/grillz` and `/watches` read-only QA** — both structurally acceptable for demo; no build blocker
- **`/watches` duplicate hero copy fixed** (commit c485b83)
- **Material & Stone direction system — homepage** (commits a4f5298 → a07c2cf → e674bee → a5e61ee → 0e85b35):
  - ShineDirectionBand live: METAL GOLD/SILVER (925 Sterling Silver) · STONE DIAMONDS/MOISSANITE (D-color VVS Moissanite) · Details confirmed per piece
  - Product Wall cue under PICK THE PIECE: "Gold · Silver · Diamonds · Moissanite / Pick the piece. Then pick the shine."
  - Material and stone direction chips added to shop categories
  - Architecture, CRO, and VOC audit docs committed
  - No per-tile material chips. No claim-safety regressions.

- **`/custom` CRO pass** (commit 60c7d06 — 2026-05-31): lead funnel tightened, metalDirection + stoneDirection wired end-to-end
- **Sitewide contrast + selector grouping + mobile CTA clearance** (commit 2303850 — 2026-05-31): THE BUILD as 3 numbered decision blocks, 10 body contrast fixes, MobileCtaBar `padding-bottom` clearance
- **Resend lead capture verified live** (2026-05-31): all 9 fields confirmed in email (piece type, metal direction, stone direction, name, phone, budget, idea, file, timestamp); file attachments working; success screen gated on Resend response; WhatsApp fallback on error; env vars server-side only
- **Vercel live**: https://2finla.vercel.app
- **Homepage flash system polish** (commits `b8edf8f`, `6af213a`) — CSS-only flash, hero BANG impact, icy product title flash
- **Chains mini-catalog** (commit `744d2b3`) — six style cards, SHOP language, SVG fallback
- **SHOP vs CUSTOM rule document** (commit `294421e`)
- **Gated proof slots** (commit `821efa9`) — chains and pendants proof slot structure
- **Mini catalog for shop categories** (commit `dc33c16`) — Bracelets / Rings / Earrings, shared template, six cards per category
- **Header active nav states cleanup** (commit `4f3097f`) — Shop / Pendants / Grillz / Watches / Custom / About all correct
- **Pendants split — compact custom selector** (commit `4b6c067`) — SHOP section + custom pendant selector; Pendants split between SHOP and CUSTOM
- **Watches high-ticket inquiry page reworked** (commit `77799de`) — `app/watches/page.tsx`; Rolex-aware, non-authorized-dealer disclosure, image-ready
- **Grillz fit-first page reworked** (commit `7e87bce`) — `app/grillz/page.tsx`; fit-first, six style cards, no dental/medical/fit-guarantee claims
- **Docs sync** (commit `4fc8e3a`) — project state synced after category pages
- **Mobile readability + route CTAs** (commit `5cdb34e`) — improved mobile readability, route CTA fixes across category pages
- **Typography and contrast system refined** (commit `3dcb65d`) — token corrections sitewide
- **Static direction chips made non-interactive** (commit `7567917`) — material/stone spec labels rendered as read-only, not interactive buttons

**Post-Pass-2B QA status (2026-06-02): CLEAN**
Routes: /, /collections/chains, /collections/pendants, /custom, /watches, /grillz, /about. Mobile 390px ✅. Desktop 1280px key routes ✅. No horizontal scroll ✅. Sticky mobile CTA clears content ✅. Claim-safety grep clean ✅. Build passed ✅.

- **Pass 3A homepage copy sharpening** (commit `b8a9688`)
- **Pass 3B-A grillz + pendants copy sharpening; pendants simplified; grillz hero simplified** (commits `d4fa052`, `619cd6a`, `5e6cfee`)
- **Pass 3B-B chains + watches copy; rings / bracelets / earrings CTAs cleaned** (commits `4d566bb`, `6cedd28`)
- **Pass 3C — claim-safe discovery collections** (commit `b58c9a0`) — Most Asked About / Ask What Just Landed; /collections layout improved; Shop dropdown includes All Collections
- **Homepage SHOP Boost** (commit `0b5252e`) — stronger PICK THE PIECE, discovery strip, BestSellersStrip wired, hero CTA SHOP THE PIECES, /collections layout improved
- **SEO foundation + social docs** (commits `1b36f09`, `eb3fcd9`, `c9e8817`, `cfefe89`)
- **Pass 4A — sitewide visual polish + claim safety** (commit `f8101dd`, 2026-06-03):
  - PromoBar "20% OFF YOUR FIRST CUSTOM ORDER" removed — replaced with claim-safe copy
  - Secondary tiles (RINGS/BRACELETS/EARRINGS) — mi-gleam diagonal light sweep added
  - BestSellersStrip — mobile CTA visible by default (0.55 opacity); card-enter stagger animation
  - SocialTeaser left canvas — platform icon vitrine (TikTok/Instagram/WA cluster + WA pulse)
  - BANG. signature added to ProofContactZone and About page
  - Hover states on all category style cards (Grillz, Watches, Chains, Pendants, Collections hub)
  - Screenshot gitignore patterns added
- **Pass 4B — interactive homepage motion** (commit `9849b81`, 2026-06-03):
  - `ScrollRevealController.tsx` — client component; IntersectionObserver scroll reveals on ShineDirectionBand / ProofContactZone / SocialTeaser / FinalCTABar; app/page.tsx stays Server Component
  - Anchor tile stagger: `tile-reveal-0/1/2` on GRILLZ/WATCHES/CHAINS (0/80/160ms, translateY 18px → none)
  - Secondary tile stagger: `tile-reveal-s0/1/2/3` on RINGS/BRACELETS/EARRINGS (0/60/120/180ms, scale 0.97 → 1)
  - `StickyConversionBar.tsx` — desktop/tablet WA CTA bar; `display:none` on mobile; z-index 30; sessionStorage dismiss
  - `ProofCounterTrigger.tsx` — rAF countUp on "25" in "25 YEARS" on scroll entry; "332 FIFTH AVE" static
  - ShineDirectionBand chips — CSS perspective hover tilt (desktop only, prefers-reduced-motion covered)
  - BestSellersStrip scroll-snap infrastructure (`bss-snap-container` / `bss-snap-card`; no layout change)
  - FinalCTABar + SocialTeaser wired into app/page.tsx homepage section order
  - No new npm packages; zero TypeScript errors
- **Pass 4C — homepage motion + category rail** (commit `70fcdd6`, 2026-06-03):
  - `ShineRail.tsx` — new seamless category carousel; 8 categories × 2 = 16 cards × 220px; `translateX(-1760px)` loop; GRILLZ/WATCHES/CHAINS/PENDANTS/CUSTOM with demo images; RINGS/BRACELETS/EARRINGS CSS gradient placeholders
  - `TileGlareController.tsx` — cursor 3D tilt + glare on GRILLZ/WATCHES/CHAINS anchor tiles; desktop only
  - `BestSellersStrip.tsx` — deleted
  - Oversized BANG entrance animation removed; BANG. stamp stays as static brand element
  - Custom vitrine background wired (`2t-demo-custom-before-after-01.png`)
  - SocialTeaser reel thumbnail wired (`2t-demo-social-thumbnail-01.png`)
  - ProofContactZone: duplicate social channel rows removed — Pittsburgh proof only
  - SocialTeaser: now owns all TikTok/Instagram/WhatsApp channel rows
  - Mobile secondary tiles collapse to text-only cards
  - Live QA passed — zero console errors, zero 404s, no horizontal scroll
- **Phase A Motion & Light Polish** (commit `8d43222`) — completed, committed, pushed, and live QA clean
- **Custom P0/P1 mobile lead-flow simplification** (commit `38d814e`) — completed, committed, pushed, and live QA clean
- **Custom P2 build recap + dynamic WhatsApp + multi-upload** (commit `0633c9e`) — completed, committed, pushed, and QA clean
- **Manual mobile QA** — confirmed clean after Custom P2
- **Phase B2-safe homepage media pipeline** (commit `992a4ca`, 2026-06-10) - completed, committed, pushed, and live checked by Yaniv. Media paths centralized in `data/homeMedia.ts`; safe homepage raw image usage migrated to `next/image`; hero video unchanged with poster/reduced-motion fallback; ShineDirectionBand micro text improved; ShineRail links/pause/hidden duplicates added; no asset edits, copy changes, claim changes, or Shopify work.
- **Pass 5C Copy/CRO** (commit `5da57da`, 2026-06-18) — implemented, QA passed, committed, and pushed.
- **Interface Design system** (commit `553834b`, 2026-06-18) — `.interface-design/system.md` created. Governing file for all future UI/visual work. Type stack, four-level gold token scale, surface elevation tokens, depth strategy, spacing, easing, motion system, CTA variants, card rules, eyebrow pattern, shine/atmosphere, BANG. signature, anti-generic checklist.
- **Midnight Flash visual polish** (commit `e1caaba`, 2026-06-21) — pushed.
- **Visual Pass 1B — standardize visual system details** (commit `a785b85`, 2026-06-21) — pushed.
- **Homepage De-Clutter Pass 1** (commit `c24fd27`, 2026-06-21) — reduced homepage product-flow noise: removed PICK THE PIECE material/stone row, discovery strip nav block, pb-custom-band interrupt block, and unused pb-custom-band CSS. Pushed.
- **Trust + Text-Speed + Custom Hero Pass A** (commit `98c56ff`, 2026-06-21) — live-approved by Yaniv. Desktop Header `TEXT 2T` WhatsApp link (`lg+` only); ProofContactZone `text 2T` linked to WhatsApp + new claim-safe material/stone transparency line; CustomBuildFlow upload confidence line ("Your logo, photo, or sketch stays yours. We review it, then quote."); CustomHero desktop right-side CSS-only lit-case/vitrine visual upgrade (`lg+`, static, reduced-motion safe). No new assets, no fake proof/products/pricing/inventory/promos, no Shopify. Build + QA clean. Pushed.

### WIP / Approval Pending ⚠️

- None currently. Pass 5C and interface design system are committed, pushed, and closed.

### Not Yet 🚫

- **Visual/UI pass — plan and approve first** — candidate work in `.interface-design/system.md` audit: P0 (eyebrow standardization, gold tokens, card padding, MobileCtaBar audit); P1 (category cross-sell rail, About page proof-ledger, grain-field extension, TileGlare expansion); P2 (surface token sitewide, Watches vitrine, category card stagger). No implementation until approved.
- **Docs / claim-safety maintenance** — as needed
- **Final QA after each implementation** — required
- **ShineRail real images** — wire RINGS/BRACELETS/EARRINGS cards when real product photos arrive
- Real asset/media replacement (hero footage, product shots, grillz/watches photos, store footage)
- SocialTeaser Phase 1: manual curated cards (build when 2T provides real @2tjewelers still frames + post URLs)
- Instagram oEmbed Read API / TikTok Display API dynamic feed (future — requires developer apps + app review — see feasibility plan)
- Production Resend sender domain (`leads@2tjewelers.com` or similar) — current `onboarding@resend.dev` is acceptable for testing
- Final logo SVG/2x/favicon
- Shopify recalibration
- SEO/schema (after core pages and claims are controlled)
- Material/stone SEO landing pages (build only when real inventory + assets + proof exists)
- Material/stone filtering on product/category pages (later, Shopify)
- Per-piece product badge layer: `[14K GOLD]` `[925 STERLING]` `[GRA VVS MOISSANITE]` `[NATURAL DIAMOND]` `[GIA CERT]` `[IN STOCK]` — build only with verified per-piece data

### Next Milestone 🎯

- **Pass B — homepage category de-dup / ShineRail decision** — plan and approve separately before any implementation. Do not implement Pass B yet.
- **Evaluate homepage after De-Clutter Pass 1 + Pass A** (`c24fd27`, `98c56ff`) — assess product flow before adding more motion or sections
- **Visual/UI pass — plan and approve** — use `.interface-design/system.md` as the governing system document before any implementation
- P0 candidates: eyebrow standardization sitewide, four gold tokens in `globals.css`, card padding to `1.25rem`/`1.5rem`, MobileCtaBar route audit
- P1 candidates: category cross-sell rail, About page proof-ledger rebuild, `.grain-field` extension, TileGlare on category cards
- Motion add-ons (top 3): Hero Video Vignette, BANG. Sparkle Burst on Entry, Card Border Edge Glint
- **Docs / claim-safety maintenance** as needed
- **Final QA after each implementation**
- **Keep asset shot list as production request direction** — cinematic macros, real-store proof, social-first pacing, shine, movement, Pittsburgh street-luxury, and custom process assets

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

## Visual Direction — Locked (2026-05-25)

**Approved creative direction:** "The Lit Case at Night."

Moses The Jeweler is energy/reference only, not a source to copy. Translate the inspiration into 2T-owned Pittsburgh street-luxury: cinematic product macros, black glass, velvet, hard light, chrome/ice highlights, gold accents, real-store energy, social-first pacing, handoff moments, and real Pittsburgh proof.

**Midnight Icebox — interpreted through hard hip-hop / hood street-luxury energy.**

Must feel: black, urban, hood/street, loud, flashy, bling-heavy, ice/diamond/gold shine, rapper/athlete/big-car energy, real Pittsburgh jeweler, product-dominant, shop-ready and custom-ready, high-visibility, direct and street-commercial.

Must NOT feel: quiet luxury, boutique jewelry, wedding jewelry, corporate, generic dark luxury, SaaS/spec-sheet UI, over-clean ecommerce, fake streetwear, parody AAVE, cheap nightclub flyer, NFT/Web3, fake AI jewelry brand.

**Open concern:** Real media (hero jewelry footage, product shots, store footage) will be the single biggest lever to reach the hard bling/shine energy. CSS vitrines are placeholder. Until real assets arrive, deeper visual reset research may be needed.

---

## Benchmarks

### GLD.com
Use for: ecommerce behavior, category depth, product density, mobile shopping flow.
Do not copy: assets, copy, claims, discounts, celebrity proof, or trademarks.

### Moses NYC
Use for: energy/reference direction only — cinematic macros, real-store energy, social-first pacing, shine, movement, and Pittsburgh street-luxury translation.
Do not copy: assets, videos, copy, product names, claims, layout exactly, restrained tone, celebrity proof, Knicks/NBA/MSG references, gestures, captions, or social assets.
2T must be louder, shinier, more custom-first, and more hip-hop than Moses.

---

## Homepage Master Direction

`docs/2t-homepage-master-direction.md` is the **controlling document** for all homepage, header, and visual-language work.

**Do not start SEO implementation before homepage visual/language direction is applied.**

Approved order for the next homepage/header pass:

1. Register homepage master direction ← current task
2. Plan homepage/header implementation pass
3. User approves the plan
4. Implement controlled homepage visual/action pass
5. QA (Playwright screenshots: 390px + 1280px, claim-safety scan)
6. Only then: SEO/metadata/internal-linking pass

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

### Phase 2b — Homepage Reset ✅ Committed (8fd4497)

Homepage reset to product store + custom lane. NOT custom-only.

| Section | Component | Notes |
|---------|-----------|-------|
| Hero — BUILT TO HIT. + BANG! | inline `app/page.tsx` | Dual CTAs: SHOP JEWELRY + BUILD CUSTOM →. Video slot wired. Sparkle hits. |
| ProofMarquee | `components/home/ProofMarquee.tsx` | CSS marquee, trust facts, accessible |
| SHOP JEWELRY | inline `app/page.tsx` | 8-card gateway: Grillz, Watches, Chains, Rings, Bracelets, Pendants, Earrings, Custom. Priority order. SVG silhouettes. |
| CUSTOM BUILT HERE | inline `app/page.tsx` | Compressed fast lane. Logo / Name / Photo / Grillz / Watch direction. BUILD CUSTOM → + TEXT 2T →. Keyword chips. |
| PittsburghStory (REAL STORE. REAL WORK.) | `components/home/PittsburghStory.tsx` | Brand story, dual CTAs |
| SocialTeaser (TAP IN WITH 2T.) | `components/home/SocialTeaser.tsx` | Inline SVG icons, real links only |

Removed: PICK YOUR LANE, BestSellersStrip, old Inquiry Lanes, Material Preview, FinalCTABar, old Custom Entry Block, old Trust Strip.

### Phase 2c — Custom Page Revision ✅ Complete

- Simplified to compact funnel flow (commit 84af600 / 03991f5)
- CRO pass — funnel tightened, metalDirection + stoneDirection wired end-to-end (commit 60c7d06)
- Sitewide contrast + THE BUILD numbered decision blocks + mobile CTA clearance (commit 2303850)
- User-approved and live on Vercel

### Phase 2d — Custom Visual Approval Gate ✅ Complete

- Visual QA passed at 390px and 1280px
- User approved /custom as milestone
- Lead capture verified live via Resend

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
- source: `public/assets/hero-loop-demo.mp4`
- Phase B2-safe retained the existing video and poster attribute; reduced-motion users get a poster fallback with the video layer hidden

Still needed: real footage at `public/assets/hero-loop-demo.mp4`  
Specs: 8–10 seconds, MP4, muted, loopable, 16:9/21:9 desktop, 9:16 mobile backup if possible.

### Phase 5 — Watches / Grillz Prototype Pages ✅ Complete

- `/grillz` — fully reworked and QA clean.
- `/watches` — fully reworked and QA clean.
- Do not redesign either page unless specifically approved.

### Phase 6 — Form Backend + Upload Handling ✅ Complete

- Resend API route live: `app/api/custom-request/route.ts`
- All 9 fields delivered: piece type, metal direction, stone direction, name, phone, budget, idea, file attachment (up to 5 MB), timestamp
- File attachments confirmed working
- Server-side env vars only (`RESEND_API_KEY`, `LEAD_EMAIL_TO`, `LEAD_EMAIL_FROM`) — gitignored, no browser exposure
- Verified live 2026-05-31
- **Remaining:** production sender domain (`leads@2tjewelers.com` or similar) — configure before real traffic

### Phase 7 — Analytics Setup

Only after user approves:
- analytics (GA4 or similar)
- Meta Pixel
- TikTok Pixel

### Phase 8 — Content & Copy Pass

- real custom gallery/assets
- copywriting pass with final brand voice
- no fake products, reviews, or UGC
- **BANG. brand voice:** About, Store, and Social sections use BANG. as real owned brand signature — @2tjewelers social handle only
- **Real store footage:** real downtown Pittsburgh store images/video replace all placeholder slots
- **Real social clips:** real TikTok/Instagram content replaces any placeholder social cards
- **Tenure copy:** approved wording is **"25 years"** — confirmed by user 2026-05-31. Do not use any other formulation.
- ~~Effi integration~~ — removed from brand direction 2026-05-18. Do not reference in copy, code comments, or planning prompts.

### Phase 5A — Weekly Promo Module Elevation ✅ Complete (35eda1f)

Weekly promo module elevated structurally. Component committed. Copy still placeholder-level (Pass 5C will upgrade it).

### Phase 5B — Competitor-Backed Copy / Promo / Hero Research ✅ Complete (2026-05-23)

Research-only pass. No code written. No files modified during research.

- 13 brands deep-dived via live page scrape (GLD, Icebox, Johnny Dang, TraxNYC, King Ice, Frost NYC, Aporro, IceCartel, HelloIce, JAXXON, Avianne, Gold Presidents, ItsHot, Moses NYC) + 11 Tier-2 sources including all local Pittsburgh competitors
- Key findings: "BUILT TO HIT." is the strongest hero in the competitive set; Pittsburgh is 2T's uncontested asymmetric advantage (zero local hip-hop/street-luxury competitors); BANG. deployment model confirmed (JAXXON "OUTLAST. OUTSHINE.™" as functional parallel); JAXXON flash sale module is the strongest promo copy model; 3-state promo system defined; category CTA logic confirmed correct; VOC phrase map (use/avoid) documented; verified claims risk table defined
- Full research registered at: `docs/2t-pass5b-competitor-backed-copy-research.md`

### Phase 5C — Copy Sharpening + Promo Upgrade ⚠️ PENDING USER APPROVAL

Do not start until user explicitly approves.

**Scope — 5 files only:**
- `app/page.tsx`
- `components/home/ProofMarquee.tsx`
- `components/home/WeeklyPromo.tsx`
- `components/home/PittsburghStory.tsx`
- `components/home/SocialTeaser.tsx`

**Changes:**
1. Hero secondary copy (Option D recommended: "Grillz. Watches. Chains. Pendants. Custom. / Real Pittsburgh jeweler. Text 2T.")
2. BANG. stamp — small gold all-caps mark near hero headline, not replacing it
3. Promo module — 3-state copy system (State A: no promo / State B: category signal / State C: active verified offer); WhatsApp prefill CTA; category badge
4. Category gateway cards — one-line descriptor per card (8 cards × 1 line)
5. Social cards — TikTok: "Watch the build. @2tjewelers"; WhatsApp: "Text before you buy. Ask anything."
6. Pittsburgh block — tighten to "REAL PITTSBURGH STORE. OVER 30 YEARS. TEXT OR COME THROUGH."

**What stays exactly as-is:** "BUILT TO HIT." headline, "SHOP JEWELRY" / "BUILD CUSTOM →" CTAs, section order, layout, grid, spacing, visual system, no new verified claims.

**Full spec:** `docs/2t-pass5b-competitor-backed-copy-research.md` Section 11

### Phase 8b — Verified Claim Architecture + Promotions (Planned)

2T Jewelers sells real gold, real diamonds, moissanite, silver, and authenticated watches. Strong verified product claims are a commercial asset and must be built into the product architecture.

**Verified claim categories to build into the site:**
- Real diamonds / Natural diamonds / Lab-grown diamonds
- VVS / VS / SI clarity grades
- GIA certificates
- Solid gold / karat labels
- 925 sterling silver
- Factory-set diamonds (watches)
- Authenticated watches (condition and source)
- In stock / available now
- Free shipping (when written policy exists)
- Lifetime warranty (when written policy exists)

**Architecture to build:**
- Product card badge layer: `[14K GOLD]` `[VVS MOISSANITE]` `[REAL DIAMOND]` `[GIA CERT]` `[IN STOCK]`
- PDP spec block: material / stone type / grade / carat / karat / condition / availability / warranty / cert
- Collection-level filters: by material (Gold / Silver) and stone (Diamond / Moissanite)
- ProofMarquee update: add verified policy-level claims as they are confirmed (free shipping, warranty)
- Promo module State C: active offer with material/stone badge on featured product

**Promotional features:**
- Special of the Week — featured product module with verified product badge
- Sale strip or promo bar with specific verified offer
- Percentage-off campaign banners (when active with confirmed terms)
- Bundle or BOGO-style campaign modules
- Seasonal campaign modules
- Offer modules on collection/category pages

The rule: verify at product, collection, or policy level — then publish prominently. Do not suppress strong claims when true. See `CLAIM_SAFETY.md` for verification gates.

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

## Approved Roadmap Order (updated 2026-05-31)

1. ✅ Homepage reset — product store + custom lane (8fd4497)
2. ✅ Grillz and Watches pages committed (200e5a1)
3. ✅ MD sync — documentation alignment pass
4. ✅ Pass 5A — Weekly promo module elevated structurally (35eda1f)
5. ✅ Pass 5B — Competitor-backed copy/promo/hero research complete (2026-05-23)
6. ✅ **Homepage Midnight Icebox Pass 3** — visual direction applied and committed (af7f20d, 2026-05-25)
7. ✅ **Pittsburgh BANG homepage** — merged into main via PR #1 (39a3b70, 2026-05-25)
8. ✅ **Repo QA cleanup** — screenshot artifacts gitignored, QA utility added (854c15e)
9. ✅ **`/custom` Pass A simplification** — repetition removed, page shorter (03991f5)
10. ✅ **`/grillz` and `/watches` read-only QA** — structurally acceptable for demo
11. ✅ **`/watches` duplicate hero copy fix** (c485b83)
12. ✅ **Material & Stone direction system — docs + homepage + categories** (a4f5298 → a07c2cf → e674bee → a5e61ee → 0e85b35)
13. ✅ **Homepage visual depth and shine refinement** (5f4afd7, f29c856)
14. ✅ **`/custom` CRO pass** — funnel tightened, metalDirection + stoneDirection wired (60c7d06, 2026-05-31)
15. ✅ **Sitewide contrast + selector grouping + mobile CTA clearance** — THE BUILD numbered blocks, 10 contrast fixes, MobileCtaBar clearance (2303850, 2026-05-31)
16. ✅ **Resend lead capture verified live** — all 9 fields, file attachments, server-side env vars (2026-05-31)
17. ✅ **Vercel deploy** — live at https://2finla.vercel.app
18. ✅ **Homepage flash system polish** — CSS-only flash, BANG hero impact (commits `b8edf8f`, `6af213a`)
19. ✅ **Chains mini-catalog** — six style cards, SHOP language (commit `744d2b3`)
20. ✅ **SHOP vs CUSTOM commerce rule** — documented (commit `294421e`)
21. ✅ **Gated proof slots** — chains and pendants (commit `821efa9`)
22. ✅ **Mini catalog for shop categories** — Bracelets / Rings / Earrings (commit `dc33c16`)
23. ✅ **Header active nav states cleanup** (commit `4f3097f`)
24. ✅ **Pendants compact custom selector** — SHOP/CUSTOM split (commit `4b6c067`)
25. ✅ **Watches high-ticket inquiry page reworked** (commit `77799de`)
26. ✅ **Grillz fit-first page reworked** (commit `7e87bce`)
27. ✅ **Docs sync** (commit `4fc8e3a`)
28. ✅ **Mobile readability + route CTAs** (commit `5cdb34e`)
29. ✅ **Typography and contrast system refined** (commit `3dcb65d`)
30. ✅ **Static direction chips non-interactive** (commit `7567917`)
31. ✅ **Post-Pass-2B QA** — all routes clean, mobile 390px, desktop 1280px, claim-safety grep, build passed
32. ✅ **Pass 3A** — homepage copy sharpening (commit `b8a9688`)
33. ✅ **Pass 3B** — grillz + pendants copy, pendants simplified, grillz hero simplified, chains + watches copy, rings/bracelets/earrings CTAs (commits `d4fa052`, `619cd6a`, `5e6cfee`, `4d566bb`, `6cedd28`)
34. ✅ **Pass 3C** — claim-safe discovery collections, /collections layout improved, All Collections in Shop dropdown (commit `b58c9a0`)
35. ✅ **Homepage SHOP Boost** — stronger PICK THE PIECE, discovery strip, BestSellersStrip, hero CTA SHOP THE PIECES (commit `0b5252e`)
36. ✅ **Docs sync** — 2026-06-02
37. ✅ **SEO foundation metadata** — sitemap, robots, generateMetadata (commit `1b36f09`)
38. ✅ **Production URL env documented** (commit `eb3fcd9`)
39. ✅ **TikTok/Instagram feed feasibility assessed** — Phase 1 = manual curated cards; dynamic API = future (2026-06-03). Plan: `docs/superpowers/plans/2026-06-03-social-feed-feasibility.md`
40. ✅ **Pass 4A — sitewide visual polish + claim safety** (commit `f8101dd`, 2026-06-03)
41. ✅ **Pass 4B — interactive homepage motion** (commit `9849b81`, 2026-06-03) — ScrollRevealController, scroll reveals, tile stagger, StickyConversionBar, ProofContactZone counter, chip tilt, FinalCTABar + SocialTeaser wired
42. ✅ **Pass 4C — homepage motion + category rail** (commit `70fcdd6`, 2026-06-03) — ShineRail seamless carousel, TileGlareController, BestSellersStrip removed, BANG entrance animation removed, custom vitrine + SocialTeaser demo assets wired, ProofContactZone Pittsburgh-only, mobile secondary tile collapse. Live QA passed.
43. ✅ **Phase A Motion & Light Polish** (commit `8d43222`) — completed, pushed, live QA clean
44. ✅ **Custom P0/P1 mobile lead-flow simplification** (commit `38d814e`) — completed, pushed, live QA clean
45. ✅ **Custom P2 build recap + dynamic WhatsApp + multi-upload** (commit `0633c9e`) — completed, pushed, QA clean
46. ✅ **Manual mobile QA** — confirmed clean
47. ✅ **Phase B2-safe homepage media pipeline** (commit `992a4ca`, 2026-06-10) — completed, pushed, and live checked by Yaniv; `data/homeMedia.ts`, safe `next/image` migration, hero poster/reduced-motion fallback, SDB readability, ShineRail links/pause/hidden duplicates; no asset edits or copy/claim changes.
48. ✅ **Pass 5C Copy/CRO** (commit `5da57da`, 2026-06-18) — implemented, QA passed, committed, and pushed.
49. ✅ **Interface Design system** (commit `553834b`, 2026-06-18) — `.interface-design/system.md` created; governing file for all future UI/visual work.
49a. ✅ **Midnight Flash visual polish** (commit `e1caaba`, 2026-06-21)
49b. ✅ **Visual Pass 1B — standardize visual system details** (commit `a785b85`, 2026-06-21)
49c. ✅ **Homepage De-Clutter Pass 1** (commit `c24fd27`, 2026-06-21) — removed PICK THE PIECE material/stone row, discovery strip nav block, pb-custom-band interrupt block, unused pb-custom-band CSS
50. 🎯 **Evaluate homepage after declutter** ← NEXT — assess product flow before adding more motion or sections; then continue Visual/UI pass planning with `.interface-design/system.md` as the governing system; candidate P0/P1/P2 work defined in audit plan; do not implement until approved
51. 🎯 **Docs / claim-safety maintenance** — as needed
52. 🎯 **Final QA after each implementation**
53. 🎯 **Keep asset shot list as production request direction**
52. ⏳ **SocialTeaser Phase 1** — manual curated social cards when 2T provides still frames
53. ⏳ **ShineRail real images** — wire RINGS/BRACELETS/EARRINGS when real product photos arrive
54. ⏳ **Production Resend sender domain** — configure `leads@2tjewelers.com` before real traffic
55. ⏳ **Category/product proof pages** — after media/proof planning
56. ⏳ SEO/schema — after core pages pass claim-safety review
57. Sitewide copy + SEO pass — only after demo QA gates cleared
58. About / Pittsburgh / Store — research + redesign plan (after QA gates)
59. Social / Instagram / TikTok planning
60. Material/stone SEO landing pages + per-category filtering (only after real inventory + assets + proof)
61. Per-piece product badge layer — only with verified per-piece data (GRA cert, GIA cert, hallmark, etc.)

---

## Future: About / Pittsburgh Direction

The current About section is **not approved**. It feels too robotic, too factual, and not iced-out enough.

Future direction:
- Smaller, sharper, more visual
- Less corporate / less "30 years on Fifth Ave" information block
- More custom ice / real store / BANG energy
- Short streetwise copy
- Real store and product media slot
- No personal brand name references — @2tjewelers / BANG. only

Do not build the About redesign until research is completed and user approves a plan.

---

## Future: Social / Instagram / TikTok Direction

- Use **@2tjewelers** only in all visible copy
- Plan real links or real embeds if technically safe
- Do not fake social posts, followers, thumbnails, screenshots, or engagement numbers
- If a dynamic feed is not feasible, create reserved real-content slots (structural placeholders)
- No fake UGC, no invented testimonials, no fake screenshots

---

## Dates

Any dates from older reports are placeholders only, not deadlines.
