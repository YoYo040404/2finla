import type { Metadata } from 'next'
import Link from 'next/link'
import { HOME_MEDIA } from '@/data/homeMedia'
import { ExperiencePage, PageHero, InquiryClose, experienceStyles as s } from '@/components/experience/ExperiencePage'

export const metadata: Metadata = { title: '2T Jewelers | Shop Pendants & Custom Ideas — Pittsburgh, PA', description: 'Explore pendant styles or start a separate custom photo, logo, name or number pendant request. Details confirmed per piece.', robots: { index: false, follow: false } }
const STYLES = [
  {
    "title": "CROSS PENDANT",
    "description": "Clean or iced. Built to sit right on the chain.",
    "specs": [
      "Plain or iced-out direction",
      "Gold or silver direction",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I'm looking at cross pendants. What do you have available? Gold or silver direction."
  },
  {
    "title": "JESUS PIECE",
    "description": "Classic hip-hop icon. Loud when it hits the light.",
    "specs": [
      "Clean or iced-out direction",
      "Size confirmed per piece",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I'm looking at Jesus pieces. What do you have? Iced or clean, gold or silver."
  },
  {
    "title": "MEDALLION",
    "description": "Big face. Round, oval, clean, or iced.",
    "specs": [
      "Engraved or stone-set direction",
      "Gold or silver direction",
      "Details confirmed per piece"
    ],
    "waMessage": "Hey 2T — I'm looking at medallion pendants. What styles do you have available?"
  },
  {
    "title": "INITIAL PENDANT",
    "description": "Your letter. Block, script, or bubble.",
    "specs": [
      "Single letter or monogram",
      "Clean or iced direction",
      "Ask what's available"
    ],
    "waMessage": "Hey 2T — I'm looking at initial pendants. What letter styles and fonts do you have?"
  },
  {
    "title": "ICED PENDANT",
    "description": "Stone-set face. Built to hit.",
    "specs": [
      "Diamond or moissanite direction",
      "Gold or silver setting",
      "Details confirmed per piece"
    ],
    "waMessage": "Hey 2T — I'm looking at iced-out pendants. What stone directions and styles do you have?"
  },
  {
    "title": "PENDANT + CHAIN",
    "description": "The full setup. Ask what chain hits right.",
    "specs": [
      "Cuban, rope, or tennis pairing",
      "Chain weight and pendant size matter",
      "Ask what pairs right"
    ],
    "waMessage": "Hey 2T — I'm looking for a pendant and chain set. What combinations do you have available?"
  }
]
const CUSTOM_TYPES = [
  {
    "label": "PHOTO PENDANT",
    "description": "Your picture, built into a piece."
  },
  {
    "label": "LOGO PENDANT",
    "description": "Business mark, personal logo, or design."
  },
  {
    "label": "NAME PIECE",
    "description": "Your name, iced and clean."
  },
  {
    "label": "NUMBER PENDANT",
    "description": "Jersey, area code, or date."
  },
  {
    "label": "MEMORIAL PENDANT",
    "description": "Keep the memory close."
  },
  {
    "label": "CUSTOM SHAPE",
    "description": "Your concept, your silhouette."
  }
]

function waUrl(message: string) {
  return `https://wa.me/14124524343?text=${encodeURIComponent(message)}`
}

export default function PendantsPage() {
  return <ExperiencePage>
    <PageHero eyebrow="SHOP / PENDANTS" title={'PENDANTS THAT\nHIT DIFFERENT.'} description="Shop the style. Cross, medallion, initial or iced. Have your own photo, logo, name or number? Take the separate custom path below." image={HOME_MEDIA.pendantSecondary.src} primary={{label:'SEE PENDANT STYLES',href:'#pendant-styles'}} secondary={{label:'TEXT ABOUT PENDANTS',href:waUrl('Hey 2T — What pendants do you have available now?')}}/>
    <section className={s.section} id="pendant-styles"><div className={s.sectionHeading}><div><span className={s.eyebrow}>SHOP · PENDANT DIRECTIONS</span><h2>PICK THE PIECE.</h2></div><p>These are style directions, not live listings. Size, material, stone and availability are confirmed for each piece you ask about.</p></div><div className={s.grid}>{STYLES.map((style) => <article className={s.tile} key={style.title}><span>STYLE DIRECTION · ASK ABOUT AVAILABILITY</span><h3>{style.title}</h3><p>{style.description}</p><ul className={s.list}>{style.specs.map(spec => <li key={spec}>{spec}</li>)}</ul><a href={waUrl(style.waMessage)} className="btn-outline-gold" target="_blank" rel="noopener noreferrer">ASK ABOUT THIS STYLE →</a></article>)}</div></section>
    <section className={s.section}><div className={s.split}><div><span className={s.eyebrow}>CHAIN + PENDANT</span><h2>MAKE THE PAIRING COUNT.</h2><p>Ask about pendant dimensions, weight, bail opening and chain width. Tell us which chain you already wear, or ask what pairs with the pendant you want.</p><div className={s.actions}><Link className="btn-outline-gold" href="/collections/chains">SHOP CHAIN DIRECTIONS →</Link><Link className="btn-outline-gold" href="/size-guide">CHECK THE SIZE GUIDE →</Link></div></div><div><span className={s.eyebrow}>MATERIAL + STONE</span><h2>YOUR SHINE. YOUR DIRECTION.</h2><p>Gold or silver. Diamond or moissanite. Confirm metal construction, plating, stone identity and any documentation for the actual piece.</p><Link className="btn-outline-gold" href="/materials">EXPLORE MATERIALS →</Link></div></div></section>
    <section className={s.section} id="custom-pendants"><span className={s.eyebrow}>CUSTOM · YOUR OWN IDEA</span><h2>BRING THE PHOTO. LOGO. NAME.</h2><p>Have a logo, sketch, photo or reference? Start the request and get next-step information before quote or production. These are custom directions, not completed customer pieces.</p><div className={s.grid}>{CUSTOM_TYPES.map(type=><article className={s.tile} key={type.label}><span>CUSTOM DIRECTION</span><h3>{type.label}</h3><p>{type.description}</p></article>)}</div><div className={s.actions}><Link className="btn-primary" href="/custom">START YOUR PENDANT REQUEST →</Link><a className="btn-outline-gold" href={waUrl('Hey 2T — I want a custom pendant. Can I send a photo, logo, name or number?')} target="_blank" rel="noopener noreferrer">TEXT YOUR PENDANT IDEA →</a></div></section>
    <InquiryClose title="SHOP OR CUSTOM? TEXT THE DIRECTION." message="Hey 2T — I'm interested in pendants. Can we talk about the style, size and chain pairing?"/>
  </ExperiencePage>
}
