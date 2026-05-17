# 2T Jewelers — Next.js Prototype QA Checklist

## Scope

Use this checklist for the active Next.js prototype in:

```text
C:\Users\yaniv\Downloads\2t-jewelers-next
```

This is not the old Shopify QA checklist.

---

## General

- [ ] `npm run dev` works
- [ ] homepage loads at `http://localhost:3000`
- [ ] `/custom` loads at `http://localhost:3000/custom`
- [ ] no TypeScript errors
- [ ] no console errors that affect UI
- [ ] no horizontal scroll at 390px
- [ ] no broken navigation links in visible UI

---

## Visual / Brand

- [ ] site does not look generic
- [ ] site does not look like an AI business-card page
- [ ] site does not look NFT/crypto
- [ ] site does not look like cheap black/gold template
- [ ] site feels street-luxury
- [ ] site feels commerce-driven, not brochure-only
- [ ] dark cinematic base is consistent
- [ ] gold accent is controlled, not flashy
- [ ] typography does not feel too wedding/boutique
- [ ] mobile presentation feels strong
- [ ] Dark Shine / Loud Luxury direction is present — no quiet luxury, no wedding tone
- [ ] homepage hero creates BAM effect on first load (full-bleed, immersive, immediate)
- [ ] hero video slot or CSS placeholder is clean — no visible "VIDEO LOOP" or "PHOTO SLOT" labels

---

## Homepage

Section order to verify: Hero → ProofMarquee → Custom Entry Block → PICK YOUR LANE → BestSellersStrip → Inquiry Lanes → PittsburghStory → SocialTeaser → Material Preview → FinalCTABar

- [ ] Hero: BAM effect on load, full-bleed, BUILT TO HIT. headline visible, CTA above fold, no horizontal scroll, video slot or dark background renders cleanly
- [ ] ProofMarquee: animates smoothly, no layout shift, no horizontal overflow, accessible aria-label present
- [ ] Custom Entry Block: upload/logo/photo intent clear, CTA visible, readable at 390px
- [ ] PICK YOUR LANE: all 5 category tiles render, secondary pills present, links resolve
- [ ] BestSellersStrip: two lanes (Best Sellers + New Arrivals) render, SVG shape icons visible, no fake product data or pricing
- [ ] Inquiry Lanes: 3 lanes render (Diamond Watches, Grillz, Custom), each has a CTA, copy is claim-safe
- [ ] PittsburghStory: outline typography renders correctly, dual CTAs present and functional
- [ ] SocialTeaser: heading is TAP IN WITH 2T., 3 cards render (Instagram, TikTok, WhatsApp), TikTok card reads “See what's dropping.”, inline SVG icons readable at 390px, real platform links only, no fake follower counts or post images
- [ ] Material Preview: material chips render, no fake inventory or availability claims
- [ ] FinalCTABar: heading is BUILD WITH 2T., Start the piece → /custom, Text 2T → WhatsApp link
- [ ] header/nav works on desktop
- [ ] mobile menu works
- [ ] mobile CTA bar does not cover content
- [ ] no fake products presented as real inventory
- [ ] no fake reviews or proof
- [ ] no unverified policy claims

---

## Custom Page

- [ ] hero is compact — START THE REQUEST → CTA is primary and visible above fold
- [ ] Browse Ready-Made is absent
- [ ] logo/sketch/photo/name/number/reference intent is obvious in first screen
- [ ] piece type chips wrap cleanly on mobile 390px
- [ ] upload zone appears above textarea on mobile
- [ ] textarea is 4 rows (not too tall)
- [ ] WHATSAPP OR PHONE label visible on phone field
- [ ] gold-bordered trust callout visible
- [ ] SEND REQUEST → is full-width on mobile
- [ ] bypass CTA "Not sure yet? Hit us up on WhatsApp →" is present and links correctly
- [ ] HowItWorks step 02: WE REVIEW THE DIRECTION
- [ ] HowItWorks step 03: WE QUOTE FIRST
- [ ] Material and Budget chips still present and functional
- [ ] form is easy to reach
- [ ] mock submit works
- [ ] success message is claim-safe
- [ ] FAQ supports confidence but does not over-explain
- [ ] page does not feel like generic contact form

---

## Mobile 390px

- [ ] no horizontal scroll
- [ ] header fits
- [ ] hero CTA visible quickly
- [ ] custom form is usable
- [ ] file input is not awkward
- [ ] buttons are at least 44px tap target
- [ ] mobile CTA does not cover submit button
- [ ] footer readable

---

## Claim Safety

- [ ] no free mockup
- [ ] no free render
- [ ] no CAD promise
- [ ] no production timeline
- [ ] no turnaround time
- [ ] no deposit terms
- [ ] no warranty/guarantee
- [ ] no shipping/returns claims
- [ ] no response-time promise
- [ ] no fake reviews
- [ ] no fake UGC
- [ ] no fake celebrity/press
- [ ] no unverified material/product claims
- [ ] no grillz dental/safety claims

---

## Before Any Deployment

- [ ] visual QA passed
- [ ] mobile QA passed
- [ ] claim-safety scan passed
- [ ] user approved
- [ ] no Shopify work triggered
- [ ] no backend wired unless approved
