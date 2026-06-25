'use client'

import { useEffect, useState } from 'react'
import { uploadImageToCloudinary } from '@/app/libs/media/cloudinary'
import { GetvehilceImage } from '../services/dealer/GetvehilceImage'

export interface UploadedImage {
  url: string
  publicId: string
}

function useImage(vID:string) {
  const [images, setImages] = useState<File[]>([])
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [savedImages,setSavedimages]=useState<UploadedImage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const handleImageChange = (files: FileList | null) => {
    if (!files) return
    setImages(Array.from(files))
  }
  // get images on load
  useEffect(()=>{
    if(images.length>0)return
    const getimages=async()=>{
      const vImages=await GetvehilceImage(vID)
      setImages(vImages)
    }
    getimages()
  },[images])
// upload images
  const uploadImages = async (vID:string) => {
    try {
      setLoading(true)
      setError(null)
      const uploads = await Promise.all(
        images.map(async (file,i) => {
          const formData = new FormData()
  
          formData.append('file', file)
          formData.append('vID', vID)
          formData.append('position',i.toString())
          const response = await fetch(
            '/api/image/upload',
            {
              method: 'POST',
              body: formData,
            }
          )
          const data = await response.json()
          if (!response.ok) {
            throw new Error(
              data.message ??
                'Upload failed'
            )
          }
          setImages([])
          return data
        })
      )
      setUploadedImages(uploads)
      return uploads
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Upload failed'
      )
      return []
    } finally {
      setLoading(false)
    }
  }
// remove image
  const removeImage = (index: number) => {
    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  return {
    images,
    setImages,
    uploadedImages,
    loading,
    error,
    handleImageChange,
    uploadImages,
    removeImage,
    savedImages,
    setSavedimages,
  }
}

export default useImage