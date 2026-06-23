'use client'

import React from 'react'
import useImage from '@/app/hooks/useImage'
interface props{
    vId:string
}
function UploadImage({vId}:props) {
  const {images,uploadedImages,loading,error,handleImageChange,uploadImages,} = useImage()
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const results = await uploadImages(vId)
    console.log(results)
  }

  return (
    <div>
      <h1>Upload Images</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          multiple
          onChange={(e) =>
            handleImageChange(e.target.files)
          }
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? 'Uploading...'
            : 'Upload'}
        </button>
      </form>

      {error && <p>{error}</p>}

      <p>
        Selected: {images.length}
      </p>

      <p>
        Uploaded: {uploadedImages.length}
      </p>
    </div>
  )
}

export default UploadImage