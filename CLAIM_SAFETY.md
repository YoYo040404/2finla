# 2T Jewelers — Claim Safety Rules

## Purpose

This file prevents unverified claims, fake proof, unsafe promises, and misleading product/service language.

Apply before every build, copy change, QA pass, and deployment.

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

## Allowed When Verified and Scoped

The following stronger claims are **permitted** if and only if they are:

1. **True and verified** (confirmed product data, policy doc, or supplier certificate)
2. **Scoped** to the correct product, category, promo, or policy — not blanket site-wide
3. **Approved** by the user before publishing

| Claim | Scope required |
|---|---|
| Solid gold | Product-level — confirm alloy and karat |
| Real diamonds | Product-level — confirm supplier |
| Natural diamonds | Product-level — confirm supplier |
| VVS / VS / SI | Product-level — confirm grade source |
| GIA certificate | Product-level — confirm the cert exists |
| Free shipping | Policy-level — confirm shipping policy |
| Lifetime warranty | Policy-level — confirm warranty policy |
| Guaranteed | Policy-level — confirm what exactly is guaranteed |
| In stock | Product-level — confirm actual inventory |

**Do NOT** use any of these as global blanket claims across the whole site.  
**Do NOT** publish any of these without product-level, category-level, or policy-level verification.

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

---

## QA Checklist

Before approving any page:

- [ ] No forbidden claims
- [ ] No fake proof
- [ ] No fake products
- [ ] No fake reviews
- [ ] No fake celebrity/press
- [ ] No unverified materials
- [ ] No shipping/warranty/returns language
- [ ] No timeline
- [ ] No deposit/payment promises
- [ ] No technical CAD/render promise
- [ ] No grillz safety/dental claims
- [ ] Upload/file language is prototype-safe if backend is not wired
- [ ] Success message is safe
