# Homepage preview v1 — 2026-10-12

Owner reference: ChatGPT Image Oct 11, 2026, 01_11_18 PM.png. Owner authorizes homepage prototype and separate GitHub/Vercel preview; no main merge or production release.

Sources: app/page.tsx, app/home-preview.module.css, home-only logo in components/layout/Header.tsx. Custom and H2 are separate. Existing demo imagery is visibly labeled, not inventory or real store/customer proof. Real photos and rights remain required.

Final local Next.js build including TypeScript passed; scoped ESLint and diff check passed. Homepage and seven category routes returned HTTP200; one H1, noindex and demo notice verified. These checks do not establish rendered desktop/mobile fidelity or interaction QA.

Independent source/design critique: REVISE, rendered criteria NOT VERIFIED. Director addressed CTA parity, narrow/tablet heading sizing, BANG offset and brush typography with Road Rage. No visual acceptance or Design Lock. React/Next current installed documentation used. No new npm packages.

Vercel reports successful deployments for 5adde69 and 37c4b18; fb14605 deployment failed without model-accessible build logs. This documentation commit provides one bounded new build attempt with unchanged final code. It is a retry, not proof that the cause was fixed. Do not merge if deployment or required QA remains unresolved.

Next: owner opens Preview; obtain authenticated browser proof and real media, review both desktop/mobile, then approve named design revision separately. Studio Director remains accountable. Work journal is Google Docs; repository is code truth.

## Preview review v2 — 2026-10-13

Current owner authorizes continuing, source review and pushing test-site updates for presentation, not production. Based on remote b62c82e, isolated worktree studio/home-review-v2. Independent native reviewer /root/homepage_review reviewed immutable original source and found two medium issues; Director accepted both. Four material panels are now informational with one explicit collections CTA, hover affordance removed; blank Instagram filmstrip removed in favor of profile link; demo image labels preserved and category illustration wording cleaned. Material specifications use per-piece confirmation pending published-item evidence.

Changed app/page.tsx and app/home-preview.module.css. Full Next build/TypeScript and scoped ESLint passed; diff check passed. First build failed because shared node_modules symlink was outside Turbopack root; copied dependencies locally and rerun passed. No dependency upgrades performed; earlier security upgrade gate remains open. No rendered desktop/mobile proof or Design Lock; real media and rights remain pending.

Vercel list_projects sees correct project/team, list_deployments returns scope403. No installed Vercel CLI. Cloud preview opens Vercel login, so browser login is not complete. Prior remote b62c82e has successful Vercel GitHub status. Next commit deployment must be checked separately; never infer successful deployment from push. No main merge, real lead send or production release.

## Hero motion preview — 2026-10-13

Owner approved proposed hero-video test-site update and requested viewing link. Code deployment 4e831070cc0f346ce3274d19f82eb5d79b1a03f0 passed Vercel at 9yTKeTfWqZRnFtukPRt4JNAN72cJ. Reuses tracked 8.04-second 1280x720 H264 demo hero-loop-demo.mp4 (8.7 MiB; visibly KlingAI concept). No claim that footage is owned product/customer proof. Existing demo notice remains. No new service or package installed.

Changes: components/home/HomeHeroMotion.tsx; app/page.tsx; app/home-preview.module.css. Muted inline loop above server poster, revealed on loaded data; accessible pause/play control. Reduced-motion and save-data initially avoid assigning source until explicit play. Live preference changes pause playback; manual pause persists. Failed video leaves static poster. Adds short hero-copy entry and subtle image hover with reduced-motion guards.

Native independent reviewer /root/homepage_review checked source, found pause reset and live save-data issues; Director fixed both and reviewer confirmed source correction. Source-reset state concern is out of scope because homepage source is immutable. Review is not rendered visual/playback acceptance.

Local full Next build/TypeScript, scoped ESLint and diff check passed. Same-process HTTP smoke returned 200 with video, play control, demo label and preload none. Cross-process localhost failed due runtime network isolation; hostname binding workaround and same-process smoke succeeded. Existing cloud browser login block remains; desktop/mobile render, actual autoplay/pause/reduced-motion/device/network and performance remain NOT VERIFIED. No Design Lock, main merge or production release. Existing dependency security upgrade gate and real-media rights remain open.
