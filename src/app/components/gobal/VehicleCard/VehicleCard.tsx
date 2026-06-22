import { Vehicle } from '@/app/types/vehicle'

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


    </div>
  )
}

export default VehicleCard