# 2T Jewelers — Architecture, Layout, Visual-Positioning & Copy-Direction Audit
**Type:** Strategy / architecture / UX-CRO / VOC research only. No code. No implementation files.
**Date:** 2026-05-30
**Live demo reviewed:** https://2finla.vercel.app (homepage + `/collections/chains` fetched 2026-05-30)
**Builds on (does not regenerate):** `2T_MASTER_PROJECT_SOURCE`, `PROJECT_CONTEXT`, `CLAIM_SAFETY`, `AGENT_HANDOFF`, `NEXT_ROADMAP`, `2t-voc-copy-system`, `2t-copy-swipe-map`, `2t-pass5b-competitor-backed-copy-research`, `2t-silver-moissanite-verified-claims-strategy-2026-05-29-EN`, `2t-growth-strategy-seo-cro-90day`, `2t-homepage-master-direction`.

> **Source tags used throughout:**
> **[project files]** = decided facts/rules from the source MD set (source of truth for state, claim-safety, brand).
> **[live demo]** = direct observation of https://2finla.vercel.app on 2026-05-30.
> **[external]** = fresh live web research (URLs + "as of" in Section 4).
> **[recommendation]** = strategic judgment on top of the above.
> **INTERNAL** = analysis for 2T only; never publish-facing.
> All copy strings, badges, nav labels, and SEO titles are written in **English** (U.S. website assets for Claude Code handoff).

> **Missing-file note:** The brief lists `2t-phaseb-shop-material-stone-architecture-2026-05-29.md` as a source. It was **not** in the uploaded set. Where Phase B1 detail is needed it is reconstructed from [live demo] + [project files]; this is flagged, not fabricated.

> **Update (2026-05-31 — post-commit 0e85b35):**
> User-confirmed business-level facts now on record: All 2T silver is 925 Sterling Silver. All 2T moissanite is D-color and VVS. These allow "925 Sterling Silver" and "D-color VVS Moissanite" in homepage direction copy (ShineDirectionBand). The homepage now includes the ShineDirectionBand and Product Wall cue under PICK THE PIECE. GRA-certified and GIA are still not confirmed. Per-piece badge layer still requires per-piece verification.

---

## 1. Executive recommendation

**One line:** Keep the current dual-path brand spine and the Midnight Icebox visual system; **win the SHOP lane by adding real product proof and a unified category architecture with material/stone shown as cross-cutting *lanes inside* categories (Option A) plus a light "Shop the Shine" direction module on the homepage (Option C)** — and explicitly **reject the two-buyer-lane split (Option B)** because it reintroduces the exact hierarchy/budget framing that `CLAIM_SAFETY` forbids and splits already-thin inventory.

**Recommended architecture:** **Option A + a light Option C module. Reject Option B.**
Product categories stay the primary doors (Chains / Pendants / Rings / Bracelets / Earrings / Grillz / Watches). Gold/Silver and Diamond/Moissanite appear as **visible parallel directions inside** each category and the custom flow (selectors today; filters + badges later) and as one homepage **"Shop the Shine"** direction strip — never as separate "premium vs accessible" buyer lanes and never as top-level nav doors.

**Visual system verdict: keep + refine (do not redesign).** [project files: homepage master direction is locked; do not reopen Hero/SHOP/BUILD]. The system is correct; the gap is proof and merchandising density, not aesthetics. Refine: harden the gateway tiles toward desire surfaces, add a Best-Sellers/New-Arrivals rail when real pieces exist, and elevate the existing material line into a real direction strip.

**The decisive finding — what actually makes the site feel "too custom-driven":** It is **not** the homepage balance (the homepage is already shop-first, ~60/40). It is that **the SHOP category pages are currently inquiry-direction funnels with zero products, zero prices, zero proof** — `/collections/chains` is a style/metal/stone *intake* page that ends in "Text 2T" / "Build Custom," exactly like custom [live demo 2026-05-30]. **SHOP and BUILD currently converge on the same WhatsApp inquiry.** So the distinction is cosmetic. **This CONTRADICTS the softer framing in `2t-silver-moissanite-...` §2 ("SHOP is weaker than BUILD")** — SHOP is not weaker, it is *absent as commerce*. Fixing this is the single highest-leverage move, and it is a **proof problem before it is an architecture problem.**

**Now vs. later:**

| Now (Next.js, no real product data) | After business answers (§15) | After real assets/inventory | Later Shopify |
|---|---|---|---|
| Elevate material line → "Shop the Shine" direction strip; confirm category material/stone selectors are uniform across all category pages; add **Best Sellers / New Arrivals as real-only** (hide until real); build empty badge/spec slot in code | Lock which materials/stones/grades/policies are sold; decide natural-vs-lab labeling; draft shipping/warranty | Real product photos + a handful of real in-stock pieces; product cards with verified badges; `/moissanite-jewelry` + `/sterling-silver` SEO pages; watches authentication framework | Metafields/metaobjects, storefront filters (material/stone/in-stock), PDP spec block, cert metaobject, cross-cutting smart-collections |

**What happens now vs later, in one line:** Now = make the existing inquiry pages feel like a *store* (direction strip + proof slots + at least one real featured piece path), not a redesign. Later = real catalog and scoped verified claims. **Do not over-engineer the architecture before there is anything real to shop.**

---

## 2. Current 2T diagnosis

**What the source files already establish:** Pittsburgh BANG / Midnight Icebox homepage is merged and locked; dual SHOP/BUILD paths; claim-safety well implemented; Pittsburgh real-store + over-30-years is the asymmetric advantage; real media is the biggest open gap [project files].

**Live-site assessment [live demo 2026-05-30]:**

*Homepage* — works well. `BUILT TO HIT.` + product-dense subhead, dual CTAs (`SHOP JEWELRY` / `BUILD CUSTOM →`), `BANG.` stamp, hybrid gateway (`PICK THE PIECE`: Grillz / Watches / Chains large + Pendants / Rings / Bracelets / Earrings small with one-line descriptors), a claim-safe promo strip (`ASK WHAT'S RUNNING NOW · DETAILS CONFIRMED PER PIECE · PROMO TERMS SHOWN ON ELIGIBLE PIECES` + WhatsApp prefill), the custom lane (`YOUR LOGO. YOUR NAME. YOUR PIECE.` + chips + `NO DEPOSIT TO START · WE QUOTE FIRST`), Pittsburgh ledger (`25 YEARS / 5TH AVE / 332 FIFTH AVE`), the material line `GOLD · SILVER · DIAMOND · MOISSANITE — Different shine. Different direction.`, and a social channel map (TikTok/Instagram/WhatsApp, real @2tjewelers links). The Pass 5C copy direction appears largely implemented. **This is good and on-brand.**

*Category pages* — this is the problem. `/collections/chains` [live demo 2026-05-30] is a long **inquiry-direction page**: hero `CHAINS BUILT TO HIT.`, a `PICK YOUR STYLE` chip set (Cuban/Rope/Tennis/Franco/Figaro/Iced-Out + Yellow/White/Rose Gold/Silver/Not Sure), a `MATERIAL DIRECTION` block (METAL: Gold/Silver/Not Sure; STONE: Diamond/Moissanite/No Stones/Not Sure), a `PICK THE DIRECTION` (style/weight+width/pendant pairing) block, a claim-safe `SPECIAL OF THE WEEK`, a `BUILD THE FULL PIECE` custom bridge, and a `START THE CONVERSATION` text CTA. **There are no products, no prices, no images, no "see what's in stock" — the entire page funnels to WhatsApp/custom.**

**What works:**
- Brand spine, hero, dual-CTA, BANG. stamp, Pittsburgh proof, claim-safety, WhatsApp-first conversion plumbing (prefilled messages everywhere). All correct.
- **Phase B1 material/stone direction selectors on category pages are claim-safe and well-built** — Gold/Silver + Diamond/Moissanite as parallel direction chips with "Different shine. Different direction. Details confirmed per piece." This is the right pattern and validates the Option A direction.
- The category pages are *genuinely useful* as guided-inquiry funnels for custom and made-to-order — better than a fake catalog with invented prices.

**What feels too custom-heavy / where SHOP is not strong enough:**
- SHOP has **no merchandising surface**. A buyer who lands on `/collections/chains` cannot see a single chain. Every action is "tell us / text us." That is an inquiry page wearing a category label. **Is SHOP JEWELRY strong enough? No — because it is not yet shopping.**
- The two paths are functionally one path (WhatsApp). The homepage promises "Shop it or build it," but both resolve to the same conversation. The buyer who wanted to *browse and buy a regular piece* hits a wall.

