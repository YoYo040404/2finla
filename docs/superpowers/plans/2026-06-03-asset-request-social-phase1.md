# Asset Request List + Social Phase 1 Prep — 2T Jewelers

**Date:** 2026-06-03  
**Status:** Planning complete. Awaiting assets from 2T before implementation.

**Context:** The site is fully structured and running on Next.js with Vercel. All visual sections have correctly-built CSS vitrine placeholders and demo concept images (`public/assets/demo/phase3a/`). The site looks like a prototype because every image slot is a demo render, not a real 2T product photo. No real media has been received from 2T yet. This plan defines exactly what to request, in what priority order, at what specs, so that a single conversation with the store owner results in usable assets.

---

## 1. Current Asset Inventory

### What exists (but is fake/placeholder)

| File | Slot it fills | Status |
|---|---|---|
| `public/assets/demo/phase3a/2t-demo-hero-chain-pendant-01.png` | Hero video poster fallback | Demo concept — not real 2T photo |
| `public/assets/demo/phase3a/2t-demo-grillz-flat-01.png` | GRILLZ anchor tile | Demo concept |
| `public/assets/demo/phase3a/2t-demo-watch-face-01.png` | WATCHES anchor tile | Demo concept |
| `public/assets/demo/phase3a/2t-demo-chains-01.png` | CHAINS anchor tile | Demo concept |
| `public/assets/demo/phase3a/2t-demo-pendants-01.png` | Pendants secondary tile | Demo concept |
| `public/assets/demo/phase3a/2t-demo-social-thumbnail-01.png` | Unused (no slot wired yet) | Demo |
| `public/assets/hero-loop-demo.mp4` | Hero video loop | File exists but is placeholder |
| `public/assets/brand/2t-logo-full-transparent.png` | Header/Footer logo | ✅ Real logo installed |
| `public/assets/brand/2t-og-image-1200x630.png` | OG/social share image | ✅ Installed |

### What has no asset at all (pure CSS vitrine)

| Slot | Location | Comment in code |
|---|---|---|
| PittsburghStory left canvas | `components/home/PittsburghStory.tsx:5` | "swap outer div for `<img>` when store assets arrive — public/assets/store/store-interior.jpg or store-loop.mp4" |
| SocialTeaser left canvas | `components/home/SocialTeaser.tsx:97–101` | Commented-out video slot wired at `/assets/store/social-clip.mp4` |
| Rings, Bracelets, Earrings tiles | `app/page.tsx` SECONDARY_TILES | No image defined — CSS only |

---

## 2. Minimum Asset List — SocialTeaser Phase 1

These are the only assets needed to execute the social feed Phase 1 plan (manual curated cards replacing the left canvas vitrine in `SocialTeaser.tsx`). See also: `docs/superpowers/plans/2026-06-03-social-feed-feasibility.md`.

| # | What | Format | Quantity |
|---|---|---|---|
| S1 | Screenshot or still-frame from a real @2tjewelers TikTok post | JPG or PNG, 1080×1920 | 1–2 files |
| S2 | Screenshot or still-frame from a real @2tjewelers Instagram post | JPG or PNG, 1080×1080 | 1 file |
| S3 | Direct URL to each source post | Plain text (e.g. tiktok.com/@2tjewelers/video/...) | 1 URL per image |
| S4 | One real caption line per post | Plain text (copy from the actual post caption) | 1 line per image |

**Total: 2–3 image files + 2–3 URLs + 2–3 caption snippets**

Rules for social assets:
- Must be from the real @2tjewelers account, not a competitor or stock image
- No invented captions — copy the real caption text from the post itself
- No follower counts, like counts, or view counts will be shown — only the still image and a link out

---

## 3. Minimum Asset List — Homepage "Less Prototype-Like"

These are the assets that will have the biggest visual impact on the homepage, in rough priority order:

| Priority | # | Asset | Purpose | Slot it replaces |
|---|---|---|---|---|
| 🔴 MUST HAVE | H1 | Hero video — 8–10 sec jewelry loop | Hero section background (full-bleed, muted, looping) | `public/assets/hero-loop-demo.mp4` |
| 🔴 MUST HAVE | H2 | Hero still image (fallback poster) | Shown while video loads or if no video available | `public/assets/demo/phase3a/2t-demo-hero-chain-pendant-01.png` |
| 🔴 MUST HAVE | H3 | Grillz product photo | GRILLZ anchor tile (largest tile on PICK THE PIECE section) | `2t-demo-grillz-flat-01.png` |
| 🔴 MUST HAVE | H4 | Watch product photo | WATCHES anchor tile | `2t-demo-watch-face-01.png` |
| 🟡 IMPORTANT | H5 | Chains product photo | CHAINS anchor tile | `2t-demo-chains-01.png` |
| 🟡 IMPORTANT | H6 | Store interior photo | PittsburghStory left slot (REAL STORE section) | CSS vitrine |
| 🟢 NICE TO HAVE | H7 | Pendants product photo | Pendants secondary tile | `2t-demo-pendants-01.png` |
| 🟢 NICE TO HAVE | H8 | Custom piece before/after or in-progress photo | Custom lane visual | No slot wired yet |

