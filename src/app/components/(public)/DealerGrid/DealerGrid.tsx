import React from 'react'
import { Dealer } from '@/app/types/dealer'
import DealerCard from '../DealerCard/DealerCard'

interface Props {
  dealers: Dealer[]
}

function DealerGrid({ dealers }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dealers.map((dealer) => (
        <DealerCard
          key={dealer.id}
          dealer={dealer}
        />
      ))}
    </div>
  )
}

export default DealerGrid