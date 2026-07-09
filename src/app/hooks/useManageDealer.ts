'use client'

import { useEffect, useState } from 'react'
import { getPaginatedDealersUser } from '../services/dealer/GetDealer'
import { useDealerStore } from '../store/dealerStore'
import { DealerUser } from '@prisma/client'

export default function useManageDealer() {
  const { dealer } = useDealerStore()
  const [users, setUsers] = useState<DealerUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
   
    if (!dealer?.dealer?.id) return
    const loadUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getPaginatedDealersUser(
          dealer.dealer.id
        )
        setUsers(data.users)
      } catch (err) {
        console.error(err)
        setError('Looks like something went wrong.')
      } finally {
        setLoading(false)
      }
    }
    loadUsers()
  }, [dealer])

  return {users,loading,error,}
}