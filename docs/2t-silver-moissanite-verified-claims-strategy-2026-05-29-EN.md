# 2T Jewelers — Silver, Moissanite & Verified-Claim Architecture
**Strategy & Architecture Research — for strategic approval, then Claude Code handoff**
**Date:** 2026-05-29
**Type:** Strategy / UX / category architecture / claim-safety research. No code.
**Live demo reviewed:** https://2finla.vercel.app
**Status:** Awaiting strategic approval. Not a build spec yet.

> **Source separation (mandatory):**
> - **[project files]** = from attached files (CLAIM_SAFETY, PROJECT_CONTEXT, AGENT_HANDOFF, NEXT_ROADMAP, 2026-05-28 synthesis, Pass 5B). Source of truth for brand rules, claim-safety, site state, roadmap.
> - **[live demo]** = observation of https://2finla.vercel.app on 2026-05-29.
> - **[external research]** = fresh web research on competitors/market/regulation. Includes URLs.
> - **[recommendation]** = strategic judgment based on all sources.
> - All copy strings, badge labels, navigation items, form fields, and SEO titles are written in **English** (U.S. website assets for Claude Code handoff).

---

## 1. Executive recommendation

**One-sentence recommendation:** Integrate Silver and Moissanite as **parallel material/stone directions** that flow through the entire site (homepage material strip, custom-form selectors, and later filters and SEO landing pages) — **not** as new top-level navigation doors, and **not** as "budget" categories. In parallel, build the **architecture** for verified claims now (badge layer, data schema), but **publish** each claim only at the verification scope that has been confirmed.

**Positioning Silver and Moissanite without weakening the brand [recommendation]:**
2T's positioning (loud, icy, hood street-luxury) is not weakened by Silver and Moissanite — it is weakened by **budget language**. As long as the copy never says "cheap," "substitute," or "almost like a diamond," Silver and Moissanite are fuel for the icy aesthetic, not a threat to it. In fact, most of the market (Adamans, IceCartel, Aporro, HipHopBling) uses exactly the forbidden language — "moissanite diamond," "fraction of diamond cost," "rival natural diamonds" — which is both **legally risky** (FTC) and **cheap in positioning**. 2T's stricter rule (name the stone, no price comparison, no "substitute") is simultaneously more legally safe, more premium, and differentiated from the market. That is the advantage, not the constraint.

**Using verified claims as a conversion asset [recommendation]:**
Strong claims (real diamonds, VVS, GIA, solid gold, 925, authenticated watches, in stock, free shipping, warranty) are a commercial asset — not a risk to suppress. The rule is **scope**: a claim lives at the tightest verified level (product → collection → policy). Build the badge layer and schema **now**, publish a specific claim only when per-piece data / certificate / written policy exists. Until then: safe fallback.

**Now vs. later:**

| Now (Next.js, no real product data) | After business answers | After real assets | Later Shopify |
|---|---|---|---|
| Strengthen homepage material strip; add METAL/STONE selectors in custom form; educational microcopy; badge layer as **empty slot** in code; metafield schema on paper | Decide which 925/moissanite/natural/lab diamonds are sold and how; draft shipping/warranty policy | Real photos/video; badges on real products; SEO pages `/moissanite-jewelry`, `/silver` with real inventory | Implement metafields/filters/collections; PDP spec block; cert metaobject |

---

## 2. Current-site diagnosis

**Source:** [project files] + [live demo].

**Current state [live demo 2026-05-29]:**
- Top navigation: `Shop` (Chains, Pendants, Bracelets, Rings, Earrings) · `Grillz` · `Custom Jewelry` · `New Arrivals` · `Best Sellers`, and a secondary row `Custom · Grillz · Watches · About`.
- Live category paths: `/collections/{chains,pendants,bracelets,rings,earrings,new-arrivals,best-sellers}`, `/collections` (all), `/grillz`, `/watches`, `/custom`.
- Hero: `BUILT TO HIT.` + subhead "Grillz. Watches. Chains. Rings. Custom pendants. Shop it or build it. Text before you buy." + CTAs `SHOP JEWELRY` / `BUILD CUSTOM →` + `BANG.` stamp.
- Promo bar: `20% OFF YOUR FIRST CUSTOM ORDER` (demo-approved only [project files]).
- Claim-safe promo module: "ASK WHAT'S RUNNING NOW · DETAILS CONFIRMED PER PIECE · PROMO TERMS SHOWN ON ELIGIBLE PIECES" + WhatsApp prefill.
- **Silver/Moissanite currently appear only** in a single line at the bottom of the About block: `GOLD · SILVER · DIAMONDS · MOISSANITE · DETAILS CONFIRMED PER PIECE`. They have no presence in navigation, chips, filters, or landing pages.
- Footer: address 332 Fifth Ave, phone, WhatsApp, IG/TikTok, Acima (safe wording).

