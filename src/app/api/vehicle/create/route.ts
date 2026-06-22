// src/app/api/vehicle/create/route.ts

import { NextResponse } from 'next/server'
import { createVehicle } from '@/app/libs/crud/vehicle/vehicle.create'
import { auth } from '@clerk/nextjs/server'
import { getDealerUserByClerkId } from '@/app/libs/crud/dealer/dealer.create'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { userId } = await auth()
    if(!userId)return
    const dealer =await getDealerUserByClerkId(userId)
    const {make,model,variant,year,mileage,price,fuelType,transmission,bodyType,colour,description} = body

    if (!dealer ||!make ||!model ||!year ||!price) {
      return NextResponse.json(
        {
          message: 'Missing required fields',
        },
        {
          status: 400,
        }
      )
    }
    const dealerId=dealer.dealer.id
    
    const vehicle = await createVehicle({dealerId,make,model,variant,year,mileage,price,fuelType,transmission,bodyType,colour,description,})
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