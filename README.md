# 2T Jewelers — Next.js Prototype

Urban / hip-hop / iced-out jewelry brand. Custom-first. Street-luxury. Dark Shine / Loud Luxury direction.

## Project Context

Read `PROJECT_CONTEXT.md` for the full project context, strategy, and current state.

This is a lead-generation website, not a full ecommerce store.
Primary conversion: custom order inquiries.
No checkout. No cart.

## Run Locally

```powershell
cd C:\Users\yaniv\Downloads\2t-jewelers-next
npm run dev
```

Open:
- http://localhost:3000 — homepage
- http://localhost:3000/custom — custom order page

## Key Files

```text
app/page.tsx              — homepage
app/custom/page.tsx       — custom order page (WIP, not approved final)
app/layout.tsx            — root layout
app/globals.css           — design tokens, global styles
data/nav.ts               — navigation data
components/layout/        — PromoBar, Header, Footer, MobileCtaBar
components/home/          — ProofMarquee, BestSellersStrip, PittsburghStory, SocialTeaser, FinalCTABar
components/custom/        — CustomHero, CustomBuildFlow, HowItWorks, CustomFaq
```

## Homepage Section Order (Phase 2 — approved)

```text
1.  Hero                — BUILT TO HIT., video slot, CTA
2.  ProofMarquee        — animated trust strip
3.  Custom Entry Block  — bring logo/photo/idea
4.  PICK YOUR LANE      — 5 category tiles + pills
5.  BestSellersStrip    — editorial lanes, no real product data
6.  Inquiry Lanes       — Diamond Watches / Grillz / Custom
7.  PittsburghStory     — brand story, outline typography
8.  SocialTeaser        — IG / TT / WA inline SVG icons, real links
9.  Material Preview    — material option chips
10. FinalCTABar         — HAVE A PIECE IN MIND?
```

## Active Docs

| File | Purpose |
|---|---|
| PROJECT_CONTEXT.md | Root context — read before any work |
| CLAUDE.md | Operating rules for Claude Code |
| AGENT_HANDOFF.md | Current state + next task prompt |
| CUSTOM_UX_REWRITE_BRIEF.md | Custom page rewrite plan |
| NEXT_ROADMAP.md | Phase status and future roadmap |
| CLAIM_SAFETY.md | Forbidden and approved claims |
| QA_CHECKLIST_NEXT.md | QA checklist |

## Paused / Archive

`C:\Users\yaniv\Downloads\2t-jewelers-shopify` — Shopify project is paused.
Do not touch. See CLAUDE.md.