**Current strengths:**
- Strategic spine is correct: dual paths (SHOP / BUILD), text-first, Pittsburgh as an asymmetric advantage (zero local hip-hop competitors — [project files, Pass 5B]).
- Claim-safety is already well implemented: correct fallback language, no false claims, no fake products/inventory.
- The existing material strip is an **excellent anchor point** — it already handles all four directions without hierarchy, exactly as recommended in [project files → Material & Stone Strategy].

**Current gaps:**
- Silver and Moissanite are "mentioned" but not "managed": they have no role in the custom flow, no educational microcopy, no conversion path.
- There is no badge/spec layer even as an empty structural slot — meaning when product data arrives, there is nowhere to connect a verified claim.
- SHOP is weaker than BUILD [2026-05-28 synthesis]: placeholder vitrines, no product proof.
- Watches/Grillz function as inquiry shells; there is no framework for authentication/modification disclosure (risk — see Section 8).

**Risks specific to Silver/Moissanite:**
- The temptation to adopt market norms ("moissanite diamond," "VVS moissanite diamonds," "looks like a diamond," "fraction of the cost") — forbidden by [CLAIM_SAFETY] and also an FTC deception-by-implication risk ([external research], see Sections 3/5).
- The temptation to frame Silver relative to Gold ("affordable alternative to gold") — forbidden [CLAIM_SAFETY].

**Risks for verified-claim architecture:**
- Publishing claims at too broad a scope (sitewide "925 sterling silver" / "VVS" / "real diamonds") before per-piece verification.
- "Factory-set diamonds" / watch brand names — high legal risk (Section 8).

---

## 3. Competitor findings table

**Note:** Pass 5B [project files] already deeply analyzed 13 brands (GLD, Icebox, Johnny Dang, TraxNYC, King Ice, Frost NYC, Aporro, IceCartel, HelloIce, JAXXON, Avianne, Gold Presidents, ItsHot, Moses NYC) on 2026-05-23. The table below **adds fresh research [external research]** focused specifically on Silver/Moissanite/claims/watches/Shopify — it does not repeat the general brand landscape.

| Source / Pattern | Type | What they do | What to learn | What to avoid | Now (Next) / Later (Shopify) | Claim/proof risks | Relevance to premium Silver/Moissanite positioning | Relevance to verified-claim architecture | Citation |
|---|---|---|---|---|---|---|---|---|---|
| **FTC Jewelry Guides + "In the Loupe"** | Regulation | "Diamond" alone = mined; moissanite/CZ are not diamond and require disclosure; valid disclosure terms: laboratory-grown/created, simulated, imitation | Apply "clear & conspicuous" disclosure at the point of purchase; call moissanite by its name | Assuming "diamond" is allowed for lab/moissanite; hiding disclosure in specs | Now (copy rules) and later | This is the legal baseline for every claim | Confirms: silver/moissanite = correct to name them as their own materials | Confirms: scope + disclosure by level | ftc.gov/business-guidance/resources/loupe-advertising-diamond-gemstones-pearls ; ftc.gov/.../many-facets-advertising-diamonds-clarity |
| **Adamans** | Moissanite hip-hop | "Premium moissanite diamonds," "VVS grade," "rival natural diamonds," GRA cert per piece, 925/14k | GRA cert per piece as proof; "premium" framing | **"Moissanite diamonds,"** "just like natural diamonds" — forbidden (FTC + brand) | Later (when product exists) | High: deception-by-implication | Negative example: this is the language 2T differentiates from | Cert per piece = condition for GRA badge | adamans.com/collections/moissanite-hip-hop-jewelry |
| **IceCartel** | Moissanite NYC | "GRA-certified VVS moissanite," 925 base, "rival natural diamonds," in-house cut | GRA + VVS scoped per piece; loud energy ("we don't do quiet jewelry") | "Rival natural diamonds," "affordable choice" | Later | Medium-high | Positive: loud + premium is possible; Negative: "affordable" | GRA as the moissanite standard (not GIA) | icecartel.com/collections/moissanite-chains |
| **Aporro** | Moissanite DTC | "VVS \| VERIFIED" stamp per product; GRA/GIA/IGI certification logos; D–F grade; gift-tier as a non-discount promo alternative | **Per-product "VERIFIED" stamp** = the architecture model for 2T | "Way less cash," "almost as hard as diamonds," "1M+ customers" | Badge=later; concept=now | Medium | Positive: VERIFIED stamp; Negative: budget framing | **The direct model** for per-piece badge layer | aporro.com/blogs/blog/what-is-gra-moissanite-jewelry-and-where-to-buy |
| **HipHopBling** | Mass hip-hop | "D-Color VVS," vermeil = "more affordable precious metal," "10–30% of diamond's price" | Clear material taxonomy (.925/10k/14k) | Explicit budget framing for moissanite and silver | Later | High (budget framing) | Negative example | Material-as-spec structure | hiphopbling.com/products/oval-cut-certified-moissanite-loose-stone-vvs-d |
| **Harlembling** | Hip-hop NYC | "Solid 925 silver — won't turn green — great investment"; vermeil = 14k over 925; GRA cert; "stamped 925" | **Silver as a positive, real material** (solid, hallmark, no tarnish) | "Look just like natural diamonds," "man made diamonds" | Copy=now; proof=later | Medium | **Positive: the model for non-budget silver positioning** | Hallmark 925 = proof for badge | harlembling.com (St Michael / Young Money pendants) |
| **CustomHipHop / Silver Palace** | Silver/925 wholesale | Most inventory "Rhodium/Gold plated 925 sterling silver," GRA per piece | 925 as the standard base; rhodium/gold plating as a legitimate finish | Labeling plated as "gold"; CZ without disclosure | Later | Medium | Positive: 925 = norm, not downgrade | Finish/plating as a spec field | silverpalaceinc.com/collections/hip-hop-pendants ; customhiphopofficial.com |
| **Gold vermeil (FTC standard)** | Material standard | Vermeil = ≥10k gold, ≥2.5 micron, over 925 base | **Exact definition** for "vermeil"/"gold over silver" claim | "Gold" alone on vermeil (FTC violation) | Now (rule) / later (badge) | High if plating not disclosed | Positive: gold-over-925 = legitimate premium | Condition for `GOLD VERMEIL` badge | simpleanddainty.com/blogs/guides/what-is-gold-vermeil ; kay.com/what-is-gold-vermeil |
| **Rolex v. BeckerTime (5th Cir. 2024)** | Case law / watches | Adding aftermarket diamonds/bezel = non-original watch; selling under brand name without sufficient disclosure = infringement/counterfeiting; disclaimer "not always sufficient" | Avoid brand names on iced watches; prominent modification disclosure | "Genuine Rolex," "factory-set" on aftermarket-iced watch; "100% authentic" | Now (rule) / later (PDP) | **Critical** (Lanham Act + FTC) | — | Defines the gate for authenticated/factory-set badges | thefashionlaw.com/appeals-court-delves-into-modified-watches-in-rolex-v-beckertime-trademark-case |
| **Shopify metafields/metaobjects** | Platform | Metafield = namespace/key/type/value (up to 200/resource); filterable storefront; cert/badge as separate metaobject | Built-in verified-data schema; cert metaobject separate from product | Metafield without definition (does not appear in admin) | Later (Shopify) | Low (infrastructure) | Filters: material=Gold/Silver, stone=Diamond/Moissanite | **The infrastructure** for scoped claims | help.shopify.com/.../metafields/filtering-products ; jillur.vercel.app/blog/shopify-metafields-metaobjects |

