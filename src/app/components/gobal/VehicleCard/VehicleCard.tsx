import { Vehicle } from '@/app/types/vehicle'
import CompareButton from '../../(public)/Compare/CompareButton'
import PriorityBadge from './PriorityBadge'

interface Props {
  vehicle: Vehicle
  prioritylist:any
}

function VehicleCard({
  vehicle,
  prioritylist
}: Props) {
  const isPriority = prioritylist.ispriority.some((p: { vehicleId: string })=>p.vehicleId === vehicle.id)
  // console.log(isPriority )
  return (
    <div className="border rounded p-4">
      {isPriority&&<PriorityBadge/>}
      
      <h2 className="font-bold">
        {vehicle.year} {vehicle.make}{' '}
        {vehicle.model}
      </h2>

      <p>{vehicle.variant}</p>

      <p>
        R
        {Number(
          vehicle.price
        ).toLocaleString()}
      </p>
      <CompareButton
      vehicle={vehicle}
      />
    </div>
  )
}

export default VehicleCard