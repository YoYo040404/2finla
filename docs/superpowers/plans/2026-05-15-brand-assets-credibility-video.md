> **[ARCHIVED — 2026-05-18]** This plan has been executed and is kept for historical reference only.
> - "nearly 30 years" in this document is superseded by **"over 30 years"** (confirmed by user 2026-05-17).
> - "family-owned" in trust strip copy is **not approved** — do not use unless user explicitly confirms.
> - Any personal brand name references in this document are **deprecated** — removed from brand direction 2026-05-18. Use @2tjewelers / BANG. only.

# Brand Assets + Business Credibility + Demo Video Integration

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the demo hero video, logo assets, real Pittsburgh business credibility, and contact/social/Acima links into the existing Next.js homepage and layout — no new pages, no backend, no Shopify.

**Architecture:** All changes are confined to three existing files (`app/page.tsx`, `components/layout/Header.tsx`, `components/layout/Footer.tsx`) plus six MD documentation files. The hero section already has an explicit code comment instructing this swap. No new components are needed.

**Tech Stack:** Next.js 15 App Router · React · Tailwind CSS · `next/image` · TypeScript

---

## File Map

| File | Change |
|---|---|
| `app/page.tsx` | Hero: replace CSS slot + SVG art with `<video>`. Trust strip: replace "Secure Checkout" item. |
| `components/layout/Header.tsx` | Replace text logo spans with `next/image`. Add `import Image`. |
| `components/layout/Footer.tsx` | Replace text logo with `next/image`. Add address/phone/WhatsApp block. Rebuild nav grid from 3→4 columns. Add Connect column. Remove Preview badge. Add `import Image`. |
| `PROJECT_CONTEXT.md` | Mark video/logo as temporary; add real business info. |
| `CLAUDE.md` | Add Acima to approved safe copy. |
| `NEXT_ROADMAP.md` | Mark video + brand assets as complete (temporary). |
| `CLAIM_SAFETY.md` | Add Acima wording rules. |
| `AGENT_HANDOFF.md` | Update current state table. |
| `brief.txt` | Fill real contact/social/address. Remove TBD placeholders. |

---

## Task 1: Hero Video — Replace CSS slot + SVG art

**File:** `app/page.tsx:155–175`

- [ ] **Replace lines 155–175** (the block comment + `hero-video-slot` div + `hero-jewelry-art` div) with the video element. The existing gradient overlays, sparkles, and text content on lines 177+ are unchanged.

  Find this block (lines 155–175):
  ```tsx
  {/*
    HERO VIDEO SLOT
    When loop video is ready, replace the background layers and jewelry art below with:
      <video autoPlay muted loop playsInline style={{ position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0 }}>
        <source src="/assets/hero-loop.mp4" type="video/mp4" />
      </video>
    Suggested: chain-on-neck close-up · pendant macro flash · grillz sparkle — 15–30s loop
  */}

  {/* Background — cinematic darkness + jewelry glow field */}
  <div className="hero-video-slot" aria-hidden="true" />

  {/* Jewelry art — right-side focal point, intentional CSS art */}
  <div className="hero-jewelry-art" aria-hidden="true">
    <div className="hero-pendant-shape">
      <div className="hero-pendant-inner">
        <div className="hero-gem" />
      </div>
    </div>
    <div className="hero-chain-top" />
  </div>
  ```

  Replace with:
  ```tsx
  {/* Temporary demo video — replace with real 2T store footage when recorded */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    style={{
      position:   'absolute',
      inset:      0,
      width:      '100%',
      height:     '100%',
      objectFit:  'cover',
      zIndex:     0,
    }}
  >
    <source src="/assets/hero-loop-demo.mp4" type="video/mp4" />
  </video>
  ```

  If the video file is missing or fails to load, the `<video>` renders nothing. The dark `background-color` on the `<section>` parent (inherited from `--color-brand-black`) plus the gradient overlays remain visible — no broken state.

