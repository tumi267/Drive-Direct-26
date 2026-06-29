import { Vehicle } from "@/app/types/vehicle"

export async function editVehicle(
  data: Vehicle
) {
  const response = await fetch('/api/vehicle/edit', {
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
        'Failed to edit vehicle'
    )
  }

  return result
}