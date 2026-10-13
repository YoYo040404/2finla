import type { Metadata } from 'next'
import Link from 'next/link'
import { ExperiencePage, PageHero, InquiryClose, experienceStyles as s } from '@/components/experience/ExperiencePage'

const WA_STORE = `https://wa.me/14124524343?text=${encodeURIComponent("Hey 2T — I'd like to ask about your Pittsburgh store and what you have available.")}`

export const metadata: Metadata = {
  title: 'About 2T Jewelers | Pittsburgh Jewelry Store',
  description: '2T Jewelers at 332 Fifth Ave, Pittsburgh, PA 15222. Ask about jewelry, grillz, watches and custom directions. Text first or call +1 412-281-7072.',
  robots: { index: false, follow: false },
}

export default function AboutPage() {
  return <ExperiencePage>
    <PageHero eyebrow="PITTSBURGH" title={"REAL STORE.\nYOUR NEXT PIECE."} description="2T Jewelers · 332 Fifth Ave, Downtown Pittsburgh. Jewelry, grillz, watches and custom directions. Come through or text first — ask about the piece you have in mind." primary={{ label: 'TEXT 2T', href: WA_STORE }} secondary={{ label: 'CALL THE STORE', href: 'tel:+14122817072' }} />
    <section className={s.section} aria-labelledby="store-details"><div className={s.split}><div><span className={s.eyebrow}>COME THROUGH</span><h2 id="store-details">332 FIFTH AVE.</h2><p>Pittsburgh, PA 15222. Ask what is available, talk through a custom idea or get next-step details for grillz and watches.</p><p>Text before your visit to confirm current hours and the piece or service you want to discuss.</p></div><ul className={s.list}><li><strong>TEXT / WHATSAPP</strong><a href={WA_STORE} target="_blank" rel="noopener noreferrer">+1 412-452-4343 →</a></li><li><strong>CALL</strong><a href="tel:+14122817072">+1 412-281-7072 →</a></li><li><strong>SEE 2T</strong><a href="https://www.instagram.com/2tjewelers/" target="_blank" rel="noopener noreferrer">@2tjewelers on Instagram →</a> · <a href="https://www.tiktok.com/@2tjewelers" target="_blank" rel="noopener noreferrer">TikTok →</a></li></ul></div></section>
    <section className={s.section}><span className={s.eyebrow}>WHAT YOU CAN ASK ABOUT</span><h2>PICK THE PIECE. BRING THE IDEA.</h2><div className={s.grid}><Link className={s.tile} href="/collections"><span>JEWELRY</span><h3>SHOP THE DIRECTIONS</h3><p>Chains, pendants, rings, bracelets and earrings. Ask about current availability and the details for the piece.</p><span>SEE THE COLLECTIONS →</span></Link><Link className={s.tile} href="/custom"><span>CUSTOM</span><h3>MAKE IT PERSONAL</h3><p>Logo, photo, name, number or sketch. Start with your idea and talk through the direction before quote or production.</p><span>START THE REQUEST →</span></Link><div className={s.tile}><span>ASK FIRST</span><h3>GRILLZ + WATCHES</h3><p>Discuss the grillz process or ask about a watch’s source, condition, stones and modifications.</p><p><Link href="/grillz">Grillz →</Link> · <Link href="/watches">Watches →</Link></p></div></div></section>
    <section className={s.section}><span className={s.eyebrow}>DETAILS THAT MATTER</span><h2>ASK BEFORE YOU BUY.</h2><p>Gold or silver. Diamond or moissanite. Different shine. Different direction. Material and stone details are confirmed per piece — ask what applies to the piece you want.</p><p><Link href="/materials">Know the materials →</Link> · <Link href="/size-guide">Plan your size →</Link></p></section>
    <InquiryClose title="TEXT FIRST. COME THROUGH." message="Hey 2T — I'd like to ask about your Pittsburgh store and what you have available." />
  </ExperiencePage>
}
