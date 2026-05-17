# 2T Jewelers — Fresh Agent Handoff

## Start Here

1. Read `PROJECT_CONTEXT.md`.
2. Read `CLAUDE.md`.
3. Read `CUSTOM_UX_REWRITE_BRIEF.md`.
4. Do not work in the Shopify folder.
5. Do not build before approval.

---

## Current User Intent

Active project: Next.js prototype in `C:\Users\yaniv\Downloads\2t-jewelers-next`.
Old Shopify folder is archive only. Do not touch it.

**Milestone reached: Homepage Phase 2 complete and user-approved.**

Current focus: `/custom` visual QA after the latest refinement (commit 84af600 — 2026-05-17). Build passes technically. NOT user-approved as final.

Latest /custom changes: compact hero, START THE REQUEST → CTA, Browse Ready-Made removed, upload zone above textarea on mobile, textarea 4 rows, gold-bordered trust callout, full-width SEND REQUEST →, bypass WhatsApp CTA, HowItWorks steps updated.

Also in 84af600: homepage polish — hybrid typography applied, SocialTeaser heading → TAP IN WITH 2T., TikTok copy → See what's dropping., FinalCTABar heading → BUILD WITH 2T., Grillz lane → Let's build.

Next step: visual QA of /custom. Stop and wait for user approval before any further /custom changes.

---

## Brand Personality — Effi

**Effi** is the real, visible face and personality of 2T Jewelers on TikTok and Instagram.

- Signature catchphrase: **"BANG."**
- Future About, Store, and Social sections must treat Effi and "BANG" as real owned brand elements.
- The site will eventually use the real downtown Pittsburgh store and real Effi / social media footage.
- Never generate or place fake Effi images, fake store images, fake social clips, or invented Effi quotes.
- Spelling: **Effi** only — never "Effie."
- Tenure copy: currently approved as **"nearly 30 years"** — do not change without user confirmation.

---

## Last Known Visual Feedback

Homepage Phase 2 (approved):
- Full-bleed immersive hero — BUILT TO HIT. headline, video slot wired
- ProofMarquee — CSS-only animated trust strip, 8 facts, accessible
- Custom Entry Block — Bring the logo / photo / idea, CTA to /custom
- PICK YOUR LANE — 5 category tiles + secondary category pills
- BestSellersStrip — two editorial lanes (Best Sellers / New Arrivals), inline SVG shape cards, no real product data
- Inquiry Lanes — 3 inquiry lanes with CTAs (Diamond Watches, Grillz, Custom)
- PittsburghStory — outline typography brand story, dual CTAs
- SocialTeaser — inline SVG icons for Instagram / TikTok / WhatsApp, real links only, no fake data
- Material Preview — chips render, audit still pending
- FinalCTABar — HAVE A PIECE IN MIND? + Start the piece + Text 2T

Old Trust Strip removed. Old Shop by Category / Collection Grid removed.

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
| Homepage Phase 2 | ✅ Complete and user-approved |
| Hero video | ✅ Slot wired — `public/assets/hero-loop-demo.mp4` (file pending) |
| ProofMarquee | ✅ Live |
| BestSellersStrip | ✅ Live (no real product data) |
| PittsburghStory | ✅ Live |
| SocialTeaser | ✅ Live (inline SVG icons, real links) |
| FinalCTABar | ✅ Live |
| Material Preview | ⚠️ Renders — audit still pending |
| Custom page | ⚠️ WIP — build passes, NOT user-approved. Compact revision applied in 84af600. Visual QA pending. |
| Logo (temporary) | ✅ Transparent logo in header, black-bg logo in footer — final SVG/2x pending |
| Contact / social | ✅ Address, phone, WhatsApp, Instagram, TikTok, Acima all wired in Footer |
| Real product images | 🚫 Not yet |
| Typography audit | 🚫 Not yet |
| Instagram/TikTok dynamic feed | 🚫 Not yet |
| WhatsApp floating desktop button | 🚫 Not yet |
| Backend / Formspree | 🚫 Not yet |
| Watches / Grillz pages | 🚫 Not yet |
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
