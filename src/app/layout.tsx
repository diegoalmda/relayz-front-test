import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { PageMenu } from '@/components/PageMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Relayz front-end test',
  description: 'Relayz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <aside className="bg-gray-700">
          <PageMenu />
        </aside>
        <main className="max-w-[1200px] m-auto">{children}</main>
      </body>
    </html>
  )
}