- [ ] **Run build check:**
  ```powershell
  cd C:\Users\yaniv\Downloads\2t-jewelers-next
  npm run build
  ```
  Expected: build succeeds, no TypeScript errors. If errors appear, check that no import was broken.

- [ ] **Commit:**
  ```powershell
  git add app/page.tsx
  git commit -m "feat: integrate demo hero video, remove CSS slot placeholder"
  ```

---

## Task 2: Trust Strip — Replace "Secure Checkout" with Pittsburgh credibility

**File:** `app/page.tsx` — trust strip array (~line 451–455)

- [ ] **Find and replace** the fourth trust strip object:

  Find:
  ```tsx
  { label: 'Secure Checkout',    sub: 'Shopify-powered. Safe & standard.' },
  ```

  Replace with:
  ```tsx
  { label: 'Built in Pittsburgh', sub: 'Family-owned. Nearly 30 years. Own manufacturing.' },
  ```

- [ ] **Run build check:**
  ```powershell
  npm run build
  ```
  Expected: clean build.

- [ ] **Commit:**
  ```powershell
  git add app/page.tsx
  git commit -m "feat: replace Secure Checkout trust strip item with Pittsburgh credibility"
  ```

---

## Task 3: Header Logo — Replace text spans with next/image

**File:** `components/layout/Header.tsx`

- [ ] **Add `Image` import** at the top of the file (line 1, after existing imports):

  Current imports:
  ```tsx
  'use client'

  import Link from 'next/link'
  import { useState } from 'react'
  import { mainNav, shopCategories } from '@/data/nav'
  ```

  Add `Image`:
  ```tsx
  'use client'

  import Image from 'next/image'
  import Link from 'next/link'
  import { useState } from 'react'
  import { mainNav, shopCategories } from '@/data/nav'
  ```

- [ ] **Replace the logo `<Link>` block** (lines 22–45):

  Find:
  ```tsx
  <Link href="/" aria-label="2T Jewelers" className="flex flex-col" style={{ lineHeight: 1 }}>
    <span style={{
      fontFamily:    'var(--font-body)',
      fontWeight:    700,
      fontSize:      '1.5rem',
      letterSpacing: '-0.02em',
      color:         'var(--color-brand-white)',
      lineHeight:    1,
    }}>
      2T
    </span>
    <span style={{
      fontFamily:    'var(--font-body)',
      fontWeight:    300,
      fontSize:      '0.55rem',
      letterSpacing: '0.38em',
      color:         'var(--color-brand-muted)',
      lineHeight:    1,
      marginTop:     '3px',
      textTransform: 'uppercase',
    }}>
      JEWELERS
    </span>
  </Link>
  ```

  Replace with:
  ```tsx
  {/* TODO: Replace with final SVG transparent / PNG transparent 2x · favicon · OG image once available */}
  <Link href="/" aria-label="2T Jewelers">
    <Image
      src="/assets/brand/2t-logo-wide-transparent.png"
      alt="2T Jewelers"
      width={180}
      height={36}
      style={{ width: 'auto', height: '36px' }}
      priority
    />
  </Link>
  ```

  **⚠ Safety check:** After running the dev server, inspect the header logo in the browser against the `#080808` background. If the PNG shows a white checkerboard, fringe, or halo artifacts, revert this block to the original text spans and leave this comment in place:
  ```tsx
  {/* TODO: Header logo — transparent PNG showed rendering artifacts on #080808.
      Revert to text logo. Replace once final SVG transparent / PNG transparent 2x is available. */}
  <Link href="/" aria-label="2T Jewelers" className="flex flex-col" style={{ lineHeight: 1 }}>
    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--color-brand-white)', lineHeight: 1 }}>
      2T
    </span>
    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.55rem', letterSpacing: '0.38em', color: 'var(--color-brand-muted)', lineHeight: 1, marginTop: '3px', textTransform: 'uppercase' }}>
      JEWELERS
    </span>
  </Link>
  ```

