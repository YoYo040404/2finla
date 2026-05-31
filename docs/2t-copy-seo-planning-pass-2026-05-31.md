# 2T Jewelers — Copywriting + SEO Planning Pass
**Date:** 2026-05-31  
**Type:** Planning only. No app code edited. No commits. No push.  
**Live site reviewed:** https://2finla.vercel.app  
**Builds on:** All listed source documents + direct repo inspection.

---

## 1. Executive Verdict

The site is claim-safe, brand-correct, and structurally sound. The homepage is the strongest surface. The two most actionable next moves are:

1. **Fix the global metadata gap** — the root `layout.tsx` title and description omit Pittsburgh entirely. That is the single highest-leverage copy+SEO fix available right now and requires only two string edits with zero design risk.
2. **Execute Pass 5C** — the competitor-backed copy sharpening pass (hero secondary copy, category card one-liners, BANG. stamp, social section copy, promo module 3-state system) is fully researched and scoped. It is pending user approval. These are the highest-ROI copy improvements on the homepage.

After those two, the next tier is SEO scaffolding: add LocalBusiness JSON-LD, noindex the empty Best Sellers/New Arrivals routes, and sharpen the generic catch-all category description template.

Do not add fake products. Do not redesign `/custom`. Do not build material/stone SEO landing pages until real inventory exists. Do not build a Pittsburgh local page until the production domain is live and NAP is cleaned up.

---

## 2. Evidence Reviewed

### Source documents read
| File | Status |
|---|---|
| `PROJECT_CONTEXT.md` | ✅ Read |
| `AGENT_HANDOFF.md` | ✅ Read |
| `NEXT_ROADMAP.md` | ✅ Read |
| `CLAIM_SAFETY.md` | ✅ Read |
| `CLAUDE.md` (project) | ✅ Read |
| `CUSTOM_UX_REWRITE_BRIEF.md` | ✅ Read |
| `docs/2t-claude-tools-skills-protocol.md` | ✅ Read |
| `docs/2t-voc-copy-system.md` | ✅ Read |
| `docs/2t-copy-swipe-map.md` | ✅ Read |
| `docs/2t-pass5b-competitor-backed-copy-research.md` | ✅ Read |
| `docs/2t-growth-strategy-seo-cro-90day.md` | ✅ Read |
| `docs/2t-homepage-master-direction.md` | ✅ Read |
| `docs/2t-architecture-cro-voc-audit-2026-05-30-EN.md` | ✅ Read |

### Source documents missing
| File | Status |
|---|---|
| `2T_PROJECT_MASTER_SOURCE_CURRENT.md` | ❌ Not found in repo — content reconstructed from `PROJECT_CONTEXT.md` + `AGENT_HANDOFF.md` which carry the same facts |
| `docs/2026-05-31-asset-media-proof-plan.md` | ❌ Not found in repo |

### Repo files inspected (read-only)
| File | Notes |
|---|---|
| `app/layout.tsx` | Global metadata — critical SEO gap found |
| `app/page.tsx` | Homepage — full read |
| `app/collections/chains/page.tsx` | Dedicated chains page — full read |
| `app/collections/pendants/page.tsx` | Dedicated pendants page — full read |
| `app/collections/[category]/page.tsx` | Catch-all for bracelets, rings, earrings, best-sellers, new-arrivals — full read |
| `app/grillz/page.tsx` | Partial read (metadata + structure) |
| `app/watches/page.tsx` | Partial read (metadata + structure) |
| `data/nav.ts` | Navigation data — full read |
| `components/layout/PromoBar.tsx` | Full read |
| Note: `app/custom/page.tsx` not re-read per task scope (approved, do not redesign) | — |

---

## 3. Current Copy Diagnosis

### Homepage
Strong. "BUILT TO HIT." hero is the best headline in the competitive set. Hero secondary copy ("Grillz. Watches. Chains. Rings. Custom pendants. Shop it or build it. Text before you buy.") is direct and product-dense. BANG. stamp, dual CTAs, material cue, promo ticker, custom lane, and ShineDirectionBand are all in place and claim-safe. ProofContactZone (Pittsburgh + Social) anchors the bottom.

The main gap on the homepage is that the secondary product-dense line is close to Option D from Pass 5B but not exactly the approved draft. Pass 5C was designed to tighten this — it remains pending.

### PromoBar
"20% OFF YOUR FIRST CUSTOM ORDER ◆ START YOUR PIECE TODAY" — matches the business-owner approved scope. Correct. Claim-safe.

### Category pages — Chains (`/collections/chains`)
H1: "CHAINS BUILT TO HIT." — strong.  
Metadata: Pittsburgh in title and description. ✅  
Body copy: guided-inquiry direction with style chips, material chips, pendant-pairing bridge. All claim-safe.  
Gap: No products. The page is entirely an inquiry-direction funnel, which is correct for now but limits SHOP JEWELRY's commercial weight. (This is the structural diagnosis from the CRO audit — fix is an asset problem, not a copy problem.)

### Category pages — Pendants (`/collections/pendants`)
H1: "PENDANTS THAT HIT DIFFERENT." — directionally correct; "HIT DIFFERENT" is in the VOC.  
Metadata: Pittsburgh in title and description. ✅  
Body copy: "send the logo, the photo, the name, the sketch, or a reference" — good. "THE IDEA / THE LOOK / THE CHAIN" cards — strong.  
Gap: Same as chains — no products.

### Category pages — Catch-all (`/collections/[category]` — bracelets, rings, earrings, best-sellers, new-arrivals)
Metadata generated: `2T Jewelers | ${title} — Pittsburgh, PA` / generic description formula.  
Headlines (from CATEGORY_DATA): "Wrist weight that hits." / "Pinky, statement, signet." / "Studs, hoops, drops." — functional but lowest copy quality on the site. Slightly generic.  
Best Sellers: "Ask what's moving." — claim-safe and correct.  
New Arrivals: "Ask what just came in." — claim-safe and correct.  
Gap: Best Sellers and New Arrivals are currently indexable empty inquiry pages. Should be noindexed until real inventory exists (CRO audit recommendation, §12).

