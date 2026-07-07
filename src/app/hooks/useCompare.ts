'use client'

import { Vehicle } from '@/app/types/vehicle'
import { useCompareStore } from '@/app/store/compareStore'

export default function useCompare(
  vehicle: Vehicle
) {
  const {vehicles,addVehicle,removeVehicle,clear} = useCompareStore()
  const isSelected = vehicles.some(
    (v) => v.id === vehicle.id
  )
  const toggleVehicle = () => {
    if (isSelected) {
      removeVehicle(vehicle.id)
    }else{
      addVehicle(vehicle)
    }
  }
  return {
    vehicles,
    isSelected,
    compareCount: vehicles.length,
    toggleVehicle,
    clearCompare: clear,
  }
}