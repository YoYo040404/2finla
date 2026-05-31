# 2T Jewelers — Claude Tools, Skills, Agents, and MCP Protocol
**Date:** 2026-05-28  
**Purpose:** Define when Claude Code should check and use available skills, agents, plugins, slash commands, and MCP servers for the 2T Jewelers project.  
**Status:** Project source protocol. Read before any major planning, design, frontend, backend, QA, or verification task.

---

## 1. Core Rule

Before any meaningful task, Claude Code must check the task type and decide which available tools/skills are useful.

Do **not** force tools on every task.  
Use tools when they improve planning, implementation, QA, verification, or design quality.

Always stay grounded in:
- the actual repo state
- the current MD source files
- claim-safety rules
- the latest research synthesis
- user approval gates

---

## 2. Mandatory First Reads for 2T Work

For project direction:
- `docs/2t-research-synthesis-2026-05-28.md`
- `2T_MASTER_PROJECT_SOURCE.md`
- `PROJECT_CONTEXT.md`
- `AGENT_HANDOFF.md`
- `NEXT_ROADMAP.md`
- `CLAIM_SAFETY.md`

For homepage / visual / layout / brand work:
- `docs/2t-homepage-master-direction.md`
- `docs/2t-strategic-visual-reset-audit-pittsburgh-bang-2026-05-25.md`

For copy / category / promo / SEO / social / material language:
- `docs/2t-pass5b-competitor-backed-copy-research.md`
- `docs/2t-voc-copy-system.md`
- `docs/2t-copy-swipe-map.md`
- `docs/2t-growth-strategy-seo-cro-90day.md`

---

## 3. Active MCP Servers and Usage Rules

### Playwright MCP
Use for:
- visual QA
- screenshots
- mobile/desktop checks
- route testing
- form behavior testing
- navigation and CTA verification

Use when:
- a UI/layout change is made
- a form flow changes
- before claiming a visual task is complete
- before business-owner demo review

Do not use for:
- pure copy edits
- pure MD/doc edits
- backend-only planning unless testing the browser flow

---

### Magic MCP
Use for:
- UI component exploration
- frontend inspiration
- component refinement
- visual alternatives
- logo/interface inspiration if explicitly relevant

Use when:
- designing or refactoring a visual component
- improving product walls, cards, forms, hero sections, or visual systems
- comparing UI directions

Do not use for:
- backend/API work
- MD sync
- claim-safety copy cleanup
- simple bug fixes

---

### Shopify MCP
Current rule:
- Shopify is paused.
- Do **not** use Shopify MCP unless the user explicitly reopens Shopify.

Use only for:
- future Shopify-readiness planning
- future Shopify migration
- product taxonomy/metafields only after approval

Do not use for current Next.js prototype work.

---

### Gmail / Calendar / Drive MCP
Use only if the user explicitly asks for:
- email workflow
- scheduling
- document/file access

Do not use automatically for 2T implementation work.

---

## 4. Superpowers Skills Protocol

### Required for planning-heavy work
Use:
- `superpowers:brainstorming`
- `superpowers:writing-plans`

Use before:
- new feature planning
- major UX/UI work
- backend architecture decisions
- SEO architecture
- Shopify migration planning
- multi-file implementation

---

### Required for implementing a written plan
Use:
- `superpowers:executing-plans`

Use when:
- there is an approved plan
- changes touch multiple files
- there are checkpoints
- build/test/verify steps are required

---

### Required before claiming completion
Use:
- `superpowers:verification-before-completion`

Use before:
- saying “done”
- committing
- pushing
- reporting success
- handing a task back to the user

Must verify:
- build status
- changed files
- git status
- claim-safety
- no unrelated edits
- relevant browser behavior if UI changed

---

### Use for bugs
Use:
- `superpowers:systematic-debugging`

Use when:
- build fails
- form fails
- API fails
- Vercel deployment fails
- browser behavior differs from expected

---

### Use at branch wrap-up
Use:
- `superpowers:finishing-a-development-branch`

Use when:
- a phase is complete
- commits are ready
- the user may push/deploy
- a clean handoff is needed

---

## 5. Frontend / UI / Design Tools Protocol

Use these only for frontend/design tasks:
- `frontend-design`
- `ui-ux-pro-max:ui-ux-pro-max`
- `ui-design:*`
- `interaction-design:*`
- `visual-critique:*`
- `design-systems:*`
- `design-ops:*`

Use for:
- homepage visual rework
- product wall / category cards
- custom form UX/UI
- mobile CTA behavior
- Watches / Grillz commercial page strengthening
- visual hierarchy
- dark-mode polish
- accessibility and spacing
- component systems
- design QA

Do not use for:
- backend-only work
- API routes
- env vars
- pure docs
- git cleanup

For major UI tasks, Claude should explicitly report:
- which design/UX skills were used
- what they influenced
- what was intentionally not changed

---

## 6. UX Strategy Tools Protocol

Use:
- `ux-strategy:*`

Use for:
- competitive analysis
- information architecture
- content strategy
- category architecture
- north-star direction
- metrics and conversion strategy
- Shopify-readiness planning

Use before:
- creating new landing pages
- changing navigation
- changing SHOP JEWELRY / BUILD CUSTOM balance
- adding Silver/Moissanite architecture
- SEO page strategy

---