### Grillz (`/grillz`)
Metadata: "Custom Grillz — Pittsburgh, PA" in title. ✅  
Process flow: 01 TEXT / 02 WE REVIEW / 03 WE QUOTE FIRST — correct and claim-safe.  
No dental/fit/FDA/mold-kit language. ✅

### Watches (`/watches`)
Metadata: "Iced-Out Watches — Pittsburgh, PA" in title. ✅  
Direction chips: "Diamond Bezel Direction / Iced Watch Direction / Ask What's Available" — inquiry-led. No authentication/Rolex/factory-set claims. ✅

### Header / Nav
`mainNav`: Shop → Custom → Grillz → Watches → About. Watches is in primary nav. ✅  
`shopCategories` dropdown: Chains, Pendants, Bracelets, Rings, Earrings, Watches, Grillz, Custom Jewelry, New Arrivals, Best Sellers.  
Gap: "Custom Jewelry" appears in both the primary nav and the shop categories dropdown — **confirmed duplicate**. One of these should be removed.

### Footer
Navigation organized into Shop (5 categories) / Inquire (Custom, Grillz, Watches) / Browse (All Collections, Best Sellers, New Arrivals). Clean and claim-safe. Correct.

### Social / Pittsburgh section
Handled via `ProofContactZone` component (inspected via homepage). PittsburghStory shows: `25 YEARS / 5TH AVE / 332 FIFTH AVE` with gold left-border rules. SocialTeaser uses channel-map rows with real @2tjewelers links. No fake follower counts, no fake UGC. ✅

### CTAs
Text-first CTAs ("TEXT 2T ABOUT CHAINS →", "TEXT 2T ABOUT PENDANTS →", "ASK ABOUT GRILLZ →", "ASK ABOUT WATCHES →") are correctly differentiated by category. "BUILD CUSTOM →" is present throughout as the secondary CTA. WhatsApp prefilled messages per category are correctly wired.

---

## 4. What Must Stay

| Element | Reason |
|---|---|
| "BUILT TO HIT." — hero H1 | Confirmed strongest headline in competitive set. No change. |
| "SHOP JEWELRY" / "BUILD CUSTOM →" hero CTAs | Correct dual-path wording. Matches competitive best practice. |
| BANG. stamp placement and period | Owned brand mark. Do not remove or explain. |
| ShineDirectionBand (METAL: GOLD · SILVER / 925 Sterling Silver — STONE: DIAMONDS · MOISSANITE / D-color VVS Moissanite — Details confirmed per piece.) | Business-level confirmed facts. Claim-safe. Strong. |
| "25 years" tenure language | Confirmed by user 2026-05-31. Do not change. |
| "NO DEPOSIT TO START · WE QUOTE FIRST" | Core custom trust line. Keep. |
| "Ask before you buy." | Universal friction remover. Keep. |
| "Product details confirmed per piece." | Universal safety phrase. Keep everywhere. |
| "Different shine. Different direction." | Material/stone positioning separator. Keep. |
| "Details confirmed per piece." | Safety footer for all material/stone contexts. |
| "20% OFF YOUR FIRST CUSTOM ORDER" promo bar copy | Business-owner approved scope (promo bar only). Do not rephrase or extend. |
| "ASK WHAT'S RUNNING NOW" promo ticker | Correct safe placeholder. Keep until real offer confirmed. |
| No products / no prices on any page | No fake inventory. Hold. |
| Watches as inquiry-only | High legal risk (BeckerTime). No change until authentication framework exists. |
| Grillz — no dental/fit/FDA language | Forbidden. No change. |
| All WhatsApp prefilled messages per category | Correct and working. Keep. |
| "Real Pittsburgh store. 25 years. Text before you buy." trust anchor | Primary trust hierarchy. Keep. |
| `/custom` page structure and lead flow | User-approved and live. Do not redesign. |
| Resend lead capture backend | Working and live. Do not touch. |
| Footer navigation structure | Correct (Shop / Inquire / Browse split). Keep. |

---

## 5. What Should Be Improved

Prioritized by impact, copy+SEO only.

**Priority 1 — Global metadata gap (2 string edits, zero design risk)**
- `app/layout.tsx` title: "2T Jewelers | Custom Jewelry, Watches & Grillz" → missing Pittsburgh
- `app/layout.tsx` description: "Custom chains, pendants, grillz, diamond watches, and fine jewelry. Real materials. Direct inquiry. Build the piece around your look." → no Pittsburgh, no 25 years, no text-first signal

**Priority 2 — Homepage: Pass 5C copy sharpening (pending user approval)**
- Hero secondary copy (Option D direction from Pass 5B §4)
- BANG. stamp refinement
- Category gateway card one-liners (8 cards × 1 line)
- Social section card copy (TikTok / WhatsApp)
- Promo module 3-state copy system

**Priority 3 — JSON-LD structured data (technical SEO, no visible copy change)**
- LocalBusiness schema: missing from the entire site
- BreadcrumbList schema: missing from category pages

**Priority 4 — noindex Best Sellers / New Arrivals**
- Both are indexable empty inquiry pages — thin content + no real inventory
- Should be `noindex` until real pieces exist

**Priority 5 — Category catch-all headlines (bracelets, rings, earrings)**
- "Wrist weight that hits." / "Pinky, statement, signet." / "Studs, hoops, drops." are weakest copy on the site
- Small improvements possible that stay within claim-safety and don't require redesign

**Priority 6 — Remove duplicate Custom Jewelry nav entry**
- "Custom" in mainNav + "Custom Jewelry" in shopCategories dropdown = redundant
- Keep mainNav "Custom" (cleaner label), remove from shopCategories OR consolidate

**Priority 7 — Generate-metadata description for catch-all pages**
- Current template: "Shop ${category} at 2T Jewelers in Pittsburgh, PA. Real store. 25 years. Ask about availability and material details. Text to ask."
- Functional but thin and formulaic — improve per-category when copy pass is approved

---

## 6. Claim-Safety Review

### No regressions found
The live code is clean. No fake products, no fake prices, no fake inventory, no fake social proof, no fake celebrity proof, no fake reviews, no blanket material/stone claims outside their approved scope.

### Tenure language
"25 years" appears in ProofMarquee (ProofContactZone), chains page title, pendants page title, watches page description, grillz page description, and [category] catch-all generated description. All correct per 2026-05-31 confirmation.

**CRITICAL NOTE:** One outdated reference found in `docs/2t-pass5b-competitor-backed-copy-research.md` Section 6 (Pittsburgh block recommendation): "REAL PITTSBURGH STORE. OVER 30 YEARS. TEXT OR COME THROUGH." and Section 9 trust phrase hierarchy: "Real Pittsburgh Store. 25 Years." These are planning docs, not live copy. The live site correctly uses "25 years." The planning doc's "OVER 30 YEARS" references are stale drafts — do not use them.

### Promo bar
"20% OFF YOUR FIRST CUSTOM ORDER" — business-owner approved scope: promo bar only. Correct placement. Do not extend to hero, category pages, or popups without re-confirmation.

### Material/stone claims
- "925 Sterling Silver" and "D-color VVS Moissanite" appear only in ShineDirectionBand and homepage direction cues. Confirmed at business-level. ✅
- No per-piece badges with material/stone claims deployed. ✅
- No GRA/GIA claims anywhere. ✅
- No "moissanite diamond," "diamond alternative," "looks like a diamond," or downgrade language. ✅

### Watches
No "factory-set," "authenticated," "Rolex," or brand-name claims. Inquiry-only wording throughout. ✅

### Grillz
No FDA, dentist-approved, fit guarantee, mold kit, or dental copy. ✅

### Ecommerce language risk (low but flag)
The chains page says "No deposit. We quote before the build." This is correct — the "no deposit" claim is approved in the context of the custom/inquiry flow where no transaction is initiated. ✅  
The catch-all earrings note: "Lease-to-own options may be available through Acima." — this is the approved Acima safe wording. ✅

### OG image path
`/assets/brand/2t-og-image-1200x630.png` is referenced in `layout.tsx`. This file does not appear in the repo. When shared on social media, this will render a broken image. Low priority for now but flag for logo/asset planning.

---

## 7. Voice Direction

### Core voice: hard hip-hop / street-luxury / Pittsburgh-rooted / direct / text-first / product-aware / claim-safe

The voice is already correct in the live code. This section captures the rules for the next copy pass.

### Voice rules

**DO use:**
- Short, punchy sentences. One idea. Active verb. Present tense.
- Direct buyer language: "Text 2T." / "Send the photo." / "Ask what's in stock." / "We quote before the build."
- Product-specific vocabulary: iced-out, Cuban, rope, tennis, bust down, pendant, grillz, name piece, logo piece
- Pittsburgh as trust: "Real Pittsburgh store." / "332 Fifth Ave." / "25 years."
- Confidence without overclaiming: "Details confirmed per piece." / "Ask before you buy."
- Imperative verbs: Text. Send. Ask. Start. Bring.
- Short capitalized section labels: CHAINS. PENDANTS. GRILLZ. WATCHES. CUSTOM.

**DO NOT use:**
- Boutique/wedding language: "elevated," "curated," "bespoke," "exquisite," "timeless"
- Corporate language: "submit your inquiry," "our team," "personalized solution," "begin your journey"
- Parody AAVE or fake slang: "bussin," "drip so crazy," "for the culture," "straight fire drip"
- Vague luxury: "luxury redefined," "premium lifestyle," "refined elegance"
- Overclaims: "solid gold" (blanket), "real diamonds" (blanket), "VVS" (blanket), "in stock" (without inventory)
- Budget/hierarchy language for silver or moissanite

### Use / Avoid examples

| Use | Avoid |
|---|---|
| "Text 2T about chains." | "Submit your chain inquiry." |
| "Send the logo. We'll help build it." | "Share your vision with our design team." |
| "Ask what's in stock now." | "Browse our curated selection." |
| "No deposit. We quote first." | "No payment required to start your custom journey." |
| "Gold or silver. Diamond or moissanite. Different shine. Different direction." | "Moissanite is a beautiful affordable diamond alternative." |
| "Real Pittsburgh store. 25 years." | "Pittsburgh's premier luxury jeweler since 1998." |
| "This piece is built to hit." | "This piece was crafted with refined attention to detail." |
| "Bring the idea. We'll shape the piece." | "We transform your unique vision into a timeless creation." |
| "Ask about the process before ordering." | "Our seamless custom process delivers exceptional results." |

---

## 8. Homepage Copy Plan

### What to keep as-is
- "BUILT TO HIT." — H1 locked. Do not touch.
- "SHOP JEWELRY" / "BUILD CUSTOM →" dual CTAs — locked.
- "PICK THE PIECE." / "Gold · Silver · Diamonds · Moissanite" material cue — keep.
- "Pick the piece. Then pick the shine." — keep.
- BANG. stamp — keep, refine placement in Pass 5C.
- Custom lane: "YOUR LOGO. YOUR NAME. YOUR PIECE." + chips + "NO DEPOSIT TO START · WE QUOTE FIRST" — keep.
- "START THE REQUEST →" CTA on custom lane — keep.
- Promo ticker: "ASK WHAT'S RUNNING NOW / DETAILS CONFIRMED PER PIECE / PROMO TERMS SHOWN ON ELIGIBLE PIECES / TEXT 2T →" — keep.
- ShineDirectionBand — keep.
- ProofContactZone (Pittsburgh + Social) — keep current structure.

