import Link from 'next/link'
import { experienceStyles as s } from '@/components/experience/ExperiencePage'

const FAQS = [
  { q: 'What can I send?', a: 'A logo, photo, sketch, name, number or written description. Share the reference in the request form and describe what you want to carry over to the piece. A rough idea is enough to start the conversation.' },
  { q: 'What materials can I ask about?', a: 'Gold or silver. Diamond or moissanite. The material, stone type and specifications need to be confirmed for your specific piece before it is quoted.' },
  { q: 'What happens after I send the idea?', a: '2T reviews the request and follows up with direction, options and any questions needed before quote or production. Use the text path if you want to talk through the idea first.' },
  { q: 'What should I know about the quote?', a: 'Your budget range guides the conversation; it is not a quote. Ask for the price, design scope and any payment or timing details for your specific request before moving forward.' },
]

export function CustomFaq() {
  return <section className={s.section} aria-labelledby="custom-faq">
    <span className={s.eyebrow}>BEFORE THE BUILD</span>
    <h2 id="custom-faq">QUESTIONS WORTH ASKING.</h2>
    {FAQS.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    <p><Link href="/materials">Materials and stones →</Link> · <Link href="/size-guide">Size guide →</Link></p>
  </section>
}
