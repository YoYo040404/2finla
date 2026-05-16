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

- [ ] Custom path visible early
- [ ] “Start Custom” or equivalent CTA present
- [ ] category/product density feels sufficient
- [ ] homepage does not feel thin
- [ ] no fake products presented as real inventory
- [ ] no fake reviews or proof
- [ ] no unverified policy claims
- [ ] mobile CTA bar does not feel scammy
- [ ] header/nav works on desktop
- [ ] mobile menu works

---

## Custom Page

- [ ] custom flow is obvious in first screen
- [ ] logo/sketch/photo/name/number/reference intent is obvious
- [ ] form is easy to reach
- [ ] page is not too long/heavy
- [ ] piece types are easy to select
- [ ] upload/reference language is clear
- [ ] form labels are readable
- [ ] all required fields are clear
- [ ] mock submit works
- [ ] success message is safe
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
