'use client'

import { Vehicle } from '@/app/types/vehicle'
import useCompareGlobal from '@/app/hooks/useCompareGlobal'

interface Props {
  vehicle: Vehicle
}

function CompareCard({
  vehicle,
}: Props) {
  const { removeVehicle } =
    useCompareGlobal()

  const image =
    vehicle.images?.[0]?.url ??
    '/images/placeholder-car.jpg'

  return (
    <div className="rounded-lg border p-4">
      <img
        src={image}
        alt={`${vehicle.make} ${vehicle.model}`}
        className="mb-4 h-40 w-full rounded object-cover"
      />

      <h2 className="text-lg font-semibold">
        {vehicle.make} {vehicle.model}
      </h2>

      <p className="mb-4 text-gray-600">
        R {Number(vehicle.price).toLocaleString()}
      </p>

      <button
        onClick={() =>
          removeVehicle(vehicle.id)
        }
        className="w-full rounded bg-red-600 py-2 text-white"
      >
        Remove
      </button>
    </div>
  )
}

export default CompareCard