### What to tighten (Pass 5C — requires approval)

**Hero secondary copy** — current: "Grillz. Watches. Chains. Rings. Custom pendants. Shop it or build it. Text before you buy."  
This is close to Option D from Pass 5B. The recommendation was:
```
BUILT TO HIT.
Grillz. Watches. Chains. Pendants. Custom.
Real Pittsburgh jeweler. Text 2T.
```
Current live copy adds "Rings" (fine) and uses "Shop it or build it. Text before you buy." instead of "Real Pittsburgh jeweler. Text 2T." The Pass 5B recommendation is slightly tighter because it names Pittsburgh and prompts contact. Either version is acceptable — user should choose.

**DRAFT (for Pass 5C approval, not implementation):**
```
Grillz. Watches. Chains. Pendants. Custom.
Real Pittsburgh jeweler. Text 2T.
```

**Category gateway card one-liners** — current state: some cards have one-liners (PENDANTS: "Logo. Photo. Name. Number." / RINGS: "Big face. Heavy statement."), some don't carry enough commercial signal. Pass 5B §7 defines:
```
GRILLZ       — "Custom fit. Gold or stones. Ask 2T first."
WATCHES      — "Iced bezels and diamond faces. Ask what's in."
CHAINS       — "Cuban, rope, and tennis. Ask what's in stock."
PENDANTS     — "Photo, logo, name, or number. Send the idea."
RINGS        — "Big face, heavy statement. Details per piece."
BRACELETS    — "Wrist game with weight. Text to ask."
EARRINGS     — "Iced and clean. Ask what's available."
CUSTOM       — "Have a logo or photo? Build the piece."
```
These are in the scope of Pass 5C. They are directional drafts — user approval required before implementation.

**Social section (SocialTeaser)** — current TikTok copy: "See what's dropping." — Pass 5B recommends "Watch the build. @2tjewelers" — stronger because it signals the content type.  
Current WhatsApp copy: confirm current vs. Pass 5B recommendation "Text before you buy. Ask anything."  
Both are in Pass 5C scope.

**Pittsburgh block** — current copy in PittsburghStory includes "25 YEARS" and "5TH AVE" with gold left-border rules. Strong. Any pass should not add "OVER 30 YEARS" (outdated) or invent new claims. If anything, the recommendation from Pass 5B was to add "TEXT OR COME THROUGH" as a CTA — this is claim-safe and fine.

---

## 9. Category Page Copy Plan

### Chains (`/collections/chains`)

**Page job:** Guide chain-direction inquiry — style, material, pendant pairing — to a text conversation.  
**Buyer intent:** "I want a Cuban / I'm looking for a chain that goes with my pendant / what chains do you have?"  
**H1 status:** "CHAINS BUILT TO HIT." — keep. ✅  
**Intro direction:** Current intro is strong. "The foundation of every neck. Tell us the style and direction — we guide the conversation before quote or production." — keep.  
**CTA direction:** "TEXT 2T ABOUT CHAINS →" — correct and specific.  
**Claim-safe spec language:** "Details confirmed per piece. Gold or silver direction. Diamond, moissanite, or no stones." — current implementation uses this correctly.  
**Internal links:** Links to `/custom` (BUILD CUSTOM →). Could add a direct link to `/collections/pendants` ("see what chains pair with which pendants") — deferred until a pass on pendant/chain pairing architecture.  
**Wait for:** Real product images. Real "in stock" inventory before adding any product cards.

---

### Pendants (`/collections/pendants`)

**Page job:** Drive custom pendant inquiry and show the range of input types (logo, photo, name, number, iced-out, custom shape).  
**Buyer intent:** "Can I send my photo? / I want a name pendant / how much is a logo pendant?"  
**H1 status:** "PENDANTS THAT HIT DIFFERENT." — passable. Could be stronger. Directional alternative (draft): "PENDANTS BUILT FROM YOUR IDEA." — focuses on the custom entry point.  
**Intro direction:** Current intro is strong: "The pendant is the statement. Send the logo, the photo, the name, or the idea." — keep.  
**CTA direction:** "TEXT 2T ABOUT PENDANTS →" — correct.  
**Internal links:** Links to `/custom`. Could add chain pairing prompt — deferred.  
**Claim-safe spec language:** "Details confirmed per piece. Ask about current availability, material direction, and finish options." ✅  
**Wait for:** Real pendant images (photo pendants, logo pendants, name pendants) — highest-conversion media for this category.

---

### Bracelets (`/collections/bracelets`)

**Page job:** Light inquiry direction page for bracelets.  
**Buyer intent:** "What bracelets do you have? / Cuban link bracelet / iced bangle"  
**H1 current:** "Bracelets" (catch-all H1, which is the category title). Subheadline: "Wrist weight that hits." — weak, too generic.  
**H1 recommendation:** Keep "Bracelets" as the H1 (correct for SEO). Improve the italic gold subheadline.  
**Draft subheadline (mark as draft):** "Cuban link. Tennis. Iced bangle. Ask what's in."  
**CTA direction:** "TEXT 2T ABOUT BRACELETS →" — correct.  
**Claim-safe spec language:** "Material and stone details confirmed per piece. Ask about available styles and sizing." ✅  
**Internal links:** Currently links to `/custom` via CTA. Acceptable.  
**Wait for:** Real product images before product cards.

---

### Rings (`/collections/rings`)

**Page job:** Inquiry direction for rings — pinky, statement, signet, iced.  
**Buyer intent:** "Do you have rings? / iced pinky ring / statement ring"  
**H1 current:** "Rings" (category title). Subheadline: "Pinky, statement, signet." — thin, no energy.  
**Draft subheadline (mark as draft):** "Statement face. Pinky. Signet. Ask what's in."  
**CTA direction:** "TEXT 2T ABOUT RINGS →" — correct.  
**Internal links:** Links to `/custom` via CTA. Acceptable.  
**Wait for:** Real product images.

