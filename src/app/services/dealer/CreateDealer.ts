import { DealerOnboardFormData } from "@/app/libs/signup/types"

export async function createDealer(
  data: DealerOnboardFormData
) {
  const response = await fetch('/api/onboarding/dealer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(
       'Failed to create dealer account'
    )
  }

  return result
}