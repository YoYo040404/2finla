# Pass 5C — Hard Street-Luxury Copy/CRO Audit & Implementation Plan (PLAN ONLY)

**Date:** 2026-06-10 · **Baseline:** `b6662c8` (B2-safe closed) · **Live:** https://2finla.vercel.app
**Status:** Audit + plan only. No code, no docs, no commits. Awaiting Yaniv approval before Codex handoff.

**Sources used:** Full repo copy inspection of all 11 routes + 14 copy-bearing components; `CLAIM_SAFETY.md` rules (via CLAUDE.md canonical summary); `docs/2t-pass5b-competitor-backed-copy-research.md` (13-brand competitor matrix: GLD, Icebox, Johnny Dang, TraxNYC, King Ice, Frost NYC, Aporro, IceCartel, HelloIce, JAXXON, Avianne, Gold Presidents, ItsHot, Moses NYC); `docs/2t-voc-copy-system.md` (buyer vocabulary, fears, category copy rules); `docs/2t-copy-swipe-map.md`; `docs/2t-growth-strategy-seo-cro-90day.md` (keyword map); `NEXT_ROADMAP.md` / `AGENT_HANDOFF.md` Pass 5C scope notes. No new web scraping was needed — Pass 5B's competitor research is recent, deep, and directly on-point; reusing it avoids re-deriving the same matrix. No Shopify tools touched.

---

## 1. Executive Verdict

**The single main problem: the claim-safety scaffolding has become the voice.** "Details confirmed per piece," "Ask what's available," and "Ask before you buy" were designed as trust anchors — one per surface. Today they are the *headline, subhead, card line, and CTA* on whole routes (worst: `/collections`, where the literal H2 is "Ask before you buy." and the same `safeLine` sentence renders three times on one page). The site reads compliance-first, shine-second. Buyer-desire language (ice, flooded, loud, heavy, built for the light) is underweighted relative to lawyer language.

Pass 5C inverts the ratio without touching a single claim rule: **every surface leads with the product hitting, and carries exactly one trust anchor.** Secondary problems solved in the same pass: (a) CTA monotony — almost every category CTA is "ASK ABOUT X →"; (b) the final CTA bar is custom-only, so the strongest closing moment ignores SHOP buyers; (c) one structural orphan — `ProofMarquee` (the trust strip) and `PittsburghStory` are defined but rendered nowhere, so the live homepage has **no trust strip at all** between hero and product wall.

---

## 2. Voice Doctrine for 2T

### What it sounds like
Short. Declarative. Period-heavy. Product nouns first, trust second. A Pittsburgh jeweler talking across the counter, not a brand talking at a market. Confidence without promises. Every line could be read out loud in the store without sounding like a website.

**Construction rules:**
- Max ~8 words per line in display copy. One idea per sentence.
- Product noun appears before any trust phrase ("Cuban. Rope. Tennis." before "Ask what's in.")
- "Text 2T" is the universal conversion verb. "Ask" is the universal pre-purchase verb. "Send" is custom-only. "Build" is custom/grillz-process-only. "Shop / See / Pick / Choose" are SHOP-only.
- One trust anchor per section, maximum. Never two safe-phrases back to back.
- ALL-CAPS for display lines and CTAs; sentence case for body. Periods, not exclamation points. BANG. always with the period, never explained.

### What it never sounds like
Quiet luxury, bridal boutique, corporate ecommerce, AI-filler, parody AAVE, or any competitor's wording. No softening adverbs ("simply," "effortlessly"). No "journey," no "experience." No claim that isn't on the approved list.

### Approved phrase bank (use these; 18)
1. Built to hit.
2. Text 2T.
3. Ask what's available. / Ask what's in stock. / Ask what's in.
4. Ask before you buy.
5. Details confirmed per piece.
6. Material and stone details confirmed per piece.
7. Send the photo. / Send the logo. / Send the idea. (custom contexts only)
8. Bring the name.
9. Pick the piece. Then pick the shine.
10. Real Pittsburgh store. / Pittsburgh jeweler. 25 years.
11. Cuban. Rope. Tennis.
12. Grillz. Watches. Chains. Pendants.
13. Gold or silver. Diamond or moissanite.
14. Different shine. Different direction.
15. Iced-out. / Flooded. (descriptive, never per-stone claims)
16. Loud enough to get noticed.
17. Built for the light.
18. No deposit to start. We quote first. (custom/grillz only)

### Banned / weak phrase bank (never; 20)
curated · elevated · exquisite · timeless · refined · premium lifestyle · luxury redefined · bespoke journey · handcrafted excellence · submit your inquiry · our team will review · personalized solution · drip so crazy · bussin · for the culture · gang · flex kingdom · celebrity approved · trusted by thousands · "moissanite diamond" / "diamond alternative" / "looks like a diamond" / cheaper-than-gold framing / guaranteed fit / free shipping / lifetime warranty (all banned per CLAIM_SAFETY).

