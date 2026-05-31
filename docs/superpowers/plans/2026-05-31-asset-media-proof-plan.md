# 2T Jewelers — Master Asset / Media Proof Plan
# Version: 1.1 — includes Addendum: custom lane, Pittsburgh/social proof, social media integration
# Date: 2026-05-31
# Status: Planning only — saved as source; not approved for execution

---

**Date:** 2026-05-31
**Status:** Research + planning only — no code, no edits, no commits
**Based on:** PROJECT_CONTEXT.md, AGENT_HANDOFF.md, NEXT_ROADMAP.md, CLAIM_SAFETY.md, all docs/* strategy files, Pass 5B competitor matrix (13 brands deep-dived + 11 tier-2), architecture/CRO/VOC audit (2026-05-30), live site state at https://2finla.vercel.app
**Playwright note:** Browser conflict prevented live screenshots this session; visual diagnosis sourced from project files and the 2026-05-30 live-site audit in `2t-architecture-cro-voc-audit-2026-05-30-EN.md`

---

## 1. Executive Recommendation

### What should happen next

**Collect real assets before building new pages.** The site has the right structure, the right brand direction, and a working lead-capture system. The single biggest lever left is media. CSS vitrines are respectable placeholders — but no code pass can replicate what happens when a buyer sees an actual 10K gold Cuban chain hit light in a close-up video. The gap between "prototype that converts" and "store that builds trust fast" is overwhelmingly a photography and video problem, not a UX or copy problem.

**Priority order for next 30–60 days:**

1. Book one focused product shoot — even 6–10 real pieces on a dark surface. This unlocks product wall tiles, category proof, and a BestSellers/New Arrivals rail.
2. Book one store/environment shoot — 332 Fifth Ave interior, counter, hands-on-jewelry handling. This unlocks the PittsburghStory section and About.
3. Film the hero loop — 8–10 seconds, no text, no faces required. Jewelry close-up in motion on black velvet or obsidian surface. This is the single highest-ROI media asset on the entire site.
4. Get at minimum one grillz in-process or finished piece on camera — this unlocks the /grillz page upgrade.
5. Hold the watches page until watch authentication/modification policy is legally settled. Do not photograph watches for public-facing use until the business has a disclosure framework.

### What should NOT happen yet

- Do not add real product photography if pieces have not been verified for material/stone at the product level — a photo creates an implied claim.
- Do not generate or use AI-generated product images anywhere on the site, labeled or unlabeled.
- Do not photograph watches and publish them with brand names visible or implied authenticity claims until Rolex v. BeckerTime-compliant disclosure framework is in place.
- Do not use real customer faces in any media without explicit written permission.
- Do not take or use fake "before/after" custom work images.
- Do not use social screenshots, follower counts, or engagement numbers from any platform.
- Do not wire a live Instagram/TikTok API feed until a reliable cache/proxy solution is confirmed.

---

## 2. Current Media / Proof Diagnosis

### What currently feels real

Based on the 2026-05-30 live audit and project commit history:

- **The hero text system** — "BUILT TO HIT." with BANG. stamp reads authentic and hard. The Anton/Archivo font system is correct for the brand.
- **The ProofMarquee** — CSS-only trust strip with gold borders. Claim-safe facts (Pittsburgh-built, 25 years). Reads as real because it does not overclaim.
- **The PittsburghStory ledger** — "25 YEARS / 5TH AVE / 332 FIFTH AVE" with gold left-border rules. Small and factual. Believable because it is specific.
- **The SocialTeaser channel map** — Real @2tjewelers links on TikTok/Instagram/WhatsApp. No fake counts. Correct structure.
- **The /custom flow** — The selector system and form work. Lead capture is live. The "NO DEPOSIT TO START · WE QUOTE FIRST" trust callout is claim-safe and direct.
- **Footer** — Real address, real phone, real WhatsApp, real Instagram, real TikTok. Acima safe wording. All verifiable.

### What currently feels placeholder / prototype

- **Hero background** — The `<video>` slot is wired but the file `public/assets/hero-loop-demo.mp4` does not exist. The dark gradient fallback is acceptable but creates zero jewelry energy. No shine, no motion, no product.
- **PICK THE PIECE product wall** — CSS vitrine display-case tiles. Striped diagonal-pattern placeholder wells with corner crop marks. Correct as a structural system; visually empty as a store.
- **ShineDirectionBand** — The material/stone direction copy is real and claim-safe. But the band has no product images, no material-specific visual cues. It reads as a spec sheet, not a desire surface.
- **Custom lane on homepage** — Text + keyword chips. No visual product media. No reference image showing what a custom pendant/logo piece looks like when finished.
- **PittsburghStory section** — Stat ledger is honest. But there is no store photo, no counter image, no hands-on-jewelry visual. It reads as a text block claiming trust rather than showing it.
- **SocialTeaser** — Channel map is correct in structure. But there is no thumbnail, no preview of actual content. Three branded cards with SVG icons. Structural, not social.
- **Promo/Special module** — Structural placeholder. Claim-safe "ASK WHAT'S RUNNING NOW." No product image in the vitrine slot.
- **/grillz page** — Structurally acceptable. No real grillz photography. No process proof. No finished piece shown.
- **/watches page** — Structurally acceptable. No real watch photography. No verified piece shown.

### Which sections suffer most from lack of media

**Ranking by urgency (most damaged first):**

1. **Hero** — The most visible section on any device. No video = no motion energy. A dark gradient is holding the fort but cannot create the "BAM effect" the brand direction requires.
2. **PICK THE PIECE product wall** — The first product gateway. All five major tiles are empty CSS patterns. A buyer cannot see a single piece.
3. **PittsburghStory / store proof** — The biggest trust differentiator vs online-only competitors is the real physical Pittsburgh store. Without a photo, the stat ledger is just numbers.
4. **/grillz** — Grillz is the #1 product priority in the site architecture. No real grillz photo exists.
5. **Custom lane (homepage + /custom)** — No reference image showing what a finished custom piece looks like. The form and selector are strong but the desire hook is absent.
6. **SocialTeaser** — Real links are correct. But without real content thumbnails, it reads as a social placeholder rather than a live social presence.

---

## 3. Asset Priority List

### P0 — Critical before any serious traffic

| Asset | Why P0 |
|---|---|
| Hero video loop | Hero has video slot wired, no file. Every visitor on desktop and mobile sees a dark gradient fallback. Zero jewelry energy above the fold. |
| 5–8 real product photos (any current in-stock pieces) | Without a single real product image, PICK THE PIECE is 5 empty tiles. The site cannot be called a "jewelry store" until at least one shelf has something on it. |
| Pittsburgh store interior / counter photo | The #1 trust claim ("Real Pittsburgh store") has no visual support. One honest counter photo validates the entire ProofMarquee. |
| Final logo SVG + favicon + OG image | Logo is temporary PNG. Favicon is missing. OG social card image is missing. Every shared link and every browser tab is a missed brand moment. |

### P1 — Important for credibility

| Asset | Why P1 |
|---|---|
| Grillz photography (1 finished piece minimum) | /grillz is the #1 product category. No real grillz photo exists anywhere on the site. |
| Custom piece reference images (1–3 safe finished examples) | The /custom hero and custom lane have no visual evidence of real work. Buyers need to see one real piece to believe the process is real. See rules in Section 6. |
| Product wall tile images (GRILLZ, CHAINS, WATCHES/PENDANTS dominant tiles) | The three-tile anchor row drives more clicks than the secondary row. Real images here maximize desire. |
| Instagram/TikTok real content thumbnails (6 static stills) | Not a live feed. Just 6 real stills from @2tjewelers that can be used as curated slots in the SocialTeaser area. |
| Chain macro photo (Cuban or rope close-up) | Chains are the highest-volume category. One strong macro of a real chain is broadly usable across homepage, category page, and /grillz context. |

### P2 — Later enhancement

