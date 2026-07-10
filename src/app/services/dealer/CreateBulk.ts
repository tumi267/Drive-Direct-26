import { CsvVehicle } from "@/app/types/csv";

export async function uploadbulk(rows:CsvVehicle[]) {
  console.log(rows)
    const res =await fetch('/api/vehicle/createbulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rows),
      })
      const data = await res.json()
      console.log(data)
    if (!res.ok) {
    throw new Error(data.message ??'Failed to upload vehicles')
    }
  return data
}