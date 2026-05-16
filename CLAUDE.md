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

**Homepage Phase 2 is complete and user-approved as a milestone.**

Approved homepage section order:

1. Hero — full-bleed, BUILT TO HIT., video slot wired
2. ProofMarquee — CSS-only animated trust strip (Pittsburgh-built, family-owned, nearly 30 years)
3. Custom Entry Block — bring the logo / photo / idea, CTA to /custom
4. PICK YOUR LANE — 5 category tiles (Chains, Pendants, Grillz, Watches, Custom) + secondary pills
5. BestSellersStrip — two editorial lanes (Best Sellers / New Arrivals), inline SVG shape cards, no real product data
6. Inquiry Lanes — 3 inquiry lanes (Diamond Watches, Grillz, Custom Jewelry), each with a CTA
7. PittsburghStory — outline typography brand story, dual CTAs
8. SocialTeaser — Instagram / TikTok / WhatsApp cards with inline SVG icons, real links only
9. Material Preview — material option chips (925 Silver, Gold-Plated, Moissanite, etc.)
10. FinalCTABar — HAVE A PIECE IN MIND? Start the piece + Text 2T

Removed: old Trust Strip, old Shop by Category / Collection Grid.

- Header logo: `2t-logo-wide-transparent.png` — numeric width/height, TODO for final SVG/2x
- Footer logo: `2t-logo-full-black-bg.png` — installed
- Address, phone, WhatsApp, Instagram, TikTok, Acima: all wired in Footer
- Hero video: slot wired at `public/assets/hero-loop-demo.mp4`, file pending

**Custom Flow: WIP — build passes but NOT user-approved as final.**

User feedback: too card-heavy and too form-like, especially on mobile.
Do not commit or push `/custom` as an approved milestone.
Future direction: compact selectors (dropdown / bottom-sheet style) instead of large card/chip grids.

**Default next task: plan a simplified `/custom` redesign. Wait for user approval before executing.**

Do not wire Formspree.  
Do not add backend.  
Do not build Watches/Grillz yet.  
Do not deploy.  
Do not install final logo until user provides the SVG/2x file.

---

## Brand Personality — Effi

**Effi** is the visible face and personality of 2T Jewelers on TikTok and Instagram.

- Effi's signature catchphrase / slogan: **"BANG."**
- Future About, Store, and Social sections must treat Effi and "BANG" as real, owned brand personality elements — not placeholder copy.
- The site should eventually feature the real downtown Pittsburgh store and real Effi / social media footage.

**Asset rules (strict):**
- Do not use fake Effi images.
- Do not use fake store images.
- Do not use fake social clips.
- Do not write invented Effi quotes.

**Spelling:** Always write **Effi**. Never write "Effie."

**Tenure language guard:**
Current approved wording is **"nearly 30 years"**.
Do not change to "over 30 years" or any other formulation unless the user explicitly confirms the exact language.

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
