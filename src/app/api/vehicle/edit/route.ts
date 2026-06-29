import { NextResponse } from 'next/server'

import { auth } from '@clerk/nextjs/server'

import { updateVehicle } from '@/app/libs/crud/vehicle/vehicle.create'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { userId } = await auth()
    if(!userId)return
  
    const {id,dealerId,make,model,variant,year,mileage,price,fuelType,transmission,bodyType,colour,description,createdAt,updatedAt,status} = body

    const vehicle = await updateVehicle({id,dealerId,make,model,variant,year,mileage,price,fuelType,transmission,bodyType,colour,description,status,createdAt,updatedAt})
    return NextResponse.json({success: true,vehicle})
  } catch (error) {
    console.error(
      'CREATE_VEHICLE_ERROR',
      error
    )
    return NextResponse.json(
      {
        message: 'Internal Server Error',
      },
      {
        status: 500,
      }
    )
  }
}