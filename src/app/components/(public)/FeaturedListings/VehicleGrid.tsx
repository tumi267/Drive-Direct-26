// VehicleGrid.tsx
import { Vehicle } from '@/app/types/vehicle'
import VehicleCard from './VehicleCrad'

interface Props {
  vehicles: Vehicle[]
}

export default function VehicleGrid({ vehicles }: Props) {
  if (vehicles.length === 0) {
    return <h2>No cars to show</h2>
  }

  return (
    <div className='grid grid-cols-4 gap-[1em] pl-[1em] pr-[1em]'>
      {vehicles.map(vehicle => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
    </div>
  )
}