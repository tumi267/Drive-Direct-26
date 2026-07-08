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