---

## 4. Priority Order — Must-Have vs Nice-to-Have

**Tier 1 — Unblock immediately (maximum impact, minimum ask):**
1. **Hero video** (H1) — single biggest lever. One 8–10 sec phone video of jewelry on black background replaces the entire demo hero. If no video: a strong still photo (H2) buys time.
2. **Grillz photo** (H3) — GRILLZ is the dominant anchor tile, the biggest category card on the page. A real photo here immediately signals "real store."
3. **Watch photo** (H4) — same reason. Watches is the #2 anchor tile.
4. **Social still frames + URLs** (S1–S4) — enables SocialTeaser Phase 1 with zero additional code changes needed beyond `SocialTeaser.tsx`.

**Tier 2 — Add in next batch:**
5. **Chains photo** (H5) — third anchor tile.
6. **Store interior** (H6) — makes the PittsburghStory section feel real.

**Tier 3 — Optional, add when available:**
7. Pendants photo (H7)
8. Custom work photo (H8)
9. Store video clip for SocialTeaser (if they want video instead of static cards later)

---

## 5. Exact File Naming Recommendations

Drop files into these paths (create folders if they don't exist):

```
public/assets/
├── hero-loop.mp4                          ← real hero video (replaces hero-loop-demo.mp4)
├── hero-still-01.jpg                      ← hero poster / fallback still
├── social/
│   ├── 2t-social-tiktok-01.jpg            ← TikTok post still frame
│   ├── 2t-social-tiktok-02.jpg            ← optional second TikTok still
│   └── 2t-social-ig-01.jpg               ← Instagram post still frame
├── store/
│   ├── store-interior-01.jpg              ← store interior photo (PittsburghStory slot)
│   └── store-clip.mp4                     ← optional: store/social video clip
└── products/
    ├── 2t-grillz-hero-01.jpg              ← grillz product photo (anchor tile)
    ├── 2t-watches-hero-01.jpg             ← watches product photo (anchor tile)
    ├── 2t-chains-hero-01.jpg              ← chains product photo (anchor tile)
    └── 2t-pendants-hero-01.jpg            ← pendants photo (secondary tile, optional)
```

**Naming rules:**
- Lowercase, hyphens only, no spaces
- Use `-01` suffix so future updates increment to `-02`, `-03` without renaming the wired slot
- Platform prefix on social assets (`tiktok`, `ig`) so type is clear at a glance

---

## 6. Recommended Image / Video Dimensions

| Asset | Dimensions | Format | Notes |
|---|---|---|---|
| Hero video | 1920×1080 (16:9) | MP4, H.264 | 8–10 sec, muted, loopable, no logos/text overlay, no celebrity likeness |
| Hero still / poster | 1920×1080 minimum | JPG | Dark background preferred; subject centered or slightly off-center |
| Grillz product photo | 800×1000 minimum (portrait) | JPG | Close-up on dark/black background or surface; hands not required |
| Watches product photo | 800×1000 minimum (portrait) | JPG | Same |
| Chains product photo | 800×1000 minimum (portrait) | JPG | Same |
| Pendants photo | 800×1000 minimum (portrait) | JPG | Same |
| Social TikTok still | 1080×1920 (9:16 — full phone frame) | JPG or PNG | Screenshot from real TikTok post on phone |
| Social Instagram still | 1080×1080 (square) | JPG or PNG | Screenshot from real IG post on phone |
| Store interior | 1200×900 minimum (landscape) | JPG | Natural or professional light — no personal faces required |

**Phone photos are fine for Phase 1.** iPhone or Android at native resolution is sufficient. Dark backgrounds photograph well for jewelry. No professional photography required to move past the prototype stage.

---

## 7. What Each Asset Will Be Used For

| Asset | Used where | How it's wired |
|---|---|---|
| Hero video | `app/page.tsx` hero section (~line 95) | `<video autoPlay muted loop playsInline>` at full-bleed behind headline |
| Hero still | `app/page.tsx` hero `poster` attribute (~line 87) | Fallback while video loads; shown on slow connections |
| Grillz photo | `app/page.tsx` ANCHOR_TILES[0].image | `<img>` inside the GRILLZ tile vitrine, full-bleed with overlay |
| Watches photo | `app/page.tsx` ANCHOR_TILES[1].image | Same pattern, WATCHES tile |
| Chains photo | `app/page.tsx` ANCHOR_TILES[2].image | Same pattern, CHAINS tile |
| Pendants photo | `app/page.tsx` SECONDARY_DEMO_IMAGES['PENDANTS.'] | Same pattern, secondary tile |
| Store interior | `components/home/PittsburghStory.tsx` left slot | Replace CSS vitrine `<div>` with `<img>` (slot already commented as ready) |
| Social TikTok still | `components/home/SocialTeaser.tsx` left canvas | Static card: image + TIKTOK badge + caption + link to live post |
| Social IG still | `components/home/SocialTeaser.tsx` left canvas | Same, paired with TikTok card |

---

## 8. What NOT to Request Yet

Do not ask 2T for these in the first request — too much, too early:

- Per-product photos for PDPs (no product detail pages built yet)
- Photos of every ring, bracelet, and earring variant
- GIA/GRA certificate scans or documentation
- Price sheets or inventory lists
- Employee or team portraits
- Video testimonials from customers
- Graphics or artwork from 2T's existing social posts without explicit permission
- Logos from third-party brands (Rolex, GIA, etc.)
- Photos of celebrity or public figures with the jewelry

---

## 9. Short Message to Send to 2T

Ready to copy and send by WhatsApp or text to the store owner:

---

> Hey — I need a few real photos and clips from you to make the website look like the actual store instead of a placeholder.
>
> **PRIORITY (send these first):**
> 1. A short video clip — 8–10 seconds, close-up on any jewelry piece on a dark surface. Phone is fine. No logos or text on screen.
> 2. One photo of a grillz set (close-up on dark background)
> 3. One photo of a watch (close-up on dark background)
> 4. 2–3 screenshots or saved still frames from real @2tjewelers TikTok or Instagram posts — include the link to each post
>
> **OPTIONAL (helpful but not urgent):**
> 5. One photo of the inside of the store (counter area, display cases)
> 6. One photo of a chain
>
> For photos: iPhone/Android is fine. Shoot against a dark or black surface if possible — jewelry pops. Send as original quality, not compressed.
>
> For the social screenshots: screenshot the post from your phone and send the image + the direct link to that post.
>
> That's it for now. Once I have these I can update the site immediately.

---

## 10. Implementation Prompt — After Assets Arrive

When 2T provides assets, drop them into the correct `public/assets/` paths using the naming convention above, then use this prompt to execute:

```
Task: Replace demo concept assets with real 2T assets on the homepage.

Assets received and placed in public/assets/:
- [list each actual filename received]

Changes needed per file:
1. hero-loop.mp4 → update <video> src in app/page.tsx (line ~95)
2. hero-still-01.jpg → update poster attribute on <video> in app/page.tsx (~line 87)
3. products/2t-grillz-hero-01.jpg → update ANCHOR_TILES[0].image in app/page.tsx
4. products/2t-watches-hero-01.jpg → update ANCHOR_TILES[1].image in app/page.tsx
5. products/2t-chains-hero-01.jpg → update ANCHOR_TILES[2].image in app/page.tsx
6. store/store-interior-01.jpg → replace <div> vitrine in PittsburghStory.tsx with <img>
   (slot commented and ready — see PittsburghStory.tsx:5 and :32–35)
7. social/2t-social-tiktok-01.jpg + social/2t-social-ig-01.jpg
   → wire into SocialTeaser.tsx left canvas
   (see docs/superpowers/plans/2026-06-03-social-feed-feasibility.md Section 9 for the full prompt)

Rules:
- Update only the image src values or swap vitrines for <img> tags
- Do not change any copy, layout, or structure
- Update alt text to describe the real content accurately (no invented descriptions)
- No material/stone claims added without per-piece verification
- No fake captions, no invented metadata
- Run npm run build first
- Run Playwright screenshots at 390px and 1280px
- Do not commit without explicit user approval
```

---

## Verification (after implementation)

- [ ] `npm run build` passes with no type errors
- [ ] All new image paths resolve — no 404s in Network tab
- [ ] Hero video plays muted and loops on desktop and mobile
- [ ] Hero still shows correctly while video loads
- [ ] All 3 anchor tiles (Grillz, Watches, Chains) show real product photos, not demo concepts
- [ ] PittsburghStory left slot shows real store photo (if received)
- [ ] SocialTeaser left canvas shows real @2tjewelers still frames + live post links
- [ ] No horizontal scroll at 390px
- [ ] No broken image placeholders visible
- [ ] No follower/like/view counts shown anywhere
- [ ] Claim-safety grep: no material/stone claims added without per-piece verification
- [ ] Playwright screenshot at 390px mobile — all sections visible, no overflow
- [ ] Playwright screenshot at 1280px desktop — all sections aligned correctly

---

*Related plan: `docs/superpowers/plans/2026-06-03-social-feed-feasibility.md`*
