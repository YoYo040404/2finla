# 2T Jewelers — Fresh Agent Handoff

## Start Here

1. Read `PROJECT_CONTEXT.md`.
2. Read `CLAUDE.md`.
3. Read `CLAIM_SAFETY.md`.
4. Read `CUSTOM_UX_REWRITE_BRIEF.md`.
5. Do not work in the Shopify folder.
6. Do not build before approval.

---

## Before Writing 2T Copy

Before writing category, promo, homepage, custom, product, or WhatsApp copy, read:
- `docs/2t-voice-of-customer-copy-system.md`
- `docs/2t-copy-swipe-map.md`

Do not write new 2T copy from general taste. Use the Voice-of-Customer system first.  
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

**Latest committed state (as of 2026-05-20):**

| Commit | Description |
|---|---|
| `8fd4497` | Homepage reset — product store + custom lane. NOT custom-only. |
| `200e5a1` | Grillz and Watches landing pages upgraded and committed. |

**Current strategic direction:** 2T Jewelers is a real Pittsburgh street-luxury jewelry store. It sells real jewelry AND has a custom lane. The homepage must not feel custom-only. Two equal paths: SHOP JEWELRY + BUILD CUSTOM.

**Current focus:** `/custom` visual QA after the latest refinement (commit 84af600 — 2026-05-17). Build passes technically. NOT user-approved as final.

Latest /custom changes: compact hero, START THE REQUEST → CTA, Browse Ready-Made removed, upload zone above textarea on mobile, textarea 4 rows, gold-bordered trust callout, full-width SEND REQUEST →, bypass WhatsApp CTA, HowItWorks steps updated.

Next step: visual QA of /custom. Stop and wait for user approval before any further /custom, /grillz, or /watches changes.

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

Homepage reset (committed 8fd4497 — approved):
- Full-bleed hero — BUILT TO HIT. + BANG! stamp + dual CTAs: SHOP JEWELRY + BUILD CUSTOM →, video slot wired, sparkle hits
- ProofMarquee — CSS-only animated trust strip, trust facts, accessible
- SHOP JEWELRY — product gateway with 8 cards in priority order: Grillz, Watches, Chains, Rings, Bracelets, Pendants, Earrings, Custom. SVG silhouette icons.
- CUSTOM BUILT HERE — compressed fast lane. Logo / Name / Photo / Grillz / Watch direction. BUILD CUSTOM → + TEXT 2T →. What-we-build keyword chips.
- PittsburghStory (`REAL STORE. REAL WORK.`) — brand story, dual CTAs
- SocialTeaser (`TAP IN WITH 2T.` / `WATCH THE WORK`) — inline SVG icons for Instagram / TikTok / WhatsApp, real links only, no fake data

Removed from homepage: PICK YOUR LANE, BestSellersStrip, old Inquiry Lanes, Material Preview, FinalCTABar, old Custom Entry Block.

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
| Homepage reset | ✅ Committed — 8fd4497. Product store + custom lane. |
| Hero video | ✅ Slot wired — `public/assets/hero-loop-demo.mp4` (file pending) |
| ProofMarquee | ✅ Live |
| SHOP JEWELRY gateway | ✅ 8-card product grid, priority order |
| CUSTOM BUILT HERE lane | ✅ Live — compressed fast lane |
| PittsburghStory | ✅ Live |
| SocialTeaser | ✅ Live (inline SVG icons, real links) |
| Grillz page `/grillz` | ✅ Committed — 200e5a1. Visual QA and user approval still pending. |
| Watches page `/watches` | ✅ Committed — 200e5a1. Visual QA and user approval still pending. |
| Custom page `/custom` | ⚠️ WIP — build passes, NOT user-approved. Compact revision applied in 84af600. Visual QA pending. |
| Logo (temporary) | ✅ Transparent logo in header, black-bg logo in footer — final SVG/2x pending |
| Contact / social | ✅ Address, phone, WhatsApp, Instagram, TikTok, Acima all wired in Footer |
| Real product images | 🚫 Not yet |
| Typography audit | 🚫 Not yet |
| Instagram/TikTok dynamic feed | 🚫 Not yet |
| WhatsApp floating desktop button | 🚫 Not yet |
| Backend / Formspree | 🚫 Not yet |
| Vercel deploy | 🚫 Not yet |
| Shopify | 🚫 Paused |

---

## Default Next Prompt

**Current `/custom` build is WIP. Do not treat it as complete or commit it as an approved milestone.**

User feedback: too card-heavy, too form-like, especially on mobile.

Next step is to plan a simplified `/custom` redesign. Key direction:
- Compact selectors: dropdown or bottom-sheet style instead of large chip/card grids
- Faster, cleaner, more mobile-native feel
- Keep strategic direction: piece selection → upload/reference → budget → name + phone
- Claim-safe. Street-luxury tone.

Do NOT execute until user approves the new plan.

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
