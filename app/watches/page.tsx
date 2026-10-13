import type { Metadata } from 'next'
import Link from 'next/link'
import { ExperiencePage, PageHero, InquiryClose, experienceStyles as s } from '@/components/experience/ExperiencePage'

const WA_WATCHES = `https://wa.me/14124524343?text=${encodeURIComponent("Hey 2T — I'm looking for a watch. What iced-out or bust-down directions do you have available?")}`
const DIRECTIONS = [
  { name: 'BUST-DOWN', label: 'FULL ICE DIRECTION', body: 'Case, bracelet and bezel shine. Ask which parts are stone-set and whether the setting is aftermarket or factory.' },
  { name: 'ICED-OUT BEZEL', label: 'BEZEL DIRECTION', body: 'Start with the bezel. Stone type, setting and modifications need to be confirmed for the watch.' },
  { name: 'ROLEX INQUIRIES', label: 'VENDOR-SOURCED DIRECTION', body: 'Ask about current sourcing options. 2T is not an authorized Rolex dealer; identity, source and condition need piece-specific confirmation.' },
  { name: 'GOLD-TONE / TWO-TONE', label: 'METAL DIRECTION', body: 'Clean or iced. Gold-tone describes a look; confirm actual metal composition and any plating for the specific watch.' },
  { name: 'STONE-SET DIAL', label: 'DIAL DIRECTION', body: 'Dial or marker shine. Ask what stones are used, where they are set and whether the dial has been modified.' },
  { name: 'FIND YOUR DIRECTION', label: 'OPEN INQUIRY', body: 'Share a model, reference, wrist size, look and budget range. Ask 2T what is available now.' },
]
const CONFIRM = [
  ['AVAILABILITY + PRICE', 'Current availability and the price for the watch you ask about.'],
  ['SOURCE + CONDITION', 'Vendor or dealer source, new or pre-owned condition, and any known modifications.'],
  ['MODEL + SIZE', 'Model, reference, case size, bracelet and dial details.'],
  ['STONES + SETTING', 'Stone identity, location and setting origin — factory, aftermarket or custom — for the specific watch.'],
  ['AUTHENTICATION + DOCUMENTS', 'Ask what authentication information, box or papers are available for that specific watch. No blanket authentication or document promise.'],
]

export const metadata: Metadata = {
  title: 'Iced-Out & Bust-Down Watches Pittsburgh | 2T Jewelers',
  description: 'Ask 2T Jewelers about current watch directions in Pittsburgh. Source, condition, stones, modifications and price are confirmed per piece. Not an authorized Rolex dealer.',
  robots: { index: false, follow: false },
}

export default function WatchesPage() {
  return <ExperiencePage>
    <PageHero eyebrow="WATCHES" title={"WRIST SHINE.\nDETAILS FIRST."} description="Bust-down, iced-out bezel or a cleaner direction. Ask what is available now. Source, condition, stones, modifications and price are confirmed per watch. Pittsburgh · 332 Fifth Ave." image="/assets/demo/phase3a/2t-demo-watch-face-01.png" primary={{ label: 'TEXT ABOUT WATCHES', href: WA_WATCHES }} secondary={{ label: 'SEE THE DIRECTIONS', href: '#watch-directions' }} />
    <section className={s.section} aria-labelledby="watch-disclosure"><span className={s.eyebrow}>WATCH SOURCE + DISCLOSURE</span><h2 id="watch-disclosure">KNOW THE WATCH YOU’RE ASKING ABOUT.</h2><p>2T Jewelers is not an authorized Rolex dealer. Watches may be sourced through vendor and dealer relationships. Condition, source, modifications, stones and pricing are confirmed per piece before purchase.</p><p>Factory-set and aftermarket settings are different. Ask which applies to the watch, which parts have been customized, and how those modifications affect manufacturer warranty or service eligibility. Do not assume manufacturer coverage for a modified watch; ask for the specific details.</p></section>
    <section id="watch-directions" className={s.section}><div className={s.sectionHeading}><div><span className={s.eyebrow}>CHOOSE A LOOK</span><h2>WHAT’S YOUR WRIST DIRECTION?</h2></div><p>Inquiry directions. Availability changes; ask for the watch and its details before you move forward.</p></div><div className={s.grid}>{DIRECTIONS.map(item => <a key={item.name} className={s.tile} href={`https://wa.me/14124524343?text=${encodeURIComponent(`Hey 2T — I'm interested in the ${item.name.toLowerCase()} watch direction. What do you have available?`)}`} target="_blank" rel="noopener noreferrer"><span>{item.label}</span><h3>{item.name}</h3><p>{item.body}</p><span>ASK ABOUT THIS DIRECTION →</span></a>)}</div></section>
    <section className={s.section}><div className={s.split}><div><span className={s.eyebrow}>CONFIRMED PER PIECE</span><h2>ASK BEFORE YOU COMMIT.</h2><p>Send the reference or a photo of the look you want. Your budget range guides the conversation; it is not a quote.</p><p><Link href="/materials">Material and stone details →</Link> · <Link href="/size-guide">Wrist size guide →</Link></p></div><ul className={s.list}>{CONFIRM.map(([label,body]) => <li key={label}><strong>{label}</strong>{body}</li>)}</ul></div></section>
    <InquiryClose title="ASK WHAT’S AVAILABLE." message="Hey 2T — I'm looking for a watch. Can you share current options and the source, condition, stones and modifications for each?" />
  </ExperiencePage>
}
