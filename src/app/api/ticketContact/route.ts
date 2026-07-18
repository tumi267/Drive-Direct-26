import { createTicketInteraction } from "@/app/libs/crud/tickets/ticket.create";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const interaction = await createTicketInteraction(data);

    return NextResponse.json(interaction);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Failed to create interaction",
      },
      { status: 500 }
    );
  }
}