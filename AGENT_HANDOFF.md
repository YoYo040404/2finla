# 2T Jewelers — Fresh Agent Handoff

## Start Here

1. Read `PROJECT_CONTEXT.md`.
2. Read `CLAUDE.md`.
3. Read `CLAIM_SAFETY.md`.
4. Read `CUSTOM_UX_REWRITE_BRIEF.md`.
5. Do not work in the Shopify folder.
6. Do not build before approval.

---

## Before Homepage, SEO, CRO, Copy, Promo, or Category Work

> **REQUIRED FIRST READ for any homepage, header, logo, visual-language, CTA, CRO, or SEO work:**
> Read `docs/2t-homepage-master-direction.md` before any planning or code.
> This is the controlling strategic document for all homepage and visual-language decisions.
> Do not skip it. Do not rely on memory of its contents — read the current file.

> **REQUIRED FIRST READ for any homepage copy, promo module, hero secondary copy, BANG. deployment, social section copy, category CTA language, or product/category copy work:**
> Read `docs/2t-pass5b-competitor-backed-copy-research.md` before any planning or code.
> This is the evidence-backed copy research document (Pass 5B). It contains the confirmed competitor matrix (13 brands deep-dived), hero secondary copy options, BANG. stamp rules, 3-state promo module system, category one-line descriptors, social card copy upgrades, VOC phrase map (use/avoid), verified claims risk table, and the full Pass 5C implementation spec.
> Do not invent copy from general taste. Do not use this doc's copy strings as approved — they are directional drafts. User approval is required before Pass 5C execution.

**Copy/language rules confirmed by Pass 5B research:**
- "Build" language is only for custom flows. "Shop / See / Ask / Text 2T" is for normal product/category shopping.
- Verified claims (real diamonds, solid gold, VVS, GIA, free shipping, warranty, natural diamonds) may be promoted when true and scoped — never invented, never blanket sitewide.
- BANG. is a controlled brand stamp — not a headline replacement. Never use BANG. as H1 or section heading.
- "BUILT TO HIT." stays as the primary hero headline. Do not change it.
- "SHOP JEWELRY" and "BUILD CUSTOM →" hero CTAs stay as-is.

**Material & Stone Language Rules (updated 2026-05-31):**
- 2T sells gold, silver, diamonds, and moissanite. All four are legitimate product directions. No hierarchy.
- **User-confirmed (2026-05-31):** All 2T silver is 925 Sterling Silver. All 2T moissanite is D-color and VVS.
- "925 Sterling Silver" and "D-color VVS Moissanite" are approved for homepage direction copy (ShineDirectionBand). Per-piece badge still requires verification. GRA-certified and GIA are still NOT confirmed.
- Do NOT call moissanite a "diamond alternative," "diamond substitute," "diamond simulant," or "fake diamond."
- Do NOT frame silver as inferior, cheaper, or lesser than gold.
- Do NOT write "moissanite diamond" or "VVS moissanite diamonds."
- Do NOT use GRA-certified, GIA, karat, solid/plated claims without per-piece verification.
- Approved homepage framing: "Gold · Silver · Diamonds · Moissanite" / "Pick the piece. Then pick the shine." / "Gold or silver. Diamond or moissanite. Different shine. Different direction."
- ShineDirectionBand structure: METAL: GOLD · SILVER / 925 Sterling Silver — STONE: DIAMONDS · MOISSANITE / D-color VVS Moissanite — Details confirmed per piece.
- Safe default for product/badge level: "Material and stone details confirmed per piece."
- Full rules: `CLAIM_SAFETY.md` → Material & Stone Language Rules section.
- Category/custom architecture planning: `PROJECT_CONTEXT.md` → Material & Stone Strategy section.

Before working on homepage, SEO, CRO, copy, promo, or any category page, read:
- `docs/2t-growth-strategy-seo-cro-90day.md` — official sitewide growth, SEO, and CRO strategy
- `docs/2t-voc-copy-system.md` — voice-of-customer copy system
- `docs/2t-copy-swipe-map.md` — copy swipe map

Do not write new 2T copy from general taste. Use the Voice-of-Customer system first.  
Do not make major SEO, CRO, or homepage decisions without reviewing the growth strategy doc.  
Keep language: direct, product-aware, street-luxury, text-first, claim-safe.

**Core lines to preserve:**
- "Text 2T"
- "Send the photo / logo / name"
- "Ask what's in stock"
- "Product details confirmed per piece"
- "Material and stone details confirmed per piece."
- "We quote before the build"
- "No deposit to start"
- "Real Pittsburgh Store. Direct Text Access. Product Details Confirmed Per Piece."
- "Gold or silver. Diamond or moissanite. Different shine. Different direction."
- "Ask what fits the piece."

