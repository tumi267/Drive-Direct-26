'use client'

import { useState } from 'react'
import { BannerLinkType, BannerPlacement } from '@prisma/client'
import { CampaignFormData } from '../types/bannerform'
import { createBanner } from '../services/dealer/Createbanner'

function useCampaignbanner() {
  const initialState: CampaignFormData = {
    title: '',
    discription: '',
    imageurl: '',
    startDate: null,
    endDate: null,
    placement: BannerPlacement.HOME_TOP,
    linkType:BannerLinkType.VEHICLE,
    image: null,
  }

  const [formdata, setFormData] =
    useState<CampaignFormData>(initialState)

  const updateField = <
    K extends keyof CampaignFormData
  >(
    field: K,
    value: CampaignFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (!file) return

    updateField('image', file)
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const res=await createBanner(formdata)
    console.log(formdata.image)
  }

  const resetForm = () => {
    setFormData(initialState)
  }

  return {
    formdata,
    updateField,
    handleImageChange,
    handleSubmit,
    resetForm,
  }
}

export default useCampaignbanner