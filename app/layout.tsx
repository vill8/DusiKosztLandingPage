import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const outline = Outfit({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-outline',
})

export const metadata: Metadata = {
  title: 'DusiKoszt - Landing Page',
  description:
    'DusiKoszt to aplikacja na Androida wspierajaca kontrolowanie kosztow i budzetu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} ${outline.variable}`}>{children}</body>
    </html>
  )
}