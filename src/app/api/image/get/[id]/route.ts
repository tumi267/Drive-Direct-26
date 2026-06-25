import { getVehicleImages } from '@/app/libs/crud/vehicle/image.create'
import { NextResponse } from 'next/server'

export async function GET(req: Request,{params,}: {
    params: {
      vehicleId: string
    }}) {
  try {
    const images = await getVehicleImages(
      params.vehicleId
    )
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