
import { vehicleTypes } from '@/app/libs/dumie'
import Link from 'next/link'
import React from 'react'

function VehicleType() {
   
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
    {vehicleTypes.map((type) => (
      <Link
        key={type.id}
        href={`/vehicle?bodyType=${type.value}`}
        className="border rounded-lg p-4 hover:shadow-md transition text-center"
      >
        {/* logo images goes here */}

        <p>{type.title}</p>
      </Link>
    ))}
  </div>
  )
}

export default VehicleType