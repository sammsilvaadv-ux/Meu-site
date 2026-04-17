import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { Suspense } from 'react'
import './globals.css'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { RouteChangeTracker } from '@/components/analytics/RouteChangeTracker'
import { CookieBanner } from '@/components/analytics/CookieBanner'
import { getConsentScript, getGTMScript } from '@/lib/gtm'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const gtmId = process.env.NEXT_PUBLIC_GTM_ID
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://samuel-martins-advocacia.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Advogado Duque de Caxias | Previdenciário e Consumidor | Samuel Martins Advocacia',
    template: '%s | Samuel Martins Advocacia',
  },
  description:
    'Escritório de advocacia especializado em Direito Previdenciário e do Consumidor em Duque de Caxias. Orientação jurídica ética e clara para a Baixada Fluminense.',
  openGraph: {
    siteName: 'Samuel Martins Advocacia',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {/* Consent Mode v2 — ANTES do GTM */}
        <script dangerouslySetInnerHTML={{ __html: getConsentScript() }} />

        {/* Google Tag Manager */}
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: getGTMScript(gtmId) }}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        {/* GTM noscript fallback */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Route tracker — DEVE estar em Suspense por causa do useSearchParams */}
        <Suspense fallback={null}>
          <RouteChangeTracker />
        </Suspense>

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}