---

## 4. Silver positioning recommendation

**Source:** [CLAIM_SAFETY], [PROJECT_CONTEXT] + [external research: Harlembling, Silver Palace, FTC vermeil].

**How to frame Silver [recommendation]:** Silver = a primary material direction, standing on its own. Real positive attributes: solid, hallmarked (`925`), durable, does not tarnish or discolor when maintained. When gold-plated — vermeil/gold-over-silver is a legitimate, premium finish, **not** "fake gold" and not "cheap."

**Safe copy examples:**
- `Silver. Solid, stamped, built to wear.`
- `925 sterling silver base. Gold finish or natural silver.` *(only when verified per piece)*
- `Gold or silver. Different shine. Different direction.`
- `Silver details confirmed per piece.`
- `Gold-plated over 925 sterling silver — the finish, confirmed per piece.`

**When "925 sterling silver" can be used prominently:** Only after hallmark/purity verification per piece [CLAIM_SAFETY]. At the category/homepage level, "Silver" alone is allowed. The form "925 sterling silver" as a specific claim = product/collection-level after verification.

**Proof required before stronger Silver claims:** `925` hallmark in a macro photo / supplier confirmation per piece; for vermeil — confirmation that ≥10k and ≥2.5 microns over 925 base [FTC].

**What not to say (forbidden):** `cheap silver`, `budget silver`, `cheaper than gold`, `affordable alternative to gold`, or any framing of Silver **through its relationship to Gold** [CLAIM_SAFETY]. Labeling plated as "gold" without a qualifier is forbidden.

---

## 5. Moissanite positioning recommendation

**Source:** [CLAIM_SAFETY], [PROJECT_CONTEXT] + [external research: FTC, Aporro, IceCartel, Adamans].

**How to frame Moissanite [recommendation]:** Moissanite = a unique stone in its own right (silicon carbide), a primary stone direction. Real positive attributes that may be stated: high brilliance/fire, high Mohs hardness (durable for daily wear), a strong icy option. **GRA is the standard** for moissanite grading — not GIA [external research].

**Safe copy examples:**
- `Moissanite. Its own stone. Real fire, built to flex.`
- `Diamond or moissanite. Different shine. Different direction.`
- `GRA-certified moissanite — certificate ships with the piece.` *(only when verified)*
- `Moissanite details confirmed per piece.`

