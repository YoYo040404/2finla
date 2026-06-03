# 2T Jewelers — Claim Safety Rules

## Purpose

This file governs how 2T Jewelers uses strong commercial claims on the website. Its job is not to suppress claims — it is to ensure every claim published is true.

2T Jewelers sells real gold, real silver, real diamonds, moissanite, and authenticated watches. Strong product claims are a commercial asset and should be used prominently when verified. The rules here define the verification gate required before publishing, not a preference for avoiding strong language.

Apply before every build, copy change, QA pass, and deployment.

---

## Commercial Claim Directive (Updated 2026-05-29)

The following claim categories are **approved for prominent use on the website** when verified at the appropriate level. They are not forbidden categories. They are commercial goals.

| Claim | Approved use | Where |
|---|---|---|
| Real diamonds | Yes — when confirmed per piece or per collection | Product card, PDP, collection intro, trust strip |
| Natural diamonds | Yes — when confirmed per piece (natural vs lab-grown labeling required) | PDP, collection page, product badge |
| Lab-grown diamonds | Yes — when confirmed per piece | PDP, product badge, with explicit "lab-grown" qualifier |
| VVS / VS / SI | Yes — when confirmed clarity grade per piece | Product card badge, PDP spec block |
| GIA certificate | Yes — when physical cert exists per stone | PDP, trust strip, product badge |
| Solid gold / karat | Yes — when confirmed alloy and karat per piece | Product card badge, PDP, collection intro |
| 925 sterling silver | Yes — when confirmed purity per piece | Product card badge, PDP |
| Authenticated watches | Yes — when condition, stones, and authentication details are confirmed | Watches page, high-ticket product listing |
| Factory-set diamonds | Yes — when confirmed as factory-set per watch/piece | Watches page, product-level |
| In stock / available now | Yes — when live inventory confirms availability | Product card badge, promo module, category page |
| Free shipping | Yes — when written shipping policy confirms it | Promo bar, trust strip, footer |
| Lifetime warranty | Yes — when written policy exists with defined coverage | Trust strip, product page, FAQ |

**The rule is not "avoid these claims." The rule is: verify first, then publish prominently.**

Verification gate: product-level supplier confirmation, GIA/GRA certificate, written policy document, or inventory confirmation — depending on claim type.

Safe fallback when not yet verified: "Material and stone details confirmed per piece." / "Ask before you buy."

---

---

## Forbidden Unless Verified

Do not claim or imply:

### Custom / Production

- free mockup
- free render
- CAD render
- CAD model
- guaranteed proof
- guaranteed revision
- production timeline
- turnaround time
- rush timing
- deposit terms
- payment terms

### Policies / Service

- warranty (unless policy is confirmed — see Allowed When Verified section)
- lifetime guarantee (unless policy is confirmed — see Allowed When Verified section)
- guarantee (unless scoped to a real policy — see Allowed When Verified section)
- free shipping (unless confirmed — see Allowed When Verified section)
- fast shipping
- returns (unless policy is confirmed)
- exchanges (unless policy is confirmed)
- financing (use Acima safe wording only)
- response time
- 24/7 availability
- “No automated systems — a real conversation”

### Proof / Social

- fake reviews
- fake testimonials
- fake star ratings
- fake UGC
- fake customer photos
- fake press logos
- fake celebrity references
- fake customer count
- “trusted by thousands”
- “family-owned” unless verified
- founding year unless verified

### Product Claims (Blanket / Unscoped)

- Rolex / authentic Rolex / official dealer
- watch authentication claims
- box and papers
- factory-set diamonds
- exact karat unless product-level verified
- exact carat unless product-level verified
- GIA certificate (unless the cert exists for that specific product)
- VVS / VS / SI as a blanket site claim
- natural diamond as a blanket site claim
- solid gold as a blanket site claim
- "925 sterling silver" as a blanket site claim (must be confirmed per piece)
- "GRA-certified moissanite" as a blanket site claim (certificate must ship with the piece)
- "D-color moissanite" / "VVS moissanite" as a blanket site claim (must be confirmed per piece)
- "moissanite diamond" or "VVS moissanite diamonds" (moissanite is a distinct stone — not a diamond)
- "diamond alternative" / "diamond substitute" / "diamond simulant" applied to moissanite (forbidden in public-facing copy)
- "looks like a diamond" in reference to moissanite (FTC deception-by-implication risk)
- "fake diamond" as a descriptor for any product 2T sells
- silver described through price comparison to gold ("cheaper," "budget," "affordable alternative to gold")

