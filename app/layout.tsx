import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import { AppLayout } from '@/feature/layout/view/AppLayout'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const materialSymbols = localFont({
  src: '../public/fonts/material-symbols.woff2',
  variable: '--font-material-symbols',
  weight: '100 700',
  display: 'block',
})

export const metadata: Metadata = {
  title: 'Rafael Couto - Desenvolvedor',
  description: 'Arquiteto Digital construindo o futuro. Soluções modernas, experiências excepcionais.',
}

import { ScrollHighlightScript } from '@/feature/layout/view/component/ScrollHighlightScript'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${materialSymbols.variable}`}>
      <head />

      <body className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary-fixed min-h-screen overflow-x-hidden">
        <AppLayout>{children}</AppLayout>
        <ScrollHighlightScript />
      </body>
    </html>
  )
}
