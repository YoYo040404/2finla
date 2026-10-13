'use client'
import {useState} from 'react'
import s from './experience.module.css'
export function SizeExplorer(){
 const [width,setWidth]=useState(6)
 const [stone,setStone]=useState(6)
 const [length,setLength]=useState('22')
 const message=`Hey 2T — I used the illustrative size guide. I want to ask about a ${length}-inch chain, around ${width}mm wide, and a ${stone}mm stone direction. What is available, and can you confirm actual dimensions and fit?`
 return <div>
 <div className={s.controls}><div className={s.control}><label htmlFor="chain-width">Chain width direction: {width} mm</label><input id="chain-width" type="range" min="2" max="16" step="1" value={width} onChange={e=>setWidth(Number(e.target.value))}/></div><div className={s.control}><label htmlFor="stone-size">Round stone diameter direction: {stone} mm</label><input id="stone-size" type="range" min="2" max="12" step=".5" value={stone} onChange={e=>setStone(Number(e.target.value))}/></div><div className={s.control}><label htmlFor="chain-length">Chain length to ask about</label><select id="chain-length" value={length} onChange={e=>setLength(e.target.value)}>{['18','20','22','24','26','30'].map(n=><option key={n} value={n}>{n} inches ({(Number(n)*2.54).toFixed(1)} cm)</option>)}</select></div></div>
 <svg role="img" aria-label={`Illustrative chain width ${width} millimeters and round stone diameter ${stone} millimeters. Not actual size.`} viewBox="0 0 600 220" style={{width:'100%',height:'auto',display:'block',background:'#090806',marginTop:24,border:'1px solid #54462a'}}>
 <g fill="none" stroke="#e0bc67" strokeWidth={width*2}>{[0,1,2,3,4].map(i=><ellipse key={i} cx={70+i*42} cy="98" rx="32" ry="24"/>)}</g>
 <line x1="340" y1="30" x2="340" y2="175" stroke="#54462a"/>
 <circle cx="460" cy="98" r={stone*5} fill="#bde0f329" stroke="#e9f7ff" strokeWidth="2"/>
 <path d={`M${460-stone*5} 98H${460+stone*5} M460 ${98-stone*5}V${98+stone*5}`} stroke="#e9f7ff" opacity=".6"/>
 <text x="145" y="190" textAnchor="middle" fill="#e0bc67" fontSize="15">{width} mm width direction</text><text x="460" y="190" textAnchor="middle" fill="#e9f7ff" fontSize="15">{stone} mm diameter direction</text>
 </svg>
 <p className={s.notice}>ILLUSTRATIVE ONLY. The chain and stone drawings use separate display scales. They are not actual size, a product preview, a cut simulation or an inventory selector. Length choices are questions for 2T, not confirmed stock.</p>
 <p className={s.result}>Your inquiry: {length}-inch chain · {width} mm width · {stone} mm round-stone diameter.</p>
 <a className="btn-primary" target="_blank" rel="noopener noreferrer" href={`https://wa.me/14124524343?text=${encodeURIComponent(message)}`}>ASK 2T ABOUT THESE DIMENSIONS →</a>
 </div>
}
