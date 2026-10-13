import type { Metadata } from 'next'
import Link from 'next/link'
import { CustomHero } from '@/components/custom/CustomHero'
import { CustomBuildFlow } from '@/components/custom/CustomBuildFlow'
import { CustomFaq } from '@/components/custom/CustomFaq'
import { ExperiencePage, InquiryClose, experienceStyles as s } from '@/components/experience/ExperiencePage'

export const metadata: Metadata = {
  title: 'Custom Jewelry Pittsburgh | 2T Jewelers',
  description: 'Bring a logo, photo, name or sketch. Ask 2T Jewelers about custom jewelry directions, materials and next steps in Pittsburgh.',
  robots: { index: false, follow: false },
}

export default function CustomPage() {
  return <ExperiencePage>
    <CustomHero />
    <section className={s.section} aria-labelledby="custom-process">
      <span className={s.eyebrow}>THE IDEA TO THE PIECE</span>
      <h2 id="custom-process">YOUR DIRECTION. CLEAR NEXT STEPS.</h2>
      <ol className={s.steps}>
        <li><h3>START WITH THE IDEA</h3><p>Share the piece type and your reference. A name, logo, photo, number, sketch or written idea gives the conversation a starting point.</p></li>
        <li><h3>CHOOSE THE DIRECTION</h3><p>Gold or silver. Diamond or moissanite. Add the size and budget range you have in mind; the range helps guide the conversation and is not a final quote.</p></li>
        <li><h3>GET NEXT-STEP DETAILS</h3><p>2T reviews the request and follows up with options and questions before quote or production. Ask about the material, stones, price and process for your piece.</p></li>
      </ol>
      <p><Link href="/materials">Compare material directions →</Link> · <Link href="/size-guide">Plan the size →</Link></p>
    </section>
    <CustomBuildFlow />
    <CustomFaq />
    <InquiryClose title="SEND THE IDEA." message="Hey 2T — I have a custom jewelry idea. Can I send you a reference and ask about the next steps?" />
  </ExperiencePage>
}
