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
