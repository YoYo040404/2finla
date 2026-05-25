# 2T Jewelers Strategic Visual Reset Audit

## Audit basis

I verified that the three commits you named are present in the repo: `b049d30` on May 24, `af7f20d` on May 25, and `f082c62` on May 25. I did not find evidence of a later visible feature commit than `af7f20d` or a later visible docs commit than `f082c62` in the connector results, so I treated the current visible state as **Pass 3 code plus the later docs lock**.

This is still a **lead-generation / custom-inquiry site**, not a full checkout ecommerce store. The live structure is built around category entry, WhatsApp, phone, and custom flows; there is no shop cart or checkout behavior in the primary experience, and the custom request flow is still a front-end mock that logs payload data locally and simulates success after a timeout. That means the site should feel shop-ready, but the strategy should preserve the current business model instead of pretending it is already a full PDP-to-cart store.

I inspected the attached screenshots as primary visual evidence. The strongest current-state coverage is the homepage desktop and mobile, plus custom mobile, watches mobile, a grillz top-of-page view, and the Midnight Icebox mockups for desktop/mobile/custom. The audit is therefore **high confidence for the homepage**, **medium confidence for custom**, and **moderate confidence for watches/grillz beyond the supplied frames**. I did not have a full current watches desktop capture, a full current grillz scroll, or a live interactive build. I also had two competitor sources that were not accessible through the tool: Pristine Jewelers and Eliantte.

One repo tension matters immediately: the repo already contains approved logo assets committed on May 22, but the current header code still renders an inline text lockup rather than using those assets. That is not a minor implementation miss. It is a sign of direction drift between docs, assets, and front-end execution.

## Diagnosis

**Blunt diagnosis**

**Hero.** The hero is much better than the older versions, and the chain-led visual in the current homepage screenshots is the first part of the site that actually enters the right world. But it still does not fully land because the header brand presence is weak, the BANG mark is passive, and the hero is doing too much emotional work by itself. The page opens hot and then the brand cools off too fast. The header still behaves like a neat dark nav bar, not like the masthead of a real hard-jewelry store. The code confirms that the current header is still a simple text lockup, despite approved logo assets existing in the repo.

**Shop section.** This is the main failure. The layout logic is good, but the section still reads like a disciplined design system rather than a hungry jewelry wall. The featured row and secondary tiles are structurally smart, yet visually they are still mostly abstract vitrines and tonal wells instead of pieces, trays, mouths, wrists, necks, bezels, or real shine. That means the section sells taxonomy, not desire. The code backs that up: these are `mi-vitrine` surfaces, not real product media systems.

**Custom lane.** The copy is stronger than before, and the value proposition is clear: send the idea, quote first, no deposit. But visually it still leans toward "dark luxury form flow" more than "identity flex." On the homepage it is still a text-and-frame moment. On the custom page, the structure is solid, but the emotional proof is still weak because there is no real custom-work media carrying the promise. Worse, the current custom request flow is still mock behavior in code, so it looks more operationally mature than it is.

**Pittsburgh trust section.** The trust message is right. The visual execution is not. "Real store. Real work." is the correct type of line, but it is attached to an empty media frame, so the user gets told there is proof without feeling it. The component comments explicitly say those media slots are placeholders waiting for store assets. That is exactly how the section reads in the screenshots: true facts, weak aura.

**Social section.** The strategy is rational and safe, but culturally it is still cold. TikTok, Instagram, and WhatsApp are framed correctly, and the copy is tighter after `b049d30`, but the visual surface is still basically "brand canvas pending." Without real clips, real stills, or at minimum real thumbnail strips, it reads like a scaffolding block.

**Typography.** This part improved for real. The repo now uses an Anton/Archivo/JetBrains Mono system and the homepage display handling is much harder than the older boutique direction. That was the correct move. The problem is not the typography direction. The problem is that the typography is being forced to carry too much of the "bling" and "impact" because the media isn't carrying enough of it.

**Color and light.** Midnight Icebox as a token system is disciplined, but in the current execution it is still too matte. The homepage often reads as black + gold + controlled blur, not black + ice + gold + metal + flash. The visual center of gravity is still too subdued once the hero is over. Strategic judgment: the issue is not that the palette is wrong; it is that the current palette is under-fed by real reflective surfaces.

