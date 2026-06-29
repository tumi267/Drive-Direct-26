import { getVehicleImages } from '@/app/libs/crud/vehicle/image.create'
import { NextResponse } from 'next/server'

export async function GET(req: Request,{params,}: {
    params: {
      id: string
    }}) {
  try {
    const images = await getVehicleImages(params.id)
    return NextResponse.json(images)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Failed to load images',
      },
      {
        status: 500,
      }
    )
  }
}