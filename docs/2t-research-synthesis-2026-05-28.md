# 2T Jewelers — Research Synthesis and Current Decision Brief
**Date:** 2026-05-28  
**Purpose:** Current decision layer after reviewing the Claude Deep Research Audit and ChatGPT Deep Research Audit.  
**Use:** Read this before planning or implementing the next 2T Jewelers work in Claude Code.

---

## 1. Executive Decision

Do **not** jump to Shopify now.  
Do **not** start a full redesign now.  
Proceed with a **focused Next.js prototype rework**.

The current site direction is mostly right, but the prototype still needs to behave more like a real Pittsburgh street-luxury jeweler and less like a polished concept.

The next work should focus on:

1. Real lead capture / form backend
2. Proof and media gaps
3. SHOP JEWELRY weakness
4. Watches and Grillz commercial strength
5. Material and stone architecture
6. Claim-safety and verified product-detail architecture
7. SEO/schema only after the core blockers are controlled

---

## 2. What Both Reports Agree On

Both reports point to the same practical direction:

- The brand spine is strong.
- The text-first / WhatsApp-first model is correct.
- The dual path of `SHOP JEWELRY` and `BUILD CUSTOM` is correct.
- The current site is not ready to behave like full ecommerce.
- Shopify should remain paused until product/media/data are ready.
- The largest weakness is not the core brand idea; it is the lack of proof-rich product/media and operational capture.
- The current visual system should be improved, not replaced wholesale.
- The site must become more credible as a real store, not just more visually polished.

---

## 3. Main Diagnosis

The site is **strategically sound but commercially under-proven**.

The current prototype has:
- strong brand voice
- strong custom inquiry logic
- good trust fallback language
- real Pittsburgh positioning
- clear street-luxury direction

But it still has:
- too many placeholder-looking vitrines
- weak visible product proof
- weak SHOP JEWELRY path
- Watches and Grillz pages that behave mostly like inquiry shells
- no real product-detail architecture
- no clear visible proof for materials/stones/condition/availability
- a custom form that appears to work but does not actually submit anywhere
- missing or deferred media assets
- Silver/Moissanite not yet integrated into the actual experience

---

## 4. Current Reality Confirmed by Repo Audit

Latest Claude Code reality audit found:

- Main branch is clean.
- Recent commits include B+ homepage polish and material/stone MD sync.
- `hero-loop-demo.mp4` actually exists and is wired into the homepage.
- Product photos are still missing.
- Store interior/media proof is still missing.
- Social clips or real social proof are still missing.
- `logo-to-use.png` is untracked and should not be touched without confirmation.
- Custom form is fake/local only: `console.log()` + `setTimeout()` success behavior.
- No real API route, email service, CRM, or notification exists for custom form submissions.
- 20% promo is active in `PromoBar.tsx` and is demo-approved only.
- CZ was found as a claim-safety violation in `CustomFaq.tsx`.
- Phase 0 removed CZ and unverified specific material claims from Custom FAQ.
- Build passed after Phase 0.
- Phase 0 commit was pushed to GitHub as `b3c57e8`.

---

## 5. Phase 0 Completed

Completed:
- Removed CZ from visible Custom FAQ language.
- Removed overly specific unverified material claims from FAQ.
- Replaced with safe equal-direction language:
  - Gold or silver.
  - Diamond or moissanite.
  - Material and stone details confirmed per piece.
- Build passed.
- Commit pushed.

Do not reopen this unless a new claim-safety issue appears.

---

## 6. Current Primary Blocker

The biggest immediate blocker is the **fake custom form**.

The form currently creates a false success experience:
- user submits
- UI shows success
- business receives nothing

This is a higher-priority operational risk than visual polish.

Before sending serious traffic or presenting the site as operational, the team must either:

1. connect real backend capture, or  
2. clearly treat the deployment as a design/demo preview and disclose that the form is not wired yet.

Recommended next technical pass:
**Form backend / real lead capture plan and implementation.**

---

## 7. Next Recommended Implementation Order

### Phase 1 — Form Backend / Lead Capture
Goal: make the custom form actually submit leads.

Evaluate and choose one:
- Formspree
- Resend API route
- simple Next.js API route + email provider
- Zapier webhook
- other simple lead notification option

Requirements:
- no fake success state unless submission succeeds
- error state if submission fails
- no real file upload promise unless uploads are supported
- if file upload is not supported, use safe copy that tells users to send files by WhatsApp or that uploads are demo-only
- lead should include piece type, idea text, budget direction, contact info, and any safe metadata
- business must know where leads go

Do not overbuild CRM yet.

---

### Phase 2 — Demo Disclosure / Business Review Safety
If demo is shared before backend is connected, disclosure must be clear:

- This is a demo preview.
- Custom request form is not connected yet.
- 20% promo is demo-scoped and must be confirmed before public launch.
- Product vitrines are placeholders unless real product media is added.
- Product and material details are confirmed per piece.

---

### Phase 3 — Proof / Media Plan
Goal: replace the most prototype-looking surfaces with real or clearly temporary proof.

Priority assets:
1. hero jewelry footage or strong hero still
2. grillz photo
3. watch photo
4. chain/pendant photo
5. custom work examples
6. store interior or storefront image
7. social content stills or clips

Do not present generated/demo visuals as:
- real inventory
- real customers
- real store proof
- celebrity proof
- social proof

---

### Phase 4 — SHOP JEWELRY Strengthening
Problem:
`SHOP JEWELRY` is weaker than `BUILD CUSTOM`.

Current issue:
The site promises shop behavior but mostly gives inquiry surfaces and placeholder visuals.

