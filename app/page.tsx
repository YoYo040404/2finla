import type { Metadata } from 'next'
import { brushHome as brush } from '@/data/typography'
import Image from 'next/image'
import Link from 'next/link'
import { HomeHeroMotion } from '@/components/home/HomeHeroMotion'
import { CategorySilhouette } from '@/components/home/CategorySilhouette'
import { HOME_MEDIA } from '@/data/homeMedia'
import s from './home-preview.module.css'

export const metadata: Metadata = { title: '2T Homepage — Design Preview', robots: { index: false, follow: false } }
const WA = 'https://wa.me/14124524343?text=Hey%202T%20%E2%80%94%20I%20saw%20the%20site%20and%20want%20to%20ask%20about%20a%20piece.'
const categories: { name: string; href: string; image?: string; marker?: 'ring' | 'bracelet' | 'earring'; large?: boolean }[] = [
  { name: 'Chains', href: '/collections/chains', image: HOME_MEDIA.anchorTiles.chains.src, large: true },
  { name: 'Pendants', href: '/collections/pendants', image: HOME_MEDIA.pendantSecondary.src, large: true },
  { name: 'Grillz', href: '/grillz', image: HOME_MEDIA.anchorTiles.grillz.src },
  { name: 'Watches', href: '/watches', image: HOME_MEDIA.anchorTiles.watches.src },
  { name: 'Rings', href: '/collections/rings', marker: 'ring' },
  { name: 'Bracelets', href: '/collections/bracelets', marker: 'bracelet' },
  { name: 'Earrings', href: '/collections/earrings', marker: 'earring' },
]
export default function HomePage() {
  return <div className={`${s.page} ${brush.variable}`}>
    <p className={s.notice}>PREVIEW CONCEPT — DEMO IMAGERY, NOT INVENTORY</p>
    <section className={s.hero} aria-labelledby="campaign-title">
      <Image src={HOME_MEDIA.hero.posterSrc} alt="Chain and pendant — demo concept visual, not inventory" fill sizes="100vw" preload className={s.heroImage} />
      <HomeHeroMotion src={HOME_MEDIA.hero.videoSrc} />
      <div className={s.heroShade} aria-hidden="true" />
      <div className={s.heroContent}>
        <div className="mi-eyebrow"><span className="mi-diamond-sm" aria-hidden="true" /> PITTSBURGH · 2T JEWELERS</div>
        <h1 id="campaign-title" className={s.campaign}>BUILT<br />TO HIT.</h1>
        <span className={`bang-signature ${s.bang}`}>BANG.</span>
        <p className={s.heroCopy}>JEWELRY. CUSTOM PIECES.<br />YOUR LOOK. YOUR DIRECTION.</p>
        <div className={s.actions}><a href="#home-shop" className="btn-primary">SHOP THE PIECES →</a><Link href="/custom" className="btn-primary">START CUSTOM →</Link></div>
      </div>
      <span className={s.imageNote}>DEMO CONCEPT VISUAL</span>
    </section>
    <section id="home-shop" className={s.shop} aria-labelledby="shop-title">
      <div className={s.heading}><h2 id="shop-title">PICK THE PIECE.</h2><div><p>CHAINS. PENDANTS. GRILLZ. WATCHES. RINGS. BRACELETS. EARRINGS.</p><span>EXPLORE THE DIRECTION. ASK ABOUT THE DETAILS.</span></div></div>
      <div className={s.grid}>{categories.map(c => <Link key={c.name} href={c.href} className={`${s.category} ${c.large ? s.large : ''}`}>
        {c.image ? <Image src={c.image} alt={`${c.name} — demo concept visual, not inventory`} fill sizes={c.large ? '(max-width: 640px) 100vw, 50vw' : '(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 20vw'} className={s.cardImage} /> : <div className={s.marker}><CategorySilhouette type={c.marker!} /></div>}
        <div className={s.cardShade} aria-hidden="true" /><span className={s.cardNote}>{c.image ? 'DEMO VISUAL' : 'CATEGORY ILLUSTRATION'}</span>
        <div className={s.cardText}><h3>{c.name}</h3><span>EXPLORE {c.name.toUpperCase()} →</span></div>
      </Link>)}</div>
    </section>
    <section className={s.directions} aria-label="Equal material and stone directions">
      <div className={s.directionRow}><div className={`${s.direction} ${s.gold}`}><span>METAL DIRECTION</span><h2>GOLD</h2><p>Details confirmed per piece.</p></div><div className={`${s.direction} ${s.silver}`}><span>METAL DIRECTION</span><h2>SILVER</h2><p>Material details confirmed per piece.</p></div></div>
      <div className={s.directionRow}><div className={`${s.direction} ${s.diamond}`}><span>STONE DIRECTION</span><h2>DIAMONDS</h2><p>Details confirmed per piece.</p></div><div className={`${s.direction} ${s.moissanite}`}><span>STONE DIRECTION</span><h2>MOISSANITE</h2><p>Stone details confirmed per piece.</p></div></div>
      <p className={s.directionFoot}>Gold or silver. Diamond or moissanite. Different shine. Different direction. <Link href="/collections">EXPLORE COLLECTIONS →</Link></p>
      <p className={s.directionFoot}><Link href="/materials">SILVER + MOISSANITE GUIDE →</Link><Link href="/size-guide">EXPLORE SIZE + WIDTH →</Link></p>
    </section>
    <section className={s.custom} aria-labelledby="custom-title">
      <Image src={HOME_MEDIA.customVitrine.src} alt="Sketch and pendant — demo concept, not completed customer work" fill sizes="100vw" className={s.customImage} /><div className={s.customShade} aria-hidden="true" />
      <div className={s.customContent}><div className={s.customIntro}><h2 id="custom-title">BRING THE IDEA.</h2><p>Logo, photo, name, number, sketch.<br />Send the idea. We quote before the build.</p><Link href="/custom" className="btn-primary">START CUSTOM →</Link></div>
        <ol className={s.steps}><li><span>01</span><h3>SEND THE IDEA</h3><p>A photo, sketch<br />or inspiration.</p></li><li><span>02</span><h3>CHOOSE THE DIRECTION</h3><p>Metal. Stone.<br />Your kind of shine.</p></li><li><span>03</span><h3>TALK THROUGH THE DETAILS</h3><p>We review the idea.<br />We quote first.</p></li></ol>
      </div><span className={s.imageNote}>DEMO CONCEPT VISUAL</span>
    </section>
    <section className={s.social} aria-labelledby="social-title"><div><h2 id="social-title">@2TJEWELERS</h2><p>CONNECT WITH 2T<br />ON INSTAGRAM</p></div><a href="https://www.instagram.com/2tjewelers/" target="_blank" rel="noopener noreferrer" className={s.socialLink}>OPEN INSTAGRAM →</a></section>
    <section className={s.contact} aria-labelledby="pittsburgh-title"><div><div className="mi-eyebrow"><span className="mi-diamond-sm" aria-hidden="true" /> COME THROUGH</div><h2 id="pittsburgh-title">PITTSBURGH.</h2><span className={`bang-signature ${s.contactBang}`}>BANG.</span></div><div className={s.address}><p>332 FIFTH AVE.<br />PITTSBURGH, PA 15222</p><a href="tel:+14122817072">CALL THE STORE · 412-281-7072 →</a></div><a href={WA} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">TEXT 2T ON WHATSAPP →</a></section>
  </div>
}
