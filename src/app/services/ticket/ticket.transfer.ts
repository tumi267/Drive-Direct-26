import { TransferTicketRequest } from "@/app/types/ticket"

export async function transferTicketService(
  request: TransferTicketRequest
) {
  const res = await fetch("/api/ticket/transfer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message)
  }

  return data
}