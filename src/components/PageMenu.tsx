'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function PageMenu() {
  const currentPage = usePathname()

  return (
    <ul className="max-w-[1200px] m-auto flex flex-row gap-4 p-4 font-medium">
      <li
        className={`${
          currentPage === '/' ? 'text-white' : ''
        } flex flex-col hover:text-white transition-all`}
      >
        <Link href="/">Home</Link>
        <span
          className={
            currentPage === '/' ? 'bg-purple-200 h-[0.1rem] w-full' : ''
          }
        ></span>
      </li>
      <li
        className={`${
          currentPage === '/form' ? 'text-white' : ''
        } flex flex-col hover:text-white transition-all`}
      >
        <Link href="/form" className="">
          Campaign
        </Link>
        <span
          className={
            currentPage === '/form' ? 'bg-purple-200 h-[0.1rem] w-full' : ''
          }
        ></span>
      </li>
    </ul>
  )
}