### Grillz / Dental

- FDA approved
- dentist approved
- safe for teeth
- fit guarantee
- mold kit
- impression kit
- free mold kit
- dental / medical claims

---

## Verified Claim Architecture

These claims are **commercial assets** and should be built into product data, badges, filters, category pages, and trust strips as verified information becomes available. The architecture should actively support them.

### Verification Gates (what is required before publishing)

| Claim | Verification required | Scope |
|---|---|---|
| Solid gold | Karat and alloy confirmed per piece | Product card, PDP, collection intro |
| Real diamonds | Stone identity confirmed per piece | Product card badge, PDP |
| Natural diamonds | Natural vs lab-grown confirmed per piece | PDP — always use explicit "natural" qualifier |
| Lab-grown diamonds | Origin confirmed per piece | PDP — always use "lab-grown" qualifier |
| VVS / VS / SI | Clarity grade confirmed per piece | Product badge, PDP spec block |
| GIA certificate | Physical cert confirmed per stone | PDP, cert badge, downloadable scan |
| GRA-certified moissanite | Certificate confirmed to ship with piece | Product badge, PDP |
| 925 sterling silver | ✅ Business-level confirmed (2026-05-31) for homepage/ShineDirectionBand. Per-piece badge: hallmark verification still required. | Homepage direction, ShineDirectionBand; Product badge, PDP (per-piece) |
| Gold-plated (karat + base) | Base metal and plating confirmed | Product card — required disclosure if plated |
| Free shipping | Written policy confirmed | Promo bar, trust strip, footer |
| Lifetime warranty | Written policy with defined coverage | Trust strip, PDP, FAQ |
| In stock | Live inventory confirmed | Product card badge, promo module |
| Factory-set diamonds | Confirmed as factory-set per watch | Watches PDP |
| Authenticated watches | Condition, stones, and source confirmed | Watches listing, high-ticket PDP |

### Scope rule

These may be used at the tightest confirmed scope:
- **Product-level** — visible only on that specific product's card/PDP
- **Collection-level** — only if every product in the collection shares the claim
- **Policy-level** — site-wide (free shipping, warranty) only when the written policy covers all eligible products and exceptions are disclosed

**Do not** use product-level claims as sitewide defaults.  
**Do not** use collection-level claims on categories where not every piece qualifies.

### Future architecture to build

When product data is available:
- Product card badge layer: `[14K GOLD]` `[VVS MOISSANITE]` `[REAL DIAMOND]` `[IN STOCK]` `[GIA CERT]`
- PDP spec block: material / stone type / stone grade / carat / karat / condition / availability / warranty / cert
- Collection filters: by material (Gold / Silver) and stone (Diamond / Moissanite)
- Trust strip: update ProofMarquee with verified policy-level claims as they are confirmed
- Promo module State C: active verified offer with material and stone badges

---

## Material & Stone Language Rules

### Business Fact

2T Jewelers sells gold, silver, diamonds, and moissanite.
Silver and moissanite are legitimate material and stone directions — not budget options, not downgrade options, not second-class alternatives.

**User-confirmed business-level facts (2026-05-31):**
- All 2T silver is **925 Sterling Silver**.
- All 2T moissanite is **D-color and VVS**.

These business-level confirmations allow "925 Sterling Silver" and "D-color VVS Moissanite" to appear in homepage direction copy and ShineDirectionBand as secondary proof. GRA-certified and GIA are still not confirmed. Per-piece badge use still requires per-piece verification.

### Positioning Rule — No Hierarchy

Treat gold, silver, diamonds, and moissanite as parallel directions of equal standing.
Do NOT frame silver as inferior to gold.
Do NOT frame moissanite as inferior to or a substitute for diamond.
Do NOT rank the four options by price or status in any public-facing copy.

Approved framing:
> Gold or silver. Diamond or moissanite. Different shine. Different direction.

### Forbidden Language — Material & Stone

