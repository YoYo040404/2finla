import type { Metadata } from 'next'
import Link from 'next/link'
import { HOME_MEDIA } from '@/data/homeMedia'
import { ExperiencePage, PageHero, InquiryClose, experienceStyles as s } from '@/components/experience/ExperiencePage'
import Image from 'next/image'
import { CategorySilhouette } from '@/components/home/CategorySilhouette'

export const metadata: Metadata = { title: '2T Jewelers | Shop Collections — Pittsburgh, PA', description: 'Explore seven jewelry categories. Shop the direction or start a separate custom request with 2T Jewelers in Pittsburgh.', robots: { index: false, follow: false } }
const CATEGORIES = [
  { label:'Grillz', href:'/grillz', line:'Top. Bottom. Full mouth. Ask about the process and fit.', image:HOME_MEDIA.anchorTiles.grillz.src },
  { label:'Watches', href:'/watches', line:'Iced or clean direction. Condition and details confirmed per watch.', image:HOME_MEDIA.anchorTiles.watches.src },
  { label:'Chains', href:'/collections/chains', line:'Cuban. Rope. Tennis. Start with the neck.', image:HOME_MEDIA.anchorTiles.chains.src },
  { label:'Pendants', href:'/collections/pendants', line:'Cross. Medallion. Initial. Find the pendant direction.', image:HOME_MEDIA.pendantSecondary.src },
  { label:'Rings', href:'/collections/rings', line:'Big face or clean band. Ask what fits.', image:null },
  { label:'Bracelets', href:'/collections/bracelets', line:'Tennis. Cuban. Bangle. Start with the wrist.', image:null },
  { label:'Earrings', href:'/collections/earrings', line:'Studs. Hoops. Iced or clean. Shine at eye level.', image:null },
]
export default function CollectionsPage() {
  return <ExperiencePage>
    <PageHero eyebrow="SHOP / COLLECTIONS" title={'PICK THE PIECE.\nPICK THE SHINE.'} description="Seven categories. Gold or silver. Diamond or moissanite. Start with what you want to wear, then confirm the details of the piece." image={HOME_MEDIA.hero.posterSrc} primary={{label:'SHOP THE CATEGORIES',href:'#shop-categories'}} secondary={{label:'TEXT 2T',href:'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20what%20jewelry%20do%20you%20have%20available%20now%3F'}}/>
    <section className={s.section} id="shop-categories"><div className={s.sectionHeading}><div><span className={s.eyebrow}>SHOP · SEVEN CATEGORIES</span><h2>FIND YOUR DIRECTION.</h2></div><p>Explore the style, then ask about the piece. Category images are demo concepts, not store inventory. Availability, materials and stones are confirmed per piece.</p></div><div className={s.grid}>{CATEGORIES.map(category=><Link className={s.tile} href={category.href} key={category.label}>{category.image ? <div className={s.tileImage}><Image src={category.image} alt={`${category.label} concept illustration — not store inventory`} fill sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"/><small>DEMO CONCEPT · NOT INVENTORY</small></div> : <div className={s.categoryMarker}><CategorySilhouette type={category.label === 'Rings' ? 'ring' : category.label === 'Bracelets' ? 'bracelet' : 'earring'}/><span>CATEGORY ILLUSTRATION</span></div>}<h3>{category.label}</h3><p>{category.line}</p><span>{category.label === 'Grillz' || category.label === 'Watches' ? 'EXPLORE + ASK' : 'SHOP THE DIRECTION'} →</span></Link>)}</div></section>
    <section className={s.section}><div className={s.split}><div><span className={s.eyebrow}>CUSTOM · A SEPARATE PATH</span><h2>YOUR LOGO. YOUR NAME. YOUR PIECE.</h2><p>Have a logo, sketch, photo, name, number or reference? Start the request and get next-step information before quote or production.</p><div className={s.actions}><Link className="btn-primary" href="/custom">START CUSTOM →</Link><a className="btn-outline-gold" href="https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20have%20a%20custom%20idea.%20Can%20I%20send%20a%20photo%20or%20logo%3F" target="_blank" rel="noopener noreferrer">TEXT THE IDEA →</a></div></div><div><span className={s.eyebrow}>ASK BEFORE YOU BUY</span><h2>KNOW THE PIECE.</h2><p>Ask about material, stone, construction, dimensions and availability. Gold or silver. Diamond or moissanite. Different shine. Different direction.</p><div className={s.actions}><Link className="btn-outline-gold" href="/materials">EXPLORE MATERIALS →</Link><Link className="btn-outline-gold" href="/size-guide">CHECK THE SIZE GUIDE →</Link></div></div></div></section>
    <InquiryClose message="Hey 2T — I'm looking at the collections. Can you help me choose a category and confirm what's available?"/>
  </ExperiencePage>
}