### How Moses energy translates (without copying)
| Moses pattern (reference only) | 2T translation |
|---|---|
| "INQUIRE" private-deal posture on watches | "TEXT 2T ABOUT THIS WATCH →" — same high-ticket conversation-first behavior, but open and text-first, not private/quiet |
| Personality-led luxury (Moses the person) | BANG. as the owned signature + "Pittsburgh jeweler. 25 years." — brand mark, not personal name |
| Social-native pace, fast product moments | Short stacked product lines ("Cuban. Rope. Tennis."), promo ticker, "Watch the build" social rows |
| Flagship store presence (NYC) | "332 Fifth Ave. Downtown Pittsburgh." as a hard, repeated proof asset — louder than Moses plays it |
| No prices, deal-energy negotiation | "We quote first. No deposit to start." — deal energy made claim-safe |
| Restrained tone | **Inverted.** 2T is louder, icier, more product-dense. Where Moses whispers, 2T stamps. |

---

## 3. Route-by-Route Audit

### 3.1 Homepage `/` (app/page.tsx + home components)
**Works:** Hero is the strongest surface on the site — "BUILT TO HIT." + "Grillz. Watches. Chains. Pendants. Custom. Pittsburgh jeweler. Text 2T or come through." is exactly the Pass 5B Option-D hybrid and should not be touched. Anchor-tile subs ("Cuban. Rope. Tennis. Ask what's in.") are on-voice. Custom lane ("YOUR LOGO. YOUR NAME. YOUR PIECE.") is correct. ShineDirectionBand carries the only approved direction-level material claims (925 Sterling Silver / D-color VVS Moissanite) correctly scoped.
**Weak:** (1) **ProofMarquee is orphaned** — the trust strip ("DOWNTOWN PITTSBURGH JEWELER · 25 YEARS · WE QUOTE FIRST…") exists in `components/home/ProofMarquee.tsx` but is imported nowhere; the homepage has no trust strip. (2) ProofContactZone body is thin: "Text or come through. Direct access. Details confirmed per piece." — the 25-years/332-Fifth-Ave ledger deserves a harder line. (3) FinalCTABar ("MAKE IT HIT. / Send the idea.") is custom-only — the last conversion moment has no SHOP path. (4) "CHOOSE THE SHINE." band micro-copy ("Pick the metal direction.") is flat. (5) Discovery strip line "What most people text 2T for first." is clunky.
**Stays unchanged:** Hero H1 + sub + both CTAs; BANG. stamp; PICK THE PIECE. headline; anchor/secondary tile labels and subs; promo ticker (claim-safe three-part rotation); ShineDirectionBand spec lines; custom lane headline/body/chips; SocialTeaser headline + WA row.
**Changes in 5C:** Re-wire or consciously retire ProofMarquee (decision for Yaniv — copy provided either way); ProofContactZone body; FinalCTABar dual-path; minor micro-line sharpening (Section 4).
**Claim-safety:** No new claims. "25 years" wording locked. Promo ticker already compliant.

### 3.2 `/collections` (hub)
**Works:** Structure (8 category cards), real WhatsApp prefill.
**Weak — worst route on the site.** `safeLine` ("Details confirmed per piece. Ask before you buy. Ask what's available.") renders **three times verbatim**. The H2 is literally "Ask before you buy." The closing section heading is "Ask what's available." and its link label is *also* "Ask what's available." Card lines are interchangeable trust filler ("Details confirmed per piece." for bracelets, "Ask before you buy." for custom) — zero product desire, zero differentiation. H1 "Shop 2T jewelry." is limp.
**Stays:** Layout, card grid, icons, WhatsApp link target.
**Changes in 5C:** Full copy rewrite — product-first H1/H2, one trust line total on the page, 8 product-specific card lines (Section 4.2).
**Claim-safety:** New card lines must stay style-descriptive ("Cuban. Rope. Tennis.") with no inventory/material claims.

### 3.3 `/collections/chains`
**Works:** "CHAINS / HOLD THE PIECE." is a real angle; six style cards have good descriptions ("Bold link style. The most requested chain to hold the piece."); per-style WA prefills are excellent.
**Weak:** Hero sub buries the lead ("Ask what's available and what pairs with your pendant" — two asks, no shine). "STONE-SET LINK" card title undersells — buyers search/say "iced-out chain." Footnote doubles the trust phrase ("Details confirmed per piece. Ask what's available before you buy.").
**Stays:** H1, card structure, specs bullets, WA messages, "Six styles. One chain that hits."
**Changes:** Hero sub one-liner; rename STONE-SET LINK → ICED-OUT CHAIN (description already says "Built to hit the light"); collapse the double trust footnote to one line.
**Claim-safety:** "Iced-out" as a style label is approved buyer vocabulary; keep "Stone details confirmed per piece" spec bullet.

### 3.4 `/collections/pendants`
**Works:** "PENDANTS THAT HIT DIFFERENT." is strong. SHOP/CUSTOM split is structurally right. JESUS PIECE / INITIAL / ICED card copy is on-voice.
**Weak:** **Hero sub is 100% custom** ("Photo, logo, name, or number. Send the idea — we quote before the build.") on a page whose first section is SHOP — this is the clearest SHOP-vs-CUSTOM bleed on the site. "READY TO SHOP" eyebrow is generic.
**Stays:** H1, both section structures, all six SHOP cards, six custom-type tiles, "START CUSTOM PENDANT →".
**Changes:** Hero sub becomes SHOP-first with custom as second beat; custom module intro keeps "Send the photo, logo, or name." unchanged.
**Claim-safety:** Fine as is; keep memorial pendant copy soft ("Keep the memory close." — do not harden this one; grief context).