Do NOT write:
- "moissanite diamond" or "VVS moissanite diamonds"
- "fake diamond"
- "diamond alternative" (in public-facing copy)
- "diamond substitute"
- "diamond simulant"
- "affordable alternative to diamond"
- "budget moissanite"
- "cheaper than a diamond"
- "looks like a diamond" (FTC deception-by-implication risk)
- "almost as good as a diamond"
- "cheap silver" / "cheaper metal" / "budget silver"
- silver described through its relationship to gold

### Approved Language — Material & Stone

Approved for use at any level (category, homepage, custom flow):
- "Gold or silver."
- "Diamond or moissanite."
- "Different shine. Different direction."
- "Material and stone details confirmed per piece."
- "Details confirmed per piece."
- "Ask what fits the piece."
- "Material direction helps guide the conversation." *(already in Approved Safe Phrases)*

### Material/Stone Claim Verification Gates

**Public-facing hierarchy rule:**
Simple buyer labels first: Gold / Silver / Diamonds / Moissanite.
Specs as secondary proof: 925 Sterling Silver / D-color VVS Moissanite / Details confirmed per piece.

| Claim | Gate before use | Status |
|---|---|---|
| "925 Sterling Silver" | Business-level confirmed (2026-05-31) | ✅ Approved for homepage/ShineDirectionBand. Per-piece badge: hallmark still required. |
| "D-color VVS Moissanite" | Business-level confirmed (2026-05-31) | ✅ Approved for homepage/ShineDirectionBand. Per-piece badge: grade still requires verification. |
| "GRA-certified moissanite" | GRA certificate ships with the piece | ❌ Not confirmed |
| "GIA-graded diamond" | GIA report exists for the specific stone | ❌ Not confirmed |
| "Lab-grown diamond" | Stone origin confirmed per piece | ❌ Not confirmed |
| "Natural diamond" | Natural origin confirmed per piece | ❌ Not confirmed |
| "14K / 10K / 18K gold" | Karat confirmed per piece | ❌ Not confirmed |
| "Gold-plated over 925 sterling silver" | Base metal and plating confirmed per piece | ❌ Not confirmed |
| "Solid gold" | Confirmed not plated per piece | ❌ Not confirmed |
| "Solid silver" | Confirmed solid construction per piece | ❌ Not confirmed |

Until per-piece or policy-level confirmation: use "Material and stone details confirmed per piece."

Approved homepage / category-level copy (safe now):
- "Gold · Silver · Diamonds · Moissanite"
- "Pick the piece. Then pick the shine."
- "Gold or silver. Diamond or moissanite. Different shine. Different direction."
- "METAL: GOLD · SILVER — 925 Sterling Silver"
- "STONE: DIAMONDS · MOISSANITE — D-color VVS Moissanite"
- "Details confirmed per piece."

### Moissanite Rule

Moissanite is a distinct gemstone — not a diamond.
- Do not describe it as a diamond substitute, alternative, or simulant.
- Do not apply GIA grading language to moissanite. GIA grades diamonds. Moissanite uses GRA grading (or equivalent brand grading).
- If grading language (D-color, VVS) is used for moissanite, it must refer to moissanite-specific grading and must be confirmed per piece.

### Lab-Grown Diamond Rule

When writing about lab-grown diamonds:
- Always write "lab-grown diamond" — never shorten to just "diamond" without the qualifier in commercial copy.
- Approved: "Lab-grown diamond. Same stone. Different origin."
- Do not write "synthetic diamond" (negative consumer connotation; FTC has flagged this framing as potentially misleading in isolation).

### Silver Rule

925 sterling silver is a primary material direction for 2T — not a lesser option.
- Never describe silver through price comparison to gold.
- "Silver" alone is acceptable at the category or homepage level.
- "925 sterling silver" requires per-piece purity confirmation before use as a specific claim.

### Plated vs. Solid Rule

Gold-plated pieces must be clearly identified as plated.
- Write: "14K gold-plated" or "gold-plated over 925 sterling silver" — never just "gold" for a plated piece.
- FTC violation risk if plated pieces are presented or implied to be solid gold.

---

## Approved Safe Phrases

Use these:

> Have a logo, sketch, photo, or reference? Start the request here and we’ll guide the next visual direction before quote or production.

> Your request was received. We’ll review the details and follow up with next-step information.

> Budget range helps guide the conversation. It is not a final quote.

> Ask before you buy.

> No deposit. No rush. We quote first.

> Product details are confirmed per piece.

> Availability may vary.

