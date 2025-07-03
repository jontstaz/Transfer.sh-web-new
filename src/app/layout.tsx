import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'transfer.jonte.lol - Easy file sharing from the command line',
  description: 'Simple, fast, and secure file sharing service. Upload files from your terminal and share them instantly.',
  keywords: ['file sharing', 'command line', 'upload', 'transfer', 'secure'],
  authors: [{ name: 'Jonte' }],
  openGraph: {
    title: 'transfer.jonte.lol - Easy file sharing',
    description: 'Simple, fast, and secure file sharing service',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${jetbrainsMono.variable} bg-dark-950 text-white`}>
        {children}
      </body>
    </html>
  )
}