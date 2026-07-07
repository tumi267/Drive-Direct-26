'use client'

import Link from 'next/link'
import useCompareGlobal from '@/app/hooks/useCompareGlobal'

function CompareBar() {
  const {
    vehicles,
    compareCount,
    clearCompare,
  } = useCompareGlobal()

  if (compareCount === 0) {
    return null
  }

  return (
    <div className="border-t bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div>
          <p className="font-semibold">
            {compareCount} / 4 Vehicles Selected
          </p>

          <div className="flex gap-2 text-sm text-gray-600">
            {vehicles.map((vehicle) => (
              <span key={vehicle.id}>
                {vehicle.make} {vehicle.model}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={clearCompare}
            className="rounded border px-4 py-2"
          >
            Clear
          </button>

          <Link
            href="/compare"
            className="rounded bg-black px-4 py-2 text-white"
          >
            Compare
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompareBar