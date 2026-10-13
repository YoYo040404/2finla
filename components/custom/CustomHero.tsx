import { PageHero } from '@/components/experience/ExperiencePage'

const WA_CUSTOM = `https://wa.me/14124524343?text=${encodeURIComponent("Hey 2T — I have a custom jewelry idea. What do you need from me to start?")}`

export function CustomHero() {
  return <PageHero
    eyebrow="CUSTOM JEWELRY"
    title={"BRING THE IDEA.\nMAKE IT YOURS."}
    description="Logo, photo, name, number or sketch. Start with your direction — then ask 2T what works for the piece before quote or production. Pittsburgh · 332 Fifth Ave."
    image="/assets/demo/phase3a/2t-demo-pendants-01.png"
    primary={{ label: 'START THE REQUEST', href: '#custom-form' }}
    secondary={{ label: 'TEXT ABOUT YOUR IDEA', href: WA_CUSTOM }}
  />
}
