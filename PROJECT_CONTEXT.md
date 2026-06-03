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
Current approved wording is **"25 years"** — confirmed by user 2026-05-31.
Do not change to any other formulation unless the user explicitly confirms the exact language.

---

## Material & Stone Strategy

### Business Fact

2T Jewelers sells gold, silver, diamonds, and moissanite.

Silver and moissanite are legitimate material and stone directions — not downgrade options, not second-class alternatives, not budget substitutes. They must never be framed that way in copy, planning, or prompts.

**User-confirmed business-level facts (confirmed 2026-05-31):**
- All 2T silver is **925 Sterling Silver**.
- All 2T moissanite is **D-color and VVS**.

These are confirmed at the business level. "925 Sterling Silver" and "D-color VVS Moissanite" may appear in homepage-level and category-level direction copy (e.g., ShineDirectionBand) as secondary proof. Individual product-card badge use still requires per-piece verification. GRA-certified and GIA are still not confirmed.

### Positioning — Parallel Directions, No Hierarchy

Gold, silver, diamonds, and moissanite are four equal directions. The buyer chooses based on preference, aesthetic, and purpose — not because one is better than the other.

Approved framing:
> Gold or silver. Diamond or moissanite. Different shine. Different direction.
> Details confirmed per piece.
> Ask what fits the piece.

Do NOT write:
- "moissanite diamond" or "VVS moissanite diamonds"
- "diamond alternative," "diamond substitute," or "diamond simulant"
- "fake diamond" for any product 2T sells
- "budget silver," "cheaper than gold," or any downgrade language for silver
- any language implying moissanite or silver are lesser choices

### Claim-Safety — Material & Stone

**Public-facing hierarchy rule:**
Use simple buyer labels first: Gold / Silver / Diamonds / Moissanite.
Use specs as secondary proof: 925 Sterling Silver / D-color VVS Moissanite / Details confirmed per piece.

The following claims are gated by scope:

| Claim | Status | Approved scope |
|---|---|---|
| "925 Sterling Silver" | ✅ Business-level confirmed (2026-05-31) | Homepage direction copy, ShineDirectionBand, category level. Per-piece badge still requires hallmark verification. |
| "D-color VVS Moissanite" | ✅ Business-level confirmed (2026-05-31) | Homepage direction copy, ShineDirectionBand, category level. Per-piece badge still requires verification. |
| "GRA-certified moissanite" | ❌ Not confirmed | Requires GRA certificate to ship with the piece. |
| "GIA-graded diamond" | ❌ Not confirmed | Requires actual GIA report per stone. |
| "Lab-grown diamond" / "Natural diamond" | ❌ Not confirmed | Must be confirmed per piece. |
| "14K / 10K / 18K gold" | ❌ Not confirmed | Must be confirmed per piece. |
| "Solid gold" | ❌ Not confirmed | Must be confirmed as not plated per piece. |
| "Gold-plated over 925 sterling silver" | ❌ Not confirmed | Must be confirmed per piece. |

Until confirmed at the correct scope: use "Material and stone details confirmed per piece."

Approved homepage/category-level phrases (safe now):
- "Gold · Silver · Diamonds · Moissanite"
- "Pick the piece. Then pick the shine."
- "Gold or silver. Diamond or moissanite. Different shine. Different direction."
- "METAL: GOLD · SILVER — 925 Sterling Silver"
- "STONE: DIAMONDS · MOISSANITE — D-color VVS Moissanite"
- "Details confirmed per piece."

For full rules see `CLAIM_SAFETY.md` → **Material & Stone Language Rules** section.

### Future Category Architecture

When category/product pages are built, the material/stone architecture should run as parallel top-level directions — no nesting, no hierarchy:

```
GOLD  |  SILVER  |  DIAMONDS  |  MOISSANITE
```

Combined with product categories:
```
Chains | Pendants | Grillz | Watches | Custom
```

Material/stone filtering belongs at the product or category level — not as the primary top-level navigation door.

