# TikTok / Instagram Feed Feasibility Plan — 2T Jewelers

**Date:** 2026-06-03  
**Status:** Research complete. Phase 1 approach approved. No code written yet.

**Goal:** Determine the safest, lowest-maintenance way to show real @2tjewelers TikTok and Instagram content on the site without fake content, broken APIs, or unnecessary complexity.

**Architecture:** This is a feasibility plan — no code runs until a Phase 1 approach is approved. The site is a Next.js lead-gen prototype on Vercel. Real media assets are the current biggest gap. The SocialTeaser component is a channel-map scaffold — the left canvas is a CSS vitrine placeholder waiting for real social media content.

---

## 1. Current SocialTeaser Diagnosis

**File:** `components/home/SocialTeaser.tsx`

**What it does now:**
- Three channel-map rows: TikTok → Instagram → WhatsApp, each linking out to real @2tjewelers URLs
- Left canvas: CSS vitrine placeholder (`mi-vitrine pb-vitrine-social`) showing "@2T / JEWELERS" ghost text in gold outline
- No embed, no API, no external scripts, no fake content
- Commented-out `<video>` slot is wired for a future social clip at `/assets/store/social-clip.mp4`

**What it does NOT do yet:**
- Show any real @2tjewelers post, thumbnail, reel, or video
- Load any content from TikTok or Instagram servers
- Use any social platform API

**Current state is correct and safe.** The scaffold is right. The question is what fills the left canvas.

---

## 2. Option Comparison Table

| Dimension | Option 1: Manual Curated Cards | Option 2a: TikTok Static Embed | Option 2b: Instagram Static Embed | Option 3: Instagram oEmbed API | Option 4: TikTok Display API |
|---|---|---|---|---|---|
| **Setup complexity** | None | Minimal | Minimal (but unreliable) | Medium | High |
| **Account requirement** | @2tjewelers content as static image files | Public @2tjewelers TikTok post URL | Public @2tjewelers IG post URL | Facebook Developer Account + Facebook App | TikTok Developer Account + App |
| **Token / auth required** | None | None | None (unofficial) | App Access Token (app_id + app_secret) — does not expire | OAuth user access token from @2tjewelers account owner — periodic refresh |
| **App review risk** | None | None | None (unofficial path) | Required. Manual review. Must demo where you embed it. Takes days–weeks. | Required. Manual review. No guaranteed timeline. Requires sandbox demo first. |
| **Rate limit / maintenance risk** | None (static) | None (TikTok CDN handles) | None if unofficial path works; breaks if Meta kills it | 5M req/day (app token). Stable. App review can be revoked if usage violates policy. | Rate limits per API docs. Token refresh risk if user access token used. Account must stay authorized. |
| **Visual control** | Full — your design, your layout | Low — TikTok iframe player rendered by TikTok | Low — Instagram iframe rendered by Meta | Low — Instagram iframe rendered by Meta | Medium — fetch metadata, render your own card or use iframe |
| **Performance impact** | None (static image) | Medium — loads `tiktok.com/embed.js` (external JS + iframe) | Medium — loads `instagram.com/embed.js` (external JS + iframe) | Medium — loads Instagram iframe | Medium-High — API call on load + external video player |
| **Privacy / compliance risk** | None | TikTok sets cookies and tracks site visitors via embed.js. Needs GDPR/CCPA notice if serving EU/CA. | Meta sets cookies via embed.js. Same GDPR/CCPA consideration. | Same as 2b. | TikTok sets cookies via player. Same GDPR/CCPA. |
| **Content updates** | Manual — user provides new screenshots when they want to update | Manual per post — must hardcode video URL in component | Manual per post | Automatic — feed refreshes from API | Automatic — feed refreshes from API |
| **Fits current Next.js lead-gen site?** | ✅ Perfect fit | ✅ Good for 1–3 highlight videos | ⚠️ Unreliable — old system retired April 2025 | ⚠️ Possible but requires setup work and app review | ❌ Not yet — app review timeline unknown, OAuth ownership needed |
| **Can build today?** | ✅ Yes, if user provides assets | ✅ Yes, if @2tjewelers post URLs provided | ⚠️ Might work, might break | ❌ Not without Meta App + App Review | ❌ Not without TikTok App + Production App Review |

---

## 3. API Reality Check (Official Docs — June 2026)

### TikTok

**Static embed (no API):**
Officially documented at `developers.tiktok.com/doc/embed-videos/`. Any public TikTok video has a share → embed flow that generates:
```html
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@2tjewelers/video/[ID]" ...>
  ...
</blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>
```
No token. No app review. No developer account. Loads TikTok's own iframe player. Works today.

**Display API (dynamic feed):**
- Requires: Developer account at `developers.tiktok.com`, registered app, scopes `video.list` + `user.info.basic`
- Sandbox mode available (no review, up to 5 sandboxes, max 10 TikTok accounts each, all posts forced private)
- Production requires app review: manual process, no guaranteed timeline, requires demo video of OAuth + video display flow, privacy policy URL, data handling description
- @2tjewelers account owner must complete OAuth to issue a user access token
- Returns: avatar, display name, profile link, video list with metadata

