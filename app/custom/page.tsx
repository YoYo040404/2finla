import type { Metadata } from 'next'
import { CustomHero }     from '@/components/custom/CustomHero'
import { CustomBuildFlow } from '@/components/custom/CustomBuildFlow'
import { HowItWorks }     from '@/components/custom/HowItWorks'
import { CustomFaq }      from '@/components/custom/CustomFaq'
import { WorkPlaceholder } from '@/components/custom/WorkPlaceholder'

export const metadata: Metadata = {
  title:       'Custom Jewelry Pittsburgh | Grillz, Pendants & Iced Chains — 2T Jewelers',
  description: 'Custom grillz, pendants, chains & iced-out jewelry in Pittsburgh, PA. Send your logo, sketch, or idea — 2T Jewelers guides the next step. Over 30 years.',
}

export default function CustomPage() {
  return (
    <>
      <CustomHero />
      <CustomBuildFlow />
      <HowItWorks />
      <WorkPlaceholder />
      <CustomFaq />
    </>
  )
}
