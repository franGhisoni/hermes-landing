import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hermes — La redacción que nunca duerme',
  description:
    'Hermes es la plataforma SaaS que escanea medios en tiempo real, puntúa qué historias importan, las reescribe con tu estilo editorial y las publica con imagen incluida. Una redacción digital 24/7, sin redactores.',
  openGraph: {
    title: 'Hermes — La redacción que nunca duerme',
    description:
      'Hermes es la plataforma SaaS que escanea medios en tiempo real, puntúa qué historias importan, las reescribe con tu estilo editorial y las publica con imagen incluida. Una redacción digital 24/7, sin redactores.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hermes — La redacción que nunca duerme',
    description:
      'Hermes es la plataforma SaaS que escanea medios en tiempo real, puntúa qué historias importan, las reescribe con tu estilo editorial y las publica con imagen incluida. Una redacción digital 24/7, sin redactores.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream text-carbon font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
