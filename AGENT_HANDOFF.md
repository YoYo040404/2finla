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
- "We quote before the build"
- "No deposit to start"
- "Real Pittsburgh Store. Direct Text Access. Product Details Confirmed Per Piece."

**Do not publish as active claims unless verified:**  
solid gold, real diamonds, natural diamonds, VVS/GIA, free shipping, lifetime warranty, in stock, ships fast, BOGO, percentage-off, weekly deal

**Safe placeholders:**
- "Ask what's running now."
- "Ask what's in stock now."
- "Promo terms shown on eligible pieces only."
- "Product details confirmed per piece."
- "Material and stone details confirmed per piece."

---

## Current User Intent

Active project: Next.js prototype in `C:\Users\yaniv\Downloads\2t-jewelers-next`.
Old Shopify folder is archive only. Do not touch it.

**Latest committed state (as of 2026-05-25):**

| Commit | Description |
|---|---|
| `c485b83` | fix: remove duplicate watches hero copy |
| `03991f5` | /custom Pass A — repetition removed, page shorter, HowItWorks + WorkPlaceholder unmounted |
| `854c15e` | Repo cleanup — QA artifacts gitignored, QA utility added |
| `39a3b70` | Merge PR #1 — Pittsburgh BANG homepage merged into main |
| `f58d26d` | Pittsburgh BANG — align about, social, and nav |
| `b912851` | Pittsburgh BANG — homepage refinement |
| `af7f20d` | Homepage Midnight Icebox Pass 3 (pre-Pittsburgh BANG branch) |
| `b049d30` | 2T voice hardening across core pages |
| `84af600` | /custom compact revision — build passes, NOT user-approved |

**Current strategic direction:** 2T Jewelers is a real Pittsburgh street-luxury jewelry store. Pittsburgh BANG homepage is merged into main. Visual direction: hard hip-hop / hood street-luxury — loud, flashy, bling-heavy, ice/diamond/gold shine, rapper/athlete energy. NOT quiet luxury, NOT boutique, NOT over-clean ecommerce.

**Current focus:** Pre-Vercel demo readiness check → Vercel import/deploy as preview → send demo link for business owner review. Do not reopen broad homepage redesign.

---

## Brand Personality — BANG.

**BANG.** is the owned brand signature of 2T Jewelers.

> **Note (updated 2026-05-18):** A personal brand name was previously listed here as the face of 2T on TikTok and Instagram. That direction has been **removed**. Do not reference that name in any visible website copy, documentation, planning prompts, or code comments.

- Signature brand mark: **"BANG."** — real, owned. Not a placeholder.
- Social handle in all visible copy: **@2tjewelers**
- Future About, Store, and Social sections must use BANG. and real @2tjewelers content.
- The site will eventually use the real downtown Pittsburgh store and real store/product media footage.
- Never generate or place fake store images, fake social clips, or invented quotes.
- Tenure copy: approved as **"over 30 years"** — confirmed by user 2026-05-17. Do not change without user confirmation.

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
- PittsburghStory: stat ledger 30+ YEARS / 5TH AVE with gold left-border rules, no fake claims
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
| SHOP JEWELRY gateway | ✅ Vitrine display-case tiles, anchor row 1.4fr/1fr/1fr, inline text labels |
| Weekly Promo module | ✅ Live — claim-safe, no fake offers |
| Custom lane (homepage) | ✅ Live — vitrine left, text right, keyword chips |
| PittsburghStory | ✅ Stat ledger: 30+ / 5TH AVE with gold left-border rules |
| SocialTeaser | ✅ Channel-map rows, WhatsApp gold-bordered, real links only |
| Hero video | ✅ Slot wired — `public/assets/hero-loop-demo.mp4` (file pending) |
| Grillz page `/grillz` | ✅ Read-only QA done — structurally acceptable for demo. Hold deeper visual work until real/demo assets arrive. |
| Watches page `/watches` | ✅ Duplicate hero copy fixed (c485b83). Read-only QA done — structurally acceptable for demo. Hold deeper visual work until real/demo assets arrive. |
| Custom page `/custom` | ⚠️ Pass A simplified (03991f5) — build passes, NOT user-approved. Visual QA pending. |
| Logo (temporary) | ✅ Transparent logo in header, black-bg logo in footer — final SVG/2x pending |
| Contact / social | ✅ Address, phone, WhatsApp, Instagram, TikTok, Acima all wired in Footer |
| Pittsburgh BANG merge | ✅ Complete — merged into main (39a3b70) |
| Real product images | 🚫 Not yet |
| Instagram/TikTok dynamic feed | 🚫 Not yet |
| WhatsApp floating desktop button | 🚫 Not yet |
| Backend / Formspree | 🚫 Not yet |
| Vercel deploy | 🎯 Next milestone — pre-Vercel readiness check → deploy as demo preview → business owner review |
| Shopify | 🚫 Paused |

---

## Default Next Prompt

**Current milestone: Vercel demo readiness.**

1. Do not reopen broad homepage redesign. Pittsburgh BANG is merged and is the current direction.
2. Do not re-polish homepage unless there is a clear blocker found during demo review.
3. Immediate task: pre-Vercel readiness check → Vercel import/deploy as preview → send demo link.
4. After demo: collect business owner feedback → integrate temporary/demo or real media assets.
5. Next refinement after demo feedback: `/grillz`, `/watches`, category/product pages (asset-dependent).

**Keep untouched until explicitly approved:**
- `public/assets/logo-to-use.png` — do not rename, move, or wire unless user provides final asset and approves.
- `/custom`, `/grillz`, `/watches` — no further redesign until demo feedback is received.

**Tools to use for major UX/UI passes:** Playwright MCP, frontend-design, UI UX Pro Max (if available), visual-critique, design-ops QA, verification-before-completion.

**Language rule:** Main chat with user can be Hebrew. Claude Code implementation prompts must be English.

---

## Promotions + Verified Claims Policy

2T Jewelers runs promotions and sales. The site will eventually support promotional architecture (Special of the Week, sale strip, percentage-off modules, seasonal campaigns, offer modules on category pages).

Stronger product and policy claims (solid gold, natural diamonds, VVS/GIA, free shipping, lifetime warranty, in stock, guaranteed) are **allowed when verified and scoped** — confirmed per product, category, or policy. Never blanket site-wide. Never invented. See `CLAIM_SAFETY.md` for the full allowed/forbidden breakdown.

If product data or policy details are missing, default to safe fallback:
- "Product details are confirmed per piece."
- "Promo terms shown on eligible items only."
- "Availability may vary."

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
