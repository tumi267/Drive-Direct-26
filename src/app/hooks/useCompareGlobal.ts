'use client'

import { useCompareStore } from '@/app/store/compareStore'

export default function useCompare() {
    const vehicles = useCompareStore(
        (state) => state.vehicles
      )
      const addVehicle = useCompareStore(
        (state) => state.addVehicle
      )
      const removeVehicle = useCompareStore(
        (state) => state.removeVehicle
      )
      const clear = useCompareStore(
        (state) => state.clear
      )

  return {
    vehicles,
    compareCount: vehicles.length,
    addVehicle,
    removeVehicle,
    clearCompare: clear,
  }
}