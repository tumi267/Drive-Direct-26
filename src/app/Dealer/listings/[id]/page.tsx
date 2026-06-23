import UploadImage from '@/app/components/dealer/CreateVehicle/UploadImage'
import React from 'react'

function page({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div>
    <h1 className="text-2xl font-bold">
      Edit Vehicle
     
      <UploadImage 
      vId={params.id}
      />
    </h1>
  </div>
  )
}

export default page