### /custom Page — Material & Stone Selector (Planned)

Future `/custom` material/stone selector should use two separate choice groups — "METAL DIRECTION" and "STONE DIRECTION":

**Metal options:** Gold / Silver / Not sure yet
**Stone options:** Diamond / Moissanite / No stones / Not sure yet

Rules for the selector:
- Do NOT rank options by price or status
- Do NOT label any option as "(cheaper)," "(premium)," or "(most popular)" in a way that implies hierarchy
- Supporting copy: "Different shine. Different direction. Details confirmed per piece."
- Close copy: "Material and stone details confirmed before production. Budget range helps guide the conversation. Not a final quote."
- Natural diamond vs. lab-grown diamond sub-options: add only when 2T confirms how they want to handle this distinction

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

### Homepage — Material & Stone Direction Pass ✅ Committed

**Latest commit:** `0b5252e — feat: boost homepage shop discovery` (2026-06-02)

Homepage is a product-first store with a custom lane — NOT custom-only. Hero dual CTAs: SHOP THE PIECES + BUILD CUSTOM →.

**Midnight Icebox system active:**

| # | Section | Component | Status |
|---|---------|-----------|--------|
| 1 | Hero — BUILT TO HIT. + BANG. stamp | inline in `app/page.tsx` | ✅ Full-bleed campaign media, video opacity 0.60, BANG. as borderless gold brand text stamp; CTAs: SHOP THE PIECES + BUILD CUSTOM → |
| 2 | ProofMarquee | `components/home/ProofMarquee.tsx` | ✅ CSS-only marquee, gold borders, trust facts, accessible |
| 3 | PICK THE PIECE — shop gateway | inline in `app/page.tsx` | ✅ Stronger vitrine gateway (0b5252e); anchor row (GRILLZ dominant); discovery strip; BestSellersStrip wired; inline mono text labels + material cue |
| 4 | ShineDirectionBand — material/stone direction | inline in `app/page.tsx` | ✅ METAL: GOLD · SILVER / 925 Sterling Silver — STONE: DIAMONDS · MOISSANITE / D-color VVS Moissanite — Details confirmed per piece. No per-tile chips. |
| 5 | Promo strip — ASK WHAT'S RUNNING NOW | inline in `app/page.tsx` | ✅ Claim-safe, WhatsApp prefill, promo terms note |
| 6 | Custom lane — YOUR LOGO. YOUR NAME. YOUR PIECE. | inline in `app/page.tsx` | ✅ Keyword chips, NO DEPOSIT TO START · WE QUOTE FIRST |
| 7 | REAL STORE. REAL WORK. | `components/home/PittsburghStory.tsx` | ✅ Stat ledger: 25 YEARS / 5TH AVE with gold left-border rules |
| 8 | TAP IN WITH 2T. | `components/home/SocialTeaser.tsx` | ✅ Channel-map rows with diamond glyphs, WhatsApp gold-bordered |

**Vitrine system:** Striped diagonal-pattern CSS placeholder wells with corner crop marks. Replace with real `<img>` or `<video>` when media assets arrive.

**ShineDirectionBand:** Committed in `0e85b35`. Presents METAL (Gold/Silver + 925 Sterling Silver spec) and STONE (Diamonds/Moissanite + D-color VVS Moissanite spec) as parallel directions with "Details confirmed per piece." footer. No per-tile material chips. No claim-safety regressions. Uses user-confirmed business facts.

**No fake products, claims, prices, testimonials, social metrics, celebrity proof, or inventory introduced.**

**Not redesigned in this pass:** `/custom`, `/grillz`, `/watches`. (These were redesigned in subsequent passes — see Category Pages section below.)

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

The `/custom` page is **user-approved and live on Vercel.**

Flow: CustomHero → CustomBuildFlow (THE BUILD: piece type + metal + stone selectors as 3 numbered decision blocks; CONTACT: name + phone; THE IDEA: upload + textarea; BUDGET optional) → CustomFaq

