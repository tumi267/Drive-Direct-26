'use client'

import useDealerVehicles from '@/app/hooks/useDealerVehicles'
import VehicleCard from '../../gobal/VehicleCard/VehicleCard'
import Link from 'next/link'


function DealerListings() {
  const {vehicles,loading,error,} = useDealerVehicles()

  if (loading) {
    return <p>Loading vehicles...</p>
  }

  if (error) {
    return (
      <p className="text-red-500">
        {error}
      </p>
    )
  }

  if (vehicles.length === 0) {
    return (
      <p>
        No vehicles found.
      </p>
    )
  }

  return (
    <div className="space-y-4">
      {vehicles.map((vehicle) => (
        <Link key={vehicle.id} href={`/dealer/listings/${vehicle.id}`}>
        <VehicleCard
          vehicle={vehicle}
        />
        </Link>
      ))}
    </div>
  )
}

export default DealerListings