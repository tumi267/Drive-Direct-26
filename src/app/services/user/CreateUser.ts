import { UserOnboardFormData } from "@/app/libs/signup/types"

export async function createUser(
  data: UserOnboardFormData
) {
  const response = await fetch('/api/onboarding/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(
       'Failed to create user account'
    )
  }

  return result
}