import type { Metadata } from 'next'
import { anton, archivo, jetBrainsMono, cormorant } from '@/data/typography'
import './globals.css'
import { PromoBar }      from '@/components/layout/PromoBar'
import { Header }        from '@/components/layout/Header'
import { Footer }        from '@/components/layout/Footer'
import { MobileCtaBar }           from '@/components/layout/MobileCtaBar'
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton'
import { Analytics } from '@vercel/analytics/next'

/* ─── Fonts ─────────────────────────────────────────────────────────────── */

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://2tjewelers.com'),
  title:       '2T Jewelers | Hip Hop Jewelry, Grillz & Custom — Pittsburgh, PA',
  description: 'Iced-out chains, custom grillz, pendants, and watches at 2T Jewelers — Pittsburgh store. Text 2T before you buy. Details confirmed per piece.',
  openGraph: {
    title:       '2T Jewelers',
    description: 'Custom pieces. Real materials. Build the piece around your look.',
    type:        'website',
    images: [{
      url:    '/assets/brand/2t-og-image-1200x630.png',
      width:  1200,
      height: 630,
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
            '@id': `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://2tjewelers.com'}/#business`,
            name: '2T Jewelers',
            url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://2tjewelers.com',
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
        <Analytics />
      </body>
    </html>
  )
}
