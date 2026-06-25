export async function GetvehilceImage(id:string) {
    const response = await fetch(`/api/image/get/${id}`)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(
        data.message ??
          'Failed to load images'
      )
    }
    return data
  }