import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import { PromoBar }      from '@/components/layout/PromoBar'
import { Header }        from '@/components/layout/Header'
import { Footer }        from '@/components/layout/Footer'
import { MobileCtaBar }  from '@/components/layout/MobileCtaBar'

/* ─── Fonts ─────────────────────────────────────────────────────────────── */

const cormorant = Cormorant_Garamond({
  variable:  '--font-cormorant',
  subsets:   ['latin'],
  weight:    ['300', '400', '500', '600', '700'],
  style:     ['normal', 'italic'],
  display:   'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  display:  'swap',
})

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:       '2T Jewelers | Custom Jewelry, Watches & Grillz',
  description: 'Custom chains, pendants, grillz, diamond watches, and fine jewelry. Real materials. Direct inquiry. Build the piece around your look.',
  openGraph: {
    title:       '2T Jewelers',
    description: 'Custom pieces. Real materials. Build the piece around your look.',
    type:        'website',
  },
  twitter: {
    card:  'summary_large_image',
    title: '2T Jewelers',
  },
}

/* ─── Root Layout ────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable}`}
    >
      {/*
        pb-[54px] reserves space so page content isn't hidden behind
        the fixed MobileCtaBar on small screens.
      */}
      <body className="min-h-screen flex flex-col pb-[54px] md:pb-0">
        <PromoBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  )
}