### 3.5 `/collections/rings` · 3.6 `/collections/bracelets` · 3.7 `/collections/earrings` (shared `[category]` template)
**Works:** Headlines have energy ("RINGS THAT HIT." / "WRIST GAME WITH WEIGHT." / "EARRINGS THAT CATCH LIGHT."). Style cards are specific and claim-safe (sizes as "ask," stone directions, per-piece confirmations). Per-style WA prefills strong.
**Weak:** Hero bodies are ask-stacked: "Tennis, Cuban, or iced-out direction. Ask what's available." + note "Ask what's available. Details confirmed per piece." — the same two phrases twice within one viewport. "EVERYDAY SHINE" earrings card drifts soft ("Low-key shine for any day" — acceptable, but "comfortable" is boutique-adjacent).
**Stays:** All three headlines, card structure, specs, WA messages.
**Changes:** One-line desire-first hero bodies; dedupe hero note vs body; micro-tighten 2–3 card descriptions.
**Also found:** `CATEGORY_DATA.chains` and `.pendants` entries in `app/collections/[category]/page.tsx` are dead code (dedicated pages shadow them) — the pendants entry still has old custom-heavy copy ("Your identity, hanging."). Not user-visible; flag for cleanup in implementation so a future routing change can't resurrect off-voice copy.
**Claim-safety:** Bracelet/ring size ranges ("7"–8.5" most common") are descriptive norms, not stock claims — keep.

### 3.8 `/custom`
**Works:** Best-converting voice on the site already. "YOUR LOGO. YOUR NAME. YOUR PIECE." / "Send it. We quote before the build." / build flow (THE PIECE → THE SHINE → THE IDEA → YOU) / budget hint ("Budget helps guide the conversation. Not a final quote.") / "Not ready yet? Text us first. →" — all on-voice and claim-safe.
**Weak:** FAQ answers run corporate-long ("We'll review the design and advise on how it translates to the piece type you're requesting"). FAQ #3 repeats "before production" three times across two answers.
**Stays:** Hero entirely; build flow labels; budget chips; SEND REQUEST →; WA bypass CTA.
**Changes (P2 only):** Tighten the four FAQ answers to 2T cadence.
**Claim-safety:** Keep "We quote before the build" / "No deposit to start" — both approved. No turnaround-time language anywhere — preserved.

### 3.9 `/grillz`
**Works:** "CUSTOM GRILLZ. BUILT AROUND THE FIT." is the right fit-first frame. FIT FIRST 5-step process and WHAT GETS CONFIRMED grid are genuinely good trust architecture. No dental/fit-guarantee leakage anywhere — clean.
**Weak:** Style-card descriptions are the softest strings on the page: "Gold or iced. Ask what's available." (TOP SET), "Matching direction. Confirm details by text." (BOTTOM SET) — these are trust filler where shine should live.
**Stays:** H1 + sub, FIT_STEPS, WHAT GETS CONFIRMED, "Pick the style. Text 2T to start.", CTA.
**Changes:** Six card descriptions rewritten desire-first (Section 4.6).
**Claim-safety:** Critical route. New descriptions must avoid: fit guarantee, mold kit, safe-for-teeth, karat claims. Drafts below comply.

### 3.10 `/watches`
**Works:** Strongest claim-discipline on the site. "WATCHES THAT HIT." / "Iced-out. Bust-down. Made to flood the wrist." is exactly the brief's target voice. Rolex non-authorized-dealer disclosure correct. WHAT GETS CONFIRMED ledger (availability/source/condition/model/stones/mods/pricing) is a real differentiator vs every competitor.
**Weak:** Almost nothing. "STONE-SET DIAL / Dial shine with a cleaner face." is slightly limp.
**Stays:** Everything except one card line.
**Changes (P2):** One card description.
**Claim-safety:** Do not touch the Rolex disclosure or "vendor-sourced" framing. "Rolex may be available through trusted vendor sources" stays verbatim.

