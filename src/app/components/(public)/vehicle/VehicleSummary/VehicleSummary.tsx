import { Vehicle } from '@/app/types/vehicle'

interface Props {
  vehicle: Vehicle
}

export default function VehicleSummary({
  vehicle,
}: Props) {
  return (
    <div className="space-y-4">

      <h1 className="text-4xl font-bold">
        {vehicle.year} {vehicle.make} {vehicle.model}
      </h1>

      <h2 className="text-xl text-gray-600">
        {vehicle.variant}
      </h2>

      <p className="text-3xl font-bold text-blue-600">
        R{vehicle.price.toLocaleString()}
      </p>

      <div className="grid grid-cols-2 gap-4 text-gray-700">

        <div>
          <strong>Mileage</strong>
          <p>{vehicle.mileage.toLocaleString()} km</p>
        </div>

        <div>
          <strong>Fuel</strong>
          <p>{vehicle.fuelType}</p>
        </div>

        <div>
          <strong>Transmission</strong>
          <p>{vehicle.transmission}</p>
        </div>

        <div>
          <strong>Colour</strong>
          <p>{vehicle.colour}</p>
        </div>

      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
        Enquire
      </button>

    </div>
  )
}