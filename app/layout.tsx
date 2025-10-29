import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flipkart Clone - Online Shopping Site',
  description: 'Shop for Electronics, Fashion, Home & Kitchen, Books and more. Best Deals & Offers.',
  keywords: 'online shopping, e-commerce, electronics, fashion, home, books, deals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
