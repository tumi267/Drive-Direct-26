// app/api/dealer/vehicles/route.ts

import { getDealerUserByClerkId } from '@/app/libs/crud/dealer/dealer.create'
import { getVehiclesByDealer } from '@/app/libs/crud/vehicle/vehicle.get'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
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
   
    const vehicles=await getVehiclesByDealer(dealer.dealer.id)
   
    return NextResponse.json(vehicles)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: 'Server Error' },
      { status: 500 }
    )
  }
}