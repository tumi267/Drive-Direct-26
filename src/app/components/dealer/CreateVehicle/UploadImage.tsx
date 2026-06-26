'use client'

import React from 'react'
import useImage from '@/app/hooks/useImage'
import Image from 'next/image'
import ImageSorter from './ImageSorter'
import ExistingImageManager from './ExistingImageManager'
interface props{
    vId:string
}
function UploadImage({vId}:props) {
  const {images,setImages,loading,error,handleImageChange,uploadImages,savedImages,setSavedimages} = useImage(vId)
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const results = await uploadImages(vId)
    setSavedimages(results)
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

        <button type="submit" disabled={loading} > {loading? 'Uploading...': 'Upload'} </button>
      </form>
      {error && <p>{error}</p>}
      <ImageSorter
      images={images}
      setImages={setImages}
      />
     {savedImages.length>0&& <div >
        Uploaded:<ExistingImageManager
        savedImages={savedImages}
        setSavedimages={setSavedimages}
        />
      </div>}
    </div>
  )
}

export default UploadImage