**Clear explanation that Moissanite is not Diamond:** Moissanite is an independent stone, not a diamond and not a "lab diamond." According to the FTC, calling a non-diamond "diamond" without disclosure = deception [external research]. Therefore: never "moissanite diamond." GRA (not GIA) is the correct grading system.

**How to use Moissanite confidently without "fake/cheap/budget/lesser" [recommendation]:** Sell on the aesthetics and performance (icy, fire, durability, ability to build big), not on "how cheap it is compared to diamond." This is both the premium move and the safe move — and exactly the point where the entire market fails.

**What not to say (forbidden):** `moissanite diamond`, `VVS moissanite diamonds`, `diamond alternative`, `diamond substitute`, `diamond simulant`, `fake diamond`, `looks like a diamond`, `almost as good as a diamond`, `cheaper than a diamond`, `fraction of diamond cost` [CLAIM_SAFETY + FTC]. Applying GIA grading language to moissanite is forbidden.

> **Legal nuance [external research]:** The FTC does **permit** describing moissanite as "simulated"/"laboratory-created gemstone." 2T chooses a **stricter rule** — calling the stone by its name without "simulant." This is compliant with the FTC and also differentiated from the market. Both approaches are compatible; 2T simply chooses the stronger and more respectful framing.

---

## 6. Verified-claim architecture recommendation

**Core principle [recommendation + CLAIM_SAFETY]:** Verify first → publish at the tightest confirmed scope. Build the infrastructure now, publish claims only when verified at the correct level.

**Scope matrix by claim:**

| Claim | Sitewide | Collection | Product | Inventory | Certificate | Authentication | Custom/Inquiry |
|---|---|---|---|---|---|---|---|
| Real / natural / lab-grown diamond | ❌ | Only if the entire collection is uniform | ✅ per piece + explicit label | — | If GIA exists | — | "Ask what's set in the piece" |
| VVS / VS / SI | ❌ | ❌ | ✅ per piece | — | If cert | — | Inquiry only |
| GIA cert | ❌ | ❌ | ✅ if physical cert exists per stone | — | ✅ + scan | — | — |
| Solid gold + karat | ❌ | Only if the entire collection is uniform solid+karat | ✅ per piece | — | — | — | "Metal direction" only |
| 925 sterling silver | ❌ | Only if the entire collection is 925 | ✅ per piece (hallmark) | — | — | — | "Metal direction" |
| Gold vermeil / plated | ❌ | If the collection is uniform | ✅ + qualifier (≥10k/≥2.5µm) | — | — | — | — |
| Authenticated watch | ❌ | ❌ | ✅ per watch | — | — | ✅ condition+source | "Ask what's in" |
| Factory-set diamonds | ❌ | ❌ | ✅ **only** if truly factory-set (see Section 8) | — | — | ✅ | — |
| In stock / ships now | ❌ | ❌ | ✅ live inventory | ✅ | — | — | "Ask what's in stock now" |
| Free shipping | ✅ only with written policy | — | — | — | — | — | — |
| Lifetime warranty | ✅ only with written policy + defined coverage | — | Per piece if scoped | — | — | — | — |

**Badge rules:** A verified badge appears **only** on a product/collection that has been confirmed. Safe examples: `[14K SOLID GOLD]` `[925 STERLING]` `[GRA VVS MOISSANITE]` `[NATURAL DIAMOND]` `[GIA CERT]` `[IN STOCK]`. Forbidden badges: any badge as a sitewide default; `[VVS]` on moissanite without GRA; `[REAL DIAMOND]` without natural/lab label; `[FACTORY-SET]` on an aftermarket watch.

**Spec rules:** PDP spec block displays only verified fields: material / base metal / plating(+micron) / karat / stone type / stone grade(+GIA or GRA) / carat / condition / availability / warranty / cert. An unverified field = `Confirmed per piece`, not a guess.

**Filter rules (Shopify, later):** Metafield-driven storefront filters: material (Gold/Silver), stone (Diamond/Moissanite), and later karat, grade, in-stock. A filter is shown only when it has verified values — otherwise hidden.

**Proof requirements:** Diamond → supplier confirmation/GIA per stone; VVS → cert; 925 → hallmark; vermeil → micron/karat specification; watch → authentication + condition + modification disclosure; in-stock → live inventory; shipping/warranty → written policy document.

**Safe vs. unsafe examples:**
- ✅ `14K SOLID GOLD · NATURAL DIAMOND · GIA CERT` on a verified product.
- ✅ `925 STERLING · GRA VVS MOISSANITE · CERT SHIPS WITH PIECE` on a verified product.
- ❌ "Real diamonds & solid gold" as a sitewide trust strip without per-product verification.
- ❌ "VVS" as a general slogan.

---

## 7. Homepage / navigation recommendation

**Current navigation [live demo]:** `Shop ▸ (Chains/Pendants/Bracelets/Rings/Earrings) · Grillz · Custom Jewelry · New Arrivals · Best Sellers`. Secondary row: `Custom · Grillz · Watches · About`.