**Motion and effects.** The motion discipline is good. It is not corny, not nightclub-flyer, not fake glitter spam. But it is also not enough below the fold. The hero gets the most energy, while the product gateway, trust, and social sections remain visually quiet. That creates a drop in tension that is visible in the screenshots and structural in the code.

**Copy and tone.** The copy got materially better after `b049d30`. The new grillz, watches, social, and Pittsburgh language is tougher and less consultant-like. The internal VOC and swipe docs also push the site toward direct, concrete, buyer-facing language instead of polished luxury filler. That is real progress. But the homepage still sometimes sounds like a very good prototype explaining itself, rather than a store aggressively moving product and custom intent.

**Media and assets.** This is the biggest blocker. The screenshots and the component comments align: the site still depends on abstract placeholders in key sections. That alone is the main reason the site does not yet fully hit the intended hood / hard hip-hop / bling target. You can harden copy and polish layout all day, but if half the important surfaces are still empty luxury frames, the world will stay half-built.

**Mobile experience.** Mobile is usable and commercially direct. The sticky CTA bar is the right instinct for this business model. But it also compresses the emotional opening and keeps reminding the user that the mobile experience is a flow system, not a jewelry environment. On mobile especially, the stacked shop tiles still become dark slabs faster than they become objects of desire.

**Overall brand feel.** Bluntly: the current site feels like a **well-executed dark prototype for a hard-jewelry brand**, not yet like **a real hard hip-hop jewelry world**. It is closer. It is more disciplined. It is less soft. But it is still too much interface and not enough jewelry environment.

**What is working**

The strongest thing on the site is the **structural thesis**: hero first, shop lane first, custom lane second, then real-store proof and social. That is the right architecture for a lead-gen jewelry store that still needs to feel like it sells product, not just requests.

The second strongest thing is the **claim-safety framework**. The repo docs consistently protect against fake materials, fake inventory, fake warranties, fake promo claims, and fake social proof. That is strategically correct. In this category, competitors often lean on stacked promotions, guarantees, review walls, influencer proof, and high-claim language. GLD, King Ice, Frost NYC, Gold Presidents, and Avianne all show versions of that behavior. 2T should learn from their category density and sales pressure, not from their blanket claim habits.

The typography and copy direction are also genuinely stronger. The repo has moved toward harder display type, a darker retail palette, direct CTA language, and specific phrases like "Text 2T," "We quote first," and "No deposit to start." That is the correct voice territory.

The custom flow, in structure, is also better than average for this kind of site. It asks the right questions, gives a WhatsApp bypass, and frames the process in simple steps. The problem is not the funnel logic. The problem is the emotional coating.

## Direction choice

**Keep, evolve, or replace Midnight Icebox**

Choose **exactly one**: **evolve it into a harder sub-direction**.

Do **not** keep Midnight Icebox exactly as-is.
Do **not** replace it with a totally different concept.

Why: the bones are right. The typography move was right. The hero/shop/custom/trust architecture was right. The claim-safe discipline was right. But Midnight Icebox, as currently implemented, still ends up too tasteful, too matte, and too placeholder-dependent. Replacing it would throw away useful progress. Keeping it would trap the site in a polished black-box prototype zone. The correct move is to **push it harder, lower, louder, and more jewelry-physical**.

**Final visual strategy**

Call the final direction **Pittsburgh BANG**.

Core idea: **a real downtown jeweler after dark, where the product hits first, the store feels local and lived-in, and the site sells identity as much as jewelry.**

Why it fits 2T: hip-hop jewelry culture is not just about cataloging materials. It is about status, one-of-one identity, visible shine, and named symbolic pieces. The AMNH "Ice Cold" exhibition coverage frames hip-hop jewelry as a cultural language of success and identity, not just accessory merchandising. Current mainstream grillz coverage also reinforces that custom mouth jewelry still functions as spectacle, signature, and conversation piece. 2T should lean into that identity logic, but root it in its own facts: Downtown Pittsburgh, 5th Ave, over 30 years, direct text access, and shop/custom dual entry.

How it should feel: black lacquer, hard light, metal reflections, gold stamps, ice flashes, dense category access, and direct contact. Not clean luxury. Not boutique. Not fake streetwear. Not influencer merch. Not "for the culture" cosplay.

