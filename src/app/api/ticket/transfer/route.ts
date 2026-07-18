import { transferTicket } from "@/app/libs/crud/tickets/ticket.create"
import { NextRequest, NextResponse } from "next/server"


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const ticket = await transferTicket(body)

    return NextResponse.json(ticket)
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    )
  }
}