### 3.11 `/about`
**Works:** Facts grid (332 Fifth Ave / 25 Years / Text First / Per Piece) is hard proof done right. BANG. placed.
**Weak:** Hero body and WHAT WE DO paragraphs read like process documentation ("You send the idea. We guide the direction before quote or production starts."). "COME THROUGH" section body is soft ("Walk in or text first. We're in downtown Pittsburgh." — repeats the address that's already the heading).
**Stays:** H1 "DOWNTOWN PITTSBURGH.", facts grid, CTA buttons.
**Changes (P1):** Hero body + WHAT WE DO + COME THROUGH bodies, harder and shorter.
**Claim-safety:** "25 years" wording locked; no celebrity/press/customer-count additions.

### Sitewide chrome (PromoBar, MobileCtaBar, StickyConversionBar, Footer)
**Works:** PromoBar claim-safe; MobileCtaBar context-aware per route (SHOP routes get shop prefill, grillz/watches get ask prefills) — this is already the SHOP/CUSTOM logic done right; Footer + Acima copy approved verbatim.
**Weak:** MobileCtaBar default label "Build Custom →" fires on the homepage — the highest-traffic mobile surface gets a custom-only CTA (same problem as FinalCTABar). StickyConversionBar "ASK ABOUT A PIECE" is fine.
**Changes (P1):** Homepage-route mobile CTA decision (Section 6).

---

## 4. Exact Copy Recommendations

Format: one preferred version per slot; backup only where genuinely useful. Status: **READY** / **NEEDS BUSINESS CONFIRMATION** / **CLAIM-RISK — DO NOT USE YET**.

### 4.1 Homepage

| Slot | Current | Recommended | Status |
|---|---|---|---|
| Hero H1 + sub + CTAs | BUILT TO HIT. + product stack | **No change.** | READY |
| Trust strip (ProofMarquee — currently unrendered) | orphaned | Re-wire between hero and PICK THE PIECE with items: `DOWNTOWN PITTSBURGH JEWELER ◆ 25 YEARS ◆ TEXT 2T BEFORE YOU BUY ◆ WE QUOTE FIRST ◆ NO DEPOSIT TO START ◆ DETAILS CONFIRMED PER PIECE` (drop the current duplicate "DETAILS…/ TEXT BEFORE YOU BUY" overlap) | **CONFIRMED by Yaniv 2026-06-10: re-wire** |
| PICK THE PIECE micro-line | "Details confirmed per piece. Ask before you buy." | "Pick the piece. Then pick the shine. Details confirmed per piece." | READY |
| Discovery strip — MOST ASKED ABOUT | "What most people text 2T for first." | "The pieces people text 2T for first." | READY |
| Discovery strip — ASK WHAT JUST LANDED | "What's moving now. Ask before it moves." | **No change** (already hard). | READY |
| Discovery strip — VIEW ALL | "Browse everything. Text 2T before you buy." | **No change.** | READY |
| Custom interrupt band | "SEND THE PHOTO. SEND THE IDEA." | **No change** — correct custom language on a custom surface. | READY |
| ShineDirectionBand micro lines | "Pick the metal direction." / "Pick the stone direction." | "Pick the metal. Different shine." / "Pick the stone. Different direction." (echoes approved pair) | READY |
| ProofContactZone body | "Text or come through. Direct access. Details confirmed per piece." | "Real Pittsburgh store. Walk in or text 2T — you deal with the jeweler, not a call center. Details confirmed per piece." | **CONFIRMED by Yaniv 2026-06-10: use the contrast line** |
| SocialTeaser IG row | "See what's dropping." | **No change.** TikTok "Watch the build." and WA row also unchanged. | READY |
| FinalCTABar headline | "MAKE IT HIT." | **No change.** | READY |
| FinalCTABar body | "Send the idea. We quote before the build." | "Shop what's in or send the idea. Either way — text 2T first." | **CONFIRMED by Yaniv 2026-06-10: approved as drafted** |
| FinalCTABar CTAs | START THE PIECE → / TEXT US → | Primary: `START THE PIECE →` (keep, /custom). Secondary: `TEXT 2T →` (rename from TEXT US — "Text 2T" is the brand verb everywhere else). | READY |

### 4.2 `/collections` hub (full rewrite of strings)

| Slot | Current | Recommended | Status |
|---|---|---|---|
| Kicker | "2T Jewelers - Pittsburgh" | "2T JEWELERS · PITTSBURGH" | READY |
| H1 | "Shop 2T jewelry." | "PICK THE PIECE." (echoes homepage wall; this page *is* the piece-picker) Backup: "EVERY PIECE. ONE CASE." | READY |
| H1 support line | safeLine ×1 | "Grillz. Watches. Chains. Pendants. Gold or silver. Diamond or moissanite." | READY |
| Grid section kicker/H2 | "Details confirmed per piece." / H2 "Ask before you buy." | Kicker: "THE CASE" · H2: "Eight ways to hit." | READY |
| Grid support line | safeLine ×2 | "Details confirmed per piece. Ask before you buy." (the page's single trust anchor — appears once) | READY |
| Card — Grillz | "Fit and details are confirmed per piece." | "Top. Bottom. Full mouth. Built around the fit." | READY |
| Card — Watches | "Ask what's available before you buy." | "Iced-out. Bust-down. Ask what's in." | READY |
| Card — Chains | "Ask about length, style, and piece details." | "Cuban. Rope. Tennis. The neck comes first." | READY |
| Card — Pendants | "Ask about the piece before you buy." | "Photo. Logo. Name. Number. Pieces that mean something." | READY |
| Card — Bracelets | "Details confirmed per piece." | "Tennis. Cuban. Bangle. Weight on the wrist." | READY |
| Card — Rings | "Ask about sizing and piece details." | "Big face or clean band. Ask what fits." | READY |
| Card — Earrings | "Ask what's available." | "Studs. Hoops. Iced or clean." | READY |
| Card — Custom | "Ask before you buy." | "Your logo. Your name. Your piece." | READY |
| Bottom ask section | Kicker "Ask before you buy." / H2 "Ask what's available." / safeLine ×3 / link "Ask what's available." | Kicker: "DON'T GUESS" · H2: "Text 2T. Ask what's in." · Body: "Availability moves. The fastest answer is a text." · Link: "TEXT 2T →" | READY |

### 4.3 `/collections/chains`

| Slot | Current | Recommended | Status |
|---|---|---|---|
| Hero sub | "Cuban, rope, or tennis. Ask what's available and what pairs with your pendant." | "Cuban, rope, or tennis. The chain carries the piece — ask what's in." | READY |
| Card title "STONE-SET LINK" | — | "ICED-OUT CHAIN" (description "Stone-set links from clasp to clasp. Built to hit the light." stays) | READY |
| Trust footnote | "Details confirmed per piece. Ask what's available before you buy." | "Details confirmed per piece." (single anchor; CTA below already does the ask) | READY |

### 4.4 `/collections/pendants`

| Slot | Current | Recommended | Status |
|---|---|---|---|
| Hero sub | "Photo, logo, name, or number. Send the idea — we quote before the build." | "Crosses, Jesus pieces, medallions, iced faces — or your photo, logo, name, or number built from scratch." | READY |
| SHOP eyebrow | "READY TO SHOP" | "SHOP PENDANTS" | READY |
| SHOP section trust line | "Details confirmed per piece. Ask what's in stock and available." | "Details confirmed per piece. Ask what's in stock." | READY |
| Custom module | "BUILD THE PIECE / Send the photo, logo, or name. / Send the idea — we quote before the build." | **No change** — correct custom language in the custom half. | READY |

### 4.5 `/collections/rings` · `bracelets` · `earrings` (template `[category]`)

| Slot | Current | Recommended | Status |
|---|---|---|---|
| Rings body | "Big face, iced look, or clean statement. Ask what's available before you buy." | "Big face, iced face, or clean band. Made to get noticed." (note line below keeps the single ask) | READY |
| Rings note | "Ask about sizing and available styles." | **No change** (this becomes the page's ask line). | READY |
| Bracelets body | "Tennis, Cuban, or iced-out direction. Ask what's available." | "Tennis, Cuban, bangle. Weight that shows." | READY |
| Bracelets note | "Ask what's available. Details confirmed per piece." | "Details confirmed per piece." | READY |
| Earrings body | "Studs, hoops, or iced-out direction. Ask what's available." | "Studs, hoops, iced or clean. Shine at eye level." | READY |
| Earrings note | "Ask what's in stock. Details confirmed per piece." | **No change.** | READY |
| Card "EVERYDAY SHINE" desc | "Lightweight, comfortable, always on. Low-key shine for any day." | "Light, clean, always on. Shine that goes to work." | READY |
| Dead `CATEGORY_DATA.chains` / `.pendants` entries | legacy custom-heavy copy | Remove entries + remove both slugs from `generateStaticParams` (dedicated pages own these routes) | READY (code hygiene, not visible copy) |

### 4.6 `/grillz` — six style-card descriptions

| Card | Current | Recommended | Status |
|---|---|---|---|
| TOP SET | "Gold or iced. Ask what's available." | "The classic flash. Gold, silver, or iced across the top." | READY |
| BOTTOM SET | "Matching direction. Confirm details by text." | "Low shine that shows when you talk. Match the top or run it solo." | READY |
| FULL MOUTH | "Top and bottom. Custom fit. Text 2T first." | "Top and bottom. The whole smile hits. Fit first." | READY |
| OPEN FACE | "Gold frame, natural teeth showing. Ask about the look." | "Gold frame, your teeth showing through. Old-school look, custom cut." | READY |
| ICED-OUT | "Stone direction confirmed per piece. Ask what fits." | "Stone-set across the set. Built for the light." (trust moves to spec bullets, already there) | READY |
| DIAMOND CUT | "Cut and pattern confirmed before the build." | "Cut patterns that catch from every angle. Pattern confirmed before the build." | READY |

All six keep their existing spec bullets (where the per-piece confirmations already live). No fit-guarantee, mold, karat, or dental language introduced.

### 4.7 `/watches`

| Slot | Current | Recommended | Status |
|---|---|---|---|
| STONE-SET DIAL desc | "Dial shine with a cleaner face." | "Iced dial, clean case. Shine where they look first." | READY |
| Everything else incl. Rolex disclosure | — | **No change.** | READY |

### 4.8 `/about`

| Slot | Current | Recommended | Status |
|---|---|---|---|
| Hero body | "25 years in Pittsburgh. Custom jewelry, grillz, and watches. Real store, real pieces — ask before you buy." | "25 years on Fifth Ave. Grillz, watches, chains, pendants, custom. Real store, real counter — ask before you buy." | READY |
| WHAT WE DO ¶1 | "We build custom jewelry… You send the idea. We guide the direction before quote or production starts." | "Send the logo, photo, name, or sketch — we build the piece from it. Direction first. Quote before the build." | READY |
| WHAT WE DO ¶2 | "Grillz are fit-confirmed before build. Watches are inquiry-led — condition, source, and details confirmed per piece…" | "Grillz get fitted before anything is made. Watches are ask-first — source, condition, and stones confirmed per piece. No deposit to start." | READY |
| COME THROUGH body | "Walk in or text first. We're in downtown Pittsburgh. Ask about availability, current pieces, and custom direction." | "Walk in or text first. Ask what's in the case, what just landed, or what it takes to build yours." | READY |

### 4.9 Metadata (copy-level SEO, see Section 7)

| Route | Current title | Recommended | Status |
|---|---|---|---|
| `/` | "2T Jewelers — Grillz, Watches & Custom Jewelry \| Pittsburgh, PA" | "2T Jewelers \| Hip Hop Jewelry, Grillz & Custom — Pittsburgh, PA" | READY |
| `/` description | "Shop grillz, watches, chains, pendants, and custom jewelry from 2T Jewelers in Pittsburgh. Text 2T before you buy. Product details confirmed per piece." | "Iced-out chains, custom grillz, pendants, and watches at 2T Jewelers — real Pittsburgh store, 25 years. Text 2T before you buy. Details confirmed per piece." | READY |
| `/collections` description | generic list | "Shop hip hop jewelry in Pittsburgh — Cuban chains, iced-out pendants, grillz, watches, rings. Real store. Text 2T to ask what's in." | READY |
| `/collections/chains` | already targets Cuban/rope/tennis | Add "iced-out": "…Cuban, rope, tennis, Franco, and iced-out chains in Pittsburgh, PA…" | READY |
| `/grillz`, `/watches`, `/custom`, `/collections/pendants` | already keyword-correct | **No change.** | READY |

**CLAIM-RISK — DO NOT USE YET (anywhere):** "in stock now" as an assertion (only as an *ask* verb) · any price/discount/% · "VVS" or "925" outside ShineDirectionBand's approved direction-level placement · "free mockup/render" · any turnaround time · "guaranteed" anything · follower/customer counts · "factory-set"/"authenticated" watch claims.

---

## 5. SHOP vs CUSTOM Cleanup

**SHOP pages sounding too custom (fix):**
1. `/collections/pendants` hero sub is pure custom-process copy → replaced with SHOP-first line (4.4). Rule applied: on split pages, the hero sells the page's *first* section.
2. `MobileCtaBar` default ("Build Custom →") fires on `/` and `/about` → see Section 6 decision.
3. `FinalCTABar` (renders on `/`) body is custom-only → dual-path body (4.1).
4. Dead `[category]` pendants entry ("Your identity, hanging." + logo/sketch body) → delete (4.5).

**CUSTOM/process pages needing stronger custom language (fix):**
1. `/grillz` style cards lean on shop-ish trust filler ("Ask what's available") instead of fit/process desire → rewritten (4.6); the page-level frame ("BUILT AROUND THE FIT", FIT FIRST steps) already carries process language correctly.
2. `/custom` FAQ answers — keep the custom verbs, cut the corporate connective tissue (P2).

**Replacement logic (codify in the implementation prompt):**
- SHOP surfaces: verbs = Shop / See / Pick / Choose / Ask / Text about this piece. Never: Build, Send the idea, Upload, Start the build, "made from scratch" (exception: pendants hero may *mention* the custom half in its second clause, since the page hosts both).
- CUSTOM/process surfaces (`/custom`, pendants custom module, grillz process sections, homepage custom lane + interrupt band): verbs = Send / Bring / Build / Start / Quote first / No deposit to start.
- Watches = SHOP-inquiry hybrid: Ask/Text verbs only; never Build/Send.

---

## 6. CTA Tightening

| Context | Current | Recommendation | Status |
|---|---|---|---|
| Homepage hero | SHOP THE PIECES / BUILD CUSTOM → | **Keep both.** Matches 13-brand best practice (shop + custom dual lane). | READY |
| Homepage final bar | START THE PIECE → / TEXT US → | START THE PIECE → / **TEXT 2T →** (verb unification) | READY |
| Sticky bar (desktop) | ASK ABOUT A PIECE · TEXT 2T → | **Keep.** | READY |
| Shop/category cards (hub) | "{Category} ->" | Keep label-arrow pattern; the rewritten card line does the selling. | READY |
| Chains page | ASK ABOUT CHAINS → (×2) | Keep top one. Bottom one → **TEXT 2T ABOUT CHAINS →** (differentiates the second touch; "Text" converts harder than a second "Ask"). | READY |
| Pendants page | ASK ABOUT PENDANTS → (×2) + START CUSTOM PENDANT → | Top: keep. SHOP-section: **TEXT 2T ABOUT PENDANTS →**. Custom module: keep START CUSTOM PENDANT →. | READY |
| Rings/Bracelets/Earrings | ASK ABOUT {X} → | **Keep** (single CTA per page; differentiation not needed where the verb appears once). | READY |
| Grillz | TEXT 2T ABOUT GRILLZ → | **Keep** — already the strongest pattern. | READY |
| Watches | ASK ABOUT WATCHES → | **Keep** — inquiry-first is correct for high-ticket (Moses/Icebox/Trax pattern). | READY |
| Custom | START THE REQUEST → / TEXT 2T ON WHATSAPP → / SEND REQUEST → | **Keep all.** | READY |
| Mobile bar — homepage/about default | "Build Custom →" → `/custom` | **"TEXT 2T →"** with prefill "Hey 2T — I'm looking at pieces. What's available?" Rationale: homepage mobile is the single biggest surface; a custom-only CTA filters out SHOP buyers. | **CONFIRMED by Yaniv 2026-06-10: switch to TEXT 2T →** |
| WhatsApp prefill tone | Mixed: most use "Hey 2T — …", a few don't ("What pendants do you have available now?", "I want a custom pendant. Can I send…") | Standardize every prefill to open "Hey 2T — " + product-specific ask. Casual, first-person, no slang. Full sweep list in implementation. | READY |

---

## 7. SEO/CRO Copy Notes (copy-level only — no technical SEO work)

Buyer-intent terms to carry **in visible copy and metadata**, mapped to where they already half-exist:
- **hip hop jewelry** — appears nowhere on the site today. Add to homepage title (4.9) and `/collections` meta. Do not force into display copy; "Grillz. Watches. Chains. Pendants." carries the semantic load on-page.
- **iced-out jewelry / iced-out chains** — "iced-out" already used widely; add to chains meta + the renamed ICED-OUT CHAIN card (4.3) closes the on-page gap.
- **custom pendants** (photo/logo/name pendant) — pendants page already covers all variants in card labels; meta already targets them. No change.
- **custom grillz Pittsburgh** — `/grillz` title already exact-match. No change.
- **Cuban chains / rope chains / tennis chains** — covered in chains H-structure and cards. No change.
- **iced-out watches / bust-down watch** — `/watches` title exact-match. No change.
- **Pittsburgh jeweler / real Pittsburgh store** — strengthen via ProofMarquee re-wire ("DOWNTOWN PITTSBURGH JEWELER") and ProofContactZone body (4.1). Pass 5B confirmed zero hip-hop competitors in the Pittsburgh local market — this phrase is the uncontested local asset; it should appear in body text (not just display caps) at least once per route footer-adjacent surface. Implementation: add "Pittsburgh jeweler. 25 years." trust footnote pattern where a trust line already exists (no new sections).

CRO copy mechanics: one trust anchor per section (the core 5C rule) is itself the conversion fix — Pass 5B's finding was that 2T "asks less of the buyer and answers fewer questions"; desire-first card lines + differentiated second-touch CTAs answer that without any structural change.

---

## 8. Claim-Safety Risk Table

| Recommendation | Risk | Mitigation |
|---|---|---|
| "Ask what's in" / "what's in the case" lines (hub, chains, about) | Could imply confirmed inventory | Phrased only as *invitations to ask*, never "X is in stock." Keep. |
| ICED-OUT CHAIN card rename | "Iced-out" read as diamond claim | Style descriptor per approved vocabulary; spec bullet "Stone details confirmed per piece" stays on the card. |
| Grillz card rewrites (4.6) | Fit/material implications | No "guaranteed," no mold, no karat, no dental language; "Fit first." points to the existing FIT FIRST process section. |
| "you deal with the jeweler, not a call center" (ProofContactZone) | Soft comparative claim | Factually true of a single-store operation; if Yaniv is uncomfortable, approved backup has no comparison. |
| Homepage title "Hip Hop Jewelry" | None (category term, not a claim) | — |
| ShineDirectionBand 925 / D-color VVS lines | Already approved at direction level | **Do not propagate** these spec strings to any new surface in 5C. |
| "25 years" appearances (ProofMarquee re-wire, about hero) | Tenure wording locked | Use exactly "25 years" / "25 YEARS"; no "over," no "decades." |
| FinalCTABar "Shop what's in" | Inventory implication | "what's in" = colloquial for current case stock at a real store; paired with "text 2T first." Acceptable; flag for Yaniv. |
| WhatsApp prefill standardization | None | Prefills are user-voiced asks, not claims. |
| Promo ticker, Acima block, Rolex disclosure, memorial pendant copy | — | **Explicitly untouched.** |

---

## 9. Prioritized Implementation Plan

**P0 — must fix in Pass 5C**
1. `/collections` hub full string rewrite (4.2) — worst voice offender, every shopper routes through it.
2. Trust-phrase de-duplication sitewide — one anchor per section (chains footnote, rings/bracelets/earrings hero note dedupe, pendants trust line).
3. FinalCTABar dual-path body + TEXT 2T → rename (4.1).
4. Pendants hero SHOP-first sub (4.4).
5. ProofMarquee orphan decision + re-wire with updated items (4.1) — needs Yaniv's call (re-wire vs delete).
6. Category CTA second-touch differentiation (chains, pendants) (Section 6).

**P1 — should improve in Pass 5C**
7. Grillz six card descriptions (4.6).
8. Rings/bracelets/earrings hero bodies (4.5).
9. ProofContactZone body + ShineDirectionBand micro lines + discovery strip line (4.1).
10. About page bodies (4.8).
11. Metadata title/description updates (4.9).
12. WhatsApp prefill tone standardization (Section 6).
13. MobileCtaBar homepage default CTA (needs confirmation).
14. Dead `CATEGORY_DATA` chains/pendants entries removal.

**P2 — optional later polish**
15. `/custom` FAQ answer tightening.
16. Watches STONE-SET DIAL line; earrings EVERYDAY SHINE line.
17. ShineRail card subs micro-pass (only if P0/P1 QA shows inconsistency).

---

## 10. Files Likely Touched (after approval — DO NOT EDIT NOW)

- `app/collections/page.tsx` (P0.1)
- `components/home/FinalCTABar.tsx` (P0.3)
- `app/collections/pendants/page.tsx` (P0.4, P0.6)
- `app/collections/chains/page.tsx` (P0.2, P0.6)
- `app/page.tsx` (P0.5 wiring, P1.9 micro lines)
- `components/home/ProofMarquee.tsx` (P0.5 items) — or deleted
- `components/home/ProofContactZone.tsx`, `components/home/ShineDirectionBand.tsx` (P1.9)
- `app/collections/[category]/page.tsx` (P1.8, P1.14)
- `app/grillz/page.tsx` (P1.7)
- `app/about/page.tsx` (P1.10)
- `app/layout.tsx` (P1.11 root metadata)
- `components/layout/MobileCtaBar.tsx` (P1.13, if confirmed)
- `components/custom/CustomFaq.tsx`, `app/watches/page.tsx` (P2)
- WhatsApp prefill sweep touches several of the above (P1.12)

Not touched: hero video/media, `data/homeMedia.ts`, any asset, any layout/CSS system, Footer, PromoBar, Rolex disclosure, Shopify anything, untracked files.

## 11. QA Checklist for Codex Implementation

1. `npm run build` — zero TypeScript errors, all routes compile.
2. Route inspection (1280px + 390px): `/`, `/collections`, `/collections/{chains,pendants,rings,bracelets,earrings}`, `/grillz`, `/watches`, `/custom`, `/about` — no horizontal scroll, no card-text overflow at 390px.
3. Claim-safety grep over the diff: `grep -riE "guarantee|warranty|free shipping|in stock now|moissanite diamond|diamond alternative|solid gold|VVS diamond|GIA|turnaround|deposit required|mockup|render" app/ components/` — only pre-existing approved hits (ShineDirectionBand specs, Acima block, "No deposit to start").
4. Tenure grep: every tenure mention is exactly "25 years"/"25 YEARS".
5. CTA check: every changed CTA renders, links resolve; chains/pendants second-touch CTAs differ from first-touch.
6. WhatsApp prefill check: every changed `wa.me` link opens with the new "Hey 2T — …" prefill (spot-check on live preview).
7. SHOP/CUSTOM verb audit: no Build/Send verbs on pure SHOP surfaces; mobile bar config matches the approved decision.
8. `git status --short` — only the files listed in Section 10; no untracked files staged; no `_handoff/`, `docs/superpowers/`, or demo-asset changes; no Shopify files.
9. One trust anchor per section visual check on `/collections` (the page that previously had three).

## 12. Codex Implementation Prompt Draft (for after approval)

> **Pass 5C — Copy/CRO implementation. Copy strings only. No layout, CSS, media, claim, or structural changes.**
> Read `docs/superpowers/plans/<this plan once synced>` Sections 4–6 and apply exactly the copy marked READY/CONFIRMED. All four business decisions are resolved (2026-06-10): ProofMarquee re-wired between hero and PICK THE PIECE; MobileCtaBar homepage/about default → TEXT 2T → with "Hey 2T — I'm looking at pieces. What's available?" prefill; ProofContactZone uses the "not a call center" contrast line; FinalCTABar body "Shop what's in or send the idea. Either way — text 2T first."
> Scope: P0 items 1–6 and P1 items 7–14 from Section 9. P2 only if explicitly included.
> Hard rules: "25 years" wording exact; do not touch the Rolex disclosure, promo ticker, Acima block, ShineDirectionBand spec strings, hero H1/sub/CTAs, or memorial pendant copy; "Build/Send" verbs only on custom/process surfaces; one trust anchor per section; every WhatsApp prefill opens "Hey 2T — ".
> Also: remove dead `CATEGORY_DATA.chains`/`.pendants` entries and their `generateStaticParams` slugs in `app/collections/[category]/page.tsx`.
> QA per Section 11 before reporting. Report: files changed, strings changed (before→after table), claim-safety grep output, `git status --short`. Do not commit, push, or deploy — Yaniv reviews first.

## 13. Docs Update Note (after 5C is approved + implemented)

- `CLAUDE.md` — Current Active Task: mark Pass 5C implemented (commit hash), update homepage section list if ProofMarquee is re-wired/deleted; clear "Next queued work" line.
- `NEXT_ROADMAP.md` — close item 48 (Pass 5C), update Phase 5C status block.
- `AGENT_HANDOFF.md` — update "Current focus/milestone" paragraphs and Pass 5C references.
- `PROJECT_CONTEXT.md` — copy-voice section: record the "one trust anchor per section" rule and the SHOP/CUSTOM verb table as standing law.
- `docs/2t-voc-copy-system.md` — append the approved phrase bank deltas (Section 2) so future copy passes inherit them.
- New: `docs/superpowers/plans/2026-06-10-pass5c-copy-cro-plan.md` — persist this plan into the repo (currently it lives only in the Claude plans folder).

---

**Open decisions — ALL RESOLVED by Yaniv 2026-06-10:** ① ProofMarquee → re-wire with updated items. ② MobileCtaBar homepage CTA → TEXT 2T → with shop-neutral prefill. ③ ProofContactZone → use the "not a call center" contrast line. ④ FinalCTABar → "Shop what's in or send the idea." approved as drafted.