**Verified claim directive (updated 2026-05-29):**  
The following are **approved commercial claims** to use prominently when verified at product, collection, certificate, or policy level:
- Solid gold / karat — when confirmed per piece
- Real diamonds / natural diamonds / lab-grown diamonds — when confirmed per piece, with explicit type labeling
- VVS / VS / SI — when confirmed clarity grade per piece
- GIA certificate — when physical cert exists per stone
- 925 sterling silver — when confirmed per piece
- Factory-set diamonds — when confirmed per watch/piece
- Authenticated watches — when condition and source confirmed
- In stock / available now — when live inventory confirmed
- Free shipping — when written policy confirmed
- Lifetime warranty — when written policy confirmed

**These are goals to publish when verified, not risks to suppress.**  
Do not publish as blanket sitewide claims without verification. Do not invent them.

**Safe placeholders when not yet verified:**
- "Ask what's running now."
- "Ask what's in stock now."
- "Promo terms shown on eligible pieces only."
- "Product details confirmed per piece."
- "Material and stone details confirmed per piece."

---

## Current User Intent

Active project: Next.js prototype in `C:\Users\yaniv\Downloads\2t-jewelers-next`.
Old Shopify folder is archive only. Do not touch it.

**Latest committed state (as of 2026-06-02):**

| Commit | Description |
|---|---|
| `0b5252e` | feat: boost homepage shop discovery |
| `b58c9a0` | feat: add claim-safe discovery collections |
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
| `2303850` | feat: improve sitewide contrast and custom selector grouping — THE BUILD numbered blocks, 10 contrast fixes, MobileCtaBar clearance |
| `60c7d06` | feat: improve custom lead funnel flow and selector clarity — CRO pass, metalDirection + stoneDirection wired end-to-end |
| `5f4afd7` | feat: refine homepage visual depth and shine surfaces |
| `f29c856` | docs: sync material and stone strategy after homepage update |
| `0e85b35` | feat: add homepage material and stone direction system — ShineDirectionBand, product wall cue |
| `a5e61ee` | docs: add architecture CRO VOC audit |
| `e674bee` | feat: add material and stone direction to shop categories |
| `a07c2cf` | feat: add material and stone direction capture |
| `a4f5298` | docs: add silver moissanite verified claims strategy |
| `c485b83` | fix: remove duplicate watches hero copy |
| `03991f5` | /custom Pass A — repetition removed, page shorter, HowItWorks + WorkPlaceholder unmounted |
| `39a3b70` | Merge PR #1 — Pittsburgh BANG homepage merged into main |
| `af7f20d` | Homepage Midnight Icebox Pass 3 |

**Current strategic direction:** 2T Jewelers is a real Pittsburgh street-luxury jewelry store. Pittsburgh BANG homepage is merged into main. Visual direction: hard hip-hop / hood street-luxury — loud, flashy, bling-heavy, ice/diamond/gold shine, rapper/athlete energy. NOT quiet luxury, NOT boutique, NOT over-clean ecommerce.

**Current focus:** /custom CRO pass and lead capture are complete and live. Next phase: production Resend sender domain polish → Custom Hero / media proof / real asset planning → category/product proof pages. Do not reopen broad homepage redesign.

---

## Brand Personality — BANG.

**BANG.** is the owned brand signature of 2T Jewelers.

> **Note (updated 2026-05-18):** A personal brand name was previously listed here as the face of 2T on TikTok and Instagram. That direction has been **removed**. Do not reference that name in any visible website copy, documentation, planning prompts, or code comments.

- Signature brand mark: **"BANG."** — real, owned. Not a placeholder.
- Social handle in all visible copy: **@2tjewelers**
- Future About, Store, and Social sections must use BANG. and real @2tjewelers content.
- The site will eventually use the real downtown Pittsburgh store and real store/product media footage.
- Never generate or place fake store images, fake social clips, or invented quotes.
- Tenure copy: approved as **"25 years"** — confirmed by user 2026-05-31. Do not change without user confirmation.

---

## Last Known Visual Feedback

### Midnight Icebox Homepage Pass 3 (committed af7f20d — 2026-05-25 — user-approved for commit)

**Visual direction locked:** Midnight Icebox through hard hip-hop / hood street-luxury energy.

**Active design system:**
- Fonts: Anton (display) / Archivo (body) / JetBrains Mono (mono) / Cormorant Garamond (italic gold accent)
- Palette: obsidian `#050505` / bone `#F3F0EA` / gold `#C9A449` / ice `#D8EBFF` / charcoal `#0E0E0E` / border `#1F1D1A`

