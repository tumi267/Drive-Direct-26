'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

function useVehicleFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [make, setMake] = useState(searchParams.get('make') ?? '')
  const [bodyType, setBodyType] = useState(searchParams.get('bodyType') ?? '')
  const [fuelType, setFuelType] = useState(searchParams.get('fuelType') ?? '')
  const [transmission, setTransmission] =useState(searchParams.get('transmission') ?? '')
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') ?? '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') ?? '')
  const [sort, setSort] = useState(searchParams.get('sort') ?? 'newest')
  const applyFilters = () => {
    const params = new URLSearchParams()
    if (make) params.set('make', make)
    if (bodyType)params.set('bodyType', bodyType)
    if (fuelType)params.set('fuelType', fuelType)
    if (transmission)params.set('transmission',transmission)
    if (minPrice)params.set('minPrice', minPrice)
    if (maxPrice)params.set('maxPrice', maxPrice)
    if (sort)params.set('sort', sort)
    router.push(`/vehicle?${params.toString()}`)
  }

  return {make,setMake,bodyType,setBodyType,fuelType,setFuelType,transmission,setTransmission,minPrice,setMinPrice,maxPrice,setMaxPrice,applyFilters,sort,setSort
  }
}

export default useVehicleFilters