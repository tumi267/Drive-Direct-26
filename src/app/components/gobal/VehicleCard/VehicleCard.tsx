import { Vehicle } from '@/app/types/vehicle'
import CompareButton from '../../(public)/Compare/CompareButton'

interface Props {
  vehicle: Vehicle
}

function VehicleCard({
  vehicle,
}: Props) {
  return (
    <div className="border rounded p-4">
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