How it should sell: by making the user feel, within seconds, that there are two immediate moves available: **buy the shine** or **send the idea**. Official competitor sites that feel commercially alive consistently do three things: they expose dense category entry, they name custom pathways directly, and they offer immediate contact or service escalation. GLD, Icebox, TraxNYC, Johnny Dang, Frost NYC, King Ice, Gold Presidents, and Avianne all show versions of those patterns, even though several of them overdo promos, celebrity proof, or warranties.

How it differs from current Midnight Icebox: less blur, less empty matte black, less "designed frame," more real surfaces; less decorative refinement, more retail aggression; less placeholder prestige, more visible jewelry tension.

Mandatory elements: stronger masthead, real or real-looking product media in the first shop gateway, one hard mobile hero crop, tighter Pittsburgh proof, smaller but more alive social proof, and BANG used as a hallmark system rather than a cute motif. Elements to avoid: equal black boxes, fake inventory cards, fake reviews, fake celebrity flex, open-ended glossy "premium" language, generic gold gradients, or parody street voice.

**First 5 seconds**

Strategic judgment: in the first five seconds, a visitor should get five signals in this order.

First visual hit: **one dominant jewelry image or motion crop** that can only belong to this category. Not a soft luxury background. Not an abstract glow. A chain close-up, watch face, grillz smile, pendant-on-chest, or hand stack.

Headline impression: **BUILT TO HIT.** stays. It is still the best line on the site.

Trust signal: one line, fast: **Downtown Pittsburgh. Real store. Over 30 years.**

CTA clarity: two immediate paths visible without thinking: **SHOP JEWELRY** first, **BUILD CUSTOM** second. Then **TEXT 2T** as the no-friction escape hatch.

Motion: one sweep or glint across real metal. Not sitewide glitter.

Mobile-first version: tight crop, tighter type block, one primary CTA visible above the fold, sticky bar present but visually subordinate to the hero rather than dominating it.

The user should understand both SHOP JEWELRY and BUILD CUSTOM immediately. That is already structurally true in the repo; it just is not visually forceful enough yet.

**Hero strategy**

Headline: keep **BUILT TO HIT.**

Support line: replace generic hero support with a harder product stack. Best direction:
**Grillz. Watches. Chains. Pendants. Custom.**
**Real Pittsburgh jeweler. Text 2T.**

Media treatment: one real hero loop or still sequence built from **actual 2T product macro footage**. If the only usable asset today is a chain loop, use it hard and crop tighter. If you have grillz, a bezel watch, or pendant-on-body footage, rotate those by campaign. The hero should stop behaving like a dark fashion poster and start behaving like a storefront blast.

BANG role: a small hallmark under the headline or near the CTA block. Not a full slogan. Not a button.

CTA hierarchy:
Primary: **SHOP JEWELRY**
Secondary: **BUILD CUSTOM**
Tertiary utility: **TEXT 2T**

Lighting and shine: real highlights, edge reflections, and one controlled sweep. The gold should feel like a hit, not a wash.

Mobile behavior: keep one dominant crop and one clean copy block. Do not let the hero become text over dead space.

What must be removed from the current hero: any remaining sense of decorative blankness or overly neat top-bar energy. The stronger the hero media gets, the less the page can tolerate a timid header.

What must be added only if real assets exist: actual grillz mouth shots, watch-wrist rotation, pendant-on-neck or pendant-in-hand footage, or fast micro-clips from store/product handling.

**BANG strategy**

Use **BANG.**, not **BANG!** The period is cleaner, more owned, and more jeweler-like. It reads like a stamp, not a meme.

BANG should become a **brand system**, but a restrained one. It is not the H1. It is not every section label. It is not decoration sprayed everywhere.

It should work in five places:

- as a **hero hallmark**
- as a **weekly special / product hit marker**
- as a **section transition beat** once, maybe twice
- as a **custom confirmation micro-brand moment**
- as a **social / campaign tag** when tied to real content

It should not appear as body copy filler, not become a CTA replacement, not show up on every tile, and not turn into a fake hype device. Sitewide, keep it to **three to five intentional appearances**. That is enough to feel owned and not enough to become repetitive.

