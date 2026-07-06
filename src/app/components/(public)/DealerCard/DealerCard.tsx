'use client'

import { Dealer } from '@/app/types/dealer'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  dealer: Dealer
}

function DealerCard({ dealer }: Props) {
  const coverImage =
    dealer.listings[0]?.images[0]?.url ?? '/images/dealer-placeholder.jpg'

  return (
    <Link href={`/DealersP/${dealer.id}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <div className="relative h-56 w-full">
          <Image
            src={coverImage}
            alt={dealer.companyName}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">
            {dealer.companyName}
          </h2>
          {dealer.tradingName && (
            <p className="text-gray-500">
              {dealer.tradingName}
            </p>
          )}
          <p className="text-sm text-gray-600">
            {dealer._count.listings}{' '}
            {dealer._count.listings === 1
              ? 'Vehicle'
              : 'Vehicles'}
          </p>
          <div className="pt-2">
            <span className="text-blue-600 font-medium">
              View Inventory
            </span>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default DealerCard