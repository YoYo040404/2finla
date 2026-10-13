import type { Metadata } from 'next'
import Link from 'next/link'
import { HOME_MEDIA } from '@/data/homeMedia'
import { ExperiencePage, PageHero, InquiryClose, experienceStyles as s } from '@/components/experience/ExperiencePage'

export const metadata: Metadata = { title: '2T Jewelers | Chains — Pittsburgh, PA', description: 'Cuban, rope, tennis, Franco and Figaro chain directions. Ask about material, width, length and availability.', robots: { index: false, follow: false } }
const STYLES = [
  {
    "title": "CUBAN CHAIN",
    "description": "Flat interlocking links. A bold start for the neck.",
    "specs": [
      "Width and length confirmed per piece",
      "Gold or silver direction",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I'm looking at Cuban chains. What widths and lengths do you have available?"
  },
  {
    "title": "ROPE CHAIN",
    "description": "Twisted links. A classic shine that moves.",
    "specs": [
      "Length confirmed per piece",
      "Gold or silver direction",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I'm looking at rope chains. What thicknesses and lengths do you have? Gold or silver direction."
  },
  {
    "title": "TENNIS CHAIN",
    "description": "Stone-set all the way around. Built for shine.",
    "specs": [
      "Diamond or moissanite direction",
      "Stone details confirmed per piece",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I'm interested in a tennis chain. What stone directions and lengths do you have? Diamond or moissanite — let me know what's available."
  },
  {
    "title": "FRANCO CHAIN",
    "description": "Four-sided structure. Heavier build. Strong profile.",
    "specs": [
      "Width and length confirmed per piece",
      "Gold or silver direction",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I'm looking at Franco chains. What widths and lengths work with a pendant?"
  },
  {
    "title": "FIGARO CHAIN",
    "description": "Classic link structure. Alternating long-short rhythm.",
    "specs": [
      "Gold or silver direction",
      "Length confirmed per piece",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I'm looking at Figaro chains. What widths and metal directions do you have?"
  },
  {
    "title": "ICED-OUT CHAIN",
    "description": "Stone-set links from clasp to clasp. Built to hit the light.",
    "specs": [
      "Stone details confirmed per piece",
      "Material confirmed per piece",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I want to look at stone-set or iced-out chains. What stone directions and base styles do you have?"
  }
]

function waUrl(message: string) {
  return `https://wa.me/14124524343?text=${encodeURIComponent(message)}`
}

export default function ChainsPage() {
  return <ExperiencePage>
    <PageHero eyebrow="SHOP / CHAINS" title={'START WITH\nTHE CHAIN.'} description="Cuban. Rope. Tennis. Pick the look, then ask about the length, width and material of the piece." image={HOME_MEDIA.anchorTiles.chains.src} primary={{label:'SEE CHAIN STYLES',href:'#chain-styles'}} secondary={{label:'TEXT ABOUT CHAINS',href:waUrl('Hey 2T — What Cuban, rope or tennis chains do you have available now?')}}/>
    <section className={s.section} id="chain-styles"><div className={s.sectionHeading}><div><span className={s.eyebrow}>SHOP · CHAIN DIRECTIONS</span><h2>THE NECK COMES FIRST.</h2></div><p>Style references to guide your question. Material, stone, dimensions, construction and availability are confirmed per piece.</p></div><div className={s.grid}>{STYLES.map((style) => <article className={s.tile} key={style.title}><span>STYLE DIRECTION · ASK ABOUT AVAILABILITY</span><h3>{style.title}</h3><p>{style.description}</p><ul className={s.list}>{style.specs.map(spec => <li key={spec}>{spec}</li>)}</ul><a href={waUrl(style.waMessage)} className="btn-outline-gold" target="_blank" rel="noopener noreferrer">ASK ABOUT THIS STYLE →</a></article>)}</div></section>
    <section className={s.section}><div className={s.split}><div><span className={s.eyebrow}>CHECK THE SETUP</span><h2>WIDTH. LENGTH. PENDANT FIT.</h2><p>Tell us how you want the chain to sit and whether you are wearing a pendant. Ask about chain width, the clasp and the pendant bail before choosing the setup.</p><div className={s.actions}><Link className="btn-outline-gold" href="/size-guide">CHECK THE SIZE GUIDE →</Link><Link className="btn-outline-gold" href="/collections/pendants">SHOP PENDANT DIRECTIONS →</Link></div></div><div><span className={s.eyebrow}>PICK THE SHINE</span><h2>GOLD OR SILVER.</h2><p>Diamond or moissanite for a stone-set direction. Different shine. Different direction. Ask about plating or solid construction and stone identity for the piece you choose.</p><Link className="btn-outline-gold" href="/materials">EXPLORE MATERIALS →</Link></div></div></section>
    <section className={s.section}><span className={s.eyebrow}>CUSTOM · A DIFFERENT PATH</span><h2>WANT YOUR OWN SETUP?</h2><p>Have a chain and pendant idea? Send the reference and the dimensions you have in mind before quote or production.</p><div className={s.actions}><Link className="btn-primary" href="/custom">START A CUSTOM REQUEST →</Link><a className="btn-outline-gold" href={waUrl("Hey 2T — I have a custom chain and pendant idea. Can I send a reference?")} target="_blank" rel="noopener noreferrer">TEXT THE IDEA →</a><Link className="btn-outline-gold" href="/collections">SHOP ALL CATEGORIES →</Link></div></section>
    <InquiryClose message="Hey 2T — I'm looking for a chain. Can we confirm width, length, material and pendant fit?"/>
  </ExperiencePage>
}
