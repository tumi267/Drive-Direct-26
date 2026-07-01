import { Vehicle } from '@/app/types/vehicle'

interface Props {
  vehicle: Vehicle
}

export default function VehicleSpecifications({
  vehicle,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Specifications
      </h2>

      <table className="w-full">

        <tbody>

          <tr>
            <td>Make</td>
            <td>{vehicle.make}</td>
          </tr>

          <tr>
            <td>Model</td>
            <td>{vehicle.model}</td>
          </tr>

          <tr>
            <td>Variant</td>
            <td>{vehicle.variant}</td>
          </tr>

          <tr>
            <td>Year</td>
            <td>{vehicle.year}</td>
          </tr>

          <tr>
            <td>Mileage</td>
            <td>{vehicle.mileage.toLocaleString()} km</td>
          </tr>

          <tr>
            <td>Fuel Type</td>
            <td>{vehicle.fuelType}</td>
          </tr>

          <tr>
            <td>Transmission</td>
            <td>{vehicle.transmission}</td>
          </tr>

          <tr>
            <td>Body Type</td>
            <td>{vehicle.bodyType}</td>
          </tr>

          <tr>
            <td>Colour</td>
            <td>{vehicle.colour}</td>
          </tr>

        </tbody>

      </table>

    </div>
  )
}