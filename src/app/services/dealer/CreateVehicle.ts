import { CreateVehicleFormData } from "@/app/types/vehicle"

export async function createVehicle(
  data: CreateVehicleFormData
) {
  const response = await fetch('/api/vehicle/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
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