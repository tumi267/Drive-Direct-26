import { getPaginatedDealersUser } from '@/app/libs/crud/dealer/dealer.get'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const body = await req.json()
    const {id}=body
  try {

    const dealers =await getPaginatedDealersUser(id)
    if (!dealers) {
      return NextResponse.json(
        { message: 'Dealers not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(dealers)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: 'Server Error' },
      { status: 500 }
    )
  }
}