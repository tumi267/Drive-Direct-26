import { getDealerUserByClerkId } from '@/app/libs/crud/dealer/dealer.create'
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
    return NextResponse.json(dealer)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: 'Server Error' },
      { status: 500 }
    )
  }
}