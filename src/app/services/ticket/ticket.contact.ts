import { TicketNotes } from "@/app/types/ticket";

export async function contactTicket(
  interaction: TicketNotes
) {
  const res = await fetch("/api/ticketContact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(interaction),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message ?? "Failed to create interaction"
    );
  }

  return data;
}