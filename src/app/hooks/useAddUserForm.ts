'use client'

import { useState } from 'react'
import { AddUserFormData } from '../types/adddealer'
const initialState: AddUserFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    role: 'SALES',
  }
export default function useAddUser() {
  const [formData, setFormData] =useState<AddUserFormData>(initialState)

  const [loading, setLoading] =useState(false)

  const [error, setError] =useState<string | null>(null)

  const [showPassword, setShowPassword] = useState(false)
  const updateField = <K extends keyof AddUserFormData>(
    field: K,
    value: AddUserFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const reset = () => {
    setFormData(initialState)
    setError(null)
  }

  return {formData,loading,error,setLoading,setError,updateField,reset,showPassword, setShowPassword}
}