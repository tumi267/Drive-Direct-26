import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

import { createManyVehicles } from '@/app/libs/crud/vehicle/vehicle.create'
import { getDealerUserByClerkId } from '@/app/libs/crud/dealer/dealer.create'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        {message: 'Unauthorized'},
        {
          status: 401,
        }
      )
    }

    const dealerUser =await getDealerUserByClerkId(userId)

    if (!dealerUser) {
      return NextResponse.json(
        {message:'Dealer user not found'},
        {
          status: 404,
        }
      )
    }
    const body=await req.json()

    const rows = body

    if (
      !rows ||
      !Array.isArray(rows) ||
      rows.length === 0
    ) {
      return NextResponse.json(
        {message:'No vehicles supplied'},
        {
          status: 400,
        }
      )
    }

    const vehicles = rows.map(
      (vehicle: any) => ({
        dealerId:
          dealerUser.dealer.id,
        make: vehicle.make,
        model: vehicle.model,
        variant: vehicle.variant,
        year: Number(vehicle.year),
        mileage: Number(
          vehicle.mileage
        ),
        price: Number(vehicle.price),
        fuelType:
          vehicle.fuelType,
        transmission:
          vehicle.transmission,
        bodyType:
          vehicle.bodyType,
        colour: vehicle.colour,
        description:
          vehicle.description,
      })
    )
    const result =await createManyVehicles(vehicles)
    return NextResponse.json({
      success: true,
      imported: result.count,
    })
  } catch (error) {
    console.error('CREATE_VEHICLE_ERROR',error)
    return NextResponse.json(
      {
        message:
          'Internal Server Error',
      },
      {
        status: 500,
      }
    )
  }
}