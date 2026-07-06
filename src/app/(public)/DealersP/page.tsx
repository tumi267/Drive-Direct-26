import DealerGrid from '@/app/components/(public)/DealerGrid/DealerGrid'
import Pagination from '@/app/components/gobal/Pagination/Pagination'
import { getPaginatedDealers } from '@/app/libs/crud/dealer/dealer.get'
import React from 'react'

interface Props {
  searchParams: {
    page?: string
  }
}

async function Page({ searchParams }: Props) {
  const filters = {
    page: Number(searchParams.page ?? 1),
    limit: 12,
  }

  const {dealers,currentPage,totalPages,total} = await getPaginatedDealers(filters)

  return (
    <div>
      <DealerGrid
      dealers={dealers}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        path="/DealersP"
      />
    </div>
  )
}

export default Page