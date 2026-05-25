import type { Metadata } from 'next'
import { Anton, Archivo, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { PromoBar }      from '@/components/layout/PromoBar'
import { Header }        from '@/components/layout/Header'
import { Footer }        from '@/components/layout/Footer'
import { MobileCtaBar }           from '@/components/layout/MobileCtaBar'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'

/* ─── Fonts ─────────────────────────────────────────────────────────────── */

const anton = Anton({
  variable: '--font-anton',
  subsets:  ['latin'],
  weight:   ['400'],
  display:  'swap',
})

const archivo = Archivo({
  variable: '--font-archivo',
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  display:  'swap',
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets:  ['latin'],
  weight:   ['400', '500'],
  display:  'swap',
})

const cormorant = Cormorant_Garamond({
  variable:  '--font-cormorant',
  subsets:   ['latin'],
  weight:    ['300', '400', '500', '600', '700'],
  style:     ['normal', 'italic'],
  display:   'swap',
})

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://2tjewelers.com'),
  title:       '2T Jewelers | Custom Jewelry, Watches & Grillz',
  description: 'Custom chains, pendants, grillz, diamond watches, and fine jewelry. Real materials. Direct inquiry. Build the piece around your look.',
  openGraph: {
    title:       '2T Jewelers',
    description: 'Custom pieces. Real materials. Build the piece around your look.',
    type:        'website',
    images: [{
      url:    '/assets/brand/2t-og-image-1200x630.png',
      width:  1731,
      height: 909,
      alt:    '2T Jewelers — Grillz, Watches, Chains & Custom Jewelry in Pittsburgh',
    }],
  },
  twitter: {
    card:   'summary_large_image',
    title:  '2T Jewelers',
    images: ['/assets/brand/2t-og-image-1200x630.png'],
  },
}

/* ─── Root Layout ────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${jetBrainsMono.variable} ${cormorant.variable}`}
    >
      {/*
        pb-[54px] reserves space so page content isn't hidden behind
        the fixed MobileCtaBar on small screens.
      */}
      <body className="min-h-screen flex flex-col pb-[56px] md:pb-0">
        <PromoBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