> Material direction helps guide the conversation.

> Gold or silver. Diamond or moissanite. Different shine. Different direction.

> Material and stone details confirmed per piece.

> Ask what fits the piece.

> Gold · Silver · Diamonds · Moissanite

> Pick the piece. Then pick the shine.

> 925 Sterling Silver

> D-color VVS Moissanite

> Details confirmed per piece.

### Acima / Financing

> Lease-to-own options may be available through Acima.

> Apply with Acima →

Do **not** say:
- "financing available"
- "0% financing"
- "pay over time"
- "approved in seconds"
- "everyone qualifies"
- "no credit needed"
- any guaranteed approval language
- any specific rate, term, or payment amount

---

## Safe Custom Flow Language

Use:

```text
Start with the idea.
Choose the direction.
Get next-step details.
```

Use:

```text
Logo / sketch / photo / name / number / reference
```

Use:

```text
Before quote or production
```

Do not use:

```text
Before we make your CAD
Before your free render
Before production starts in X days
```

---

---

## Promotions + Verified Claims Policy

2T Jewelers does run promotions and sales. The site should support promotional architecture as a planned capability.

### Planned Promotional Features (Not Yet Built)

- Special of the Week — featured deal/product module
- Sale strip / promo bar
- Percentage-off campaign banners
- Bundle or buy-one-get-one style campaigns
- Seasonal campaign modules
- Offer modules on collection/category pages

### Competitor Research Rule for Promotions

When researching competitors, include:
- How GLD, King Ice, and similar brands handle promotions, deals, and sales
- Promo bar patterns, deal-of-the-week mechanics, urgency patterns
- What the target buyer expects to see in terms of sales and deals

### Fallback When Product or Policy Data Is Missing

If product details or policy are not yet confirmed:
- Ask the user what is available or what the actual policy is
- Default to safe fallback copy: "Product details are confirmed per piece."
- For promos: "Promo terms shown on eligible items only."
- For availability: "Availability may vary."

### Current Prototype Rule

For current prototype pages:
- Do not add fake product cards or fake discounts
- If a placeholder is needed for layout purposes, mark it clearly in code as a placeholder
- Get user approval before any placeholder content goes into a real preview

### PromoBar — Claim-Safe Copy (updated 2026-06-03)

**"20% OFF YOUR FIRST CUSTOM ORDER"** was **removed** in commit `f8101dd` (Pass 4A, 2026-06-03).

- It was never confirmed as business-owner approved at product/policy level.
- The audit (2026-06-03) identified it as a claim-safety violation: a specific percentage discount without verified terms, conditions, or business-owner confirmation.
- It has been replaced with: **"ASK WHAT'S RUNNING NOW · CUSTOM PIECES BUILT HERE · DETAILS CONFIRMED PER PIECE"**
- This replacement copy is fully claim-safe under the existing approved phrase set.
- Do not re-introduce percentage discounts, BOGO, or promotional offers unless explicitly confirmed by the business owner with terms, scope, and expiry defined.

---

## QA Checklist

Before approving any page:

**Verified claims present → check they are scoped correctly:**
- [ ] Any material/stone grade claim (VVS, GIA, GRA, 925, karat, solid gold) is scoped to the correct product or collection
- [ ] "Natural diamond" is explicitly labeled as natural (not shortened to "diamond")
- [ ] "Lab-grown diamond" always carries the "lab-grown" qualifier
- [ ] "In stock" reflects confirmed live inventory
- [ ] Free shipping / warranty claims reference a written policy
- [ ] No claim appears as a blanket sitewide statement covering products not yet confirmed

**Unverified content → block:**
- [ ] No fake proof, fake reviews, fake celebrity/press, fake UGC
- [ ] No fake products or fake prices
- [ ] No moissanite described as "diamond alternative," "diamond substitute," "diamond simulant," or "fake diamond"
- [ ] No silver described as inferior, cheaper, or lesser than gold
- [ ] No "moissanite diamond" or "VVS moissanite diamonds" wording
- [ ] No plated pieces described as "gold" without plating qualifier
- [ ] No grillz dental/fit/FDA/dental-approval claims
- [ ] No CAD/render/free-mockup promise
- [ ] No deposit/payment/timeline promises without confirmed policy
- [ ] Upload/file language is prototype-safe if backend is not wired
- [ ] Success message is safe
