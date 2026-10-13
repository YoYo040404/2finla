import type { Metadata } from 'next'
import Link from 'next/link'
import { CategorySilhouette } from '@/components/home/CategorySilhouette'
import { HOME_MEDIA } from '@/data/homeMedia'
import { ExperiencePage, PageHero, InquiryClose, experienceStyles as s } from '@/components/experience/ExperiencePage'
import { notFound } from 'next/navigation'

type StyleDirection = { title: string; description: string; specs: string[]; waMessage: string }
type CategoryData = { title: string; headline: string; body: string; note: string; waMessage: string; styles: StyleDirection[] }
const CATEGORY_DATA: Record<string, CategoryData> = {
  "bracelets": {
    "title": "Bracelets",
    "headline": "WRIST GAME WITH WEIGHT.",
    "body": "Tennis, Cuban, bangle. Weight that shows.",
    "note": "Details confirmed per piece.",
    "waMessage": "Hey 2T — I'm looking at bracelets. What styles and directions do you have available?",
    "styles": [
      {
        "title": "CUBAN BRACELET",
        "description": "Flat interlocking links. Same energy as the chain, locked around the wrist.",
        "specs": [
          "Width: ask what's available",
          "Size and fit: confirm per piece",
          "Gold or silver direction",
          "Clean or iced-out"
        ],
        "waMessage": "Hey 2T — I'm looking at Cuban bracelets. What widths and sizes do you have available?"
      },
      {
        "title": "TENNIS BRACELET",
        "description": "Stone-set from clasp to clasp. Every link carries shine.",
        "specs": [
          "Stone-set all the way around",
          "Size and fit: confirm per piece",
          "Diamond or moissanite direction",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I'm interested in a tennis bracelet. What stone directions and sizes do you have?"
      },
      {
        "title": "ICED BRACELET",
        "description": "Stone-set Cuban build. Full iced-out look from clasp to clasp.",
        "specs": [
          "Cuban or rope base — ask what's in",
          "Diamond or moissanite direction",
          "Gold or silver direction",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I want to look at iced bracelets. What stone directions and base styles do you have?"
      },
      {
        "title": "BANGLE",
        "description": "Continuous band. Slip-on or hinged. Clean weight on the wrist.",
        "specs": [
          "Smooth, hammered, or textured finish",
          "Width: ask what's available",
          "Gold or silver direction",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I'm looking at bangles. What styles and finishes do you have available?"
      },
      {
        "title": "ROPE BRACELET",
        "description": "Twisted links, textured shine. Same rope DNA, worn on the wrist.",
        "specs": [
          "Slim or bold thickness",
          "Size and fit: confirm per piece",
          "Gold or silver direction",
          "Diamond-cut or polished finish"
        ],
        "waMessage": "Hey 2T — I'm looking at rope bracelets. What thicknesses and sizes do you have?"
      },
      {
        "title": "LINK BRACELET",
        "description": "Bold rectangular or oval links. Heavy feel, structured look.",
        "specs": [
          "Wide or slim link profile",
          "Size and fit: confirm per piece",
          "Gold or silver direction",
          "Clean or stone-accented"
        ],
        "waMessage": "Hey 2T — I'm looking at link bracelets. What link styles and sizes do you have?"
      }
    ]
  },
  "rings": {
    "title": "Rings",
    "headline": "RINGS THAT HIT.",
    "body": "Big face, iced face, or clean band. Made to get noticed.",
    "note": "Ask about sizing and available styles.",
    "waMessage": "Hey 2T — I'm looking at rings. What styles and sizes do you have available?",
    "styles": [
      {
        "title": "PINKY RING",
        "description": "Slim profile, clean look. Made for the pinky but sizes for any finger.",
        "specs": [
          "Sizes: ask what's available",
          "Slim to mid-weight band",
          "Gold or silver direction",
          "Stone or no-stone options"
        ],
        "waMessage": "Hey 2T — I'm looking at pinky rings. What sizes and styles do you have?"
      },
      {
        "title": "STATEMENT RING",
        "description": "Big face, bold presence. A ring that draws the eye from across the room.",
        "specs": [
          "Wide face or large stone top",
          "Sizes: ask what's available",
          "Gold or silver direction",
          "Ask about stone options"
        ],
        "waMessage": "Hey 2T — I'm looking at statement rings. What face styles and sizes do you have?"
      },
      {
        "title": "SIGNET RING",
        "description": "Flat-top face. Clean, classic, built for personalization.",
        "specs": [
          "Wide rectangular face",
          "Sizes: ask what's available",
          "Gold or silver direction",
          "Ask about engraving"
        ],
        "waMessage": "Hey 2T — I'm looking at signet rings. What sizes and face styles do you have?"
      },
      {
        "title": "ICED RING",
        "description": "Stone-set face. Built to catch every light in the room.",
        "specs": [
          "Diamond or moissanite direction",
          "Pavé or prong-set options",
          "Sizes: ask what's available",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I'm looking at iced rings. What stone directions and sizes do you have?"
      },
      {
        "title": "BAND RING",
        "description": "Continuous band. Clean finish, heavy feel. No stone — just weight.",
        "specs": [
          "Wide or slim band profile",
          "Smooth or textured finish",
          "Sizes: ask what's available",
          "Gold or silver direction"
        ],
        "waMessage": "Hey 2T — I'm looking at band rings. What widths and sizes do you have?"
      },
      {
        "title": "SIZED & ENGRAVED",
        "description": "Custom sizing, engraving, or face design. Tell us what you need.",
        "specs": [
          "Special sizing or engraving",
          "Custom face or name",
          "Material direction: ask first",
          "Quoted per piece — ask before anything starts"
        ],
        "waMessage": "Hey 2T — I have a specific ring in mind. Custom size, engraving, or face — can we talk?"
      }
    ]
  },
  "earrings": {
    "title": "Earrings",
    "headline": "EARRINGS THAT CATCH LIGHT.",
    "body": "Studs, hoops, iced or clean. Shine at eye level.",
    "note": "Ask what's in stock. Details confirmed per piece.",
    "waMessage": "Hey 2T — I'm looking at earrings. What styles and directions do you have available?",
    "styles": [
      {
        "title": "STUD EARRINGS",
        "description": "Clean, round, sits flat on the ear. Classic for a reason.",
        "specs": [
          "Round or princess cut",
          "Sizes: ask what's available",
          "Gold or silver post",
          "Stone or no-stone options"
        ],
        "waMessage": "Hey 2T — I'm looking at stud earrings. What sizes and stone directions do you have?"
      },
      {
        "title": "HOOP EARRINGS",
        "description": "Classic open ring. Thin or chunky, gold or silver.",
        "specs": [
          "Hoop diameter: ask what fits",
          "Thin wire or tube body",
          "Gold or silver direction",
          "Plain or textured finish"
        ],
        "waMessage": "Hey 2T — I'm looking at hoop earrings. What sizes and finishes do you have?"
      },
      {
        "title": "DROP EARRINGS",
        "description": "Hangs below the ear. Teardrop or elongated stone shape.",
        "specs": [
          "Teardrop or elongated form",
          "Length: ask what's available",
          "Gold or silver setting",
          "Stone or brushed metal options"
        ],
        "waMessage": "Hey 2T — I'm looking at drop earrings. What shapes and lengths do you have?"
      },
      {
        "title": "ICED STUDS",
        "description": "Stone-set from the face out. Full shine, flat on the ear.",
        "specs": [
          "Diamond or moissanite direction",
          "Pavé or prong-set face",
          "Sizes: ask what's available",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I'm looking at iced studs. What stone directions and sizes do you have?"
      },
      {
        "title": "CLUSTER EARRINGS",
        "description": "Multiple stones, one setting. More shine in a smaller surface.",
        "specs": [
          "Center stone + surrounding stones",
          "Diamond or moissanite direction",
          "Gold or silver setting",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I'm looking at cluster earrings. What styles and stone directions do you have?"
      },
      {
        "title": "EVERYDAY SHINE",
        "description": "Small profile, clean look. Low-key shine for any day.",
        "specs": [
          "Small to medium size",
          "Gold or silver direction",
          "Stone or brushed-metal options",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I'm looking for everyday earrings, something clean and wearable. What do you have?"
      }
    ]
  },
  "best-sellers": {
    "title": "Find Your Piece",
    "headline": "PICK WHAT\nHITS FOR YOU.",
    "body": "Chains, pendants, grillz, watches, rings, bracelets or earrings. Choose the direction, then ask what is available.",
    "note": "No sales ranking is shown here. These are category directions, not confirmed product listings.",
    "waMessage": "Hey 2T — Can you help me find a piece and confirm what is available?",
    "styles": [
      {
        "title": "CHAINS",
        "description": "Cuban, rope, tennis, Franco or Figaro. Ask about width, length and what pairs with your pendant.",
        "specs": [
          "Gold or silver direction",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — What chain styles and sizes do you have available?"
      },
      {
        "title": "PENDANTS",
        "description": "Cross, medallion, initial or iced direction. Ask about pendant size and chain pairing.",
        "specs": [
          "Shop pendants separately from custom requests",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — What pendants do you have available?"
      },
      {
        "title": "GRILLZ",
        "description": "Top set, bottom set or full mouth. Ask about the process before a piece is made.",
        "specs": [
          "Fit conversation first",
          "Material and stone details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I'm interested in grillz. What do you need from me?"
      },
      {
        "title": "WATCHES",
        "description": "Ask about the watch, its condition and stone details before buying.",
        "specs": [
          "Availability and pricing confirmed per watch",
          "Ask before you buy"
        ],
        "waMessage": "Hey 2T — What watches do you have available now?"
      },
      {
        "title": "RINGS + BRACELETS",
        "description": "Big face or clean band. Cuban, tennis or bangle. Start with the fit and the direction.",
        "specs": [
          "Sizes confirmed per piece",
          "Gold or silver direction"
        ],
        "waMessage": "Hey 2T — What rings and bracelets do you have available?"
      },
      {
        "title": "EARRINGS",
        "description": "Studs, hoops, drop or cluster. Tell us the size and look you want.",
        "specs": [
          "Ask about dimensions and closures",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — What earrings do you have available now?"
      }
    ]
  },
  "new-arrivals": {
    "title": "Ask What's New",
    "headline": "ASK WHAT\nJUST LANDED.",
    "body": "Looking for something new? Ask 2T what is available in the category you want.",
    "note": "New arrivals are confirmed by text. These directions do not represent live inventory or arrival dates.",
    "waMessage": "Hey 2T — What just came in, and what is available now?",
    "styles": [
      {
        "title": "CHAINS",
        "description": "Cuban, rope, tennis, Franco or Figaro. Ask about width, length and what pairs with your pendant.",
        "specs": [
          "Gold or silver direction",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — What chain styles and sizes do you have available?"
      },
      {
        "title": "PENDANTS",
        "description": "Cross, medallion, initial or iced direction. Ask about pendant size and chain pairing.",
        "specs": [
          "Shop pendants separately from custom requests",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — What pendants do you have available?"
      },
      {
        "title": "GRILLZ",
        "description": "Top set, bottom set or full mouth. Ask about the process before a piece is made.",
        "specs": [
          "Fit conversation first",
          "Material and stone details confirmed per piece"
        ],
        "waMessage": "Hey 2T — I'm interested in grillz. What do you need from me?"
      },
      {
        "title": "WATCHES",
        "description": "Ask about the watch, its condition and stone details before buying.",
        "specs": [
          "Availability and pricing confirmed per watch",
          "Ask before you buy"
        ],
        "waMessage": "Hey 2T — What watches do you have available now?"
      },
      {
        "title": "RINGS + BRACELETS",
        "description": "Big face or clean band. Cuban, tennis or bangle. Start with the fit and the direction.",
        "specs": [
          "Sizes confirmed per piece",
          "Gold or silver direction"
        ],
        "waMessage": "Hey 2T — What rings and bracelets do you have available?"
      },
      {
        "title": "EARRINGS",
        "description": "Studs, hoops, drop or cluster. Tell us the size and look you want.",
        "specs": [
          "Ask about dimensions and closures",
          "Details confirmed per piece"
        ],
        "waMessage": "Hey 2T — What earrings do you have available now?"
      }
    ]
  }
}

function waUrl(message: string) {
  return `https://wa.me/14124524343?text=${encodeURIComponent(message)}`
}

export function generateStaticParams() { return Object.keys(CATEGORY_DATA).map(category => ({ category })) }
type Props = { params: Promise<{ category: string }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const data = CATEGORY_DATA[category]
  return { title: data ? `2T Jewelers | ${data.title} — Pittsburgh, PA` : '2T Jewelers | Collections', description: data ? `${data.body} Details confirmed per piece.` : undefined, robots: { index: false, follow: false } }
}
export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const data = CATEGORY_DATA[category]
  if (!data) notFound()
  const discovery = category === 'best-sellers' || category === 'new-arrivals'
  return <ExperiencePage>
    <PageHero eyebrow={`SHOP / ${data.title}`} title={data.headline} description={data.body} image={category === 'rings' || category === 'bracelets' || category === 'earrings' ? undefined : HOME_MEDIA.hero.posterSrc} visual={category === 'rings' || category === 'bracelets' || category === 'earrings' ? <CategorySilhouette type={category === 'rings' ? 'ring' : category === 'bracelets' ? 'bracelet' : 'earring'}/> : undefined} primary={{label:'SEE THE DIRECTIONS',href:'#style-directions'}} secondary={{label:'TEXT 2T',href:waUrl(data.waMessage)}}/>
    <section className={s.section} id="style-directions"><div className={s.sectionHeading}><div><span className={s.eyebrow}>SHOP · ASK BEFORE YOU BUY</span><h2>{discovery ? 'START WITH THE CATEGORY.' : 'FIND YOUR STYLE.'}</h2></div><p>{data.note} Style directions shown here are not confirmed product listings.</p></div><div className={s.grid}>{data.styles.filter(style => style.title !== 'SIZED & ENGRAVED').map((style) => <article className={s.tile} key={style.title}><span>STYLE DIRECTION · ASK ABOUT AVAILABILITY</span><h3>{style.title}</h3><p>{style.description}</p><ul className={s.list}>{style.specs.map(spec => <li key={spec}>{spec}</li>)}</ul><a href={waUrl(style.waMessage)} className="btn-outline-gold" target="_blank" rel="noopener noreferrer">ASK ABOUT THIS STYLE →</a></article>)}</div></section>
    <section className={s.section}><div className={s.split}><div><span className={s.eyebrow}>ASK ABOUT THE FIT</span><h2>{category === 'rings' ? 'WHICH FINGER. WHICH SIZE.' : category === 'bracelets' ? 'MEASURE THE WRIST.' : category === 'earrings' ? 'SIZE. WEIGHT. CLOSURE.' : 'SIZE BEFORE THE SETUP.'}</h2><p>{category === 'rings' ? 'Tell us the finger and ring size you know. Ask about band width, fit and whether sizing or engraving is possible for the piece.' : category === 'bracelets' ? 'Share your wrist measurement and whether you prefer a close or loose fit. Ask about bracelet length, width, clasp and bangle opening.' : category === 'earrings' ? 'Ask about stud dimensions, hoop diameter, drop length, weight and closure. Confirm whether the piece is offered singly or as a pair.' : 'Ask about the dimensions and fit of the piece you want. Match the chain width to the pendant bail, and confirm ring or bracelet sizing before choosing.'}</p><Link className="btn-outline-gold" href="/size-guide">CHECK THE SIZE GUIDE →</Link></div><div><span className={s.eyebrow}>MATERIAL + STONE</span><h2>GOLD OR SILVER.<br/>DIAMOND OR MOISSANITE.</h2><p>Different shine. Different direction. Ask about construction, plating, stone identity and supporting documentation for the piece you choose. Details confirmed per piece.</p><Link className="btn-outline-gold" href="/materials">EXPLORE MATERIALS →</Link></div></div></section>
    <section className={s.section}><span className={s.eyebrow}>CUSTOM · YOUR OWN IDEA</span><h2>GOT A REFERENCE?</h2><p>A name, number, shape or engraving idea starts a separate custom conversation. For rings, ask about special sizing, a custom face or engraving. Share what you have in mind before quote or production.</p><div className={s.actions}><Link className="btn-primary" href="/custom">START A CUSTOM REQUEST →</Link><a className="btn-outline-gold" href={waUrl(`Hey 2T — I have a custom ${discovery ? 'jewelry' : data.title.toLowerCase()} idea. Can I send a reference?`)} target="_blank" rel="noopener noreferrer">TEXT THE IDEA →</a><Link className="btn-outline-gold" href="/collections">SHOP ALL CATEGORIES →</Link></div></section>
    <InquiryClose message={data.waMessage}/>
  </ExperiencePage>
}
