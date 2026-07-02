import VehicleGrid from '@/app/components/(public)/FeaturedListings/VehicleGrid'
import Filter from '@/app/components/gobal/Filter/Filter'
import Pagination from '@/app/components/gobal/Pagination/Pagination'
import { getPaginatedVehicles } from '@/app/libs/crud/vehicle/vehicle.get'
import { VehicleSort } from '@/app/types/vehicle'
import React from 'react'
interface Props {
  searchParams: {
    page?: string
    make?: string
    bodyType?: string
    fuelType?: string
    transmission?: string
    minPrice?: string
    maxPrice?: string
    sort?:string
    search?:string
  }
}
async function page({searchParams}:Props) {
  const filters = {
    page: Number(searchParams.page ?? 1),
    limit: 10,
    make: searchParams.make,
    bodyType: searchParams.bodyType,
    fuelType: searchParams.fuelType,
    transmission: searchParams.transmission,
    minPrice: searchParams.minPrice? Number(searchParams.minPrice): undefined,
    maxPrice: searchParams.maxPrice? Number(searchParams.maxPrice): undefined,
    sort:searchParams.sort as VehicleSort | undefined,
    search: searchParams.search,
    // status: 'PUBLISHED' as const,
  }
    
    const {vehicles,currentPage,totalPages,} = await getPaginatedVehicles(filters)

  return (
    <div>
      <Filter/>
      <div>
      <VehicleGrid
      vehicles={vehicles}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
      </div>
    </div>
  )
}

export default page