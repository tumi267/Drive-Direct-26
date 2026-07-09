import { getDealerUserByClerkId } from '@/app/libs/crud/dealer/dealer.create'
import { createDealerUser } from '@/app/libs/crud/dealer/dealeruser.create'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    const currentDealerUser =await getDealerUserByClerkId(userId)

    if (!currentDealerUser) {
      return NextResponse.json(
        { message: 'Dealer user not found' },
        { status: 404 }
      )
    }
    if (currentDealerUser.role !== 'OWNER' &&currentDealerUser.role !== 'MANAGER') {
      return NextResponse.json(
        { message: 'Forbidden' },
        { status: 403 }
      )
    }
    const body = await req.json()
    const {email,firstName,lastName,role,password} = body
    const client = await clerkClient()
    const clerkUser =await client.users.createUser({emailAddress: [email],firstName,lastName,password})
    await createDealerUser({clerkId: clerkUser.id,dealerId: currentDealerUser.dealerId,firstName,lastName,role})
    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error('CREATE_DEALER_ERROR', error)
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