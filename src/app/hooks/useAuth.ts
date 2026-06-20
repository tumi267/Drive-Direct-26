'use client'
import { useAuth } from '@clerk/nextjs'

export default function useClerkId() {
  const { isLoaded, userId } = useAuth()

  // If Clerk is still loading, return null
  if (!isLoaded) {
    return null
  }

  // Once loaded, return the user ID string
  return userId
}