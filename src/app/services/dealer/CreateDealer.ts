import { DealerOnboardFormData } from "@/app/libs/signup/types"
import { AddUserFormData } from "@/app/types/adddealer"

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

export async function createDealerUser(
  formData: AddUserFormData
) {
  const response = await fetch(
    '/api/onboadring/dealeruser',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  )
  const data = await response.json()
  if (!response.ok) {
    throw new Error(
      data.message ??
        'Failed to create dealer user.'
    )
  }
  return data
}