- [ ] **Run build check:**
  ```powershell
  npm run build
  ```
  Expected: clean build. `next/image` is built-in — no install needed.

- [ ] **Commit:**
  ```powershell
  git add components/layout/Header.tsx
  git commit -m "feat: add logo image to header with text fallback comment"
  ```

---

## Task 4: Footer Rebuild — Logo, address block, Connect column, remove badge

**File:** `components/layout/Footer.tsx`

This task rewrites Footer.tsx completely. The new version keeps the same structure but adds: `next/image` logo, address/phone/WhatsApp in the logo block, a fourth Connect column, and removes the "Preview" badge.

- [ ] **Add `Image` import** at the top:

  Find:
  ```tsx
  import Link from 'next/link'
  import { footerNav } from '@/data/nav'
  ```

  Replace with:
  ```tsx
  import Image from 'next/image'
  import Link from 'next/link'
  import { footerNav } from '@/data/nav'
  ```

- [ ] **Replace the logo + tagline block** (lines 16–52 — the `<div style={{ marginBottom: '3rem' }}>` block):

  Find:
  ```tsx
  {/* Logo + tagline */}
  <div style={{ marginBottom: '3rem' }}>
    <Link href="/" aria-label="2T Jewelers" style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{
        fontFamily:    'var(--font-body)',
        fontWeight:    700,
        fontSize:      '1.75rem',
        letterSpacing: '-0.02em',
        color:         'var(--color-brand-white)',
        lineHeight:    1,
      }}>
        2T
      </span>
      <span style={{
        fontFamily:    'var(--font-body)',
        fontWeight:    300,
        fontSize:      '0.55rem',
        letterSpacing: '0.38em',
        color:         'var(--color-brand-muted)',
        lineHeight:    1,
        marginTop:     '4px',
        textTransform: 'uppercase',
      }}>
        JEWELERS
      </span>
    </Link>
    <p style={{
      marginTop:   '1rem',
      fontSize:    '0.8125rem',
      color:       'var(--color-brand-muted)',
      lineHeight:  1.65,
      maxWidth:    '260px',
    }}>
      Custom pieces. Real materials.<br />
      Shop the shine. Build the piece.
    </p>
  </div>
  ```

  Replace with:
  ```tsx
  {/* Logo + address block */}
  <div style={{ marginBottom: '3rem' }}>
    {/* TODO: Replace with final SVG transparent / PNG transparent 2x · favicon · OG image once available */}
    <Link href="/" aria-label="2T Jewelers" style={{ display: 'inline-block' }}>
      <Image
        src="/assets/brand/2t-logo-full-black-bg.png"
        alt="2T Jewelers"
        width={192}
        height={48}
        style={{ width: 'auto', height: '48px' }}
      />
    </Link>
    <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--color-brand-muted)', lineHeight: 1.65, maxWidth: '260px' }}>
      Custom pieces. Real materials.
    </p>
    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-brand-muted)' }}>
        332 Fifth Ave, Pittsburgh, PA 15222
      </p>
      <a
        href="tel:+14122817072"
        style={{ fontSize: '0.78rem', color: 'var(--color-brand-muted)' }}
        className="nav-link-footer"
      >
        +1 412-281-7072
      </a>
      <a
        href="https://wa.me/14124524343"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '0.78rem', color: 'var(--color-brand-gold)' }}
      >
        Text us on WhatsApp
      </a>
    </div>
  </div>
  ```

