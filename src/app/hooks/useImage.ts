'use client'

import { useState } from 'react'
import { uploadImageToCloudinary } from '@/app/libs/media/cloudinary'

export interface UploadedImage {
  url: string
  publicId: string
}

function useImage() {
  const [images, setImages] = useState<File[]>([])
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const handleImageChange = (files: FileList | null) => {
    if (!files) return
    setImages(Array.from(files))
  }

  const uploadImages = async (vID:string) => {
    try {
      setLoading(true)
      setError(null)
      const uploads = await Promise.all(
        images.map(async (file) => {
          const formData = new FormData()
  
          formData.append('file', file)
          formData.append('vID', vID)
          const response = await fetch(
            '/api/image/upload',
            {
              method: 'POST',
              body: formData,
            }
          )
          const data =
            await response.json()
          if (!response.ok) {
            throw new Error(
              data.message ??
                'Upload failed'
            )
          }
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

  const removeImage = (index: number) => {
    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }

  return {
    images,
    uploadedImages,
    loading,
    error,
    handleImageChange,
    uploadImages,
    removeImage,
  }
}

export default useImage