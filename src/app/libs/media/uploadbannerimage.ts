const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET!
const CloudName=process.env.CLOUDINARY_CLOUD_NAME!
export interface CloudinaryUploadResponse {
  secure_url: string
  public_id: string
}

export async function uploadImageToCloudinary(
  file: Blob,
  CampaignId:string,
): Promise<CloudinaryUploadResponse> {
  const formData = new FormData()
  formData.append(
    'folder',
    `dealers/Campaign/${CampaignId}`
  )
  formData.append('file', file)
  formData.append(
    'upload_preset',
    UPLOAD_PRESET
  )

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CloudName}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )

  const data = await response.json()

  if (!response.ok) {
  throw new Error(
    data?.error?.message ??
    'Failed to upload image'
  )
  }

  return data
}