import type { Metadata } from 'next'
import Link from 'next/link'
import { ExperiencePage, PageHero, InquiryClose, experienceStyles as s } from '@/components/experience/ExperiencePage'

const WA_GRILLZ = `https://wa.me/14124524343?text=${encodeURIComponent("Hey 2T — I'm interested in grillz. What's the process and what do you need from me?")}`
const DIRECTIONS = [
  { name: 'TOP SET', label: 'UPPER SET', body: 'Start with the top. Tell 2T how many teeth you have in mind — 4, 6 or 8 — and ask what works for your set.' },
  { name: 'BOTTOM SET', label: 'LOWER SET', body: 'Run the bottom on its own or pair it with a top set. Share the coverage and material direction you want.' },
  { name: 'FULL MOUTH', label: 'TOP + BOTTOM', body: 'Top and bottom together. Match the direction or talk through a mix; ask about the process for both sets.' },
  { name: 'OPEN FACE', label: 'FRAME DIRECTION', body: 'An open center with a gold or silver frame direction. Share the shape and coverage you have in mind.' },
  { name: 'ICED-OUT', label: 'STONE DIRECTION', body: 'Stone-set shine. Ask about diamond or moissanite directions and the stone details for your piece.' },
  { name: 'DIAMOND CUT', label: 'PATTERN DIRECTION', body: 'Faceted pattern direction. Diamond-cut describes the cut pattern; material and stone details are confirmed separately.' },
]
const FAQS = [
  { q: 'How do I start?', a: 'Text 2T with top, bottom or full mouth, the number of teeth you have in mind, and a reference if you have one. Ask what is needed for your request before the build.' },
  { q: 'How does the fit step work?', a: 'Ask 2T to walk you through the fitting process and what you need to do before anything is made. The website does not establish a fit or replace that conversation.' },
  { q: 'Can I choose the metal and stones?', a: 'Ask about gold or silver and diamond or moissanite directions. Confirm the metal, stone type, coverage and design for the specific set.' },
  { q: 'How much will it cost, and how long will it take?', a: 'Coverage, design, materials and stones shape the request. Ask 2T for the price and current process details for your set. Timing and payment terms need to be discussed for your request.' },
  { q: 'Do I need to visit the store?', a: 'Text first and ask which steps need an in-person visit. 2T Jewelers is at 332 Fifth Ave, Pittsburgh, PA 15222.' },
]

export const metadata: Metadata = {
  title: 'Custom Grillz Pittsburgh | 2T Jewelers',
  description: 'Top, bottom, full mouth, open face or iced-out grillz directions. Text 2T in Pittsburgh to discuss the process and details for your set.',
  robots: { index: false, follow: false },
}

export default function GrillzPage() {
  return <ExperiencePage>
    <PageHero eyebrow="GRILLZ" title={"YOUR SET.\nYOUR SHINE."} description="Top, bottom or full mouth. Start with the look, then ask about the fit process, materials and price for your set. Text first or come through — 332 Fifth Ave, Pittsburgh." image="/assets/demo/phase3a/2t-demo-grillz-flat-01.png" primary={{ label: 'ASK ABOUT GRILLZ', href: WA_GRILLZ }} secondary={{ label: 'SEE THE DIRECTIONS', href: '#grillz-directions' }} />
    <section id="grillz-directions" className={s.section}>
      <div className={s.sectionHeading}><div><span className={s.eyebrow}>SET THE DIRECTION</span><h2>HOW DO YOU WANT IT TO HIT?</h2></div><p>These are design directions to ask about. Each set needs its own material, stone, fit and price conversation.</p></div>
      <div className={s.grid}>{DIRECTIONS.map(item => <a className={s.tile} key={item.name} href={`https://wa.me/14124524343?text=${encodeURIComponent(`Hey 2T — I'm interested in ${item.name.toLowerCase()} grillz. What do you need from me to start?`)}`} target="_blank" rel="noopener noreferrer"><span>{item.label}</span><h3>{item.name}</h3><p>{item.body}</p><span>ASK ABOUT THIS SET →</span></a>)}</div>
    </section>
    <section className={s.section}>
      <span className={s.eyebrow}>BEFORE ANYTHING IS MADE</span><h2>START WITH THE PROCESS.</h2>
      <ol className={s.steps}><li><h3>TELL 2T THE SET</h3><p>Top, bottom or both. Share the coverage, style and a photo reference.</p></li><li><h3>DISCUSS FIT + SHINE</h3><p>Ask about the fitting steps. Choose a material and stone direction; details are confirmed for your set.</p></li><li><h3>ASK FOR THE DETAILS</h3><p>Discuss the design, quote and next steps before production. Confirm any timing and payment terms directly.</p></li></ol>
      <p><Link href="/materials">Materials and stones →</Link> · <Link href="/size-guide">Size and fit guidance →</Link></p>
    </section>
    <section className={s.section} aria-labelledby="grillz-faq"><span className={s.eyebrow}>ASK FIRST</span><h2 id="grillz-faq">GRILLZ QUESTIONS.</h2>{FAQS.map(({q,a}) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <InquiryClose title="LET’S TALK ABOUT YOUR SET." message="Hey 2T — I'm interested in grillz. What's the process and what do you need from me?" />
  </ExperiencePage>
}