**What the Silver/Moissanite additions changed [live demo + project files]:** They are present and correct as *direction* (homepage material line; category METAL/STONE selectors) — claim-safe, no hierarchy, no budget language. But Silver/Moissanite still have **no conversion surface of their own** (no `/moissanite-jewelry`, no `/sterling-silver`, no filter, no badge layer). They are "named, not merchandised" — the same gap flagged in `2t-silver-moissanite-...` §2, still true today.

**Current risks:**
- **Proof vacuum.** With no product media and no real in-stock pieces, the site cannot answer the buyer's #1 fear ("is it legit / is it real / will it hit") with anything but words. [VOC: §3]
- **Cosmetic SHOP/BUILD split** undercuts the core thesis ("not custom-only") because shopping does not yet exist.
- **Best Sellers / New Arrivals exist as routes** but must never be populated with invented inventory [CLAIM_SAFETY]. Empty/placeholder versions are a thin-content + trust risk.
- **Watches** remain an inquiry shell with no authentication/modification framework — the single highest legal-risk category (§14).

---

## 3. Buyer and VOC insight

**What the source files already establish:** A detailed VOC system exists [`2t-voc-copy-system`, `2t-copy-swipe-map`, Pass 5B §9]. Core tension: *"I want it to hit"* vs *"don't scam me — don't say diamond if it's CZ/moissanite, don't say gold if it's plated."* Use phrases: *send the photo / send the logo / ask what's in stock / we quote before the build / no deposit to start / real Pittsburgh store / details confirmed per piece.* Avoid boutique ("curated/elevated"), corporate ("submit your inquiry"), parody slang ("drip so crazy/for the culture"), and unverified claims. Treat Gold/Silver/Diamond/Moissanite as four parallel directions.

**Net-new VOC, reconciled against existing docs (extend, do not duplicate) [external 2026-05-30]:**

**Words that excite (confirmed still live across the market):** "iced out," "VVS," "pass tester," "GRA-certified," "bust down," "Miami Cuban," "925," "real," "solid," "D color," "hits under lights / in music videos / on camera." Across IceCartel, Adamans, Harlembling, CustomHipHop, Gemistone, and dozens of eBay sellers, **the highest-engagement product nouns are stone-grade + chain-style + metal-purity strings** ("D VVS1 Moissanite 925 Miami Cuban"). 2T can use the *style and purity* words freely (claim-safe per piece) and must avoid the *diamond-conflation* words.