## 7. Backend / API Work Protocol

For backend/API tasks, prioritize:
- repo inspection
- `superpowers:writing-plans`
- `superpowers:executing-plans`
- `superpowers:verification-before-completion`
- `superpowers:systematic-debugging` if something fails

Do not use visual/design tools unless the backend work affects:
- form UX
- loading states
- success states
- error states
- user-visible copy

For form backend tasks, verify:
- API key is never hardcoded
- `.env.local` is gitignored
- `.env.example` is safe
- server-side validation exists
- success fires only after real API success
- failed submissions show safe WhatsApp fallback
- attachments are handled safely
- no fake success state remains

---

## 8. Agents Protocol

### Plan Agent
Use for:
- implementation plans
- architecture decisions
- phase planning
- risk analysis

### Explore Agent
Use for:
- fast read-only repo discovery
- finding files/routes/components
- inspecting current implementation before edits

### general-purpose Agent
Use for:
- multi-step research
- mixed planning + execution tasks
- non-specialized code work

### claude-code-guide Agent
Use for:
- Claude Code CLI / SDK / tool setup questions

Do not use agents when:
- a task is tiny
- direct inspection is faster
- user asked for one simple edit
- there is a risk of agents drifting from project rules

---

## 9. Slash Commands Protocol

### `/verify`
Use after:
- UI changes
- form changes
- route changes
- deployed preview testing

### `/run`
Use when:
- local app needs to be launched for QA

### `/code-review`
Use before committing:
- multi-file changes
- backend changes
- form changes
- high-risk claim/copy changes
- visual architecture changes

Recommended effort:
- low/medium for small changes
- high for multi-file implementation
- ultra only for major branches

### `/security-review`
Use for:
- API routes
- file uploads
- env vars
- external services
- form submission endpoints

### `/simplify`
Use only if:
- code became unnecessarily complex
- user approves cleanup
- it will not change behavior unexpectedly

---

## 10. Phase-Based Tool Map for 2T

### Phase 1 — Form Backend / Lead Capture
Use:
- writing-plans
- executing-plans
- verification-before-completion
- systematic-debugging if needed
- `/security-review` if file upload/API route is added
- `/verify` after implementation

Do not use:
- Magic MCP
- frontend-design
- Shopify MCP

---

### Phase 2 — Media / Proof Replacement
Use:
- frontend-design
- ui-ux-pro-max
- visual-critique
- Playwright MCP
- design-ops QA checklist
- verification-before-completion

Use Magic MCP only if component alternatives are needed.

---

### Phase 3 — SHOP JEWELRY Strengthening
Use:
- ux-strategy
- frontend-design
- visual-critique
- Playwright MCP
- writing-plans
- verification-before-completion

---

### Phase 4 — Watches / Grillz Strengthening
Use:
- ux-strategy
- frontend-design
- visual-critique
- claim-safety review
- Playwright MCP

Do not publish strong watch/grillz claims without business verification.

---

### Phase 5 — Silver / Moissanite Architecture
Use:
- ux-strategy
- content strategy
- copy/VOC docs
- claim-safety review
- planning skills
- frontend/design tools only if UI is being built

Do not use:
- unverified D-color / VVS / GRA / diamond-equivalence claims

---

### Phase 6 — SEO / Schema
Use:
- planning
- verification
- code-review
- security-review if structured data includes external URLs or dynamic data

Do not create SEO pages with unverified claims.

---

### Phase 7 — Shopify Readiness
Use Shopify MCP only after explicit user approval.

Use:
- ux-strategy
- planning
- product taxonomy
- metafield architecture
- migration planning

Do not run Shopify CLI unless explicitly approved.

---

## 11. Default Completion Checklist

Before Claude says a task is complete:

1. Run or report build status if code changed.
2. Show changed files.
3. Show git diff summary.
4. Show `git status --short`.
5. Confirm no unrelated files changed.
6. Confirm no secrets are exposed.
7. Confirm claim-safety did not regress.
8. Confirm whether screenshots/QA artifacts are untracked and ignored.
9. If UI changed, run browser/Playwright checks.
10. If backend changed, test success and failure states.
11. If form/upload changed, test safe handling.
12. Do not commit unless the user approves.
13. Do not push unless the user approves.

---

## 12. Current Project-Specific Warnings

- Shopify is paused.
- Do not touch Shopify unless explicitly reopened.
- Do not invent products, inventory, reviews, celebrity proof, store footage, or social proof.
- Do not use strong material/stone claims unless verified and scoped.
- “D-color VVS Moissanite” is approved at homepage/ShineDirectionBand level (business-level confirmed 2026-05-31). Do NOT use it as a per-piece product badge without verification.
- Do not publish “GRA-certified” without certificate proof.
- Do not treat Moissanite as fake diamond.
- Do not position Silver as cheap.
- Do not touch `logo-to-use.png` unless confirmed.
- Do not over-polish before solving operational blockers.
- The current form backend must be verified before any serious traffic.
- The site still needs real media/proof assets to stop feeling prototype-like.

---

## 13. Working Principle

Use tools deliberately.  
Do not tool-spam.  
Do not skip verification.  
Do not drift from the project files.  
Do not treat old decisions as sacred if research and repo evidence prove otherwise.  
Do not change claims without business verification.  
Do not claim completion without evidence.
