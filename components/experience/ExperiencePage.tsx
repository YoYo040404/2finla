import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { brushExperience as brush } from '@/data/typography'
import s from './experience.module.css'

export function ExperiencePage({children}: {children: ReactNode}) {
 return <div className={`${s.page} ${brush.variable}`}>{children}</div>
}
export function PageHero({eyebrow,title,description,image,visual,primary,secondary}: {eyebrow:string;title:string;description:string;image?:string;visual?:ReactNode;primary:{label:string;href:string};secondary?:{label:string;href:string}}) {
 return <section className={s.hero}>
  {image ? <><Image src={image} alt="Jewelry concept illustration — not store inventory" fill sizes="100vw" preload className={s.heroImage}/><div className={s.shade}/><span className={s.demo}>DEMO CONCEPT · NOT INVENTORY</span></> : <div className={s.caseLight} aria-hidden="true"/>}
  {visual ? <><div className={s.heroMarker} aria-hidden="true">{visual}</div><span className={s.demo}>CATEGORY ILLUSTRATION</span></> : null}
  <div className={s.heroContent}><Link className={s.back} href="/">2T JEWELERS / {eyebrow}</Link><h1>{title}</h1><span className={s.bang}>BANG.</span><p>{description}</p><div className={s.actions}><Link className="btn-primary" href={primary.href}>{primary.label} →</Link>{secondary ? <Link className="btn-outline-gold" href={secondary.href}>{secondary.label} →</Link> : null}</div></div>
 </section>
}
export function InquiryClose({title='ASK BEFORE YOU BUY.',message,children}: {title?:string;message:string;children?:ReactNode}) {
 const href=`https://wa.me/14124524343?text=${encodeURIComponent(message)}`
 return <section className={s.close}><div><span className={s.eyebrow}>PITTSBURGH · 332 FIFTH AVE.</span><h2>{title}</h2><p>Material, stone, size and availability are confirmed for the piece you ask about.</p>{children}</div><a className="btn-primary" href={href} target="_blank" rel="noopener noreferrer">TEXT 2T →</a></section>
}
export {s as experienceStyles}
