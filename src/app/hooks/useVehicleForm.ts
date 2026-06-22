'use client'

import { useState } from 'react'
import {BodyType,CreateVehicleFormData,FuelType,Transmission,} from '../types/vehicle'

function useVehicleForm() {
  const [formData, setFormData] =
    useState<CreateVehicleFormData>({
      make: '',
      model: '',
      variant: '',
      year: new Date().getFullYear(),
      mileage: 0,
      price: 0,
      fuelType: 'PETROL' as FuelType,
      transmission: 'MANUAL' as Transmission,
      bodyType: 'SEDAN' as BodyType,
      colour: '',
      description: '',
    })

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState<string | null>(null)

  const updateField = <
    K extends keyof CreateVehicleFormData
  >(
    field: K,
    value: CreateVehicleFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const resetForm = () => {
    setFormData({
      make: '',
      model: '',
      variant: '',
      year: new Date().getFullYear(),
      mileage: 0,
      price: 0,
      fuelType: 'PETROL',
      transmission: 'MANUAL',
      bodyType: 'SEDAN',
      colour: '',
      description: '',
    })
    setError(null)
  }

  return {
    formData,
    loading,
    error,
    setLoading,
    setError,
    updateField,
    resetForm,
  }
}

export default useVehicleForm