'use client'

import { useEffect, useState } from 'react'
import { getDealerTickets } from '../services/ticket/tickets.get'

export default function useTickets() {
  const [tickets, setTickets] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page,setpage]=useState(1)
  const [total,setTotalPages]=useState(0)
  useEffect(() => {
    const loadTickets = async () => {
      try {
        setLoading(true)
        setError('')
  
        const data = await getDealerTickets(page)
  
        setTickets(data.tickets)
        setTotalPages(data.pagination.pages)
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
  }, [page])

  return { tickets,loading,error,total,page,setpage}
}