**CRO pass (commit 60c7d06 — 2026-05-31):**
- Lead funnel flow tightened; selector clarity improved
- metalDirection and stoneDirection wired end-to-end (form → API → Resend email)

**Sitewide contrast + selector grouping pass (commit 2303850 — 2026-05-31):**
- THE BUILD section restructured into 3 numbered decision blocks (01 PICK THE PIECE / 02 PICK THE METAL / 03 PICK THE STONE)
- 10 body/copy classes corrected from `--color-brand-muted` to `--color-brand-silver` sitewide
- MobileCtaBar bottom clearance added to `<main>` on mobile (`padding-bottom: calc(56px + env(safe-area-inset-bottom, 0px))`)

**Resend lead capture — verified live (2026-05-31):**
- API route: `app/api/custom-request/route.ts`
- All 9 fields delivered in email: piece type, metal direction, stone direction, name, phone, budget, idea, file attachment, timestamp
- File attachments confirmed working (up to 5 MB)
- Success screen appears only after Resend confirms delivery
- WhatsApp fallback visible on error
- Current sender: `onboarding@resend.dev` (testing mode — acceptable now)
- Production polish needed later: verified sender domain (`leads@2tjewelers.com` or similar)
- Env vars: `RESEND_API_KEY`, `LEAD_EMAIL_TO`, `LEAD_EMAIL_FROM` — all server-side only, gitignored, no `NEXT_PUBLIC_` exposure

### Category Pages (completed 2026-06-01)

| Page / Feature | File(s) | Status |
|---|---|---|
| Header Navigation Cleanup | `components/layout/Header.tsx`, `data/nav.ts` | ✅ Active states corrected — Shop/Pendants/Grillz/Watches/Custom/About |
| Chains page | `app/collections/chains/page.tsx` (or equivalent) | ✅ Six chain style cards, SHOP product/category language, SVG fallback |
| Bracelets / Rings / Earrings | Shared category template | ✅ Six style cards per category, SHOP language, no BUILD CUSTOM CTA |
| Pendants split page | `app/collections/pendants/page.tsx` | ✅ SHOP section (six pendant cards) + compact custom pendant selector (photo/logo/name/number/memorial/custom-shape) |
| Watches inquiry page | `app/watches/page.tsx` | ✅ High-ticket inquiry architecture, Rolex-aware, non-authorized-dealer disclosure, image-ready, no fake claims |
| Grillz fit-first page | `app/grillz/page.tsx` | ✅ Custom/fit/process-driven, six style cards (Top Set / Bottom Set / Full Mouth / Open Face / Stone Direction / Cut Direction), no dental/medical/fit-guarantee claims |

**Visual rules applied to category pages:**
- Important buyer-facing text uses `--color-brand-bone` (off-white), not gold/brown as primary text
- Gold used only for accents, labels, borders, dividers, glints
- Material/stone direction note chips are styled as static labels, not interactive buttons

---

## Connected MCP Servers (as of 2026-06-03)

| MCP | Status | Use for |
|---|---|---|
| Playwright | ✅ Connected | Visual QA, screenshots, mobile/desktop checks, form testing |
| Magic 21st.dev | ✅ Connected | Component/design inspiration |
| Firecrawl | ✅ Connected | Competitor/VOC/social research, web scraping |
| Next DevTools | ✅ Connected | Next.js routes, runtime, metadata, diagnostics |
| Chrome DevTools | ✅ Connected | Live browser console, layout, performance, network inspection |
| Context7 | ✅ Connected | Current Next.js / React / Tailwind docs lookup before implementation |
| Magic UI | ✅ Connected | Controlled shine/bling effects (glow, sweep, sparkle, beams) — street-luxury/hip-hop only |
| Shopify | ⏸️ Connected but paused | Do not use unless user explicitly approves Shopify work |
| Gmail | ✅ Connected | Only if user explicitly asks for email workflows |
| Google Calendar | ✅ Connected | Only if user explicitly asks for scheduling |
| Google Drive | ✅ Connected | Only if user explicitly asks for file access |