**Where to place Silver/Moissanite [recommendation]:**
- **Not** as top-level navigation items, **not** as primary doors. They are **cross-cutting material/stone directions**, not product categories. Adding them to navigation bloats it and breaks the Grillz→Watches→Chains logic.
- **Yes** in the homepage material strip (already exists — convert to a real section), **yes** in custom-form selectors (Section 9), **yes** as category page filters (later, Shopify), **and yes** as dedicated SEO landing pages (later, when inventory exists — Section 11).

**What to do now for the strip [recommendation, safe without assets]:** Take the existing `GOLD · SILVER · DIAMONDS · MOISSANITE · DETAILS CONFIRMED PER PIECE` and convert it into a small "direction" strip with microcopy:
> `GOLD · SILVER` → metal direction. `DIAMOND · MOISSANITE` → stone direction.
> `Different shine. Different direction. Details confirmed per piece.`
This frames all four as parallel (consistent with [PROJECT_CONTEXT]) without any specific claim.

**Badges/trust strip on homepage [recommendation]:** **Not now.** ProofMarquee should remain limited to verified claims only (Pittsburgh, over 30 years, text-first). A sitewide material/stone claim on the homepage = scope violation. When a written policy exists (shipping/warranty), it can be added to the strip.

**Why this fits 2T and the current stage:** It preserves the Hero/SHOP/BUILD as-is (cannot be reopened — [project files]), does not bloat navigation, and leverages an asset already on screen.

---

## 8. Category architecture recommendation

**Current category structure [live demo]:** Chains, Pendants, Bracelets, Rings, Earrings (collections) + Grillz, Watches (inquiry) + Best Sellers, New Arrivals.

**Handling Silver/Moissanite/claims per category [recommendation]:**

| Category | Silver | Moissanite | Verified claims | Safe now (no assets) | Waiting for data/assets |
|---|---|---|---|---|---|
| **Chains** | 925 base is common; vermeil finish | Can be iced with moissanite | Karat/925/grade per piece | One-line descriptor + "metal direction" microcopy | Badges, prices, inventory, photos |
| **Pendants** | Same; logo/name/photo | Iced pendants | Same | Descriptor + "send the idea" | Same |
| **Rings** | 925/gold | Moissanite center/pavé | Per piece grade | Descriptor | Badges/spec |
| **Bracelets** | 925/vermeil | Moissanite tennis | Per piece | Descriptor "ask what's in" | Badges/inventory |
| **Earrings** | 925 studs | Moissanite studs/hoops | Grade per piece | Descriptor | Badges |
| **Grillz** | Gold/silver set | Stone direction | **No** dental/FDA/fit-guarantee claims [CLAIM_SAFETY] | Process inquiry + "details confirmed per piece" | Material/stone per piece + photos |
| **Watches** | — | Factory-set ❌ unless verified | **High-risk**: see warning below | Inquiry only; "iced bezel / diamond-set / ask what's in" | Authentication + modification framework |
| **Best Sellers** | Reflects inventory | Reflects inventory | Only when real sales exist | Keep structural; do not invent "best seller" | Real products |
| **New Arrivals** | Reflects inventory | Reflects inventory | "New" only when real | Structural placeholder | Real inventory |

> **Watches warning [external research — critical]:** Per Rolex v. BeckerTime (5th Cir. 2024), adding aftermarket diamonds/bezel to a brand-name watch transforms it into "a watch of another make," and selling it under the brand name without **prominent and sufficient** disclosure = trademark infringement/counterfeiting — even when disclaimers are present. Conclusion for 2T: in the prototype, **completely avoid** watch brand names on iced items; use inquiry framing ("ICED BEZEL · DIAMOND-SET · ASK WHAT'S IN"); "factory-set diamonds" is allowed **only** on a watch where the diamonds were set by the original manufacturer (almost never true for iced aftermarket). "Authenticated watch" is allowed only with condition + source + modification disclosure per watch.

**Sunglasses/Accessories (future, if confirmed by the business):** Treat as an inquiry category like Grillz; "iced/diamond-set sunglasses" with the same claim rules (stone per piece, no UV/safety claims without verification). Do not build until business confirms.

---

## 9. Custom-form recommendation

**Source:** [PROJECT_CONTEXT → /custom Material & Stone Selector (Planned)] + [recommendation].

**Recommended structure — two separate selection groups, no ranking by price/status:**

**METAL DIRECTION** (single-select):
- `Gold`
- `Silver`
- `Not sure yet`

**STONE DIRECTION** (single-select):
- `Diamond`
- `Moissanite`
- `No stones`
- `Not sure yet`

**Helper text:** `Different shine. Different direction. Details confirmed per piece.`
**Close copy:** `Material and stone details confirmed before production. Budget range helps guide the conversation — not a final quote.`

**Collecting budget direction:** Range chips (not a final price), with microcopy `Budget range helps guide the conversation.`
**Collecting proof/spec request:** Idea field + "Send the logo, photo, name, sketch, or reference" + (when backend supports it) upload; if not — `Send files on WhatsApp`.

