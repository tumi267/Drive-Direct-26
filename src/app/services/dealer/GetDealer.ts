export async function getDealerUser() {
    const response = await fetch('/api/dealer/user')
    const data = await response.json()
    if (!response.ok) {
      throw new Error(
        data.message ??
          'Failed to load user'
      )
    }
    return data
  }


  export async function getPaginatedDealersUser(
    id: string
  ) {
    const response = await fetch('/api/dealer/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:id}),
    })
  
    const result = await response.json()
  
    if (!response.ok) {
      console.log(result.message)
      throw new Error(
        result.message ??
          'Failed to create vehicle'
      )
    }
  
    return result
  }