**Magic UI guardrail:** Effects must stay street-luxury / black-gold-ice / controlled. Never SaaS, casino, NFT, nightclub, rave, or childish.

---

## Current Next Task

**Active branch / state:** `main` — all recent passes committed and live on Vercel.

**Completed milestones (as of 2026-06-02):**
- Pittsburgh BANG homepage merged into main (PR #1 — commit `39a3b70`).
- Repo QA cleanup — screenshot artifacts gitignored, QA utility added (commit `854c15e`).
- `/custom` CRO pass and selector grouping — lead funnel tightened, all 9 fields live via Resend (commits `60c7d06`, `2303850`).
- Material & stone direction system — homepage + categories (commits `a4f5298` → `0e85b35`).
- Homepage flash system polish — CSS-only flash, hero BANG impact, icy product title flash (commits `b8edf8f`, `6af213a`).
- Chains mini-catalog — six style cards, SHOP language (commit `744d2b3`).
- SHOP vs CUSTOM rule documented (commit `294421e`).
- Gated proof slots — chains and pendants (commit `821efa9`).
- Mini catalog for shop categories — Bracelets/Rings/Earrings (commit `dc33c16`).
- Pendants compact custom selector — SHOP/CUSTOM split (commit `4b6c067`).
- Header active nav states cleaned (commit `4f3097f`).
- Watches high-ticket inquiry page reworked (commit `77799de`).
- Grillz fit-first page reworked (commit `7e87bce`).
- Docs sync after category pages (commit `4fc8e3a`).
- Mobile readability and route CTAs improved (commit `5cdb34e`).
- Typography and contrast system refined (commit `3dcb65d`).
- Static direction chips made non-interactive (commit `7567917`).
- **Post-Pass-2B QA clean** — all routes, mobile 390px, desktop 1280px, no horizontal scroll, claim-safety grep clean, build passed.
- **Pass 3A homepage copy sharpening** (commit `b8a9688`).
- **Pass 3B-A grillz + pendants copy sharpening; pendants simplified; grillz hero simplified** (commits `d4fa052`, `619cd6a`, `5e6cfee`).
- **Pass 3B-B chains + watches copy; rings / bracelets / earrings CTAs cleaned** (commits `4d566bb`, `6cedd28`).
- **Pass 3C — claim-safe discovery collections** — Most Asked About / Ask What Just Landed; /collections layout improved; Shop dropdown includes All Collections (commit `b58c9a0`).
- **Homepage SHOP Boost** — stronger PICK THE PIECE, discovery strip, BestSellersStrip wired, hero CTA SHOP THE PIECES (commit `0b5252e`).

**TikTok / Instagram Feed — Feasibility Assessed (2026-06-03):**

- **Phase 1 recommended:** Manual curated social cards using real @2tjewelers screenshots/still frames + real post URLs. Replace SocialTeaser left canvas vitrine. Full design-system control, no external scripts, no API, no cookies. Build when assets arrive.
- **Do not build yet:** Instagram oEmbed Read API (requires Meta App + App Review) / TikTok Display API (requires Developer App + Production App Review, uncertain timeline).
- **Do not use:** Fake social posts, fake captions, fake views/likes/followers, competitor screenshots, non-@2tjewelers content.
- **Future Phase 2:** Instagram oEmbed Read (Meta App + App Review → App Access Token → Next.js API route, server-side). Feasibility plan: `docs/superpowers/plans/2026-06-03-social-feed-feasibility.md`.
- **Future Phase 3:** TikTok Display API (Developer App + Production App Review + OAuth from @2tjewelers account owner). Most complex — pursue only if auto-feed is required.
- **Assets needed from 2T:** 2–3 still frames from real @2tjewelers TikTok/Instagram posts + direct post URLs + 1 real caption snippet per post.

**Next phase:**
1. **SEO foundation planning / metadata pass** — research before any SEO implementation.
2. **Asset/media request list** — define what specific images/media are needed.
3. No random CSS/layout cleanup unless QA finds a real issue.

**Do not reopen homepage redesign** unless a clear blocker is found.

**Remaining gap:** Real media assets are the single biggest lever for bling/shine energy. CSS vitrines are structural placeholders until real assets arrive.

---

## Committed Work (as of 2026-06-02)

| Commit | Description |
|---|---|
| `0b5252e` | feat: boost homepage shop discovery — stronger PICK THE PIECE, discovery strip, BestSellersStrip, hero CTA SHOP THE PIECES, All Collections in Shop dropdown, /collections layout improved |
| `b58c9a0` | feat: add claim-safe discovery collections (Most Asked About / Ask What Just Landed) |
| `6cedd28` | fix: clean rings bracelets earrings category ctas |
| `4d566bb` | fix: clean chains bottom and sharpen watches copy |
| `5e6cfee` | fix: simplify grillz hero |
| `619cd6a` | fix: simplify pendants page |
| `d4fa052` | copy: pass 3b-a grillz and pendants copy sharpening |
| `b8a9688` | copy: pass 3a homepage copy sharpening |
| `7567917` | fix: make static direction chips non-interactive |
| `3dcb65d` | fix: refine typography and contrast system |
| `5cdb34e` | fix: improve mobile readability and route ctas |
| `4fc8e3a` | docs: sync current 2T project state |
| `7e87bce` | feat: add fit-first grillz page |
| `77799de` | feat: add high-ticket iced watch inquiry page |
| `4f3097f` | fix: clean header active nav states |
| `4b6c067` | feat: add compact custom selector to pendants page |
| `dc33c16` | feat: add mini catalog cards to shop categories |
| `744d2b3` | feat: add chains mini catalog style cards |
| `294421e` | docs: add shop vs custom commerce rule |
| `821efa9` | feat: add gated proof slots to chains and pendants |
| `6af213a` | feat: add hero bang impact and icy product title flash |
| `b8edf8f` | feat: add css-only homepage flash system polish |
| `2303850` | feat: improve sitewide contrast and custom selector grouping — 10 contrast fixes, THE BUILD numbered blocks (01/02/03), MobileCtaBar bottom clearance |
| `60c7d06` | feat: improve custom lead funnel flow and selector clarity — CRO pass, metalDirection + stoneDirection wired end-to-end |
| `5f4afd7` | feat: refine homepage visual depth and shine surfaces |
| `f29c856` | docs: sync material and stone strategy after homepage update |
| `0e85b35` | feat: add homepage material and stone direction system — ShineDirectionBand, product wall cue |
| `a5e61ee` | docs: add architecture CRO VOC audit (2026-05-30) |
| `e674bee` | feat: add material and stone direction to shop categories |
| `a07c2cf` | feat: add material and stone direction capture |
| `a4f5298` | docs: add silver moissanite verified claims strategy |
| `c485b83` | fix: remove duplicate watches hero copy |
| `03991f5` | /custom Pass A — repetition removed, HowItWorks + WorkPlaceholder unmounted, page shorter |
| `854c15e` | Repo cleanup — screenshot QA artifacts gitignored, QA utility added |
| `39a3b70` | Merge PR #1 — Pittsburgh BANG homepage branch merged into main |
| `af7f20d` | Homepage Midnight Icebox Pass 3 — Anton/Archivo/JetBrains Mono font system, obsidian/bone/gold/ice palette, full-bleed campaign hero, vitrine Shop Jewelry gateway, Pittsburgh stat ledger, Social channel-map rows |
| `84af600` | /custom compact revision: compact hero, START THE REQUEST →, Browse Ready-Made removed, upload above textarea mobile, textarea 4 rows, gold-bordered trust callout, full-width SEND REQUEST →, WhatsApp bypass CTA, updated HowItWorks steps |
| `8fd4497` | Homepage reset — product store + custom lane. |
| `200e5a1` | Grillz and Watches landing pages — `/grillz` and `/watches` committed. |

---

## Promotions + Verified Claims Policy

2T Jewelers sells real gold, real diamonds, moissanite, silver, and authenticated watches. Strong product claims are a commercial asset and must be built into the product architecture as verified data becomes available.

### Commercial Claim Directive (Updated 2026-05-29)

The following claim categories are **approved for prominent use** when verified:

- Real diamonds — product-level, per-piece confirmation
- Natural diamonds — product-level, with explicit "natural" labeling
- Lab-grown diamonds — product-level, with explicit "lab-grown" qualifier
- VVS / VS / SI — product-level clarity grade confirmation
- GIA certificate — physical cert confirmed per stone
- Solid gold / karat — alloy and karat confirmed per piece
- 925 sterling silver — ✅ user-confirmed at business level (2026-05-31); homepage/category-level use approved; per-piece badge still requires hallmark verification
- Factory-set diamonds — confirmed per watch/piece
- Authenticated watches — condition, stones, and source confirmed
- In stock / available now — live inventory confirmed
- Free shipping — written policy confirmed
- Lifetime warranty — written policy with defined coverage

**Use these prominently when verified. Do not suppress them. Do not treat them as risks.**

### Verification Scope Rule

Claims may appear at the tightest scope they are confirmed for:
- Product-level: visible only on that specific product
- Collection-level: only when every product in the collection qualifies
- Policy-level (shipping, warranty): site-wide only with written policy and disclosed exceptions

Never use product-level claims as blanket sitewide copy.

### Planned Promotional Features (Not Yet Built)
- Special of the Week — featured deal/product module with verified product badge
- Sale strip / promo bar with specific verified offer
- Percentage-off campaign banners (when active with confirmed terms)
- Bundle or BOGO-style campaigns
- Seasonal campaign modules
- Product card badge layer: `[14K GOLD]` `[VVS MOISSANITE]` `[REAL DIAMOND]` `[GIA CERT]` `[IN STOCK]`
- Offer modules on collection/category pages

### Safe Fallbacks (when not yet verified)

Use until product data or policies are confirmed:
- "Product details confirmed per piece."
- "Material and stone details confirmed per piece."
- "Ask before you buy."
- "Promo terms shown on eligible pieces only."

For full verification gate details see `CLAIM_SAFETY.md`.

---

## Do Not Do Yet

Do not:

- continue Shopify
- run Shopify CLI
- edit Shopify files
- wire Formspree (Resend is live — do not replace)
- replace or rebuild the Resend backend
- integrate Cloudinary/Supabase upload
- install logo (unless user provides files)
- deploy to Vercel production (pre-Vercel demo readiness check and business owner approval of the demo preview required first)
- add fake products/reviews/UGC/press
- add unverified or blanket discounts, shipping, warranty, timelines, or policies (verified and scoped claims are allowed — see Promotions + Verified Claims Policy above)
- use GLD copy/assets
- use Moses copy/assets
- promise CAD/render/free mockup
- turn `/custom` into a generic intake form
- further redesign `/grillz` or `/watches` without visual QA of the current reworked versions and explicit user approval
- redesign `/custom` unless specifically approved

---

## Future Work (Not Yet)

Do not build yet:

- real logo files: final SVG transparent (2x/retina), favicon, OG/social image
- email address (not yet provided)
- production Resend sender domain (future polish — `leads@2tjewelers.com` or similar; `onboarding@resend.dev` is acceptable for testing)
- analytics / Meta Pixel / TikTok Pixel
- real custom gallery/assets (photography)
- copywriting pass (final brand voice)
- Watches page further redesign (current rework complete — hold deeper redesign until real/demo assets and user approval)
- Grillz page further redesign (current rework complete — hold deeper redesign until real/demo assets and user approval)
- Sitewide typography/contrast audit
- Asset request list and real media replacement plan
- TikTok/Instagram feed feasibility — assess technical options (oEmbed, API, static slots) before planning dynamic feed
- category/product proof pages (after media/proof planning)
