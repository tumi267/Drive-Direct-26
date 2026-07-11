import VehicleDescription from '@/app/components/(public)/vehicle/VehicleDescription/VehicleDescription'
import VehicleGallery from '@/app/components/(public)/vehicle/VehicleGallery/VehicleGallery'
import VehicleSpecifications from '@/app/components/(public)/vehicle/VehicleSpecifications/VehicleSpecifications'
import VehicleSummary from '@/app/components/(public)/vehicle/VehicleSummary/VehicleSummary'
import { getVehicleByIdwithimages } from '@/app/libs/crud/vehicle/vehicle.create'

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  try {
    const vehicle = await getVehicleByIdwithimages(params.id)

  if (!vehicle) {
    return <div>Vehicle not found.</div>
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <VehicleGallery images={vehicle.images?? []} />

        <div className="space-y-8">
          <VehicleSummary vehicle={vehicle} />
          <VehicleSpecifications vehicle={vehicle} />
        </div>
      </div>

      <VehicleDescription
        description={vehicle.description}
      />
    </div>
  )
  } catch (error) {
    return <div>opps looks like something went wrong</div>
  }
  
}