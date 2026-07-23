import { CampaignFormData } from "@/app/types/bannerform"

export async function createBanner(data:CampaignFormData ) {
  const response = await fetch('/api/Campaign', {
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