**Words that build trust:** "real store / real jeweler," tenure ("decades / over 30 years"), "we manufacture our own / we control the build" (Harlembling's strongest trust lever), "stamped 925 / won't turn green," "GRA cert ships with the piece," "passes tester" (the market's trust proxy — see risk note below), direct human contact, condition stated plainly on watches. 2T's owned versions: **"Real Pittsburgh store. 25 years. Text before you buy. Details confirmed per piece."**

**Words that sound fake / corny (avoid):** "shine like all the successful rappers and celebrities" (GUU), "rule the scene," "dazzling alternative to diamonds," "diamond-like bling at a fraction of the cost," "luxury redefined," generic "premium." Also any borrowed celebrity name-drop (Harlembling's "Drake and 50 Cent asked where I got it" is unverifiable claim theater — do not imitate).

**Words that create claim risk (the market's default — 2T's differentiator to NOT copy):** "moissanite diamond," "VVS moissanite diamonds," "simulated diamond," "passes the diamond tester" *as a trust claim*, "fraction of diamond cost," "rival natural diamonds," "looks like a diamond," "affordable alternative." **Fresh confirmation: this language is essentially universal** in the moissanite hip-hop segment (IceCartel, Adamans, Gemistone, CustomHipHop, labdiamondfactory, and the entire eBay long tail all use it) [external 2026-05-30]. **This UPDATES `2t-silver-moissanite-...` §1 with stronger evidence:** the forbidden language is not a fringe pattern, it is the category norm — which makes 2T's stricter rule a *more* visible premium/trust differentiator, not less.

**How Silver/Moissanite reads as a win, not a downgrade [recommendation, builds on existing rule]:**
- **Sell the aesthetic and performance, never the price gap.** Moissanite = "real fire, built big, holds shine under light." Silver/925 = "solid, stamped, won't tarnish, built to wear." Both are *icy by choice*, not *cheaper by default*. (Harlembling is the positive market model: silver framed as solid, hallmarked, manufacturer-controlled — never as "budget.")
- **INTERNAL:** Silver/Moissanite are the mass-market accessibility and volume engine — they let a buyer get the iced look at an entry the gold/diamond buyer skips. **This is internal margin/volume logic only. It is never published.** Publish-safe version: "Gold or silver. Diamond or moissanite. Different shine. Different direction."

**Objection → response map (reconciled, still current):** Is it legit? → *Real Pittsburgh store. 332 Fifth Ave. Text before you buy.* Real diamond or CZ/moissanite? → *Stone details confirmed per piece. Ask before you buy.* (Honest, confident — name moissanite when it's moissanite.) Solid or plated? → *Material confirmed per piece.* Will it fit (grillz)? → *Custom grillz start with the fit. Text us and we'll walk you through it.* Will they answer? → text-first everywhere + (later) a stated response expectation when a policy exists.

---

## 4. Competitor research table

**What the source files already establish:** Pass 5B deep-dived 13 brands + 11 tier-2 (2026-05-23); the silver/moissanite file added FTC + 8 material/claim sources (2026-05-29). **This table reconciles those and adds fresh 2026-05-30 verification + net-new sources.** Each row is point-in-time — **sites change; treat every "as of" as a snapshot.** Carried-forward rows are tagged with the project research date and marked *(carried)*; freshly verified rows are tagged 2026-05-30.

> Legend — **Shop/Custom**: how shop vs custom is structured · **Ag/Au/Dia/Moi**: silver / gold / diamond / moissanite presentation · **Promo**: promo mechanics · **CTA**: dominant CTA verbs · **Learn / Avoid** · **Risk**: claim-safety risk to 2T if copied.

| # | Source · URL · as of | Audience / category | Shop vs Custom structure | Silver | Moissanite | Gold / Diamond | Promo mechanics | CTA language | Visual / layout | 2T should LEARN | 2T should AVOID | Claim-safety risk |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **GLD** · gld.com · **2026-05-30** | Mass DTC street jewelry | Catalog-first; "Design your own / made to order" custom; pendants merchandised by **theme** (spiritual, animal, hip-hop, emoji, Marvel, sports) | Vermeil + plated disclosed | Limited (diamond/lab focus) | "Gold plated, solid gold, and vermeil options available" — **material disclosed plainly** | BOGO, 30–60% off, **GLD Vault** clearance, **GLD VIP $29/mo→store credit**, GLDGang, stackable codes, popups, Rolling Loud collab | "Shop", "Design your own", "Build your" (custom only) | Dense, promo-banner heavy, theme merchandising | Material disclosure (plated/solid/vermeil); theme-based pendant merchandising; custom pairing guidance | Promo saturation; $29/mo VIP gate; celebrity/collab proof; blanket guarantee | High if promo/guarantee/celebrity copied |
| 2 | **Icebox** · icebox.com · 2026-05-23 *(carried)* | Premium Atlanta store | High-ticket inquiry custom (deposit, weeks); showroom + phone + WhatsApp | — | — | "Natural Diamond And Real Gold" **as brand position** (verified claim as identity) | Price-bracket filtering; institution trust | Phone CTA; "Shop Now"; "Start Designing" | Editorial, high-ticket | Verified material claim as identity; price-bracket filters; real WhatsApp | Soft/aspirational tone; bridal lean | Low (claims are real for them) |
| 3 | **Johnny Dang & Co.** · johnnydangandco.com · 2026-05-23 *(carried)* | Celebrity custom + grillz | Phone-CTA + "Book Appointment"; grillz spun to its own brand | — | — | "Redefining iced-out luxury" | Appointment; celebrity proof | Phone number; "Book"; "Shop" | Legend-led | Appointment framing; grillz as headline category; phone prominence | Celebrity/"King of Bling" proof 2T hasn't earned | High if celebrity proof copied |
| 4 | **TraxNYC** · traxnyc.com · 2026-05-23 *(carried)* | NYC mass catalog + custom | Catalog + "Start Custom Project" + "Browse Previous Projects" + "Make Offer" | "silver chain" SEO strength | — | "gold chain" SEO strength | "Call/Text for VIP Concierge"; AI designer tool | "Start custom"; "Browse"; "Make offer" | Sprawling IA | "Browse previous projects" as custom trust; text/call CTA; "make offer" on high-ticket | Sprawling menu; celebrity proof; AI gimmick | Medium (celebrity) |
| 5 | **King Ice** · kingice.com · 2026-05-23 *(carried)* | Streetwear/licensing hybrid | Catalog + collabs; Jewelry 101 education; strong on "chain / cuban / grillz" generic terms | Listed | Listed | Standard | Campaign hero rotation; "Lifetime Warranty on all Jewelry" (blanket); collection stamps | "Shop"; collab CTAs | Campaign-led | Culture fluency; grillz prominence; education content | Collab-dependent identity; blanket lifetime warranty | High (blanket warranty) |
| 6 | **Frost NYC** · frostnyc.com · 2026-05-23 *(carried)* | Category-deep urban | Deep pendant taxonomy: Gold / Diamond / **Silver** / Plated / Custom + chain+pendant | **Silver as its own pendant taxonomy branch** | — | "14k/18k solid gold" in body copy; karat specifics | Affirm/Acima/Progressive financing; "lifetime warranty + upgrade"; buy-back | "Shop"; "Sell your jewelry" (hero) | Taxonomy-dense | **Pendant taxonomy depth incl. Silver as a branch**; karat specifics in copy (not headline); financing options | "Sell your jewelry" as hero CTA (wrong stage for 2T) | Medium |
| 7 | **Aporro** · aporro.com · 2026-05-29 *(carried)* | Social-first moissanite DTC | Catalog + custom | 925 base | "**VVS \| VERIFIED**" per-product stamp; GRA/GIA/IGI logos; D–F grade | Cert logos in trust strip | **Gift-tier promo** (spend $X → free item) instead of straight discount; loyalty points; "365-Day Warranty" | "Shop"; "Design Yours" | Clean, badge-led | **Per-product VERIFIED stamp = the badge-architecture model for 2T**; gift-tier as non-discount promo | "Celebrity approved"/"1M+ customers"/"way less cash"/budget framing | Medium-high (budget framing) |
| 8 | **IceCartel** · icecartel.com · **2026-05-30** | NYC moissanite | Pre-designed + custom letters/words; in-house cut | "finest 925 sterling silver" | **"VVS moissanite diamonds," "always pass testers," "rival natural diamonds"** | "14K gold" | "24-hour delivery"; ICECARTEL GUARANTEE (free repair on defect); press wall; celebrity wall | "Shop now" | Loud, busy | Named repair guarantee as product policy; loud-but-premium possible; press-strip architecture | **"Moissanite diamonds," "pass testers," "rival natural diamonds," "cheap hip hop jewelry," "24h delivery" blanket** | **Critical** (FTC conflation + blanket) |
| 9 | **Adamans** · adamans.com · **2026-05-30** | Moissanite hip-hop | Pre-designed + custom letters/words | 925 | **"VVS moissanite diamonds," "premium," "exceptional value," "durability"** | "14K gold (white/yellow/rose)" | "affordable hip hop jewelry"; GRA cert per piece | "Browse" | Catalog | GRA cert per piece as proof; "premium" framing without budget words elsewhere | "Moissanite diamonds," "affordable," value-vs-diamond framing | **Critical** (conflation + budget) |
| 10 | **HipHopBling** · hiphopbling.com · **2026-05-30** | Mass hip-hop | Catalog; carat/mm spec depth; loose-stone options | ".925" / vermeil = "more affordable precious metal" | "D-Color VVS," "25% OFF all Moissanite" code | "10k/14k"; "10–30% of diamond's price" | Code-driven % off (e.g., SPRING 25%); free-jewelry offers | "Shop now" | Mass, spec-dense | Clear material taxonomy (.925/10k/14k); carat/mm spec discipline | **Explicit budget framing** for moissanite + vermeil ("fraction of price") | **Critical** (budget) |
| 11 | **Harlembling** · harlembling.com · **2026-05-30** | Hip-hop NYC | Catalog + custom; **manufactures own** | **"Solid 925 silver — won't turn green; real precious metals; Italian-made"** — silver as a *positive, real* material | "moissanite Cuban… shines under lights/cameras" | "genuine gold finishes"; vermeil = 14k over 925 | Honest-pricing positioning; manufacturer story | "Shop" | Story-led | **The positive silver model: solid, hallmarked, manufacturer-controlled, never "budget"**; "we make our own" trust | "looks just like real diamonds," unverifiable celebrity name-drops | Medium (looks-like-diamond) |
| 12 | **CustomHipHop** · customhiphopofficial.com · **2026-05-30** | Silver/925 + moissanite | Catalog; pendants fit-to-chain ("fit for 4MM tennis") | "Solid Silver / 925 Sterling Silver" standard base | "GRA Certificated Moissanite Diamond," "VVS" | Gold-plated finishes (white/yellow/rose) | 25% off sale pricing | "Shop" | Catalog | 925 as the standard base; **pendant-to-chain pairing spec** ("fits 4MM"); plating finishes named | "Moissanite Diamond" conflation | High (conflation) |
| 13 | **The GUU Shop** · theguushop.com · **2026-05-30** | Mass hip-hop + apparel | Catalog by category **and by stone** — collections include **Moissanite, No-Stone, Tennis, Cuban** + **"ByDesign" themes** (Animals, Jesus, Heart, Emoji) + "Design Your Own" | Listed | **Moissanite as a collection door** | 18k gold-plated + CZ heavy; "100% genuine diamonds" (questionable) | Code "CRAZY20" 20% off; lifetime warranty; free express shipping; 30-day returns | "Shop"; "Design Your Own" | Dense, review-count heavy | **Stone-type + design-theme as merchandising doors**; "Design Your Own" custom split; "No-Stone" as a legit filter | Blanket lifetime warranty + free shipping + "genuine diamonds" on plated/CZ | **Critical** (blanket + mislabel) |
| 14 | **The Gold Gods** · thegoldgods.com · **2026-05-30** | Streetwear jewelry | Catalog by category (rapper chains, pendants) | — | — | Gold-plated | **"Lifetime warranty on entire collection, no questions asked"; "FREE SHIPPING all US orders"; "#1 streetwear retailer"** | "Shop" | Streetwear-led | Streetwear energy; category clarity | **Blanket lifetime warranty + blanket free shipping + #1 claim** | **Critical** (blanket) |
| 15 | **HelloIce** · helloice.com · 2026-05-23 *(carried)* | Miami DTC storytelling | Catalog + "Design Yours" | — | "VVS1 Moissanite" explicit per product | Standard | BOGO + % off dual promo; emotional hero | "Design Yours"; "Shop" | Story hero | Explicit stone-type labeling per product | BOGO dependency; soft emotional hero | Medium |
| 16 | **JAXXON** · jaxxon.com · 2026-05-23 *(carried)* | DTC chains/basics | Catalog; dedicated `/collections/flash-sale` | — | — | Standard | **Weekly flash sale (structural urgency, no fake timer)**; "100,000+ 5-Star Reviews"; **"OUTLAST. OUTSHINE.™" stamp** | "Shop"; "Most Trusted Men's Chains" | Clean, trust-led | **Flash-sale weekly cycle as honest urgency; "OUTLAST. OUTSHINE.™" = the closest model to BANG.**; "Most Trusted" trust hero | Corporate-neutral tone; women/youth crossover | Low |
| 17 | **Avianne & Co.** · avianneandco.com · 2026-05-23 *(carried)* | NYC diamond + custom | Catalog + photo-pendant upload; per-product spec | — | — | "Natural diamonds" vs "Lab diamonds" **explicit labeling**; VS1/VS2/G/H per product | Seasonal | "Upload your picture"; "Shop" | Spec-led | **Photo-pendant upload as hero device; lab-vs-natural explicit labeling; per-product diamond spec** | Bridal lean | Low |
| 18 | **Gold Presidents** · goldpresidents.com · 2026-05-23 *(carried)* | Custom + real gold DTC | Catalog + 6-subcat custom; **material-as-collection-name** ("Real Solid Gold," "10k Gold") | — | — | "Real Solid Gold / 10k" as nav taxonomy | Brand-partner collections | "Shop"; "Customize" | Material-led nav | Material-as-collection-name approach; custom subcategory depth | Apparel/shoes crossover dilutes; gmail support email (trust downgrade) | Low-medium |
| 19 | **ItsHot** · itshot.com · 2026-05-23 *(carried)* | NYC showroom + online | Catalog + "Start Your Custom Project"; by-appointment | — | — | "Real gold / Real Diamond" brand position; "Since 2005" | **Countdown timer ("HURRY!! ONLY [mm:ss]")** | "Start Your Custom Project"; "Shop" | Showroom | "Since 2005" tenure; showroom appointment hybrid | **Fake countdown timer — the exact anti-pattern** | High (fake urgency) |
| 20 | **Moses NYC** · mosesnyc.com · 2026-05-23 *(carried)* | Prestige inquiry-led | **Inquiry-only ("INQUIRE"), no prices** | — | — | "Curated Luxury Since 2005" | None visible | "INQUIRE" | Restrained, full-bleed | High-ticket inquiry model; "Curated Luxury Since [year]" stamp | Quiet/boutique tone (too soft for 2T); "private" framing | Low |
| 21 | **Gemistone** · gemistone.com · **2026-05-30** | Moissanite hip-hop | Catalog by category + custom initials | "Silver ICP…" lines | "Moissanite Grillz / Watches / Chains" full moissanite catalog | "Yellow Gold Plated" | Holiday/seasonal content | "Shop" | Catalog | Full moissanite category breadth incl. moissanite grillz/watches | Diamond conflation; "biggest store" claim | High (conflation) |
| 22 | **Solomon & Co.** · solomonjeweler.com · **2026-05-30** | Moissanite custom | Custom-config (carat/metal/shape chooser) + catalog | "gold-plated 925 sterling silver" | "VVS Moissanite," shape options (oval→marquise) | "10K/14K/18K gold (rose/white/yellow)" | — | "Get more info"; "Customize" | Config-led | **Custom configurator (carat/metal/shape) pattern**; clean per-piece spec | "affordable gold-plated"; "VVS Moissanite" without scope | High (budget + scope) |
| 23 | **JewelryFresh** · jewelryfresh.com · **2026-05-30** | Mens hip-hop + watches | Catalog | "925 silver" | "VVS Moissanite" | "solid gold or thick plated"; "Genuine Natural Diamonds" | — | "Shop" | Catalog | **Clean honest material taxonomy stated plainly**: "925 silver, solid gold, or thick plated base; stones are 5A CZ, VVS Moissanite, or Genuine Natural Diamonds" — transparent per-piece material disclosure | Lists CZ (2T does not sell CZ) | Low-medium |
| 24 | **eBay moissanite long tail** · ebay.com (multiple sellers: goodjewelry, truetrust, lipengwei, Morf, etc.) · **2026-05-30** | Mass moissanite | Marketplace listings | "925 Sterling Silver" standard | "D Color VVS1," "GRA," "**Passes Tester / Pass Diamond Tester**" | "14k/18k gold plated"; "Simulated Diamond" | 22–50% "was/now" markdowns; "X sold / X watching" social proof | "Buy"; "Make offer" | Listing grid | **Real price anchors**: silver+moissanite Cuban $180–$700; tennis $150–$350; rings $30–$70 | "Passes tester," "Simulated Diamond," "Moissanite Diamond," fake was/now anchors | **Critical** (conflation + fake anchors) |
| 25 | **labdiamondfactory / wholesale** · labdiamondfactory.com · **2026-05-30** | Moissanite wholesale | B2B wholesale | "925 silver gold-plated" | "dazzling alternative to diamonds," "pass the diamond tester," "VVS clarity," moissanite grillz | "fraction of the cost" | Bulk | "Wholesale" | B2B | Confirms supply chain norms (GRA, 925, plating) | **Every forbidden frame at once** ("alternative," "fraction of cost," "pass tester," dental claims on grillz) | **Critical** (full anti-pattern) |
| 26 | **FTC — Jewelry Guides + "In the Loupe"** · ftc.gov/business-guidance/resources/loupe-advertising-diamond-gemstones-pearls · 2026-05-29 *(carried)* | Regulation | — | Disclosure rules | "Diamond" alone = mined; moissanite must be named/disclosed; valid: laboratory-created, simulated, imitation | Natural-vs-lab disclosure required | — | — | — | **The legal baseline for every claim**; clear & conspicuous disclosure | Treating "diamond" as OK for moissanite/lab without disclosure | — (this is the rulebook) |
| 27 | **Rolex v. BeckerTime (5th Cir. 2024)** · thefashionlaw.com/appeals-court-delves-into-modified-watches-in-rolex-v-beckertime-trademark-case · 2026-05-29 *(carried)* | Case law / watches | — | — | — | Aftermarket diamonds/bezel = "watch of another make"; brand name without sufficient disclosure = infringement (disclaimer "not always sufficient") | — | — | — | **Defines the gate for any watch authentication / "factory-set" claim** | Brand names on iced watches; "factory-set"/"100% authentic" on aftermarket | **Critical** (Lanham Act) |
| 28 | **Gold vermeil standard (FTC)** · simpleanddainty.com/blogs/guides/what-is-gold-vermeil · 2026-05-29 *(carried)* | Material standard | — | Vermeil = ≥10k, ≥2.5µm over 925 | — | "Gold" alone on vermeil = violation | — | — | — | Exact definition for any vermeil / "gold over silver" claim | Labeling plated/vermeil as "gold" | High if undisclosed |
| 29 | **Pittsburgh locals** · diamondsbyrothschild.com · hennejewelers.com · trinityjewelers.com · skeltonjewelry.com · 2026-05-23 *(carried)* | PGH fine/bridal | Traditional fine/bridal; appointment | — | — | Natural diamond / bridal | Traditional | "Book"; "Visit" | Fine-jewelry | **Confirms 2T's uncontested local opening: zero local hip-hop/street-luxury/grillz competitors** | Bridal/quiet tone | Low |
| 30 | **Tier-2 mass / specialist** · hiphopbling.com · 6ixice.com (6ICE) · bigheadcustom · blingcartel.com · customgoldgrillz.com · iceatl.com · vvsjewelry.com · 2026-05-23 *(carried)* | Mass / grillz / custom-logo | Mix of catalog, subscription (VVS Jewelry), logo-submit (BigHead), grillz process (Bling Cartel, Custom Gold Grillz) | Varies | Varies | Varies | Varies | "Submit your logo" (BigHead); "Tap in" (IceATL) | Varies | **"Submit your logo" direct-custom CTA (BigHead); grillz fit-process education (Custom Gold Grillz, Bling Cartel)** | Mold-kit/fit-guarantee claims (grillz); subscription gimmick | Medium (grillz fit) |

**Cross-table conclusion [recommendation]:** (a) **Category-first navigation with material/stone as a cross-cutting filter/collection is the dominant credible pattern** (GLD, Frost, JAXXON, Avianne); a few use stone-type as a *collection door* (GUU's Moissanite/No-Stone; everyone's `/moissanite-hip-hop-jewelry`) but **almost always wrapped in forbidden language**. (b) **No credible brand splits its whole store into a "premium gold/diamond lane" vs a "budget silver/moissanite lane"** — that split does not exist in the market because it signals hierarchy, which kills the moissanite buyer's pride of purchase. That is direct evidence against Option B. (c) The **per-product VERIFIED badge (Aporro)** and **honest silver/material disclosure (Harlembling, JewelryFresh, GLD)** are the models to adopt; the **fake urgency (ItsHot), blanket warranty/shipping (Gold Gods, GUU, King Ice), and diamond-conflation (the entire moissanite segment)** are the models to reject.

---

## 5. Architecture options

**What the source files already establish:** Material/stone should be **parallel directions, not a hierarchy**, and (per `2t-silver-moissanite-...` §7) **not** top-level nav doors — they belong in the homepage strip, custom selectors, later filters, and SEO pages. Product categories (Chains/Pendants/Rings/Bracelets/Earrings/Grillz/Watches/Best Sellers/New Arrivals) are the doors [project files].

**Decision criterion (from the brief):** *the winning architecture is the one that most increases regular SHOP JEWELRY purchase/inquiry intent WITHOUT diluting custom or breaking claim-safety.* Scored 1–5 (5 = best).

### Option A — Unified shop: categories first, material/stone as visible lanes *inside* categories
Product categories are the primary doors; Gold/Silver and Diamond/Moissanite appear as visible parallel chips/filters within each category and the custom flow (selectors today, filters + badges later).
- **Pros:** Matches how credible competitors merchandise; preserves the four-parallel rule; one taxonomy to maintain; lets a buyer enter by *what they want to wear* (a chain) and then choose shine. Lowest claim-safety surface. Already half-built (the Phase B1 METAL/STONE selectors on `/collections/chains` are exactly this).
- **Cons:** Material/stone discovery is one click deeper than a dedicated door; needs strong in-category contrast so Silver/Moissanite don't read as afterthoughts.
- **Conversion impact:** High — buyers shop by piece type first (VOC: "I want a Cuban / a pendant"), shine second.
- **Claim-safety impact:** Best — material/stone claims live at product level inside categories; no sitewide claim implied.
- **SEO impact:** Strong — category pages + later `/moissanite-jewelry` & `/sterling-silver` as *supplementary* indexable pages (not the primary architecture).
- **Design impact:** Fits the locked Midnight Icebox system; no redesign.
- **Implementation complexity:** Low (now: confirm selectors uniform across all category pages; later: filters/badges).
- **Score vs criterion: 5/5.** Maximizes shop intent, does not dilute custom, claim-safe.

### Option B — Two separate commercial buyer lanes (Lane 1: Gold/Diamonds/higher-ticket · Lane 2: Silver/Moissanite/accessible iced-out)
Two parallel "shops," one premium, one accessible.
- **Pros:** Could simplify a buyer's price expectation up front; mirrors how INTERNAL margin logic actually segments.
- **Cons (decisive):** (1) **Directly reintroduces hierarchy** — a "Silver/Moissanite lane" reads as the budget lane no matter the copy, which **breaks the core no-hierarchy rule** [CLAIM_SAFETY, PROJECT_CONTEXT]. (2) **Splits already-thin/zero inventory** across two storefronts. (3) **Doubles the claim-safety surface** (two trust strips, two sets of material claims). (4) **No credible competitor does this** (§4 conclusion) — the market sells *moissanite by category*, not *moissanite as the cheap wing*. (5) Fights the buyer's mental model (people shop by piece type, then shine).
- **Conversion impact:** Net negative — adds a price-coded fork before desire is built.
- **Claim-safety impact:** Worst — institutionalizes the budget framing 2T forbids.
- **SEO/design/complexity:** Most complex, most redesign, highest drift risk.
- **Score vs criterion: 1/5.** **Reject.** It is a taste/segmentation idea that loses on the actual criterion.

### Option C — Hybrid homepage: strong categories + a visible "Shop by Shine Direction" module
Keep Option A's category-first taxonomy and add **one homepage module** that lets a buyer enter by shine/material direction (Gold · Silver · Diamond · Moissanite) as an *alternate entry*, not a separate store.
- **Pros:** Surfaces Silver/Moissanite as equal, confident directions on the homepage; gives the "I want iced/silver" buyer a fast door without a budget lane; **elevates the asset already on the page** (the `GOLD · SILVER · DIAMOND · MOISSANITE` line).
- **Cons:** Until those direction links lead somewhere real (a filtered view or a real SEO page with inventory), the module is a promise without a destination — so it should ship now as a **direction *statement*** and become clickable only when filters/pages exist.
- **Conversion impact:** Medium-high once destinations exist; positive brand/positioning signal even now.
- **Claim-safety impact:** Safe if it stays *direction* ("Different shine. Different direction. Details confirmed per piece.") with no grade/purity claim.
- **SEO/design/complexity:** Low now (copy/layout only); medium later (filtered destinations).
- **Score vs criterion: 4/5 as a complement to A; not a standalone architecture.**

**Verdict:** **Option A is the architecture. Option C is a homepage layer on top of it. Option B is rejected.** This is consistent with — and sharpens — `2t-silver-moissanite-...` §7 (material as cross-cutting, not nav doors): the brief's Option C "Shop by Shine Direction" module is endorsed as the homepage expression of that same rule.

---

## 6. Homepage recommendation

**What the source files already establish:** Homepage is locked (Pittsburgh BANG / Midnight Icebox); order = Hero → trust strip → featured shop gateway → secondary rail → custom split → promo slot → Pittsburgh proof → social → final CTA; shop ~60/40 over custom; `BUILT TO HIT.` and dual CTAs stay; `Ask what's running now` lives in the promo slot, not the hero [`2t-homepage-master-direction`, Pass 5B]. **Do not reopen the homepage redesign.**

**Net-new recommendations [recommendation], all additive and claim-safe:**

1. **Add a "Shop the Shine" direction strip (Option C), elevated from the current material line.** Today `GOLD · SILVER · DIAMOND · MOISSANITE` sits inside the Pittsburgh/About block. Promote it to a small standalone band between the gateway and the promo module: `SHOP THE SHINE — Gold · Silver · Diamond · Moissanite. Different shine. Different direction.` Non-clickable text now; becomes 4 links when filters/SEO pages exist. This raises Silver/Moissanite to equal homepage status **without** a budget lane.
2. **Do NOT add "Shop by Shine" as navigation** — it is a homepage module only (consistent with §7 and `2t-silver-moissanite-...`).
3. **Move the shop gateway's desire up, not its position.** Keep the gateway where it is; harden the three anchor tiles (Grillz / Watches / Chains) toward **desire surfaces** (texture/crop/display-case framing per the master direction) so the first post-hero block sells product energy, not navigation. The descriptors are already good.
4. **Custom: reposition, do not reduce.** Custom stays the second major lane. But because category pages currently *are* custom funnels (§2), the homepage custom block should be reframed slightly so it doesn't double the custom message — keep it as the "have an idea / logo / photo" lane, distinct from "shop a known piece."
5. **Promo slot stays where it is, copy stays claim-safe.** `ASK WHAT'S RUNNING NOW` is the correct floor. Upgrade only to the 3-state system (Pass 5B §6) when a real featured piece exists.
6. **Required visual changes:** none structural. Refinements only — desire-tile treatment on the gateway, the new direction strip, and (later) a real Best-Sellers/New-Arrivals rail. **Do not** add the rail with invented inventory.

**One-line homepage verdict:** The homepage is right; add the "Shop the Shine" direction strip, harden the gateway tiles into desire surfaces, and hold everything else until real media/inventory arrives.

---

## 7. Navigation recommendation

**What the source files already establish:** Current nav [live demo] = `Shop ▸ (Chains/Pendants/Bracelets/Rings/Earrings) · Grillz · Custom Jewelry · New Arrivals · Best Sellers`; secondary row `Custom · Grillz · Watches · About`. Material/stone are **not** nav doors [`2t-silver-moissanite-...` §7].

**Recommendations [recommendation]:**

- **Gold / Silver / Diamond / Moissanite: NOT nav items, NOT dropdown items, NOT separate doors.** Keep them as **(a) in-category direction chips/filters** and **(b) the homepage "Shop the Shine" strip**. This is the single most important nav decision and it is already correct — protect it.
- **Watches belongs in the primary nav, not only the secondary row.** It is a priority-2 category [PROJECT_CONTEXT] and a high-ticket inquiry driver; today it sits only in the secondary row. Promote it into the primary `Shop`/inquiry set (as an inquiry item, alongside Grillz). *(UPDATES the current nav, which under-weights Watches.)*
- **Resolve the Custom duplication.** `Custom Jewelry` appears in the primary nav and `Custom` in the secondary row — redundant. Keep one prominent custom entry.
- **Best Sellers / New Arrivals stay in nav as routes but render real-only.** If no real inventory/sales exist, the page should be an honest inquiry hub ("Ask what just landed / Ask what's moving"), never invented best-sellers [CLAIM_SAFETY].
- **What should NOT enter nav yet:** material/stone doors; `/moissanite-jewelry` & `/sterling-silver` (build as pages first, add to nav only once they have real inventory); any "Sale" door (no verified sitewide offer); Sunglasses/Accessories (until the business confirms).

---

## 8. SHOP JEWELRY recommendation

**What the source files already establish:** "Build" language is for custom only; catalog uses Shop/See/Ask/Text; no fake products/prices/inventory/best-sellers/reviews [project files]. Category descriptors are defined (Pass 5B §7).

**The core problem to fix (net-new diagnosis):** SHOP JEWELRY is currently **inquiry-direction pages with no merchandising** (§2). Strengthening "regular-item sales" means giving SHOP an actual surface, in safe stages:

1. **Stage 1 — now, no assets:** Keep the guided-direction pages (they are good for made-to-order and custom-adjacent inquiry) but **add a real "what's available" path** that is honest: a short "Ask what's in stock now" inline module with a WhatsApp prefill *per category* (chains prefill already exists — extend the pattern). This converts the inquiry into a transaction conversation faster. Add the empty **product-card/badge slot in code** so there is somewhere to drop real pieces.
2. **Stage 2 — after 1–N real pieces + photos exist:** Show **real in-stock pieces as product cards** (image + short descriptor + `Details confirmed per piece` + `[14K GOLD]`/`[925 STERLING]`/`[GRA VVS MOISSANITE]` badges *only when verified* + `TEXT 2T ABOUT THIS PIECE`). Even 4–8 real pieces per category turns a funnel into a store. **Best Sellers / New Arrivals populate only from real pieces.**
3. **Stage 3 — Shopify later:** Filters by material (Gold/Silver) and stone (Diamond/Moissanite) + in-stock; PDP spec block.

**How to keep Gold/Silver/Diamond/Moissanite visible:** the in-category METAL/STONE direction chips (already live) + product badges (later) + the "Shop the Shine" homepage strip. **No separate silver/moissanite store** (Option B rejected).

**How to avoid fake inventory:** never invent products, prices, counts, or best-sellers; empty categories stay inquiry hubs; "in stock" only from confirmed live inventory; product cards appear only with real photos [CLAIM_SAFETY].

**Category-specific:** **Grillz** stays inquiry-first (fit conversation; no dental/fit/FDA claims). **Watches** stays inquiry-first + needs the authentication/modification framework before any product card (§14). **Chains/Pendants/Rings/Bracelets/Earrings** are the categories that can become real product surfaces fastest. **Pendants** should carry the dual treatment (shop a ready pendant *and* "send your idea") — the one category that legitimately bridges shop and custom.

---

## 9. Custom recommendation

**What the source files already establish:** Custom is "the dream"/the margin lane and must stay strong, but the site must not feel custom-only; two equal paths [PROJECT_CONTEXT]. `/custom` flow is simplified (Pass A), build passes, not user-approved final.

**Is custom too dominant? [recommendation]:** On the **homepage**, no — it is correctly secondary (~40%). **Across the site, yes — by default**, because the SHOP pages currently *behave* like custom funnels (§2). So the fix is not to weaken custom; it is to **give SHOP a real surface** so custom stops being the only thing that actually happens. Custom dominance is a *symptom* of SHOP's emptiness.

**How to keep custom strong without making the whole site feel custom-only:**
- Keep the custom lane's distinct identity: **idea-led** ("logo / photo / name / number / sketch") vs SHOP's **piece-led** ("a Cuban, a tennis chain"). Different entry, different language ("Build" for custom; "Shop/Ask" for catalog).
- Keep the planned **METAL/STONE direction selectors** in the custom form (Gold/Silver, Diamond/Moissanite, plus "No stones"/"Not sure") with no ranking, no "(cheaper)/(premium)" labels [PROJECT_CONTEXT, `2t-silver-moissanite-...` §9]. These are claim-safe and already mirrored on category pages.
- **How custom connects to categories:** the **Pendants** category is the natural bridge (ready pendant ↔ "send your idea"), and the **Chains** "Build the full piece" module (chain + custom pendant together) is already a good cross-link [live demo]. Extend that bridge pattern to Pendants and Grillz; keep it one-directional and light so it doesn't turn every category into a custom pitch.

**Custom flow:** hold `/custom` as-is until visual QA + approval; do not turn it into a generic intake form; outcome/media-led, not more form complexity [project files].

---

## 10. Visual design recommendation

**What the source files already establish:** Keep Midnight Icebox (obsidian/bone/gold `#C9A449`/ice palette; Anton/Archivo/JetBrains Mono; controlled gleam — one hero sweep, low sparkle; harder typography, reduce Cormorant; desire tiles not icon cards; no visible "footage coming" placeholders) [`2t-homepage-master-direction`, PROJECT_CONTEXT]. **Verdict: keep + refine. Do not redesign** (no evidence justifies it).

**Net-new, focused on the silver/moissanite question [recommendation]:**

- **Does Silver/Moissanite need a distinct visual treatment?** **A controlled "ice/silver reflective" accent, yes — a separate softer/cheaper-looking area, no** [matches PROJECT_CONTEXT guardrail]. Use the existing **ice `#D8EBFF`** token as the cool/white-shine accent for silver/moissanite contexts and **gold `#C9A449`** for gold/diamond contexts, **inside the same system**. This signals "different shine" visually without signaling "lesser." Never give Silver/Moissanite a downgraded card style, smaller tiles, or a muted zone.
- **Colors:** keep palette; use gold vs ice as the two *shine accents* of equal weight, not as premium-vs-budget coding.
- **Typography:** continue hardening away from Cormorant toward Anton/Archivo for display/labels; serif only as a rare accent.
- **Spacing/rhythm:** vary section rhythm so it doesn't read as repeated equal blocks (anti-generic); the gateway's 3-large/4-small hybrid is good — keep the asymmetry.
- **Image style:** macro shine, display-case framing, tight crops; before real photos, "visual promise" tiles (texture/crop/shape), never fake product cards.
- **Motion:** controlled gleam only (one hero sweep, one card/promo sweep, low sparkle); reduced-motion fallback.
- **Section contrast:** give the new "Shop the Shine" strip a distinct but on-system treatment (e.g., split gold-accent / ice-accent halves) so the four directions read as equal and intentional.
- **Keep:** Midnight Icebox system, BANG. discipline. **Change:** gateway tiles → desire surfaces; add direction strip. **Avoid:** any separate "silver/moissanite" softer zone; gold-gradient generic luxury; visible placeholder labels.

---

## 11. Copy and CTA direction

**What the source files already establish:** A full claim-safe, street-commercial copy system exists (Pass 5B §9, VOC, swipe map). Use: Text 2T / send the photo / send the logo / ask what's in stock / we quote before the build / no deposit to start / details confirmed per piece. Avoid boutique, corporate, parody slang, unverified claims. "Build" = custom only.

**Net-new, additive copy direction [recommendation]:**

- **"Shop the Shine" strip:** `SHOP THE SHINE — Gold · Silver · Diamond · Moissanite. Different shine. Different direction. Details confirmed per piece.`
- **Silver, publish-safe (sell the material, never the price):** `Silver. Solid, stamped, built to wear.` · `925 sterling silver base — finish confirmed per piece.` (purity claim only when verified per piece).
- **Moissanite, publish-safe (sell the fire, never the diamond):** `Moissanite. Its own stone. Real fire, built big.` · `Diamond or moissanite. Different shine. Different direction.` Never "moissanite diamond," "alternative," "looks like a diamond," "passes tester" as a trust claim.
- **SHOP category in-stock module (per category):** `Ask what [chains/pendants/…] are in stock now. Availability may vary.` + WhatsApp prefill (extend the existing chains prefill pattern to every category).
- **Product card (when real):** short descriptor + `Details confirmed per piece` + verified badges only + `TEXT 2T ABOUT THIS PIECE`.
- **CTA verb map (reaffirm Pass 5B):** SHOP categories → `SHOP / SEE / ASK WHAT'S IN STOCK`; Grillz/Watches → `ASK ABOUT GRILLZ / ASK ABOUT WATCHES`; Custom → `BUILD CUSTOM → / START THE REQUEST →`; everywhere → `TEXT 2T →`.
- **Differentiator line (positioning, internal-safe to externalize):** lean into transparency as the brand voice — `We tell you exactly what it is before you buy.` This is the publish-safe expression of 2T's claim-safety advantage over the diamond-conflation market.

**One strong version (not alternatives) for the homepage direction strip and the silver/moissanite microcopy is given above** [per user preference: one strong version].

---

## 12. SEO and content recommendation

**What the source files already establish:** Intent-led keyword map, category-led landing pages, local Pittsburgh modifiers, trust content; do SEO after homepage/claim-safety gates; likely future pages incl. `/moissanite-jewelry`, `/silver-jewelry`, `/cuban-chains`, `/custom-photo-pendant`, `/grillz-pittsburgh`; structured data only when data is real; local NAP cleanup (public listings still point to `2tjewelers.placeweb.site`) [`2t-growth-strategy-seo-cro-90day`, `2t-silver-moissanite-...` §11].

**Net-new / sharpened [recommendation]:**

- **Should Silver/Moissanite pages exist now? No** — a page without real inventory is thin content + claim risk [reaffirms `2t-silver-moissanite-...` §11]. Build `/moissanite-jewelry` and `/sterling-silver-jewelry` **only when real pieces + photos exist.** Until then, the homepage "Shop the Shine" strip carries the positioning.
- **Index vs noindex:** index the homepage, the live category pages (they have unique, useful intent content now — chains page is genuinely indexable), `/custom`, `/grillz`, `/watches`. **`noindex` any empty Best Sellers / New Arrivals** until real, and any staging/preview. Don't let thin/empty pages compete.
- **What waits:** all material/stone SEO pages; all `Product`/`Offer` structured data (only when real products + prices/availability match the page — Google requires offer data to match on-page); review markup (only with real reviews).
- **Avoid thin content:** every indexable page needs unique intent copy (the chains page is the model — style/material/pairing/FAQ depth). Don't spin near-duplicate category pages.
- **Future SEO prep without fake products:** build the keyword-aligned title/meta + intro/FAQ scaffolding now (claim-safe), so when inventory arrives the page is ready. Recommended page titles (later): `Moissanite Jewelry — Iced Out, GRA-Certified | 2T Jewelers Pittsburgh` · `925 Sterling Silver Jewelry — Chains, Pendants, Custom | 2T Jewelers Pittsburgh`.
- **Local is the asymmetric SEO win:** `/grillz-pittsburgh`, `/custom-jewelry-pittsburgh`, `/custom-pendant-pittsburgh` — zero local hip-hop competitors [§4 row 29]. Prioritize once homepage/claim gates clear. **Fix NAP** to the final canonical domain at launch.

---

## 13. Promotions and offers

**What the source files already establish:** Demo-approved promo is **"20% OFF YOUR FIRST CUSTOM ORDER"** (promo bar only, locked wording, no urgency/conditions added) [CLAIM_SAFETY]; 3-state promo module defined (no promo / category signal / active verified offer); JAXXON weekly flash = the safe structural-urgency model; GLD promo saturation = the anti-model [Pass 5B §6].

**Fresh competitor promo evidence [external 2026-05-30]:**
- **GLD** runs continuous BOGO + 30–60% + a `GLD Vault` clearance + a `GLD VIP $29/mo` store-credit subscription + stackable codes + popups. This is **margin-destructive discount anchoring** — the buyer learns never to pay full price. **Anti-model.**
- **GUU / Gold Gods** lean on blanket lifetime warranty + free shipping + code-based % off. Blanket policy claims — **2T must not copy without written policy.**
- **HipHopBling** runs code-based category sales ("SPRING 25% off all Moissanite"). A *specific, time-boxed, category-scoped* code is acceptable in principle **if 2T actually runs it**.
- **JAXXON** weekly flash on a dedicated `/collections/flash-sale` URL with no fake timer — **the safe model**: urgency from a real weekly cycle, not a countdown.
- **Aporro** gift-tier promo (spend $X → free item) — **a margin-friendlier alternative to straight discounts.**

**What 2T should consider [recommendation]:**
- Keep the **20% first-custom** as the single standing promo (already approved, scoped, locked).
- Build the **3-state "Special of the Week"** as a **featured-piece inquiry**, not a discount: when one real in-stock piece exists, State C = `THIS WEEK AT 2T · [piece] — [verified material/stone badge] — available now, text to confirm.` No countdown, no fake scarcity. This is the JAXXON structural-urgency model adapted to 2T's inquiry stage.
- Consider a **gift-tier or bundle** (Aporro model) later, only with confirmed terms — protects margin vs straight % off.
- **Street-commercial urgency without fakery:** "Pieces move fast — ask what's in now." (real-availability framing, no invented counts/timers).

**What needs business confirmation (§15):** any % off beyond the 20% first-custom; any free-shipping/warranty policy; any "in stock"/"available now" tied to real inventory; any bundle/BOGO terms.

**Do NOT:** countdown timers (ItsHot); blanket lifetime warranty / free shipping (Gold Gods, GUU, King Ice); stacked sitewide % off (GLD); VIP subscription gate; any "was/now" anchor without a real prior price.

---

## 14. Claim-safety architecture

**What the source files already establish:** Verify first → publish at the tightest confirmed scope; strong claims are commercial assets, not risks to suppress; full forbidden list and verification gates exist [CLAIM_SAFETY, `2t-silver-moissanite-...` §6/§13]. This section reaffirms and operationalizes by surface — it does not loosen any rule.

**By scope:**

- **Sitewide (ProofMarquee / footer):** only **Pittsburgh real store + 25 years** now; add **free shipping / lifetime warranty only with a written policy + disclosed exceptions.** **No** material/stone/grade claim sitewide — ever.
- **Collection-level:** a material/stone claim only if **every** piece in the collection qualifies (e.g., a 925-only collection). Otherwise per-piece.
- **Product-level:** per-piece with proof; explicit labels (`natural` vs `lab-grown`; `GRA` for moissanite, never `GIA`; karat for gold; hallmark for 925).
- **Inventory-level:** `in stock / available now` only from confirmed live inventory; else `Ask what's in stock now.`
- **Certificate-level:** `[GIA CERT]` (diamond) / `[GRA CERT]` (moissanite) only with physical cert + scan.
- **Authentication-level (watches — highest legal risk):** per **Rolex v. BeckerTime** [§4 row 27], aftermarket diamonds/bezel make it "a watch of another make"; **no brand names on iced watches; no "factory-set"/"100% authentic" on aftermarket; "authenticated" only with condition + source + prominent modification disclosure per watch.** A disclaimer alone is "not always sufficient." Until that framework exists, watches stay inquiry-only: `Iced bezel · diamond-set · ask what's in.`
- **Custom/inquiry-level:** collects **direction only** — no promise of material/stone/price/timeline.

**Badge layer (build the slot now, populate only when verified):**
- Safe: `[14K SOLID GOLD]` `[925 STERLING]` `[GRA VVS MOISSANITE]` `[NATURAL DIAMOND]` `[LAB-GROWN DIAMOND]` `[GIA CERT]` `[IN STOCK]`.
- Forbidden: any badge as a sitewide default · `[VVS]` on moissanite without GRA · `[REAL DIAMOND]` without natural/lab label · `[FACTORY-SET]` on aftermarket · `[SOLID GOLD]` on vermeil.

**Forbidden language (reaffirmed, now with fresh market confirmation that this IS the differentiator):** `moissanite diamond`, `VVS moissanite diamonds`, `diamond alternative/substitute/simulant`, `fake diamond`, `looks like a diamond`, `passes the diamond tester` (as a trust claim), `fraction of diamond cost`, `rival natural diamonds`, `cheap/budget/affordable silver`, silver framed via gold, plated labeled `gold`, GIA on moissanite, blanket VVS/GIA/925/solid-gold/real-diamond, grillz dental/fit/FDA claims, CAD/free-render/mockup promises, fake reviews/UGC/celebrity/press/counts. **The entire moissanite hip-hop segment uses these [§4]; 2T's refusal is a visible trust asset.**

**What can be said now (updated 2026-05-31):** Pittsburgh real store · 25 years · text-first access · `Gold · Silver · Diamonds · Moissanite` · `Pick the piece. Then pick the shine.` · `Gold or silver. Diamond or moissanite. Different shine. Different direction.` · `925 Sterling Silver` (homepage/ShineDirectionBand — business-level confirmed) · `D-color VVS Moissanite` (homepage/ShineDirectionBand — business-level confirmed) · `Material and stone details confirmed per piece.` · `Details confirmed per piece.` · `Ask what's in stock now.` · `We quote before the build.` · `No deposit to start.` · `Promo terms shown on eligible pieces only.` · the approved `20% OFF YOUR FIRST CUSTOM ORDER` (promo bar only).

**What waits for proof:** every per-piece material/stone/grade/cert claim; in-stock; free shipping; warranty; watch authentication/factory-set; any new promo.

---

## 15. Business questions required

**What the source files already establish:** A business-intake list exists [`2t-silver-moissanite-...` §14; growth-strategy open questions]. Consolidated and prioritized here — **answers gate everything beyond safe microcopy.**

**Inventory & catalog**
1. Is there **any real, photographable, in-stock product** today (even 4–8 pieces per category)? This is the gate for turning SHOP from funnel to store.
2. Which categories are truly live for *purchase/made-to-order* vs *inquiry-only*? Sunglasses/accessories — yes/no?
3. Is there live inventory tracking (for any "in stock" claim)?

**Materials & stones**
4. **Gold:** solid only, or also plated/vermeil? Which karats? (For `[14K GOLD]` vs required plating disclosure.)
5. **Silver:** 925 only, or also plated/stainless? Stamped/hallmarked? (For `[925 STERLING]`.)
6. **Diamonds:** natural, lab-grown, or both? How should natural vs lab be labeled?
7. **Moissanite:** does a **GRA certificate ship with the piece**? Which grades?
8. **VVS/GIA:** are there verified VVS diamond pieces? Physical GIA cert per stone?

**Watches (highest legal risk)**
9. Inventory/sourcing? Inquiry-only or sold? Any authentication process? Any modification (aftermarket diamonds/bezel) that requires disclosure? Is "factory-set" ever actually true?

**Grillz**
10. Process (impressions/fit/timing/deposit/remake)? — for safe process copy with no dental/fit guarantee.

**Custom & policy**
11. Custom fulfillment & deposit policy?
12. **Shipping policy** — written? Free? Exceptions?
13. **Warranty policy** — written? Coverage defined?
14. Is **Acima** active (confirmed) and any other financing?

**Promotions**
15. Beyond the 20% first-custom, any real, time-boxed, scoped offers 2T will actually run (for State C / "Special of the Week")?

**Assets & proof**
16. Real product / custom before-after / store photos & video available now? Certificates? Watch authentication docs?

**Operational/local**
17. Final canonical domain (to fix NAP from `2tjewelers.placeweb.site`)? Confirmed response expectation for a stated reply time?

---

## 16. Recommended roadmap

**What the source files already establish:** Current milestone = Vercel demo → business-owner review; then media; Pass 5C copy (pending approval); then SEO/About/social/backend; material/stone architecture & custom selector are planned [NEXT_ROADMAP]. This roadmap **slots the architecture decision into that order** without reopening locked work.

**Priority key:** P1 = do next · P2 = after business answers (§15) · P3 = after real assets/inventory · P4 = later Shopify.

| Phase | Action | Reason | Files / routes likely affected | Claim-safety dependency | Asset/data dependency | Priority |
|---|---|---|---|---|---|---|
| Immediate | Confirm METAL/STONE direction selectors are **uniform on every category page** (not just chains) | Locks Option A consistency; closes the "silver/moissanite named not managed" gap | `/collections/*` pages | None (direction only) | None | **P1** |
| Immediate | Add **"Shop the Shine" direction strip** to homepage (text now, links later) | Option C layer; raises Silver/Moissanite to equal homepage status | `app/page.tsx` | None | None | **P1** |
| Immediate | Add **per-category "Ask what's in stock now" WhatsApp module** (extend chains prefill pattern) | Converts inquiry funnel toward transaction faster | `/collections/*` | None | None | **P1** |
| Immediate | Build **empty product-card + badge/spec slot in code** (no content) | Somewhere to drop real pieces later; no rework | category components | None (empty) | None | **P1** |
| Immediate | Promote **Watches** into primary nav (inquiry item); de-duplicate Custom nav entry | Watches is priority-2; current nav under-weights it | `data/nav.ts`, header | None | None | **P1** |
| Immediate | `noindex` empty Best Sellers / New Arrivals until real | Avoid thin-content/claim risk | those routes | High (no fake inventory) | None | **P1** |
| After answers | Lock materials/stones/grades sold; natural-vs-lab labeling; shipping/warranty policy; Acima confirm | Defines what may ever be published | global copy/badges | **High** (gates all claims) | Low | **P2** |
| After answers | Define which categories become real product surfaces vs stay inquiry | Sets the SHOP build scope | category pages | High | Medium | **P2** |
| After assets | Add **real product cards** (image + descriptor + verified badges + Text-2T) to categories; populate Best Sellers/New Arrivals real-only | Turns SHOP from funnel into store — the core fix | category pages, card/badge components | High (scope + disclosure) | **High** | **P3** |
| After assets | Build `/moissanite-jewelry` + `/sterling-silver-jewelry` SEO pages with real inventory + GRA/925 proof | Silver/Moissanite conversion + SEO surface | new routes | High | High | **P3** |
| After assets | Build **Watches authentication/modification framework** before any watch product card | Highest legal risk (BeckerTime) | `/watches`, watch PDP | **Critical** | High | **P3** |
| After assets | Make "Shop the Shine" strip clickable → filtered/SEO destinations | Completes Option C | `app/page.tsx`, new routes | High | High | **P3** |
| After assets | Local SEO pages (`/grillz-pittsburgh`, `/custom-jewelry-pittsburgh`); fix NAP | Asymmetric local win | new routes, listings | Medium | Medium | **P3** |
| Later Shopify | Metafields/metaobjects, storefront filters (material/stone/in-stock), PDP spec block, cert metaobject, cross-cutting smart-collections | Full scoped-claim + filtering infrastructure | Shopify | High | High | **P4** (only if reopened) |

**Parallel, already in the project plan (not changed here):** Pass 5C copy sharpening (pending approval), `/custom` visual QA, real hero/store media — all remain as scheduled.

---

## 17. Final decision

**One direction, no hedging:**

**Adopt Option A — unified, category-first architecture with Gold/Silver and Diamond/Moissanite shown as visible, equal, cross-cutting directions inside categories and the custom flow — and add the Option C "Shop the Shine" direction module on the homepage. Reject Option B (the two-buyer-lane split) outright.** Keep the Midnight Icebox visual system and the locked homepage; refine, do not redesign.

**The real work is not choosing an architecture — it is giving SHOP a surface.** The site feels custom-driven because the SHOP category pages are currently inquiry funnels with zero products. The fix, in order: (1) make the existing pages feel like a store now (uniform material/stone selectors, per-category "ask what's in stock," empty product/badge slots, "Shop the Shine" strip, Watches into primary nav); (2) get the §15 business answers; (3) drop in **real product photos and a handful of real in-stock pieces** — that single move converts every category from a funnel into a store and resolves the custom-heavy feel permanently.

**2T's durable edge is transparency in a market that lies.** Every major moissanite competitor sells on "moissanite diamonds," "passes tester," and "fraction of the cost." 2T's stricter rule — name the stone, no price comparison, no diamond conflation, claim only what's verified — is simultaneously the safest and the most premium position available, and it is the thing to lean into in copy and badges.

**Implement next:** the six P1 items in §16 (selector consistency, Shop-the-Shine strip, per-category in-stock module, empty card/badge slot, Watches nav promotion, `noindex` empties). **Do not implement next:** Option B; any silver/moissanite nav door; any SEO page or product card without real inventory + proof; any new promo, watch authentication claim, or material/stone badge without verification; and no homepage redesign.

---

*Research/strategy only. No code, no implementation files. Builds on existing project decisions; updates/contradictions flagged inline (§1, §2, §3). No fake products, prices, inventory, reviews, celebrity proof, social proof, or VOC introduced. Competitor findings are point-in-time — "as of" dates in §4; sites change. Fresh live research 2026-05-30: 2T live site (homepage + /collections/chains), GLD, IceCartel, Adamans, HipHopBling, Harlembling, CustomHipHop, The GUU Shop, The Gold Gods, Gemistone, Solomon & Co., JewelryFresh, eBay moissanite long tail, labdiamondfactory. Carried-forward project research: Pass 5B (2026-05-23, 13 deep + 11 tier-2), silver/moissanite strategy (2026-05-29, +FTC/BeckerTime/vermeil). Missing source file `2t-phaseb-shop-material-stone-architecture-2026-05-29.md` was not supplied; Phase B1 detail reconstructed from live demo + project files and flagged as such.*
