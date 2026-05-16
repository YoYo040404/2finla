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

Research and planning phase for Custom UX Rewrite is **complete**.
Next step is **Custom Flow Simplification execution**, pending user approval.

---

## Last Known Visual Feedback

Homepage:
- upgraded toward full-bleed immersive hero
- custom block promoted before categories/browse
- category cards updated (no visible "PHOTO SLOT" or "VIDEO LOOP" labels)
- hero video slot wired — `public/assets/hero-loop-demo.mp4` (file pending)
- trust strip: "Built in Pittsburgh / Family-owned. Nearly 30 years. / Own manufacturing."
- directionally good; polish expected later

Header:
- logo: `2t-logo-wide-transparent.png` via next/image (numeric width/height, TODO for final SVG/2x)

Footer (rebuilt):
- logo: `2t-logo-full-black-bg.png`
- address: 332 Fifth Ave, Pittsburgh, PA 15222
- phone: +1 412-281-7072
- WhatsApp: wa.me/14124524343
- Connect column: Instagram, TikTok, WhatsApp CTA, Acima (safe wording)
- grid: 2×2 mobile / 4-col desktop
- Preview badge removed; copyright only

Custom page:
- too heavy
- too much scrolling
- feels category-divided
- needs easier/friendlier flow
- form should be higher
- custom path should be more obvious on homepage
- research/planning done; execution pending approval

---

## Current State Summary

| Area | Status |
|---|---|
| Homepage scaffold | ✅ Built |
| Homepage visual direction | ✅ Full-bleed hero, Dark Shine direction |
| Hero video | ✅ Slot wired — `public/assets/hero-loop-demo.mp4` (file pending) |
| Custom page | ✅ Built (not final) |
| Custom UX research/plan | ✅ Complete |
| Custom UX execution | ⏳ Pending approval |
| Logo (temporary) | ✅ Transparent logo in header, black-bg logo in footer — final SVG/2x pending |
| Contact / social | ✅ Address, phone, WhatsApp, Instagram, TikTok, Acima all wired in Footer |
| Backend / Formspree | 🚫 Not yet |
| Watches / Grillz pages | 🚫 Not yet |
| Vercel deploy | 🚫 Not yet |
| Shopify | 🚫 Paused |

---

## Default Next Prompt

Default next task is Custom Flow Simplification, unless the user provides hero video, logo files, contact details, Instagram/TikTok links, or other ready assets first.

If user approves Custom Flow Simplification, use this prompt:

```text
Execute Custom Flow Simplification for the /custom page.

Research/planning is complete. Execute only — do not re-research.
Do not add backend.
Do not wire Formspree.
Do not touch homepage unless the plan specifically requires it.
Do not touch Shopify.

Target mobile flow:
1. What are you building?
2. Upload or describe the idea.
3. How do we reach you?

User can start with: logo, sketch, photo, name, number, reference, or rough idea.

Confirmed structure:
1. Hero: "Bring the idea. We'll shape the piece." + short support line + "Start Custom" CTA
2. Quick idea strip: Logo / Sketch / Photo / Name / Number / Reference
3. Condensed 3-step flow: Send the idea → Choose direction → Get next-step details
4. Main form earlier on page
5. Piece types as compact chips/buttons (not heavy cards)
6. FAQ below the form
7. Final CTA only if useful

Components to revise:
app/custom/page.tsx
components/custom/CustomHero.tsx
components/custom/PieceTiles.tsx
components/custom/HowItWorks.tsx
components/custom/CustomForm.tsx
components/custom/CustomFaq.tsx

Safe copy:
- "Have a logo, sketch, photo, or reference? Start the request here and we'll guide the next visual direction before quote or production."
- "Your request was received. We'll review the details and follow up with next-step information."
- "No deposit. No rush. We quote first."
- "Ask before you buy."

Do not add: free mockup, free render, CAD, turnaround time, warranty, guaranteed proof, response time, fake reviews, fake testimonials, fake celebrities, fake product proof, fake customer counts.

After revision:
- QA desktop 1280px + mobile 390px
- no horizontal scroll
- claim-safety scan
- report files changed + QA result
- stop and wait for approval before any deployment
```

---

## After Execution Returns

Review for:

- Does form appear higher / earlier?
- Is upload/reference intent obvious in first screen?
- Are piece type chips easy to tap on mobile?
- Does it avoid all forbidden claims?
- Does it preserve street-luxury tone?
- Does it avoid generic AI/contact-form look?
- Did mobile 390px QA pass?
