import DealerHero from '@/app/components/(public)/DealerHero/DealerHero'
import VehicleGrid from '@/app/components/(public)/FeaturedListings/VehicleGrid'
import Pagination from '@/app/components/gobal/Pagination/Pagination'
import { getDealerById } from '@/app/libs/crud/dealer/dealer.get'
import { getPaginatedVehicles } from '@/app/libs/crud/vehicle/vehicle.get'

interface Props {
  params: {
    id: string
  }
  searchParams: {
    page?: string
  }
}

export default async function Page({
  params,
  searchParams,
}: Props) {
  const dealer = await getDealerById(params.id)

  if (!dealer) {
    return <div>Dealer not found.</div>
  }

  const {vehicles,currentPage,totalPages} = await getPaginatedVehicles({dealerId: dealer.id,page: Number(searchParams.page ?? 1),limit: 12,})

  return (
    <div className="container mx-auto py-8 space-y-10">

      <DealerHero dealer={dealer} />

      <VehicleGrid
        vehicles={vehicles}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        path={`/DealersP/${dealer.id}`}
      />

    </div>
  )
}