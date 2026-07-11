import { createTicket } from '@/app/libs/crud/tickets/ticket.create'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
            console.log(body)
    const ticket =  await createTicket({
        type: body.ticket.type,
        vehicleId: body.ticket.vehicleId,
        dealerId: body.ticket.dealerId,
        firstName: body.ticket.customer.firstName,
        lastName: body.ticket.customer.lastName,
        email: body.ticket.customer.email,
        phone: body.ticket.customer.phone,
        message: body.ticket.message,
      })

    return NextResponse.json(ticket)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: 'Failed to create ticket',
      },
      {
        status: 500,
      }
    )
  }
}