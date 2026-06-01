# 2T Jewelers — Project Master Source (Current)

This file is the canonical living reference for project-wide rules, discipline constraints, and cross-cutting decisions that are not covered by `CLAUDE.md`, `CLAIM_SAFETY.md`, or individual docs.

Read `CLAUDE.md`, `PROJECT_CONTEXT.md`, `CLAIM_SAFETY.md`, and `AGENT_HANDOFF.md` for business context, claim rules, and execution state.

---

## Prompt Size / Context Discipline

Future Claude/Codex prompts must be proportional to the task size.

**For small or surgical tasks** (single-file edits, metadata tweaks, copy fixes, targeted SEO patches):
- Use a short, direct prompt.
- Include only: exact scope, the few relevant files, what not to touch, required checks, changed-files report, `git status --short`, and a no-commit-until-approval instruction.
- If continuing in the same Claude thread and context is already fresh, do not reread every project source file — reference only the current planning doc and the few files directly involved.

**For new Claude threads, major strategic work, UX/UI redesign, SEO architecture, claim-safety strategy, backend work, or multi-file implementation:**
- Use the full read-first source stack: `CLAUDE.md`, `PROJECT_CONTEXT.md`, `CLAIM_SAFETY.md`, `AGENT_HANDOFF.md`, and relevant docs.

**Goal:** Reduce wasted context and turnaround time while still protecting project direction, claim safety, and brand integrity on every pass.

---

## SHOP vs CUSTOM Commerce Rule

The whole site is not custom. The site has two distinct commerce modes. This rule supersedes any older planning language that made SHOP pages sound like custom build funnels.

---

### Mode 1 — SHOP (product / category pages)

These categories are regular product or category shopping pages:

- Chains
- Necklaces / most standard pendants
- Rings
- Bracelets
- Earrings
- Most watches

Customers browse, choose, ask about, confirm details, and buy or inquire. Products may have variations: length, design, size, metal direction, stone direction, condition, availability, price per piece.

**Use this language:**
- Shop
- See
- Choose the style
- Choose length / size / design
- Ask what's available
- Text about this piece
- Confirm details per piece
- Material and stone details confirmed per piece

**Do NOT use on regular category pages:**
- Build custom
- Send the idea
- Upload your image
- Start the custom build
- Made from scratch

---

### Mode 2 — CUSTOM (build / inquiry flows)

Custom language belongs to:

- `/custom` page
- Custom pendants: photo, logo, name, number, memorial, one-off idea
- Special custom jewelry requests
- Grillz (teeth grillz are custom/process/fit-driven by nature)

**Use this language:**
- Send the idea
- Upload the image
- Build the piece
- Quote before the build
- No deposit to start
- Fit/process confirmed before moving forward

---

### Pendants Rule

Pendants are split:

- Regular pendants → SHOP products (product/category language)
- Photo / logo / name / number pendants → CUSTOM (custom/build language)

---

### Watches Rule

Watches are high-ticket product inquiry pages, not custom by default.

**Use:**
- Ask what watches are available
- Condition/details confirmed per piece
- Text before buying

Do not use "build your watch" unless a specific verified custom/modification service is being discussed.

---

### Chains Rule

Chains are regular product/category items.

**Use product language:**
- Cuban, rope, tennis
- Length / width
- Material/stone direction
- Ask what's available

Custom pairing (e.g., matching a chain with a pendant) may appear as secondary context, but must not dominate the Chains page.
