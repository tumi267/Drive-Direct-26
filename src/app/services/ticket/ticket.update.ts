// services/ticket/claimTicket.ts

export async function claimTicket(
    ticketId: string
  ) {
    const res = await fetch('/api/ticket/claim',
      {
        method: 'POST',
  
        headers: {
          'Content-Type':
            'application/json',
        },
  
        body: JSON.stringify({
          ticketId,
        }),
      }
    )
    const data = await res.json()
    if (!res.ok) {
      throw new Error(
        data.message ??
          'Unable to claim ticket.'
      )
    }
    return data
  }