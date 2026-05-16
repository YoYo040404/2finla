# 2T Jewelers — Custom Page UX Rewrite Brief

## Current Status

**Research and planning phase: complete.**
**Execution phase: pending user approval.**

The Next.js `/custom` page is built and technically works, but the user reviewed the page and said it is too heavy and not friendly/easy enough.

Current route:

```text
http://localhost:3000/custom
```

Current files:

```text
app/custom/page.tsx
components/custom/CustomHero.tsx
components/custom/PieceTiles.tsx
components/custom/HowItWorks.tsx
components/custom/CustomForm.tsx
components/custom/CustomFaq.tsx
```

Current issue:

- long scroll
- heavy categories before user starts
- form appears too late
- custom flow not immediate enough
- page feels like section stack, not fast custom order funnel
- piece cards may be too big/heavy
- need to make it easier for audience to start

## Confirmed Target Mobile Flow

The simplified `/custom` page should reduce to three steps:

1. What are you building?
2. Upload or describe the idea.
3. How do we reach you?

User can start with: logo, sketch, photo, name, number, reference, or rough idea.

---

## Business Goal

Custom order is the main margin engine.

The page should make this obvious within seconds:

```text
logo / sketch / drawing / photo / reference / name / number / idea
→ material / stone / budget direction
→ next-step visual direction
→ quote / approval path
```

User should quickly understand:

> I can send my idea, logo, sketch, photo, name, number, or reference and 2T will guide the next step.

---

## Research Requirement

Before changing code, run competitor research.

Use available tools:

- WebFetch / WebSearch
- Playwright if available
- frontend-design skill if available
- planning mode

Research:

1. GLD custom / customized jewelry flow
2. CustomMade custom jewelry
3. popular custom pendant / photo pendant / logo pendant brands
4. custom grillz / hip-hop jewelry sites if accessible

Study:

- Where custom CTA appears
- Whether form is above or below inspiration
- How upload logo / sketch / photo / reference is handled
- Whether competitors use steps, chips, cards, or long category sections
- How much copy appears before the form
- How mobile scroll feels
- What makes the page feel easy/heavy
- What language makes buyer feel safe to start
- What not to copy

Do not copy competitor text, assets, claims, images, trademarks, or layouts exactly.

---

## Questions the Plan Must Answer

1. Is the current `/custom` page too divided by categories?
2. Is the scroll too long or too section-heavy?
3. Is the custom order flow obvious within the first screen?
4. Should the form appear earlier?
5. Should there be a shorter “Start with your idea” block above the fold?
6. Should `PieceTiles` be reduced, moved, or turned into selectable chips?
7. Should the homepage have a stronger custom order entry?
8. Does upload/reference intent feel immediate enough?
9. Does the page feel like custom jewelry ecommerce, not a generic contact form?
10. What should be changed before continuing?

---

## Preferred Revised Structure

Recommended direction to validate through research:

1. Hero:
   - “Bring the idea. We’ll shape the piece.”
   - Short supporting line about logo/sketch/photo/name/number/reference
   - Primary CTA: “Start Custom”

2. Quick idea strip:
   - Logo
   - Sketch
   - Photo
   - Name
   - Number
   - Reference

3. Condensed 3-step flow:
   - Send the idea
   - Choose direction
   - Get next-step details

4. Main form earlier on page.

5. Piece types as compact chips/buttons, not heavy cards if the current grid feels too much.

6. FAQ below the form.

7. Final CTA only if useful.

---

## Homepage Custom Entry Requirement

Plan a stronger custom order entry on homepage:

- visible near top
- not hidden
- direct CTA: “Start Custom”
- copy: “Have a logo, sketch, photo, name, number, or reference?”
- not spammy
- not a modal/popup unless explicitly approved

---

## Safe Copy Direction

Use:

> Have a logo, sketch, photo, or reference? Start the request here and we’ll guide the next visual direction before quote or production.

Use:

> Your request was received. We’ll review the details and follow up with next-step information.

Do not use:

- free mockup
- free render
- CAD
- turnaround time
- production timeline
- deposit terms
- guaranteed proof
- warranty
- response time

---

## Planning Output Required

The next planning report must include:

1. Competitors researched
2. Key patterns found
3. Current `/custom` UX verdict
4. What feels too heavy or unclear
5. Recommended simplified page structure
6. Homepage custom-entry recommendation
7. Exact components to revise
8. Exact copy direction
9. Risk level
10. Stop and wait for approval before execution
