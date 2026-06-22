'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface DealerNavItemProps {
  href: string
  label: string
}

export default function DealerNavItem({
  href,
  label,
}: DealerNavItemProps) {
  const pathname = usePathname()

  const isActive =
    pathname === href ||
    pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={`
        block rounded-md px-4 py-2 transition
        ${
          isActive
            ? 'bg-black text-white'
            : 'hover:bg-gray-100'
        }
      `}
    >
      {label}
    </Link>
  )
}