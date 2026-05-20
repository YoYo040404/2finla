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
- Hero video slot wired (file pending)

### WIP / Approval Pending ⚠️

- `/custom` page — compact revision applied in 84af600; build passes; visual QA and user approval still pending
- `/grillz` — committed 200e5a1; visual QA and user approval still pending
- `/watches` — committed 200e5a1; visual QA and user approval still pending
- Typography — hybrid prototype applied in 84af600; watching for wedding/boutique feel; final decision pending
- Global UX/UI audit — audit was run; follow-up decisions still pending

### Not Yet 🚫

- Real product/category images
- Real hero/grillz/watches/store photo and video assets
- Instagram/TikTok feed strategy and dynamic feed
- WhatsApp floating desktop button
- Formspree backend / lead capture
- Real upload backend
- Final logo SVG/2x/favicon
- Vercel preview deploy
- Shopify recalibration

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

## Benchmarks

### GLD.com
Use for: ecommerce behavior, category depth, product density, mobile shopping flow.
Do not copy: assets, copy, claims, discounts, celebrity proof, or trademarks.

### Moses NYC
Use for: full-bleed visual discipline, smooth homepage rhythm, credibility, inquiry-led structure, simple custom/contact flow, strong visual hierarchy.
Do not copy: assets, videos, copy, product names, claims, layout exactly, or restrained tone.
2T must be louder, shinier, more custom-first, and more hip-hop than Moses.

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

### Phase 2c — Custom Page Revision ⚠️ WIP — Build passes. NOT user-approved as final.

- Removed: IdeaTypeStrip, PieceTiles, piece type dropdown, material, stone, email, notes
- Kept: CustomHero, CustomForm (5 fields), HowItWorks, CustomFaq
- Refined in commit 84af600 (2026-05-17): compact hero, START THE REQUEST → CTA, Browse Ready-Made removed, upload above textarea on mobile, textarea 4 rows, gold-bordered trust callout, full-width SEND REQUEST →, WhatsApp bypass CTA, updated HowItWorks steps
- Do not commit or push as an approved milestone
- Next: visual QA → user approval

### Phase 2d — Custom Visual Approval Gate 🚧 Open

Steps:
1. Run visual QA of /custom at 390px and 1280px
2. Present screenshots to user
3. Wait for explicit approval
4. Mark /custom as complete only after user signs off
5. QA: desktop 1280px + mobile 390px + no horizontal scroll + claim-safety scan

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
- source: `public/assets/hero-loop-demo.mp4` (file pending)
- dark background + gradient overlays handle missing-file gracefully

Still needed: real footage at `public/assets/hero-loop-demo.mp4`  
Specs: 8–10 seconds, MP4, muted, loopable, 16:9/21:9 desktop, 9:16 mobile backup if possible.

### Phase 5 — Watches / Grillz Prototype Pages ✅ Committed (200e5a1)

- `/grillz` — committed. Visual QA and user approval still pending.
- `/watches` — committed. Visual QA and user approval still pending.
- Do not redesign either page unless specifically approved.

### Phase 6 — Form Backend + Upload Handling

Only after design approval:
- Formspree or similar for lead capture
- reference upload handling
- test submissions
- no real upload unless backend chosen

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
- **Tenure copy:** approved wording is **"over 30 years"** — confirmed by user 2026-05-17. Do not revert to "nearly 30 years."
- ~~Effi integration~~ — removed from brand direction 2026-05-18. Do not reference in copy, code comments, or planning prompts.

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

## Approved Roadmap Order (updated 2026-05-20)

1. ✅ Homepage reset — product store + custom lane (8fd4497)
2. ✅ Grillz and Watches pages committed (200e5a1)
3. ✅ MD sync — documentation alignment pass (this task)
4. Visual QA of `/custom` → user approval gate
5. Visual QA of `/grillz` and `/watches` → user approval gate
6. About / Pittsburgh / Store — research + redesign plan (after QA gates)
7. Social / Instagram / TikTok planning
8. Backend / form integration — only after design approval

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