| Asset | Why P2 |
|---|---|
| Grillz process photo (fitting setup or materials laid out) | Reduces fit anxiety. Recommended for the /grillz page eventually, not blocking now. |
| Additional product photos (rings, bracelets, earrings, pendants) | Secondary category tiles. Lower traffic priority than chains/grillz/watches. |
| Watch macro photo (non-brand, iced bezel or aftermarket diamond) | Watch photo with no brand visible is usable on the page inquiry section after disclosure framework is ready. |
| Pittsburgh street exterior / Fifth Ave storefront context shot | Adds local pride and "you can find us" energy to About/PittsburghStory. |
| TikTok/Instagram Reels (build process or finished piece reveal) | Short-form video for social and future SocialTeaser upgrade. |
| Hands-on-jewelry handling shot | Adds intimacy, craftsmanship feel, human presence without showing a customer face. |

---

## 4. Exact Shot List

### Notes on read order

Each asset below is complete and self-contained. "Orientation" = primary crop direction. "Desktop crop" = how the image fits the desktop layout slot. "Mobile crop" = how it fits the 390px mobile layout slot.

---

**ASSET 001**
- Name: `2t-hero-chain-loop-01.mp4`
- Purpose: Hero background video loop
- Target page/section: Homepage hero, `app/page.tsx` video slot
- Shot description: Extreme close-up of a Cuban link chain (or any real chain in stock) resting on matte black or deep charcoal fabric. Slow drift or rotation. Stone flash if stones are present. No text. No faces. No hands required — jewelry only or hands in black gloves. The play of light on the links is the content.
- Orientation: Horizontal (16:9 primary)
- Desktop crop: Full bleed, 1920×1080 minimum. Video plays at opacity 0.60 with gradient overlay — composition can be slightly off-center.
- Mobile crop: Portrait crop possible if 9:16 version is filmed simultaneously; otherwise horizontal loop with center-frame composition works at 390px.
- File type: MP4 (H.264, compressed for web delivery, under 8 MB)
- Dimensions: 1920×1080 minimum; 3840×2160 ideal for retina
- Photo or video: **Video**
- Real asset required: **Yes — no generated/demo footage acceptable for production**
- Claim-safety risk: Low. No material/stone claims in the video itself. The overlay text on the hero carries the copy. Avoid showing any certification logos or karat stamps in frame.
- Notes for photographer/videographer: 8–10 second loop, muted, no audio track needed. Film clean loopable end frame (loop must not jump). Black velvet, obsidian stone, or deep charcoal matte surface. Ring light or directional soft box to create single-direction shine. Gold tone links + ice/stone flash are ideal but any real piece works. Can composite a still version as a fallback if video is not available at shoot time.

---

**ASSET 002**
- Name: `2t-hero-loop-mobile-01.mp4`
- Purpose: Hero background video loop — mobile fallback
- Target page/section: Homepage hero, mobile (390px) viewport
- Shot description: Vertically composed (9:16) version of the hero loop, or center-cropped version of ASSET 001. Chain or jewelry piece centered, slightly lower in frame so the hero headline "BUILT TO HIT." overlays cleanly.
- Orientation: Vertical (9:16)
- Desktop crop: Not used on desktop.
- Mobile crop: Full bleed at 390×844 (iPhone 14 safe area). Keep key visual above midpoint of frame.
- File type: MP4
- Dimensions: 1080×1920
- Photo or video: **Video**
- Real asset required: Yes (can derive from same shoot as ASSET 001 if videographer frames for both crops simultaneously)
- Claim-safety risk: Same as ASSET 001
- Notes: If budget allows only one crop, ASSET 001 (16:9) will be acceptable on mobile at reduced quality. The vertical version is P1, not P0.

---

**ASSET 003**
- Name: `2t-product-tile-grillz-01.jpg`
- Purpose: GRILLZ dominant anchor tile — PICK THE PIECE gateway, homepage
- Target page/section: Homepage, PICK THE PIECE section, anchor row tile (1.4fr — the largest tile)
- Shot description: A real 2T grillz set — top, bottom, or full mouth — displayed on a clean matte black surface or styled on a dark prop (not in a mouth unless written customer permission exists). If no finished grillz is available for the shoot, a real material layout (gold wire, stone settings) is acceptable as a direction indicator for now.
- Orientation: Square or portrait (3:4 preferred)
- Desktop crop: Full bleed tile at 600×800px display minimum. Tile has diagonal striped CSS pattern behind it — image should be opaque and cover the vitrine well.
- Mobile crop: Center crop at 390×520px. Keep main piece central.
- File type: JPG (high quality, under 300 KB web-optimized)
- Dimensions: 1200×1600 source minimum
- Photo or video: **Photo** (short 3–5 second cinemagraph of gold shimmer would be P1 upgrade)
- Real asset required: **Yes for production** — CSS vitrine is acceptable for demo phase only
- Claim-safety risk: **Medium.** Do not show the piece in a mouth unless customer consent exists. Do not overlay text claiming "gold" or "diamond" on the tile unless verified per piece. No "FDA approved," "guaranteed fit," or dental claim in image or caption. Image shows the piece — no claim copy overlaid.
- Notes: If no grillz is available for the shoot, a close-up of grillz materials (e.g., gold wire, stone settings on a jeweler's tray) is acceptable as a direction tile. Label the slot in the code with `data-placeholder="real grillz coming"` and do not deploy it in any paid campaign.

---

**ASSET 004**
- Name: `2t-product-tile-chain-01.jpg`
- Purpose: CHAINS tile — PICK THE PIECE secondary row or anchor row
- Target page/section: Homepage product wall, Chains tile; also usable in /collections/chains hero
- Shot description: Cuban link chain (or rope/tennis — whichever is actually in stock) laid flat or coiled on matte black surface. Light source directional to create link-to-link shine. Fill frame with chain — no surface visible except a thin dark border.
- Orientation: Square (1:1 preferred) or landscape (16:9 for /chains hero)
- Desktop crop: 800×800 tile minimum. 1600×900 for category hero use.
- Mobile crop: Center square at 390×390.
- File type: JPG
- Dimensions: 1600×1600 source minimum
- Photo or video: **Photo**
- Real asset required: Yes
- Claim-safety risk: Low. No karat, stone, or material claim in the image. Alt text: "Gold chain — 2T Jewelers Pittsburgh" (no material spec in alt unless confirmed per piece).
- Notes: Film/shoot with chain in motion as a secondary cinemagraph if budget allows. The shimmer of chain links under directional light is the strongest visual moment available to 2T before real grillz/watch photography.

---

**ASSET 005**
- Name: `2t-product-tile-watches-01.jpg`
- Purpose: WATCHES tile — PICK THE PIECE anchor row
- Target page/section: Homepage product wall, Watches tile
- Shot description: A watch (real piece in stock, no brand name visible or prominent in frame) on matte black surface. No brand name readable in final crop. Iced bezel or diamond face if available. If no watch is available, this tile stays as CSS vitrine for now — do not use a stock image.
- Orientation: Portrait (3:4) or square
- Desktop crop: 600×800 tile
- Mobile crop: 390×520
- File type: JPG
- Dimensions: 1200×1600 source
- Photo or video: **Photo**
- Real asset required: **Yes — but this tile should remain CSS vitrine until the watches disclosure/authentication framework is confirmed**
- Claim-safety risk: **High.** Watch photography requires legal disclosure framework (Rolex v. BeckerTime). Do not use a watch tile with a real watch image until: (a) no brand name is readable, (b) the disclosure framework is in place, (c) the image caption and alt text contain no authenticity, brand, or "factory-set" claim.
- Notes: The watch tile can remain a CSS vitrine indefinitely. It is better to hold this slot empty than to publish a watch image that creates brand or authenticity ambiguity.

---

**ASSET 006**
- Name: `2t-product-tile-pendants-01.jpg`
- Purpose: PENDANTS tile — PICK THE PIECE secondary row
- Target page/section: Homepage product wall, Pendants tile; also /collections/pendants hero
- Shot description: One finished custom pendant — logo, name, or abstract custom shape — held by black-gloved hand or laid flat on dark surface. The piece should be real and verified. If no finished custom pendant is available, this tile stays as CSS vitrine.
- Orientation: Square or portrait
- Desktop crop: 600×600 tile
- Mobile crop: 390×390
- File type: JPG
- Dimensions: 1200×1200 source
- Photo or video: **Photo**
- Real asset required: Yes
- Claim-safety risk: Medium. Do not show a customer face or use their name without permission. Do not add material/stone claims in the image caption unless verified per the specific piece.
- Notes: This is the piece that best demonstrates 2T's custom capability without committing to any specific product. A logo pendant (non-customer-specific, business-owned design) is the safest choice — no customer consent required.

---

**ASSET 007**
- Name: `2t-store-counter-01.jpg`
- Purpose: Pittsburgh store interior / counter — PittsburghStory proof
- Target page/section: PittsburghStory section; eventually About page, local SEO pages
- Shot description: The 2T store interior at 332 Fifth Ave, Pittsburgh. Counter with jewelry displayed. Store lighting. No staff faces unless staff provides written consent and preferences sharing. Alternative: counter from above with jewelry laid out — hands-in-frame option with black gloves if preferred for anonymous feel.
- Orientation: Landscape (16:9)
- Desktop crop: 1280×720 or 1600×900 for full-width section.
- Mobile crop: Center crop 390×260.
- File type: JPG
- Dimensions: 2400×1350 source minimum
- Photo or video: **Photo** (short ambient loop at P2)
- Real asset required: **Yes — critical, no AI/generated store image allowed**
- Claim-safety risk: Low. The image itself carries no claim. Do not overlay "100% authentic" or authentication language on the store photo.
- Notes: Even a single honest counter-angle photo unlocks the PittsburghStory trust claim. It is more trust-building than any copy. The "25 years" and "332 Fifth Ave" claims on the page are only fully credible when a real store image exists alongside them.

---

**ASSET 008**
- Name: `2t-store-exterior-01.jpg`
- Purpose: Pittsburgh storefront exterior / Fifth Ave context
- Target page/section: About section, local SEO pages (/grillz-pittsburgh, /custom-jewelry-pittsburgh)
- Shot description: Exterior of the building at 332 Fifth Ave, Pittsburgh, PA. Ideally with the 2T Jewelers signage visible. A downtown Pittsburgh street-level shot that says "real city, real store."
- Orientation: Landscape
- Desktop crop: 1280×720
- Mobile crop: 390×260
- File type: JPG
- Dimensions: 2000×1200 minimum
- Photo or video: **Photo**
- Real asset required: Yes
- Claim-safety risk: Very low. No product claims in a storefront photo.
- Notes: A phone camera is acceptable for this shot if professional photography budget is limited. P1 asset — not P0. The interior counter shot (ASSET 007) is more trust-building per dollar than the exterior.

---

**ASSET 009**
- Name: `2t-hands-jewelry-01.jpg`
- Purpose: Hands-on-jewelry handling — human presence without customer exposure
- Target page/section: Homepage custom lane visual slot; /custom hero (if a media slot is added); category pages
- Shot description: Gloved or bare staff hands holding a real piece — a chain, pendant, or grillz on finger/surface. Jewelry centered in frame. Not staged for social media — feels like a real craftsperson examining a piece.
- Orientation: Portrait or square
- Desktop crop: 800×800 or 600×800
- Mobile crop: 390×390
- File type: JPG
- Dimensions: 1200×1200 source
- Photo or video: **Photo**
- Real asset required: Yes
- Claim-safety risk: Low. No material/stone claims implied by hands-holding-jewelry composition. Do not add text overlays claiming "solid gold" or "real diamond" on this image.
- Notes: A more affordable alternative to a full product shot setup. Can use store's natural light at the counter. Does not require a professional studio if the phone camera captures good macro focus.

---

**ASSET 010**
- Name: `2t-grillz-macro-01.jpg`
- Purpose: Grillz macro close-up — /grillz hero and homepage GRILLZ tile
- Target page/section: /grillz hero; Homepage GRILLZ anchor tile
- Shot description: Close-up of a finished grillz set — top or bottom row — on a dark surface or jeweler's tray. No mouth. No dental claim context. Clean macro shot showing the finish, stones, and gold work. The piece must be real and owned by 2T (not a customer's piece without permission).
- Orientation: Landscape or square
- Desktop crop: 1280×720 for /grillz hero; 600×600 for tile
- Mobile crop: 390×260 for hero; 390×390 for tile
- File type: JPG
- Dimensions: 2000×1500 source minimum
- Photo or video: **Photo** (short 3–5 second cinemagraph at P2)
- Real asset required: **Yes — P0 for the /grillz page once it enters QA/upgrade phase**
- Claim-safety risk: **Medium.** No dental/fit/FDA/mold claims implied by the image. No claim that the grillz "fits" or is "safe for teeth." The image shows the piece — not the process or the fit outcome. Alt text: "Custom grillz — 2T Jewelers Pittsburgh" (no karat, stone, or fit claim in alt).
- Notes: If no finished grillz is available at shoot time, a close-up of the raw gold and stone materials laid out on a jeweler's work surface is a claim-safe interim that shows craft without implying a finished product.

