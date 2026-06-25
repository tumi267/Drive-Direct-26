import { NextResponse } from 'next/server'
import { uploadImageToCloudinary } from '@/app/libs/media/cloudinary'
import { auth } from '@clerk/nextjs/server'
import { getDealerUserByClerkId } from '@/app/libs/crud/dealer/dealer.create'
import { createVehicleImages } from '@/app/libs/crud/vehicle/image.create'
export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    const dealer =await getDealerUserByClerkId(userId)
    if (!dealer) {
      return NextResponse.json(
        { message: 'Dealer not found' },
        { status: 404 }
      )
    }
    const dealerId=dealer.dealer.id
    const formData = await req.formData()
    const file = formData.get('file') as Blob | null
    const vID = formData.get('vID') as string | null
    const position = Number(formData.get('position'))
      if (!file) {
      return NextResponse.json(
      { message: 'No file provided' },
      { status: 400 }
      )
    }
    if (!vID) {
      return NextResponse.json(
        { message: 'Vehicle ID missing' },
        { status: 400 }
      )
    }
    const result = await uploadImageToCloudinary(file,dealerId,vID)
    
    createVehicleImages([{vehicleId: vID,url: result.secure_url,publicId: result.public_id,position}])
    return NextResponse.json({
      url: result.secure_url,
      publicId: result.public_id,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: 'Upload failed' },
      { status: 500 }
    )
  }
}