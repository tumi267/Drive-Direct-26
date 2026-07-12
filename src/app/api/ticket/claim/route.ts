// src/app/api/ticket/claim/route.ts

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

import { claimTicket } from '@/app/libs/crud/tickets/ticket.update'
import { getDealerUserByClerkId } from '@/app/libs/crud/dealer/dealer.create'

export async function POST(req: Request) {
  try {

    const { ticketId } = await req.json()

    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        {
          message: 'Unauthorised',
        },
        {
          status: 401,
        }
      )
    }

    const dealerUser = await getDealerUserByClerkId(userId)

    if (!dealerUser) {
      return NextResponse.json(
        {
          message: 'Dealer user not found.',
        },
        {
          status: 404,
        }
      )
    }

    const ticket = await claimTicket(ticketId, dealerUser.id)

    return NextResponse.json({
      success: true,
      ticket,
    })

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Unable to claim ticket.',
      },
      {
        status: 500,
      }
    )

  }
}