---

**ASSET 011**
- Name: `2t-custom-sample-pendant-01.jpg`
- Purpose: Custom piece reference image — /custom page visual slot and homepage custom lane
- Target page/section: Homepage custom lane vitrine slot; /custom hero media slot (if one is added)
- Shot description: One real finished custom pendant — logo or name piece — that is owned by 2T (not a customer's piece). Photographed on dark surface. Shows the piece clearly from the front. No customer name, face, or identifying information visible.
- Orientation: Square or portrait
- Desktop crop: 800×800
- Mobile crop: 390×390
- File type: JPG
- Dimensions: 1600×1600 source
- Photo or video: **Photo**
- Real asset required: **Yes — this is the most important piece-level trust asset for the /custom flow**
- Claim-safety risk: **Low-medium.** Do not label this image with material/stone specs unless those are verified for this specific piece. Caption: "Custom piece — 2T Jewelers. Details confirmed per piece." Do not call it a "customer order" or "before/after" unless it is genuinely one.
- Notes: If 2T does not have a business-owned demo piece, a safe alternative is a photo pendant with a non-personal reference image (a logo, a graphic, a non-identifying design) that 2T has made for demonstration purposes. This must be a real piece, not a generated image.

---

**ASSET 012**
- Name: `2t-logo-primary.svg` + `2t-logo-primary-2x.png` + `2t-logo-mark.svg`
- Purpose: Primary horizontal logo lockup — header, OG card, all brand surfaces
- Target page/section: Header, footer (replacing existing temporary PNGs), OG meta card, favicon system
- Shot description: Not photography — design asset. Horizontal wordmark lockup reading cleanly on `#050505` (obsidian) background. White or bone primary, gold (`#C9A449`) accent. Must hold detail at 190–240px wide × 28–34px tall on desktop. No glow, no gradient, no baked-in sparkle effects. Companion mark for favicon use.
- Orientation: Horizontal (primary); square mark (secondary)
- Desktop render: 190–240px wide
- Mobile render: 126–156px wide
- File type: SVG (primary), PNG 2x fallback, ICO/PNG favicon set
- Dimensions: SVG scales; PNG export at 480×80px minimum for horizontal lockup
- Photo or video: **Design asset**
- Real asset required: **Yes — this is blocking favicon and OG card, both of which affect every shared link**
- Claim-safety risk: None
- Notes: Current `2t-logo-wide-transparent.png` and `2t-logo-full-black-bg.png` are temporary placeholders confirmed in project docs. The logo design itself requires business owner input on art direction (typography, mark style).

---

**ASSET 013**
- Name: `2t-og-card-01.jpg`
- Purpose: OG / social card — Open Graph meta image for all shared links
- Target page/section: `<meta property="og:image">` on all pages
- Shot description: 1200×630px branded card. "2T JEWELERS" in Anton display font on obsidian background. BANG. stamp. Pittsburgh tagline. No product image required — typographic OG card is claim-safe, fast to produce, and works even before photography exists.
- Orientation: Landscape (1.91:1)
- Desktop crop: 1200×630
- Mobile crop: Same (OG card is always 1.91:1)
- File type: JPG
- Dimensions: 1200×630 (standard OG spec)
- Photo or video: **Design asset** (can be produced by developer using Satori or canvas in Next.js)
- Real asset required: Can be generated from existing design tokens — no photography required
- Claim-safety risk: Low. Keep OG copy to brand name + location + tagline. No material/stone claims.
- Notes: This is the one asset that can be created immediately without a shoot. A branded typographic OG card is acceptable for launch and can be upgraded later when a hero product image is available.

---

**ASSET 014–019**
- Names: `2t-social-instagram-01.jpg` through `2t-social-instagram-06.jpg`
- Purpose: Real Instagram content stills — SocialTeaser section curated thumbnail slots
- Target page/section: SocialTeaser, Instagram card
- Shot description: 6 static screenshot stills or export crops from real @2tjewelers Instagram posts. These are real content exports, not AI-generated or staged fake thumbnails. If no real posts exist, this slot stays as the current SVG-icon channel card — do not fake thumbnails.
- Orientation: Square (1:1)
- Desktop crop: 200×200 per thumbnail minimum
- Mobile crop: 130×130
- File type: JPG
- Dimensions: 400×400 source per thumbnail
- Photo or video: **Photo (existing social exports)**
- Real asset required: **Yes — use only real @2tjewelers content**
- Claim-safety risk: Low if content is real. High if fake/generated. Never screenshot another account's content and imply it is 2T's.
- Notes: If fewer than 6 real posts exist at the time of implementation, use only the real ones and keep the remaining SocialTeaser slots as structural channel cards. Do not pad with generated imagery.

---

**ASSET 020–025**
- Names: `2t-social-tiktok-01.jpg` through `2t-social-tiktok-06.jpg`
- Purpose: Real TikTok content stills — SocialTeaser TikTok card
- Target page/section: SocialTeaser, TikTok card
- Shot description: Same as Instagram — real exports or stills from @2tjewelers TikTok videos. Not AI-generated. Not screenshots of other accounts.
- Orientation: Vertical (9:16) or square crop
- Desktop crop: 200×350 (vertical card) or 200×200 (square crop)
- Mobile crop: 130×230
- File type: JPG
- Dimensions: 400×700 source (vertical)
- Photo or video: **Photo (TikTok export stills)**
- Real asset required: Yes
- Claim-safety risk: Low if real. See ASSET 014 notes.
- Notes: TikTok "Watch the build." content (showing the build process or finished reveal) is the highest-performing content type in this category per Pass 5B research. Priority for @2tjewelers content creation.

---

## 5. Homepage Asset Plan

### Hero loop (ASSET 001 + 002)

**Current state:** `<video>` slot is wired at `public/assets/hero-loop-demo.mp4`. File does not exist. Dark gradient fallback is in place.

**When the video file drops in:** Developer drops the MP4 at `public/assets/hero-loop-demo.mp4`. No code change required. The `<source>` tag and fallback poster are already wired.

**What the video must NOT contain:**
- No brand name watermarks
- No text overlays (headline text is a CSS layer above the video)
- No customer faces
- No celebrity likeness
- No pricing, karat, or stone claims visible in frame
- No inventory language ("in stock," "buy now") in the video itself

**Hero poster fallback:** Add a `poster` attribute pointing to a single-frame JPEG export of the first video frame. File: `2t-hero-poster-01.jpg` at 1920×1080, JPG under 100 KB.

### Product wall tiles (PICK THE PIECE gateway)

**Asset replacement order:**

1. **GRILLZ tile** (ASSET 003) — Replace first. Highest visual priority on the page.
2. **CHAINS tile** (ASSET 004) — Replace second. Broadest appeal across buyer types.
3. **PENDANTS tile** (ASSET 006) — Replace third when custom sample pendant is available.
4. **WATCHES tile** (ASSET 005) — Hold as CSS vitrine until watch disclosure framework is in place.
5. **Secondary tiles** (rings, bracelets, earrings) — Remain CSS vitrines. Lower conversion priority.

**Rule when replacing tiles:** Replace one tile at a time as real assets arrive. Never mix 2 real images and 3 CSS vitrines inconsistently — if fewer than 3 real images exist, keep all 5 as CSS vitrines for visual consistency.

### Custom lane media slot

**Current state:** Text + keyword chips + dual CTA. No image. Left vitrine slot is `aspectRatio: '4/3'` CSS placeholder.

**See Addendum Section 1 for full custom lane redesign recommendation.** The passive chip system and empty vitrine should be replaced with Idea Type Cards before the left media column is introduced.

### Pittsburgh proof (PittsburghStory section)

**Asset needed:** ASSET 007 (store interior / counter photo). When available, this image replaces the abstract background treatment in PittsburghStory.

**What the store photo must not show:**
- No customer faces without consent
- No visible pricing or handwritten price tags
- No inventory that implies "in stock" or "available now" on specific products
- No watch brand names prominently visible in frame

### Promo / special module visual slot

**For State B (category signal):** Replace vitrine with ASSET 004 (chain macro) when available.

**For State C (active verified offer):** Replace vitrine with a real product photo of the specific featured piece + verified material badge when a real, confirmed offer exists.

**Never:** Put a fake product image in this slot to make it look like an active promotion.

### Social teaser (SocialTeaser section)

**See Addendum Section 3 for full Instagram/TikTok integration architecture.** The `data/social-feed.json` approach (Option C) is the recommended MVP.

---

## 6. /custom Asset Plan

### Does /custom need new hero media now?

**Not urgently.** The /custom page runs with a text-driven compact hero (user-approved and live). Adding a hero image to /custom is a P2 enhancement.

**If a hero media slot is added to /custom later:** The correct image is ASSET 011 (custom sample pendant) or ASSET 009 (hands-on-jewelry). The slot should not be added until that image exists.

### Should the upload/reference visual stay abstract?

**Yes — for now.** The abstract upload zone is honest and safe. Do not replace it with fake sample references, generated images, or stock photography.

### What sample visuals are safe for /custom now?

**One type only:** A business-owned demo piece photographed for this purpose (e.g., a pendant using the 2T logo or "BANG." branding as the custom design subject). Not a fake customer order — a real piece made by 2T for demonstration.

**What is not safe:**
- A real customer's piece without written permission signed by that customer
- A generated/AI-rendered concept of "what a pendant could look like"
- A competitor's piece re-used as a 2T example
- An unfinished sketch or CAD render (forbidden claim category)

### How to avoid fake custom proof

- Show only real finished pieces that 2T owns or has explicit permission to show
- Never label an image as "customer order" or "recent project" unless it genuinely is one
- Do not show before/after sequences unless both images are genuine, in-order, and from the same project

---

## 7. /grillz Asset Plan

### Grillz hero needs

**Minimum needed:** ASSET 010 (grillz macro). One real finished grillz set photographed from above on a dark surface.

### Process / fit proof needs

**What is safe:** A photo showing grillz materials laid out on a jeweler's work surface (gold wire, stones, tools). Shows craft without implying a fit outcome.

**What is not safe:** Any image involving a dental impression tray, a mold, or teeth contact. The CLAIM_SAFETY.md forbidden list includes mold kit, impression kit, fit guarantee, and dental/medical claims. A process photo involving teeth or mold equipment creates an implied claim risk even without text.

### What claims to avoid in grillz visuals

- No visible mold, dental impression, or bite tray
- No image of grillz in a mouth unless the individual has signed a model release
- No "before/after" comparison using real smiles
- No overlay text claiming specific karat unless product-level verified
- No "guaranteed fit" or "comfortable fit" implied by image composition

### What visuals are safe before real customer assets exist

- Real grillz piece on a dark surface (if a piece is owned by 2T)
- Close-up of grillz components (gold elements, stone trays, jeweler's work-in-progress)
- Abstract directional tile using the existing CSS vitrine system

---

## 8. /watches Asset Plan

### Current state and hold recommendation

**Do not photograph watches for public-facing use until the business has a disclosure framework in place.** The watches category is the highest legal-risk category on the site (Rolex v. BeckerTime, 5th Cir. 2024 — aftermarket modification requires prominent disclosure; a disclaimer "not always sufficient").

**Before any watch photograph goes live, the business must establish:**
1. Whether each watch is factory-original or aftermarket-modified
2. No brand name or model name used to imply official dealer or authenticity certification
3. Explicit statement that watches are not manufacturer-authorized where applicable
4. Individual piece disclosure on every image caption and product-level copy

**Until then:** The watches tile on the homepage stays as CSS vitrine. The /watches page stays as a text-driven inquiry page.

### What not to claim visually or verbally on watches

- No brand names (Rolex, AP, Patek, etc.) in visible site copy without a clear non-affiliation disclaimer
- No "factory-set," "authentic," "certified," or any brand name or official dealer status
- No implied authenticity through composition
- "Iced bezel watches — ask what's in" is safe. Everything specific waits for the disclosure framework.

---

## 9. Category / Product Proof Plan

### Chains

**What can be shown now:** ASSET 004 (chain macro photo) in the hero slot when it is available. Category page stays copy/selector-driven.

**What waits for real inventory:** Product cards with real photos, style-specific tiles (Cuban, rope, tennis), "In stock" language on any specific piece.

### Pendants

**What can be shown now:** ASSET 006 and/or ASSET 011 (one finished custom pendant) in the hero tile and as the custom bridge visual.

**What waits for real inventory:** Photo pendant catalog (real customer orders require consent), "Best sellers" pendant list, specific material badges at product level.

### Rings, Bracelets, Earrings

Secondary tiles on the homepage. Can remain CSS vitrine tiles through the demo phase. Add photography only after at least one real product per category exists and is confirmed for material/stone.

**Never:** Populate these tiles with stock images of rings, bracelets, or earrings that 2T does not own or sell.

### Best Sellers / New Arrivals

**Rule:** These pages must NEVER be populated with invented bestsellers or invented new arrivals.

**`noindex` status:** Per architecture audit recommendation, these pages should be `noindex` until real, verified inventory populates them.

**What is safe now:** "Ask what's in stock now" + WhatsApp prefill for each category.

**What happens when real inventory arrives:** Real product card drops in. Real badge ([IN STOCK] when confirmed, [14K GOLD] when verified per piece). Real photo. No invented "best seller" ranking.

---

## 10. Store / Pittsburgh Proof Plan

### Storefront photo (ASSET 008)

One exterior shot of 332 Fifth Ave is a P1 asset for local SEO pages. A phone camera shot during business hours is acceptable. No staging required.

### Interior / counter (ASSET 007)

**P0 for the PittsburghStory section.** One honest counter photo validates "real Pittsburgh store" more than any copy. Shot suggestions:

- Counter-level overhead looking down at display cases
- Side angle showing cases, jewelry, and store depth
- Tight crop of display case with pieces inside

**Customer privacy:** Do not photograph customers without explicit consent. If any customer is incidentally captured, blur their face in post.

### Hands / jewelry handling (ASSET 009)

Black gloves are the highest-control option (anonymous, professional, on-brand with the dark aesthetic). Does not require professional studio.

### How to show real store trust without overdoing it

**Do:** One interior photo, one exterior shot, real address in footer and PittsburghStory, real phone number visible.

**Don't:**
- More than 3 store photos before the site is past the demo phase
- Interior shots that show empty display cases prominently
- Any visible pricing tags or handwritten price lists
- Any visible other-brand items with their brand names readable in frame

---

## 11. Social Media Proof Plan

### Instagram / TikTok content needs

**Now:** Real links to @2tjewelers on both platforms are wired in the SocialTeaser section and footer. This is correct and claim-safe.

**Next:** See Addendum Section 3 for full Instagram/TikTok integration architecture (Option C recommended: curated static thumbnails via `data/social-feed.json`).

### What must not be faked

- No fake follower count anywhere on the site without confirmed verified count
- No fake view count or like count
- No screenshot of someone else's post implied to be @2tjewelers content
- No AI-generated "social post" mockups
- No fake UGC (invented customer photos)
- No fake captions or invented customer testimonials in social format

### Dynamic feed vs curated real content slots

**Recommendation:** Curated real-content slots via `data/social-feed.json` are the right architecture for 2T at this stage. See Addendum Section 3 for full options analysis.

---

## 12. Asset Naming Convention

### Convention

```
[brand]-[subject]-[variant]-[number].[ext]
```

All lowercase, hyphens only (no underscores, no spaces), sequential numbering.

### Examples

| Asset | Filename |
|---|---|
| Hero video loop | `2t-hero-chain-loop-01.mp4` |
| Hero poster still | `2t-hero-poster-01.jpg` |
| Grillz macro | `2t-grillz-macro-01.jpg` |
| Grillz process | `2t-grillz-process-01.jpg` |
| Chain macro | `2t-chain-macro-01.jpg` |
| Pendant custom sample | `2t-pendant-custom-sample-01.jpg` |
| Watch wrist | `2t-watch-wrist-01.jpg` |
| Watch bezel macro | `2t-watch-bezel-macro-01.jpg` |
| Store counter | `2t-store-counter-01.jpg` |
| Store exterior / Fifth Ave | `2t-store-exterior-01.jpg` |
| Hands jewelry handling | `2t-hands-jewelry-01.jpg` |
| Logo primary SVG | `2t-logo-primary.svg` |
| Logo primary PNG 2x | `2t-logo-primary-2x.png` |
| Logo mark (favicon use) | `2t-logo-mark.svg` |
| OG card image | `2t-og-card-01.jpg` |
| Social Instagram thumb 1–6 | `2t-social-instagram-01.jpg` … `2t-social-instagram-06.jpg` |
| Social TikTok thumb 1–6 | `2t-social-tiktok-01.jpg` … `2t-social-tiktok-06.jpg` |
| Custom piece reference | `2t-custom-sample-pendant-01.jpg` |
| Hero video mobile | `2t-hero-loop-mobile-01.mp4` |
| Grillz secondary angle | `2t-grillz-macro-02.jpg` |

### Folder structure under `public/assets/`

```
public/assets/
├── hero/
│   ├── 2t-hero-chain-loop-01.mp4
│   ├── 2t-hero-loop-mobile-01.mp4
│   └── 2t-hero-poster-01.jpg
├── products/
│   ├── 2t-chain-macro-01.jpg
│   ├── 2t-grillz-macro-01.jpg
│   ├── 2t-grillz-macro-02.jpg
│   ├── 2t-pendant-custom-sample-01.jpg
│   ├── 2t-watch-wrist-01.jpg
│   └── 2t-watch-bezel-macro-01.jpg
├── store/
│   ├── 2t-store-counter-01.jpg
│   ├── 2t-store-exterior-01.jpg
│   └── 2t-hands-jewelry-01.jpg
├── social/
│   ├── 2t-social-instagram-01.jpg  (through 06)
│   └── 2t-social-tiktok-01.jpg     (through 06)
├── brand/
│   ├── 2t-logo-primary.svg
│   ├── 2t-logo-primary-2x.png
│   ├── 2t-logo-mark.svg
│   └── 2t-og-card-01.jpg
└── demo/
    └── (any temporary demo assets, clearly labeled, never deployed to paid traffic)
```

**Note:** Do not move or rename existing assets (`2t-logo-wide-transparent.png`, `2t-logo-full-black-bg.png`) until replacement SVG files are confirmed and wired.

---

## 13. Temporary / Demo Asset Rules

### Four categories

| Category | Definition | What is safe | What is not safe |
|---|---|---|---|
| **Real asset** | A photograph of a real 2T product, store, or media property, taken for and owned by 2T | Deploy on any public page, paid traffic, shared links | N/A |
| **Temporary demo asset** | A real photograph not yet verified at per-piece claim level | Use on the live demo site, not in paid traffic or press coverage | Do not overlay verified material claims; do not label as "customer order" or "verified product" |
| **Generated concept image** | An AI-generated or rendered image of what a piece "could look like" | Internal planning, concept review only. Never on the public site. | Never on any public-facing page. Never shown to buyers as a real 2T piece. |
| **Unsafe fake proof** | A stock image of jewelry, a competitor's piece, a customer's piece without consent, a fake testimonial image | Never on the site in any capacity | Any use on the live site is a trust and legal risk |

### Labeling in code

For demo assets (real but not yet claim-verified):
- Add a HTML comment in code: `{/* DEMO ASSET — material not claim-verified at product level */}`
- Track in NEXT_ROADMAP.md which tiles have real vs demo vs vitrine status
- Never deploy a demo asset into a paid ad creative

---

## 14. Claim-Safety Checklist for Media

### Diamonds

- [ ] Do not use the word "diamond" in any image caption, alt text, or overlay unless stone identity is confirmed per piece
- [ ] If real diamonds are present, label at product level: "Natural diamond" or "Lab-grown diamond" — never just "diamond"
- [ ] Do not show GIA certificate in frame unless confirmed for that specific stone
- [ ] Do not photograph a moissanite piece and label it "diamond" in any context
- [ ] "VVS" may not appear in image alt text, caption, or overlay unless VVS clarity is confirmed for that piece

### Moissanite

- [ ] Moissanite must be named as moissanite in any photo caption or alt text — not as "diamond" or "diamond alternative"
- [ ] "D-color VVS Moissanite" language approved for homepage/ShineDirectionBand copy — not for individual product photo captions unless GRA-cert confirmation exists
- [ ] Do not use GIA grading language on moissanite product photos
- [ ] "Passes diamond tester" must not appear in any image caption, overlay, or alt text
- [ ] If a moissanite piece is photographed in the same frame as text saying "diamond," the composition creates an implied claim risk

### Silver

- [ ] Do not caption any photographed silver piece as "925 sterling silver" without per-piece hallmark confirmation
- [ ] "925 Sterling Silver" is confirmed at business level for homepage direction copy only — does not extend to product-level photo captions without per-piece verification
- [ ] Do not frame silver pieces as "budget" or "affordable alternative" to gold in any caption

### Gold

- [ ] Karat (10K, 14K, 18K) may not appear in any product photo caption or alt unless confirmed per piece
- [ ] "Solid gold" may not appear in any photo caption unless confirmed per piece (not plated)
- [ ] "Gold-plated" must be stated explicitly if the piece is plated
- [ ] Vermeil must be identified as vermeil, not just "gold"

### Watches

- [ ] No brand name visible or readable in any published watch photograph
- [ ] No caption claiming "factory-set," "authentic," "certified," or any brand name
- [ ] Aftermarket modifications must be disclosed when photos go live
- [ ] No watch photography deployed until the disclosure framework is in place

### Grillz

- [ ] No grillz photo showing a piece in a mouth without written model consent
- [ ] No image caption implying "guaranteed fit," "comfortable fit," "safe for teeth," or any dental/medical claim
- [ ] No process photo involving dental molds, impressions, or bite trays
- [ ] No "before/after" of a smile with and without grillz without full model consent

### Customer photos (submitted via /custom upload)

- [ ] Customer-submitted photos are never published publicly without explicit written permission
- [ ] "Before" reference images submitted by customers are never used in site media without explicit permission
- [ ] "After" photos of completed customer orders may only be used with written permission from that customer

### Social posts

- [ ] Only @2tjewelers posts may be used in the SocialTeaser section
- [ ] No screenshot of another account's post may be used
- [ ] No fake "example post" created with AI tools
- [ ] No follower counts, like counts, or view counts may be shown unless confirmed from the live account
- [ ] Screenshots of @2tjewelers posts used as static thumbnails must link to the real post URL

### Store photos

- [ ] Store photos must show the real 332 Fifth Ave, Pittsburgh location
- [ ] No AI-generated store interior or exterior
- [ ] No stock image of a jewelry store interior
- [ ] Visible pricing tags or handwritten price notes must be cropped or removed from published photos
- [ ] Watch brand names in display cases should be cropped, blurred, or avoided in composition

---

## 15. Recommended Next Implementation Phase

### Recommendation: Collect assets before building new pages

**Do not build new category pages, SEO landing pages, or product pages until at minimum these assets exist:**
- One real product photograph (any category)
- One real store interior photograph

### The correct unlock sequence

```
STEP 1: Book one focused product shoot
         → Film hero loop (8-10 sec)
         → Photograph 6-10 real pieces (chains, grillz, pendants priority)
         → Photograph store counter and interior
         ↓
STEP 2: Drop hero video file at public/assets/hero-loop-demo.mp4
        → Immediate homepage upgrade with zero code changes
         ↓
STEP 3: Replace GRILLZ tile in PICK THE PIECE with real photo
         ↓
STEP 4: Replace CHAINS tile with real photo
         ↓
STEP 5: Add store photo to PittsburghStory section
         → Site now has real media proof in 3 critical sections
         ↓
STEP 6: Replace custom lane vitrine with custom sample pendant photo
         ↓
STEP 7: Build /grillz visual pass (with real grillz photo)
         ↓
STEP 8: Build category pages with real product proof (chains first)
```

### The one-sentence case

**A buyer who sees a chain shimmer in the hero loop, a real grillz in the first tile, and a real Pittsburgh counter photo in the trust section will believe "this store is real and these people know jewelry" — no amount of copy or design work achieves that without those three photographs.**

---

## 16. Questions for the Business Owner

**Q1 — What products do you currently have in hand that we could photograph?**
Determines which tiles get upgraded first and whether category pages can become real commerce pages.

**Q2 — Is the real store available for a photography session?**
One session at 332 Fifth Ave, during business hours with real display cases set up normally.

**Q3 — Do you have any real finished custom pieces that are 2T-owned (not customer orders)?**
A business-owned demo piece is the safest path to a custom lane visual without customer consent requirements.

**Q4 — What are the actual materials and stones on any pieces we'd photograph?**
Each piece needs a material/stone confirmation note before any badge or caption can be applied.

**Q5 — What is the current watch situation: inquiry-only or sold, and are any aftermarket-modified?**
Determines whether the watches tile stays as CSS vitrine and what disclosure framework is needed.

**Q6 — Are there any real @2tjewelers posts on Instagram or TikTok that we can use as static thumbnails?**
If yes: provide the post URLs. If no: the SocialTeaser stays as channel-map cards.

**Q7 — What does your videography/photography budget look like for this shoot?**
Helps prioritize which assets to pursue first and whether professional vs phone camera is appropriate per slot.

**Q8 — Do you have any grillz in stock (finished, unworn, business-owned) that we could photograph?**
The #1 product category on the site. One real grillz photograph is the single highest-priority piece-level asset.

---

---

# ADDENDUM

## Addendum 1. Custom Lane Recommendation

### Diagnosis

From the live code read (`app/page.tsx` lines 391–507):

The custom lane is a two-column grid. **Left:** `pb-vitrine-custom` — a `4/3` aspect-ratio CSS vitrine (diagonal-stripe placeholder well) with four tiny pill-tags inside the frame (`LOGO`, `PHOTO`, `NAME`, `SKETCH`) and corner registration marks. **Right:** the heading `YOUR LOGO. / YOUR NAME. / YOUR PIECE.` + body paragraph + six passive chip pills from `CUSTOM_CHIPS` rendered as `<span className="mi-pill">` (LOGO PIECE, NAME PENDANT, PHOTO PENDANT, CUSTOM GRILLZ, WATCH DIRECTION, CUSTOM CHAIN) + trust line + two CTAs.

**The two problems:**

1. The left vitrine is a large empty CSS pattern. The four labels inside the frame (`LOGO`, `PHOTO`, `NAME`, `SKETCH`) are the only content. They look like tags on a box, not an invitation to build. The vitrine creates dead space that makes the section feel unfinished rather than intentional.

2. The six chips are rendered as passive `<span>` elements — not links. They look decorative. They do not invite a tap. A buyer reading them cannot tell that each one is a different entry into the /custom flow. They read as "what this section is about," not "pick your starting point."

The result: the left vitrine and the right chips are disconnected from each other and from the actual /custom page, which has numbered decision blocks (01 PICK THE PIECE / 02 PICK THE METAL / 03 PICK THE STONE). The homepage custom lane does not visually connect to the /custom page flow.

### Recommended structure: Idea Type Cards

**Core change:** Remove the passive chips. Replace with a **3×2 grid of Idea Type Cards** that each link directly to `/custom` (with an optional pre-selected `?type=` query param). Remove the left vitrine or collapse it to a narrow media strip that holds `ASSET 011` when the real custom sample pendant arrives.

**Why cards over chips:** Each card is a `<Link>`, not a `<span>`. Tapping it does something. That is what makes it feel selectable and connective.

### Card grid specification (2T obsidian/gold/mono system — no generic component imports)

Six cards, styled in the existing 2T design system:

```
CARD BACKGROUND:  #0E0E0E (var --color-brand-card)
CARD BORDER:      1px solid rgba(201,168,76,0.22)   (dim gold)
CARD HOVER:       border-color: rgba(201,168,76,0.80), background: #111008
CARD PADDING:     1rem 1.125rem
CARD LINK:        <Link href="/custom?type=[slug]"> wrapping the whole card
LABEL FONT:       var(--font-mono), 0.58rem, 0.18em tracking, bone/white
DESCRIPTOR FONT:  var(--font-body), 0.78rem, var(--color-brand-silver), line-height 1.5
ARROW:            → in var(--color-brand-muted), right-aligned, upgrades to gold on hover
TRANSITION:       border-color 140ms ease, background 140ms ease
```

Six cards and their content:

| Card | Label | Descriptor | Query param |
|---|---|---|---|
| 1 | `LOGO PIECE` | Logo, brand mark, or business symbol. | `?type=logo-piece` |
| 2 | `PHOTO PENDANT` | Send the photo — portrait, memorial, or image. | `?type=photo-pendant` |
| 3 | `NAME PENDANT` | Name, word, number, or initials. | `?type=name-pendant` |
| 4 | `SKETCH / REF` | Screenshot, drawing, or reference image. | `?type=sketch-ref` |
| 5 | `CUSTOM GRILLZ` | Top, bottom, or full mouth. | `?type=custom-grillz` |
| 6 | `WATCH INQUIRY` | Ask what's available and confirm details. | `?type=watch-inquiry` |

**Grid layout:**

Desktop: `grid-template-columns: repeat(3, 1fr)` — 3 columns × 2 rows.
Mobile (390px): `grid-template-columns: repeat(2, 1fr)` — 2 columns × 3 rows. Each card tappable at ≥44px height.

### Layout after the redesign (desktop)

```
──── CUSTOM BUILT HERE ◆ ──────────────────────────────────────

YOUR LOGO.
YOUR NAME.
YOUR PIECE.

Send the logo, photo, name, sketch, or reference.
We review before the quote. We quote before the build.

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ LOGO PIECE      │  │ PHOTO PENDANT   │  │ NAME PENDANT    │
│ Logo, brand     │  │ Send the photo  │  │ Name, word,     │
│ mark, or biz    │  │ — portrait,     │  │ number, or      │
│ symbol.       → │  │ memorial.     → │  │ initials.     → │
└─────────────────┘  └─────────────────┘  └─────────────────┘
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ SKETCH / REF    │  │ CUSTOM GRILLZ   │  │ WATCH INQUIRY   │
│ Screenshot,     │  │ Top, bottom, or │  │ Ask what's      │
│ drawing, or     │  │ full mouth.     │  │ available and   │
│ reference.    → │  │               → │  │ confirm.      → │
└─────────────────┘  └─────────────────┘  └─────────────────┘

◆ NO DEPOSIT TO START · WE QUOTE FIRST

  [START THE REQUEST →]   [TEXT 2T →]
```

### What happens to the left vitrine

**Now (no real asset):** Remove the left vitrine entirely. Go full-width with the heading + card grid. Empty space holding a promise the site cannot yet keep is worse than no space at all.

**When ASSET 011 arrives (real custom sample pendant):** Reintroduce a narrow vertical media column on the left at `minWidth: 200px`, `maxWidth: 280px`. The card grid shifts to 2 columns on the right. The pendant photo fills the left column.

**Build order:** Grid-only → grid + media column (when real pendant photo exists).

### How this visually connects to /custom

The six cards map directly to the piece-type chip set on `/custom` step 01 (PICK THE PIECE). A buyer who taps `PHOTO PENDANT` on the homepage arrives at `/custom?type=photo-pendant` with the `Photo Pendant` chip already visually selected. This creates the experience of: "I picked my idea on the homepage → I arrived at the form with my choice already made."

This requires one small wire in `/custom` to read the `?type` query param and pre-select the matching chip. That is a P1 implementation task — not blocking the visual redesign now.

### What can be built now vs what should wait

| Now (zero assets required) | Wait for real asset |
|---|---|
| 3×2 Idea Type Card grid — fully typographic, obsidian/gold system | Left media column (waits for ASSET 011) |
| Remove left vitrine | WATCH INQUIRY card pre-select (waits for watch disclosure framework) |
| Remove passive chip pills | Before/after custom sequence (waits for real customer project + permission) |
| `<Link>` tags on all 6 cards to `/custom?type=[slug]` | "Recent work" or "sample" thumbnail on any card |
| Heading, body copy, trust line, CTAs — unchanged | |

---

## Addendum 2. Pittsburgh / Social Proof Recommendation

### Diagnosis

From the live `components/home/ProofContactZone.tsx` code read, the section currently contains **seven distinct content zones in one component:**

1. The `2T` brand mark in large gold type (left card)
2. The "25 YEARS / 5TH AVE" stat ledger (left card)
3. The "332 FIFTH AVE." address (left card)
4. The `BANG.` stamp (bottom-right of left card)
5. "BUILT IN PITTSBURGH." heading + 30-year paragraph (right)
6. The METAL/STONE material direction rows (GOLD · SILVER / DIAMONDS · MOISSANITE + 925 spec line) — **direct repeat of the ShineDirectionBand section that appears earlier on the same page**
7. Three social channel rows (TikTok, Instagram, WhatsApp) + "TEXT OR COME THROUGH →" CTA

**The concrete problems:**

- The material/stone direction copy appears in `ShineDirectionBand` above AND again in `ProofContactZone`. This is direct duplication — the clearest single thing to remove.
- The section is trying to be brand identity + store proof + material direction + contact CTA + social hub simultaneously. The result is a dense ledger that reads as a spec sheet rather than real store proof.
- The large `2T` gold mark on the left card and the `BANG.` stamp do not add trust — they add brand identity that already appears in the hero (their third placement each dilutes both marks).

### Recommended structure: Two distinct sections

**Remove:** `ProofContactZone.tsx` as a unified component — or refactor it into two clearly separated sub-sections.

**Replace with Module A + Module B:**

---

### MODULE A — Pittsburgh Real Store Proof

One job: "This is a real store and you can reach us directly."

```
REAL STORE. PITTSBURGH.

25 YEARS  ·  5TH AVE  ·  332 FIFTH AVE, DOWNTOWN PITTSBURGH

[ store photo slot — CSS vitrine now, ASSET 007 later ]

                            TEXT OR COME THROUGH →
```

**Design specifics in the 2T system:**

- Heading: Anton display, `clamp(2.4rem, 4.5vw, 3.8rem)`, bone/white — hard and short
- Stat row: horizontal ledger, each stat with a gold left-border rule (`1px solid var(--color-brand-gold)`) — keep the current ledger rhythm, compressed
- Address: JetBrains Mono, `0.55rem`, muted — small and factual
- Store photo slot: when ASSET 007 arrives, full-width banner behind the stat row at `40%` opacity with gradient overlay. Until then: constrained-height CSS vitrine (max 240px) or plain dark section background with no explicit placeholder well.
- "TEXT OR COME THROUGH →" — single CTA, `btn-primary` style
- `BANG.` stamp: **remove from this section** — third placement dilutes the mark
- Large `2T` gold brand mark: **remove** — already in header and hero; Pittsburgh block should read as fact, not brand personality
- Long body paragraph ("For 25 years, 2T Jewelers has been..."): **replace with the stat ledger alone** — facts speak louder than the paragraph
- "ABOUT 2T" eyebrow: **replace** with "PITTSBURGH STORE" or remove entirely

**What is explicitly removed from Module A vs current ProofContactZone:**
- Large `2T` display mark
- `BANG.` stamp
- METAL/STONE direction rows (duplicate of ShineDirectionBand — do not repeat)
- Long body paragraph
- "ABOUT 2T" eyebrow

---

### MODULE B — Social / TAP IN

Comes immediately after Module A. Same dark background system, clear visual break (`border-top: 1px solid var(--color-brand-border)`).

The existing channel-map rows (TikTok / Instagram / WhatsApp) are **already well-structured** and should stay as-is.

**What changes:**
- **Section heading:** `TAP IN WITH 2T.` (already the approved copy)
- **Remove:** Any material/stone copy, any address repetition, any "25 years" repeat
- **Keep:** TikTok row, Instagram row, WhatsApp row (gold-bordered), `@2tjewelers` handle on each
- **Upgrade path (when ASSET 014/015 arrive):** Each channel row expands to include a 3-thumbnail strip on the right side of the row before the "FOLLOW →" action

**Page order after the separation:**

```
[ Pittsburgh Proof block — store, years, address, one CTA ]
[ TAP IN WITH 2T. — TikTok / Instagram / WhatsApp channel rows ]
```

Buyers read the store proof first, then the social channels. Trust before follow.

### What to do with Gold / Silver / Diamonds / Moissanite in this zone

**Remove it entirely from both modules.** It belongs in the ShineDirectionBand only. The Pittsburgh/social zone has one job: trust through proof of real physical presence + social channel access. Material direction is a product conversation, not a store identity conversation. Mixing them weakens both.

---

## Addendum 3. Instagram / TikTok Integration Recommendation

### Options analysis

**Option A — Live API Feed (Instagram Graph API + TikTok Display API)**

- Requires: Facebook Business account, Meta app review, TikTok developer account, TikTok Display API app review
- How it works: Server-side Next.js fetches from the API per request or on a schedule; returns real post data (thumbnail URL, caption, post URL)
- Cons: OAuth token management — Instagram tokens expire every 60 days, TikTok tokens every 24 hours without refresh token. One expired token = silent feed failure. Both platforms restrict how content may be displayed. Rate limits can cause failures during traffic spikes.
- Risk: **High** — silent failure when token expires is the most common production failure mode for social feeds. No error shown to buyers; feed just disappears.
- Verdict: Not recommended as the primary architecture.

---

**Option B — oEmbed / Platform Embeds**

- Instagram oEmbed: requires a Facebook developer account and approved app (changed 2020). Unauthenticated oEmbed removed.
- TikTok oEmbed: `GET https://www.tiktok.com/oembed?url=[post_url]` returns JSON including `thumbnail_url`. No auth required for the basic request.
- Cons: Loading the embed `<script>` adds ~60KB of third-party JS per embed, hurting Core Web Vitals on the homepage. Instagram requires auth. Layout control limited.
- Risk: **Medium** for TikTok thumbnail-only (no auth needed), **High** for Instagram (same auth complexity as Option A).
- Verdict: TikTok oEmbed is viable for server-side thumbnail extraction only (not the embed script). Instagram oEmbed requires auth — skip it.

---

**Option C — Curated Static Thumbnails (recommended MVP)**

- How it works: A `data/social-feed.json` file in the repo holds an array of entries — one per displayed post. Each entry contains: `platform`, `src` (path to local thumbnail in `public/assets/social/`), `href` (real post URL), `alt` text.
- The `SocialTeaser` component reads from this JSON. When it has entries, it renders thumbnail strips. When it has zero entries, it renders the current channel-card-only layout (already working).
- Update process: When a new real @2tjewelers post goes up, a developer downloads the thumbnail, drops it in `public/assets/social/`, adds the entry to the JSON, and redeploys. ~5–10 minutes per update.
- Pros: Zero API dependency, zero breakage risk, full layout control matching the 2T design system, real content only.
- Risk: **Low** — nothing can break. Content is always real.
- Verdict: **Right architecture for now.**

```jsonc
// data/social-feed.json — MVP structure
[
  {
    "platform": "instagram",
    "src": "/assets/social/2t-social-instagram-01.jpg",
    "href": "https://www.instagram.com/p/[REAL_POST_ID]/",
    "alt": "Custom pendant — @2tjewelers"
  },
  {
    "platform": "tiktok",
    "src": "/assets/social/2t-social-tiktok-01.jpg",
    "href": "https://www.tiktok.com/@2tjewelers/video/[ID]",
    "alt": "Build process — @2tjewelers"
  }
]
```

When the file has 0 entries: `SocialTeaser` renders the current three channel-map rows with no thumbnail grid. Correct and clean.

---

**Option D — Cached / Proxied Feed (recommended future architecture)**

- How it works: A Next.js API route at `/api/social-feed` fetches from the relevant API server-side, stores the response in Vercel KV with a TTL of 1–6 hours, and returns the cached result to the frontend.
- If the external API call fails (expired token, rate limit, downtime): serves the last-known cached response. If cache is also empty: falls back to the static `data/social-feed.json`.
- Token management: server-side only, never exposed to the browser.
- Pros: Feels live within the cache TTL, graceful fallback, no performance overhead on page load, full layout control.
- Cons: More complex setup — requires Vercel KV, API app approval, token management, refresh strategy.
- Risk: **Medium** — token expiration is still a risk, but graceful fallback to static JSON means no visible breakage.
- Verdict: **Right architecture when @2tjewelers is posting consistently (minimum 2× per week) and the manual JSON update process has become a burden.**

---

**Option E — Third-party aggregator (Elfsight, Juicer, Curator.io)**

- Cons: $5–25/month subscription, layout control limited to their widget iframe, cannot match 2T design system, GDPR/CCPA considerations, vendor lock-in.
- Verdict: Not recommended. The 2T design system is too specific for a generic widget, and Option C is free and faster to set up.

---

### Decision table

| Option | Breakage risk | Design control | Setup complexity | Best when |
|---|---|---|---|---|
| A — Live API | High (silent token expiry) | Full | High | High posting volume, dedicated API maintenance |
| B — oEmbed | Medium (URL structure changes) | Partial | Medium | TikTok only, no Instagram |
| C — Static JSON | None | Full | Minimal | Now — any posting cadence, zero maintenance |
| D — Cached proxy | Low (graceful fallback) | Full | Medium | 2+ posts/week, manual updates annoying |
| E — Third-party | Medium (vendor) | Partial | Low | Never for 2T |

### Recommended implementation sequence

**Now:** Implement Option C. Wire `data/social-feed.json` into `SocialTeaser.tsx`. Start with an empty file — the component renders the current channel-card-only layout when the array is empty. Populate first entries when real @2tjewelers posts are ready to feature.

**When to upgrade to Option D:** When @2tjewelers is posting at least 2× per week consistently for 4+ weeks and the manual update process takes more time than setting up Vercel KV.

**Never deploy a live API feed or oEmbed on the homepage without the Vercel KV cache layer** — direct API calls on a high-traffic homepage route will hit rate limits and create visible failures during peak traffic.

---

## Addendum 4. What Should Change Now vs Later

### Now — zero new assets required

| Change | Where | What it solves |
|---|---|---|
| Replace passive chip pills with 6 Idea Type Card Links | `app/page.tsx` custom lane | Disconnection from /custom flow; passive chips feel decorative |
| Remove left vitrine (`pb-vitrine-custom`) from custom lane | `app/page.tsx` custom lane | Large empty dead space weakens the section |
| Remove material/stone direction rows from `ProofContactZone` | `components/home/ProofContactZone.tsx` | Direct duplication of `ShineDirectionBand` |
| Remove large `2T` gold brand mark from left card | `components/home/ProofContactZone.tsx` | Third brand presence after header + hero; adds weight without trust |
| Remove `BANG.` stamp from `ProofContactZone` | `components/home/ProofContactZone.tsx` | Third placement dilutes the mark |
| Compress body paragraph to a single stat ledger line | `components/home/ProofContactZone.tsx` | Paragraph reads like a brochure; ledger reads like proof |
| Separate social channel rows into a visually distinct sub-section | `components/home/ProofContactZone.tsx` | Social is mixed into store proof; should be its own module |
| Wire `data/social-feed.json` into `SocialTeaser` (empty array to start) | New file + `SocialTeaser.tsx` | Architecture in place before content exists |

### Later — depends on real assets or posting activity

| Change | Trigger |
|---|---|
| Add left media column with ASSET 011 (custom sample pendant) | Real pendant photo exists, business-owned |
| Add store photo to Pittsburgh proof block | ASSET 007 (store interior) captured |
| Populate `data/social-feed.json` with real thumbnails | Real @2tjewelers posts exist worth featuring |
| Upgrade social rows to thumbnail strips | ≥3 real posts per platform in the JSON |
| Migrate to Option D (cached/proxied feed) | Consistent posting 2+/week for 4+ weeks |
| `/custom?type=[slug]` pre-selection wiring | After visual redesign is approved |

---

*Plan complete. No files modified other than this planning document. No code written. No assets touched. No commits.*
*Research basis: All 13 project docs read, Pass 5B competitor matrix (13 brands + 11 tier-2), 2026-05-30 live-site architecture audit, VOC system, claim-safety rules, growth strategy, live code read of `app/page.tsx` (custom lane) and `components/home/ProofContactZone.tsx` (full), Magic MCP structural pattern analysis (adapted to 2T system, not imported). Playwright MCP unavailable this session (browser conflict).*
