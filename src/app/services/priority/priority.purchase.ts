interface PurchasePriorityRequest {
    dealerId: string
    vehicleId: string
    days: number
  }
  
  export async function purchasePriority(
    data: PurchasePriorityRequest
  ) {
    try {
      const response = await fetch("/api/payfast/priority", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  
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