**Section-by-section state:**
- Hero: full-bleed campaign media (video opacity 0.60), BANG. as borderless gold text stamp (no button chrome), BUILT TO HIT. dominant, dual CTAs: SHOP JEWELRY + BUILD CUSTOM →
- ProofMarquee: gold top/bottom borders, trust facts, CSS marquee
- SHOP JEWELRY: vitrine display-case tiles, anchor row 1.4fr/1fr/1fr (GRILLZ dominant), inline mono text direction labels (no spec-box pill borders), secondary 4-tile row
- Weekly Promo: two-column, vitrine slot right, gleam moment (no fake offers, claim-safe)
- Custom lane: vitrine left, text right, keyword chips
- PittsburghStory: stat ledger 25 YEARS / 5TH AVE with gold left-border rules, no fake claims
- SocialTeaser: channel-map rows (TikTok / Instagram / WhatsApp), WhatsApp gold-bordered, diamond glyphs, real links only

**Gleam budget:** 2 of 3 used (GRILLZ anchor + promo vitrine).
**Not redesigned in Pass 3:** `/custom`, `/grillz`, `/watches`.

Grillz page (committed 200e5a1): `/grillz` — street-luxury, direct, inquiry-led.
Watches page (committed 200e5a1): `/watches` — high-ticket, direct, claim-safe.

Header:
- logo: `2t-logo-wide-transparent.png` via next/image (numeric width/height, TODO for final SVG/2x)

Footer (rebuilt):
- logo: `2t-logo-full-black-bg.png`
- address: 332 Fifth Ave, Pittsburgh, PA 15222
- phone: +1 412-281-7072
- WhatsApp: wa.me/14124524343
- Connect column: Instagram, TikTok, WhatsApp CTA, Acima (safe wording)
- grid: 2×2 mobile / 4-col desktop

Custom page (as of commit 84af600 — 2026-05-17):
- Compact hero; primary CTA: START THE REQUEST →; Browse Ready-Made removed
- Piece type chips wrap cleanly (Step 1)
- Upload zone above textarea on mobile; textarea 4 rows (Step 2)
- Name, phone (label: WHATSAPP OR PHONE), budget chips (Step 3)
- Gold-bordered trust callout; SEND REQUEST → full-width
- Bypass CTA: Not sure yet? Hit us up on WhatsApp →
- HowItWorks step 02: WE REVIEW THE DIRECTION; step 03: WE QUOTE FIRST
- Build passes clean — NOT user-approved final

---

## Current State Summary

| Area | Status |
|---|---|
| Homepage Midnight Icebox Pass 3 | ✅ Committed — af7f20d. Anton/Archivo/JetBrains Mono. Vitrine system. Gold/ice palette. |
| Hero | ✅ Full-bleed campaign. Video opacity 0.60. BANG. brand text stamp. |
| ProofMarquee | ✅ Live — gold borders |
| PICK THE PIECE gateway | ✅ Stronger vitrine (0b5252e) — anchor row, discovery strip, BestSellersStrip wired, inline text labels + material cue |
| ShineDirectionBand | ✅ Live — METAL: GOLD · SILVER / 925 Sterling Silver — STONE: DIAMONDS · MOISSANITE / D-color VVS Moissanite — Details confirmed per piece |
| Promo module | ✅ Live — claim-safe, no fake offers |
| Custom lane (homepage) | ✅ Live — keyword chips, NO DEPOSIT TO START · WE QUOTE FIRST |
| PittsburghStory | ✅ Stat ledger: 25 / 5TH AVE with gold left-border rules |
| SocialTeaser | ✅ Channel-map rows, WhatsApp gold-bordered, real links only |
| Hero video | ✅ Slot wired — `public/assets/hero-loop-demo.mp4` (file pending) |
| Header navigation | ✅ Active states cleaned (4f3097f) — Shop ▾ / Pendants / Grillz / Watches / Custom / About |
| Chains page `/collections/chains` | ✅ Six style cards (744d2b3/dc33c16), SHOP language, SVG fallback |
| Bracelets / Rings / Earrings | ✅ Six style cards per category (dc33c16), SHOP language, no BUILD CUSTOM CTA |
| Pendants page `/collections/pendants` | ✅ Split (4b6c067) — SHOP section (six cards) + compact custom pendant selector |
| Grillz page `/grillz` | ✅ Fully reworked (7e87bce) — fit-first, six style cards, process-driven, non-authorized claims removed. Post-Pass-2B QA passed (2026-06-02). |
| Watches page `/watches` | ✅ Fully reworked (77799de) — high-ticket inquiry architecture, Rolex-aware, non-authorized-dealer disclosure included. Post-Pass-2B QA passed (2026-06-02). |
| Custom page `/custom` | ✅ CRO pass committed (60c7d06), selector grouping committed (2303850), user-approved. |
| Logo (temporary) | ✅ Transparent logo in header, black-bg logo in footer — final SVG/2x pending |
| Contact / social | ✅ Address, phone, WhatsApp, Instagram, TikTok, Acima all wired in Footer |
| Pittsburgh BANG merge | ✅ Complete — merged into main (39a3b70) |
| Real product images | 🚫 Not yet |
| Instagram/TikTok dynamic feed | 🚫 Not yet |
| WhatsApp floating desktop button | 🚫 Not yet |
| Lead capture (Resend) | ✅ Live — all 9 fields including metal/stone direction + file attachments. Sender: onboarding@resend.dev (testing). Production domain polish pending. |
| Vercel deploy | ✅ Live on Vercel — https://2finla.vercel.app |
| Shopify | 🚫 Paused |

