// File: app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import { FiSettings } from 'react-icons/fi'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZiiOZ',
  description: 'ZiiOZ – The next-gen social platform for creators and trendsetters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Settings Icon – enlarged for visibility */}
        <Link href="/settings" className="absolute top-4 left-4 text-gray-500 hover:text-black z-50">
          <FiSettings className="w-8 h-8" /> {/* size increased from w-5 h-5 */}
        </Link>

        {children}
      </body>
    </html>
  )
}
