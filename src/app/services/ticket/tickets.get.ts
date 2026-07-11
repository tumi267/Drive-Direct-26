export async function getDealerTickets(
    page:number,
    limit = 10
  ) {
    const res = await fetch('/api/ticket/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page,
        limit,
      }),
    })
  
    const data = await res.json()
  
    if (!res.ok) {
      throw new Error(
        data.message ?? 'Failed to load tickets.'
      )
    }
  
    return data
  }