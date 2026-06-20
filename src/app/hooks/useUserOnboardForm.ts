'use client'

import { useEffect, useState } from 'react'
import { UserOnboardFormData } from '../libs/signup/types'
import useClerkId from './useAuth'

function useUserOnboardForm() {
  const [formData, setFormData] = useState<UserOnboardFormData>({
    firstName: '',
    lastName: '',
    clerkid:''
  })
  const userId = useClerkId() 
  useEffect(()=>{
    if(userId!==null){
        setFormData((prev)=>({...prev,clerkid:userId}))
    }
  },[userId])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = (
    field: keyof UserOnboardFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      clerkid:userId||''
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

export default useUserOnboardForm