- [ ] **Replace the nav columns div** (lines 54–85 — the `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', ... }}>` block) to support 4 columns and add the Connect column:

  Find:
  ```tsx
  {/* Nav columns */}
  <div style={{
    display:             'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap:                 '2rem',
    marginBottom:        '3rem',
  }}>
    {footerNav.map((group) => (
      <div key={group.title}>
        <p style={{
          fontFamily:    'var(--font-body)',
          fontSize:      '0.65rem',
          fontWeight:    600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'var(--color-brand-gold)',
          marginBottom:  '1rem',
        }}>
          {group.title}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {group.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link-footer">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  ```

  Replace with:
  ```tsx
  {/* Nav columns — 2×2 mobile, 4 desktop */}
  <div
    className="grid grid-cols-2 md:grid-cols-4"
    style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}
  >
    {footerNav.map((group) => (
      <div key={group.title}>
        <p style={{
          fontFamily:    'var(--font-body)',
          fontSize:      '0.65rem',
          fontWeight:    600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'var(--color-brand-gold)',
          marginBottom:  '1rem',
        }}>
          {group.title}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {group.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link-footer">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}

    {/* Connect column — social, WhatsApp, Acima */}
    <div>
      <p style={{
        fontFamily:    'var(--font-body)',
        fontSize:      '0.65rem',
        fontWeight:    600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color:         'var(--color-brand-gold)',
        marginBottom:  '1rem',
      }}>
        Connect
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <li>
          <a
            href="https://www.instagram.com/2tjewelers/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-footer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@2tjewelers"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-footer"
          >
            TikTok
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/14124524343"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-footer"
          >
            WhatsApp
          </a>
        </li>
        <li style={{ marginTop: '0.75rem' }}>
          <a
            href="https://apply.acima.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-footer"
            style={{ fontSize: '0.78rem' }}
          >
            Apply with Acima →
          </a>
          <p style={{ fontSize: '0.68rem', color: 'var(--color-brand-subtle)', marginTop: '4px', lineHeight: 1.4, maxWidth: '22ch' }}>
            Lease-to-own options may be available through Acima.
          </p>
        </li>
      </ul>
    </div>
  </div>
  ```

- [ ] **Replace the bottom bar** (lines 87–112) to remove the "Preview — not for purchase" badge:

  Find:
  ```tsx
  {/* Bottom bar */}
  <div style={{
    display:       'flex',
    flexWrap:      'wrap',
    alignItems:    'center',
    justifyContent:'space-between',
    gap:           '0.75rem',
    paddingTop:    '1.5rem',
    borderTop:     '1px solid var(--color-brand-border)',
  }}>
    <p style={{
      fontSize: '0.75rem',
      color:    'var(--color-brand-subtle)',
    }}>
      © {year} 2T Jewelers. All rights reserved.
    </p>
    <span style={{
      fontSize:        '0.7rem',
      color:           'var(--color-brand-muted)',
      backgroundColor: 'var(--color-brand-surface)',
      padding:         '3px 10px',
      fontStyle:       'italic',
    }}>
      Preview — not for purchase
    </span>
  </div>
  ```

  Replace with:
  ```tsx
  {/* Bottom bar */}
  <div style={{
    paddingTop: '1.5rem',
    borderTop:  '1px solid var(--color-brand-border)',
  }}>
    <p style={{ fontSize: '0.75rem', color: 'var(--color-brand-subtle)' }}>
      © {year} 2T Jewelers. All rights reserved.
    </p>
  </div>
  ```

- [ ] **Run build check:**
  ```powershell
  npm run build
  ```
  Expected: clean build. If TypeScript complains about `Image` props, confirm `width` and `height` are numeric (not strings).

- [ ] **Commit:**
  ```powershell
  git add components/layout/Footer.tsx
  git commit -m "feat: footer rebuild — logo, address, WhatsApp, social, Acima, remove preview badge"
  ```

---

## Task 5: QA — Visual + Links + Claim Safety

- [ ] **Start dev server:**
  ```powershell
  npm run dev
  ```

- [ ] **Desktop 1280px — check homepage:**
  - Hero video plays (or dark gradient shows cleanly if video not found)
  - Header logo renders with no checkerboard or halo artifacts — if artifacts present, revert header to text logo per Task 3 safety note
  - Trust strip shows "Built in Pittsburgh / Family-owned. Nearly 30 years. Own manufacturing."
  - Footer shows logo, address, phone, WhatsApp, 4 columns, Connect column, Acima wording, no Preview badge

