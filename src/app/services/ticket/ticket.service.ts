import { CreateTicketRequest } from "@/app/types/ticket"

export async function createticket(ticket: CreateTicketRequest) {
  
    const res =await fetch('/api/ticket/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ticket}),
      })
      const data = await res.json()
      
    if (res.status==500) {
    throw new Error(data.message ??'Failed to create ticket')
    }
  return data
}