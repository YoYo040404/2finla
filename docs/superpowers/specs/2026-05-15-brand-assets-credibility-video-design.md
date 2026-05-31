> **[ARCHIVED — 2026-05-18]** This design spec has been executed and is kept for historical reference only.
> - "nearly 30 years" in this document is superseded by **"25 years"** (confirmed by user 2026-05-31).
> - "Family-owned" in trust strip copy is **not approved** — do not use unless user explicitly confirms.
> - Any personal brand name references in this document are **deprecated** — removed from brand direction 2026-05-18. Use @2tjewelers / BANG. only.

# Design Spec: Brand Assets + Business Credibility + Demo Video Integration

**Date:** 2026-05-15  
**Status:** Approved  
**Project:** 2T Jewelers — Next.js prototype  

---

## Scope

Integrate existing brand assets and real business facts into the current homepage and layout without touching application logic, checkout, backend, or Shopify.

No new pages. No new routes. No backend. No deployment.

---

## 1. Hero Video Integration

**File:** `app/page.tsx`

**Change:** Replace the `<div className="hero-video-slot" />` and the entire `<div className="hero-jewelry-art">` block (CSS pendant + chain shapes) with a `<video>` element.

```tsx
{/* Temporary demo video — replace with real 2T store footage when recorded */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  style={{
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  }}
>
  <source src="/assets/hero-loop-demo.mp4" type="video/mp4" />
</video>
```

**Keep:** both gradient overlays (left-fade + bottom-fade), diagonal gold sweep ray, all 6 sparkle dots, hero text, both CTAs.

**Remove:** `.hero-video-slot` div, entire `.hero-jewelry-art` block (was CSS placeholder only).

**Fallback:** If `/assets/hero-loop-demo.mp4` is missing or fails to load, the video element renders nothing — the gradient overlays, sparkles, and text remain fully visible. No error state, no visible fallback label. The dark background color on `<section>` provides the base layer.

The `hero-video-slot` and `hero-jewelry-art` CSS classes in `globals.css` can be left in place (they become dead code, no visual impact).

---

## 2. Logo Integration

### Header — `components/layout/Header.tsx`

Replace the two `<span>` text elements (text "2T" + "JEWELERS") with `next/image`:

```tsx
{/* TODO: Replace with final SVG transparent / PNG transparent 2x once available */}
<Image
  src="/assets/brand/2t-logo-wide-transparent.png"
  alt="2T Jewelers"
  width={180}
  height={36}
  style={{ width: 'auto', height: '36px' }}
  priority
/>
```

**Safety condition:** If this PNG renders with checkerboard or fringe artifacts on `#080808`, revert to the current text logo immediately and leave a TODO comment. Footer is unaffected — it uses the black-background version.

### Footer — `components/layout/Footer.tsx`

Replace the two `<span>` text elements with `next/image`:

```tsx
{/* TODO: Replace with final SVG transparent / PNG transparent 2x once available */}
<Image
  src="/assets/brand/2t-logo-full-black-bg.png"
  alt="2T Jewelers"
  width={192}
  height={48}
  style={{ width: 'auto', height: '48px' }}
/>
```

Black-background version is safe on `#141414` charcoal footer — no transparency edge risk.

---

## 3. Trust Strip Update

**File:** `app/page.tsx`, trust strip section (section 3)

Replace the fourth trust strip item:

**Remove:**
```
{ label: 'Secure Checkout', sub: 'Shopify-powered. Safe & standard.' }
```

**Replace with:**
```
{ label: 'Built in Pittsburgh', sub: 'Family-owned. Nearly 30 years. Own manufacturing.' }
```

Final four items:
1. Real Materials — 925 Silver · 10K · 14K · Moissanite
2. Custom-First — Upload your idea. We build it.
3. Ask Before You Buy — Direct inquiry. No pressure.
4. Built in Pittsburgh — Family-owned. Nearly 30 years. Own manufacturing.

---

## 4. Footer Rebuild

**File:** `components/layout/Footer.tsx`

### Logo + Address Block (replaces current logo + tagline)

```
[Logo image — 2t-logo-full-black-bg.png, 48px height]
Short tagline: "Custom pieces. Real materials."
Address: 332 Fifth Ave, Pittsburgh, PA 15222
Phone: +1 412-281-7072  (tel: link)
WhatsApp: "Text us on WhatsApp" → https://wa.me/14124524343
```

### Nav Columns (4 columns — 2×2 mobile, 4 desktop)

| Shop | Inquire | Browse | Connect |
|---|---|---|---|
| Chains | Custom Jewelry | All Collections | Instagram → instagram.com/2tjewelers/ |
| Pendants | Watches | Best Sellers | TikTok → tiktok.com/@2tjewelers |
| Bracelets | Grillz | New Arrivals | Text us on WhatsApp |
| Rings | Contact | | Acima (safe wording) |
| Earrings | | | |

Shop / Inquire / Browse columns remain sourced from `footerNav` in `data/nav.ts` (no changes to nav.ts).

Connect column is added inline in `Footer.tsx` (not from nav data — it's contact/social, not navigation).

### Acima Wording (in Connect column)

```
Lease-to-own options may be available through Acima.
[Apply with Acima →] (external link, target="_blank", rel="noopener noreferrer")
```

Do NOT say: guaranteed financing, instant approval, no credit check, or any approval promise.

### Bottom Bar

```
© {year} 2T Jewelers. All rights reserved.
```

Remove: "Preview — not for purchase" badge.

---

## 5. MD Documentation Updates

**Files to update after code changes:**

| File | Update |
|---|---|
| `PROJECT_CONTEXT.md` | Mark demo video as integrated (temporary). Logo as temporary. Real business info added. |
| `CLAUDE.md` | Update approved safe copy to include Acima wording. |
| `NEXT_ROADMAP.md` | Mark demo video integration as complete. Mark brand assets as temporary / logo final pending. |
| `CLAIM_SAFETY.md` | Add Acima wording rules. |
| `AGENT_HANDOFF.md` | Update current state table. |
| `brief.txt` | Fill in real contact, social, address. Remove TBD placeholders. |

---

## Claim Safety Guardrails

**Approved for use in this task:**
- "Family-owned in Pittsburgh for nearly 30 years."
- "Built in Pittsburgh. Worn everywhere."
- "We work with local clients, out-of-state orders, athletes and entertainers, and customers who want something built around their look."
- "No deposit. No rush. We quote first."
- "Lease-to-own options may be available through Acima."
- "Apply with Acima"

**Forbidden in this task:**
- No celebrity names or implied endorsements
- No "official jeweler of" anything
- No fake testimonials or reviews
- No shipping/return/warranty promises
- No turnaround time / production timeline
- No CAD/render promises
- No price claims ("starting at $X")

---

## QA Plan

1. `npm run build` — confirm no TypeScript errors
2. Desktop 1280px — hero video playing, logo visible, footer columns aligned
3. Mobile 390px — no horizontal scroll, video playing, footer stacks correctly, touch targets ≥ 44px
4. Check all new links: phone, WhatsApp, Instagram, TikTok, Acima
5. Claim-safety scan on new copy
6. Confirm "Preview — not for purchase" badge is gone
7. Confirm no checkerboard artifact on header logo
