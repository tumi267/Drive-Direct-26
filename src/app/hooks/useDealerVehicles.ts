// hooks/useDealerVehicles.ts

'use client'

import { useEffect, useState } from 'react'
import { getDealerVehicles } from '../services/dealer/GetDealerVehicles'
import { Vehicle } from '../types/vehicle'

function useDealerVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(
    null
  )

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data =
          await getDealerVehicles()

        setVehicles(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Something went wrong'
        )
      } finally {
        setLoading(false)
      }
    }

    loadVehicles()
  }, [])

  return {
    vehicles,
    loading,
    error,
  }
}

export default useDealerVehicles