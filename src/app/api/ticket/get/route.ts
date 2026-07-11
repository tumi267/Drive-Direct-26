import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

import { getDealerUserByClerkId } from '@/app/libs/crud/dealer/dealer.create'
import { getTicketPaginated } from '@/app/libs/crud/tickets/ticket.get'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const dealerUser = await getDealerUserByClerkId(userId)

    if (!dealerUser) {
      return NextResponse.json(
        { message: 'Dealer not found' },
        { status: 404 }
      )
    }

    const body = await req.json()

    const {
      page = 1,
      limit = 10,
    } = body

    const tickets = await getTicketPaginated({
      page,
      limit,
      dealerId: dealerUser.dealerId,
    })

    return NextResponse.json(tickets)
  } catch (error) {
    console.error('GET_TICKETS_ERROR', error)

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