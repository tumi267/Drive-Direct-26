'use client'

import { useEffect, useState } from 'react'
import { DealerOnboardFormData } from '../libs/signup/types'
import useClerkId from './useAuth'

function useDealerOnboard() {
  const userId = useClerkId()
  const [formData, setFormData] =
    useState<DealerOnboardFormData>({
      companyName: '',
      tradingName: '',
      email: '',
      phone: '',
      clerkid:null,
      firstName: '',
      lastName: ''
    })
    useEffect(()=>{
      if(userId!==null){
          setFormData((prev)=>({...prev,clerkid:userId}))
      }
    },[userId])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = (
    field: keyof DealerOnboardFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const resetForm = () => {
    setFormData({
      companyName: '',
      tradingName: '',
      email: '',
      phone: '',
      clerkid:null,
      firstName: '',
      lastName: ''
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

export default useDealerOnboard