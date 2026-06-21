# 2T Jewelers — Claude Tools, Skills, Agents, and MCP Protocol
**Date:** 2026-06-21 (updated)  
**Purpose:** Define when Claude Code should check and use available skills, agents, plugins, slash commands, and MCP servers for the 2T Jewelers project.  
**Status:** Project source protocol. Read before any major planning, design, frontend, backend, QA, or verification task.

---

## 1. Core Rule

Before any meaningful task, Claude Code must check the task type and decide which available tools/skills are useful.

Do **not** force tools on every task.  
Use tools when they improve planning, implementation, QA, verification, or design quality.

**Decide-and-report gate (required):** Before starting any task, decide which skills, MCP servers, plugins, and slash commands are useful for that specific task. When reporting the task, state what was used and what was skipped, and why. Be honest about invocation: say whether a skill was formally invoked, enabled-but-applied-as-doctrine, or skipped as not relevant. Never claim a tool was invoked when it was not.

**Anti-overuse:** Tools are not decoration. Use them when they improve the result. Small string-only / copy-only edits do not need Firecrawl / WebSearch / Magic / Magic UI / Context7. Visible UI changes still get visual/frontend discipline (see the Copy Doctrine section and §5).

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
- `.interface-design/system.md` — governing 2T UI system (type, tokens, depth, motion, CTA variants, card rules, eyebrow pattern, BANG.). Read before any UI/visual work.
- `docs/2t-homepage-master-direction.md`
- `docs/2t-strategic-visual-reset-audit-pittsburgh-bang-2026-05-25.md`

For copy / category / promo / SEO / social / material language:
- `.claude/skills/2t-copy-chief/SKILL.md` — governing copy + audience system. Load before writing or revising any 2T copy.
- `CLAIM_SAFETY.md` — binding claim authority.
- `docs/2t-pass5b-competitor-backed-copy-research.md`
- `docs/2t-voc-copy-system.md`
- `docs/2t-copy-swipe-map.md`
- `docs/2t-growth-strategy-seo-cro-90day.md`

---

## 2.5 Copy Doctrine — 2T Copy Chief

**Any copy task** (hero, CTA, promo, category, PDP/spec, form/upload/success, WhatsApp prefill, social caption, About/store, SEO title/meta) must use:
- `.claude/skills/2t-copy-chief/SKILL.md` — governing copy doctrine (audience, voice, use/avoid words, CTA + WhatsApp rules, promo state machine, material/stone parity, pre-ship checklist).
- `CLAIM_SAFETY.md` — binding; never overridden by copy.
- `PROJECT_CONTEXT.md` — audience, positioning, brand facts.
- `superpowers:verification-before-completion` before claiming the copy task done.

Hardcore ≠ fake slang. No imitation dialect, no AAVE grammar, no parody street voice, no "drip so crazy / bussin / gang / for the culture". Copy is sharp because it knows the product, the buyer, the shop, and the trust tension — not from slang density.

**Visible-site copy** (anything that renders on the live site) must ALSO clear the rhythm gates:
- `.interface-design/system.md` — Anton headline weight, gold/ice system, eyebrow + CTA variant fit.
- `frontend-design` — copy/layout rhythm; CTAs match the existing arrow `→` system; no generic boutique-luxury language; no corporate softness.
- `visual-critique` — where useful, for hierarchy/typography/composition of the copy in context.
- Mobile fit at 390px (no horizontal scroll, no overflow) and CTA rhythm preserved.
- Playwright QA at relevant breakpoints when the change is visible.

Do not soften the site. Keep it street-luxury, product-fluent, text-first, real Pittsburgh jeweler energy.

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

### Next DevTools MCP
Use for:
- inspecting Next.js routes, runtime behavior, metadata, diagnostics
- verifying page metadata (title, description, OG) before and after SEO passes
- diagnosing rendering mode (SSR/SSG/ISR) per route
- route tree inspection without running `npm run dev` manually

Use when:
- implementing or QA-ing SEO metadata
- debugging route or layout behavior
- verifying Next.js config changes

Do not use for:
- visual/design work — use Playwright for screenshots
- copy edits

---

### Chrome DevTools MCP
Use for:
- live browser console inspection
- layout, overflow, spacing diagnostics
- performance profiling
- network request inspection (useful for verifying no unwanted external scripts load)

Use when:
- debugging a visual layout issue in the live browser
- verifying that no external scripts (TikTok embed.js, Instagram embed.js, analytics pixels) load unexpectedly
- inspecting CSS computed values that look wrong in Playwright screenshots

Do not use for:
- pure code edits
- MD sync
- backend API work

---

### Context7 MCP
Use for:
- looking up current Next.js / React / Tailwind documentation before implementation
- resolving API or config questions without guessing
- checking current Next.js `generateMetadata`, `sitemap.ts`, `robots.ts`, Tailwind v4 specifics

Use when:
- implementing or changing Next.js config, metadata, or routing features
- referencing a specific Next.js or Tailwind API that may have changed recently
- any technical implementation where the docs are needed before writing code

Do not use for:
- general brand/copy/strategy decisions — those use project docs

---

### Magic UI MCP
Use for:
- controlled shine/bling effects: glow borders, light sweep, animated text, sparkle, background beams, gradient mesh
- adding motion to hero sections, product cards, CTAs when explicitly planned
- generating effect variants to compare before approving one

Use when:
- adding a planned visual effect approved by the user
- exploring motion options for a specific component

**Magic UI guardrail (non-negotiable):**
- Effects must stay: street-luxury, black/gold/ice, controlled, premium, hip-hop
- Effects must NOT make the site feel: SaaS, casino, NFT, childish, nightclub, or rave
- Do not use Magic UI to add effects not explicitly approved in the current task
- Do not use glitter, rainbow, or neon effects
- Do not add particle/confetti animations
- One effect at a time — do not layer multiple animated effects without user approval

---

### Gmail / Calendar / Drive / Spotify MCP (forbidden for 2T unless approved)
These connectors are connected to the environment but **forbidden for 2T work** unless the user explicitly approves them for a specific task:
- Gmail — email workflow
- Calendar — scheduling
- Drive — document/file access
- Spotify — not relevant to 2T; do not use

Do not use any of them automatically for 2T implementation work. Shopify (above) is likewise paused/forbidden unless explicitly reopened.

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