- [ ] **Mobile 390px — check homepage:**
  - Hero video fills screen, text readable
  - No horizontal scroll
  - Footer columns stack 2×2 on mobile
  - WhatsApp link tappable (≥ 44px target)

- [ ] **Check all new links** (open each manually or use right-click → Copy Link):
  - `tel:+14122817072` — phone
  - `https://wa.me/14124524343` — WhatsApp
  - `https://www.instagram.com/2tjewelers/` — Instagram
  - `https://www.tiktok.com/@2tjewelers` — TikTok
  - `https://apply.acima.com/` — Acima

- [ ] **Claim safety scan** — visually confirm no forbidden text is present on the page:
  - No "free mockup", "free render", "CAD"
  - No "guaranteed" anything
  - No "celebrities" (use "athletes and entertainers")
  - No "official jeweler of"
  - Acima shows only: "Lease-to-own options may be available through Acima."
  - No "Preview — not for purchase" badge visible

- [ ] **Check `/custom` smoke check:**
  ```
  http://localhost:3000/custom
  ```
  Confirm it still loads and nothing is broken by the layout changes.

---

## Task 6: MD Documentation Updates

- [ ] **Update `PROJECT_CONTEXT.md`** — in the "Demo Video Pending" section, mark it as integrated:

  Find:
  ```markdown
  ### Demo Video Pending

  Real hero video is pending. When available, replace the CSS/video-slot with:

  ```text
  public/assets/hero-loop-demo.mp4
  ```
  ```

  Replace with:
  ```markdown
  ### Demo Video

  Temporary demo video integrated at `public/assets/hero-loop-demo.mp4`.
  Replace with real 2T store footage when recorded.
  Expected future path: same — `public/assets/hero-loop-demo.mp4`.

  Video specs for replacement:
  - 8–10 seconds, MP4, muted, loopable, 16:9 or 21:9 desktop, 9:16 mobile backup
  - No logos, text, celebrity likeness, or fake product proof
  ```

  Also update the "Future Work" section — remove "integrate real logo files" and "contact info / social links" since those are now done (temporarily):

  Find (in Future Work):
  ```markdown
  - integrate real logo files (header, footer, favicon, OG image)
  - contact info: phone, WhatsApp, email
  - Instagram and TikTok integration
  - footer/social links
  ```

  Replace with:
  ```markdown
  - replace temporary logo with final SVG transparent / PNG transparent 2x / favicon / OG image
  - add email to footer (not yet added)
  ```

  Also update Built State to add business info:

  Find:
  ```markdown
  Claim-safety passed.
  ```
  (at the end of the custom form section)

  Add after it:
  ```markdown
  Phase 3 brand assets integrated (temporary):

  ```text
  Real business info added: address, phone, WhatsApp, Instagram, TikTok, Acima
  Demo hero video: public/assets/hero-loop-demo.mp4 (temporary)
  Logo: temporary PNG assets — final SVG/2x still needed
  ```
  ```

- [ ] **Update `CLAUDE.md`** — add Acima to approved safe copy:

  Find:
  ```markdown
  - "Ask before you buy."
  - "No deposit. No rush. We quote first."
  ```

  Replace with:
  ```markdown
  - "Ask before you buy."
  - "No deposit. No rush. We quote first."
  - "Lease-to-own options may be available through Acima."
  - "Apply with Acima"
  ```

- [ ] **Update `CLAIM_SAFETY.md`** — add Acima wording rules:

  Find the "Approved Safe Phrases" section. After the last approved phrase, add:

  ```markdown
  > Lease-to-own options may be available through Acima.

  > Apply with Acima
  ```

  Also add a new sub-section under "Forbidden Unless Verified":

  ```markdown
  ### Financing / Acima

  - guaranteed financing
  - instant approval
  - no credit check
  - "everyone qualifies"
  - Acima approval promise of any kind
  ```

