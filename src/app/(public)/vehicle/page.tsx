import VehicleGrid from '@/app/components/(public)/FeaturedListings/VehicleGrid'
import { getAllVehicles } from '@/app/libs/crud/vehicle/vehicle.get'
import React from 'react'

async function page() {
    const vehicles = await getAllVehicles()
  return (
    <div> <VehicleGrid
    vehicles={vehicles}
    /></div>
  )
}

export default page