---

## Default Next Prompt

**Current milestone: Pass 3A–3C copy/cleanup + Homepage SHOP Boost committed at `0b5252e`. QA screenshots captured. Site is healthy/shippable.**

**Post-Pass-3C QA status (2026-06-02): Screenshots captured**
Routes screenshotted: best sellers (desktop 1280 / mobile 390), collections (desktop / mobile), new arrivals (desktop), shop dropdown, shop boost (desktop / mobile). Full Playwright QA pass pending.

**Working tree — do not stage without explicit approval:**
- `docs/superpowers/plans/` and `docs/superpowers/specs/` — planning/spec notes
- `public/assets/demo/phase3a/` — demo PNG assets
- `public/assets/logo-to-use.png` — replacement logo candidate, not yet approved for wiring
- `qa-3c-*.jpeg` and `qa-shop-boost-*.jpeg` — QA screenshots (do not commit; gitignore if not already)

1. Do not reopen broad homepage redesign. Pittsburgh BANG is the current direction.
2. Do not re-polish `/custom` — CRO pass and selector grouping are approved and live.
3. Do not rebuild the Resend backend — it is working and verified.
4. Do not do random CSS/layout cleanup unless QA finds a real issue.
5. Next recommended phase:
   - **SEO foundation planning / metadata pass** — research before any SEO implementation.
   - **TikTok/Instagram feed feasibility** — assess technical options before planning dynamic feed.
   - Asset/media request list — after research phase, define what specific images/media are needed.
6. `/grillz` and `/watches` rework complete — Post-Pass-2B QA passed. No further redesign until real/demo assets arrive.

**Keep untouched until explicitly approved:**
- `public/assets/logo-to-use.png` — do not rename, move, or wire unless user provides final asset and approves.
- `/grillz`, `/watches` — no further redesign until real/demo assets arrive and user approves.
- Resend setup — do not change without user approval.

**Tools to use for major UX/UI passes:** Playwright MCP, frontend-design, UI UX Pro Max (if available), visual-critique, design-ops QA, verification-before-completion.

**Language rule:** Main chat with user can be Hebrew. Claude Code implementation prompts must be English.

---

## Promotions + Verified Claims Policy

2T Jewelers sells real gold, real diamonds, moissanite, silver, and authenticated watches. Strong product and policy claims (solid gold, natural diamonds, VVS/GIA, free shipping, lifetime warranty, in stock, authenticated watches) are **commercial assets** — use them prominently when verified at product, collection, or policy level.

The verification rule: confirm the claim is true for the specific product, collection, or policy being published. Then publish it. Do not suppress strong claims when they are true.

Architecture to build when product data arrives: product card badges, PDP spec blocks, collection filters, trust strip updates, promo module with product-level badges.

If product data or policy details are not yet confirmed, use safe fallbacks:
- "Product details are confirmed per piece."
- "Promo terms shown on eligible items only."
- "Availability may vary."

Full verification gate table: `CLAIM_SAFETY.md` → Verified Claim Architecture.

---

## After Execution Returns

Review for:

- Does form appear higher / earlier?
- Is upload/reference intent obvious in first screen?
- Are piece type selectors easy to tap on mobile at 390px?
- Does it avoid all forbidden claims?
- Does it preserve street-luxury tone?
- Does it avoid generic AI/contact-form look?
- SocialTeaser: are IG/TT/WA links live and correct? Icons readable at 390px?
- No horizontal scroll at 390px?
- Did mobile 390px QA pass?
