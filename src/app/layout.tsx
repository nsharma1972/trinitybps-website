import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBubble from '@/components/ChatBubble'

export const metadata: Metadata = {
  title: 'Trinity Bridge PS — AI Education, Data Intelligence & Consulting',
  description: 'Trinity Bridge PS helps organizations adopt AI confidently through workforce reskilling, data intelligence, and strategic consulting.',
  icons: { icon: '/favicon.ico', apple: '/logo.png' },
  openGraph: {
    title: 'Trinity Bridge PS',
    description: 'Bridging the gap between AI potential and real-world results.',
    url: 'https://www.trinitybps.com',
    siteName: 'Trinity Bridge PS',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <ChatBubble />
      </body>
    </html>
  )
}
