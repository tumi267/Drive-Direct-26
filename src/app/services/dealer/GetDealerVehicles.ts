// services/vehicle/GetDealerVehicles.ts

export async function getDealerVehicles() {
    const response = await fetch('/api/dealer/vehicle')
    const data = await response.json()
    if (!response.ok) {
      throw new Error(
        data.message ??
          'Failed to load vehicles'
      )
    }
    return data
  }