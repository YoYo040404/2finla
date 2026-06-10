Phase B2 — Homepage Asset-Ready Polish Plan
Completion note (2026-06-10): Phase B2-safe is completed, committed, pushed, and live checked by Yaniv in commit `992a4ca - feat: prepare homepage media pipeline`. The implemented safe scope centralized homepage media paths in `data/homeMedia.ts`, migrated safe homepage raw `<img>` usage to `next/image` where appropriate, kept the existing hero video unchanged with its poster attribute retained, added a reduced-motion poster fallback with the video layer hidden, improved ShineDirectionBand micro-text readability, made the first 8 ShineRail cards clickable links, kept duplicate rail cards as aria-hidden/non-link duplicates, and added ShineRail hover/focus pause. No asset resizing, moving, deleting, renaming, or re-exporting was done. No copy or claim language changed. No Shopify work. Codex browser QA was limited by sandbox/browser failures; Yaniv manually checked the live homepage after Vercel deploy and confirmed it looks good. B2-safe is closed. Next planned work is Pass 5C Copy/CRO plan-only; do not implement it yet.

Verified state (2026-06-10): HEAD is 175b7fd (matches your report). Working tree contains only untracked docs/demo assets — nothing staged. Live audit of https://2finla.vercel.app: 0 console errors, 0 warnings, no horizontal scroll at 390px (verified programmatically: scrollWidth === clientWidth, the ShineRail track is correctly clipped by overflow:hidden).

1. Executive recommendation
Yes, B2 should proceed now — but as a narrow pass, and its center of gravity should shift from "visual refinement" to "asset pipeline readiness." The homepage already looks cinematic and claim-safe after Pass 4D and Phase A. The real gap I found is structural: the homepage currently ships ~14 MB of unoptimized PNGs plus an 8.9 MB demo video, because the anchor tiles, the pendant secondary tile, the custom vitrine, and the hero poster all use raw <img> tags with 2.1–2.8 MB source PNGs (page.tsx:276, page.tsx:350, page.tsx:546). Only ShineRail uses next/image. If real 2T assets arrive tomorrow, they inherit this unoptimized pipeline. Fixing the pipeline now, while assets are still demos, is the cheapest possible moment — and it's exactly what "asset-ready" means.

Two discoveries you should know about before approving anything:

public/assets/hero-loop-demo.mp4 exists and plays live (8.9 MB). CLAUDE.md says "hero video: slot wired, file pending" — the docs are behind. Provenance question: is this demo loop 2T-owned or licensed footage? If not, it's effectively non-2T media on a live URL and should be reviewed under the no-fake-media rule. This needs your answer before B2 touches the hero slot.
Docs drift: ProofMarquee.tsx and PittsburghStory.tsx exist in components/home/ but are not rendered in app/page.tsx — the CLAUDE.md section order (which lists ProofMarquee as section 2) is stale. No code action needed in B2; docs sync only.
2. Current homepage audit
Working well:

Hero — strong on both breakpoints. Mobile above-fold is excellent: iced cuban macro, both CTAs visible, BANG. signature settling at the fold, mobile TEXT/CALL/BUILD dock present. Text-protection gradients do their job.
PICK THE PIECE — the anchor row (GRILLZ dominant at 1.4fr) is the best section on the page. Layered gradient depth + gleam reads as a real lit case.
ShineDirectionBand — copy is exactly the approved claim-safe set ("GOLD · SILVER / 925 Sterling Silver", "DIAMONDS · MOISSANITE / D-color VVS Moissanite", "Details confirmed per piece."). Parallel-direction framing intact, no hierarchy. CSS-only, reduced-motion covered (globals.css:3766).
Promo ticker — claim-safe ("ASK WHAT'S RUNNING", "PROMO TERMS ON ELIGIBLE PIECES ONLY"), no fake offer.
QA hygiene — console clean, zero 404s observed, no h-scroll, prefers-reduced-motion handled on rail, SDB chips, and section reveals.
Weak after B1:

