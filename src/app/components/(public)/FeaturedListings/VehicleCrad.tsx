'use client'

import { Vehicle } from '@/app/types/vehicle'
import Image from 'next/image'
import Link from 'next/link'
import CompareButton from '../Compare/CompareButton'

interface Props {
  vehicle: Vehicle
}

export default function VehicleCard({
  vehicle,
}: Props) {
  const image =
    vehicle.images?.[0]?.url ??
    '/images/car-placeholder.jpg'

  return (
    <Link href={`/vehicle/${vehicle.id}`}>
      <div className="overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition">
        <Image
          src={image}
          alt={`${vehicle.make} ${vehicle.model}`}
          width={400}
          height={250}
          className="h-52 w-full object-cover"
        />
      <CompareButton
      vehicle={vehicle}
      />
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h2>

          {vehicle.variant && (
            <p className="text-gray-500">
              {vehicle.variant}
            </p>
          )}

          <div className="flex justify-between text-sm text-gray-600">
            <span>
              {vehicle.mileage.toLocaleString()} km
            </span>

            <span>
              {vehicle.transmission}
            </span>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>{vehicle.fuelType}</span>

            <span>{vehicle.bodyType}</span>
          </div>

          <p className="pt-2 text-2xl font-bold">
            R{vehicle.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  )
}