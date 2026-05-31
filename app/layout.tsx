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
  title:       '2T Jewelers — Grillz, Watches & Custom Jewelry | Pittsburgh, PA',
  description: 'Shop grillz, watches, chains, pendants, and custom jewelry from 2T Jewelers in Pittsburgh. Text 2T before you buy. Product details confirmed per piece.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'JewelryStore',
            name: '2T Jewelers',
            url: 'https://2finla.vercel.app',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '332 Fifth Ave',
              addressLocality: 'Pittsburgh',
              addressRegion: 'PA',
              postalCode: '15222',
              addressCountry: 'US',
            },
            telephone: '+1 412-281-7072',
            sameAs: [
              'https://www.instagram.com/2tjewelers/',
              'https://www.tiktok.com/@2tjewelers',
            ],
          }) }}
        />
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