Asset pipeline (biggest issue) — detailed in §1. Also next.config.ts has image optimization enabled (default), so a next/image migration yields real Vercel wins immediately.
ShineRail cards look clickable but aren't. The entire track is aria-hidden="true" and cards are <div>s (ShineRail.tsx:96-98). A "merchandising rail" labeled GRILLZ/WATCHES/CHAINS that doesn't respond to taps is a small CRO leak — users will tap these on mobile.
ShineRail has no hover pause — desktop users can't stop the rail to read a card; the only escape is the VIEW ALL link.
ShineRail demo images render dark/soft at 220×160 — the 2 MB PNGs are downscaled hard; combined with brightness(0.92) they read murkier than the anchor tiles directly above. The RINGS/BRACELETS/EARRINGS CSS placeholders are honest but at full-page view the repeating-stripe texture reads slightly "filler."
Micro-typography legibility — sdb-footer is 0.5rem (~8px) and sdb-spec 0.55rem (globals.css:3420-3447). "Details confirmed per piece" is the claim-safety anchor; at 8px it's decorative, not readable. Same pattern on several mono micro-labels.
SocialTeaser left canvas reads near-empty on desktop — but that's B3 scope. Not touched in B2; noted for the B3 backlog only.
3. B2 exact scope
Include:

Migrate homepage raw <img> slots to next/image with correct sizes/priority (anchor tiles, pendant secondary tile, custom vitrine, hero poster).
Resize/re-export demo PNGs to sane source dimensions (≤1200px wide for tiles; they're decorative demos, not zoomable product shots).
Hero video slot hardening: poster-first, keep preload="metadata", add reduced-motion handling (don't animate/play video for prefers-reduced-motion users — currently only the Ken Burns CSS is reduced, the video itself still plays).
ShineRail: make cards real <Link>s (first set interactive, duplicate set stays aria-hidden), add animation-play-state: paused on hover (desktop), small brightness lift on card images.
ShineDirectionBand: legibility-only bump on sdb-spec/sdb-footer (≈0.62–0.68rem). Zero copy changes.
A single asset-slot contract: lift hardcoded image paths in page.tsx/ShineRail.tsx into one documented constants module so real-asset swap day is a one-file edit.
Exclude: header/nav, /custom, /collections (B1), SocialTeaser visuals (B3), Pass 5C copy, ProofContactZone changes, any new section, any new npm package, promo ticker copy, hero headline/CTAs, ProofMarquee/PittsburghStory reinstatement.

4. Proposed B2 implementation split
B2A (recommended now — smallest safe pass): items 1, 2, 3, 5, 6 above. Pure pipeline + legibility; visually near-invisible diff; no behavior change a user would call a redesign.
B2B (separate approval, after B2A QA): item 4 (ShineRail clickability + hover pause + image lift). It changes interaction behavior and deserves its own visual QA round.
Splitting matters because B2A is unarguable (perf + readiness), while B2B is a UX decision you may want to see in isolation.

5. ShineDirectionBand plan
Improve: raise sdb-spec and sdb-footer font sizes to a legible floor; optionally +1 contrast step on sdb-footer color. Nothing else.
Leave alone: all copy (exact approved strings), panel structure, gold/ice parallel framing, hover tilt, reduced-motion overrides, the section-reveal behavior.
Claim-safety notes: "925 Sterling Silver" and "D-color VVS Moissanite" are approved at homepage level per the 2026-05-31 confirmation — do not extend them to any per-product card. Do not reorder panels in a way that implies metal>stone or gold>silver hierarchy. Do not add price, karat, or certification language.
6. ShineRail plan
Asset-ready without fake media: keep current demo images and CSS placeholders; route all 8 image paths through the new asset-slot constants. When real category macros arrive, the swap is data-only. Do not add fake product cards, prices, or "in stock" badges to rail cards.
Clickability (B2B): wrap first-set cards in <Link href={cat.href}>; keep duplicate set aria-hidden + tabIndex={-1} so keyboard/screen-reader users get exactly 8 targets, not 16. The heading VIEW ALL link remains the primary path.
Mobile behavior: keep the auto-scroll loop (it's the section's energy), but verify tap targets once cards are links — 220px cards are fine. Don't add scroll-snap manual mode in B2; that's a bigger rework.
Performance risks: the 40s translateX loop is GPU-composited (will-change: transform) — fine. Risks to watch: (a) making cards links removes aria-hidden from the first set — ensure no focus-trap with the moving track (acceptable: focus pauses animation, or rely on reduced-motion); (b) the hardcoded -1760px keyframe breaks if card width/count ever changes — add a comment-level guard, don't refactor to JS; (c) all 16 card images render eagerly — loading="lazy" is already set, keep it.
7. Homepage placeholder/asset-slot plan
One constants module (e.g. data/homeMedia.ts) defining every slot, its current demo file, and its real-asset spec:

Slot	Current	Accepts (future real asset)
Hero video	hero-loop-demo.mp4 (8.9 MB — provenance check)	2T-owned loop, 8–12s, muted, H.264 MP4 ≤4 MB (plus poster), 16:9, shot per Lit Case direction
Hero poster	2t-demo-hero-chain-pendant-01.png	Real 2T chain/pendant macro, ~1920×1080, dark background
Anchor tiles ×3	demo grillz/watch/chains PNGs	Real 2T category macros, ~1200×1500 portrait-ish, hard-light on black
Pendant secondary tile	demo pendant PNG	Real 2T pendant macro, same spec
Custom vitrine	demo before/after PNG (rendered at 0.22 opacity — ambient)	Real sketch→piece handoff shot or bench shot
ShineRail cards ×8	5 demo images + 3 CSS placeholders	Real category closeups, ≥440×320 (2× of 220×160)
Store proof (ProofContactZone)	none — typographic only	Real 332 Fifth Ave exterior/interior (Phase B3+, slot intentionally not built yet)
Social frames (SocialTeaser)	demo thumbnail	Real @2tjewelers still frames + post URLs (B3, not B2)
No new placeholder visuals are added in B2 — existing demo PNGs and CSS wells stay; they just get optimized and centralized.

8. Files likely touched
B2A: app/page.tsx (img→Image, paths→constants), app/globals.css (sdb legibility, hero video reduced-motion), data/homeMedia.ts (new), public/assets/demo/phase3a/*.png (re-exported smaller — originals archived, not deleted, pending your approval since asset edits are destructive-ish).
B2B adds: components/home/ShineRail.tsx, small globals.css additions (hover pause, link reset).
Untouched: Header, nav, /custom, /collections/*, SocialTeaser, ProofContactZone, FinalCTABar, promo ticker, all category pages, all copy.

9. What must wait for real 2T assets
Real hero loop + poster; real anchor/category macros; real rail card images for RINGS/BRACELETS/EARRINGS; store exterior/interior proof; social still frames + post URLs; any per-piece material/stone badge; any promo with terms; final logo SVG/2x. None of these are simulated in B2.

10. Claim-safety and copy risks
Frozen strings: "25 YEARS" (exact, confirmed 2026-05-31), "Details confirmed per piece.", "NO DEPOSIT TO START · WE QUOTE FIRST", SDB panel copy verbatim.
Forbidden in this pass: any new "SHOP NOW"/"IN STOCK"/"NEW DROP" on rail cards (implies inventory); "moissanite alternative/substitute" or any metal/stone hierarchy; turnaround/shipping/warranty/financing language; follower counts or social metrics; "FREE" anything; per-piece "925"/"VVS"/"D-color" on individual cards; alt text implying real products ("demo concept visual" framing must survive the next/image migration).
Open item: hero demo mp4 provenance (see §1).
11. Mobile/performance risks
Image payload: ~14 MB PNG + 8.9 MB video today; B2A should cut image transfer by ~80–90% via next/image AVIF/WebP. Watch for layout shift when adding fill/sized images — anchor tiles use inset:0 absolute positioning, so CLS risk is low but must be verified.
Video: preload="metadata" limits initial cost, but mobile still pulls the full 8.9 MB on autoplay. Reduced-motion users currently get a playing video. Both addressed in B2A.
Animation: rail loop and gleams are transform/opacity only — keep it that way; no new keyframes on layout properties.
Horizontal scroll: currently clean; re-verify after rail changes (the track legitimately extends to ~2053px and relies on overflow:hidden).
Sticky clearance: mobile dock + FloatingWhatsApp (z-40) + StickyConversionBar (z-30, desktop-only) — unchanged in B2; verify FinalCTABar buttons aren't covered at 390px after any spacing change.
12. QA checklist for implementation
npm run build clean; npm run lint if configured (the eslint-disable comments for raw img should disappear with the migration).
Playwright: desktop 1280 + mobile 390 full-page screenshots, diffed against the b2-audit-*.jpeg baselines captured today.
scrollWidth === clientWidth at 390px; console 0 errors/0 warnings; network tab — no PNG >300 KB served on homepage, no 404s.
Reduced-motion emulation: rail static, video not playing, reveals visible.
Grep claim-safety keywords (CLAIM_SAFETY.md QA list) over the diff; confirm "25 YEARS", SDB strings, and all alt texts unchanged in meaning.
Tab-order check after B2B (8 rail links, no duplicate focus stops).
13. Approval gates before code
Hero demo mp4 provenance — confirm it's acceptable demo media or approve poster-only fallback until real footage.
Approve B2A scope (pipeline + legibility) including re-exporting demo PNGs at smaller dimensions.
B2B separately — yes/no on making ShineRail cards clickable + hover pause.
Confirm docs-sync of the stale items (ProofMarquee not rendered; hero video file exists) happens in the same pass or stays queued.
14. Exact next Codex implementation prompt
Task: Phase B2A — homepage asset-pipeline polish. Implementation only, scope locked.
Repo: C:\Users\yaniv\Downloads\2t-jewelers-next, branch from main at 175b7fd.

Create data/homeMedia.ts exporting typed constants for every homepage media slot (hero video src + poster, 3 anchor tile images, pendant secondary image, custom vitrine image, 8 ShineRail card images) with a comment per slot stating the real-asset spec it accepts. Update app/page.tsx and components/home/ShineRail.tsx to consume these constants. No visual changes.
In app/page.tsx, replace the four raw <img> usages (anchor tiles, pendant secondary tile, custom vitrine) with next/image (fill, correct sizes, preserve existing className/style/filters/opacity). Keep all alt texts verbatim.
Re-export the demo PNGs in public/assets/demo/phase3a/ used on the homepage to max 1200px on the long edge (keep filenames; move originals to public/assets/demo/phase3a/_originals/).
Hero video: keep preload="metadata"; add prefers-reduced-motion handling so the video does not play for reduced-motion users (CSS display:none on the video with poster background fallback is acceptable; no new client component if avoidable).
app/globals.css: raise .sdb-spec to ~0.66rem and .sdb-footer to ~0.62rem. No other CSS changes. Zero copy changes anywhere.
Do not touch: header/nav, /custom, /collections/*, SocialTeaser, ProofContactZone, FinalCTABar, promo ticker, any copy string, any claim language.
QA before reporting: npm run build clean; Playwright desktop 1280 + mobile 390 full-page screenshots; no horizontal scroll at 390; console clean; homepage image transfer total under 1.5 MB excluding video; reduced-motion check. Report files changed + QA results. Do not commit, push, or deploy.
Side note: my audit screenshots (b2-audit-desktop-1280.jpeg, b2-audit-mobile-390.jpeg, b2-audit-mobile-fold.jpeg) are in the project root — the gitignore covers qa-*/audit-* patterns, so confirm b2-audit-* doesn't show up in git status before the next commit (it didn't appear as untracked in my check, so they appear covered).