**How to avoid unsupported claims [recommendation]:** The selector collects **direction**, not a promise. Never `(cheaper)`, `(premium)`, `(most popular)` next to an option. Natural-vs-lab as a sub-selection — add **only** when the business decides how to handle this distinction [PROJECT_CONTEXT].

**Safe now:** This entire selector is safe to add immediately — it collects intent, not a claim.

---

## 10. Product-card / badge / spec recommendation

**Safe product-card language [recommendation]:** Short descriptor + `Details confirmed per piece`. No price/inventory/grade until verified.

**Badge rules:** A badge = only on a product that has been verified, at the tightest scope. Uniform color/style (mono, gold accent — consistent with design system [PROJECT_CONTEXT]).

**Specs that appear only when verified:** Karat, 925, plating(+micron), stone type, grade (GIA/GRA), carat, condition, availability, warranty, cert.

**Safe badge examples:** `[14K SOLID GOLD]` `[925 STERLING]` `[GRA VVS MOISSANITE]` `[NATURAL DIAMOND]` `[LAB-GROWN DIAMOND]` `[GIA CERT]` `[IN STOCK]`.
**Unsafe badge examples:** `[VVS]` on moissanite without GRA · `[REAL DIAMOND]` without natural/lab label · `[FACTORY-SET]` on aftermarket · `[SOLID GOLD]` on vermeil · any badge as a sitewide default.

**Handling specific badge types:**
- **In-stock:** Only from live inventory; otherwise `Ask what's in stock now`.
- **Certificate:** `[GIA CERT]` only with physical cert + scan; moissanite = `[GRA CERT]` only.
- **Authentication:** `[AUTHENTICATED]` only with condition + source per watch + modification disclosure.
- **Factory-set:** Only if the manufacturer set them; otherwise forbidden.
- **Solid gold:** Only with verified karat and confirmed not plated.
- **925:** Only with verified hallmark.
- **VVS/GIA:** Diamond only, per piece; moissanite → GRA.
- **Real/natural diamond:** Always with explicit natural/lab label.

---

## 11. SEO landing page recommendation

**Should dedicated Silver/Moissanite pages exist now? [Recommendation]: No.** An SEO page without real inventory = thin content + claim risk. Build **when real products/photos exist**. Now: only the homepage material strip + microcopy in custom (not a page).

**Recommended page topics (later):**
- `/moissanite-jewelry` — "Moissanite, its own stone" + GRA education + iced aesthetic.
- `/silver` or `/sterling-silver-jewelry` — "925, solid and stamped" + vermeil education.

**Recommended page titles (later):**
- `Moissanite Jewelry — Iced Out, GRA-Certified | 2T Jewelers Pittsburgh`
- `925 Sterling Silver Jewelry — Chains, Pendants, Custom | 2T Jewelers Pittsburgh`

**Safe headings:** `Moissanite. Its own stone.` · `Silver. Solid. Stamped. Built to wear.` · `Different shine. Different direction.`

**Buyer education modules (later):** "What is moissanite (and why it's its own stone, not a diamond)"; "What GRA grading means"; "What 925 sterling silver is"; "Gold vermeil vs solid gold" — all educational, without budget framing.

**Future claim-based pages (only with proof):** Real diamond / natural diamond / VVS / GIA / solid gold / 925 / authenticated watches / factory-set / in-stock pieces — each built only when matching inventory + assets + proof exists.

**How to avoid fake inventory/breadth:** Pages are built around real products only; no invented inventory counts or best-seller claims; if there are not enough products, keep the page as an inquiry hub, not a fake catalog.

---

## 12. Future Shopify taxonomy and metafields

**Source:** [external research: Shopify metafields/metaobjects] + [recommendation]. Everything here is **future planning** — Shopify is paused [project files].

**Recommended collections (later):**
- Product: Chains, Pendants, Rings, Bracelets, Earrings, Grillz, Watches, Custom, New Arrivals, Best Sellers.
- Cross-cutting material/stone smart-collections: Gold, Silver, Diamond, Moissanite (driven by tags/metafields, not top-level navigation doors).

**Metafields (namespace `spec`) — separated by urgency:**

*Needed for launch (when moving to Shopify with products):*
- `spec.material` (Gold/Silver) · `spec.stone_type` (Diamond/Moissanite/None) · `spec.in_stock` (boolean) · `spec.product_proof_status` (enum)

*Can wait:*
- `spec.base_metal` · `spec.plating` + `spec.plating_microns` · `spec.karat` · `spec.silver_purity` · `spec.stone_grade` · `spec.carat`

*Only if the business confirms the category/policy/proof:*
- `spec.diamond_origin` (natural/lab) · `spec.certification` (GIA/GRA/none) · `spec.cert_lab` · `spec.cert_reference` · `spec.authenticated_watch` (boolean) · `spec.watch_modification_disclosed` (boolean) · `spec.factory_set` (boolean) · `spec.custom_available` · `spec.inquiry_status` · `spec.verification_status` · `spec.warranty_policy` · `spec.shipping_policy`

