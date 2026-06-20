'use client'
import React from 'react'
import useClerkId from '@/app/hooks/useAuth'
import DealerForm from './DealerForm'
function OnBoardDealer() {
    const userId = useClerkId() 
  return (
    <div>
        <p>User ID: {<DealerForm/> || 'Loading...'}</p>
        </div>
  )
}

export default OnBoardDealer