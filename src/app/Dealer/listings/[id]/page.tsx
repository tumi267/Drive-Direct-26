import EditVehicleForm from '@/app/components/dealer/CreateVehicle/EditVehicleForm'
import UploadImage from '@/app/components/dealer/CreateVehicle/UploadImage'
import PayFastButton from '@/app/components/dealer/PayFastButton/PayFastButton'
import { getVehicleById } from '@/app/libs/crud/vehicle/vehicle.create'
import React from 'react'
export const dynamic = 'force-dynamic'
async function page({params,}: {params: { id: string }}) {
  const vehicle = await getVehicleById(params.id)
  if (!vehicle) {
    return (
      <div>
        Vehicle not found
      </div>
    )
  }
  const formattedVehicle = {
    ...vehicle,
    price: Number(vehicle.price),
    createdAt: vehicle.createdAt.toISOString(),
    updatedAt: vehicle.updatedAt.toISOString(),
  }
  return (
    <div>
    <PayFastButton
    dealerId={vehicle.dealerId}
    vehicleId={vehicle.id}
    days={7}
    />
    <h1 className="text-2xl font-bold">
      Edit Vehicle
    </h1>
    <EditVehicleForm
    vehicle={formattedVehicle}
    />
    <UploadImage 
      vId={params.id}
      // images=vehicle.images
      />
  </div>
  )
}

export default page