The visual treatment should be metallic, stamped, or slightly embossed. Borderless or near-borderless. More hallmark than button. The current repo already uses BANG in the hero, the marquee, and the custom flow. The problem is not absence. The problem is under-definition.

## Commerce and trust strategy

**Shop Jewelry strategy**

The shop section should feel like a **display wall**, not a grid.

Layout logic: keep the current idea of a featured row plus secondary rail, but change the visual center of gravity. The top row should be **three dominant commercial tiles** driven by product energy, not by design placeholders: **Grillz**, **Watches**, and **Chains / Pendants**. The current repo already structurally privileges Grillz, Watches, and Chains; that is correct.

Visual rhythm: asymmetry on desktop, compression on mobile. One biggest hitter, one medium prestige tile, one high-intent utility tile. The second row can carry Pendants, Rings, Bracelets, Earrings, and one Custom interrupt.

Mobile behavior: the first category tile has to feel like the first real product wall. Right now it is just the first dark box. On mobile, make tile one visually dominant, tile two clearly visible, and everything after it secondary.

Category treatment: stop treating each category like the same kind of rectangle. Grillz should feel bodily. Watches should feel mechanical and cold. Chains and pendants should feel weighty and reflective. Rings and bracelets can be smaller and denser.

Promo / special treatment: the weekly special block should feel like a named display card, not just another headline. The current repo has the right place for it, but it needs a stronger category signal and a more obvious commercial role. The official competitor patterns back this: GLD and King Ice use stacked promotional energy; TraxNYC uses explicit sales/custom/price-driven category entry; Icebox builds custom and concierge contact directly into the shopping system. 2T should borrow the **commercial immediacy**, not the discount noise.

Product-card treatment: no fake prices, no fake specs, no fake "best seller" counts. Use category cards, featured-piece cards, or inquiry cards only when the content is real.

Image requirements: you can fake **mood**, but you cannot fake **inventory credibility**. Without real assets, do abstract editorial tiles using real 2T textures, crops, and metal detail. Do not pretend those are products in stock.

What should be clickable: every top tile, every secondary category, weekly special, and the "ask what's in / ask what's running" utility actions. The user should be able to browse or text at every stage.

What should visually dominate: the top three category surfaces and one custom interruption card. Not the footer, not the social teaser, not the proof strip.

**Custom strategy**

The custom lane should feel like this:

**Send the photo. Send the logo. Build the piece. We quote before the build.**

That is already close in copy. The reset is visual and tonal, not conceptual.

Copy direction: use objects, not abstract service words.
**Logo. Name. Photo. Piece.**
**Top. Bottom. Full set.**
**Pendant. Grillz. Watch direction.**
That is better than "consultation," "expert guidance," or "bespoke craftsmanship."

Flow: keep the WhatsApp bypass. Keep the step logic. Keep the piece type selection. Keep the "idea or upload" dual path. That structure is correct. The problem is that the emotional lead should come from finished work, not from the input fields.

CTA labels:
**START THE REQUEST** is acceptable.
Better options, depending on surface: **SEND THE IDEA**, **BUILD CUSTOM**, **TEXT 2T**, **START CUSTOM REQUEST**.

Trust handling: keep **No deposit to start** and **We quote before the build**. Those are strong. But anchor them to real visual proof later: finished customs, store desk shots, jeweler hands, logo-to-piece examples.

WhatsApp / phone / text behavior: keep them present on every custom surface. Icebox uses WhatsApp in concierge contact; TraxNYC uses direct call/text language; Johnny Dang exposes booking and custom categories directly. Those patterns support keeping the human bypass strong.

Homepage custom lane: it should feel like an interruption card in the product wall, not a mini landing page.

`/custom` page later: keep the current form spine, but re-skin the page around **outcomes** — finished pendants, grillz sets, engraving, sketches to final builds — not just steps.

Claim-safety: do not make material or stone promises until piece-specific data exists. The current claim-safety posture is correct and should stay.

**Real-store and Pittsburgh strategy**

This is a trust weapon. Use it like one.

You have four high-value trust facts:
- **332 Fifth Ave**
- **Downtown Pittsburgh**
- **Over 30 years**
- **Text or come through**