---

### Earrings (`/collections/earrings`)

**Page job:** Inquiry direction for earrings — studs, hoops, drops.  
**Buyer intent:** "Do you have diamond studs? / iced hoops"  
**H1 current:** "Earrings" (category title). Subheadline: "Studs, hoops, drops." — minimal.  
**Draft subheadline (mark as draft):** "Iced studs. Diamond hoops. Ask what's available."  
**CTA direction:** "TEXT 2T ABOUT EARRINGS →" — correct.  
**Wait for:** Real product images.

---

### Grillz (`/grillz`)

**Page job:** Inquiry-first grillz page. Educate on the process and drive text inquiry.  
**Buyer intent:** "How much are grillz? / do you make custom grillz / top and bottom set / diamond grillz"  
**H1 status:** Not inspected fully but confirmed claim-safe structure (01 TEXT / 02 REVIEW / 03 QUOTE FIRST process). Keep.  
**CTA direction:** "ASK ABOUT GRILLZ →" — correct.  
**Claim-safe spec language:** No dental/fit/FDA/mold-kit language. Material direction confirmed before the build. ✅  
**SEO direction:** Target: "custom grillz Pittsburgh" — local asymmetric win. Future local landing page when production domain is live.  
**Internal links:** Should link to `/custom` as the alternative path for complex builds.  
**Wait for:** Real grillz photos. Fit process documentation from the business owner before adding any process language beyond current.

---

### Watches (`/watches`)

**Page job:** Inquiry-first watches page. High-ticket. No authentication claims. Direction-only.  
**Buyer intent:** "What iced watches do you have? / diamond bezel watch / how much is an iced watch?"  
**H1 status:** Not fully inspected but confirmed claim-safe structure (direction chips, budget range prompt, "ask before buying"). Keep.  
**CTA direction:** "ASK ABOUT WATCHES →" — correct.  
**Claim-safe spec language:** "Ask what watches are available now. Details, condition, stones, and pricing are confirmed per piece." — correct level of specificity without authentication claims. ✅  
**Legal note:** No brand names, no "factory-set," no "authenticated" without per-watch documentation (Rolex v. BeckerTime). Hold all product-level watch claims until per-piece authentication framework is built.  
**Wait for:** Real watch photos. Per-watch verification protocol. Authentication documentation framework.

---

### Best Sellers (`/collections/best-sellers`)

**Page job:** Currently an empty inquiry placeholder. "Ask what's moving." — correct.  
**Current status:** Fully indexable but has no real products. Should be `noindex` now.  
**Future job (after real inventory):** Featured real in-stock pieces across categories. "Most asked about this week." — requires real confirmed inventory.  
**CTA direction:** "TEXT 2T WHAT'S MOVING →" — correct placeholder.  
**Implement now:** Add `noindex` meta tag to this route until real inventory populates it.  
**Wait for:** Real product data and photos.

---

### New Arrivals (`/collections/new-arrivals`)

**Page job:** Currently an empty inquiry placeholder. "Ask what just came in." — correct.  
**Current status:** Fully indexable but has no real products. Should be `noindex` now.  
**Future job (after real inventory):** New pieces as they land.  
**CTA direction:** "TEXT 2T WHAT'S NEW →" — correct placeholder.  
**Implement now:** Add `noindex` meta tag to this route until real inventory populates it.  
**Wait for:** Real product data and photos.

---

## 10. SEO Planning

### Global title/meta framework

**Homepage (fix now — Priority 1):**

Current (layout.tsx):
```
title: '2T Jewelers | Custom Jewelry, Watches & Grillz'
description: 'Custom chains, pendants, grillz, diamond watches, and fine jewelry. Real materials. Direct inquiry. Build the piece around your look.'
```

Recommended:
```
title: '2T Jewelers | Grillz, Watches, Chains & Custom Jewelry — Pittsburgh, PA'
description: 'Real Pittsburgh jewelry store. Custom chains, pendants, grillz, and iced-out watches. 25 years. Text 2T to ask what\'s in stock or start a custom piece.'
```

Why: Pittsburgh is the strongest asymmetric differentiator. No major hip-hop jewelry ecommerce brand has a named physical store in a specific U.S. city. The current title misses it entirely. 60-char target for title. 155-char target for description.

Char check:
- Title: "2T Jewelers | Grillz, Watches, Chains & Custom Jewelry — Pittsburgh, PA" = 72 chars — slight trim needed
- Revised: "2T Jewelers — Grillz, Watches & Custom Jewelry | Pittsburgh, PA" = 63 chars ✅
- Description: 149 chars ✅

**Per-page title/meta framework:**

| Page | Current title | Recommended title | Status |
|---|---|---|---|
| Homepage (via layout.tsx) | 2T Jewelers \| Custom Jewelry, Watches & Grillz | 2T Jewelers — Grillz, Watches & Custom Jewelry \| Pittsburgh, PA | Fix now |
| Chains | 2T Jewelers \| Chains — Cuban, Rope & Tennis — Pittsburgh, PA | Keep ✅ | OK |
| Pendants | 2T Jewelers \| Custom Pendants — Logo, Photo & Name — Pittsburgh, PA | Keep ✅ | OK |
| Grillz | 2T Jewelers \| Custom Grillz — Pittsburgh, PA | Keep ✅ | OK |
| Watches | 2T Jewelers \| Iced-Out Watches — Pittsburgh, PA | Keep ✅ | OK |
| Bracelets (catch-all) | 2T Jewelers \| Bracelets — Pittsburgh, PA | 2T Jewelers \| Bracelets — Cuban Link, Tennis & Iced — Pittsburgh, PA | Improve |
| Rings (catch-all) | 2T Jewelers \| Rings — Pittsburgh, PA | 2T Jewelers \| Rings — Iced-Out, Statement & Signet — Pittsburgh, PA | Improve |
| Earrings (catch-all) | 2T Jewelers \| Earrings — Pittsburgh, PA | 2T Jewelers \| Earrings — Diamond Studs & Iced Hoops — Pittsburgh, PA | Improve |
| Best Sellers | 2T Jewelers \| Best Sellers — Pittsburgh, PA | noindex until real inventory | Fix now |
| New Arrivals | 2T Jewelers \| New Arrivals — Pittsburgh, PA | noindex until real inventory | Fix now |
| /custom | Inspect — should include Pittsburgh | Keep or add Pittsburgh | Check |

