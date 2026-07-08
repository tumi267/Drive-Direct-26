'use client'

import { SignOutButton, SignedIn } from '@clerk/nextjs'
import DealerNavItem from '../Nav/DealerNavItem'
import { dealerNavLinks } from '../dealerNavLinks/dealerNavLinks'
import useDealerLogin from '@/app/hooks/useDealerlogin'

export default function DealerSidebar() {
  useDealerLogin()
  return (
    <aside className="w-64 border-r min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">
          Drive Direct 26
        </h2>

        <p className="text-sm text-gray-500">
          Dealer Portal
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {dealerNavLinks.map((link) => (
          <DealerNavItem
            key={link.href}
            href={link.href}
            label={link.label}
          />
        ))}
         <SignedIn>
        <SignOutButton redirectUrl="/">
          <button className="block w-full rounded-md border px-4 py-2 text-left hover:bg-gray-100">
            Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
      </nav>
    </aside>
  )
}