Those should appear in four places total:
- a short hero utility line
- the proof marquee
- one dedicated real-store proof block
- the footer / contact area

That frequency is enough to feel real without sounding repetitive. The current repo already distributes these facts across the homepage and footer, but the dedicated proof block is visually underfed because the media is placeholder-only.

Make these lines street-commercial, not civic:
- **Downtown Pittsburgh. Real store.**
- **332 Fifth Ave. Text first or walk in.**
- **Over 30 years. Product details confirmed per piece.**

Do not write this section like a chamber-of-commerce About page. Do not over-explain the history. Make it proof, not biography.

Phone / WhatsApp / social channels should feel like access points, not support links. Footer contact is fine, but the proof block should feel like "you can reach the real shop now," not "contact information is available."

**Asset strategy**

Exact real assets needed, in priority order:

- hero video or still loop with one dominant piece
- grillz macro
- watch macro
- pendant macro
- chain macro
- neck / wrist / hand shots
- storefront photo
- display-case footage
- jeweler hands / counter footage
- custom before / after pairs
- TikTok / Instagram clip stills
- WhatsApp / text interaction screenshot or staged visual
- one short in-store ambient clip

What can be done without real assets:
- stronger header
- better hierarchy
- BANG system
- harder copy
- better tile layout
- tighter proof/social sections
- better use of approved brand assets

What cannot be done convincingly without real assets:
- true bling credibility
- real store proof
- social energy
- luxury watch legitimacy
- custom outcomes that feel expensive rather than speculative

Highest-priority assets for first-five-second impact:
- hero media
- one killer grillz or watch macro
- one strong chain/pendant product crop

Highest-priority assets for custom inquiries:
- before/after custom examples
- logo/photo/sketch-to-piece examples
- real jeweler handling footage

Highest-priority assets for trust:
- storefront
- display case
- sales desk / bench / jeweler hands
- one authentic in-store clip

What can be shot fast on a phone:
- store walk-in
- display cases
- close-up of chains/pendants on black
- texting with 2T
- over-counter clips
- hand-held piece turns

What needs professional production:
- hero master loop
- watch macro
- grillz macro
- high-contrast pendant / chain campaign stills
- any on-body shots meant to carry the brand for months

## Build decision

**Technical and build recommendation**

Choose **exactly one**: **create a new experimental branch**.

Do **not** continue patching the current homepage on main.
Do **not** roll back to `b049d30`.
Do **not** pause everything for assets first.

Why: the current codebase is reusable, but the homepage has accumulated too many half-solutions: approved logo assets exist but are unused, docs still contain older header assumptions, placeholder media frames still dominate important sections, and the site has reached the point where another polish pass will compound drift instead of solving it. A branch gives you room to reset the homepage visual system cleanly while preserving the good work already done in structure, copy, and claim safety.

Rolling back to `b049d30` makes no sense because `af7f20d` brought legitimate homepage visual improvements, and the docs lock at `f082c62` is already built around a later direction hierarchy. Pausing for assets is also too defensive: you can improve the masthead, product hierarchy, tile logic, proof compression, and social scaffolding now. But doing those things on main, as another layer, is the wrong move.

**Decision matrix**

Higher is better. For **dependency on real assets**, a higher score means **less dependence**.

| Option | Visual impact | Implementation risk | Speed | Brand fit | Conversion potential | Dependency on real assets | Ability to avoid previous mistakes |
|---|---:|---:|---:|---:|---:|---:|---:|
| Continue current homepage | 2 | 5 | 5 | 2 | 3 | 4 | 1 |
| Evolve Midnight Icebox on current main | 4 | 3 | 4 | 4 | 4 | 3 | 2 |
| Rebuild on experimental branch | 5 | 3 | 3 | 5 | 5 | 3 | 5 |
| Asset-first pause | 4 | 5 | 1 | 4 | 2 | 5 | 4 |
| Roll back to `b049d30` and rebuild | 3 | 2 | 2 | 3 | 3 | 3 | 2 |

Recommended option: **rebuild on experimental branch**. It gives you the biggest visual upside without discarding the valid structural work already paid for.

**Roadmap**