---

### Homepage metadata SEO

Full recommendation after title fix:
```typescript
title: '2T Jewelers — Grillz, Watches & Custom Jewelry | Pittsburgh, PA',
description: 'Real Pittsburgh jewelry store. Custom chains, pendants, grillz, and iced-out watches. 25 years. Text 2T to ask what\'s in stock or start a custom piece.',
openGraph: {
  title: '2T Jewelers — Built to Hit.',
  description: 'Real Pittsburgh jewelry store. Grillz, watches, chains, custom pendants. 25 years. Text 2T.',
  // image: keep existing path — but verify the OG image file actually exists before launch
}
```

Note: The OG image at `/assets/brand/2t-og-image-1200x630.png` does not appear to exist in the repo. This is the highest-priority asset to create before any traffic or social promotion — a missing OG image renders as a broken card on every social share.

---

### Category metadata direction

**Chains and Pendants pages:** Title and description are already strong and Pittsburgh-anchored. Keep.

**Catch-all template** — current generated description:
```
`Shop ${title.toLowerCase()} at 2T Jewelers in Pittsburgh, PA. Real store. 25 years. Ask about availability and material details. Text to ask.`
```
This is functional but generic. Improvements would be per-category strings in CATEGORY_DATA. No urgent fix — but when doing a copy pass on the catch-all, add unique descriptions per category.

---

### Local Pittsburgh SEO direction

2T's strongest SEO asymmetry: zero local Pittsburgh competitors in hip-hop/street-luxury/grillz. All local competitors are bridal/traditional.

**Priority local SEO pages (do not build yet — wait for production domain + real content):**
- `/grillz-pittsburgh` — "Custom Grillz Pittsburgh, PA — 2T Jewelers" — highest local intent
- `/custom-jewelry-pittsburgh` — "Custom Jewelry Pittsburgh — Logo Pendants, Name Pieces, Watches"
- `/custom-pendant-pittsburgh` — photo pendant + logo pendant Pittsburgh intent

**Trigger condition:** Build these pages only after:
1. Production domain is live (`2tjewelers.com` or similar)
2. NAP cleaned up on all directory listings (currently pointing to `2tjewelers.placeweb.site` per growth strategy doc)
3. At least minimal real content (1-3 real products or real custom before/after examples)

Until then, the chains, pendants, grillz, and watches pages already include Pittsburgh in their metadata and H1 context — that's enough for the prototype stage.

---

### Custom pendant SEO direction

Key terms: "custom photo pendant," "custom logo pendant," "custom name pendant," "custom pendant Pittsburgh"  
Current state: The `/collections/pendants` page is well-structured for this intent. Style chips include "Logo," "Photo," "Name," "Number" — signal-rich for these queries.  
Future: `/custom-photo-pendant` and `/custom-logo-pendant` dedicated landing pages after real before/after photos exist.

---

### Grillz SEO direction

Key terms: "custom grillz," "gold grillz," "grillz Pittsburgh," "how much do grillz cost"  
Current state: `/grillz` page addresses the primary intent. Pittsburgh in metadata.  
Note: Do not add "dentist-approved," "safe for teeth," "fit guarantee," or "mold kit" for SEO — these are forbidden under CLAIM_SAFETY regardless of keyword intent.

---

### Watches SEO direction

Key terms: "iced-out watch," "diamond watch," "bust down watch," "diamond watch Pittsburgh"  
Current state: `/watches` page is inquiry-only with "Iced-Out Watches" in the title.  
High legal risk: Do not build product pages or add authentication claims without per-watch documentation and the authentication framework. "Iced-Out Watches — Pittsburgh, PA" as the current title is correct scope.

---

### Silver/moissanite SEO direction

Business-level confirmed: all 2T silver is 925 Sterling Silver, all moissanite is D-color VVS.  
Key terms: "moissanite jewelry Pittsburgh," "925 sterling silver chain," "moissanite Cuban chain"  
**Status:** Do not build `/moissanite-jewelry` or `/sterling-silver-jewelry` SEO pages until real inventory and photos exist. Thin pages with no real product = claim risk + SEO thin-content risk.  
Current approach (homepage ShineDirectionBand + per-category material chips) is the correct interim positioning.

---

### Canonical/sitemap/robots notes

**Canonicals:** Every page should have a canonical tag pointing to its clean URL. Next.js sets this automatically from `metadataBase`. Verify that `NEXT_PUBLIC_SITE_URL` is set correctly in the Vercel environment.

**Sitemap:** Next.js generates `sitemap.xml` automatically at `/sitemap.xml` via `app/sitemap.ts` if the file exists, or via the build if sitemap generation is configured. Confirm this is generating for all real pages. Best Sellers and New Arrivals should be excluded until they have real content.

**Robots:** `/robots.txt` should allow the main site and block staging/preview environments. Verify `noindex` headers are not set on the production Vercel deployment inadvertently.

**Staging:** `2finla.vercel.app` (the preview URL) should have `noindex` in its headers or robots before the production domain is launched to prevent duplicate-content signals.

---

### Structured data recommendations

**LocalBusiness — add now (Priority 3)**

The site has no JSON-LD anywhere. This is a gap. A LocalBusiness schema in `app/layout.tsx` would signal Pittsburgh physical location to Google for local search eligibility.

