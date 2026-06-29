'use client'

import { useEffect, useState } from 'react'
import {Vehicle,} from '../types/vehicle'

function useVehicleForm() {
  const [formData, setFormData] =
    useState<Vehicle>({
    id:'',
    dealerId: '',
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
    status: 'DRAFT',
    createdAt: '',
    updatedAt:''
    })

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState<string | null>(null)
    const loadVehicle = (vehicle: Vehicle) => {
      setFormData(vehicle)
    }

  const updateField = <
    K extends keyof Vehicle
  >(
    field: K,
    value: Vehicle[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const resetForm = () => {
    setFormData({
      id:'',
      dealerId: '',
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
      createdAt: '',
      updatedAt:''
    })
    setError(null)
  }

  return {
    formData,
    loading,
    error,
    loadVehicle,
    setLoading,
    setError,
    updateField,
    resetForm,
  }
}

export default useVehicleForm