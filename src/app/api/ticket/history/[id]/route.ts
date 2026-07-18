import { getTicketHistory } from '@/app/libs/crud/tickets/ticket.get'
import { NextResponse } from 'next/server'

export async function GET(req: Request,{params,}: {
    params: {
      id: string
    }}) {
  try {
    const data = await getTicketHistory(params.id)
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Failed to load histroy',
      },
      {
        status: 500,
      }
    )
  }
}