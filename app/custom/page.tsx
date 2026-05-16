import type { Metadata } from 'next'
import { CustomHero }    from '@/components/custom/CustomHero'
import { IdeaTypeStrip } from '@/components/custom/IdeaTypeStrip'
import { HowItWorks }    from '@/components/custom/HowItWorks'
import { CustomForm }    from '@/components/custom/CustomForm'
import { CustomFaq }     from '@/components/custom/CustomFaq'

export const metadata: Metadata = {
  title:       '2T Jewelers | Custom Jewelry — Build Your Piece',
  description: 'Custom name pieces, logo pendants, photo jewelry, iced-out pendants, and custom chains. Real materials. Send the idea, we guide the next step.',
}

export default function CustomPage() {
  return (
    <>
      <CustomHero />
      <IdeaTypeStrip />
      <CustomForm />
      <HowItWorks />
      <CustomFaq />
    </>
  )
}