**Phase 0: freeze current status**
Goal: preserve the current visible state before more drift.
Owner/task type: product/engineering.
Key surfaces: current homepage, mobile, custom, watches, grillz.
Acceptance criteria: branch point tagged; screenshot set archived; current docs state noted.
Risk to avoid: changing main while direction is still under review.

**Phase 1: strategic decision**
Goal: approve **Pittsburgh BANG** as the direction and lock BANG rules, hero role, and header approach.
Owner/task type: strategy / creative / product.
Key surfaces: homepage header, hero, shop gateway, trust, social.
Acceptance criteria: one direction doc, one priority asset list, one branch plan.
Risk to avoid: reopening quiet-luxury or generic-premium debates.

**Phase 2: homepage branch rebuild**
Goal: rebuild the homepage visual system without touching the broader site.
Owner/task type: design + front-end.
Key files: `app/page.tsx`, `components/layout/Header.tsx`, `app/globals.css`, `components/home/PittsburghStory.tsx`, `components/home/SocialTeaser.tsx`, `components/layout/PromoBar.tsx`, `components/layout/MobileCtaBar.tsx`.
Acceptance criteria: stronger masthead, harder shop wall, clearer proof, alive social scaffold, better first five seconds.
Risk to avoid: sneaking fake product cards or fake proof into the branch.

**Phase 3: /custom alignment**
Goal: re-skin custom around outcome proof while keeping the current flow logic.
Owner/task type: design + front-end.
Key files: `app/custom/page.tsx`, `components/custom/*`.
Acceptance criteria: custom page feels like identity jewelry, not like a dark application form.
Risk to avoid: touching backend flow before visual reset is approved.

**Phase 4: category pages**
Goal: align grillz, watches, and collections with the new homepage language and product wall logic.
Owner/task type: content + front-end.
Key files: `app/grillz/page.tsx`, `app/watches/page.tsx`, `app/collections/page.tsx`, relevant category routes.
Acceptance criteria: each page has a stronger first screen and category-specific proof.
Risk to avoid: overbuilding PDP-like systems without real inventory.

**Phase 5: real assets**
Goal: fill the major proof and product surfaces with real media.
Owner/task type: creative / ops / production.
Key surfaces: hero, shop tiles, Pittsburgh proof, social, custom outcomes.
Acceptance criteria: at least one hero asset, three category assets, one store proof asset, one social proof asset, one custom before/after set.
Risk to avoid: waiting for a perfect campaign instead of capturing usable real media now.

**Phase 6: QA and deploy**
Goal: ship a tighter homepage without trust or mobile regressions.
Owner/task type: front-end / QA / product.
Key surfaces: homepage and header/sticky CTA interactions.
Acceptance criteria: mobile first-screen works, no CTA overlap, no fake claims, branch approved, screenshots captured.
Risk to avoid: shipping a visually better page that breaks contact flow or claim safety.

## Claude Code handoff

**Exact next implementation pass**

