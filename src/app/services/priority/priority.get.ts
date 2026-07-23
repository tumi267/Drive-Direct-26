  export async function getPriority() {
    try {
      const response = await fetch("/api/priority/get", )
      const result = await response.json()
      if (!response.ok) {
        throw new Error(
          result.message ?? "Failed to create payment."
        )
      }
      return result
    } catch (error) {
      console.error(error)
      throw new Error(
        "Unable to start PayFast payment."
      )
    }
  }