Near-term fix:
- keep lead-gen model
- do not fake ecommerce
- improve category cards with proof, examples, and clearer “ask what’s available” behavior
- avoid fake prices, fake stock, fake best sellers, fake product cards

Later:
- real product cards
- real inventory
- PDPs or inquiry product templates
- Shopify migration only when data/media are ready

---

### Phase 5 — Watches and Grillz Strengthening
Current diagnosis:
Watches and Grillz are acceptable as demo inquiry pages but not commercially complete.

Watches needs:
- clearer sourcing / inventory / modification model
- condition and authenticity disclosure framework
- no Rolex/authenticity/factory-set/VVS/GIA claims unless verified
- stronger high-ticket trust language
- real watch media

Grillz needs:
- process clarity
- material/stone direction clarity
- fit-process clarity
- no dental, medical, FDA, dentist-approved, or fit-guarantee claims unless documented
- real grillz media

---

### Phase 6 — Silver / Moissanite Architecture
Do not position Silver as cheap.  
Do not position Moissanite as fake diamond.  
Do not imply Moissanite is diamond.  
Do not hide Moissanite.

Use equal-direction framing:
- Gold
- Silver
- Diamond
- Moissanite

Near-term opportunities:
- custom form material/stone direction selectors
- safe material strip
- future `/moissanite-jewelry`
- future `/silver-jewelry` or `/sterling-silver-jewelry`
- future product/spec badges only when verified

Avoid:
- “budget”
- “cheap”
- “fake diamond”
- “diamond alternative” if it creates confusion
- “D-color VVS moissanite” unless confirmed per product
- “GRA-certified” unless certificate proof exists

---

### Phase 7 — Claim / Product Data Architecture
Use three claim levels:

1. Sitewide safe defaults:
   - Product details confirmed per piece.
   - Material and stone details confirmed per piece.
   - Availability may vary.
   - Ask what’s in stock now.
   - We quote before the build.

2. Collection-level claims:
   Only if every product in that collection actually shares the claim.

3. Product-level claims:
   Only when verified for that exact product:
   - solid gold
   - natural diamonds
   - lab diamonds
   - moissanite
   - VVS
   - GIA
   - authenticated watch
   - factory-set diamonds
   - in stock
   - shipping terms
   - warranty terms

Never use strong claims as blanket sitewide copy unless confirmed and approved.

---

### Phase 8 — SEO / Schema
Do after operational blockers and core claim language are controlled.

Likely future work:
- LocalBusiness / JewelryStore JSON-LD
- FAQPage schema on custom page
- BreadcrumbList schema on category pages
- metadata cleanup
- local SEO pages:
  - `/grillz-pittsburgh`
  - `/custom-jewelry-pittsburgh`
  - `/moissanite-jewelry`
  - `/diamond-watches-pittsburgh`

Do not create SEO pages that make claims the business has not confirmed.

---

## 8. Business Approvals Needed

Before coding beyond Phase 1, confirm:

1. Where should custom form leads go?
2. Should the form support file uploads now, or route files through WhatsApp?
3. Is the 20% first custom order promo real and operationally trackable?
4. Should the 20% promo remain in the public demo?
5. Is Silver currently offered?
6. Is Moissanite currently offered?
7. Does Silver mean sterling silver only, or also plated/vermeil/stainless?
8. Does 2T sell natural diamonds, lab diamonds, moissanite, or all of them?
9. Are there verified GIA pieces?
10. Are there verified VVS pieces?
11. What is the real Watches model: inventory, sourcing, modification, or inquiry only?
12. What is the real Grillz process: impressions, fit, shipping, timing, deposit, remake policy?
13. Are there real product photos available now?
14. Are there real custom work examples available now?
15. Are there store interior/exterior photos available now?

---

## 9. What Not To Do Now

Do not:
- restart Shopify
- run Shopify CLI
- do a full visual redesign
- add fake products
- add fake product cards
- add fake reviews
- add fake testimonials
- add fake social proof
- add fake celebrity proof
- add unverified inventory claims
- add unverified shipping/warranty claims
- add unverified diamond/gold/VVS/GIA claims
- publish “D-color VVS moissanite” unless product-level proof exists
- publish “GRA-certified” unless certificate proof exists
- touch `logo-to-use.png` without confirmation
- touch `/grillz` or `/watches` deeply before asset/business-model clarity
- overbuild ecommerce before proof and product data exist

---

## 10. Recommended Next Claude Code Prompt

Use this after this file is committed and read by Claude Code:

```text
We are continuing the 2T Jewelers Next.js project.

Read first:
- docs/2t-research-synthesis-2026-05-28.md
- 2T_MASTER_PROJECT_SOURCE.md
- PROJECT_CONTEXT.md
- AGENT_HANDOFF.md
- NEXT_ROADMAP.md
- CLAIM_SAFETY.md

Task:
Plan Phase 1 only: real custom form backend / lead capture.

Do not code yet.
Do not edit files.
Do not commit.
Do not push.

Inspect:
- components/custom/CustomBuildFlow.tsx
- app/api/* if present
- package.json
- environment variable usage if any
- current form fields and upload behavior

Return:
1. Current form behavior
2. Best backend option for this prototype
3. Required files to change
4. Required env vars or external service setup
5. How to handle file upload safely
6. How success/error states should work
7. Claim-safety/copy risks
8. Implementation plan
9. Business approvals needed before coding

Wait for approval.
```

---

## 11. Working Principle

Act as senior project lead.

Be open to changes, but do not drift.

The goal is not to protect old decisions blindly.  
The goal is to make the site more real, more useful, more credible, and more commercially sharp while keeping claims safe.

Research can change direction.  
Repo evidence controls implementation.  
Business verification controls claims.