```text
Objective:
Create a homepage-only experimental branch that evolves the current Midnight Icebox implementation into the approved "Pittsburgh BANG" direction.

Context:
- Repo: YoYo040404/2finla
- Current visible state appears to be af7f20d code + f082c62 docs
- This is still a lead-generation / custom-inquiry site, not a full checkout ecommerce store
- Do not write backend logic
- Do not invent inventory, reviews, prices, material claims, or social proof
- Keep claim safety intact
- Keep "BUILT TO HIT." as the hero headline
- The goal is not a small polish pass; it is a homepage visual reset on a branch

Files to inspect first:
- app/page.tsx
- app/globals.css
- components/layout/Header.tsx
- components/layout/PromoBar.tsx
- components/layout/MobileCtaBar.tsx
- components/layout/FloatingWhatsAppButton.tsx
- components/home/PittsburghStory.tsx
- components/home/SocialTeaser.tsx
- data/nav.ts
- public/assets/brand/*

Files likely to touch:
- app/page.tsx
- app/globals.css
- components/layout/Header.tsx
- components/layout/PromoBar.tsx
- components/home/PittsburghStory.tsx
- components/home/SocialTeaser.tsx
- components/layout/MobileCtaBar.tsx

Files not to touch in this pass:
- components/custom/CustomBuildFlow.tsx
- backend or API routes
- claim policy docs
- metadata/SEO docs unless required by a visible homepage change
- category page logic outside shared header/global style dependencies

Specific changes to make:
1. Create an experimental branch for homepage reset work.
2. Replace the current header text lockup with the approved repo logo asset IF it reads well in the current visual system; if not, keep a hard text lockup but make it feel deliberate and commercial, not timid.
3. Rework the homepage first screen so the masthead + hero feel like a real jewelry storefront, not a dark premium template.
4. Keep "BUILT TO HIT." but tighten the support copy toward product density + real-store trust.
5. Rebuild the Shop Jewelry gateway into a harder product wall:
   - one dominant primary tile
   - two strong supporting featured tiles
   - smaller secondary rail
   - utility rail below
6. Remove or reduce any visually dead placeholder feeling in the shop area.
7. Keep BANG. in the system, but use it as a hallmark/signature, not as a repeated decorative gimmick.
8. Compress the Pittsburgh section into a tougher proof block with stronger hierarchy.
9. Compress the social section into a more commercial scaffold that feels alive even before real embeds.
10. Preserve primary actions:
   - SHOP JEWELRY
   - BUILD CUSTOM
   - TEXT 2T
11. Do not introduce fake merchandise cards, fake product specs, fake inventory, fake promotions, or fake social metrics.

Specific changes NOT to make:
- no new backend form handling
- no fake "best sellers"
- no fake "in stock"
- no fake review counts
- no fake celebrity proof
- no generic quiet-luxury redesign
- no parody slang or performative street voice
- no full-site redesign outside homepage-supporting shared components
- no rollback to old serif/boutique styling
- no extra floating CTA clutter

Acceptance criteria:
- The homepage feels materially harder, louder, and more jewelry-driven within the first 5 seconds
- The shop section feels more like a product wall than a system grid
- The Pittsburgh section feels like proof, not a placeholder
- The social section feels like a live channel map, not an empty block
- The site still clearly supports both SHOP JEWELRY and BUILD CUSTOM
- No unverified claims are introduced
- No visual regressions in mobile CTA behavior

Mobile QA checklist:
- Header reads clearly on first load
- Hero media + headline + primary CTA are visible and coherent above the fold
- Sticky CTA bar does not crush the hero or overlap key actions
- First category tile feels visually dominant
- Secondary tiles remain tappable and readable
- Weekly special block is legible and purposeful
- Pittsburgh proof remains short and high-signal
- Social rows remain readable and clearly actionable

Claim-safety checklist:
- No blanket material claims
- No blanket diamond claims
- No warranty claims unless already verified and scoped
- No inventory claims unless explicitly framed as "ask"
- No new financing claims beyond already approved wording
- No fake promo amounts or fake urgency

Stopping point:
Return a concise implementation summary with:
- files changed
- what was improved visually
- any asset blockers you hit
- screenshots or screenshot-equivalent evidence of homepage desktop + mobile
Do not continue into category-page or custom-page redesign after homepage is complete.
```

**What not to do anymore**

Stop shipping major sections that are visually still placeholders.

Stop trying to make empty frames feel expensive through typography alone.

Stop adding one more copy tweak when the real problem is missing media.

Stop letting docs, committed assets, and actual UI drift apart. The repo already holds approved brand assets, yet the header does not use them. That should not happen again.

Stop treating BANG as a decorative footnote. Either define it as a system or reduce it.

Stop making every category tile the same visual object.

Stop writing copy that sounds like an intelligent consultant describing a jewelry process.

Stop patching main when the problem is directional, not local.

Stop broad competitor research that ends with generic taste conclusions. The useful lessons are already clear: dense category access, direct contact, strong product specificity, and ruthless avoidance of fake signals.

**Final recommendation**

The strongest route is:

**Branch experiment.**
**Evolve Midnight Icebox into Pittsburgh BANG and rebuild the homepage on a dedicated experimental branch now.**

Not a polish pass.
Not a rollback.
Not a full stop for assets.
Not a total rebrand.

The site already has the right spine. What it lacks is a harder masthead, a real product wall, stronger proof surfaces, and media that makes the current direction feel lived-in instead of art-directed. Fix that in a branch, keep the claim-safe system, and then layer real assets in immediately after the homepage reset lands.