**Metaobjects (reusable):** `certification` (lab, number, scan, image) and `product_badge` (label, color) — products reference them; this way badges/certificates render uniformly [external research].

**Filters:** Enable `Filter on storefront` only on metafields with verified values (material, stone, in-stock first).

---

## 13. Claim-safety rules

**Principle [CLAIM_SAFETY]:** The goal is not to avoid strong claims — it is to use them **accurately and at the correct level**.

- **Sitewide:** Only verified policy (free shipping, lifetime warranty) + Pittsburgh/over-30-years. No material/stone/grade claim sitewide.
- **Collection-level:** Only when every item in the collection meets the claim.
- **Product-level:** Per piece with proof; explicit label (natural/lab; GRA for moissanite).
- **Custom/inquiry-level:** Collects **direction** only; no promise of material/stone/price/timeline.
- **Inventory-level:** In-stock only from live inventory.
- **Certificate-level:** GIA (diamond) / GRA (moissanite) only with physical cert + scan.
- **Authentication-level:** Authenticated watch only with condition + source + modification disclosure per watch.
- **Written-policy:** Shipping/warranty only with a policy document and defined coverage.

**Approved fallback copy:** `Product details confirmed per piece.` · `Material and stone details confirmed per piece.` · `Ask what's in stock now.` · `Text 2T before you buy.` · `We quote before the build.` · `Promo terms shown on eligible pieces only.` · `Certificate shown when available.` · `Availability may vary.`

**Strong claims to use when verified:** Real/natural/lab-grown diamond (with label), VVS/VS/SI, GIA, solid gold + karat, 925 sterling silver, gold vermeil (with specification), GRA moissanite, authenticated watch, in-stock, free shipping, lifetime warranty.

**Claims forbidden without verification:** `moissanite diamond`, `looks like a diamond`, `diamond alternative/substitute/simulant`, `fake diamond`, budget framing for silver, `factory-set` on aftermarket, watch brand name on an iced item, GIA on moissanite, plated labeled as "gold."

**When a claim moves from product to collection:** Only when every item in the collection has been verified for that claim.
**When a claim is allowed in navigation/homepage/filter/SEO:** Navigation/homepage — never at product level; only verified policy sitewide. Filter/SEO — only on verified data with real inventory.

---

## 14. Business-intake questions needed before implementation

**Source:** [2026-05-28 synthesis §8] expanded. To be collected from the business before implementation beyond safe microcopy/selectors.

- **Categories/subcategories:** Which categories are live? Sunglasses/accessories — yes/no?
- **Materials:** Solid gold or also plated/vermeil? Which karats?
- **Silver:** 925 only, or also plated/stainless? Stamped 925?
- **Stones/diamonds:** Natural, lab, moissanite, or all? How to label natural vs. lab?
- **Moissanite:** Does a GRA cert ship with the piece? Which grades?
- **VVS/GIA:** Are there verified VVS pieces? Is there a physical GIA cert per stone?
- **Watches:** Inventory/sourcing/modification/inquiry only? Is there authentication? Is there modification that requires disclosure? "Factory-set" — is it ever actually true?
- **Grillz:** Process (impressions/fit/shipping/timing/deposit/remake)?
- **Inventory/in-stock:** Is there live inventory tracking?
- **Custom/fulfillment:** How does it work? Deposit?
- **Policies:** Shipping/warranty — is there a written document? Coverage?
- **Assets/proof:** Are there real product/custom/store photos available now? Certificates? Authentication documents?

---

## 15. Asset shot list by category

**Principle:** No placeholder posing as real inventory/customer/store/celebrity proof [CLAIM_SAFETY].

| Asset group | Required now | Can wait | Required before stronger claims | Useful for conversion (not mandatory) |
|---|---|---|---|---|
| Chains | Hero still/loop | Per-product shots | Macro hallmark/karat | Lifestyle on-neck |
| Pendants | 1 close-up | Gallery | Macro stone/grade | Custom examples |
| Rings | — | Per-product | Macro stone+grade | Hand shot |
| Bracelets | — | Per-product | Hallmark/grade | Wrist shot |
| Earrings | — | Per-product | Grade | On-ear |
| Grillz | 1 strong shot | Angles | Material/stone per piece | Process clip |
| Watches | — | Per-watch | **Authentication + modification proof** | Dial macro |
| Sunglasses (if confirmed) | — | Per-piece | Stone per piece | On-face |
| Silver | 1 representative | Gallery | Macro `925` hallmark | Natural + vermeil side-by-side |
| Moissanite | 1 icy shot | Gallery | **GRA cert scan** | Sun/low-light fire |
| Real/natural diamond | — | Per-piece | Supplier confirmation + GIA scan | Macro |
| VVS/GIA/cert proof | — | — | Physical cert + scan | — |
| Authenticated watch | — | — | Condition + source docs | — |
| Factory-set watch | — | — | Factory-set confirmation from manufacturer | — |
| In-stock showcase | — | — | Verified live inventory | — |
| Custom builds | — | 2–3 real examples | — | Before/after |
| Store interior | 1 storefront | Interior | — | "Come through" shot |