```json
{
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "name": "2T Jewelers",
  "description": "Custom jewelry, grillz, iced-out watches, chains, and pendants. Real Pittsburgh store. 25 years.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "332 Fifth Ave",
    "addressLocality": "Pittsburgh",
    "addressRegion": "PA",
    "postalCode": "15222",
    "addressCountry": "US"
  },
  "telephone": "+14122817072",
  "url": "https://2tjewelers.com",
  "sameAs": [
    "https://www.instagram.com/2tjewelers",
    "https://www.tiktok.com/@2tjewelers"
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "10:00",
    "closes": "18:00"
  }]
}
```
Note: Hours above are placeholder — confirm actual business hours with the owner before publishing JSON-LD.

**BreadcrumbList — add to category pages (deferred)**
Category pages already have breadcrumb UI (`Collections › Chains`). Add matching JSON-LD to the dedicated pages (chains, pendants, grillz, watches) in a later copy/metadata pass.

**Product schema — wait**
Do not add `Product`/`Offer` structured data until real products with real prices and confirmed availability exist. Google requires offer data to match what is actually on the page.

**Review schema — do not add**
No real reviews exist on the site. Do not add review markup.

---

### Image filename/alt strategy

**Current state:** Demo concept images have `alt` text like "Grillz — demo concept visual" — correct and honest.  
**When real product images arrive:**
- Filenames: descriptive + keyword-aligned. Examples: `cuban-chain-gold-2t-jewelers.jpg`, `custom-logo-pendant-iced-925-silver.jpg`, `grillz-full-set-gold-pittsburgh.jpg`
- Alt text: product-specific, claim-safe. "Gold Cuban chain — 2T Jewelers Pittsburgh" (material only if confirmed per piece)
- Do not use "VVS diamond" or karat claims in alt text without per-piece verification

---

### Internal linking map

**Current state:** Every category page links to `/custom` via "BUILD CUSTOM →" CTA. ✅  
**Missing links:**
- Homepage → `/collections` (the SHOP JEWELRY anchor goes to `#shop-jewelry`, not `/collections` — that is fine for UX but there is no deep `/collections` root page link in the hero)
- `/collections/chains` → `/collections/pendants` (chain+pendant pairing bridge exists but could be a direct link, not just a CTA to `/custom`)
- `/grillz` → `/custom` (should already be there — confirm)
- `/watches` → `/custom` (should already be there — confirm)

**Implement in next copy/metadata pass:**
- Add `/collections/pendants` as an internal link from the chains "BUILD THE FULL PIECE" section
- Add `/collections/chains` as an internal link from pendants "THE CHAIN" card

---

## 11. Future Shopify Readiness

Planning only. Do not implement. Do not switch now.

**Collections/product types:**
- Primary: Chains / Pendants / Rings / Bracelets / Earrings / Grillz / Watches
- Custom is an inquiry flow, not a product type in Shopify
- Material is a cross-cutting filter inside categories — not a separate collection

**Tags (for filtering and merchandising):**
- Style: cuban / rope / tennis / franco / figaro / iced-out / custom
- Metal: gold / silver / gold-plated (requires per-piece verification before publishing)
- Stone: diamond / moissanite / no-stones (never "moissanite diamond")
- Type: chain / pendant / ring / bracelet / earring / watch / grillz
- Status: in-stock / made-to-order / inquiry-only

**Metafields (for verified claims — build on trust architecture):**
- `material.metal`: gold / silver / gold-plated (with karat or base confirmed)
- `material.stone`: natural-diamond / lab-grown-diamond / moissanite / no-stones
- `material.grade`: VVS / VS / SI (per-piece only)
- `material.certification`: GRA / GIA / none (cert confirmed before publishing)
- `material.purity`: 925 / 14k / 10k / 18k (confirmed per piece)
- `product.condition`: new / pre-owned / custom-modified (critical for watches)
- `product.availability`: in-stock / made-to-order / inquiry

**Filters:**
- By metal (Gold / Silver) — only when product metafields are populated
- By stone (Diamond / Moissanite / No Stones) — same condition
- By in-stock status — only when live inventory exists
- Gold/Silver and Diamond/Moissanite should be cross-cutting filters inside each category (Option A architecture — not separate storefronts)

**Verified-claim badges:**
- `[925 STERLING]` `[14K GOLD]` `[GRA VVS MOISSANITE]` `[NATURAL DIAMOND]` `[LAB-GROWN DIAMOND]` `[GIA CERT]` `[IN STOCK]`
- Show only when the relevant metafield is populated and verified
- No blanket sitewide badges

**Product spec (PDP) block:**
For each product: Metal / Stone type / Stone grade (if certified) / Karat / Carat (if applicable) / Condition / Availability / Warranty (if policy exists) / Cert link (if exists)

**Inquiry vs. checkout handling:**
- Standard pieces (chains, pendants, bracelets, rings, earrings): add-to-cart or "ask about this piece" depending on whether inventory and pricing are confirmed
- Grillz: inquiry-only. "Start with the fit — Text 2T." No add-to-cart.
- Watches: inquiry-only until per-watch authentication framework is documented. High-ticket = "Ask about this watch" with a dedicated inquiry button.
- Custom: inquiry form remains the path — not Shopify checkout

**High-ticket watch inquiry flow:**
- Watch PDP shows: name / visible style / "Details confirmed per piece" / "Ask what's available"
- No brand names (Rolex, etc.) without authentication documentation
- "Ask about this watch →" opens WhatsApp prefilled with: "I'm asking about the [watch name/ID] on your site."
- Condition, stones, and any modification (aftermarket bezel/diamonds) must be disclosed on the PDP per Rolex v. BeckerTime guidance

---

## 12. Approval Gates

The following require explicit business/user confirmation before implementation:

| Claim / Feature | Gate |
|---|---|
| Production Resend sender domain (`leads@2tjewelers.com`) | Business owner approves email domain |
| OG social image (`2t-og-image-1200x630.png`) | Asset must be created and delivered |
| LocalBusiness JSON-LD hours | Business owner confirms current hours |
| Any promo beyond "20% OFF YOUR FIRST CUSTOM ORDER" | Business owner confirms terms, dates, eligible products |
| Free shipping claim | Written policy required (currently not confirmed) |
| Warranty / lifetime guarantee claim | Written policy with defined coverage required |
| "In stock" / "available now" language on any product | Live inventory confirmation required |
| Natural diamond / lab-grown diamond copy | Per-piece origin confirmation required |
| GIA certificate claim | Physical cert per stone required |
| GRA-certified moissanite claim | Cert ships with piece — not yet confirmed |
| Solid gold / karat claims | Confirmed alloy and karat per piece required |
| Gold-plated labeling (vs. solid gold) | Per-piece confirmation required |
| "Factory-set diamonds" on watches | Per-watch confirmation required |
| "Authenticated watches" copy | Per-watch condition/source documentation required |
| Founding year (beyond "25 years") | Business owner confirms specific year if needed |
| Grillz production process details | Business owner confirms exact process, timing, deposit policy |
| Real Instagram/TikTok feed or UGC | Real verified content with permission required |
| Any photo of the real store | Business provides real store photos |
| Any real product photography | Business provides real product photos |
| Pittsburgh local SEO pages | Production domain live + NAP cleaned up |
| Watches deeper redesign | Business owner approves visual direction |
| Grillz deeper redesign | Business owner approves visual direction |

---

## 13. Recommended First Implementation Scope

After this planning pass is approved, the safest first implementation scope is:

**Scope A — Metadata-only pass (highest leverage, lowest risk, no design change):**

1. Fix `app/layout.tsx` global title and description to include Pittsburgh
2. Add LocalBusiness JSON-LD to `app/layout.tsx`
3. Add `noindex` to `/collections/best-sellers` and `/collections/new-arrivals` catch-all entries
4. Review and confirm `/custom` page title includes Pittsburgh (not inspected in this pass)

Files affected: `app/layout.tsx`, `app/collections/[category]/page.tsx` (noindex logic only)  
No visual changes. No copy changes on visible page surfaces. No design risk. No claim-safety risk.

**Scope B — Pass 5C (requires separate user approval):**  
After Scope A: homepage copy sharpening pass (5 files only — `app/page.tsx`, `ProofMarquee`, `WeeklyPromo`, `PittsburghStory`, `SocialTeaser`) per the full Pass 5C spec in `docs/2t-pass5b-competitor-backed-copy-research.md` Section 11.

Do not combine Scope A and Scope B in a single implementation pass. Approve separately.

---

## 14. Files Likely To Change in a Later Pass

These files are not edited now. Listed for reference when implementation is approved.

| File | Likely change |
|---|---|
| `app/layout.tsx` | Global title/description + LocalBusiness JSON-LD |
| `app/page.tsx` | Hero secondary copy, BANG. stamp, category card one-liners, promo module (Pass 5C) |
| `components/home/ProofMarquee.tsx` | Trust strip text strings (Pass 5C) |
| `components/home/PittsburghStory.tsx` | Tighten Pittsburgh proof block (Pass 5C) |
| `components/home/SocialTeaser.tsx` | TikTok and WhatsApp card copy (Pass 5C) |
| `components/home/WeeklyPromo.tsx` or similar | 3-state promo copy system (Pass 5C) |
| `app/collections/[category]/page.tsx` | noindex for best-sellers/new-arrivals; per-category description improvements |
| `data/nav.ts` | Remove duplicate Custom Jewelry entry from shopCategories |
| `app/collections/pendants/page.tsx` | H1 subheadline refinement, internal link to chains |
| `app/collections/chains/page.tsx` | Internal link to pendants |
| `app/custom/page.tsx` | Confirm Pittsburgh in metadata (minor check only — do not redesign) |

---

## 15. Verification Checklist For Later Implementation

When implementation is approved and executed, verify the following before reporting complete:

**Build:**
- [ ] `npm run build` passes with no errors
- [ ] TypeScript: no new type errors
- [ ] No lint errors introduced

**Visual QA (Playwright or manual):**
- [ ] Desktop 1280px — homepage loads correctly
- [ ] Mobile 390px — no horizontal scroll
- [ ] MobileCtaBar not obscuring content
- [ ] PromoBar visible and copy correct

**Metadata QA:**
- [ ] `<title>` contains Pittsburgh on homepage
- [ ] `<meta name="description">` contains Pittsburgh on homepage
- [ ] LocalBusiness JSON-LD validates at schema.org/validator
- [ ] Best Sellers and New Arrivals return `noindex` in response headers

**Claim-safety scan:**
- [ ] No new unverified claims introduced
- [ ] "25 years" — no regression to "30 years" or other formulation
- [ ] No "moissanite diamond," "diamond alternative," or diamond-conflation language introduced
- [ ] No silver downgrade language introduced
- [ ] No blanket karat, GIA, GRA, or "solid gold" claims introduced
- [ ] PromoBar still shows only approved "20% OFF YOUR FIRST CUSTOM ORDER" copy
- [ ] Grillz page: no dental/fit/FDA language
- [ ] Watches page: no "factory-set" or authentication claims

**Changed files report:**
- [ ] List every file modified
- [ ] Confirm no unrelated files changed
- [ ] Confirm no backend, env, or Resend files touched

**Git status:**
- [ ] `git status --short` shows only intended files
- [ ] No commit or push until user explicitly approves

---

## End of Report

**Changed files:** None. This is a planning document only.  
**Git status:** Not checked — no code touched.  
**Confirmed:** No app code was edited in this session.  
**Confirmed:** No commit or push was made.
