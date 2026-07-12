'use client'

import { useState } from 'react'
import { claimTicket } from '../services/ticket/ticket.update'

export default function useClaimTicket() {

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState<string | null>(null)

  const claim = async (
    ticketId: string
  ) => {

    try {
      setLoading(true)
      setError(null)
      await claimTicket(ticketId)
      alert('Ticket claimed.')
      window.location.reload()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong.'
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    claim,
  }

}