'use client'

import { useEffect, useState } from 'react'
import { getDealerTickets } from '../services/ticket/tickets.get'

export default function useTickets() {
  const [tickets, setTickets] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const data = await getDealerTickets()

        setTickets(data.tickets)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Unable to load tickets.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadTickets()
  }, [])

  return { tickets,loading,error,}
}