### Instagram

**Old blockquote embed (unofficial, unreliable):**
Meta officially retired the old oEmbed system in April 2025. The raw `<blockquote class="instagram-media">` + `instagram.com/embed.js` method may still render in some browsers but is unsupported. It can break silently at any time. Do not build on it.

**Meta oEmbed Read (official API, 2025+):**
- Endpoint: `GET https://graph.facebook.com/instagram_oembed?url={post_url}&access_token={token}`
- Returns: `html` (iframe embed code), `thumbnail_url`, `author_name`
- Requires: Facebook Developer Account, Facebook App, App Review for "oEmbed Read" feature
- App Review: must submit demo showing where you'll embed content. App must already be showing Meta/Instagram content at a real URL.
- Token: App Access Token (`{app-id}|{app-secret}`) — does NOT expire. Server-side only.
- Rate limit: 1,000 req/hour (client token) or 5M req/day (app token)
- Supports: photo, video, Reel, Feed posts — public accounts only
- Does NOT support: Stories, private accounts, age-restricted accounts, accounts with embeds disabled

---

## 4. Recommended Phase 1 Approach — Manual Curated Cards

**Do this first. Do not touch APIs yet.**

The left canvas vitrine in `SocialTeaser.tsx` gets replaced with static image cards — real screenshots or exported still-frames from @2tjewelers TikTok/Instagram posts, provided by the user.

**Why:**
- Zero external dependencies. No embed.js. No TikTok/Meta CDN scripts. No cookies.
- Full visual control — fits the Midnight Icebox design system exactly
- No app review, no token, no setup time
- Claim-safe — shows real 2T content, not fake UGC
- Can build the moment the user provides 1–3 asset files
- Channel-map rows (right side) already work perfectly — they link out to the real platforms

**Phase 1 design concept:**
Left canvas becomes a mini-grid of 2–3 static thumbnail cards:
- Each card: static `<img>` (real @2tjewelers post still frame) + platform badge (TIKTOK / INSTAGRAM) + "WATCH →" / "VIEW →" link to the live post
- Aspect ratio: vertical (9:16 crop) for TikTok reels, square (1:1) for Instagram posts
- Cards styled with Midnight Icebox tokens — dark background, gold border, mono caption
- No follower counts, no like counts, no comment counts — those are live numbers we cannot verify

**Optional quick add (also Phase 1):**
If the user wants to show one specific TikTok video playing, a TikTok static blockquote embed of 1 handpicked @2tjewelers video can be dropped into the left canvas slot. No API needed. Trade-off: TikTok loads its own JS and player, reduced visual control.

---

## 5. Recommended Future Dynamic Feed Approach

**Priority order:**

### Step A — TikTok static embeds of selected posts (Phase 1.5, no API)
Hardcode 2–3 embed codes from specific @2tjewelers TikTok posts in the component. User updates by replacing the embed codes when they want new content featured. Takes 30 minutes to build. Still no API.

### Step B — Instagram oEmbed Read via Meta API (Phase 2)
When 2T wants the Instagram section to auto-refresh:
1. User creates Facebook Developer Account
2. Creates a Facebook App
3. Adds the Instagram product to the app
4. Submits for App Review for "oEmbed Read" feature (demo required — the site must be live and showing Meta content when submitting)
5. Gets App Access Token (does not expire)
6. Build a Next.js API route that calls Meta oEmbed endpoint server-side, caches response (revalidate every 24h via Next.js `revalidate`)
7. Frontend fetches from the API route — no token exposed to client

### Step C — TikTok Display API (Phase 3, most complex)
Only worth pursuing if 2T wants a true auto-refreshing TikTok feed:
1. Register TikTok Developer App
2. Test in Sandbox mode with @2tjewelers TikTok account
3. Submit for Production App Review (timeline: unknown, often 1–4 weeks)
4. @2tjewelers account owner completes OAuth flow → user access token
5. Build Next.js API route to call `/v2/video/list/` + cache results
6. Display video cards with thumbnail, caption, embed link

**Verdict:** Phase 2 (Instagram oEmbed Read) is more realistic in the near term than Phase 3. Meta's review process is faster and more documented than TikTok's. TikTok Display API is only worth pursuing if 2T has active TikTok content and wants automation.

---

## 6. Exact Assets / Accounts / Access Needed from User / 2T

### For Phase 1 (Manual Curated Cards) — minimum viable:
- [ ] **2–3 still-frame images** from real @2tjewelers TikTok or Instagram posts (screenshots at minimum; ideally exported as 1080×1920 or 1080×1080 JPG/PNG)
- [ ] **Direct post URLs** for each image (so the card can link to the live post)
- [ ] **Caption snippet** for each post (1 line of real caption, not invented)

### For Phase 1.5 (TikTok static embeds):
- [ ] @2tjewelers TikTok account must be public
- [ ] 2–3 specific TikTok post URLs from @2tjewelers to embed