- [ ] **Update `NEXT_ROADMAP.md`** — mark video and brand assets complete:

  Find:
  ```markdown
  ### Phase 4 — Hero Video Integration

  When user provides `public/assets/hero-loop-demo.mp4`:
  ```

  Replace with:
  ```markdown
  ### Phase 4 — Hero Video Integration ✅ Complete (temporary)

  Demo video integrated at `public/assets/hero-loop-demo.mp4`.
  Replace with real 2T store footage when available — same file path.
  ```

  Also find and update the "Phase 3 — Brand Asset Setup" section — mark partial completion:

  Find:
  ```markdown
  ### Phase 3 — Brand Asset Setup

  Only after custom flow is fixed, or when user provides assets:
  - verify logo transparency
  - install header logo
  - favicon
  - footer logo
  - OG/social image if needed
  - contact info: phone, WhatsApp, email
  - Instagram and TikTok links
  - footer/social links
  ```

  Replace with:
  ```markdown
  ### Phase 3 — Brand Asset Setup ✅ Partial

  Done:
  - header logo (temporary PNG — final SVG/2x needed)
  - footer logo (temporary PNG — final SVG/2x needed)
  - contact info: phone, WhatsApp added to footer
  - Instagram and TikTok links added to footer

  Still needed:
  - email address
  - favicon
  - OG image
  - final SVG transparent / PNG transparent 2x logo
  ```

- [ ] **Update `AGENT_HANDOFF.md`** — update current state table:

  Find the status table rows for hero video and logo:
  ```markdown
  | Homepage visual direction | ✅ Full-bleed hero, Dark Shine direction |
  | Hero video | ⏳ Pending — `public/assets/hero-loop-demo.mp4` |
  ```

  Replace with:
  ```markdown
  | Homepage visual direction | ✅ Full-bleed hero, Dark Shine direction |
  | Hero video | ✅ Temporary demo integrated — replace with real footage |
  ```

  Also find and update:
  ```markdown
  | Logo / contact / social assets | ⏳ TBD — user has not provided yet |
  ```

  Replace with:
  ```markdown
  | Logo / contact / social assets | ✅ Temporary PNGs + real contact/social added — final SVG/2x pending |
  ```

- [ ] **Update `brief.txt`** — replace TBD placeholders with real info:

  Find:
  ```
  Phone: TBD
  WhatsApp: TBD
  Email: TBD
  Instagram: TBD
  TikTok: TBD
  ```

  Replace with:
  ```
  Phone: +1 412-281-7072
  WhatsApp: +1 412-452-4343 (wa.me/14124524343)
  Email: TBD
  Instagram: https://www.instagram.com/2tjewelers/
  TikTok: https://www.tiktok.com/@2tjewelers
  ```

  Also find:
  ```
  Logo: Not yet installed. Provide logo file when ready.
  Expected: header logo, footer logo, favicon, OG image.
  ```

  Replace with:
  ```
  Logo: Temporary PNGs installed (header: 2t-logo-wide-transparent.png, footer: 2t-logo-full-black-bg.png).
  Still needed: final SVG transparent / PNG transparent 2x / favicon / OG image.
  ```

- [ ] **Commit all MD updates:**
  ```powershell
  git add PROJECT_CONTEXT.md CLAUDE.md CLAIM_SAFETY.md NEXT_ROADMAP.md AGENT_HANDOFF.md brief.txt
  git commit -m "docs: sync project MD — video integrated, brand assets temporary, real business info added"
  ```

---

## Self-Review Notes

- All four spec sections covered: hero video ✅, logo ✅, trust strip ✅, footer ✅
- Acima wording in both Connect column and MD updates matches spec exactly
- `next/image` uses numeric `width`/`height` props with `style={{ width: 'auto' }}` — valid pattern
- Header logo safety revert code is included in full (not described, shown)
- "athletes and entertainers" used (not "celebrities") per spec correction
- No TBD or placeholder text in any step
- MD updates include exact find/replace strings — no ambiguity
