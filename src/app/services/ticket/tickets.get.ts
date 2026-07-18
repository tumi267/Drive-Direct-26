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

export async function getticketHistorybyid (id:string){
  try {
  const response=await fetch(`/api/ticket/history/${id}`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error(
      data.message ??
        'Failed to load history'
    )
  }
  return data
  } catch (error) {
    console.log(error)

  }
}