### For Phase 2 (Instagram oEmbed API):
- [ ] Facebook Developer Account (user must create at developers.facebook.com)
- [ ] Facebook App with Instagram product enabled
- [ ] App Review approved for "oEmbed Read" (app must be at a live URL showing Meta content when submitting)
- [ ] App ID + App Secret → App Access Token (server-side env var, never exposed to client)
- [ ] @2tjewelers Instagram account must be public

### For Phase 3 (TikTok Display API):
- [ ] TikTok Developer Account at developers.tiktok.com
- [ ] Registered TikTok App (client key + client secret)
- [ ] Sandbox mode set up and tested
- [ ] Production App Review submitted and approved
- [ ] @2tjewelers TikTok account owner must complete OAuth to issue user access token
- [ ] Privacy policy on site (required for app review)

---

## 7. Files Likely Touched Later

| File | What changes |
|---|---|
| `components/home/SocialTeaser.tsx` | Phase 1: replace left canvas vitrine with static image card grid; Phase 1.5: add TikTok blockquote embed; Phase 2–3: wire dynamic feed |
| `app/api/social/instagram/route.ts` | Phase 2: new Next.js API route calling Meta oEmbed Read, caching response |
| `app/api/social/tiktok/route.ts` | Phase 3: new API route calling TikTok Display API `/v2/video/list/` |
| `.env.local` (gitignored) | Phase 2: `META_APP_ID`, `META_APP_SECRET`; Phase 3: `TIKTOK_CLIENT_KEY`, `TIKTOK_CLIENT_SECRET`, `TIKTOK_USER_ACCESS_TOKEN` |
| `public/assets/social/` | Phase 1: static thumbnail images from @2tjewelers posts |

**Files NOT touched in Phase 1:**
- `app/page.tsx` — SocialTeaser is imported, not modified at page level
- `components/layout/Footer.tsx` — social links in footer are already correct
- Any API route — none built until Phase 2

---

## 8. What NOT to Build Yet

- Do not build Meta oEmbed Read API route until Facebook App is registered and App Review is approved
- Do not build TikTok Display API integration until TikTok App is registered and Production App Review is approved
- Do not use the old Instagram blockquote embed method — retired April 2025, unreliable
- Do not use any third-party social aggregator widgets (Elfsight, Curator.io, Taggbox, etc.)
- Do not show follower counts, like counts, view counts, or comment counts
- Do not use screenshots of competitor posts, stock imagery, or any non-@2tjewelers content
- Do not add Analytics/Meta Pixel/TikTok Pixel — those are separate decisions

---

## 9. Implementation Prompt Outline — Phase 1 Execution

When the user provides real @2tjewelers thumbnails and post URLs, use this prompt:

```
Task: Replace the left canvas vitrine in `components/home/SocialTeaser.tsx` with a
static curated social card grid showing real @2tjewelers content.

Assets provided: [list of filenames placed in public/assets/social/]
Post URLs provided: [list of real TikTok/IG post URLs]

Requirements:
- 2–3 cards: static <img> (the provided assets) + platform badge (TIKTOK / INSTAGRAM)
  in JetBrains Mono uppercase + caption snippet (1 real line) + arrow link to the live post
- Aspect ratio: 9:16 card for TikTok vertical, 1:1 for Instagram square
- Design tokens: --color-brand-charcoal bg, --color-brand-border border 1px,
  --color-brand-gold accent, --color-brand-bone text, --font-mono labels
- No follower counts, no like counts, no comment counts
- Each card: <a href="[post_url]" target="_blank" rel="noopener noreferrer">
- Accessibility: alt="[platform] post by @2tjewelers — [caption snippet]"
- No external scripts, no embed.js, no API calls
- Left canvas slot currently: mi-vitrine pb-vitrine-social, aspectRatio 4/3 —
  replace this div with the card grid
- Do not change the channel-map rows (right side)
- Do not change Footer.tsx
- Do not commit without visual QA at 390px and 1280px
```

---

## Verification (when Phase 1 is implemented)

- [ ] `npm run build` passes with no type errors
- [ ] No `NEXT_PUBLIC_` env vars added (no secrets in client bundle)
- [ ] Playwright screenshot at 390px mobile — left canvas cards visible, no overflow
- [ ] Playwright screenshot at 1280px desktop — cards grid aligned, channel-map rows intact
- [ ] No horizontal scroll introduced
- [ ] No external scripts loaded (Network tab — no requests to tiktok.com or instagram.com on page load)
- [ ] All card links open real @2tjewelers posts in new tab
- [ ] No follower/like/view counts visible anywhere
- [ ] Claim-safety grep: no invented captions, no fake social proof

---

*Research sources: TikTok Developer Docs (developers.tiktok.com/doc/display-api-overview, /doc/embed-videos/), Meta for Developers (developers.facebook.com/docs/instagram-platform/oembed/), Meta oEmbed Read April 2025 changelog.*