---

## 16. Implementation roadmap

**1) Now in Next.js (safe, no assets/data required):**
- Action: Strengthen the homepage material strip into a direction strip; add METAL/STONE selectors in custom form; educational microcopy; badge/spec layer as an **empty slot** in code.
- Reason: Leverages existing asset, strengthens Silver/Moissanite presence without claims, prepares future connections.
- Claim-safety dependency: None — everything is direction/fallback.
- Asset dependency: None.
- Priority: High.

**2) After business answers (Section 14):**
- Action: Lock which materials/stones/grades are sold; draft shipping/warranty policy; decide natural-vs-lab.
- Reason: No specific claim or SEO page can launch without this.
- Claim-safety dependency: High — defines what may be published.
- Asset dependency: Low.
- Priority: High (blocks everything after Phase 1).

**3) After real assets:**
- Action: Badges on real products; `/moissanite-jewelry` and `/silver` pages; photos in categories; Watches authentication framework.
- Reason: Claims/pages require real inventory + proof.
- Claim-safety dependency: High (scope + disclosure).
- Asset dependency: High.
- Priority: Medium.

**4) Later Shopify:**
- Action: Metafields/metaobjects, filters, PDP spec block, cert metaobject, cross-cutting collections.
- Reason: Full infrastructure for scoped claims and filtering.
- Claim-safety dependency: High.
- Asset/data dependency: High.
- Priority: Low (only after explicit approval to reopen Shopify).

---

## 17. Clear "Do not do" list

- Do not make Silver/Moissanite into top-level navigation doors or product categories.
- Do not write `moissanite diamond`, `VVS moissanite diamonds`, `looks like a diamond`, `diamond alternative/substitute/simulant`, `fake diamond`.
- Do not frame Silver relative to Gold or as "cheap"/"budget"/"affordable alternative."
- Do not apply GIA grading language to moissanite (moissanite = GRA only).
- Do not shorten "natural diamond"/"lab-grown diamond" to just "diamond" in commercial copy.
- Do not label vermeil/plated as "gold" without a qualifier.
- Do not publish 925 / VVS / GIA / solid gold / real diamond as a sitewide claim without per-piece verification.
- Do not use watch brand names (Rolex, etc.) on iced items; do not write "factory-set"/"100% authentic" on an aftermarket watch without prominent modification disclosure.
- Do not add material/stone trust badges to ProofMarquee/homepage before policy/verification.
- Do not build Silver/Moissanite SEO pages before real inventory + assets + proof.
- Do not add fake products/prices/inventory/best-seller/reviews/social/celebrity proof.
- Do not reopen Shopify or run Shopify CLI without explicit approval.
- Do not reopen the Hero / SHOP / BUILD / homepage that has already been approved.

---

## Sources (external research)

- FTC — *In the Loupe: Advertising Diamond, Gemstones and Pearls* — ftc.gov/business-guidance/resources/loupe-advertising-diamond-gemstones-pearls
- FTC — *The many facets of advertising diamonds with clarity* — ftc.gov/business-guidance/blog/2019/05/many-facets-advertising-diamonds-clarity
- FTC — *Jewelry Guides* hub — ftc.gov/news-events/topics/tools-consumers/jewelry-guides
- Adamans — adamans.com/collections/moissanite-hip-hop-jewelry
- IceCartel — icecartel.com/collections/moissanite-chains
- Aporro — aporro.com/blogs/blog/what-is-gra-moissanite-jewelry-and-where-to-buy
- HipHopBling — hiphopbling.com/products/oval-cut-certified-moissanite-loose-stone-vvs-d
- Harlembling — harlembling.com (925/moissanite pendants)
- Silver Palace / CustomHipHop — silverpalaceinc.com/collections/hip-hop-pendants ; customhiphopofficial.com
- Gold vermeil (FTC standard) — simpleanddainty.com/blogs/guides/what-is-gold-vermeil ; kay.com/what-is-gold-vermeil
- Rolex v. BeckerTime (5th Cir. 2024) — thefashionlaw.com/appeals-court-delves-into-modified-watches-in-rolex-v-beckertime-trademark-case ; caldwelllaw.com/news/is-that-a-rolex-the-limit-of-customization-and-reselling
- Shopify metafields/filters/metaobjects — help.shopify.com/en/manual/custom-data/metafields/filtering-products ; jillur.vercel.app/blog/shopify-metafields-metaobjects

*Prior project research built on (not re-run): Pass 5B competitor matrix, 2026-05-23 — 13 brands deep-dived (GLD, Icebox, Johnny Dang, TraxNYC, King Ice, Frost NYC, Aporro, IceCartel, HelloIce, JAXXON, Avianne, Gold Presidents, ItsHot, Moses NYC).*
