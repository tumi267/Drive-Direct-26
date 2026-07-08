'use client'

import { useEffect } from 'react'
import { useDealerStore } from '../store/dealerStore'
import { getDealerUser } from '../services/dealer/GetDealer'

export default function useDealerLogin() {
  const {dealer,setDealer,clearDealer,} = useDealerStore()
  useEffect(() => {
    const loadDealer = async () => {
      try {
        const data = await getDealerUser()
        setDealer(data)
      } catch (error) {
        console.error(error)
      }
    }
    if (dealer){return}
    else{
        loadDealer()
    }
  }, [dealer])
  const isLoggedIn = dealer !== null

  const isOwner =dealer?.role === 'OWNER'

  const isManager =dealer?.role === 'MANAGER'

  const isSales =dealer?.role === 'SALES'

  const canManageUsers =isOwner || isManager

  const canDeleteVehicles =isOwner || isManager

  return {dealer,isLoggedIn,isOwner,isManager,isSales,canManageUsers,canDeleteVehicles,setDealer,clearDealer}
}