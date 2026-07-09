import ManageDealer from '@/app/components/dealer/ManageDealer/ManageDealer'
import { getPaginatedDealersUser } from '@/app/libs/crud/dealer/dealer.get'
import React from 'react'

function page() {

  return (
    <div><ManageDealer/></div>
  )
}

export default page